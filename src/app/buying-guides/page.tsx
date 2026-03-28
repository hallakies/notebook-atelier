import Link from "next/link";
import { buyingGuides } from "@/content/buying-guides";

export const metadata = {
  title: "맥북 구매 가이드 | Notebook Atelier",
  description: "맥북 추천, Air vs Pro 비교, 학생용과 개발자용 가이드까지 구매 직전 판단에 필요한 글을 모았습니다.",
};

export default function BuyingGuidesIndexPage() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
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

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {buyingGuides.map((guide) => (
            <article key={guide.slug} className="surface-panel">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {guide.category}
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                {guide.title}
              </h2>
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
      </div>
    </main>
  );
}
