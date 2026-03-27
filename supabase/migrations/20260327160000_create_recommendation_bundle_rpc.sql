create or replace function public.get_recommendation_product_bundle(profile_key text)
returns table (
  profile_id uuid,
  profile_key text,
  profile_title text,
  profile_summary text,
  link_id uuid,
  slot integer,
  rationale text,
  product_id uuid,
  product_title text,
  deeplink text,
  image_url text,
  brand text,
  price integer,
  currency text,
  availability text,
  synced_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select
    rp.id as profile_id,
    rp.key as profile_key,
    rp.title as profile_title,
    rp.summary as profile_summary,
    rpl.id as link_id,
    rpl.slot,
    rpl.rationale,
    cp.id as product_id,
    cp.title as product_title,
    cp.deeplink,
    cp.image_url,
    cp.brand,
    cp.price,
    cp.currency,
    cp.availability,
    cp.synced_at
  from public.recommendation_profiles rp
  left join public.recommendation_product_links rpl
    on rpl.recommendation_profile_id = rp.id
   and rpl.is_active = true
  left join public.coupang_products cp
    on cp.id = rpl.coupang_product_id
  where rp.key = profile_key
    and rp.is_active = true
  order by rpl.slot asc nulls last;
$$;

grant execute on function public.get_recommendation_product_bundle(text) to anon;
grant execute on function public.get_recommendation_product_bundle(text) to authenticated;
