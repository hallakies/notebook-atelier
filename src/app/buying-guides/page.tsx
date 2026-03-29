import Link from "next/link";
import { buyingGuides } from "@/content/buying-guides";

const starterGuideSlugs = [
  "best-first-macbook",
  "macbook-recommendation",
  "should-i-buy-a-macbook-now",
];

const comparisonGuideSlugs = ["macbook-air-vs-pro", "macbook-air-13-vs-15"];

const starterGuides = buyingGuides.filter((guide) => starterGuideSlugs.includes(guide.slug));
const comparisonGuides = buyingGuides.filter((guide) => comparisonGuideSlugs.includes(guide.slug));
const useCaseGuides = buyingGuides.filter(
  (guide) => !starterGuideSlugs.includes(guide.slug) && !comparisonGuideSlugs.includes(guide.slug),
);

export const metadata = {
  title: "맥북 구매 가이드 | Notebook Atelier",
  description:
    "맥북 추천, Air vs Pro 비교, 학생·개발자·직장인 가이드까지 구매 직전 판단에 필요한 글을 모은 페이지",
};

export default function BuyingGuidesIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: buyingGuides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `/buying-guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="eyebrow">Buying Guides</p>
          <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-[var(--ink)]">
            맥북 구매 직전,
            <br />
            딱 필요한 글만 찾기
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            이 페이지는 글을 고르는 페이지입니다. 처음 사는 사람, 비교가 필요한 사람,
            상황별 추천이 필요한 사람으로 나눠서 한 글씩 바로 들어갈 수 있게 정리합니다.
          </p>
          <div className="mt-6 rounded-[24px] border border-black/8 bg-[rgba(255,255,255,0.72)] p-4 text-sm leading-7 text-[var(--muted)] sm:p-5">
            <p className="font-medium text-[var(--ink)]">이 페이지의 역할</p>
            <p className="mt-2">
              원하는 주제의 글을 고르는 페이지입니다. 바로 추천이 필요하면 홈 설문으로,
              비교 글이 필요하면 아래 목록에서 한 글만 골라 들어가면 됩니다.
            </p>
          </div>
          <div className="mt-6">
            <Link className="primary-link" href="/#finder">
              먼저 진단하고 추천 받기
            </Link>
          </div>
        </header>

        <section className="mt-10 rounded-[30px] border border-black/6 bg-[rgba(255,255,255,0.62)] p-6 backdrop-blur-xl">
          <p className="eyebrow">Start Here</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            어디서 시작할지 모르겠다면 이렇게 가면 됩니다
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="surface-panel">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">처음 사는 경우</p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                입문 가이드부터
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                아직 Air와 Pro도 헷갈린다면 첫 맥북 가이드부터 보는 편이 가장 빠릅니다.
              </p>
              <Link
                href="/buying-guides/best-first-macbook"
                className="mt-6 inline-flex rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-[var(--ink)]"
              >
                입문 가이드 보기
              </Link>
            </article>
            <article className="surface-panel">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">두 모델이 헷갈리는 경우</p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                비교 글부터
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                에어와 프로, 13과 15처럼 선택지가 이미 줄었다면 비교 글부터 보면 됩니다.
              </p>
              <Link
                href="/buying-guides/macbook-air-vs-pro"
                className="mt-6 inline-flex rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-[var(--ink)]"
              >
                비교 가이드 보기
              </Link>
            </article>
            <article className="surface-panel">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">바로 결론이 필요한 경우</p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                4문항 진단부터
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                글보다 바로 추천 결과와 상품이 필요하다면 홈 설문이 가장 빠릅니다.
              </p>
              <Link
                href="/#finder"
                className="mt-6 inline-flex rounded-full border border-transparent bg-[var(--ink)] px-4 py-2 text-sm text-white"
              >
                바로 진단하기
              </Link>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-[30px] border border-black/6 bg-[rgba(255,255,255,0.54)] p-6 backdrop-blur-xl">
          <p className="eyebrow">Starter Guides</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            처음 보는 사람에게 먼저 필요한 글
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {starterGuides.map((guide) => (
              <article key={guide.slug} className="surface-panel">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {guide.category}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                  {guide.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{guide.excerpt}</p>
                <Link
                  href={`/buying-guides/${guide.slug}`}
                  className="mt-6 inline-flex rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-[var(--ink)]"
                >
                  글 읽기
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[30px] border border-black/6 bg-[rgba(255,255,255,0.46)] p-6 backdrop-blur-xl">
          <p className="eyebrow">Comparisons</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            선택지가 둘로 좁혀졌을 때 보는 비교
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {comparisonGuides.map((guide) => (
              <article key={guide.slug} className="surface-panel">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {guide.category}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                  {guide.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{guide.excerpt}</p>
                <Link
                  href={`/buying-guides/${guide.slug}`}
                  className="mt-6 inline-flex rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-[var(--ink)]"
                >
                  비교 보기
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[30px] border border-black/6 bg-[rgba(255,255,255,0.38)] p-6 backdrop-blur-xl">
          <p className="eyebrow">Use Cases</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            상황별로 바로 들어가는 구매 가이드
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {useCaseGuides.map((guide) => (
              <article key={guide.slug} className="surface-panel">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {guide.category}
                </p>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                  {guide.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{guide.excerpt}</p>
                <Link
                  href={`/buying-guides/${guide.slug}`}
                  className="mt-6 inline-flex rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-[var(--ink)]"
                >
                  글 읽기
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
