import Link from "next/link";
import { MacbookFinder } from "@/components/macbook-finder";
import { lineupSnapshotNote } from "@/lib/macbook-finder";

const decisionPoints = [
  {
    label: "Air vs Pro",
    title: "가벼움이 중요한지, 성능 여유가 중요한지부터 정리합니다",
    body:
      "비싼 모델이 항상 정답은 아닙니다. 이동이 많은지, 오래 켜두는지, 무거운 작업을 하는지에 따라 답이 달라집니다.",
  },
  {
    label: "Use Case",
    title: "학생, 직장인, 개발자, 크리에이터의 기준은 다릅니다",
    body:
      "문서와 브라우징, 개발과 멀티태스킹, 영상 편집은 필요한 성능과 화면이 다릅니다. 그래서 모두에게 같은 추천은 맞지 않습니다.",
  },
  {
    label: "Buying Timing",
    title: "지금 사도 되는지, 조금 기다릴지까지 같이 봅니다",
    body:
      "스펙만 비교하지 않고 현재 판매 라인업 기준으로 어떤 모델이 가장 합리적인지 빠르게 판단합니다.",
  },
];

const trustSignals = [
  {
    title: "4개의 질문",
    copy: "복잡한 스펙 설명 대신, 결정에 필요한 질문만 남겼습니다.",
  },
  {
    title: "현재 라인업 기준",
    copy: "지금 실제로 구매 가능한 MacBook 기준으로 추천 결과를 보여줍니다.",
  },
  {
    title: "구매 직전 관점",
    copy: "무게, 배터리, 작업 여유처럼 실제 체감 포인트를 중심으로 정리합니다.",
  },
];

const guides = [
  {
    category: "학생용 가이드",
    slug: "best-macbook-for-students",
    title: "가볍고 오래 가는 쪽이 중요한 사람",
    excerpt:
      "매일 들고 다니며 문서, 브라우저, 수업 중심으로 쓰는 경우 어디까지면 충분한지 정리합니다.",
  },
  {
    category: "개발자 가이드",
    slug: "best-macbook-for-developers",
    title: "여러 앱과 브라우저 탭을 동시에 여는 사람",
    excerpt:
      "코드 편집, 외부 모니터, 메모리 여유가 중요한 경우 Air와 Pro 사이 기준을 설명합니다.",
  },
  {
    category: "크리에이터 가이드",
    slug: "macbook-air-vs-pro",
    title: "화면과 성능 여유가 수익과 연결되는 사람",
    excerpt:
      "영상 편집과 디자인 작업에서 어떤 차이가 체감되는지 이해하기 쉽게 정리합니다.",
  },
];

const timeline = [
  {
    year: "2008",
    title: "MacBook Air는 휴대성의 기준을 바꿨습니다",
    body:
      "얇고 가벼운 노트북을 원하던 사람들에게 무엇이 중요한지 시장 전체의 언어를 바꿨습니다.",
  },
  {
    year: "2015",
    title: "입력 경험과 화면 품질이 더 중요해진 시기",
    body:
      "브랜드보다도 실제로 오래 쓰는 키보드와 디스플레이가 구매 만족도를 좌우한다는 점이 분명해졌습니다.",
  },
  {
    year: "2020",
    title: "Apple silicon 이후 선택 기준이 다시 정리됐습니다",
    body:
      "배터리와 효율이 크게 좋아지면서, 어떤 사용자가 어떤 모델을 사야 하는지가 더 또렷해졌습니다.",
  },
  {
    year: "2026",
    title: "지금은 Air와 Pro의 역할이 더 선명합니다",
    body:
      "가벼운 일상 작업과 본격적인 고강도 작업의 차이가 분명해져 추천 로직도 더 명확해졌습니다.",
  },
];

const reviewRooms = [
  {
    label: "리뷰 정리",
    title: "긴 리뷰를 다 보지 않아도 됩니다",
    body:
      "여러 유튜브 리뷰를 다 보는 대신, 실제 구매 판단에 필요한 포인트만 빠르게 정리합니다.",
  },
  {
    label: "라인업 브리핑",
    title: "지금 사도 되는지 빠르게 확인합니다",
    body:
      "현재 판매 중인 모델과 구매 타이밍 이슈를 놓치지 않고 정리해 드립니다.",
  },
  {
    label: "구매 가이드",
    title: "결정 전에 필요한 글만 모아둡니다",
    body:
      "모델별 차이, Air와 Pro 기준, 용도별 가이드를 추천 결과와 자연스럽게 이어줍니다.",
  },
];

const socialPillars = [
  "읽기 전에 이해되는 짧은 비교 카드 브리핑",
  "가격과 구매 타이밍을 빠르게 읽는 요약 포맷",
  "긴 글 내용을 다시 확인하기 쉬운 캐러셀형 정리",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Notebook Atelier",
  inLanguage: "ko-KR",
  description:
    "4개의 질문으로 나에게 맞는 맥북과 프리미엄 노트북을 추천하는 구매 결정 도구",
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

      <section className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        <div className="shell relative overflow-hidden rounded-[32px] border border-white/60 px-5 pb-10 pt-5 shadow-[0_40px_120px_rgba(28,31,38,0.12)] sm:px-8 sm:pb-12 sm:pt-6 lg:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />
          <div className="ambient-orb absolute -left-24 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(255,255,255,0.18)_58%,transparent_72%)]" />
          <div className="ambient-orb absolute right-[-8rem] top-[-4rem] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(203,214,232,0.72),rgba(203,214,232,0.08)_60%,transparent_78%)] [animation-delay:1.6s]" />
          <div className="ambient-line absolute left-[12%] top-[20%] h-px w-44 -rotate-12 bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="ambient-line absolute right-[10%] top-[55%] h-px w-56 rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <header className="relative z-10 flex flex-col gap-5 border-b border-black/6 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-[1.55rem] tracking-[0.16em] text-[var(--ink)] sm:text-[1.75rem]">
                Notebook Atelier
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                비싼 노트북일수록 더 빠르고 정확하게 고르도록 돕습니다.
              </p>
            </div>
            <nav className="flex flex-wrap gap-2 text-xs tracking-[0.14em] text-[var(--muted)] sm:gap-3 sm:uppercase sm:tracking-[0.18em]">
              <a className="pill-link" href="#finder">
                추천 받기
              </a>
              <a className="pill-link" href="#guides">
                비교 가이드
              </a>
              <a className="pill-link" href="#review-room">
                리뷰 요약
              </a>
              <a className="pill-link" href="#social">
                짧은 브리핑
              </a>
            </nav>
          </header>

          <div className="relative z-10 mt-8">
            <div className="max-w-4xl">
              <p className="eyebrow">For Korean Buyers</p>
              <h1 className="mt-4 max-w-5xl text-balance font-display text-[2.9rem] leading-[0.94] tracking-[-0.05em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                나에게 맞는 맥북을
                <br />
                4개의 질문으로 찾으세요
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-xl sm:leading-8">
                Air면 충분한지, Pro까지 가야 하는지, 지금 사도 되는지.
                Notebook Atelier는 복잡한 비교를 줄이고 지금의 사용 방식에 맞는
                모델을 빠르게 정리해드립니다.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="primary-link" href="#finder">
                  지금 추천 받기
                </a>
                <a className="secondary-link" href="#guides">
                  어떤 기준으로 고르는지 보기
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {trustSignals.map((signal) => (
                  <article key={signal.title} className="frost-card min-h-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      {signal.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--ink)]">
                      {signal.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
              <div id="finder" className="order-1 lg:order-2 lg:pt-2">
                <MacbookFinder />
              </div>

              <div className="order-2 lg:order-1">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {decisionPoints.map((point) => (
                    <article key={point.title} className="editorial-card">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                        {point.label}
                      </p>
                      <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                        {point.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                        {point.body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guides" className="px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="space-y-6">
              <p className="eyebrow">Buying Guides</p>
              <h2 className="section-title">
                맥북을 고를 때 가장 많이 갈리는 기준부터 정리합니다
              </h2>
              <p className="section-copy">
                학생용, 개발용, 크리에이터용 기준은 서로 다릅니다. 그래서 추천 결과가
                끝이 아니라 왜 그 모델이 맞는지 이해할 수 있는 설명까지 함께
                제공합니다.
              </p>
              <p className="text-sm leading-7 text-[var(--muted)]">
                {lineupSnapshotNote}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {guides.map((item) => (
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
                  <Link
                    href={`/buying-guides/${item.slug}`}
                    className="mt-6 inline-flex rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-[var(--ink)]"
                  >
                    자세히 보기
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-black/6 bg-[rgba(255,255,255,0.56)] px-5 py-10 shadow-[0_28px_80px_rgba(35,38,43,0.08)] backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Why This Makes Sense</p>
              <h2 className="section-title">
                맥북의 흐름을 알면 지금 어떤 모델을 사야 할지 더 쉬워집니다
              </h2>
              <p className="section-copy">
                이 섹션은 단순한 역사 소개가 아니라, 왜 Air와 Pro가 지금처럼 나뉘어
                보이는지 이해하도록 돕는 배경 설명입니다.
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

      <section id="review-room" className="px-4 pt-16 sm:px-6 lg:px-8">
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

      <section id="social" className="px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-[rgba(25,27,31,0.08)] bg-[linear-gradient(145deg,rgba(255,255,255,0.75),rgba(239,233,224,0.84))] px-5 py-10 shadow-[0_32px_90px_rgba(28,31,38,0.1)] sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Short Briefings</p>
              <h2 className="section-title">
                긴 글로 보고, 짧은 카드로 다시 확인할 수 있게 만듭니다
              </h2>
              <p className="section-copy">
                모델 비교와 구매 타이밍 정보를 다시 확인하기 쉽도록 짧은 카드
                브리핑과 요약 콘텐츠도 함께 운영합니다. 검색에서 들어온 정보가 다시
                기억에 남도록 만드는 장치입니다.
              </p>
            </div>

            <div className="grid gap-3">
              {socialPillars.map((pillar) => (
                <div key={pillar} className="social-chip">
                  {pillar}
                </div>
              ))}

              <div className="surface-panel mt-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  What You Get
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  지금 사도 되는지, 어떤 차이가 체감되는지, 내 작업과 무게감이 맞는지까지
                  짚고 정확하게 다시 확인할 수 있는 요약 콘텐츠를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
