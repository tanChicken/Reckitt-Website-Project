import type { Locale } from "./config";

// ── UI string dictionary ─────────────────────────────────────────────────────
// Every fixed piece of interface copy (buttons, headings, labels) lives here as
// an { en, zh } pair. Product/medical content lives in data/productFinder.ts as
// bilingual fields instead. Access with the `t(key)` helper from useLanguage().

export const dictionary = {
  // Language toggle
  langEnglish: { en: "EN", zh: "EN" },
  langChinese: { en: "中文", zh: "中文" },
  switchLanguage: { en: "Switch language", zh: "切换语言" },

  // Progress header
  skipToMain: { en: "Skip to main content", zh: "跳至主要内容" },
  logoAria: { en: "Reckitt — back to welcome page", zh: "Reckitt — 返回欢迎页面" },
  stepSymptoms: { en: "Symptoms", zh: "症状" },
  stepAssessment: { en: "Assessment", zh: "评估" },
  stepResults: { en: "Results", zh: "结果" },

  // Shared actions
  previous: { en: "Previous", zh: "上一页" },
  next: { en: "Next", zh: "下一页" },
  back: { en: "Back", zh: "返回" },
  backArrow: { en: "← Back", zh: "← 返回" },
  backToFinder: { en: "← Back to Product Finder", zh: "← 返回产品查询" },
  stepNavigation: { en: "Step navigation", zh: "步骤导航" },

  // Welcome step (not covered by the translation deck — copy written to match its tone)
  welcomeBadge: { en: "Welcome to your SOS Corner", zh: "欢迎来到您的 SOS Corner" },
  welcomeHeadingLine1: { en: "Find the right care", zh: "找到合适的护理" },
  welcomeHeadingLine2: { en: "in just a few steps", zh: "只需几个简单步骤" },
  welcomeSubtitle: {
    en: "Answer a few simple questions for a tailored product suggestion.",
    zh: "回答几个简单的问题，即可获得为您量身定制的产品建议。",
  },
  startNow: { en: "Start Now →", zh: "立即开始 →" },
  welcomeSlideFamilyAlt: {
    en: "A family using Reckitt products for everyday health and wellness",
    zh: "一家人使用 Reckitt 产品维护日常健康与保健",
  },
  welcomeSlideKioskAlt: {
    en: "Reckitt SOS Corner kiosk at a pharmacy",
    zh: "药房内的 Reckitt SOS Corner 自助机",
  },
  goToSlide: { en: "Go to slide", zh: "前往幻灯片" },

  // Need selection step
  needHeading: {
    en: "Please select the area you’re experiencing discomfort",
    zh: "请选择您感到不适的部位",
  },
  bodyArea: { en: "Body Area", zh: "身体部位" },
  tapToStart: { en: "Tap a body area to get started", zh: "点击身体部位开始" },
  bodyDiagramAlt: {
    en: "Body diagram showing selectable areas",
    zh: "显示可选部位的身体示意图",
  },
  symptomsCovered: { en: "Symptoms Covered", zh: "涵盖症状" },
  noSymptoms: { en: "No symptoms recorded for this zone.", zh: "此部位暂无记录的症状。" },
  medicalDisclaimerLabel: { en: "Medical Disclaimer: ", zh: "医疗免责声明：" },
  medicalDisclaimerBody: {
    en: "This tool provides general product-category guidance only and does not constitute medical advice. Always read product labels and consult a healthcare professional if symptoms are severe or persistent.",
    zh: "本工具仅提供一般产品类别指导，不构成医疗建议。如果症状严重或持续存在，请务必阅读产品标签并咨询医疗保健专业人员。",
  },
  // "Head Selected" (en) becomes "已选择头部" (zh) — order differs, handled in component.
  selectedSuffix: { en: "Selected", zh: "已选择" },

  // Throat symptom step
  throatHeading: { en: "What are your throat symptoms?", zh: "您的喉咙有哪些症状？" },
  throatSubtitle: {
    en: "Select the symptom that best describes how you’re feeling.",
    zh: "请选择最能描述您感受的症状。",
  },
  throatTypeLegend: { en: "Throat symptom type", zh: "喉咙症状类型" },
  soreThroatLabel: { en: "Sore Throat", zh: "喉咙痛" },
  soreThroatDesc: {
    en: "Pain, scratchiness or irritation in the throat",
    zh: "喉咙疼痛、干涩或受刺激",
  },
  coughLabel: { en: "Cough", zh: "咳嗽" },
  coughDesc: {
    en: "Persistent cough, tickle or irritation in the airway",
    zh: "持续咳嗽、气道发痒或受刺激",
  },
  soreThroatIconAlt: { en: "Sore Throat icon", zh: "喉咙痛图标" },
  coughIconAlt: { en: "Cough icon", zh: "咳嗽图标" },

  // Questions step
  tellUsMore: { en: "Tell us a little more", zh: "请提供更多信息" },
  tellUsMoreSubtitle: {
    en: "Answer two quick questions to personalise your recommendation.",
    zh: "回答两个简短问题，以便我们为您提供个性化建议。",
  },
  whoIsThisFor: { en: "Who is this for?", zh: "适用对象" },
  howSevere: { en: "How severe is it?", zh: "严重程度" },
  childHeadAge: { en: "6 months – 12 years old", zh: "6个月-12岁" },

  // Recommendation step
  recommendedRelief: { en: "Recommended Relief", zh: "推荐缓解方案" },
  recommendationSubtitle: {
    en: "Based on your symptoms, here is your tailored suggestion.",
    zh: "根据您的症状，以下是为您量身定制的建议。",
  },
  closestMatch: { en: "Closest available match — ", zh: "最接近的现有匹配 — " },
  bestMatch: { en: "✓ Best Match", zh: "✓ 最佳推荐" },
  verifiedRecommendation: { en: "Verified recommendation", zh: "已验证的推荐" },
  verified: { en: "Verified", zh: "已验证" },
  packSize: { en: "Pack Size", zh: "包装规格" },
  productVariants: { en: "Product variants", zh: "产品规格" },
  flavour: { en: "Flavour", zh: "口味" },
  productFlavours: { en: "Product flavours", zh: "产品口味" },
  viewFullDetails: { en: "View full details", zh: "查看完整详情" },
  startOver: { en: "Start Over", zh: "重新开始" },
  medicalDisclaimer: { en: "Medical Disclaimer", zh: "医疗免责声明" },
  productDetails: { en: "Product Details", zh: "产品详情" },
  activeIngredient: { en: "Active Ingredient", zh: "活性成分" },
  seeProductLabel: { en: "See product label", zh: "请参阅产品标签" },
  dosage: { en: "Dosage", zh: "剂量" },
  followLabelInstructions: { en: "Follow label instructions", zh: "请遵循标签说明" },
  keyBenefits: { en: "Key Benefits", zh: "主要功效" },
  disclaimerModalIntro: {
    en: "This tool is for informational purposes only and does not constitute medical advice.",
    zh: "本工具仅供信息参考，不构成医疗建议。",
  },
  important: { en: "Important", zh: "重要事项" },
  iUnderstand: { en: "I Understand", zh: "我明白" },

  // Footer
  supportHeading: { en: "Support", zh: "支持" },
  contactUs: { en: "Contact us", zh: "联系我们" },
  privacyPolicy: { en: "Privacy policy", zh: "隐私政策" },
  termsOfUse: { en: "Terms of use", zh: "使用条款" },
} as const satisfies Record<string, Record<Locale, string>>;

export type DictKey = keyof typeof dictionary;
