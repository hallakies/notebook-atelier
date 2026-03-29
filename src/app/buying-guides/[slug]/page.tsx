import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  buyingGuides,
  getBuyingGuideBySlug,
  getBuyingGuideRecommendations,
  getRelatedBuyingGuides,
} from "@/content/buying-guides";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return buyingGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata(context: RouteContext): Promise<Metadata> {
  const { slug } = await context.params;
  const guide = getBuyingGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    alternates: {
      canonical: `/buying-guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      type: "article",
      locale: "ko_KR",
      url: `/buying-guides/${guide.slug}`,
    },
  };
}

export default async function BuyingGuideDetailPage(context: RouteContext) {
  const { slug } = await context.params;
  const guide = getBuyingGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const recommendedModels = getBuyingGuideRecommendations(slug);
  const relatedGuides = getRelatedBuyingGuides(slug);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.seoDescription,
    inLanguage: "ko-KR",
    datePublished: guide.publishedAt,
    author: {
      "@type": "Organization",
      name: "Notebook Atelier",
    },
    publisher: {
      "@type": "Organization",
      name: "Notebook Atelier",
    },
    mainEntityOfPage: `/buying-guides/${guide.slug}`,
  };

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="mx-auto max-w-4xl">
        <header className="rounded-[32px] border border-black/6 bg-[rgba(255,255,255,0.7)] p-6 shadow-[0_28px_80px_rgba(35,38,43,0.08)] backdrop-blur-xl sm:p-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
            <Link href="/" className="rounded-full border border-black/8 bg-white/72 px-3 py-2">
              홈
            </Link>
            <span>/</span>
            <Link
              href="/buying-guides"
              className="rounded-full border border-black/8 bg-white/72 px-3 py-2"
            >
              구매 가이드
            </Link>
            <span>/</span>
            <span className="rounded-full border border-black/8 bg-[rgba(255,255,255,0.42)] px-3 py-2 text-[var(--ink)]">
              {guide.title}
            </span>
          </nav>
          <p className="eyebrow">{guide.category}</p>
          <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-[var(--ink)]">
            {guide.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            {guide.heroIntro}
          </p>
          <div className="mt-6 rounded-[24px] border border-black/8 bg-[rgba(255,255,255,0.74)] p-4 text-sm leading-7 text-[var(--muted)] sm:p-5">
            <p className="font-medium text-[var(--ink)]">이 글에서 바로 얻는 것</p>
            <p className="mt-2">{guide.excerpt}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-sm text-[var(--muted)]">
            <span className="rounded-full border border-black/8 bg-white/72 px-3 py-2">
              발행일 {guide.publishedAt}
            </span>
            <Link
              href="/#finder"
              className="rounded-full border border-black/8 bg-white/72 px-3 py-2 text-[var(--ink)]"
            >
              4문항 진단 바로가기
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="primary-link" href="/#finder">
              바로 진단하고 추천 받기
            </Link>
            <Link className="secondary-link" href="/buying-guides">
              다른 가이드 보기
            </Link>
          </div>
        </header>

        <div className="mt-10 space-y-8">
          {guide.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[28px] border border-black/6 bg-[rgba(255,255,255,0.62)] p-6 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[var(--muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[28px] border border-black/6 bg-[rgba(255,255,255,0.68)] p-6 backdrop-blur-xl">
          <p className="eyebrow">Recommended Models</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            이 글과 함께 보기 좋은 모델
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recommendedModels.map((model) => (
              <article key={model.id} className="surface-panel">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {model.chip} · {model.size}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {model.tagline}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-[22px] border border-black/8 bg-white/75 p-5 text-sm leading-7 text-[var(--muted)]">
            {guide.finderPrompt}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link className="primary-link w-full justify-center sm:w-auto" href="/#finder">
              바로 진단하고 추천 받기
            </Link>
            <Link className="secondary-link w-full justify-center sm:w-auto" href="/">
              홈으로 돌아가기
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-black/6 bg-[rgba(255,255,255,0.58)] p-6 backdrop-blur-xl">
          <p className="eyebrow">Related Guides</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            이어서 보기 좋은 구매 가이드
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedGuides.map((item) => (
              <Link
                key={item.slug}
                href={`/buying-guides/${item.slug}`}
                className="rounded-[22px] border border-black/8 bg-white/72 p-5 transition hover:-translate-y-[1px] hover:border-black/12"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {item.category}
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 sm:hidden">
        <div className="pointer-events-auto mx-auto flex max-w-md items-center gap-3 rounded-full border border-black/8 bg-[rgba(255,255,255,0.92)] p-2 shadow-[0_24px_48px_rgba(24,26,31,0.16)] backdrop-blur-xl">
          <Link className="primary-link min-w-0 flex-1 justify-center px-4 py-3 text-sm" href="/#finder">
            4문항 진단하기
          </Link>
          <Link
            className="rounded-full border border-black/8 bg-white px-4 py-3 text-sm text-[var(--ink)]"
            href="/buying-guides"
          >
            다른 글
          </Link>
        </div>
      </div>
    </main>
  );
}
