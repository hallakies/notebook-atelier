import { NextResponse } from "next/server";
import { getMacbookModelById } from "@/lib/macbook-finder";
import { getRecommendationProductBundle } from "@/lib/recommendation-products";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{
    profileKey: string;
  }>;
};

export async function GET(_: Request, context: RouteContext) {
  const { profileKey } = await context.params;
  const fallbackModel = getMacbookModelById(profileKey);

  try {
    const bundle = await getRecommendationProductBundle(profileKey);

    if (!bundle) {
      if (!fallbackModel) {
        return NextResponse.json(
          { message: "Recommendation profile not found." },
          { status: 404 },
        );
      }

      return NextResponse.json(
        {
          profile: {
            id: profileKey,
            key: profileKey,
            title: fallbackModel.title,
            summary: fallbackModel.tagline,
          },
          products: [],
        },
        {
          headers: {
            "Cache-Control": "no-store",
          },
        },
      );
    }

    return NextResponse.json(bundle, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Failed to load recommendation products", error);

    if (fallbackModel) {
      return NextResponse.json(
        {
          profile: {
            id: profileKey,
            key: profileKey,
            title: fallbackModel.title,
            summary: fallbackModel.tagline,
          },
          products: [],
        },
        {
          headers: {
            "Cache-Control": "no-store",
          },
        },
      );
    }

    return NextResponse.json({ message: "Failed to load recommendation products." }, { status: 500 });
  }
}
