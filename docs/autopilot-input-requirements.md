# Autopilot Input Requirements

이 문서는 `한 번 시작하면 추가 프롬프트 없이 야간 작업을 계속 진행`하기 위해, 창업자가 로컬에 제공해야 하는 입력을 정리한다.

입력은 두 종류로 나뉜다.

1. 사업 방향과 운영 기준
2. 계정, 토큰, 외부 연동 정보

민감한 값은 Git에 넣지 않는다. `local/` 아래의 무시된 파일에만 둔다.

## Minimum Required Tonight

다음 값은 오늘 밤 자동 실행을 시작하기 전에 필요하다.

- `primary_domain`
  - 현재 서비스 도메인
- `target_market`
  - 예: `KR`
- `primary_offer`
  - 예: `MacBook buying decision tool`
- `instagram_handle`
  - 예: `macbook__boy`
- `brand_tone`
  - 예: `premium`, `calm`, `decisive`
- `must_not_do`
  - 예: `Apple impersonation`, `spam follow/unfollow`, `cheap AI-sounding copy`
- `coupang_ready`
  - 쿠팡 키와 동기화 환경이 준비됐는지
- `supabase_ready`
  - Supabase DB와 키가 준비됐는지
- `vercel_ready`
  - 배포 대상과 환경변수 상태가 준비됐는지

## Strongly Recommended

이 값들이 있으면 자동화 품질이 올라간다.

- `ga4_measurement_id`
- `search_console_site_url`
- `posthog_project_info`
- `preferred_reference_sites`
- `preferred_reference_instagram_accounts`
- `product_priority_rules`
  - 예: `Prefer official-looking listings`, `Prefer Prime-eligible`, `Prefer higher review count`
- `affiliate_disclosure_copy_ko`
- `brand_visual_direction`
  - 예: `Apple-adjacent restraint, not imitation`

## Needed Later For Social Automation

- `meta_app_id`
- `meta_app_secret`
- `instagram_business_account_id`
- `facebook_page_id`
- `long_lived_user_token` or scheduler credentials

## Needed Later For Search And Reporting

- `google_search_console_access`
- `ga4_access`
- `posthog_access`

## Local Files

### Required local file

`local/autopilot/overnight-input.json`

이 파일은 사업 기준과 운영 입력을 담는다.

### Required local secrets file

`local/autopilot/autopilot.secrets.ps1`

이 파일은 계정, 토큰, CLI 환경변수를 담는다.

예:

```powershell
$env:GITHUB_TOKEN = "..."
$env:SUPABASE_ACCESS_TOKEN = "..."
$env:OPENAI_API_KEY = "..."
$env:META_APP_ID = "..."
$env:META_APP_SECRET = "..."
```

`OPENAI_API_KEY`는 Windows `codex exec`가 로그인 세션으로 동작하면 필수는 아니지만, 장기 운영 안정성을 위해 넣는 편이 낫다.

템플릿:

`ops/autopilot/templates/autopilot.secrets.template.ps1`

## Start Command

입력 파일이 준비되면 아래 명령으로 자동 야간 작업을 시작한다.

```powershell
powershell -ExecutionPolicy Bypass -File .\ops\autopilot\launch-overnight-autopilot.ps1 -UseSearch
```

이 스크립트는:

- 입력 파일 검증
- 상태 파일 생성
- 진행 로그 생성
- Codex 비대화 실행 반복
- 각 단계별 로그 저장

까지 처리한다.

중지 명령:

```powershell
powershell -ExecutionPolicy Bypass -File .\ops\autopilot\stop-overnight-autopilot.ps1
```
