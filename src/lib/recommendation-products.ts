import { createAdminSupabaseClient } from "@/lib/supabase/server";

export type RecommendationProduct = {
  linkId: string;
  slot: number;
  rationale: string | null;
  productId: string;
  title: string;
  deeplink: string;
  imageUrl: string | null;
  brand: string | null;
  price: number | null;
  currency: string;
  availability: string | null;
  syncedAt: string;
};

export type RecommendationProductBundle = {
  profile: {
    id: string;
    key: string;
    title: string;
    summary: string | null;
  };
  products: RecommendationProduct[];
};

type RecommendationProfileRow = {
  id: string;
  key: string;
  title: string;
  summary: string | null;
};

type RecommendationProductLinkRow = {
  id: string;
  slot: number;
  rationale: string | null;
  recommendation_profile_id: string;
  coupang_products: {
    id: string;
    title: string;
    deeplink: string;
    image_url: string | null;
    brand: string | null;
    price: number | null;
    currency: string;
    availability: string | null;
    synced_at: string;
  } | null;
};

export async function getRecommendationProductBundle(
  profileKey: string,
): Promise<RecommendationProductBundle | null> {
  const supabase = createAdminSupabaseClient();

  const { data: profile, error: profileError } = await supabase
    .from("recommendation_profiles")
    .select("id, key, title, summary")
    .eq("key", profileKey)
    .eq("is_active", true)
    .maybeSingle<RecommendationProfileRow>();

  if (profileError) {
    throw profileError;
  }

  if (!profile) {
    return null;
  }

  const { data: links, error: linksError } = await supabase
    .from("recommendation_product_links")
    .select(
      `
        id,
        slot,
        rationale,
        recommendation_profile_id,
        coupang_products (
          id,
          title,
          deeplink,
          image_url,
          brand,
          price,
          currency,
          availability,
          synced_at
        )
      `,
    )
    .eq("recommendation_profile_id", profile.id)
    .eq("is_active", true)
    .order("slot", { ascending: true })
    .returns<RecommendationProductLinkRow[]>();

  if (linksError) {
    throw linksError;
  }

  const products = (links ?? [])
    .filter((link) => link.coupang_products)
    .map((link) => ({
      linkId: link.id,
      slot: link.slot,
      rationale: link.rationale,
      productId: link.coupang_products!.id,
      title: link.coupang_products!.title,
      deeplink: link.coupang_products!.deeplink,
      imageUrl: link.coupang_products!.image_url,
      brand: link.coupang_products!.brand,
      price: link.coupang_products!.price,
      currency: link.coupang_products!.currency,
      availability: link.coupang_products!.availability,
      syncedAt: link.coupang_products!.synced_at,
    }));

  return {
    profile,
    products,
  };
}
