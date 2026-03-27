# Instagram Operating System

## Objective

`macbook__boy`는 초기에 검색이 아니라 발견형 채널이다. 목적은 팔로워 숫자 자체보다 다음 4개다.

- 저장되는 캐러셀 제작
- 프로필 방문 유도
- 사이트 클릭 유도
- 기사 주제를 검증하는 반응 데이터 확보

## Official Automation Boundary

2026년 3월 27일 확인 기준 Meta 공식 문서는 Instagram Platform의 content publishing 문서에서 `single images`, `videos`, `reels`, `carousel posts`를 professional accounts에 게시할 수 있다고 설명한다. 따라서 1차 자동화 범위는 `게시 예약`, `발행`, `성과 리포팅`으로 잡는 것이 맞다.

참고 링크:

- https://developers.facebook.com/docs/instagram-platform/content-publishing/
- https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media_publish/
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/

기본 정책:

- 자동 게시: 허용
- 성과 수집: 허용
- 초안 캡션 생성: 허용
- 대량 팔로우/언팔/댓글 봇: 기본 운영에서 제외
- 민감한 외부 상호작용: 사람 승인 후 실행

## Content Pillars

### Carousel

- `지금 사도 되는 맥북인가`
- `Air vs Pro 한 장 요약`
- `학생/개발자/디자이너용 맥북 기준`
- `맥북의 디자인 역사`

### Brief

- 신제품 발표 5줄 요약
- 가격/구매 타이밍 체크
- 액세서리 추천

### Reel Script

- 추천 결과를 20초 안에 설명하는 숏폼
- 기사 한 편을 한 문장씩 끊어 전달하는 스크립트

## Weekly Publishing Rhythm

- 월: 캐러셀 1
- 화: 브리프 1
- 수: 캐러셀 2
- 금: 캐러셀 3
- 토: 릴스 스크립트 1

성과가 쌓이면 주 1회 스토리나 실험 포맷을 추가한다.

## Asset Pipeline

1. 장문 기사 발행
2. Social Editor가 핵심 문장 8~10개 추출
3. 슬라이드별 메시지와 훅 구성
4. 캡션 초안 생성
5. 썸네일/표지 규격 반영
6. 게시 예약
7. 24시간, 72시간, 7일 성과 수집

## Caption Rules

- 첫 문장은 저장 욕구를 만드는 문장으로 시작
- 해시태그는 남발하지 않고 주제별 3~5개만 사용
- 마지막 줄은 사이트 방문이나 저장 중 하나만 요청
- 판매 느낌보다 에디토리얼 느낌을 우선

## Metrics

- Save rate
- Profile visit rate
- Link in bio click-through
- Reel watch-through
- 기사 주제별 전환 기여도

## Safe Outreach Policy

인스타 계정 초기 성장에서 무차별 팔로우와 자동 댓글은 브랜드 품질을 빠르게 해칠 수 있다. 따라서 기본 운영 원칙은 다음과 같다.

- 계정 성장의 중심은 게시물 품질과 저장 수
- 아웃바운드 행동은 매우 제한적으로 실행
- 댓글은 자동 생성보다 승인형 큐가 적합
- 특정 커뮤니티 계정과의 협업, 태그, DM은 주간 검토 후 수동 또는 반자동 처리

## Recommended Stack

- 콘텐츠 원본: 사이트 기사/CMS
- 스크립트 생성: Paperclip Social Editor
- 이미지/디자인: 템플릿 기반 디자인 툴 또는 전용 생성 파이프라인
- 예약 발행: Meta Graph API 또는 승인된 스케줄러
- 분석: GA4 + PostHog + Instagram Insights
