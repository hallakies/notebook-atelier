import {
  createAdminSupabaseClient,
  createReadOnlySupabaseClient,
} from "@/lib/supabase/server";

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

type RecommendationBundleRow = {
  profile_id: string;
  profile_key: string;
  profile_title: string;
  profile_summary: string | null;
  link_id: string | null;
  slot: number | null;
  rationale: string | null;
  product_id: string | null;
  product_title: string | null;
  deeplink: string | null;
  image_url: string | null;
  brand: string | null;
  price: number | null;
  currency: string | null;
  availability: string | null;
  synced_at: string | null;
};

export async function getRecommendationProductBundle(
  profileKey: string,
): Promise<RecommendationProductBundle | null> {
  let supabase;

  try {
    supabase = createAdminSupabaseClient();
  } catch {
    supabase = createReadOnlySupabaseClient();
  }

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
    .rpc("get_recommendation_product_bundle", {
      profile_key: profileKey,
    })
    .returns<RecommendationBundleRow[]>();

  if (linksError) {
    throw linksError;
  }

  const products = (links ?? [])
    .filter((link) => link.link_id && link.product_id && link.product_title && link.deeplink)
    .map((link) => ({
      linkId: link.link_id!,
      slot: link.slot ?? 0,
      rationale: link.rationale,
      productId: link.product_id!,
      title: link.product_title!,
      deeplink: link.deeplink!,
      imageUrl: link.image_url,
      brand: link.brand,
      price: link.price,
      currency: link.currency ?? "KRW",
      availability: link.availability,
      syncedAt: link.synced_at ?? new Date(0).toISOString(),
    }));

  return {
    profile,
    products,
  };
}
