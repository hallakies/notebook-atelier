import Link from "next/link";
import { buyingGuides } from "@/content/buying-guides";

const starterGuides = buyingGuides.filter((guide) =>
  ["best-first-macbook", "macbook-recommendation", "should-i-buy-a-macbook-now"].includes(
    guide.slug,
  ),
);

const comparisonGuides = buyingGuides.filter((guide) =>
  ["macbook-air-vs-pro", "macbook-air-13-vs-15"].includes(guide.slug),
);

const personaGuides = buyingGuides.filter((guide) =>
  [
    "best-macbook-for-students",
    "best-macbook-for-developers",
    "best-macbook-for-office-work",
    "best-macbook-for-video-editing",
  ].includes(guide.slug),
);

export const metadata = {
  title: "맥북 구매 가이드 | Notebook Atelier",
  description:
    "맥북 추천, Air vs Pro 비교, 학생용·개발자용·직장인용 가이드까지 구매 직전 판단에 필요한 글을 모았습니다.",
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
            꼭 읽어야 할 가이드
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            Air와 Pro 차이, 학생용과 개발자용 기준, 지금 사도 되는지 같은 구매 의도형 주제만 모았습니다.
          </p>
          <div className="mt-6">
            <Link className="primary-link" href="/#finder">
              먼저 진단하고 추천 받기
            </Link>
          </div>
        </header>

        <section className="mt-10 rounded-[30px] border border-black/6 bg-[rgba(255,255,255,0.54)] p-6 backdrop-blur-xl">
          <p className="eyebrow">Starter Guides</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            처음 들어온 사람에게 먼저 필요한 가이드
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
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {guide.excerpt}
                </p>
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
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {guide.excerpt}
                </p>
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
          <p className="eyebrow">Persona Guides</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            상황별로 바로 들어가는 구매 가이드
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {personaGuides.map((guide) => (
              <article key={guide.slug} className="surface-panel">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {guide.category}
                </p>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                  {guide.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {guide.excerpt}
                </p>
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
