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
    prompt: "어떤 리듬으로 들고 다니나요?",
    choices: [
      {
        value: "light",
        title: "매일 가볍게",
        description: "카페, 강의실, 회의실처럼 이동이 잦고 무게가 가장 중요합니다.",
      },
      {
        value: "balanced",
        title: "가끔 이동하며 균형",
        description: "휴대성과 성능이 모두 필요하고 한쪽으로 치우치고 싶지 않습니다.",
      },
      {
        value: "power",
        title: "자리 잡고 성능 우선",
        description: "이동보다 작업 밀도와 확장성을 더 중요하게 봅니다.",
      },
    ],
  },
  {
    id: "workload",
    label: "작업 강도",
    prompt: "가장 자주 하는 작업은 무엇인가요?",
    choices: [
      {
        value: "casual",
        title: "문서와 브라우징",
        description: "리서치, 문서 작성, 가벼운 편집, 온라인 수업이 중심입니다.",
      },
      {
        value: "builder",
        title: "개발과 멀티태스킹",
        description: "코드 편집, 다수의 앱 실행, 외부 디스플레이 활용이 중요합니다.",
      },
      {
        value: "studio",
        title: "영상과 크리에이티브",
        description: "영상 편집, 모션 그래픽, 대용량 파일 처리까지 염두에 둡니다.",
      },
    ],
  },
  {
    id: "display",
    label: "화면",
    prompt: "어떤 화면 크기가 더 편한가요?",
    choices: [
      {
        value: "compact",
        title: "작고 빠른 쪽",
        description: "가방에 넣기 쉽고 어디서나 펼치기 쉬운 크기가 좋습니다.",
      },
      {
        value: "roomy",
        title: "넓지만 부담 없는 쪽",
        description: "화면 여유는 챙기되 너무 무거워지는 것은 원하지 않습니다.",
      },
      {
        value: "max",
        title: "최대한 크게",
        description: "여러 타임라인과 툴 패널을 넉넉하게 띄워두고 작업하고 싶습니다.",
      },
    ],
  },
  {
    id: "budget",
    label: "예산",
    prompt: "예산은 어느 정도로 생각하나요?",
    choices: [
      {
        value: "value",
        title: "가장 합리적으로",
        description: "필요한 것 이상으로 쓰지 않고 오래 만족할 기본형을 원합니다.",
      },
      {
        value: "premium",
        title: "조금 더 써도 좋음",
        description: "확실히 체감되는 상위 경험이라면 투자할 수 있습니다.",
      },
      {
        value: "flagship",
        title: "최상위까지 가능",
        description: "성능과 작업 효율이 확실하다면 가장 높은 급도 고려합니다.",
      },
    ],
  },
];

const answerReasoning: Record<string, Record<string, string>> = {
  mobility: {
    light: "이동이 잦다면 가벼운 무게와 긴 배터리가 가장 먼저 체감됩니다.",
    balanced: "휴대성과 성능을 동시에 챙겨야 할 때는 중간 지점의 균형이 중요합니다.",
    power: "자리를 잡고 작업한다면 두께와 무게보다 성능 헤드룸이 더 중요합니다.",
  },
  workload: {
    casual: "문서와 브라우징 중심이라면 조용하고 오래가는 모델이 효율적입니다.",
    builder: "개발과 멀티태스킹에는 메모리 여유와 지속 성능이 추천의 핵심입니다.",
    studio: "영상과 크리에이티브 작업은 GPU 여유와 큰 화면이 직접적인 생산성으로 이어집니다.",
  },
  display: {
    compact: "작은 화면 선호는 가방에 넣고 펼치는 리듬과 직결됩니다.",
    roomy: "넓은 화면을 원하지만 이동도 고려한다면 15인치 안팎이 가장 현실적입니다.",
    max: "큰 화면 선호는 Pro 계열의 가치가 커지는 가장 분명한 신호입니다.",
  },
  budget: {
    value: "예산을 아끼고 싶다면 오래 만족하는 기본형으로 좁히는 편이 좋습니다.",
    premium: "조금 더 투자해도 된다면 성능이나 화면에서 체감이 있는 구간을 노릴 수 있습니다.",
    flagship: "예산 여유가 충분하면 장기 사용 기준으로 상위 Pro까지 바로 올라갈 수 있습니다.",
  },
};

export const macbookCatalog: MacbookModel[] = [
  {
    id: "air-13-m5",
    title: "MacBook Air 13",
    chip: "M5",
    size: "13-inch",
    priceBand: "가장 합리적인 시작점",
    tagline: "가볍고 오래가며, 기본 작업에는 가장 설득력 있는 선택",
    highlights: ["매일 들고 다니기 쉬운 무게", "문서·웹·수업 중심에 최적", "배터리 효율과 정숙성"],
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
    tagline: "Air의 가벼운 성격을 유지하면서 화면 여유를 챙기는 선택",
    highlights: [
      "넓은 화면과 부드러운 이동성",
      "문서·기획·가벼운 편집에 유리",
      "카페와 사무실을 오가는 사용자에게 적합",
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
    highlights: ["개발과 멀티태스킹에 안정적", "보다 선명한 디스플레이 경험", "Air보다 긴 작업 지속성"],
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
    tagline: "개발과 제작 업무가 모두 무겁다면 가장 설득력 있는 실전형",
    highlights: [
      "여러 앱을 동시에 돌려도 여유로운 성능",
      "코드·디자인·편집을 함께 처리하기 좋음",
      "작지만 강한 고성능 포맷",
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
    tagline: "영상과 크리에이티브 작업이 본업이라면 가장 직접적인 선택",
    highlights: ["넓은 화면과 높은 GPU 여유", "영상·모션·대용량 작업에 적합", "장시간 집중 작업을 위한 플래그십"],
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
