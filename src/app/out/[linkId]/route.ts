import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{
    linkId: string;
  }>;
};

type LinkedProductRow = {
  id: string;
  recommendation_profile_id: string;
  coupang_product_id: string;
  coupang_products: {
    deeplink: string;
  } | null;
};

export async function GET(request: Request, context: RouteContext) {
  const { linkId } = await context.params;
  const supabase = createAdminSupabaseClient();

  const { data, error } = await supabase
    .from("recommendation_product_links")
    .select(
      `
        id,
        recommendation_profile_id,
        coupang_product_id,
        coupang_products (
          deeplink
        )
      `,
    )
    .eq("id", linkId)
    .eq("is_active", true)
    .maybeSingle<LinkedProductRow>();

  if (error) {
    console.error("Failed to resolve affiliate link", error);
    return NextResponse.redirect(new URL("/#finder", request.url), 307);
  }

  if (!data?.coupang_products?.deeplink) {
    return NextResponse.redirect(new URL("/#finder", request.url), 307);
  }

  const userAgent = request.headers.get("user-agent");
  const referrer = request.headers.get("referer");

  const cookieHeader = request.headers.get("cookie");
  const sessionId = cookieHeader
    ?.split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("na_session="))
    ?.split("=")[1];

  const { error: clickError } = await supabase.from("affiliate_clicks").insert({
    source_type: "recommendation",
    source_id: data.recommendation_profile_id,
    coupang_product_id: data.coupang_product_id,
    destination_url: data.coupang_products.deeplink,
    session_id: sessionId,
    user_agent: userAgent,
    referrer,
  });

  if (clickError) {
    console.error("Failed to log affiliate click", clickError);
  }

  return NextResponse.redirect(data.coupang_products.deeplink, 307);
}
