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
  {
    slug: "best-macbook-for-office-work",
    category: "직장인용 맥북",
    title: "직장인에게 맞는 맥북은 무엇일까",
    excerpt: "문서, 메일, 화상회의, 멀티태스킹 중심의 업무 환경에서 어떤 맥북이 가장 합리적인지 정리합니다.",
    seoTitle: "직장인 맥북 추천 | 업무용 MacBook 고르기",
    seoDescription: "문서 작업과 화상회의, 멀티태스킹 중심의 업무 환경에서 직장인에게 맞는 맥북을 고르는 기준을 정리한 가이드.",
    publishedAt: "2026-03-28",
    heroIntro:
      "직장인용 맥북에서는 최고 성능보다 안정적인 배터리, 회의와 이동에 편한 무게, 여러 앱을 동시에 열어도 답답하지 않은 여유가 더 중요합니다.",
    finderPrompt: "업무 방식 기준으로 어떤 맥북이 가장 잘 맞는지 바로 진단해보세요.",
    recommendedModelIds: ["air-13-m5", "air-15-m5", "pro-14-m5"],
    sections: [
      {
        title: "문서와 회의 중심이라면",
        paragraphs: [
          "슬랙, 메일, 노션, 브라우저, 화상회의가 중심인 업무 환경이라면 Air 계열이 가장 편하고 효율적입니다.",
          "특히 외근과 이동이 잦다면 Air 13이 가볍고 부담이 적어 만족도가 높습니다.",
        ],
      },
      {
        title: "멀티태스킹이 많다면",
        paragraphs: [
          "엑셀, 브라우저 탭, 메신저, 화상회의, 외부 모니터가 동시에 열리는 경우라면 Air 15나 Pro 14가 더 안정적입니다.",
          "작업이 끊기지 않는 여유가 중요하다면 Pro 14가 가장 무난한 상위 선택입니다.",
        ],
      },
    ],
  },
  {
    slug: "best-macbook-for-video-editing",
    category: "영상편집 맥북",
    title: "영상 편집용 맥북은 무엇이 좋을까",
    excerpt: "프리미어 프로, 파이널 컷, 큰 파일 미리보기와 렌더링 기준에서 영상 편집용 맥북을 정리합니다.",
    seoTitle: "영상 편집 맥북 추천 | 크리에이터용 MacBook 고르기",
    seoDescription: "영상 편집과 디자인 작업 기준으로 Air와 Pro 중 어떤 맥북이 적합한지 정리한 크리에이터용 가이드.",
    publishedAt: "2026-03-28",
    heroIntro:
      "영상 편집용 맥북은 단순히 열리는지보다, 타임라인이 끊기지 않는지와 긴 작업을 버틸 수 있는지가 핵심입니다.",
    finderPrompt: "영상 편집과 크리에이티브 작업 기준으로 가장 맞는 모델을 확인해보세요.",
    recommendedModelIds: ["pro-14-m5-pro", "pro-16-m5-max"],
    sections: [
      {
        title: "Air로 가능한 편집 작업",
        paragraphs: [
          "짧은 클립 편집, 가벼운 컷 편집, 자막 작업 정도라면 Air도 충분할 수 있습니다.",
          "다만 레이어가 많아지거나 긴 영상, 고해상도 소스를 다루면 곧 한계가 드러날 수 있습니다.",
        ],
      },
      {
        title: "Pro가 필요한 작업",
        paragraphs: [
          "긴 타임라인, 반복 렌더링, 색보정, 여러 크리에이티브 앱을 함께 여는 작업은 Pro 계열이 훨씬 안정적입니다.",
          "영상 편집이 수익과 직결된다면 MacBook Pro 14 이상부터 보는 편이 안전합니다.",
        ],
      },
    ],
  },
  {
    slug: "best-first-macbook",
    category: "입문자용 맥북",
    title: "처음 사는 맥북, 무엇부터 보면 좋을까",
    excerpt: "맥북을 처음 사는 사람이 가장 먼저 줄여야 할 선택지와, 과하게 사지 않는 기준을 정리합니다.",
    seoTitle: "처음 사는 맥북 추천 | 첫 MacBook 고르기",
    seoDescription: "맥북을 처음 사는 사람이 Air와 Pro 사이에서 무엇을 먼저 보고, 어디까지 사면 충분한지 정리한 입문 가이드.",
    publishedAt: "2026-03-29",
    heroIntro:
      "처음 사는 맥북은 가장 비싼 모델을 고르는 일이 아니라, 내 작업에 비해 과한 모델을 피하는 일부터 시작하는 편이 좋습니다.",
    finderPrompt: "처음 사는 기준으로 어떤 맥북이 가장 무난한지 바로 진단해보세요.",
    recommendedModelIds: ["air-13-m5", "air-15-m5", "pro-14-m5"],
    sections: [
      {
        title: "첫 맥북에서 가장 흔한 실수",
        paragraphs: [
          "스펙 표만 오래 보다 보면 결국 가장 비싼 모델이 안전해 보이지만, 실제로는 내 사용 패턴보다 과한 경우가 많습니다.",
          "문서와 웹 작업, 수업, 회의, 가벼운 멀티태스킹이 중심이라면 Air 계열부터 보는 편이 합리적입니다.",
        ],
      },
      {
        title: "처음 사는 사람에게 무난한 선택",
        paragraphs: [
          "대부분의 입문자에게는 MacBook Air 13이 가장 부담이 적고 만족도가 높은 출발점입니다.",
          "화면이 조금 더 넓었으면 좋겠지만 Pro까지는 필요 없을 때는 Air 15가 자연스러운 다음 선택입니다.",
        ],
      },
    ],
  },
  {
    slug: "macbook-air-13-vs-15",
    category: "화면 크기 비교",
    title: "MacBook Air 13 vs 15, 무엇이 더 나을까",
    excerpt: "같은 Air 계열 안에서도 13인치와 15인치의 체감 차이가 어디서 갈리는지 정리합니다.",
    seoTitle: "맥북 에어 13 vs 15 | 화면 크기 선택 가이드",
    seoDescription: "맥북 에어 13인치와 15인치 중 무엇이 더 잘 맞는지, 휴대성과 화면 여유 기준으로 정리한 비교 가이드.",
    publishedAt: "2026-03-29",
    heroIntro:
      "MacBook Air 13과 15의 차이는 단순히 화면이 커지는 정도가 아니라, 매일 들고 다니는 리듬과 분할 화면 사용 습관에서 갈립니다.",
    finderPrompt: "휴대성과 화면 여유 중 어디에 더 무게를 두는지 바로 확인해보세요.",
    recommendedModelIds: ["air-13-m5", "air-15-m5"],
    sections: [
      {
        title: "13인치가 더 좋은 경우",
        paragraphs: [
          "학교, 카페, 회의실처럼 이동이 많고 가볍게 열고 닫는 리듬이 중요하다면 13인치가 더 편합니다.",
          "가방에 넣고 다니는 부담이 적고, 첫 맥북으로도 가장 무난한 선택입니다.",
        ],
      },
      {
        title: "15인치가 더 좋은 경우",
        paragraphs: [
          "엑셀, PPT, 웹 브라우저, 문서 편집을 동시에 띄우는 습관이 있다면 15인치의 화면 여유가 체감됩니다.",
          "다만 이동이 아주 많다면 넓은 화면의 장점보다 크기와 무게가 먼저 느껴질 수 있습니다.",
        ],
      },
    ],
  },
  {
    slug: "best-macbook-for-document-work",
    category: "문서 작업용 맥북",
    title: "문서 작업용 맥북, 어디까지면 충분할까",
    excerpt: "워드, 엑셀, 브라우저, 회의, 노션 중심의 문서 작업이라면 어떤 맥북이 가장 효율적인지 정리합니다.",
    seoTitle: "문서 작업용 맥북 추천 | 사무·문서용 MacBook 고르기",
    seoDescription: "문서 작성, 엑셀, 브라우저, 화상회의 중심의 작업에 어떤 맥북이 적합한지 정리한 문서 작업용 가이드.",
    publishedAt: "2026-03-29",
    heroIntro:
      "문서 작업용 맥북에서는 최고 성능보다 무게, 배터리, 화면 여유, 여러 앱을 동시에 열었을 때의 안정감이 더 중요합니다.",
    finderPrompt: "문서와 회의 중심의 작업 기준으로 어떤 맥북이 맞는지 바로 진단해보세요.",
    recommendedModelIds: ["air-13-m5", "air-15-m5", "pro-14-m5"],
    sections: [
      {
        title: "문서 작업에서 먼저 체감되는 것",
        paragraphs: [
          "워드, 엑셀, 브라우저, 노션, 메일, 화상회의가 중심이라면 무게와 배터리, 발열과 소음이 먼저 체감됩니다.",
          "이런 작업은 대부분 Air 계열로 충분하고, 오히려 가볍게 들고 다닐 수 있는 쪽이 만족도가 높습니다.",
        ],
      },
      {
        title: "화면 여유가 필요한 경우",
        paragraphs: [
          "엑셀과 브라우저를 자주 나란히 열고, 문서와 메신저, 회의를 동시에 보는 습관이 있다면 Air 15가 더 편할 수 있습니다.",
          "여기에 외부 모니터와 긴 멀티태스킹이 더해지면 Pro 14도 검토할 만합니다.",
        ],
      },
    ],
  },
  {
    slug: "best-macbook-for-portability",
    category: "휴대성 중심 맥북",
    title: "가볍게 들고 다닐 맥북은 무엇이 좋을까",
    excerpt: "학교, 카페, 회의실, 출장처럼 이동이 많은 사용자에게 어떤 맥북이 가장 잘 맞는지 정리합니다.",
    seoTitle: "가벼운 맥북 추천 | 휴대성 중심 MacBook 고르기",
    seoDescription: "휴대성과 배터리를 가장 중요하게 보는 사용자를 위한 가벼운 맥북 추천 가이드.",
    publishedAt: "2026-03-29",
    heroIntro:
      "가벼운 맥북을 찾는다면 숫자로만 비교하기보다, 얼마나 자주 꺼내고 들고 다니는지부터 생각하는 편이 훨씬 정확합니다.",
    finderPrompt: "휴대성과 배터리 기준으로 어떤 맥북이 맞는지 바로 진단해보세요.",
    recommendedModelIds: ["air-13-m5", "air-15-m5"],
    sections: [
      {
        title: "정말 가벼운 쪽이 필요한 사람",
        paragraphs: [
          "매일 가방에 넣고 다니고, 수업과 회의, 카페 작업이 많다면 작은 크기와 가벼운 무게가 가장 먼저 체감됩니다.",
          "이 경우에는 MacBook Air 13이 가장 자연스러운 선택입니다.",
        ],
      },
      {
        title: "휴대성과 화면을 같이 챙기고 싶다면",
        paragraphs: [
          "이동은 많지만 13인치 화면이 자주 답답하다면 Air 15가 더 만족스러울 수 있습니다.",
          "다만 정말 자주 들고 다니는 사람일수록 다시 13인치의 장점이 커집니다.",
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
