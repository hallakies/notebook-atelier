create table if not exists public.recommendation_events (
  id uuid primary key default gen_random_uuid(),
  session_id text,
  event_type text not null check (
    event_type in ('started', 'completed', 'refreshed_products')
  ),
  recommendation_profile_id uuid references public.recommendation_profiles(id) on delete set null,
  source_page text not null default '/',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists recommendation_events_type_created_idx
  on public.recommendation_events (event_type, created_at desc);

create index if not exists recommendation_events_profile_created_idx
  on public.recommendation_events (recommendation_profile_id, created_at desc);
