export type FinderAnswers = Record<string, string | undefined>;

type FinderChoice = {
  value: string;
  title: string;
  description: string;
};

type FinderQuestion = {
  id: string;
  label: string;
  prompt: string;
  choices: FinderChoice[];
};

type MacbookModel = {
  id: string;
  title: string;
  chip: string;
  size: string;
  priceBand: string;
  tagline: string;
  highlights: string[];
  affiliatePlaceholder: string;
  weights: Record<string, Record<string, number>>;
};

export const lineupSnapshotNote =
  "추천 로직은 Apple 공식 MacBook 판매 페이지를 2026년 3월 27일 기준으로 확인한 현재 라인업을 바탕으로 구성했습니다.";

export const finderQuestions: FinderQuestion[] = [
  {
    id: "mobility",
    label: "휴대성",
    prompt: "얼마나 자주 들고 다니나요?",
    choices: [
      {
        value: "light",
        title: "매일 가볍게",
        description: "학교, 카페, 회의실처럼 이동이 많고 무게와 배터리가 가장 중요합니다.",
      },
      {
        value: "balanced",
        title: "균형 있게",
        description: "휴대성도 필요하지만 화면과 성능도 동시에 놓치고 싶지 않습니다.",
      },
      {
        value: "power",
        title: "성능 우선",
        description: "이동보다 작업 강도와 지속 성능이 더 중요합니다.",
      },
    ],
  },
  {
    id: "workload",
    label: "작업 강도",
    prompt: "주로 어떤 작업을 하나요?",
    choices: [
      {
        value: "casual",
        title: "문서와 웹 작업",
        description: "문서 작성, 브라우징, 수업, 회의, 가벼운 멀티태스킹이 중심입니다.",
      },
      {
        value: "builder",
        title: "개발과 멀티태스킹",
        description: "코드 편집, 여러 앱 동시 실행, 외부 모니터 사용이 중요합니다.",
      },
      {
        value: "studio",
        title: "영상과 크리에이티브",
        description: "영상 편집, 모션 그래픽, 큰 파일 처리처럼 성능 여유가 필요합니다.",
      },
    ],
  },
  {
    id: "display",
    label: "화면",
    prompt: "원하는 화면 크기는 어느 쪽인가요?",
    choices: [
      {
        value: "compact",
        title: "작고 빠른 쪽",
        description: "가방에 넣고 꺼내기 쉽고, 어디서나 펼치기 편한 크기가 좋습니다.",
      },
      {
        value: "roomy",
        title: "넓지만 과하지 않게",
        description: "화면 여유는 필요하지만 지나치게 무거운 모델은 피하고 싶습니다.",
      },
      {
        value: "max",
        title: "최대한 크게",
        description: "여러 창을 띄우고 긴 시간 작업하는 데 큰 화면이 중요합니다.",
      },
    ],
  },
  {
    id: "budget",
    label: "예산",
    prompt: "예산은 어느 정도까지 생각하나요?",
    choices: [
      {
        value: "value",
        title: "합리적으로",
        description: "필요한 만큼만 쓰고, 오래 만족할 기본형을 원합니다.",
      },
      {
        value: "premium",
        title: "조금 더 투자 가능",
        description: "체감 성능이나 디스플레이에서 확실한 차이가 있다면 투자할 수 있습니다.",
      },
      {
        value: "flagship",
        title: "최상위도 가능",
        description: "장기 사용과 최고 성능을 위해 상위 모델도 고려합니다.",
      },
    ],
  },
];

const answerReasoning: Record<string, Record<string, string>> = {
  mobility: {
    light: "이동이 많다면 가벼운 무게와 긴 배터리가 가장 먼저 체감됩니다.",
    balanced: "휴대성과 성능을 동시에 챙기려는 중간 지점의 균형이 중요합니다.",
    power: "책상에 두고 오래 작업한다면 무게보다 성능 여유가 더 중요해집니다.",
  },
  workload: {
    casual: "문서와 웹 작업 중심이라면 조용하고 오래 가는 모델이 효율적입니다.",
    builder: "개발과 멀티태스킹에는 메모리 여유와 지속 성능이 추천의 핵심입니다.",
    studio: "영상과 크리에이티브 작업은 GPU 여유와 큰 화면이 바로 생산성으로 이어집니다.",
  },
  display: {
    compact: "작은 화면 선호는 가방에 넣고 펼치는 리듬과 직결됩니다.",
    roomy: "넓은 화면이 필요하지만 무게도 고려한다면 15인치나 14인치 Pro가 적절합니다.",
    max: "큰 화면 선호가 분명하다면 상위 Pro 계열의 가치가 커집니다.",
  },
  budget: {
    value: "예산을 아끼고 싶다면 기본형에서 가장 만족도가 높은 조합을 고르는 편이 좋습니다.",
    premium: "조금 더 투자할 수 있다면 화면과 성능에서 체감 차이가 분명한 구간이 있습니다.",
    flagship: "예산 여유가 충분하다면 장기 사용 기준으로 상위 Pro가 더 단단한 선택이 됩니다.",
  },
};

export const macbookCatalog: MacbookModel[] = [
  {
    id: "air-13-m5",
    title: "MacBook Air 13",
    chip: "M5",
    size: "13-inch",
    priceBand: "가장 합리적인 시작점",
    tagline: "가볍고 오래 가며, 일상적인 작업은 충분히 소화하는 가장 보편적인 선택",
    highlights: [
      "매일 들고 다니기 편한 무게",
      "문서, 웹, 수업, 회의용으로 안정적",
      "배터리 효율이 우수한 기본형",
    ],
    affiliatePlaceholder: "#finder",
    weights: {
      mobility: { light: 5, balanced: 2, power: 0 },
      workload: { casual: 5, builder: 1, studio: 0 },
      display: { compact: 4, roomy: 1, max: 0 },
      budget: { value: 5, premium: 2, flagship: 0 },
    },
  },
  {
    id: "air-15-m5",
    title: "MacBook Air 15",
    chip: "M5",
    size: "15-inch",
    priceBand: "넓은 화면의 Air",
    tagline: "Air의 가벼움은 유지하면서도 화면 여유를 원하는 사람에게 맞는 선택",
    highlights: [
      "넓은 화면과 부드러운 휴대성의 균형",
      "문서 작업과 가벼운 편집에 여유로운 공간",
      "집과 카페를 오가는 사용자에게 적합",
    ],
    affiliatePlaceholder: "#finder",
    weights: {
      mobility: { light: 3, balanced: 4, power: 1 },
      workload: { casual: 4, builder: 2, studio: 1 },
      display: { compact: 0, roomy: 5, max: 1 },
      budget: { value: 1, premium: 4, flagship: 1 },
    },
  },
  {
    id: "pro-14-m5",
    title: "MacBook Pro 14",
    chip: "M5",
    size: "14-inch",
    priceBand: "균형 잡힌 Pro",
    tagline: "휴대성과 Pro 계열의 안정감을 동시에 원하는 사용자에게 맞는 선택",
    highlights: [
      "개발과 멀티태스킹에 안정적",
      "보다 선명한 디스플레이 경험",
      "Air보다 긴 작업 지속성",
    ],
    affiliatePlaceholder: "#finder",
    weights: {
      mobility: { light: 2, balanced: 5, power: 3 },
      workload: { casual: 2, builder: 4, studio: 2 },
      display: { compact: 3, roomy: 2, max: 1 },
      budget: { value: 0, premium: 4, flagship: 2 },
    },
  },
  {
    id: "pro-14-m5-pro",
    title: "MacBook Pro 14",
    chip: "M5 Pro",
    size: "14-inch",
    priceBand: "본격 작업용 Pro",
    tagline: "개발과 고강도 업무가 모두 무겁다면 가장 만족도가 높은 실전형",
    highlights: [
      "여러 앱을 동시에 돌려도 여유로운 성능",
      "코드와 디자인, 영상 편집을 함께 처리하기 좋음",
      "작지만 강한 고성능 조합",
    ],
    affiliatePlaceholder: "#finder",
    weights: {
      mobility: { light: 1, balanced: 4, power: 4 },
      workload: { casual: 0, builder: 5, studio: 4 },
      display: { compact: 2, roomy: 3, max: 2 },
      budget: { value: 0, premium: 4, flagship: 4 },
    },
  },
  {
    id: "pro-16-m5-max",
    title: "MacBook Pro 16",
    chip: "M5 Max",
    size: "16-inch",
    priceBand: "최상위 작업용",
    tagline: "영상과 크리에이티브 작업이 본업이라면 가장 직접적인 해답이 되는 선택",
    highlights: [
      "넓은 화면과 높은 GPU 여유",
      "영상, 모션, 대용량 작업에 적합",
      "장시간 집중 작업을 위한 플래그십 구성",
    ],
    affiliatePlaceholder: "#finder",
    weights: {
      mobility: { light: 0, balanced: 1, power: 5 },
      workload: { casual: 0, builder: 3, studio: 6 },
      display: { compact: 0, roomy: 1, max: 6 },
      budget: { value: 0, premium: 1, flagship: 6 },
    },
  },
];

export function getMacbookModelById(modelId: string) {
  return macbookCatalog.find((model) => model.id === modelId) ?? null;
}

export function getRecommendation(answers: FinderAnswers) {
  const scored = macbookCatalog
    .map((model) => {
      const score = Object.entries(answers).reduce((total, [questionId, value]) => {
        if (!value) {
          return total;
        }

        return total + (model.weights[questionId]?.[value] ?? 0);
      }, 0);

      return { model, score };
    })
    .sort((left, right) => right.score - left.score);

  const reasons = finderQuestions
    .map((question) => {
      const value = answers[question.id];
      return value ? answerReasoning[question.id]?.[value] : null;
    })
    .filter((reason): reason is string => Boolean(reason))
    .slice(0, 3);

  return {
    primary: scored[0].model,
    alternative: scored[1].model,
    reasons,
    snapshotNote: lineupSnapshotNote,
  };
}
