import { MacbookFinder } from "@/components/macbook-finder";
import { lineupSnapshotNote } from "@/lib/macbook-finder";

const editorialColumns = [
  {
    label: "Heritage",
    title: "맥북의 미감은 하드웨어 스펙보다 오래 남습니다",
    body:
      "티타늄처럼 과시하지 않고, 알루미늄처럼 절제된 감각으로 이어져온 노트북 디자인의 맥락을 정리합니다. 추천은 결국 취향의 언어여야 합니다.",
  },
  {
    label: "Buyer Desk",
    title: "질문은 네 개만, 판단은 더 선명하게",
    body:
      "휴대성, 작업 강도, 화면 선호, 예산. 첫 화면은 이 네 가지로 끝냅니다. 복잡한 스펙표 대신 지금 사도 되는 모델을 빠르게 좁히는 구조입니다.",
  },
  {
    label: "Editorial Commerce",
    title: "콘텐츠는 검색을 타고, 추천은 전환으로 이어집니다",
    body:
      "헤리티지 기사, 신제품 브리핑, 리뷰 큐레이션, 구매 가이드가 하나의 여정으로 이어집니다. 읽기 좋은 콘텐츠와 구매 버튼이 서로를 밀어주는 설계입니다.",
  },
];

const buyingSignals = [
  {
    title: "History & Context",
    copy:
      "파워북부터 Apple silicon까지, 브랜드 스토리를 제품 선택 언어로 번역합니다.",
  },
  {
    title: "Current Lineup",
    copy:
      "현재 판매 중인 MacBook 라인업을 기준으로, 어떤 사용자가 어떤 모델로 가야 하는지 즉시 좁힙니다.",
  },
  {
    title: "Conversion Layer",
    copy:
      "추천 결과에서 쿠팡 파트너스 상품 링크로 바로 연결되는 전환 슬롯을 중심에 둡니다.",
  },
];

const featureFeed = [
  {
    category: "History",
    title: "왜 어떤 맥북은 몇 년이 지나도 여전히 좋아 보일까",
    excerpt:
      "재질, 두께, 키보드, 트랙패드, 디스플레이가 어떻게 브랜드 감도로 이어졌는지 해설하는 장문형 콘텐츠 슬롯입니다.",
  },
  {
    category: "Buying Guide",
    title: "학생, 개발자, 크리에이터에게 필요한 기준은 서로 다릅니다",
    excerpt:
      "작업 성향별 체크리스트를 만들어 방문자가 스스로 조건을 확인하고 추천 결과를 이해할 수 있게 설계합니다.",
  },
  {
    category: "Review Watch",
    title: "유튜브 리뷰는 많지만, 구매에 필요한 문장만 남깁니다",
    excerpt:
      "긴 영상을 요약하고, 실제 구매 판단에 도움이 되는 부분만 발췌하는 큐레이션 형식으로 정리합니다.",
  },
];

const timeline = [
  {
    year: "2008",
    title: "Air가 휴대성의 기준을 바꿨습니다",
    body: "가볍고 얇은 노트북이라는 감각을 대중적인 구매 언어로 만든 순간입니다.",
  },
  {
    year: "2015",
    title: "Retina와 트랙패드 경험이 표준을 올렸습니다",
    body: "사양표보다 매일의 사용감이 더 중요하다는 감각이 시장 전반에 스며들었습니다.",
  },
  {
    year: "2020",
    title: "Apple silicon 이후 추천의 기준이 다시 정리됐습니다",
    body: "배터리, 발열, 성능 효율이 동시에 좋아지면서 맥북 선택은 더 명확해졌습니다.",
  },
  {
    year: "2026",
    title: "현재 라인업은 성향별 분화가 더 선명합니다",
    body: "가벼운 Air와 본격 작업용 Pro가 더 또렷하게 분리되어 추천 로직 설계가 쉬워졌습니다.",
  },
];

const reviewRooms = [
  {
    label: "Video",
    title: "리뷰룸",
    body:
      "채널별로 스타일이 다른 유튜브 리뷰를 한눈에 모으고, 영상 속 핵심 판단 포인트를 카드형으로 추려냅니다.",
  },
  {
    label: "News",
    title: "브리핑룸",
    body:
      "신제품 발표, 가격 변동, 구매 타이밍 이슈를 짧고 정확하게 정리하는 뉴스 브리핑 섹션입니다.",
  },
  {
    label: "Archive",
    title: "아카이브",
    body:
      "맥북 디자인과 Apple의 휴대용 컴퓨팅 역사까지 함께 쌓아서 도메인 권위를 만드는 SEO용 장문 카테고리입니다.",
  },
];

const instagramPillars = [
  "긴 글에서 10장 캐러셀로 재가공하는 에디토리얼 카드",
  "신제품 변화만 빠르게 요약하는 세로형 브리프",
  "추천 결과를 짧게 잘라 리치와 전환을 동시에 노리는 릴스 스크립트",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "노트북 아틀리에",
  inLanguage: "ko-KR",
  description:
    "4개의 질문으로 취향에 맞는 맥북과 프리미엄 노트북을 추천하는 에디토리얼 커머스 사이트",
  potentialAction: {
    "@type": "SearchAction",
    target: "/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-5 pt-5 sm:px-8 sm:pt-8">
        <div className="shell relative overflow-hidden rounded-[36px] border border-white/60 px-6 pb-12 pt-6 shadow-[0_40px_120px_rgba(28,31,38,0.12)] sm:px-10 lg:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />
          <div className="ambient-orb absolute -left-24 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(255,255,255,0.18)_58%,transparent_72%)]" />
          <div className="ambient-orb absolute right-[-8rem] top-[-4rem] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(203,214,232,0.72),rgba(203,214,232,0.08)_60%,transparent_78%)] [animation-delay:1.6s]" />
          <div className="ambient-line absolute left-[12%] top-[20%] h-px w-44 -rotate-12 bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="ambient-line absolute right-[10%] top-[55%] h-px w-56 rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <header className="relative z-10 flex flex-col gap-6 border-b border-black/6 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-[1.75rem] tracking-[0.16em] text-[var(--ink)]">
                Notebook Atelier
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                프리미엄 노트북을 고르는 감각을 더 선명하게
              </p>
            </div>
            <nav className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <a className="pill-link" href="#finder">
                Recommendation
              </a>
              <a className="pill-link" href="#journal">
                Journal
              </a>
              <a className="pill-link" href="#review-room">
                Review Room
              </a>
              <a className="pill-link" href="#social">
                Instagram
              </a>
            </nav>
          </header>

          <div className="relative z-10 mt-10 grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="eyebrow">Curated For Korea</p>
              <h1 className="mt-5 max-w-4xl text-balance font-display text-5xl leading-[0.94] tracking-[-0.04em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                취향에 맞는 맥북과 프리미엄 노트북을 추천합니다
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                노트북 아틀리에는 첫 화면에서 네 가지 질문만 던집니다. 그
                뒤에는 맥북의 역사, 최신 라인업 브리핑, 유튜브 리뷰, 구매
                가이드가 한 흐름으로 이어집니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="primary-link" href="#finder">
                  맥북 추천 시작하기
                </a>
                <a className="secondary-link" href="#journal">
                  콘텐츠 구조 보기
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {buyingSignals.map((signal) => (
                  <article key={signal.title} className="frost-card">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      {signal.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--ink)]">
                      {signal.copy}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-12 grid gap-4 lg:grid-cols-3">
                {editorialColumns.map((column) => (
                  <article key={column.title} className="editorial-card">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      {column.label}
                    </p>
                    <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                      {column.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      {column.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div id="finder" className="relative lg:pt-5">
              <MacbookFinder />
            </div>
          </div>
        </div>
      </section>

      <section id="journal" className="px-5 pt-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="space-y-6">
              <p className="eyebrow">Journal Structure</p>
              <h2 className="section-title">
                검색에서 들어온 방문자를 오래 머물게 하는 구조가 필요합니다
              </h2>
              <p className="section-copy">
                제품 추천만으로는 브랜드가 오래 남지 않습니다. 역사와 맥락을
                가진 긴 글, 신제품 브리핑, 구매 가이드, 리뷰 큐레이션이 같이
                돌아야 도메인 권위와 전환이 동시에 쌓입니다.
              </p>
              <p className="text-sm leading-7 text-[var(--muted)]">
                {lineupSnapshotNote}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {featureFeed.map((item) => (
                <article key={item.title} className="surface-panel">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {item.category}
                  </p>
                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {item.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-black/6 bg-[rgba(255,255,255,0.56)] px-6 py-10 shadow-[0_28px_80px_rgba(35,38,43,0.08)] backdrop-blur-xl sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">MacBook Timeline</p>
              <h2 className="section-title">
                헤리티지는 단순 회고가 아니라 구매 설득의 언어입니다
              </h2>
              <p className="section-copy">
                왜 Air는 가벼움을 상징하게 됐는지, 왜 Pro는 작업 신뢰도의
                이름이 됐는지, 그 역사를 짧고 아름답게 해설하는 섹션을 중심에
                둡니다.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {timeline.map((item) => (
                <article key={item.year} className="timeline-card">
                  <p className="font-display text-4xl tracking-[-0.06em] text-[var(--ink)]">
                    {item.year}
                  </p>
                  <h3 className="mt-3 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="review-room" className="px-5 pt-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {reviewRooms.map((room) => (
            <article key={room.title} className="review-room">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {room.label}
              </p>
              <h2 className="mt-5 text-[2rem] font-medium tracking-[-0.05em] text-[var(--ink)]">
                {room.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {room.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="social" className="px-5 pt-16 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-[rgba(25,27,31,0.08)] bg-[linear-gradient(145deg,rgba(255,255,255,0.75),rgba(239,233,224,0.84))] px-6 py-10 shadow-[0_32px_90px_rgba(28,31,38,0.1)] sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Instagram System</p>
              <h2 className="section-title">
                하나의 장문 콘텐츠가 인스타그램까지 흘러가도록 설계합니다
              </h2>
              <p className="section-copy">
                검색용 기사에서 끝내지 않고, 캐러셀 카드와 짧은 브리프로
                재가공해 `macbook__boy` 계정에서 반복 발행할 수 있게 운영
                시스템을 함께 만듭니다.
              </p>
            </div>

            <div className="grid gap-3">
              {instagramPillars.map((pillar) => (
                <div key={pillar} className="social-chip">
                  {pillar}
                </div>
              ))}

              <div className="surface-panel mt-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Publishing Rhythm
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  주 3회 캐러셀, 주 2회 짧은 브리프, 주 1회 릴스 스크립트
                  발행을 기본 템포로 두고, Meta 공식 게시 API 범위 안에서
                  예약 발행과 성과 리포팅을 자동화합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
