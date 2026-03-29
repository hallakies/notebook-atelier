import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

function loadSecretsFromPs1(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const matches = content.matchAll(/\$env:([A-Z0-9_]+)\s*=\s*"([^"]*)"/g);

  for (const match of matches) {
    const [, key, value] = match;
    if (!process.env[key] && value) {
      process.env[key] = value;
    }
  }
}

function parseArgs(argv) {
  const options = {
    all: false,
    dryRun: false,
    limit: 2,
    slug: "",
    next: false,
    resetState: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--all") {
      options.all = true;
      continue;
    }

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    if (arg === "--slug") {
      options.slug = argv[index + 1] ?? "";
      index += 1;
      continue;
    }

    if (arg === "--limit") {
      options.limit = Number(argv[index + 1] ?? "2");
      index += 1;
      continue;
    }

    if (arg === "--next") {
      options.next = true;
      continue;
    }

    if (arg === "--reset-state") {
      options.resetState = true;
    }
  }

  return options;
}

function loadTopics() {
  const topicsPath = path.join(repoRoot, "ops", "content", "distribution-topics.json");
  return JSON.parse(fs.readFileSync(topicsPath, "utf8"));
}

function ensureStateFile(statePath) {
  if (fs.existsSync(statePath)) {
    return;
  }

  fs.mkdirSync(path.dirname(statePath), { recursive: true });
  const templatePath = path.join(repoRoot, "ops", "content", "distribution-state.template.json");
  fs.copyFileSync(templatePath, statePath);
}

function loadState(statePath) {
  ensureStateFile(statePath);
  const raw = fs.readFileSync(statePath, "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(raw);
}

function saveState(statePath, state) {
  state.last_updated = new Date().toISOString();
  fs.writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

function buildInstagramSlides(topic) {
  return [
    topic.instagramHook,
    "1. 어떤 사용 패턴인지 먼저 정리합니다",
    "2. 휴대성, 작업 강도, 화면 크기를 나눕니다",
    "3. Air가 맞는 사람과 Pro가 맞는 사람을 분리합니다",
    "4. 마지막엔 바로 살 수 있는 모델로 좁힙니다",
    "더 빠르게 정리하려면 프로필 링크의 진단을 사용하세요",
  ];
}

function buildCaption(topic) {
  return [
    topic.instagramHook,
    "",
    topic.instagramCaptionAngle,
    "",
    "더 빨리 결정하고 싶다면 노트북 아틀리에의 4문항 진단을 써보세요.",
    "https://notebook-at.netlify.app/#finder",
    "",
    "#맥북추천 #맥북에어 #맥북프로 #노트북아틀리에",
  ].join("\n");
}

function buildBlogDraft(topic) {
  return [
    `제목: ${topic.blogTitle}`,
    "",
    `도입: ${topic.blogHook}`,
    "",
    "구성안:",
    `- 문제 제기: ${topic.blogAngle}`,
    "- 기준 1: 휴대성",
    "- 기준 2: 작업 강도",
    "- 기준 3: 화면 크기와 체감 차이",
    "- 추천 결론: 어떤 사용자에게 어떤 모델이 맞는지 한 문단으로 정리",
    `- CTA: ${topic.blogCta}`,
  ].join("\n");
}

function buildSlackBlocks(topic) {
  const slides = buildInstagramSlides(topic);
  const blogDraft = buildBlogDraft(topic);
  const caption = buildCaption(topic);

  return [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: `콘텐츠 브리프 · ${topic.blogTitle}`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*주제 슬러그*\n${topic.slug}\n\n*채널 우선순위*\n${topic.channelPriority}`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*네이버 블로그 초안*\n\`\`\`\n${blogDraft}\n\`\`\``,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*인스타 캐러셀 슬라이드*\n${slides.map((slide, index) => `${index + 1}. ${slide}`).join("\n")}`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*인스타 캡션 초안*\n\`\`\`\n${caption}\n\`\`\``,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*이미지 생성 프롬프트*\n\`\`\`\n${topic.imagePrompt}\n\`\`\``,
      },
    },
  ];
}

async function sendToSlack(webhookUrl, topic, dryRun) {
  const payload = {
    text: `콘텐츠 브리프 · ${topic.blogTitle}`,
    blocks: buildSlackBlocks(topic),
  };

  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Slack webhook failed: ${response.status} ${body}`);
  }
}

async function main() {
  loadSecretsFromPs1(path.join(repoRoot, ".codex.secrets.ps1"));
  loadSecretsFromPs1(path.join(repoRoot, "local", "autopilot", "autopilot.secrets.ps1"));

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("SLACK_WEBHOOK_URL is missing.");
  }

  const options = parseArgs(process.argv.slice(2));
  const topics = loadTopics().sort((left, right) => left.channelPriority - right.channelPriority);
  const statePath = path.join(repoRoot, "local", "content", "distribution-state.json");
  const state = loadState(statePath);

  if (options.resetState) {
    state.sent_topics = [];
    saveState(statePath, state);
  }

  let selected = topics;
  if (options.slug) {
    selected = topics.filter((topic) => topic.slug === options.slug);
  } else if (options.next) {
    const sent = new Set(state.sent_topics.map((item) => item.slug));
    selected = topics.filter((topic) => !sent.has(topic.slug)).slice(0, options.limit);
  } else if (!options.all) {
    selected = topics.slice(0, options.limit);
  }

  if (selected.length === 0) {
    throw new Error("No topics matched the requested filter.");
  }

  for (const topic of selected) {
    // brief spacing prevents Slack rate issues and keeps message order deterministic
    // for low-volume operator briefs
    await sendToSlack(webhookUrl, topic, options.dryRun);

    if (!options.dryRun) {
      const existing = state.sent_topics.find((item) => item.slug === topic.slug);
      if (existing) {
        existing.sent_at = new Date().toISOString();
      } else {
        state.sent_topics.push({
          slug: topic.slug,
          sent_at: new Date().toISOString(),
        });
      }
    }
  }

  if (!options.dryRun) {
    saveState(statePath, state);
  }

  console.log(`Sent ${selected.length} content brief(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
