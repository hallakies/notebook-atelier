import Link from "next/link";

const footerLinks = [
  {
    href: "/#finder",
    label: "추천 받기",
    description: "질문 4개로 바로 추천 받기",
  },
  {
    href: "/how-to-choose",
    label: "추천 기준 보기",
    description: "추천이 어떤 기준으로 나오는지 보기",
  },
  {
    href: "/buying-guides",
    label: "가이드 글 찾기",
    description: "비교 글과 상황별 가이드 보기",
  },
];

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-black/6 bg-[rgba(255,255,255,0.52)] p-5 backdrop-blur-xl sm:p-6">
        <p className="eyebrow">Navigate</p>
        <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
          페이지마다 해야 할 일은 하나만 남깁니다
        </h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[22px] border border-black/8 bg-white/72 p-4 transition hover:-translate-y-[1px] hover:border-black/12"
            >
              <p className="text-sm font-medium text-[var(--ink)]">{item.label}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
