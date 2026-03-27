import { getMacbookModelById } from "@/lib/macbook-finder";

type BuyingGuideSection = {
  title: string;
  paragraphs: string[];
};

export type BuyingGuide = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  publishedAt: string;
  heroIntro: string;
  finderPrompt: string;
  recommendedModelIds: string[];
  sections: BuyingGuideSection[];
};

export const buyingGuides: BuyingGuide[] = [
  {
    slug: "macbook-recommendation",
    category: "맥북 추천",
    title: "지금 사기 좋은 맥북 추천 가이드",
    excerpt: "처음 사는 사람부터 업무용 사용자까지, 지금 기준으로 어떤 맥북이 가장 합리적인지 정리합니다.",
    seoTitle: "맥북 추천 2026 | 지금 사기 좋은 MacBook 고르는 법",
    seoDescription: "학생, 직장인, 개발자, 크리에이터 기준으로 지금 사기 좋은 맥북을 빠르게 정리한 추천 가이드.",
    publishedAt: "2026-03-28",
    heroIntro:
      "맥북 추천에서 가장 중요한 건 스펙 표를 오래 보는 것이 아니라, 내 사용 방식에 맞는 모델을 빠르게 좁히는 일입니다.",
    finderPrompt: "4개의 질문으로 나에게 맞는 맥북을 바로 진단해보세요.",
    recommendedModelIds: ["air-13-m5", "pro-14-m5", "pro-14-m5-pro"],
    sections: [
      {
        title: "가장 먼저 정리해야 할 기준",
        paragraphs: [
          "맥북 추천은 휴대성, 작업 강도, 화면 크기, 예산이라는 네 가지 기준으로 정리하면 대부분 답이 나옵니다.",
          "문서와 브라우저 중심이라면 Air 계열이 만족도가 높고, 개발과 영상 작업처럼 지속 성능이 중요하면 Pro 계열이 유리합니다.",
        ],
      },
      {
        title: "대부분의 사용자에게 좋은 선택",
        paragraphs: [
          "가볍고 오래 가는 기본형을 원한다면 MacBook Air 13이 가장 폭넓은 추천이 됩니다.",
          "휴대성과 성능을 같이 챙기고 싶다면 MacBook Pro 14가 가장 균형 잡힌 선택입니다.",
        ],
      },
    ],
  },
  {
    slug: "macbook-air-vs-pro",
    category: "비교 가이드",
    title: "MacBook Air vs Pro, 무엇이 다를까",
    excerpt: "가벼움과 성능 여유 사이에서 갈리는 핵심 차이를 실제 사용 기준으로 비교합니다.",
    seoTitle: "맥북 에어 vs 프로 | Air와 Pro 차이 빠르게 정리",
    seoDescription: "맥북 에어와 프로의 차이를 휴대성, 성능, 디스플레이, 작업 강도로 나눠 설명하는 비교 가이드.",
    publishedAt: "2026-03-28",
    heroIntro:
      "Air와 Pro의 차이는 단순히 비싼 쪽이 더 좋은지가 아니라, 어떤 사용자가 어떤 스트레스를 덜 느끼는지에 있습니다.",
    finderPrompt: "내 작업 방식이 Air에 가까운지 Pro에 가까운지 바로 확인해보세요.",
    recommendedModelIds: ["air-13-m5", "air-15-m5", "pro-14-m5"],
    sections: [
      {
        title: "Air가 더 좋은 경우",
        paragraphs: [
          "매일 들고 다니고, 문서와 웹 작업이 중심이며, 조용하고 오래 가는 배터리가 중요하다면 Air가 더 좋은 선택입니다.",
          "가벼운 작업에서는 Air가 더 만족도가 높고, 가격도 상대적으로 부담이 적습니다.",
        ],
      },
      {
        title: "Pro가 더 좋은 경우",
        paragraphs: [
          "개발, 영상 편집, 멀티태스킹처럼 오래 부하가 걸리는 작업은 Pro가 더 안정적입니다.",
          "디스플레이와 포트 구성, 지속 성능에서도 Pro가 분명한 장점이 있습니다.",
        ],
      },
    ],
  },
  {
    slug: "best-macbook-for-students",
    category: "학생용 맥북",
    title: "학생에게 맞는 맥북은 무엇일까",
    excerpt: "수업, 문서, 브라우저, 가벼운 편집 기준에서 학생용 맥북을 어떻게 고를지 정리합니다.",
    seoTitle: "학생 맥북 추천 | 대학생에게 맞는 MacBook 고르기",
    seoDescription: "대학생과 대학원생 기준으로 학생용 맥북을 고를 때 중요한 포인트와 추천 모델을 정리한 가이드.",
    publishedAt: "2026-03-28",
    heroIntro:
      "학생용 맥북은 최고 성능보다 오래 가는 배터리, 가벼운 무게, 그리고 몇 년을 써도 무리 없는 기본 성능이 더 중요합니다.",
    finderPrompt: "학생 기준으로 어떤 맥북이 가장 적합한지 바로 확인해보세요.",
    recommendedModelIds: ["air-13-m5", "air-15-m5"],
    sections: [
      {
        title: "학생용 맥북의 핵심 기준",
        paragraphs: [
          "학교와 카페를 오가며 쓰는 경우 무게와 배터리가 가장 먼저 체감됩니다.",
          "문서 작업, 발표, 웹 리서치 중심이라면 Air 13이 가장 합리적입니다.",
        ],
      },
      {
        title: "조금 더 넓은 화면이 필요한 경우",
        paragraphs: [
          "엑셀, PPT, 분할 화면 사용이 많다면 Air 15가 더 편할 수 있습니다.",
          "다만 이동이 아주 많다면 여전히 13인치가 더 가볍고 편합니다.",
        ],
      },
    ],
  },
  {
    slug: "best-macbook-for-developers",
    category: "개발자용 맥북",
    title: "개발자에게 맞는 맥북은 무엇일까",
    excerpt: "코드 편집, 브라우저 탭, 외부 모니터, 도커와 빌드 기준에서 개발용 맥북을 정리합니다.",
    seoTitle: "개발자 맥북 추천 | 코딩용 MacBook 고르기",
    seoDescription: "개발자 기준으로 Air와 Pro 사이를 어떻게 고를지, 코딩용 맥북 추천 포인트를 정리한 가이드.",
    publishedAt: "2026-03-28",
    heroIntro:
      "개발자용 맥북에서는 CPU보다 먼저 메모리 여유와 지속 성능, 외부 모니터 환경이 체감 차이를 만듭니다.",
    finderPrompt: "개발과 멀티태스킹 기준으로 가장 맞는 모델을 진단해보세요.",
    recommendedModelIds: ["pro-14-m5", "pro-14-m5-pro"],
    sections: [
      {
        title: "Air로 충분한 개발 환경",
        paragraphs: [
          "가벼운 웹 개발, 기본적인 IDE 사용, 적당한 멀티태스킹 수준이라면 Air도 충분할 수 있습니다.",
          "다만 브라우저 탭이 많고 여러 도구를 동시에 열면 Pro의 여유가 더 빨리 체감됩니다.",
        ],
      },
      {
        title: "Pro를 권하는 상황",
        paragraphs: [
          "도커, 로컬 DB, 여러 프로젝트, 외부 모니터, 지속적인 빌드가 겹친다면 Pro가 더 안정적입니다.",
          "장시간 작업하는 개발자라면 MacBook Pro 14 계열이 가장 무난한 추천입니다.",
        ],
      },
    ],
  },
  {
    slug: "should-i-buy-a-macbook-now",
    category: "구매 타이밍",
    title: "지금 맥북을 사도 될까",
    excerpt: "지금 사도 되는지, 기다리는 편이 나은지 판단할 때 봐야 할 기준을 정리합니다.",
    seoTitle: "맥북 지금 사도 될까 | 구매 타이밍 판단 가이드",
    seoDescription: "맥북 구매 타이밍을 판단할 때 확인해야 할 기준과 지금 사도 되는 경우를 정리한 가이드.",
    publishedAt: "2026-03-28",
    heroIntro:
      "맥북 구매 타이밍은 루머보다 지금 필요한 작업, 현재 가격대, 대체 가능한 모델이 있는지를 기준으로 판단하는 편이 훨씬 실용적입니다.",
    finderPrompt: "지금 필요한 모델이 무엇인지 먼저 좁히고 구매 타이밍을 판단해보세요.",
    recommendedModelIds: ["air-13-m5", "pro-14-m5"],
    sections: [
      {
        title: "지금 사도 되는 경우",
        paragraphs: [
          "현재 장비가 느리거나 배터리와 발열 때문에 작업이 끊긴다면, 기다리는 비용이 더 커질 수 있습니다.",
          "이미 사용 목적이 분명하고 현재 라인업 안에서 답이 나온다면 지금 사는 편이 낫습니다.",
        ],
      },
      {
        title: "조금 더 기다려도 되는 경우",
        paragraphs: [
          "당장 급하지 않고, 가격 변동이나 새 발표가 가까워 보인다면 조금 더 지켜볼 수 있습니다.",
          "다만 기다림 자체가 목적이 되면 결국 결정만 늦어질 수 있습니다.",
        ],
      },
    ],
  },
];

export function getBuyingGuideBySlug(slug: string) {
  return buyingGuides.find((guide) => guide.slug === slug) ?? null;
}

export function getBuyingGuideRecommendations(slug: string) {
  const guide = getBuyingGuideBySlug(slug);
  if (!guide) {
    return [];
  }

  return guide.recommendedModelIds
    .map((modelId) => getMacbookModelById(modelId))
    .filter((model): model is NonNullable<typeof model> => Boolean(model));
}
