import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  buyingGuides,
  getBuyingGuideBySlug,
  getBuyingGuideRecommendations,
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
  };
}

export default async function BuyingGuideDetailPage(context: RouteContext) {
  const { slug } = await context.params;
  const guide = getBuyingGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const recommendedModels = getBuyingGuideRecommendations(slug);

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <header className="rounded-[32px] border border-black/6 bg-[rgba(255,255,255,0.7)] p-6 shadow-[0_28px_80px_rgba(35,38,43,0.08)] backdrop-blur-xl sm:p-8">
          <p className="eyebrow">{guide.category}</p>
          <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-[var(--ink)]">
            {guide.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            {guide.heroIntro}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="primary-link" href="/#finder">
              4문항으로 바로 진단하기
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
            이 가이드와 함께 보기 좋은 모델
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
        </section>
      </article>
    </main>
  );
}
