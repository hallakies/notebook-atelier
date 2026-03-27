import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase/server";
import type { Database, Json } from "@/lib/supabase/database";

export const dynamic = "force-dynamic";

type FinderEventPayload = {
  sessionId?: string | null;
  eventType?: string | null;
  recommendationProfileKey?: string | null;
  sourcePage?: string | null;
  metadata?: Record<string, unknown> | null;
};

const allowedEventTypes = new Set(["started", "completed", "refreshed_products"]);

type RecommendationEventInsert =
  Database["public"]["Tables"]["recommendation_events"]["Insert"];
type FinderEventType = RecommendationEventInsert["event_type"];

function isFinderEventType(value: string): value is FinderEventType {
  return value === "started" || value === "completed" || value === "refreshed_products";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FinderEventPayload;

    if (!body.eventType || !allowedEventTypes.has(body.eventType) || !isFinderEventType(body.eventType)) {
      return NextResponse.json({ message: "Invalid event type." }, { status: 400 });
    }

    let recommendationProfileId: string | null = null;

    try {
      const supabase = createAdminSupabaseClient();

      if (body.recommendationProfileKey) {
        const { data: profile } = await supabase
          .from("recommendation_profiles")
          .select("id")
          .eq("key", body.recommendationProfileKey)
          .maybeSingle<{ id: string }>();

        recommendationProfileId = profile?.id ?? null;
      }

      const payload: RecommendationEventInsert = {
        session_id: body.sessionId ?? null,
        event_type: body.eventType,
        recommendation_profile_id: recommendationProfileId,
        source_page: body.sourcePage ?? "/",
        metadata: (body.metadata ?? {}) as Json,
      };

      const { error } = await supabase.from("recommendation_events").insert([payload]);

      if (error) {
        console.error("Failed to insert finder event", error);
        return NextResponse.json({ message: "Failed to record event." }, { status: 500 });
      }
    } catch (error) {
      console.error("Finder event logging skipped", error);
      return NextResponse.json({ ok: false, skipped: true }, { status: 202 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Invalid finder event payload", error);
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }
}
