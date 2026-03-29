import Link from "next/link";
import { MacbookFinder } from "@/components/macbook-finder";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Notebook Atelier",
  inLanguage: "ko-KR",
  description: "4개의 질문으로 나에게 맞는 맥북을 빠르게 추천하는 구매 결정 도구",
};

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        <div className="shell relative overflow-hidden rounded-[32px] border border-white/60 px-5 pb-8 pt-5 shadow-[0_40px_120px_rgba(28,31,38,0.12)] sm:px-8 sm:pb-10 sm:pt-6 lg:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />
          <div className="ambient-orb absolute -left-24 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(255,255,255,0.18)_58%,transparent_72%)]" />
          <div className="ambient-orb absolute right-[-8rem] top-[-4rem] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(203,214,232,0.72),rgba(203,214,232,0.08)_60%,transparent_78%)] [animation-delay:1.6s]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="eyebrow">For Korean Buyers</p>
            <h1 className="mt-4 max-w-4xl text-balance font-display text-[2.8rem] leading-[0.94] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl">
              나에게 맞는 맥북,
              <br />
              바로 추천받기
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              고민은 줄이고 바로 답하세요. 4개의 질문만으로 지금 사기 좋은 모델과 구매 링크까지 이어드립니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-[var(--muted)]">
              <span className="rounded-full border border-black/8 bg-white/55 px-3 py-2">
                4개 질문
              </span>
              <span className="rounded-full border border-black/8 bg-white/55 px-3 py-2">
                1분 이내
              </span>
              <span className="rounded-full border border-black/8 bg-white/55 px-3 py-2">
                현재 판매 라인업 기준
              </span>
            </div>

            <div id="finder" className="mt-8">
              <MacbookFinder />
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-black/6 pt-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
              <p>더 읽고 비교하고 싶다면 구매 가이드에서 이어서 볼 수 있습니다.</p>
              <div className="flex flex-wrap gap-2">
                <Link className="pill-link px-4 py-2 text-sm text-[var(--ink)]" href="/buying-guides">
                  구매 가이드 보기
                </Link>
                <Link
                  className="pill-link px-4 py-2 text-sm text-[var(--ink)]"
                  href="/buying-guides/best-first-macbook"
                >
                  처음 사는 맥북
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
