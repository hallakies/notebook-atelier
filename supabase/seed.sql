insert into public.recommendation_profiles (key, title, summary)
values
  ('air-13-m5', 'MacBook Air 13', '가볍고 오래가는 일상용 추천'),
  ('air-15-m5', 'MacBook Air 15', '넓은 화면이 필요한 균형형 추천'),
  ('pro-14-m5', 'MacBook Pro 14', '휴대성과 Pro 계열 안정감을 동시에 원하는 추천'),
  ('pro-14-m5-pro', 'MacBook Pro 14 M5 Pro', '개발과 크리에이티브 작업이 함께 무거운 추천'),
  ('pro-16-m5-max', 'MacBook Pro 16 M5 Max', '최상위 작업 성능이 필요한 추천')
on conflict (key) do update
set
  title = excluded.title,
  summary = excluded.summary,
  updated_at = timezone('utc', now());
