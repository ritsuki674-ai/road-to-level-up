const STORAGE_KEY = "road-to-level-up-mvp-v1";
const APP_VERSION = "road-level-up-pwa3";

const levelTable = [
  { level: 1, exp: 0 },
  { level: 2, exp: 50 },
  { level: 3, exp: 150 },
  { level: 4, exp: 300 },
  { level: 5, exp: 600 },
  { level: 6, exp: 1000 },
  { level: 7, exp: 1500 },
  { level: 8, exp: 2200 },
  { level: 9, exp: 3000 },
  { level: 10, exp: 4000 }
];

const availableMinuteOptions = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480];

const skillSeeds = {
  english: {
    id: "english",
    name: "英語スピーキング",
    initialLevel: 3,
    initialExp: 150,
    goal: "3分スピーチ10テーマ＋AI採点平均70点",
    color: "#2f7dd1"
  },
  guitar: {
    id: "guitar",
    name: "ギター",
    initialLevel: 1,
    initialExp: 0,
    goal: "「Ready to Rock」の一部フレーズを録音できる",
    color: "#f97316"
  },
  illustration: {
    id: "illustration",
    name: "イラスト",
    initialLevel: 4,
    initialExp: 300,
    goal: "オリジナルキャラクター1〜3人のラフ・表情・ポーズ案を作る",
    color: "#9b5cf6"
  },
  threeD: {
    id: "threeD",
    name: "3Dオブジェクト制作",
    initialLevel: 2,
    initialExp: 50,
    goal: "Blenderで小物・家具を複数制作し、簡単な一部屋制作に着手する",
    color: "#0ea5e9"
  }
};

const projectSeeds = {
  graduation_thesis: {
    id: "graduation_thesis",
    name: "卒論",
    goal: "12月提出に向けて、8月末までに分析の目処をつける",
    progress: 0,
    color: "#38bdf8"
  },
  novel: {
    id: "novel",
    name: "小説",
    goal: "2027年3月前までに投稿可能レベルの長編小説を完成させる",
    progress: 0,
    color: "#f59e0b"
  }
};

const quests = {
  english: [
    q("english_open_log", "英語ログ画面を開く", 3, "preparation", "preparation", 1),
    q("english_choose_topic", "英語で話すテーマを1つ決める", 10, "preparation", "preparation", 5),
    q("english_read_aloud_3", "音読を3分する", 10, "skill", "corePractice", 3, { requiresVoice: true, isCore: true }),
    q("english_shadowing_3", "シャドーイングを3分する", 15, "skill", "corePractice", 3, { requiresVoice: true, isCore: true }),
    q("english_speak_1", "英語で1分話す", 15, "skill", "corePractice", 1, { requiresVoice: true, isCore: true }),
    q("english_read_corrected_text", "前回の修正文を音読する", 15, "review", "corePractice", 3, { requiresVoice: true, isCore: true }),
    q("english_speech_3", "3分スピーチをする", 25, "skill", "normal", 3, { requiresVoice: true }),
    q("english_log_spoken_text", "話した内容を英語ログに入力する", 10, "skill", "normal", 5),
    q("english_generate_prompt", "添削用プロンプトを生成する", 10, "review", "reflection", 3),
    q("english_save_correction", "添削結果と修正文を保存する", 20, "review", "reflection", 5),
    q("english_write_improvement", "改善点を1つ書く", 15, "review", "reflection", 5),
    q("english_respeak_corrected", "添削後に言い直す", 40, "review", "reflection", 5, { requiresVoice: true }),
    q("english_score_70", "採点70点以上を記録する", 30, "review", "reflection", 3)
  ],
  guitar: [
    q("guitar_take_out", "ギターを出す", 3, "preparation", "preparation", 1, { requiresHome: true }),
    q("guitar_tuning", "チューニングする", 5, "preparation", "preparation", 3, { requiresHome: true, requiresSound: true }),
    q("guitar_doremi", "ドレミをゆっくり弾く", 10, "skill", "corePractice", 5, { requiresHome: true, requiresSound: true, isCore: true }),
    q("guitar_c_chord", "Cコードを練習する", 10, "skill", "corePractice", 5, { requiresHome: true, requiresSound: true, isCore: true }),
    q("guitar_g_chord", "Gコードを練習する", 10, "skill", "corePractice", 5, { requiresHome: true, requiresSound: true, isCore: true }),
    q("guitar_em_chord", "Emコードを練習する", 10, "skill", "corePractice", 5, { requiresHome: true, requiresSound: true, isCore: true }),
    q("guitar_chord_change_c_g", "C→Gのコードチェンジを練習する", 15, "skill", "corePractice", 5, { requiresHome: true, requiresSound: true, isCore: true }),
    q("guitar_metronome_1", "ゆっくりメトロノームに合わせて1分弾く", 20, "skill", "corePractice", 3, { requiresHome: true, requiresSound: true, isCore: true }),
    q("guitar_phrase_practice", "曲の一部フレーズを練習する", 30, "skill", "normal", 15, { requiresHome: true, requiresSound: true }),
    q("guitar_ready_to_rock_part", "Ready to Rockの一部を練習する", 40, "skill", "normal", 20, { requiresHome: true, requiresSound: true }),
    q("guitar_record_check", "演奏を録音して確認する", 40, "review", "reflection", 10, { requiresHome: true, requiresSound: true }),
    q("guitar_mistake_note", "ミスしたところを1つメモする", 20, "review", "reflection", 5)
  ],
  illustration: [
    q("illust_prepare_tools", "描く道具を準備する", 3, "preparation", "preparation", 1),
    q("illust_choose_reference", "参考資料を1つ選ぶ", 5, "preparation", "preparation", 3),
    q("illust_line_3", "線練習を3分する", 10, "skill", "corePractice", 3, { isCore: true }),
    q("illust_shapes", "丸・箱・円柱を描く", 10, "skill", "corePractice", 5, { isCore: true }),
    q("illust_face_ratio", "顔の比率を練習する", 15, "skill", "corePractice", 5, { isCore: true }),
    q("illust_expression_1", "表情を1つ描く", 15, "skill", "corePractice", 5, { isCore: true }),
    q("illust_gesture", "ジェスチャー練習をする", 15, "skill", "corePractice", 5, { isCore: true }),
    q("illust_memory_redraw", "資料を見た後に、見ないで再現する", 25, "skill", "corePractice", 10, { isCore: true }),
    q("illust_original_character_rough", "オリキャラのラフを描く", 50, "skill", "normal", 20),
    q("illust_pose_practice", "ポーズ練習をする", 30, "skill", "normal", 15),
    q("illust_save_image_log", "画像ログを保存する", 10, "review", "reflection", 3),
    q("illust_write_improvement", "改善点を1つ書く", 30, "review", "reflection", 5),
    q("illust_compare_week", "1週間前の絵と比較する", 50, "review", "reflection", 10)
  ],
  threeD: [
    q("modeling_open_blender", "Blenderを開く", 3, "preparation", "preparation", 1, { requiresHome: true }),
    q("modeling_open_previous_file", "前回ファイルを開く", 5, "preparation", "preparation", 3, { requiresHome: true }),
    q("modeling_transform", "移動・回転・拡大縮小を練習する", 10, "skill", "corePractice", 5, { requiresHome: true, isCore: true }),
    q("modeling_basic_shape", "基本形状を1つ作る", 10, "skill", "corePractice", 5, { requiresHome: true, isCore: true }),
    q("modeling_extrude", "Extrudeを練習する", 15, "skill", "corePractice", 5, { requiresHome: true, isCore: true }),
    q("modeling_bevel", "Bevelを練習する", 15, "skill", "corePractice", 5, { requiresHome: true, isCore: true }),
    q("modeling_loop_cut", "Loop Cutを練習する", 15, "skill", "corePractice", 5, { requiresHome: true, isCore: true }),
    q("modeling_make_small_object", "小物を1つ作る", 50, "skill", "normal", 30, { requiresHome: true, isHeavyTask: true }),
    q("modeling_material", "マテリアルを設定する", 25, "skill", "normal", 15, { requiresHome: true }),
    q("modeling_save_screenshot", "スクショを画像ログに保存する", 10, "review", "reflection", 3),
    q("modeling_write_improvement", "改善点を1つ書く", 30, "review", "reflection", 5)
  ]
};

const legacyQuestAliases = {
  "en-1min": "english_speak_1",
  "en-3min": "english_speech_3",
  "en-input": "english_log_spoken_text",
  "en-prompt": "english_generate_prompt",
  "en-result": "english_save_correction",
  "en-improve": "english_write_improvement",
  "en-revised": "english_save_correction",
  "en-retry": "english_respeak_corrected",
  "en-70": "english_score_70",
  "gt-touch": "guitar_take_out",
  "gt-tune": "guitar_tuning",
  "gt-doremi": "guitar_doremi",
  "gt-code": "guitar_c_chord",
  "gt-metronome": "guitar_metronome_1",
  "gt-phrase": "guitar_phrase_practice",
  "gt-record": "guitar_record_check",
  "il-5min": "illust_line_3",
  "il-copy": "illust_shapes",
  "il-face": "illust_expression_1",
  "il-pose": "illust_pose_practice",
  "il-oc": "illust_original_character_rough",
  "il-image": "illust_save_image_log",
  "il-improve": "illust_write_improvement",
  "il-compare": "illust_compare_week",
  "3d-open": "modeling_open_blender",
  "3d-shape": "modeling_basic_shape",
  "3d-object": "modeling_make_small_object",
  "3d-material": "modeling_material",
  "3d-image": "modeling_save_screenshot",
  "3d-improve": "modeling_write_improvement"
};

const managerComments = {
  suggestShort: "今日は時間少ないな。欲張るな、まず1個取ってこい。",
  english: "英語から逃げんなよ。1分でいい、口動かせ。",
  guitar: "ギターは触った時点で勝ちだ。続きは明日の自分に任せろ。",
  illustration: "描きっぱなしにすんな。改善点1個だけでも拾え。",
  threeD: "Blender開けたなら上出来。操作は触らないと抜けるからな。",
  levelUp: "お、レベル上がったじゃん。地味だけど、こういう積み重ねが一番効くんだよ。",
  minimum: "今日は最低ラインでいい。ゼロにしなかったなら勝ちだろ。",
  rough: "完璧狙って止まるくらいなら、雑でも一球投げろ。"
};

const ratingLabels = {
  illustration: ["比率", "線", "表情", "立体感", "オリジナリティ"],
  threeD: ["形状", "バランス", "マテリアル", "ライティング", "完成度"]
};

const nowSupplementalQuests = [
  nowQ("english_topic_1", "英語で話したいテーマを1つ決める", "english", 5, 10, "preparation", "preparation"),
  nowQ("english_draft_3_sentences", "英語スピーチの下書きを3文書く", "english", 10, 15, "preparation", "preparation"),
  nowQ("english_review_correction", "英語の添削結果を見直す", "english", 10, 15, "review", "reflection"),
  nowQ("now-tomorrow-prep", "明日の準備だけ", "english", 5, 5, "review", "preparation"),
  nowQ("now-quest-review", "クエスト整理", "english", 5, 5, "review", "reflection")
];

const outsideProjectQuests = [
  projectQ("thesis_read_pdf_15", "卒論PDFを15分読む", "graduation_thesis", "project", "normal", 20, 15, { requiresOfflineMaterials: true }),
  projectQ("thesis_make_3_notes", "文献メモを3つ作る", "graduation_thesis", "project", "normal", 25, 15, { requiresOfflineMaterials: true }),
  projectQ("thesis_quote_candidate", "引用候補を1つメモする", "graduation_thesis", "project", "reflection", 15, 10, { requiresOfflineMaterials: true }),
  projectQ("thesis_next_task", "卒論で次にやることを1つ決める", "graduation_thesis", "memo", "preparation", 10, 5),
  projectQ("thesis_question_memo", "先生に聞きたいことをメモする", "graduation_thesis", "memo", "preparation", 10, 5),
  projectQ("thesis_chapter_idea", "章立てのアイデアを書く", "graduation_thesis", "memo", "normal", 15, 10),
  projectQ("novel_ideas_3", "小説のネタを3つ書く", "novel", "memo", "preparation", 15, 10),
  projectQ("novel_lines_5", "キャラクターの台詞を5つメモする", "novel", "memo", "normal", 20, 15),
  projectQ("novel_scene_memo", "シーンの断片を1つ書く", "novel", "project", "normal", 20, 15),
  projectQ("novel_world_setting", "世界観設定を1つ書く", "novel", "memo", "normal", 15, 10),
  projectQ("novel_opening_idea", "第一章の導入案を書く", "novel", "project", "normal", 20, 15),
  projectQ("novel_title_candidates", "タイトル候補を書く", "novel", "memo", "preparation", 10, 5)
];

const deprecatedNowQuestIds = ["now-light-memo", "now-creative-note", "now-illust-plan"];

const dom = {};
let state = loadState();
let selectedImageData = "";
let pendingServiceWorker = null;
let refreshingForUpdate = false;

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  bindEvents();
  initPwaUpdateFlow();
  fillToday();
  ensureToday();
  renderAll();
  setInterval(updateNowTimeLabel, 30000);
});

function q(id, title, exp, category, type, estimatedMinutes, options = {}) {
  return { id, title, exp, category, type, estimatedMinutes, ...options };
}

function nowQ(id, title, skillId, estimatedMinutes, expectedExp, category, type) {
  return { id, title, skillId, estimatedMinutes, expectedExp, category, type, isSupplemental: true };
}

function projectQ(id, title, projectId, category, type, exp, estimatedMinutes, options = {}) {
  return { id, title, projectId, category, type, exp, estimatedMinutes, ...options };
}

function createInitialState() {
  const skills = Object.fromEntries(
    Object.values(skillSeeds).map((skill) => [
      skill.id,
      {
        ...skill,
        exp: skill.initialExp,
        level: getLevelFromExp(skill.initialExp),
        levelUps: []
      }
    ])
  );

  return {
    skills,
    projects: structuredCloneSafe(projectSeeds),
    projectLogs: [],
    daily: {},
    questHistory: [],
    englishLogs: [],
    imageLogs: [],
    nowMode: {
      currentTime: "",
      availableMinutes: 30,
      situation: "home",
      hasOfflineMaterials: false,
      suggestedQuests: [],
      managerComment: "今の場所と時間で、できる球だけ選べ。無理な配球はしない。"
    },
    managerImage: "",
    managerComment: managerComments.rough,
    activeView: "home"
  };
}

function cacheDom() {
  [
    "todayLabel",
    "managerAvatar",
    "managerComment",
    "todayExp",
    "todayRate",
    "sleepInput",
    "wakeInput",
    "availableInput",
    "suggestQuestBtn",
    "nowTimeLabel",
    "nowAvailableInput",
    "nowSituationInput",
    "nowMaterialsInput",
    "nowSuggestBtn",
    "nowComment",
    "nowSuggestionList",
    "todayQuestList",
    "skillMiniGrid",
    "skillList",
    "manualQuestBoard",
    "generatePromptBtn",
    "englishThemeInput",
    "spokenTextInput",
    "preCorrectionMemoInput",
    "correctionPromptInput",
    "correctionResultInput",
    "revisedTextInput",
    "fluencyInput",
    "accuracyInput",
    "vocabularyInput",
    "coherenceInput",
    "depthInput",
    "totalScoreInput",
    "englishImprovementInput",
    "saveEnglishLogBtn",
    "englishLogList",
    "imageFileInput",
    "imageSkillInput",
    "imageTitleInput",
    "imageMemoInput",
    "ratingGrid",
    "imageImprovementInput",
    "saveImageLogBtn",
    "imagePreview",
    "imageLogList",
    "historySummary",
    "questHistoryList",
    "exportBtn",
    "importInput",
    "managerImageInput",
    "resetBtn",
    "levelTable",
    "expTable",
    "updateToast",
    "reloadAppBtn"
  ].forEach((id) => {
    dom[id] = document.getElementById(id);
  });
}

function bindEvents() {
  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  dom.suggestQuestBtn.addEventListener("click", suggestTodayQuests);
  dom.nowSuggestBtn.addEventListener("click", handleNowSuggest);
  dom.nowSuggestionList.addEventListener("click", handleNowCompleteClick);
  dom.todayQuestList.addEventListener("click", handleQuestClick);
  dom.manualQuestBoard.addEventListener("click", handleManualQuestClick);
  dom.generatePromptBtn.addEventListener("click", generateCorrectionPrompt);
  dom.saveEnglishLogBtn.addEventListener("click", saveEnglishLog);
  dom.imageSkillInput.addEventListener("change", renderRatingGrid);
  dom.imageFileInput.addEventListener("change", handleImageSelect);
  dom.saveImageLogBtn.addEventListener("click", saveImageLog);
  dom.exportBtn.addEventListener("click", exportData);
  dom.importInput.addEventListener("change", importData);
  dom.managerImageInput.addEventListener("change", importManagerImage);
  dom.resetBtn.addEventListener("click", resetData);
  dom.reloadAppBtn?.addEventListener("click", applyAppUpdate);
}

function initPwaUpdateFlow() {
  if (!("serviceWorker" in navigator)) return;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshingForUpdate) return;
    refreshingForUpdate = true;
    window.location.reload();
  });

  navigator.serviceWorker
    .register(`./service-worker.js?v=${APP_VERSION}`)
    .then((registration) => {
      if (registration.waiting) {
        showUpdateToast(registration.waiting);
      }

      registration.addEventListener("updatefound", () => {
        const nextWorker = registration.installing;
        if (!nextWorker) return;
        nextWorker.addEventListener("statechange", () => {
          if (nextWorker.state === "installed" && navigator.serviceWorker.controller) {
            showUpdateToast(nextWorker);
          }
        });
      });
    })
    .catch(() => {
      // Service workers need a secure context. Localhost works; a phone hitting a Mac's
      // plain HTTP LAN address may need HTTPS hosting before offline install works.
    });
}

function showUpdateToast(worker) {
  pendingServiceWorker = worker;
  if (dom.updateToast) dom.updateToast.hidden = false;
}

function applyAppUpdate() {
  if (pendingServiceWorker) {
    pendingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    return;
  }
  window.location.reload();
}

function fillToday() {
  dom.todayLabel.textContent = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(new Date());
}

function updateNowTimeLabel() {
  if (dom.nowTimeLabel) dom.nowTimeLabel.textContent = getCurrentTimeString();
}

function ensureToday() {
  const key = todayKey();
  state.projects = { ...structuredCloneSafe(projectSeeds), ...(state.projects || {}) };
  state.projectLogs = state.projectLogs || [];
  state.daily[key] = state.daily[key] || {
    date: key,
    sleepHours: 6.5,
    wakeTime: "06:30",
    availableMinutes: 30,
    quests: [],
    createdAt: new Date().toISOString()
  };
  const daily = state.daily[key];
  daily.availableMinutes = normalizeMorningAvailableMinutes(daily.availableMinutes);
  dom.sleepInput.value = daily.sleepHours;
  dom.wakeInput.value = daily.wakeTime;
  dom.availableInput.value = String(daily.availableMinutes);
  state.nowMode = {
    ...createInitialState().nowMode,
    ...(state.nowMode || {})
  };
  state.nowMode.suggestedQuests = (state.nowMode.suggestedQuests || []).filter((quest) => !deprecatedNowQuestIds.includes(quest.questId));
  dom.nowAvailableInput.value = String(state.nowMode.availableMinutes || 30);
  dom.nowSituationInput.value = state.nowMode.situation || "home";
  dom.nowMaterialsInput.value = state.nowMode.hasOfflineMaterials ? "yes" : "no";
}

function showView(view) {
  state.activeView = view;
  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("is-active", section.id === `view-${view}`);
  });
  saveState();
}

function suggestTodayQuests() {
  const daily = getToday();
  daily.sleepHours = Number(dom.sleepInput.value || 0);
  daily.wakeTime = dom.wakeInput.value || "06:30";
  daily.availableMinutes = normalizeMorningAvailableMinutes(Number(dom.availableInput.value || 30));
  const plan = buildQuestSuggestions(daily);
  daily.quests = plan.quests;
  daily.blocks = plan.blocks;
  state.managerComment = buildMorningManagerComment(daily);
  saveState();
  renderAll();
}

function buildQuestSuggestions(daily) {
  const stale = getStaleSkills();
  const light = daily.sleepHours > 0 && daily.sleepHours < 5;
  const tired = daily.sleepHours > 0 && daily.sleepHours < 6;
  const minutes = normalizeMorningAvailableMinutes(daily.availableMinutes);
  const staleNotEnglish = stale.find((skillId) => skillId !== "english");
  let picks;

  if (light) {
    picks = [
      pickQuestByType("english", "preparation"),
      pickQuestByType(stale[0] || "illustration", "corePractice"),
      pickQuestByType("english", "reflection")
    ];
  } else if (minutes <= 30) {
    picks = [pickQuestByType("english", "corePractice"), pickQuestByType(staleNotEnglish || "illustration", "corePractice")];
  } else if (minutes <= 60) {
    picks = [pickQuestByType("english", "corePractice"), pickQuestByType(stale[0] || "guitar", "corePractice"), pickQuestByType("illustration", "normal"), pickQuestByType("english", "reflection")];
  } else if (minutes <= 90) {
    picks = [pickQuestByType("english", "corePractice"), pickQuestByType("english", "normal"), pickQuestByType(stale[0] || "illustration", "corePractice"), pickQuestByType("english", "reflection")];
  } else if (minutes <= 120) {
    picks = [pickQuestByType("english", "corePractice"), pickQuestByType("english", "normal"), pickQuestByType("guitar", "corePractice"), pickQuestByType(stale[0] || "illustration", "normal"), pickQuestByType("english", "reflection")];
  } else if (minutes <= 180) {
    picks = [pickQuestByType("english", "corePractice"), pickQuestByType("english", "normal"), pickQuestByType("english", "reflection"), pickQuestByType("guitar", "corePractice"), pickQuestByType("illustration", "corePractice"), pickQuestByType("threeD", "corePractice")];
  } else if (minutes <= 240) {
    picks = [pickQuestByType("english", "corePractice"), pickQuestByType("english", "normal"), pickQuestByType("english", "reflection"), pickQuestByType("illustration", "corePractice"), pickQuestByType("illustration", "normal"), pickQuestByType("guitar", "corePractice"), pickQuestByType("threeD", "corePractice")];
  } else if (minutes <= 360) {
    picks = [pickQuestByType("english", "corePractice"), pickQuestByType("english", "normal"), pickQuestByType("english", "reflection"), pickQuestByType("illustration", "corePractice"), pickQuestByType("illustration", "normal"), pickQuestByType("illustration", "reflection"), pickQuestByType("threeD", "normal"), pickQuestByType("guitar", "corePractice")];
  } else {
    picks = [pickQuestByType("english", "preparation"), pickQuestByType("english", "corePractice"), pickQuestByType("english", "normal"), pickQuestByType("english", "reflection"), pickQuestByType("illustration", "corePractice"), pickQuestByType("illustration", "normal"), pickQuestByType("illustration", "reflection"), pickQuestByType("threeD", "corePractice"), pickQuestByType("threeD", "normal"), pickQuestByType("threeD", "reflection"), pickQuestByType("guitar", "corePractice")];
  }

  if (tired) {
    picks = picks.map((item) => lightenQuestPick(item, stale));
  }

  const quests = dedupeQuestPicks(picks)
    .slice(0, getMorningQuestLimit(minutes, light))
    .map(toDailyQuest);

  return {
    quests,
    blocks: buildMorningBlocks(quests, minutes, daily.sleepHours)
  };
}

function toDailyQuest(item) {
  return {
    id: createId(`${todayKey()}-${item.skillId}-${item.quest.id}`),
    skillId: item.skillId,
    questId: item.quest.id,
    title: item.quest.title,
    exp: item.quest.exp,
    category: item.quest.category,
    type: item.quest.type,
    estimatedMinutes: item.quest.estimatedMinutes,
    completed: isQuestCompletedToday(item.quest.id)
  };
}

function dedupeQuestPicks(picks) {
  const seen = new Set();
  return picks.filter((item) => {
    if (!item?.quest || seen.has(item.quest.id)) return false;
    seen.add(item.quest.id);
    return true;
  });
}

function lightenQuestPick(item, stale) {
  if (!item) return item;
  if (item.quest.type === "reflection") return item;
  if (item.skillId === "english") return pickQuestByType("english", "preparation");
  if (item.skillId === "guitar") return pickQuestByType("guitar", "preparation");
  if (item.skillId === "illustration") return pickQuestByType("illustration", "preparation");
  if (item.skillId === "threeD") return pickQuestByType("threeD", "preparation");
  return pickQuestByType(stale[0] || "english", "preparation");
}

function getMorningQuestLimit(minutes, light) {
  if (light) return minutes >= 240 ? 5 : 3;
  if (minutes <= 30) return 2;
  if (minutes <= 120) return 3;
  if (minutes <= 240) return 5;
  if (minutes <= 360) return 6;
  return 7;
}

function buildMorningBlocks(quests, minutes, sleepHours) {
  if (minutes < 240) return [];
  const light = sleepHours > 0 && sleepHours < 5;
  const lighter = sleepHours > 0 && sleepHours < 6;
  const durations = getBlockDurations(minutes, quests.length, light, lighter);
  const blocks = [];

  quests.forEach((quest, index) => {
    blocks.push({
      kind: "quest",
      label: `Block ${index + 1}`,
      minutes: durations[index] || 30,
      questId: quest.questId
    });
    if (index < quests.length - 1 && shouldInsertBreak(index, minutes)) {
      blocks.push({
        kind: "break",
        label: "休憩",
        minutes: minutes >= 360 ? 15 : 10,
        title: "水分補給・目を休める"
      });
    }
  });

  if (minutes >= 240 && quests.length > 1 && !blocks.some((block) => block.kind === "break")) {
    blocks.splice(1, 0, {
      kind: "break",
      label: "休憩",
      minutes: minutes >= 360 ? 15 : 10,
      title: "水分補給・目を休める"
    });
  }

  return blocks;
}

function getBlockDurations(minutes, count, light, lighter) {
  if (light) return Array.from({ length: count }, (_, index) => (index % 2 === 0 ? 15 : 10));
  if (lighter) return Array.from({ length: count }, (_, index) => (index === 0 ? 30 : 20));
  if (minutes >= 420) return [45, 75, 90, 45, 30, 30, 30];
  if (minutes >= 360) return [30, 60, 90, 30, 30, 30];
  if (minutes >= 300) return [30, 60, 60, 30, 30, 30];
  return [30, 45, 60, 30, 30];
}

function shouldInsertBreak(index, minutes) {
  if (minutes >= 360) return [1, 2, 3].includes(index);
  return index === 1 || index === 3;
}

function buildMorningManagerComment(daily) {
  const minutes = daily.availableMinutes;
  if (daily.sleepHours > 0 && daily.sleepHours < 5) return "睡眠少ないな。時間があっても今日は軽く刻め。無理して崩れたら意味ないだろ。";
  if (minutes >= 480) return "8時間ある？ なら休憩込みで組め。飛ばしすぎて後半バテるなよ。";
  if (minutes >= 360) return "時間はある。でも集中力は無限じゃない。ちゃんと区切っていけ。";
  if (minutes >= 240) return "時間あるからって全部詰め込むなよ。長い試合ほど配分が大事だろ。";
  if (minutes >= 120) return "今日は使える時間多いな。じゃあ、重いやつから片づけるぞ。";
  return "今日は3つまで。取れるアウトから取っていくぞ。";
}

function handleNowSuggest() {
  const nowModeState = {
    currentTime: getCurrentTimeString(),
    availableMinutes: Number(dom.nowAvailableInput.value),
    situation: dom.nowSituationInput.value,
    hasOfflineMaterials: dom.nowMaterialsInput.value === "yes"
  };
  const result = suggestNowQuests(
    nowModeState,
    getAllNowQuestOptions(),
    getTodayCompletedQuestIds(),
    getSkillStats()
  );

  state.nowMode = {
    ...nowModeState,
    suggestedQuests: result.suggestedQuests,
    managerComment: result.managerComment
  };
  saveState();
  renderAll();
}

function getCurrentTimeString(date = new Date()) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function getTimeBlock(currentTime) {
  const minutes = timeStringToMinutes(currentTime);
  if (minutes >= 20 * 60) return "night";
  if (minutes >= 17 * 60) return "evening";
  if (minutes >= 12 * 60) return "afternoon";
  return "morning";
}

function isQuestAllowedInSituation(quest, situation, hasOfflineMaterials, currentTime) {
  const timeBlock = getTimeBlock(currentTime);
  const isAfter20 = timeStringToMinutes(currentTime) >= 20 * 60;
  const isAfter21 = timeStringToMinutes(currentTime) >= 21 * 60;
  const effectiveSituation = isAfter20 ? "night" : situation;

  if (quest.requiresMaterials && !hasOfflineMaterials) return false;
  if (quest.requiresOfflineMaterials && !hasOfflineMaterials) return false;
  if (quest.requiresHome && effectiveSituation !== "home") return false;
  if (!hasOfflineMaterials && ["資料確認"].includes(quest.category)) return false;
  if (quest.category === "夜の整理" && timeBlock !== "night" && effectiveSituation !== "night") return false;

  if (effectiveSituation !== "home" && (quest.needsVoice || quest.requiresVoice)) return false;
  if (effectiveSituation !== "home" && (quest.needsSound || quest.requiresSound)) return false;
  if (effectiveSituation !== "home" && quest.skillId === "guitar") return false;
  if (["commuting", "cafe", "night", "other"].includes(effectiveSituation) && (quest.isHeavy || quest.isHeavyTask)) return false;
  if (["commuting", "university", "cafe", "other"].includes(effectiveSituation) && quest.skillId === "threeD") return false;
  if (effectiveSituation === "university" && (quest.needsVoice || quest.requiresVoice)) return false;
  if (effectiveSituation === "cafe" && (quest.skillId === "threeD" || quest.isVisibleHeavy)) return false;

  if (timeBlock === "night" || effectiveSituation === "night") {
    if (quest.needsVoice || quest.requiresVoice || quest.needsSound || quest.requiresSound || quest.skillId === "guitar" || quest.skillId === "threeD" || quest.isHeavy || quest.isHeavyTask) return false;
    if (isAfter21 && !["memo", "review", "preparation", "メモ", "夜の整理", "振り返り"].includes(quest.category)) return false;
  }

  if (effectiveSituation === "commuting") {
    return ["資料確認", "下書き", "振り返り", "メモ", "project", "preparation", "review", "memo"].includes(quest.category) || quest.isPhoneFriendly;
  }

  if (effectiveSituation === "university") {
    return ["資料確認", "下書き", "振り返り", "メモ", "project", "preparation", "review", "memo"].includes(quest.category) || quest.isPhoneFriendly;
  }

  if (effectiveSituation === "cafe") {
    return ["資料確認", "下書き", "振り返り", "メモ", "project", "preparation", "review", "memo"].includes(quest.category) || quest.isPhoneFriendly;
  }

  if (effectiveSituation === "other") {
    return quest.estimatedMinutes <= 15 || ["下書き", "振り返り", "メモ", "夜の整理", "project", "preparation", "review", "memo"].includes(quest.category);
  }

  return true;
}

function suggestNowQuests(nowModeState, allQuests, completedQuestIds, skillStats) {
  const currentTime = nowModeState.currentTime || getCurrentTimeString();
  const timeBlock = getTimeBlock(currentTime);
  const limit = getNowSuggestionLimit(nowModeState.availableMinutes);
  if (isOutsideSituation(nowModeState.situation)) {
    return suggestOutsideQuests(nowModeState, allQuests, completedQuestIds, limit, timeBlock);
  }

  const incompleteToday = (getToday()?.quests || []).filter((quest) => !quest.completed);
  const incompleteIds = new Set(incompleteToday.map((quest) => quest.questId));
  const stale = new Set(skillStats.filter((skill) => skill.isStale).map((skill) => skill.skillId));
  const lowExp = new Set(skillStats.filter((skill) => skill.todayExp === 0).map((skill) => skill.skillId));

  let candidates = allQuests
    .filter((quest) => !completedQuestIds.includes(quest.questId))
    .filter((quest) => !quest.projectId)
    .filter((quest) => quest.estimatedMinutes <= nowModeState.availableMinutes)
    .filter((quest) => isQuestAllowedInSituation(quest, nowModeState.situation, nowModeState.hasOfflineMaterials, currentTime))
    .map((quest) => {
      let priority = 0;
      if (incompleteIds.has(quest.questId)) priority += 60;
      if (stale.has(quest.skillId)) priority += 30;
      if (lowExp.has(quest.skillId)) priority += 20;
      priority += getTimeBlockPriority(quest, timeBlock);
      if (quest.requiresMaterials && nowModeState.hasOfflineMaterials && nowModeState.situation !== "home") priority += 25;
      if (quest.type === "corePractice") priority += nowModeState.availableMinutes <= 30 ? 35 : 12;
      if (quest.type === "preparation") priority += nowModeState.availableMinutes <= 10 ? 30 : 6;
      if (quest.type === "normal" && nowModeState.availableMinutes >= 30) priority += 14;
      if (quest.type === "reflection" && nowModeState.availableMinutes >= 30) priority += 10;
      priority += Math.max(0, 20 - quest.estimatedMinutes);
      if (quest.isSupplemental) priority += 8;
      return {
        ...quest,
        reason: buildNowReason(quest, nowModeState, timeBlock, incompleteIds.has(quest.questId), stale.has(quest.skillId), lowExp.has(quest.skillId)),
        priority
      };
    });

  candidates = dedupeBySkill(candidates.sort((a, b) => b.priority - a.priority));
  const suggestedQuests = spreadNowCandidatesByType(candidates, limit, nowModeState.availableMinutes).map((quest) => ({
    skillId: quest.skillId,
    questId: quest.questId,
    title: quest.title,
    category: quest.category,
    type: quest.type,
    estimatedMinutes: quest.estimatedMinutes,
    expectedExp: quest.expectedExp,
    reason: quest.reason
  }));

  return {
    suggestedQuests,
    managerComment: buildNowManagerComment(nowModeState, timeBlock, suggestedQuests)
  };
}

function spreadNowCandidatesByType(candidates, limit, availableMinutes) {
  const preferredTypes = availableMinutes <= 10
    ? ["preparation", "corePractice"]
    : availableMinutes <= 30
      ? ["corePractice", "preparation", "normal"]
      : ["corePractice", "normal", "reflection"];
  const picked = [];
  for (const type of preferredTypes) {
    const candidate = candidates.find((item) => item.type === type && !picked.some((pickedItem) => pickedItem.questId === item.questId));
    if (candidate) picked.push(candidate);
    if (picked.length >= limit) return picked;
  }
  for (const candidate of candidates) {
    if (picked.some((item) => item.questId === candidate.questId)) continue;
    picked.push(candidate);
    if (picked.length >= limit) break;
  }
  return picked;
}

function spreadOutsideCandidates(candidates, limit) {
  const picked = [];
  const ownerCounts = {};
  for (const candidate of candidates) {
    const owner = candidate.projectId || candidate.skillId || "task";
    const cap = limit >= 3 ? 2 : 1;
    if ((ownerCounts[owner] || 0) >= cap) continue;
    picked.push(candidate);
    ownerCounts[owner] = (ownerCounts[owner] || 0) + 1;
    if (picked.length >= limit) break;
  }
  if (picked.length < limit) {
    for (const candidate of candidates) {
      if (picked.some((item) => item.questId === candidate.questId)) continue;
      picked.push(candidate);
      if (picked.length >= limit) break;
    }
  }
  return picked;
}

function suggestOutsideQuests(nowModeState, allQuests, completedQuestIds, limit, timeBlock) {
  const candidates = allQuests
    .filter((quest) => !completedQuestIds.includes(quest.questId))
    .filter((quest) => quest.estimatedMinutes <= nowModeState.availableMinutes)
    .filter((quest) => isQuestAllowedInSituation(quest, nowModeState.situation, nowModeState.hasOfflineMaterials, nowModeState.currentTime))
    .filter((quest) => quest.category !== "skill")
    .map((quest) => ({
      ...quest,
      priority: getOutsidePriority(quest, nowModeState, timeBlock),
      reason: buildOutsideReason(quest, nowModeState)
    }))
    .sort((a, b) => b.priority - a.priority);

  const suggestedQuests = spreadOutsideCandidates(candidates, limit).map((quest) => ({
    skillId: quest.skillId,
    projectId: quest.projectId,
    questId: quest.questId,
    title: quest.title,
    category: quest.category,
    type: quest.type,
    estimatedMinutes: quest.estimatedMinutes,
    expectedExp: quest.expectedExp,
    reason: quest.reason
  }));

  return {
    suggestedQuests,
    managerComment: buildOutsideManagerComment(nowModeState)
  };
}

function getAllNowQuestOptions() {
  const existing = Object.entries(quests).flatMap(([skillId, list]) =>
    list.map((quest) => ({
      skillId,
      questId: quest.id,
      title: quest.title,
      category: quest.category,
      type: quest.type,
      originalCategory: quest.category,
      estimatedMinutes: quest.estimatedMinutes || estimateQuestMinutes(skillId, quest),
      expectedExp: quest.exp,
      needsVoice: Boolean(quest.requiresVoice),
      requiresVoice: Boolean(quest.requiresVoice),
      needsSound: Boolean(quest.requiresSound),
      requiresSound: Boolean(quest.requiresSound),
      requiresHome: Boolean(quest.requiresHome),
      isHeavy: Boolean(quest.isHeavyTask) || isHeavyQuest(skillId, quest),
      isHeavyTask: Boolean(quest.isHeavyTask),
      isVisibleHeavy: quest.type === "normal" && ["illustration", "threeD"].includes(skillId),
      isPhoneFriendly: isPhoneFriendlyQuest(quest.id)
    }))
  );

  return [
    ...existing,
    ...nowSupplementalQuests.map((quest) => ({
      skillId: quest.skillId,
      questId: quest.id,
      title: quest.title,
      category: quest.category,
      type: quest.type,
      estimatedMinutes: quest.estimatedMinutes,
      expectedExp: quest.expectedExp,
      needsVoice: false,
      requiresVoice: false,
      needsSound: false,
      requiresSound: false,
      isHeavy: false,
      isHeavyTask: false,
      isVisibleHeavy: false,
      isPhoneFriendly: true,
      isSupplemental: true
    })),
    ...outsideProjectQuests.map((quest) => ({
      projectId: quest.projectId,
      questId: quest.id,
      title: quest.title,
      category: quest.category,
      type: quest.type,
      estimatedMinutes: quest.estimatedMinutes,
      expectedExp: quest.exp,
      requiresMaterials: Boolean(quest.requiresOfflineMaterials),
      requiresOfflineMaterials: Boolean(quest.requiresOfflineMaterials),
      needsVoice: false,
      needsSound: false,
      requiresHome: false,
      isHeavy: false,
      isHeavyTask: false,
      isVisibleHeavy: false,
      isPhoneFriendly: true,
      isSupplemental: true
    }))
  ];
}

function getNowSuggestionLimit(minutes) {
  if (minutes <= 5) return 1;
  if (minutes <= 10) return 2;
  return 3;
}

function isOutsideSituation(situation) {
  return ["commuting", "university", "cafe", "other"].includes(situation);
}

function getOutsidePriority(quest, nowModeState, timeBlock) {
  let priority = 0;
  if (nowModeState.hasOfflineMaterials) {
    if (quest.projectId === "graduation_thesis" && quest.requiresOfflineMaterials) priority += 90;
    if (quest.category === "preparation") priority += 50;
    if (quest.projectId === "novel") priority += 35;
    if (quest.category === "review") priority += 25;
  } else {
    if (quest.projectId === "novel") priority += 90;
    if (quest.category === "preparation") priority += 70;
    if (quest.projectId === "graduation_thesis") priority += 50;
    if (quest.category === "review") priority += 35;
  }
  if (nowModeState.situation === "commuting" && quest.estimatedMinutes <= 10) priority += 20;
  if (nowModeState.situation === "university" && quest.projectId === "graduation_thesis") priority += 20;
  if (nowModeState.situation === "cafe" && ["project", "preparation", "memo"].includes(quest.category)) priority += 12;
  if (timeBlock === "night" && ["review", "memo"].includes(quest.category)) priority += 30;
  priority += Math.max(0, 20 - quest.estimatedMinutes);
  return priority;
}

function buildOutsideReason(quest, nowModeState) {
  const reasons = [];
  if (quest.projectId === "graduation_thesis") {
    reasons.push(nowModeState.hasOfflineMaterials && quest.requiresOfflineMaterials ? "資料ありなので卒論を進められる" : "資料なしでも卒論の次手を整理できる");
  }
  if (quest.projectId === "novel") reasons.push("声を出さずに小説のネタを貯められる");
  if (quest.category === "preparation") reasons.push("家で発話する前の準備になる");
  if (quest.category === "review") reasons.push("静かに見直せる");
  if (isOutsideSituation(nowModeState.situation)) reasons.push("外出先でできる作業");
  return reasons.join(" / ") || "今の場所でできる";
}

function buildOutsideManagerComment(nowModeState) {
  if (nowModeState.situation === "commuting") return "立ってるなら無理すんな。スマホで見れる分だけ拾っとけ。";
  if (nowModeState.situation === "university") return "声出せないなら、静かに進むやつをやれ。卒論から逃げなきゃ上出来だ。";
  if (nowModeState.situation === "cafe") {
    return nowModeState.hasOfflineMaterials
      ? "資料あるなら卒論からだな。声出せない場所で英語やろうとすんな、下書きで十分だろ。"
      : "資料ないなら卒論は無理だな。だったらネタ出しに切り替えろ。止まるよりマシだ。";
  }
  return "今できることだけやれ。家でしかできないやつは後回しだ。";
}

function estimateQuestMinutes(skillId, quest) {
  if (quest.id.includes("5min") || quest.id.includes("touch") || quest.id.includes("open") || quest.id.includes("input") || quest.id.includes("prompt")) return 5;
  if (quest.id.includes("1min") || quest.id === "en-record") return 5;
  if (quest.id === "gt-record") return 30;
  if (quest.category === "振り返り・改善") return 10;
  if (skillId === "threeD") return quest.exp >= 30 ? 30 : 10;
  if (skillId === "illustration") return quest.exp >= 35 ? 30 : 10;
  if (skillId === "guitar") return quest.exp >= 30 ? 30 : 10;
  return quest.exp >= 25 ? 10 : 5;
}

function isVoiceQuest(questId) {
  return ["english_read_aloud_3", "english_shadowing_3", "english_speak_1", "english_read_corrected_text", "english_speech_3", "english_respeak_corrected"].includes(questId);
}

function isPhoneFriendlyQuest(questId) {
  return ["english_open_log", "english_choose_topic", "english_log_spoken_text", "english_generate_prompt", "english_save_correction", "english_write_improvement", "english_topic_1", "english_draft_3_sentences", "english_review_correction"].includes(questId);
}

function isHeavyQuest(skillId, quest) {
  if (quest.type === "preparation" || quest.type === "corePractice") return false;
  if (skillId === "threeD") return quest.type === "normal";
  if (skillId === "guitar") return quest.exp >= 30;
  return quest.exp >= 35 || quest.id === "english_respeak_corrected";
}

function getTimeBlockPriority(quest, timeBlock) {
  if (timeBlock === "morning" && quest.skillId === "english") return 20;
  if (timeBlock === "morning" && (quest.isHeavy || quest.isHeavyTask || quest.type === "normal")) return 10;
  if (timeBlock === "afternoon" && ["illustration", "threeD"].includes(quest.skillId)) return 18;
  if (timeBlock === "evening" && ["guitar", "illustration"].includes(quest.skillId)) return 14;
  if (timeBlock === "night" && ["memo", "review", "preparation", "メモ", "振り返り", "夜の整理"].includes(quest.category)) return 30;
  return 0;
}

function buildNowReason(quest, nowModeState, timeBlock, isIncompleteToday, isStale, isLowExp) {
  const reasons = [];
  if (isIncompleteToday) reasons.push("今日の未完了クエスト");
  if (isStale) reasons.push("直近3日触れていないスキル");
  if (isLowExp) reasons.push("今日はまだEXPが少ないスキル");
  if (timeBlock === "night") reasons.push("夜なので軽い作業を優先");
  if (nowModeState.situation !== "home") reasons.push("今の場所でできるスマホ寄り作業");
  if (quest.requiresMaterials) reasons.push("資料ありなので読める");
  if (!reasons.length) reasons.push(`${nowModeState.availableMinutes}分以内で終わる`);
  return reasons.join(" / ");
}

function buildNowManagerComment(nowModeState, timeBlock, suggestedQuests) {
  const situation = nowModeState.situation;
  if (timeStringToMinutes(nowModeState.currentTime) >= 21 * 60) return "今から巻き返そうとすんな。明日に響くだろ。今日はメモだけ残して終われ。";
  if (timeBlock === "night" || situation === "night") return "今日はメモだけ残して終われ。睡眠優先だ。";
  if (situation === "cafe") return nowModeState.hasOfflineMaterials ? "ここで声出すなよ。資料あるなら読む。ない球は振らなくていい。" : "ここで声出すなよ。英語は下書きだけでいい。";
  if (situation === "commuting") return "立ってるなら無理すんな。スマホで見れるもんだけ拾え。アウトプットは家でやれ。";
  if (situation === "university") return "声出せないなら、英語は文章だけ整えとけ。その場でできることをやれ。";
  if (situation === "other") return "環境が読めない時は軽く刻め。5分で拾えるやつだけでいい。";
  if (suggestedQuests.some((quest) => quest.skillId === "english")) return "英語、先に片づけろ。1分でいい、口動かせ。";
  if (suggestedQuests.some((quest) => quest.skillId === "threeD")) return "Blender開けたなら十分だ。今日はそこから1個進めろ。";
  return "迷ってる時間が一番もったいない。上から順に一個取ってこい。";
}

function dedupeBySkill(candidates) {
  const firstPass = [];
  const secondPass = [];
  const seen = new Set();
  for (const candidate of candidates) {
    if (seen.has(candidate.skillId)) {
      secondPass.push(candidate);
    } else {
      firstPass.push(candidate);
      seen.add(candidate.skillId);
    }
  }
  return [...firstPass, ...secondPass];
}

function getTodayCompletedQuestIds() {
  const dailyCompleted = (getToday()?.quests || []).filter((quest) => quest.completed).map((quest) => quest.questId);
  const historyCompleted = state.questHistory.filter((item) => item.date === todayKey()).map((item) => item.questId);
  return [...new Set([...dailyCompleted, ...historyCompleted])];
}

function getSkillStats() {
  const stale = new Set(getStaleSkills());
  return Object.keys(state.skills).map((skillId) => ({
    skillId,
    todayExp: state.questHistory
      .filter((item) => item.date === todayKey() && item.skillId === skillId)
      .reduce((sum, item) => sum + item.exp, 0),
    isStale: stale.has(skillId)
  }));
}

function timeStringToMinutes(value) {
  const [hours, minutes] = String(value || "00:00").split(":").map(Number);
  return (hours || 0) * 60 + (minutes || 0);
}

function pickQuest(skillId, category) {
  const quest = quests[skillId].find((item) => item.category === category) || quests[skillId][0];
  return { skillId, quest };
}

function pickQuestByType(skillId, type) {
  const quest = quests[skillId].find((item) => item.type === type) || quests[skillId][0];
  return { skillId, quest };
}

function findQuest(questId) {
  const normalizedQuestId = legacyQuestAliases[questId] || questId;
  for (const [skillId, list] of Object.entries(quests)) {
    const quest = list.find((item) => item.id === normalizedQuestId);
    if (quest) return { skillId, quest };
  }
  return null;
}

function getStaleSkills() {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 3);
  return Object.keys(skillSeeds).filter((skillId) => {
    const last = state.questHistory
      .filter((item) => item.skillId === skillId)
      .map((item) => item.date)
      .sort()
      .at(-1);
    return !last || new Date(`${last}T00:00:00`) < cutoff;
  });
}

function handleQuestClick(event) {
  const button = event.target.closest("[data-complete-today]");
  if (!button) return;
  const daily = getToday();
  const quest = daily.quests.find((item) => item.id === button.dataset.completeToday);
  if (!quest || quest.completed) return;
  completeQuest(quest, "home");
}

function handleManualQuestClick(event) {
  const button = event.target.closest("[data-manual-quest]");
  if (!button) return;
  const found = findQuest(button.dataset.manualQuest);
  if (!found) return;
  completeQuest(
    {
      id: createId(`${Date.now()}-${found.quest.id}`),
      skillId: found.skillId,
      questId: found.quest.id,
      title: found.quest.title,
      exp: found.quest.exp,
      category: found.quest.category,
      type: found.quest.type,
      estimatedMinutes: found.quest.estimatedMinutes,
      completed: false
    },
    "questList"
  );
}

function handleNowCompleteClick(event) {
  const button = event.target.closest("[data-complete-now]");
  if (!button) return;
  const now = state.nowMode || {};
  const quest = (now.suggestedQuests || []).find((item) => item.questId === button.dataset.completeNow);
  if (!quest || quest.completed) return;

  completeQuest(
    {
      id: createId(`${todayKey()}-now-${quest.questId}`),
      skillId: quest.skillId,
      projectId: quest.projectId,
      questId: quest.questId,
      title: quest.title,
      exp: quest.expectedExp,
      category: quest.category || "nowMode",
      type: quest.type || "normal",
      completed: false
    },
    "nowMode",
    {
      situation: now.situation,
      estimatedMinutes: quest.estimatedMinutes
    }
  );
}

function completeQuest(quest, source, options = {}) {
  const sourceKey = normalizeSource(source);
  if (isQuestCompletedToday(quest.questId)) {
    markQuestCompletedEverywhere(quest.questId);
    state.managerComment = "それは今日はもう取ってる。二重取りはなしだ、次の一球いくぞ。";
    saveState();
    renderAll();
    return { completed: false, duplicate: true, expGained: 0 };
  }

  const skill = quest.skillId ? state.skills[quest.skillId] : null;
  const project = quest.projectId ? state.projects?.[quest.projectId] : null;
  const before = skill ? skill.level : null;
  quest.completed = true;
  if (skill) {
    skill.exp += quest.exp;
    skill.level = getLevelFromExp(skill.exp);
  }
  if (project) {
    project.progress = (project.progress || 0) + quest.exp;
    state.projectLogs = state.projectLogs || [];
    state.projectLogs.unshift({
      id: createId(`${Date.now()}-${quest.projectId}-${quest.questId}`),
      date: todayKey(),
      projectId: quest.projectId,
      questId: quest.questId,
      title: quest.title,
      expGained: quest.exp,
      source: sourceKey,
      category: quest.category,
      type: quest.type || "normal",
      estimatedMinutes: options.estimatedMinutes || quest.estimatedMinutes,
      completedAt: new Date().toISOString()
    });
  }
  const after = skill ? skill.level : null;

  const log = {
    id: createId(`${Date.now()}-${quest.skillId || quest.projectId || "task"}-${quest.questId}`),
    date: todayKey(),
    skillId: quest.skillId,
    projectId: quest.projectId,
    questId: quest.questId,
    title: quest.title,
    expGained: quest.exp,
    exp: quest.exp,
    category: quest.category,
    type: quest.type || "normal",
    source: sourceKey,
    completedAt: new Date().toISOString(),
    estimatedMinutes: options.estimatedMinutes || quest.estimatedMinutes,
    situation: options.situation,
    createdAt: new Date().toISOString()
  };
  state.questHistory.push(log);
  markQuestCompletedEverywhere(quest.questId);

  if (skill && after > before) {
    const message = levelUpMessage(quest.skillId, after);
    state.skills[quest.skillId].levelUps.unshift({ date: todayKey(), level: after, message });
    state.managerComment = message;
  } else if (project) {
    state.managerComment = `${project.name}を進めたな。派手じゃなくても、こういう一手が後で効く。`;
  } else {
    state.managerComment = managerComments[quest.skillId] || managerComments.minimum;
  }

  saveState();
  renderAll();
  return { completed: true, duplicate: false, expGained: quest.exp, levelUp: after > before };
}

function generateCorrectionPrompt() {
  const spokenText = dom.spokenTextInput.value.trim();
  const prompt = `以下の英語スピーキング内容を添削してください。\n\n目的：\n私は仕事で使える英語力と、自分の価値観やアイデンティティについて深く話せる英語力を伸ばしたいです。\n\n添削してほしいこと：\n\n1. 文法や不自然な表現を直してください。\n2. より自然な英語表現にしてください。\n3. 私の英語レベルに合う表現も提案してください。\n4. Fluency / Accuracy / Vocabulary / Coherence / Depth の5項目で評価してください。\n5. 100点満点で採点してください。\n6. 次に言い直すための改善ポイントを3つ教えてください。\n\n私が話した内容：\n「${spokenText}」`;
  dom.correctionPromptInput.value = prompt;
  completeQuestFromId("english_generate_prompt", "englishLog");
}

function saveEnglishLog() {
  const log = {
    id: createId(`${Date.now()}-english-log`),
    date: todayKey(),
    theme: dom.englishThemeInput.value.trim(),
    spokenText: dom.spokenTextInput.value.trim(),
    preCorrectionMemo: dom.preCorrectionMemoInput.value.trim(),
    correctionPrompt: dom.correctionPromptInput.value.trim(),
    correctionResult: dom.correctionResultInput.value.trim(),
    revisedText: dom.revisedTextInput.value.trim(),
    scores: {
      fluency: numberOrBlank(dom.fluencyInput.value),
      accuracy: numberOrBlank(dom.accuracyInput.value),
      vocabulary: numberOrBlank(dom.vocabularyInput.value),
      coherence: numberOrBlank(dom.coherenceInput.value),
      depth: numberOrBlank(dom.depthInput.value),
      total: numberOrBlank(dom.totalScoreInput.value)
    },
    improvement: dom.englishImprovementInput.value.trim(),
    earnedExp: 0,
    createdAt: new Date().toISOString()
  };

  if (log.spokenText) log.earnedExp += completeQuestFromId("english_log_spoken_text", "englishLog", false);
  if (log.correctionResult || log.revisedText) log.earnedExp += completeQuestFromId("english_save_correction", "englishLog", false);
  if (log.improvement) log.earnedExp += completeQuestFromId("english_write_improvement", "englishLog", false);
  if (Number(log.scores.total) >= 70) log.earnedExp += completeQuestFromId("english_score_70", "englishLog", false);
  state.englishLogs.unshift(log);
  state.managerComment = "英語ログ保存。言いっぱなしで終わらせなかったのは大きいぞ。";
  saveState();
  renderAll();
}

function completeQuestFromId(questId, source, render = true) {
  const found = findQuest(questId);
  if (!found) return 0;
  const result = completeQuest(
    {
      id: createId(`${Date.now()}-${questId}`),
      skillId: found.skillId,
      questId: found.quest.id,
      title: found.quest.title,
      exp: found.quest.exp,
      category: found.quest.category,
      type: found.quest.type,
      estimatedMinutes: found.quest.estimatedMinutes,
      completed: false
    },
    source
  );
  if (!render) return result.expGained || 0;
  return result.expGained || 0;
}

function handleImageSelect(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    selectedImageData = String(reader.result || "");
    dom.imagePreview.innerHTML = `<img src="${selectedImageData}" alt="選択した画像" />`;
  };
  reader.readAsDataURL(file);
}

function saveImageLog() {
  const skillId = dom.imageSkillInput.value;
  const ratings = Object.fromEntries(
    ratingLabels[skillId].map((label) => [label, Number(document.querySelector(`[data-rating="${label}"]`)?.value || 0)])
  );
  const questId = skillId === "illustration" ? "illust_save_image_log" : "modeling_save_screenshot";
  const earnedExp = completeQuestFromId(questId, "imageLog", false);
  if (dom.imageImprovementInput.value.trim()) {
    completeQuestFromId(skillId === "illustration" ? "illust_write_improvement" : "modeling_write_improvement", "imageLog", false);
  }
  state.imageLogs.unshift({
    id: createId(`${Date.now()}-image-log`),
    date: todayKey(),
    skillId,
    image: selectedImageData,
    title: dom.imageTitleInput.value.trim(),
    memo: dom.imageMemoInput.value.trim(),
    ratings,
    improvement: dom.imageImprovementInput.value.trim(),
    earnedExp,
    createdAt: new Date().toISOString()
  });
  selectedImageData = "";
  dom.imageFileInput.value = "";
  dom.imageTitleInput.value = "";
  dom.imageMemoInput.value = "";
  dom.imageImprovementInput.value = "";
  dom.imagePreview.textContent = "画像プレビュー";
  state.managerComment = skillId === "illustration" ? managerComments.illustration : managerComments.threeD;
  saveState();
  renderAll();
}

function importManagerImage(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.managerImage = String(reader.result || "");
    saveState();
    renderManager();
  };
  reader.readAsDataURL(file);
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `road-to-level-up-${todayKey()}.json`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = { ...createInitialState(), ...JSON.parse(String(reader.result || "{}")) };
      saveState();
      renderAll();
      state.managerComment = "復元完了。バックアップ取ってるやつは強い。";
    } catch {
      state.managerComment = "JSONが読めなかった。ファイルを確認してくれ。";
      renderManager();
    }
  };
  reader.readAsText(file);
}

function resetData() {
  if (!confirm("全データを初期状態に戻します。よろしいですか？")) return;
  state = createInitialState();
  saveState();
  ensureToday();
  renderAll();
}

function renderAll() {
  ensureToday();
  renderManager();
  renderNowMode();
  renderHomeStats();
  renderTodayQuests();
  renderSkillMini();
  renderSkills();
  renderManualQuests();
  renderRatingGrid();
  renderEnglishLogs();
  renderImageLogs();
  renderHistory();
  renderSettings();
  showView(state.activeView || "home");
}

function renderManager() {
  dom.managerComment.textContent = state.managerComment || managerComments.rough;
  if (state.managerImage) {
    dom.managerAvatar.innerHTML = `<img src="${state.managerImage}" alt="マネージャー画像" />`;
  } else {
    dom.managerAvatar.innerHTML = `<div class="avatar-placeholder"><span>⚾</span><b>MANAGER</b></div>`;
  }
}

function renderNowMode() {
  const now = {
    ...createInitialState().nowMode,
    ...(state.nowMode || {})
  };
  const currentTime = getCurrentTimeString();
  dom.nowTimeLabel.textContent = currentTime;
  dom.nowAvailableInput.value = String(now.availableMinutes || 30);
  dom.nowSituationInput.value = now.situation || "home";
  dom.nowMaterialsInput.value = now.hasOfflineMaterials ? "yes" : "no";
  dom.nowComment.textContent = now.managerComment || "今の場所と時間で、できる球だけ選べ。無理な配球はしない。";

  dom.nowSuggestionList.innerHTML = now.suggestedQuests?.length
    ? now.suggestedQuests.map(renderNowSuggestionCard).join("")
    : `<div class="empty">「今なにする？」を押すと、現在時刻・場所・資料有無・未完了クエストから次の一手を出します。</div>`;
}

function renderNowSuggestionCard(quest) {
  const owner = getQuestOwner(quest);
  const completed = Boolean(quest.completed || isQuestCompletedToday(quest.questId));
  return `
    <article class="now-suggestion-card ${completed ? "is-done" : ""}" style="--skill: ${owner.color}">
      <div>
        <span class="quest-tag">${escapeHtml(typeLabel(quest.type))} / ${escapeHtml(owner.name)}</span>
        <h3>${escapeHtml(quest.title)}</h3>
        <p>${escapeHtml(quest.reason)}</p>
      </div>
      <div class="now-suggestion-meta">
        <strong>${quest.estimatedMinutes}分</strong>
        <b>+${quest.expectedExp} EXP</b>
        <button class="complete-btn" data-complete-now="${escapeHtml(quest.questId)}" ${completed ? "disabled" : ""}>${completed ? "完了済み" : "完了"}</button>
      </div>
    </article>
  `;
}

function renderHomeStats() {
  const daily = getToday();
  const completed = daily.quests.filter((item) => item.completed);
  const total = daily.quests.length;
  dom.todayExp.textContent = String(getTodayExp());
  dom.todayRate.textContent = total ? `${Math.round((completed.length / total) * 100)}%` : "0%";
}

function renderTodayQuests() {
  const daily = getToday();
  dom.todayQuestList.innerHTML = daily.quests.length
    ? daily.blocks?.length
      ? renderMorningBlockPlan(daily)
      : daily.quests.map((quest) => renderQuestCard(quest)).join("")
    : `<div class="empty">朝の入力をして「今日のクエスト提案」を押してください。忙しい日でもゼロにしない設計です。</div>`;
}

function renderMorningBlockPlan(daily) {
  const questMap = new Map(daily.quests.map((quest) => [quest.questId, quest]));
  return `
    <div class="block-plan-note">長時間日なので、休憩込みのブロックに分けています。</div>
    ${daily.blocks.map((block) => {
      if (block.kind === "break") return renderBreakBlock(block);
      const quest = questMap.get(block.questId);
      return quest ? renderQuestCard(quest, block) : "";
    }).join("")}
  `;
}

function renderBreakBlock(block) {
  return `
    <article class="break-card">
      <span>${escapeHtml(block.label)}</span>
      <h3>${escapeHtml(block.title)}</h3>
      <strong>${block.minutes}分</strong>
    </article>
  `;
}

function renderQuestCard(quest, block = null) {
  const skill = state.skills[quest.skillId] || skillSeeds[quest.skillId] || skillSeeds.english;
  return `
    <article class="quest-card ${quest.completed ? "is-done" : ""}" style="--skill: ${skill.color}">
      <div>
        <span class="quest-tag">${block ? `${escapeHtml(block.label)} / ${block.minutes}分 / ` : ""}${escapeHtml(typeLabel(quest.type))} / ${escapeHtml(skill.name)}</span>
        <h3>${escapeHtml(quest.title)}</h3>
      </div>
      <div class="quest-side">
        <strong>${quest.estimatedMinutes ? `${quest.estimatedMinutes}分 / ` : ""}+${quest.exp} EXP</strong>
        <button class="complete-btn" data-complete-today="${quest.id}" ${quest.completed ? "disabled" : ""}>${quest.completed ? "完了済み" : "達成"}</button>
      </div>
    </article>
  `;
}

function renderSkillMini() {
  dom.skillMiniGrid.innerHTML = Object.values(state.skills).map((skill) => {
    const next = getNextLevelExp(skill.exp);
    const prev = getCurrentLevelExp(skill.exp);
    const progress = next ? Math.min(100, Math.round(((skill.exp - prev) / (next - prev)) * 100)) : 100;
    return `
      <article class="mini-skill" style="--skill: ${skill.color}">
        <div><span>${escapeHtml(skill.name)}</span><strong>Lv.${skill.level}</strong></div>
        <div class="exp-bar"><i style="width:${progress}%"></i></div>
        <small>${next ? `次まで ${next - skill.exp} EXP` : "Lv.MAX"}</small>
      </article>
    `;
  }).join("");
}

function renderSkills() {
  dom.skillList.innerHTML = Object.values(state.skills).map((skill) => {
    const history = state.questHistory.filter((item) => item.skillId === skill.id).slice(-5).reverse();
    return `
      <article class="skill-card" style="--skill: ${skill.color}">
        <div class="skill-card-head">
          <div><p class="eyebrow">${escapeHtml(skill.goal)}</p><h3>${escapeHtml(skill.name)}</h3></div>
          <span class="level-badge">Lv.${skill.level}</span>
        </div>
        <p>累計EXP: <strong>${skill.exp}</strong> / 次のレベルまで: <strong>${getNextLevelExp(skill.exp) ? getNextLevelExp(skill.exp) - skill.exp : 0}</strong></p>
        <div class="exp-bar"><i style="width:${getProgressPercent(skill.exp)}%"></i></div>
        <h4>最近のクエスト</h4>
        <ul>${history.length ? history.map((item) => `<li>${escapeHtml(item.date)} ${escapeHtml(item.title)} +${item.expGained ?? item.exp}</li>`).join("") : "<li>まだ履歴なし</li>"}</ul>
        <h4>レベルアップ履歴</h4>
        <ul>${skill.levelUps.length ? skill.levelUps.map((item) => `<li>${escapeHtml(item.date)} Lv.${item.level}: ${escapeHtml(item.message)}</li>`).join("") : "<li>まだ履歴なし</li>"}</ul>
      </article>
    `;
  }).join("");
}

function renderManualQuests() {
  dom.manualQuestBoard.innerHTML = Object.entries(quests).map(([skillId, list]) => {
    const skill = state.skills[skillId];
    return `
      <section class="quest-group" style="--skill: ${skill.color}">
        <h3>${escapeHtml(skill.name)}</h3>
        ${list.map((quest) => {
          const completed = isQuestCompletedToday(quest.id);
          return `
          <article class="manual-quest ${completed ? "is-done" : ""}">
            <span>${escapeHtml(typeLabel(quest.type))} / ${escapeHtml(categoryLabel(quest.category))}</span>
            <b>${escapeHtml(quest.title)}</b>
            <em>${quest.estimatedMinutes || estimateQuestMinutes(skillId, quest)}分 / +${quest.exp} EXP</em>
            <button class="secondary-btn compact" data-manual-quest="${quest.id}" ${completed ? "disabled" : ""}>${completed ? "完了済み" : "登録"}</button>
          </article>
        `;
        }).join("")}
      </section>
    `;
  }).join("");
}

function renderRatingGrid() {
  const skillId = dom.imageSkillInput?.value || "illustration";
  dom.ratingGrid.innerHTML = ratingLabels[skillId].map((label) => `
    <label class="field">
      <span>${escapeHtml(label)}</span>
      <select data-rating="${escapeHtml(label)}">
        <option value="1">1</option><option value="2">2</option><option value="3" selected>3</option><option value="4">4</option><option value="5">5</option>
      </select>
    </label>
  `).join("");
}

function renderEnglishLogs() {
  dom.englishLogList.innerHTML = state.englishLogs.length
    ? state.englishLogs.slice(0, 8).map((log) => `
      <article class="history-item">
        <strong>${escapeHtml(log.date)} / ${escapeHtml(log.theme || "テーマなし")} / ${log.scores.total || "-"}点</strong>
        <span>${escapeHtml(log.improvement || "改善点未入力")}</span>
      </article>
    `).join("")
    : `<div class="empty">英語ログはまだありません。</div>`;
}

function renderImageLogs() {
  dom.imageLogList.innerHTML = state.imageLogs.length
    ? state.imageLogs.slice(0, 12).map((log) => `
      <article class="image-log-card">
        ${log.image ? `<img src="${log.image}" alt="${escapeHtml(log.title || "画像ログ")}" />` : `<div class="no-image">No Image</div>`}
        <div>
          <span>${escapeHtml(log.date)} / ${escapeHtml(state.skills[log.skillId].name)}</span>
          <strong>${escapeHtml(log.title || "無題")}</strong>
          <p>${escapeHtml(log.memo || "")}</p>
          <small>改善点: ${escapeHtml(log.improvement || "未入力")}</small>
        </div>
      </article>
    `).join("")
    : `<div class="empty">画像ログはまだありません。</div>`;
}

function renderHistory() {
  const weekly = getWeeklyExp();
  dom.historySummary.innerHTML = `
    <article><span>連続達成</span><strong>${getStreakDays()}日</strong></article>
    <article><span>今週EXP</span><strong>${weekly}</strong></article>
    <article><span>今日EXP</span><strong>${getTodayExp()}</strong></article>
  `;
  dom.questHistoryList.innerHTML = state.questHistory.length
    ? state.questHistory.slice().reverse().slice(0, 40).map((item) => `
      <article class="history-item">
        <strong>${escapeHtml(item.date)} ${escapeHtml(getLogOwnerName(item))} +${item.expGained ?? item.exp} EXP</strong>
        <span>${escapeHtml(item.title)} / ${escapeHtml(typeLabel(item.type))} / ${escapeHtml(categoryLabel(item.category))} / ${escapeHtml(sourceLabel(item.source))}${item.estimatedMinutes ? ` / ${item.estimatedMinutes}分` : ""}${item.situation ? ` / ${escapeHtml(situationLabel(item.situation))}` : ""}</span>
      </article>
    `).join("")
    : `<div class="empty">履歴はまだありません。</div>`;
}

function renderSettings() {
  dom.levelTable.innerHTML = levelTable.map((row) => `<p>Lv.${row.level}: 累計 ${row.exp} EXP</p>`).join("");
  dom.expTable.innerHTML = Object.entries(quests).map(([skillId, list]) => `
    <h4>${escapeHtml(state.skills[skillId].name)}</h4>
    ${list.map((item) => `<p>${escapeHtml(typeLabel(item.type))} / ${escapeHtml(item.title)}: ${item.exp} EXP</p>`).join("")}
  `).join("");
}

function getLevelFromExp(exp) {
  return levelTable.reduce((level, row) => (exp >= row.exp ? row.level : level), 1);
}

function isQuestCompletedToday(questId) {
  return state.questHistory.some((item) => item.date === todayKey() && item.questId === questId);
}

function getQuestOwner(quest) {
  if (quest.skillId) return state.skills[quest.skillId] || skillSeeds[quest.skillId] || skillSeeds.english;
  if (quest.projectId) return state.projects?.[quest.projectId] || projectSeeds[quest.projectId] || { name: "プロジェクト", color: "#94a3b8" };
  return { name: "タスク", color: "#94a3b8" };
}

function getLogOwnerName(log) {
  if (log.skillId) return state.skills[log.skillId]?.name || skillSeeds[log.skillId]?.name || "スキル";
  if (log.projectId) return state.projects?.[log.projectId]?.name || projectSeeds[log.projectId]?.name || "プロジェクト";
  return "タスク";
}

function markQuestCompletedEverywhere(questId) {
  const daily = getToday();
  if (daily?.quests) {
    daily.quests = daily.quests.map((item) => (item.questId === questId ? { ...item, completed: true } : item));
  }
  if (state.nowMode?.suggestedQuests) {
    state.nowMode.suggestedQuests = state.nowMode.suggestedQuests.map((item) =>
      item.questId === questId ? { ...item, completed: true } : item
    );
  }
}

function normalizeSource(source) {
  return {
    "今日のクエスト": "home",
    "手動クエスト": "questList",
    "英語ログ": "englishLog",
    "画像ログ": "imageLog",
    home: "home",
    questList: "questList",
    nowMode: "nowMode",
    englishLog: "englishLog",
    imageLog: "imageLog"
  }[source] || source || "home";
}

function normalizeMorningAvailableMinutes(value) {
  const minutes = Number(value || 30);
  if (availableMinuteOptions.includes(minutes)) return minutes;
  return availableMinuteOptions.find((option) => option >= minutes) || 480;
}

function sourceLabel(source) {
  return {
    home: "ホーム経由",
    questList: "クエスト画面経由",
    nowMode: "Now Mode経由",
    englishLog: "英語ログ経由",
    imageLog: "画像ログ経由"
  }[normalizeSource(source)] || source || "不明";
}

function categoryLabel(category) {
  return {
    skill: "スキル",
    project: "プロジェクト",
    preparation: "準備",
    review: "見直し",
    memo: "メモ",
    "小さい行動": "小さい行動",
    "通常練習": "通常練習",
    "振り返り・改善": "振り返り・改善"
  }[category] || category || "クエスト";
}

function typeLabel(type) {
  return {
    preparation: "準備",
    corePractice: "基礎練",
    normal: "通常",
    reflection: "振り返り",
    "小さい行動": "準備",
    "通常練習": "通常",
    "振り返り・改善": "振り返り"
  }[type] || "通常";
}

function situationLabel(situation) {
  return {
    home: "家",
    commuting: "通学中",
    university: "大学",
    cafe: "カフェ",
    night: "夜",
    other: "その他"
  }[situation] || situation;
}

function getNextLevelExp(exp) {
  return levelTable.find((row) => row.exp > exp)?.exp || null;
}

function getCurrentLevelExp(exp) {
  return levelTable.slice().reverse().find((row) => row.exp <= exp)?.exp || 0;
}

function getProgressPercent(exp) {
  const next = getNextLevelExp(exp);
  const prev = getCurrentLevelExp(exp);
  return next ? Math.min(100, Math.round(((exp - prev) / (next - prev)) * 100)) : 100;
}

function levelUpMessage(skillId, level) {
  if (skillId === "english") return `英語スキルが Lv.${level} に上がったぞ。逃げずに続けた結果だな。`;
  if (skillId === "guitar") return `ギター Lv.${level} 到達。ようやくスタートラインってとこだな。`;
  if (skillId === "illustration") return `イラスト Lv.${level}。描いた分だけ、ちゃんと見えるようになってきたじゃん。`;
  return `3D Lv.${level}。触った回数は裏切らない。形になってきたな。`;
}

function getToday() {
  return state.daily[todayKey()];
}

function getTodayExp() {
  return state.questHistory.filter((item) => item.date === todayKey()).reduce((sum, item) => sum + (item.expGained ?? item.exp), 0);
}

function getWeeklyExp() {
  const start = weekStartKey();
  return state.questHistory.filter((item) => item.date >= start).reduce((sum, item) => sum + (item.expGained ?? item.exp), 0);
}

function getStreakDays() {
  let streak = 0;
  const date = new Date();
  while (true) {
    const key = todayKey(date);
    const hasLog = state.questHistory.some((item) => item.date === key);
    if (!hasLog) break;
    streak += 1;
    date.setDate(date.getDate() - 1);
  }
  return streak;
}

function todayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function weekStartKey() {
  const date = new Date();
  const day = date.getDay();
  date.setDate(date.getDate() + (day === 0 ? -6 : 1 - day));
  return todayKey(date);
}

function createId(seed) {
  return String(seed).replace(/[^a-zA-Z0-9_-]/g, "_");
}

function numberOrBlank(value) {
  return value === "" ? "" : Number(value);
}

function structuredCloneSafe(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...createInitialState(), ...JSON.parse(raw) };
  } catch {
    return createInitialState();
  }
  return createInitialState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
