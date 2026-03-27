"use client";

import { useTransition, useState } from "react";
import {
  finderQuestions,
  getRecommendation,
  type FinderAnswers,
} from "@/lib/macbook-finder";

const totalQuestions = finderQuestions.length;

export function MacbookFinder() {
  const [answers, setAnswers] = useState<FinderAnswers>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isPending, startTransition] = useTransition();

  const answeredCount = finderQuestions.filter((question) => answers[question.id]).length;
  const isComplete = answeredCount === totalQuestions;
  const activeQuestion = finderQuestions[currentStep];
  const recommendation = isComplete ? getRecommendation(answers) : null;

  const handleChoice = (questionId: string, value: string, stepIndex: number) => {
    startTransition(() => {
      setAnswers((prev) => ({ ...prev, [questionId]: value }));
      if (stepIndex < totalQuestions - 1) {
        setCurrentStep(stepIndex + 1);
      }
    });
  };

  const handleReset = () => {
    startTransition(() => {
      setAnswers({});
      setCurrentStep(0);
    });
  };

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-black/6 bg-[linear-gradient(160deg,rgba(255,255,255,0.86),rgba(241,234,225,0.86))] p-6 shadow-[0_34px_80px_rgba(31,35,40,0.12)] backdrop-blur-2xl sm:p-7">
      <div className="absolute inset-x-8 top-0 h-px bg-white/85" />
      <div className="absolute right-[-4rem] top-[-3rem] h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(202,214,234,0.85),transparent_68%)]" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              Finder
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.06em] text-[var(--ink)]">
              당신에게 맞는 맥북
            </h2>
          </div>
          <div className="rounded-full border border-black/8 bg-white/55 px-4 py-2 text-sm text-[var(--muted)]">
            {answeredCount}/{totalQuestions}
          </div>
        </div>

        <div className="mt-6 h-1 overflow-hidden rounded-full bg-black/6">
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,#15181d,#87715b)] transition-[width] duration-500 ease-out"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {finderQuestions.map((question, index) => {
            const selected = answers[question.id];

            return (
              <button
                key={question.id}
                type="button"
                onClick={() => setCurrentStep(index)}
                className={`rounded-full border px-3 py-2 text-sm transition ${
                  index === currentStep
                    ? "border-black/15 bg-[var(--ink)] text-white"
                    : selected
                      ? "border-black/10 bg-white/70 text-[var(--ink)]"
                      : "border-black/8 bg-white/35 text-[var(--muted)]"
                }`}
              >
                {question.label}
              </button>
            );
          })}
        </div>

        {!isComplete && activeQuestion ? (
          <div className="mt-7 space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                Question {currentStep + 1}
              </p>
              <h3 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[var(--ink)]">
                {activeQuestion.prompt}
              </h3>
            </div>

            <div className="grid gap-3">
              {activeQuestion.choices.map((choice) => {
                const isSelected = answers[activeQuestion.id] === choice.value;

                return (
                  <button
                    key={choice.value}
                    type="button"
                    disabled={isPending}
                    onClick={() =>
                      handleChoice(activeQuestion.id, choice.value, currentStep)
                    }
                    className={`rounded-[24px] border p-5 text-left transition duration-200 ${
                      isSelected
                        ? "border-transparent bg-[var(--ink)] text-white shadow-[0_22px_44px_rgba(24,26,31,0.2)]"
                        : "border-black/8 bg-white/70 text-[var(--ink)] hover:-translate-y-[1px] hover:border-black/14"
                    }`}
                  >
                    <p className="text-lg font-medium tracking-[-0.04em]">
                      {choice.title}
                    </p>
                    <p
                      className={`mt-2 text-sm leading-7 ${
                        isSelected ? "text-white/78" : "text-[var(--muted)]"
                      }`}
                    >
                      {choice.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        ) : recommendation ? (
          <div className="mt-7 space-y-6">
            <div className="rounded-[28px] border border-black/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(243,238,232,0.86))] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                Your Match
              </p>
              <h3 className="mt-3 font-display text-5xl tracking-[-0.06em] text-[var(--ink)]">
                {recommendation.primary.title}
              </h3>
              <p className="mt-3 text-lg text-[var(--ink)]">
                {recommendation.primary.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/8 bg-white/75 px-3 py-2 text-sm text-[var(--muted)]">
                  {recommendation.primary.chip}
                </span>
                <span className="rounded-full border border-black/8 bg-white/75 px-3 py-2 text-sm text-[var(--muted)]">
                  {recommendation.primary.size}
                </span>
                <span className="rounded-full border border-black/8 bg-white/75 px-3 py-2 text-sm text-[var(--muted)]">
                  {recommendation.primary.priceBand}
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {recommendation.primary.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[20px] border border-black/8 bg-white/64 px-4 py-3 text-sm leading-6 text-[var(--ink)]"
                  >
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                {recommendation.reasons.map((reason) => (
                  <p
                    key={reason}
                    className="rounded-[20px] border border-black/8 bg-[rgba(247,244,240,0.76)] px-4 py-3 text-sm leading-7 text-[var(--muted)]"
                  >
                    {reason}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={recommendation.primary.affiliatePlaceholder}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm text-white shadow-[0_20px_40px_rgba(24,26,31,0.18)]"
                >
                  쿠팡 파트너스 링크 슬롯
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm text-[var(--ink)]"
                >
                  다시 진단하기
                </button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
              <div className="rounded-[24px] border border-black/8 bg-white/60 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Alternative
                </p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                  {recommendation.alternative.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {recommendation.alternative.tagline}
                </p>
              </div>
              <div className="rounded-[24px] border border-black/8 bg-white/60 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Snapshot
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {recommendation.snapshotNote}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
