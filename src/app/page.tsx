import Link from "next/link";
import { MacbookFinder } from "@/components/macbook-finder";
import { buyingGuides } from "@/content/buying-guides";
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

const funnelSteps = [
  {
    step: "1",
    title: "4개 질문",
    body: "1분 안에 끝나는 질문으로 사용 패턴을 먼저 좁힙니다.",
  },
  {
    step: "2",
    title: "추천 결과",
    body: "Air와 Pro 사이에서 지금 사기 쉬운 모델을 바로 보여줍니다.",
  },
  {
    step: "3",
    title: "실구매 이동",
    body: "추천 아래에서 현재 연결된 구매 상품까지 바로 이어집니다.",
  },
];

const guideHighlights = buyingGuides.filter((guide) =>
  [
    "best-macbook-for-students",
    "best-macbook-for-developers",
    "macbook-air-vs-pro",
  ].includes(guide.slug),
);

const quickChecks = [
  {
    title: "Air가 맞는 사람",
    body: "문서, 웹, 수업, 회의가 중심이고 가벼운 무게와 배터리를 가장 크게 체감하는 사람",
  },
  {
    title: "Pro가 맞는 사람",
    body: "개발, 멀티태스킹, 영상 작업처럼 오래 부하가 걸리고 화면과 성능 여유가 중요한 사람",
  },
  {
    title: "지금 사도 되는 사람",
    body: "지금 작업이 막혀 있고 필요한 모델이 명확한데, 계속 비교만 하느라 결정을 미루고 있는 사람",
  },
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
          <div className="relative z-10">
            <div className="max-w-4xl">
              <p className="eyebrow">For Korean Buyers</p>
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                4 Questions · Under 1 Minute · Current Lineup
              </p>
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

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a className="primary-link w-full sm:w-auto" href="#finder">
                  지금 추천 받기
                </a>
                <a className="secondary-link w-full sm:w-auto" href="#how-it-works">
                  어떤 기준으로 고르는지 보기
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-[var(--muted)]">
                {trustSignals.map((signal) => (
                  <span
                    key={signal.title}
                    className="rounded-full border border-black/8 bg-white/55 px-3 py-2"
                  >
                    {signal.title}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {funnelSteps.map((item) => (
                  <article
                    key={item.step}
                    className="rounded-[24px] border border-black/6 bg-[rgba(255,255,255,0.58)] px-4 py-4 backdrop-blur-xl"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      Step {item.step}
                    </p>
                    <h2 className="mt-3 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
              <div id="finder" className="order-1">
                <MacbookFinder />
              </div>

              <div className="order-2 space-y-4 lg:pl-4">
                <div className="rounded-[28px] border border-black/6 bg-[rgba(255,255,255,0.6)] p-5 backdrop-blur-xl">
                  <p className="eyebrow">Buyer Lens</p>
                  <h2 className="mt-3 text-[2rem] font-medium leading-[1.02] tracking-[-0.05em] text-[var(--ink)]">
                    복잡한 비교 대신
                    <br />
                    지금 필요한 답만 남겼습니다
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    먼저 추천을 받고, 더 확인이 필요할 때만 가이드를 읽으면 됩니다. 홈페이지의 기본 경로는
                    질문, 추천, 구매 링크 순서입니다.
                  </p>
                </div>

                <div className="grid gap-3">
                  {decisionPoints.map((point) => (
                    <article
                      key={point.title}
                      className="rounded-[24px] border border-black/6 bg-[rgba(255,255,255,0.5)] p-5 backdrop-blur-xl"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                        {point.label}
                      </p>
                      <h3 className="mt-3 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                        {point.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {point.body}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-4 rounded-[28px] border border-black/6 bg-[rgba(255,255,255,0.62)] p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Snapshot</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {lineupSnapshotNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-black/6 bg-[rgba(255,255,255,0.5)] px-5 py-8 shadow-[0_24px_64px_rgba(35,38,43,0.06)] backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="eyebrow">Who This Helps</p>
              <h2 className="max-w-[14ch] font-display text-4xl leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl">
                계속 비교만 하던 사람을
                <br />
                결정까지 밀어붙이는 구조입니다
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                지금 필요한 건 뉴스보다도 짧고 명확한 판단입니다. 먼저 추천을 보고, 더 확인이 필요할 때만 아래
                탐색으로 넘어가면 됩니다.
              </p>
              <p className="text-sm leading-7 text-[var(--muted)]">
                {lineupSnapshotNote}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {quickChecks.map((item) => (
                <article key={item.title} className="timeline-card">
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
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

      <section id="guides" className="px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-black/6 bg-[rgba(255,255,255,0.38)] px-5 py-8 shadow-[0_20px_56px_rgba(35,38,43,0.05)] backdrop-blur-xl sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Buying Guides</p>
              <h2 className="mt-3 max-w-[15ch] font-display text-4xl leading-[0.98] tracking-[-0.06em] text-[var(--ink)]">
                추천 결과가 애매할 때만
                <br />
                가이드를 읽으면 됩니다
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                구매 가이드는 결정이 더 필요할 때만 쓰는 보조 경로입니다. 먼저 질문에 답하고, 그다음에 아래 비교를
                확인하는 편이 가장 빠릅니다.
              </p>
            </div>

            <a className="pill-link px-4 py-3 text-sm text-[var(--ink)]" href="#finder">
              먼저 추천 받기
            </a>
          </div>

          <div className="mt-6 grid gap-3">
            {guideHighlights.map((item) => (
              <Link
                key={item.slug}
                href={`/buying-guides/${item.slug}`}
                className="rounded-[24px] border border-black/6 bg-[rgba(255,255,255,0.52)] px-4 py-4 transition hover:-translate-y-[1px] hover:border-black/12 sm:px-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                      {item.excerpt}
                    </p>
                  </div>
                  <span className="inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-[var(--ink)]">
                    가이드 보기
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
