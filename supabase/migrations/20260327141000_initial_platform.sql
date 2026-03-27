create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.recommendation_profiles (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  device_family text not null default 'macbook',
  title text not null,
  summary text,
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.coupang_products (
  id uuid primary key default gen_random_uuid(),
  external_product_id text not null unique,
  title text not null,
  deeplink text not null,
  image_url text,
  brand text,
  price integer,
  currency text not null default 'KRW',
  availability text,
  raw_payload jsonb not null default '{}'::jsonb,
  synced_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.recommendation_product_links (
  id uuid primary key default gen_random_uuid(),
  recommendation_profile_id uuid not null references public.recommendation_profiles(id) on delete cascade,
  coupang_product_id uuid not null references public.coupang_products(id) on delete cascade,
  slot integer not null,
  rationale text,
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (recommendation_profile_id, slot),
  unique (recommendation_profile_id, coupang_product_id)
);

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content_md text,
  seo_title text,
  seo_description text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.article_sources (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references public.articles(id) on delete cascade,
  source_name text not null,
  source_url text not null,
  checked_at timestamptz,
  notes text,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.social_posts (
  id uuid primary key default gen_random_uuid(),
  source_article_id uuid references public.articles(id) on delete set null,
  platform text not null default 'instagram',
  format text not null,
  title text,
  caption text,
  asset_manifest jsonb not null default '{}'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'queued', 'published', 'failed')),
  scheduled_for timestamptz,
  published_at timestamptz,
  external_post_id text,
  performance_snapshot jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.affiliate_clicks (
  id uuid primary key default gen_random_uuid(),
  source_type text not null check (source_type in ('recommendation', 'article', 'social')),
  source_id uuid,
  coupang_product_id uuid not null references public.coupang_products(id) on delete cascade,
  destination_url text not null,
  session_id text,
  user_agent text,
  referrer text,
  clicked_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.job_runs (
  id uuid primary key default gen_random_uuid(),
  job_name text not null,
  status text not null check (status in ('queued', 'running', 'succeeded', 'failed')),
  started_at timestamptz not null default timezone('utc', now()),
  ended_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  log_excerpt text
);

create index if not exists recommendation_profiles_key_idx
  on public.recommendation_profiles (key);

create index if not exists coupang_products_synced_at_idx
  on public.coupang_products (synced_at desc);

create index if not exists recommendation_product_links_profile_idx
  on public.recommendation_product_links (recommendation_profile_id, is_active, slot);

create index if not exists articles_status_published_idx
  on public.articles (status, published_at desc);

create index if not exists social_posts_status_scheduled_idx
  on public.social_posts (status, scheduled_for);

create index if not exists affiliate_clicks_source_idx
  on public.affiliate_clicks (source_type, source_id, clicked_at desc);

create index if not exists job_runs_job_name_started_idx
  on public.job_runs (job_name, started_at desc);

drop trigger if exists set_updated_at_recommendation_profiles on public.recommendation_profiles;
create trigger set_updated_at_recommendation_profiles
before update on public.recommendation_profiles
for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at_coupang_products on public.coupang_products;
create trigger set_updated_at_coupang_products
before update on public.coupang_products
for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at_recommendation_product_links on public.recommendation_product_links;
create trigger set_updated_at_recommendation_product_links
before update on public.recommendation_product_links
for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at_articles on public.articles;
create trigger set_updated_at_articles
before update on public.articles
for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at_social_posts on public.social_posts;
create trigger set_updated_at_social_posts
before update on public.social_posts
for each row execute function public.set_updated_at();
