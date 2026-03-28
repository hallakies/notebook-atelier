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
                <a className="secondary-link" href="#how-it-works">
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

                <div className="mt-4 rounded-[28px] border border-black/6 bg-[rgba(255,255,255,0.62)] p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    What happens next
                  </p>
                  <p className="mt-3 text-base leading-8 text-[var(--ink)]">
                    질문에 답하면 바로 추천 모델과 실구매 상품이 뜹니다. 더 읽어볼 필요가 있으면 아래 가이드를 보고,
                    이미 결정이 됐다면 바로 쿠팡 링크로 이동하면 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-black/6 bg-[rgba(255,255,255,0.56)] px-5 py-10 shadow-[0_28px_80px_rgba(35,38,43,0.08)] backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Who This Helps</p>
              <h2 className="section-title">
                계속 비교만 하던 사람을
                <br />
                결정까지 밀어붙이는 구조입니다
              </h2>
              <p className="section-copy">
                지금 필요한 건 역사나 뉴스보다도, Air면 충분한지 Pro까지 가야 하는지, 지금 사도 되는지에 대한 짧고
                명확한 판단입니다.
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

      <section id="guides" className="px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="space-y-6">
              <p className="eyebrow">Buying Guides</p>
              <h2 className="section-title">
                아직 망설여진다면
                <br />
                구매 직전 가이드만 보면 됩니다
              </h2>
              <p className="section-copy">
                학생용, 개발용, Air와 Pro 비교처럼 실제로 검색하는 주제만 모았습니다. 길게 읽게 만들지 않고
                결정을 돕는 방향으로만 정리합니다.
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
    </main>
  );
}
