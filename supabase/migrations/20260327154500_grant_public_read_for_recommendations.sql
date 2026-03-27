grant usage on schema public to anon;
grant usage on schema public to authenticated;

grant select on table public.recommendation_profiles to anon;
grant select on table public.recommendation_profiles to authenticated;

grant select on table public.coupang_products to anon;
grant select on table public.coupang_products to authenticated;

grant select on table public.recommendation_product_links to anon;
grant select on table public.recommendation_product_links to authenticated;
