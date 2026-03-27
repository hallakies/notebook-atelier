import { NextResponse } from "next/server";
import { getRecommendationProductBundle } from "@/lib/recommendation-products";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{
    profileKey: string;
  }>;
};

export async function GET(_: Request, context: RouteContext) {
  const { profileKey } = await context.params;

  try {
    const bundle = await getRecommendationProductBundle(profileKey);

    if (!bundle) {
      return NextResponse.json(
        { message: "Recommendation profile not found." },
        { status: 404 },
      );
    }

    return NextResponse.json(bundle, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Failed to load recommendation products", error);

    return NextResponse.json(
      { message: "Failed to load recommendation products." },
      { status: 500 },
    );
  }
}
