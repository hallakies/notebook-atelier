# Paperclip Company Blueprint

## Goal

`노트북 아틀리에`를 사람이 매번 손으로 돌리는 블로그가 아니라, Paperclip 안에서 역할이 분리된 AI 조직으로 운영한다. 목표는 다음 3가지를 동시에 달성하는 것이다.

1. 한국 검색 결과에서 `맥북 추천`, `맥북 비교`, `맥북 역사`, `최신 맥북` 계열 키워드를 지속적으로 확보한다.
2. 추천 플로우와 기사에서 쿠팡 파트너스 링크 클릭을 발생시켜 수익화한다.
3. 같은 소스 콘텐츠를 `macbook__boy` 인스타그램까지 흘려보내 유입 루프를 만든다.

## Why Paperclip

Paperclip은 이 프로젝트에서 `실행기`보다 `운영 제어판` 역할에 가깝다. 회사 목표, 에이전트 계층, budget, heartbeat, 위임 흐름을 관리하는 데 적합하다. 실제 웹 앱은 Next.js가 맡고, 콘텐츠 저장은 CMS/DB가 맡고, Paperclip은 그 위에서 팀을 운영한다.

권장 역할 구분:

- Paperclip: CEO, 편집국, SEO, 소셜, 커머스 분석 조직 운영
- Next.js: 웹 경험, 추천 플로우, SEO 페이지
- CMS/DB: 기사, 메타데이터, 추천 결과, 제휴 링크 보관
- Meta/예약 도구: 인스타 게시 예약과 리포팅

## Company Goal In Paperclip

회사 goal 예시:

`한국에서 가장 신뢰받는 프리미엄 노트북 추천 미디어를 구축하고, 6개월 안에 월 5만 유기 세션과 월 300건 이상의 제휴 클릭을 만든다.`

핵심 KPI:

- Organic sessions
- Recommendation starts
- Recommendation completion rate
- Affiliate click-through rate
- Article publish cadence
- Instagram saves, profile visits, site taps

## Org Chart

### CEO

- 책임: 전체 우선순위, budget 배분, 팀 간 조정, 주간 KPI 리뷰
- reports: Editorial Director, Growth Lead, Commerce Analyst

### Editorial Director

- 책임: 기사 캘린더, 제품 해설 품질, source 검증, 아카이브 축적
- reports: Research Desk, Review Curator

### Growth Lead

- 책임: SEO 클러스터, 내부 링크 구조, SERP 갭 분석, 배포 일정
- reports: SEO Strategist, Social Editor

### Commerce Analyst

- 책임: 추천 플로우 전환율, CTA 카피, 쿠팡 링크 성과, 상위 전환 페이지 관리

### Research Desk

- 책임: Apple 공식 페이지, 신제품 발표, 가격, 라인업 변동 확인

### Review Curator

- 책임: 유튜브 리뷰 큐레이션, 핵심 문장 추출, 기사 재료 정리

### SEO Strategist

- 책임: 키워드 클러스터, 기사 brief, title/meta/internal linking 계획

### Social Editor

- 책임: 기사 -> 캐러셀/릴스 브리프 변환, 발행 캘린더, 성과 보고

## Recommended Budget

Paperclip은 예산 초과를 기준으로 자동 정지를 걸 수 있으므로 처음부터 agent budget을 쪼개는 편이 좋다.

예시:

- Company total: `$600/month`
- CEO: `$120`
- Editorial Director: `$120`
- Growth Lead: `$120`
- Commerce Analyst: `$80`
- Research Desk: `$60`
- Review Curator: `$40`
- SEO Strategist: `$40`
- Social Editor: `$20`

처음 2주는 output 밀도를 보고 재조정한다. 기사 발행보다 heartbeat만 많아지는 구조는 피해야 한다.

## Heartbeat Design

### Daily

- Research Desk: 라인업, 발표, 가격, 기사 source 확인
- SEO Strategist: 키워드 갭 1개 선정, 새 brief 초안 생성
- Social Editor: 전일 기사에서 인스타 전환 가능한 포맷 추출

### Every Weekday Afternoon

- Editorial Director: 기사 1건 승인 또는 반려
- Growth Lead: 내부 링크/메타데이터/배포 우선순위 조정
- Commerce Analyst: 추천 플로우 성과와 CTA 개선안 제출

### Weekly Board Review

- CEO: KPI 요약
- 각 팀장: 이번 주 성과 3개, 실패 2개, 다음 주 우선순위 3개

## Task Loops

### Loop 1: Search Capture

1. SEO Strategist가 키워드 클러스터 선정
2. Research Desk가 공식 source와 사실 검증
3. Editorial Director가 article brief 확정
4. 기사 발행
5. 내부 링크와 추천 플로우 연결

### Loop 2: Conversion

1. Commerce Analyst가 상위 유입 글과 추천 결과 분석
2. CTA 문구, 추천 로직, 제휴 링크 위치 조정
3. 주간 클릭률 변화 기록

### Loop 3: Social Repurposing

1. Social Editor가 기사 핵심 문장 8~10개 추출
2. 캐러셀/릴스용 스크립트 초안 작성
3. 예약 발행 큐에 적재
4. 반응 데이터가 SEO 주제 선정으로 다시 되돌아감

## Guardrails

- Apple 제품 사양, 출시 정보, 가격은 공식 source 확인 없이 확정 문장으로 쓰지 않는다.
- 기사 제목은 강하지만 과장하지 않는다.
- 후기/리뷰 큐레이션은 출처를 남긴다.
- 인스타그램은 자동 게시와 성과 리포트 중심으로 시작하고, 공격적 팔로우/댓글 자동화는 기본 운영에 포함하지 않는다.
- 사람 검수가 필요한 high-risk 항목:
  - 법적 리스크가 있는 상표 표현
  - 파트너스 링크 교체
  - 사실관계가 민감한 제품 루머

## Paperclip Setup Sequence

1. Paperclip UI에서 회사 `Notebook Atelier` 생성
2. 위 company goal 입력
3. CEO 에이전트 생성
4. CEO 직속으로 `Editorial Director`, `Growth Lead`, `Commerce Analyst` 생성
5. 각 리드 아래 실무 에이전트 배치
6. budget 입력
7. heartbeat cadence를 에이전트별로 다르게 설정
8. 아래 프롬프트 파일을 각 agent prompt template로 연결

프롬프트 위치:

- `ops/paperclip/prompts/ceo.md`
- `ops/paperclip/prompts/editorial-director.md`
- `ops/paperclip/prompts/research-desk.md`
- `ops/paperclip/prompts/growth-lead.md`
- `ops/paperclip/prompts/social-editor.md`
- `ops/paperclip/prompts/commerce-analyst.md`

## Suggested First 30 Days

- Week 1: 추천 플로우, 기초 SEO 구조, 5개 핵심 기사 발행
- Week 2: 인스타 캐러셀 포맷 3개 정착, 상위 기사 내부 링크 최적화
- Week 3: 추천 결과별 CTA 실험, 쿠팡 링크 CTR 측정
- Week 4: 성과 기반으로 키워드 클러스터와 posting cadence 재조정

## References

- Paperclip: https://paperclip.ing/
- Creating a Company: https://paperclip.ing/docs/guides/board-operator/creating-a-company
- Org Structure: https://paperclip.ing/docs/guides/board-operator/org-structure
