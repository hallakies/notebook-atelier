import Link from "next/link";

const quickChecks = [
  {
    title: "Air가 맞는 사람",
    body: "문서, 브라우저, 회의 중심이고 가벼운 무게와 긴 배터리를 먼저 체감하는 사람",
  },
  {
    title: "Pro가 맞는 사람",
    body: "개발, 멀티태스킹, 영상 작업처럼 오래 부하가 걸리고 화면과 성능 여유가 중요한 사람",
  },
  {
    title: "지금 사도 되는 사람",
    body: "지금 당장 작업이 불편하고 필요한 모델 방향이 이미 보이는데 비교만 계속하고 있는 사람",
  },
];

const faqItems = [
  {
    question: "맥북 추천은 어떤 기준으로 봐야 하나요?",
    answer:
      "이동 빈도, 작업 강도, 화면 크기, 예산을 먼저 정리하는 편이 가장 빠릅니다. 문서와 회의 중심이면 Air, 개발과 영상처럼 오래 부하가 걸리면 Pro가 맞는 경우가 많습니다.",
  },
  {
    question: "맥북 에어와 프로 중 무엇이 더 좋나요?",
    answer:
      "무조건 Pro가 더 좋은 것은 아닙니다. 많이 들고 다니고 기본 작업이 중심이면 Air 만족도가 높고, 멀티태스킹과 지속 성능이 중요하면 Pro가 더 안정적입니다.",
  },
  {
    question: "지금 맥북을 사도 괜찮을까요?",
    answer:
      "지금 작업이 이미 불편하고 필요한 모델 방향이 분명하다면 지금 사는 편이 낫습니다. 단순히 루머만 기다리면 결정만 늦어질 가능성이 큽니다.",
  },
];

export const metadata = {
  title: "추천 기준 보기 | Notebook Atelier",
  description:
    "Notebook Atelier가 맥북을 어떤 기준으로 추천하는지 설명하는 안내 페이지",
};

export default function HowToChoosePage() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="rounded-[32px] border border-black/6 bg-[rgba(255,255,255,0.68)] p-6 shadow-[0_28px_80px_rgba(35,38,43,0.08)] backdrop-blur-xl sm:p-8">
          <p className="eyebrow">How To Choose</p>
          <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-[var(--ink)]">
            맥북을 추천할 때
            <br />
            무엇을 먼저 보는가
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            이 페이지는 추천 기준을 설명합니다. 이동, 작업 강도, 화면 크기, 예산을
            기준으로 선택지를 줄여서 빠르게 판단하는 방식입니다.
          </p>
          <div className="mt-6 rounded-[24px] border border-black/8 bg-[rgba(255,255,255,0.74)] p-4 text-sm leading-7 text-[var(--muted)] sm:p-5">
            <p className="font-medium text-[var(--ink)]">이 페이지의 역할</p>
            <p className="mt-2">
              설문이 어떤 기준으로 추천하는지 설명하는 페이지입니다. 모델 추천이
              필요하면 홈에서 바로 진단하면 됩니다.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link className="primary-link w-full justify-center sm:w-auto" href="/#finder">
              4문항 진단 시작하기
            </Link>
            <Link className="secondary-link w-full justify-center sm:w-auto" href="/buying-guides">
              구매 가이드 보기
            </Link>
          </div>
        </header>

        <section className="mt-10 rounded-[30px] border border-black/6 bg-[rgba(255,255,255,0.54)] p-6 backdrop-blur-xl">
          <p className="eyebrow">Three Lenses</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            먼저 보는 기준은 세 가지입니다
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {quickChecks.map((item) => (
              <article key={item.title} className="surface-panel">
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[30px] border border-black/6 bg-[rgba(255,255,255,0.46)] p-6 backdrop-blur-xl">
          <p className="eyebrow">How The Quiz Works</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            질문은 짧고, 결과는 바로 구매로 이어집니다
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="surface-panel">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Step 1</p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                사용 패턴 정리
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                얼마나 자주 들고 다니는지, 어떤 작업을 하는지, 화면과 예산을 묻습니다.
              </p>
            </article>
            <article className="surface-panel">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Step 2</p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                Air와 Pro 정리
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                대부분의 고민은 여기서 먼저 줄어듭니다. 그 다음은 크기와 예산 차이입니다.
              </p>
            </article>
            <article className="surface-panel">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Step 3</p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                바로 구매 이동
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                추천이 끝나면 바로 살 수 있는 상품까지 연결해서 결정을 미루지 않게 만듭니다.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-[30px] border border-black/6 bg-[rgba(255,255,255,0.42)] p-6 backdrop-blur-xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
            자주 묻는 질문
          </h2>
          <div className="mt-6 grid gap-3">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[24px] border border-black/6 bg-[rgba(255,255,255,0.64)] px-4 py-5 sm:px-5"
              >
                <h3 className="text-lg font-medium tracking-[-0.03em] text-[var(--ink)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
