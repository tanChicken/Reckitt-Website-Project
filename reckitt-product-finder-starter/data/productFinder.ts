import type {
  AudienceId,
  ChoiceOption,
  SymsptomType,
  PreferenceId,
  ProductItem,
  SeverityId,
  BodyPartId,
  ProductFlavor,
} from "@/types/productFinder";

// ── Bilingual content ────────────────────────────────────────────────────────
// Every consumer-facing string below is either a plain English string or an
// { en, zh } pair (see lib/i18n/localized.ts). The Chinese comes from the
// approved translation deck; brand names are intentionally kept in their
// original form. Non-text fields (ids, priorities, image ids, audience/severity
// rules) are unchanged and drive the finder logic exactly as before.

export const bodyParts: ChoiceOption<BodyPartId>[] = [
  {
    id: "head",
    label: { en: "Head", zh: "头部" },
    description: { en: "Head-related symptoms.", zh: "头部相关症状。" },
    icon: "/head.png",
  },
  {
    id: "mouth",
    label: "Mouth",
    description: "Mouth and gum-related symptoms.",
    icon: "/mouth.svg",
  },
  {
    id: "throat",
    label: { en: "Throat & Chest", zh: "喉咙和胸腔" },
    description: {
      en: "Throat and chest-related symptoms.",
      zh: "喉咙和胸腔相关症状。",
    },
    icon: "/throat.png",
  },
  {
    id: "heart",
    label: { en: "Heart", zh: "心脏" },
    description: { en: "Heart-related symptoms.", zh: "心脏相关症状。" },
    icon: "/heartQ.png",
  },
  {
    id: "stomach",
    label: { en: "Stomach", zh: "胃部" },
    description: { en: "Stomach-related symptoms.", zh: "胃部相关症状。" },
    icon: "/stomach.png",
  },
  {
    id: "bowel",
    label: "Bowel",
    description: "Bowel-related symptoms.",
    icon: "/bowel.svg",
  },
];

export const bodySymptoms: SymsptomType[] = [
  {
    id: "head",
    symptom: {
      en: ["Headache", "Migraine", "Fever", "Dental Pain"],
      zh: ["头痛", "偏头痛", "发烧", "牙痛"],
    },
    icon: "🧠",
  },
  {
    id: "mouth",
    symptom: ["Mouth Ulcers", "Denture Sore Spots", "Cold Sores", "Teething"],
    icon: "👄",
  },
  {
    id: "throat",
    symptom: {
      en: [
        "Sore Throat",
        "Cough",
        "Hoarseness",
        "Throat Irritation",
        "Difficulty Swallowing",
        "Dissolves Phlegm",
      ],
      zh: [
        "喉咙痛",
        "咳嗽",
        "声音嘶哑",
        "喉咙刺激/不适",
        "吞咽困难",
        "化痰",
      ],
    },
    icon: "️",
  },
  {
    id: "heart",
    symptom: {
      en: [
        "Heart Attack",
        "Chest Pain",
        "Tightness of Breath",
        "Palpitations",
        "Irregular Heartbeat",
      ],
      zh: ["心肌梗塞", "胸痛", "呼吸紧迫", "心悸", "心律不齐"],
    },
    icon: "❤️",
  },
  {
    id: "chest",
    symptom: {
      en: [
        "Chest Pain",
        "Tightness of Breath",
        "Cough",
        "Chest Congestion",
        "Chest Tightness",
      ],
      zh: ["胸痛", "呼吸紧迫", "咳嗽", "胸闷", "胸部紧迫"],
    },
    icon: "🫁",
  },
  {
    id: "stomach",
    symptom: {
      en: ["Stomachache", "Indigestion", "Nausea", "Bloating", "Gas", "Heartburn"],
      zh: ["胃痛", "消化不良", "恶心", "腹胀", "胃肠胀气", "胃灼热"],
    },
    icon: "🔥",
  },
  {
    id: "bowel",
    symptom: ["Constipation"],
    icon: "🌿",
  },
];

export const audienceOptions: ChoiceOption<AudienceId>[] = [
  {
    id: "adult",
    label: { en: "Adult", zh: "成人" },
    description: { en: "18 years old and above", zh: "18岁及以上" },
    icon: "/adult.png",
  },
  {
    id: "teen",
    label: { en: "Teen", zh: "青少年" },
    description: { en: "13–17 years old", zh: "13-17岁" },
    icon: "/teen.png",
  },
  {
    id: "child",
    label: { en: "Child", zh: "儿童" },
    description: {
      en: "Under 13 years old, but above 6 years",
      zh: "13岁以下，6岁以上",
    },
    icon: "/child.png",
  },
];

export const severityOptions: ChoiceOption<SeverityId>[] = [
  {
    id: "mild",
    label: { en: "Mild", zh: "轻度" },
    description: { en: "Occasional discomfort", zh: "偶尔感到不适" },
    icon: "/mild.png",
  },
  {
    id: "moderate",
    label: { en: "Moderate", zh: "中度" },
    description: { en: "Frequent discomfort", zh: "频繁感到不适" },
    icon: "/moderate.png",
  },
  {
    id: "severe",
    label: { en: "Severe", zh: "重度" },
    description: { en: "Constant discomfort", zh: "持续感到不适" },
    icon: "/severe.png",
  },
];

// Preferences are not currently surfaced in the UI; kept for future use.
export const preferenceOptions: ChoiceOption<PreferenceId>[] = [
  { id: "fast-relief", label: "Fast relief", description: "Prioritise speed.", icon: "⚡" },
  { id: "long-lasting", label: "Long lasting", description: "Prioritise duration.", icon: "⏱️" },
  { id: "gentle", label: "Gentle", description: "Suitable for sensitive needs.", icon: "🌿" },
  { id: "easy-to-use", label: "Easy to use", description: "Simple formats or routines.", icon: "✅" },
  { id: "non-drowsy", label: "Non-drowsy", description: "Avoid sleepy-feeling options.", icon: "☀️" },
  { id: "trusted-brand", label: "Trusted brand", description: "Known household brands.", icon: "⭐" },
];

export const productItems: ProductItem[] = [
  // ── HEAD — Nurofen range ───────────────────────────────────────────────────
  // priority guide: 5=baseline, higher=preferred when tied in same tier
  {
    id: "nurofen-regular",
    brand: "Nurofen Regular",
    category: { en: "Pain & fever relief", zh: "缓解疼痛与发烧" },
    description: {
      en: "Standard ibuprofen 200 mg tablets that relieve headaches, migraines, dental pain, fever and inflammation.",
      zh: "一款适用于成人及12岁以上儿童的常规止痛退烧片。它既能满足一般止痛需求，也有助于在症状较轻时减轻炎症。",
    },
    needId: "head",
    imageLabel: "NR",
    tags: {
      en: ["Effective Pain Relief", "Relieves Fever", "Reduces Inflammation", "Contains Ibuprofen"],
      zh: ["有效缓解疼痛", "缓解发烧", "减轻炎症", "含布洛芬"],
    },
    url: "https://www.nurofen.com.au/products/nurofen-tablets/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild"],
    },
    variants: [
      {
        id: "standard",
        label: { en: "12 Tablets", zh: "12片" },
        description: {
          en: "A standard pain and fever relief tablet for adults and children over 12 years old. It is suitable for general pain relief needs and also helps reduce inflammation when symptoms are mild.",
          zh: "一款适用于成人及12岁以上儿童的常规止痛退烧片。它既能满足一般止痛需求，也有助于在症状较轻时减轻炎症。",
        },
        activeIngredient: { en: "Ibuprofen 200 mg", zh: "布洛芬 200毫克" },
        dosage: {
          en: [
            "Adults and children over 12: 1–2 tablets with water",
            "Up to 3× daily as required",
            "Leave at least 4 hours between doses",
            "Maximum 6 tablets in 24 hours",
            "Do not give to children under 12",
          ],
          zh: [
            "成人及12岁以上儿童：每次1-2片，以温开水送服",
            "视需要每日最多服用3次",
            "两次服药间隔至少4小时",
            "24小时内最多服用6片",
            "请勿给12岁以下儿童服用",
          ],
        },
        keyBenefits: {
          en: ["Provides effective pain relief", "Relieves fever", "Reduces inflammation", "Contains ibuprofen"],
          zh: ["有效缓解疼痛", "缓解发烧", "减轻炎症", "含布洛芬"],
        },
      },
    ],
    activeIngredient: { en: ["Ibuprofen 200mg"], zh: ["布洛芬 200毫克"] },
    dosage: {
      en: [
        "Oral use only; short-term treatment.",
        "Adults & >12: 1–2 tabs every 4–6 hrs (max 6/day)",
        "Children 9–12: 1 tablet every 4–6 hrs as needed (max 3/day)",
      ],
      zh: [
        "仅供口服；短期治疗。",
        "成人及12岁以上：每4-6小时服用1-2片（每日最多6片）",
        "9-12岁儿童：视需要每4-6小时服用1片（每日最多3片）",
      ],
    },
    disclaimerPoints: {
      en: [
        "Always read the label before use.",
        "Use only as directed.",
        "If symptoms persist or worsen, if new symptoms occur, or if the product is required for more than 3 days, consult your doctor.",
        "Do not give to children under 12 years old.",
        "Do not exceed the stated dose. If you accidentally take more than the recommended dose, contact your doctor.",
        "Taking NSAIDs at about 20 weeks of pregnancy or later may harm your unborn baby.",
      ],
      zh: [
        "使用前请务必阅读标签。",
        "仅按指示使用。",
        "如果症状持续或加重、出现新症状，或需要使用本产品超过3天，请咨询医生。",
        "请勿给12岁以下儿童使用。",
        "请勿超过规定剂量。若不慎服用超过建议剂量，请立即询问医生。",
        "怀孕约20周以上服用NSAIDs可能会伤害未出生的宝宝。",
      ],
    },
  },
  {
    id: "nurofen-express",
    brand: "Nurofen Express",
    category: { en: "Fast-acting pain & fever relief", zh: "快速缓解疼痛与发烧" },
    description: {
      en: "Ibuprofen lysine 342 mg caplets — targets pain in 10 minutes and relieves fever and inflammation.",
      zh: "一款专为成人、老年人及12岁及以上儿童设计的速效止痛胶囊型药片。适用于快速缓解疼痛、发烧及炎症症状的人群。",
    },
    needId: "head",
    imageLabel: "NE",
    tags: {
      en: ["Ibuprofen Lysine", "10-min relief", "Fast acting"],
      zh: ["布洛芬赖氨酸", "10分钟起效", "快速缓解"],
    },
    url: "https://www.nurofen.com.au/products/nurofen-express/",
    priority: 6,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["moderate", "severe"],
    },
    variants: [
      {
        id: "standard",
        label: { en: "12 Caplets", zh: "12粒胶囊型药片" },
        description: {
          en: "A faster-acting pain relief caplet for adults, elderly users, and children aged 12 years and above. It is suitable when users want quicker relief from pain, fever, and inflammation.",
          zh: "一款专为成人、老年人及12岁及以上儿童设计的速效止痛胶囊型药片。适用于快速缓解疼痛、发烧及炎症症状的人群。",
        },
        activeIngredient: { en: "Ibuprofen 342 mg", zh: "布洛芬 342毫克" },
        dosage: {
          en: [
            "Adults, elderly, and children 12+: 1–2 caplets with water",
            "Up to 3× daily as required",
            "Leave at least 4 hours between doses",
            "Maximum 6 caplets in 24 hours",
            "Do not give to children under 12",
          ],
          zh: [
            "成人、老年人及12岁以上儿童：每次1-2颗，温开水送服",
            "视需要每日最多服用3次",
            "两次服药间隔至少4小时",
            "24小时内最多服用6粒",
            "请勿给12岁以下儿童服用",
          ],
        },
        keyBenefits: {
          en: [
            "Targets pain in 10 minutes",
            "Provides effective pain relief",
            "Relieves fever",
            "Reduces inflammation",
            "Contains ibuprofen lysine",
          ],
          zh: [
            "10分钟内针对疼痛起效",
            "有效缓解疼痛",
            "缓解发烧",
            "减轻炎症",
            "含布洛芬赖氨酸",
          ],
        },
      },
    ],
    activeIngredient: { en: ["Ibuprofen 200mg"], zh: ["布洛芬 200毫克"] },
    dosage: {
      en: [
        "Oral use only; short-term treatment.",
        "Adults & >12: 1–2 tabs every 4–6 hrs (max 6/day)",
        "Children 9–12: 1 tablet every 4–6 hrs as needed (max 3/day)",
      ],
      zh: [
        "仅供口服；短期治疗。",
        "成人及12岁以上：每4-6小时服用1-2片（每日最多6片）",
        "9-12岁儿童：视需要每4-6小时服用1片（每日最多3片）",
      ],
    },
    disclaimerPoints: {
      en: [
        "Always read the label before use.",
        "Use only as directed.",
        "If symptoms persist or worsen, if new symptoms occur, or if the product is required for more than 3 days, consult your doctor.",
        "Do not give to children under 12 years old.",
        "Do not exceed the stated dose. If you accidentally take more than the recommended dose, contact your doctor.",
        "Taking NSAIDs at about 20 weeks of pregnancy or later may harm your unborn baby.",
      ],
      zh: [
        "使用前请务必阅读标签。",
        "仅按指示使用。",
        "如果症状持续或加重、出现新症状，或需要使用本产品超过3天，请咨询医生。",
        "请勿给12岁以下儿童使用。",
        "请勿超过规定剂量。若不慎服用超过建议剂量，请立即询问医生。",
        "怀孕约20周以上服用NSAIDs可能会伤害未出生的宝宝。",
      ],
    },
  },
  {
    id: "nurofen-nuromol",
    brand: "Nuromol",
    category: { en: "Dual-action pain relief", zh: "双效缓解疼痛" },
    description: {
      en: "Combines ibuprofen 200 mg and paracetamol 500 mg for double-action relief lasting up to 8 hours.",
      zh: "一款专为成人设计的复合止痛片。结合布洛芬与扑热息痛，提供双效缓解，适用于18岁及以上人群。",
    },
    needId: "head",
    imageLabel: "NM",
    tags: {
      en: ["Dual action", "8-hour relief", "Ibuprofen + Paracetamol"],
      zh: ["双重止痛", "持续8小时", "含布洛芬+扑热息痛"],
    },
    url: "https://www.nurofen.com.au/products/nuromol/",
    priority: 7,
    suitableFor: {
      audiences: ["adult"],
      severities: ["severe"],
    },
    variants: [
      {
        id: "standard",
        label: { en: "12 Tablets", zh: "12片" },
        description: {
          en: "A combination pain relief tablet for stronger adult pain symptoms. It combines ibuprofen and paracetamol to provide double-action relief and is positioned for users aged 18 and above.",
          zh: "一款专为成人设计的复合止痛片。结合布洛芬与扑热息痛，提供双效缓解，适用于18岁及以上人群。",
        },
        activeIngredient: {
          en: "Ibuprofen 200 mg + Paracetamol 500 mg",
          zh: "布洛芬 200毫克 + 扑热息痛 500毫克",
        },
        dosage: {
          en: [
            "Adults under 65 and children from 18 years: 1 tablet, or 2 if required",
            "Take 3× daily when necessary, every 8 hours",
            "Leave 6 hours between doses",
            "Do not give to children under 18",
            "Do not take with other products containing paracetamol, ibuprofen, or other anti-inflammatory medicines",
          ],
          zh: [
            "65岁以下成人及18岁及以上人群：每次1片，必要时可服2片",
            "必要时每日服用3次，每次间隔8小时",
            "服药之间需间隔6小时",
            "请勿给18岁以下儿童服用",
            "请勿与含有扑热息痛（对乙酰氨基酚）、布洛芬或其他抗炎药物的产品同时服用",
          ],
        },
        keyBenefits: {
          en: [
            "Combines ibuprofen and paracetamol",
            "Double-action pain relief",
            "Provides relief for up to 8 hours",
          ],
          zh: ["结合布洛芬与扑热息痛", "双效止痛缓解", "持续缓解长达8小时"],
        },
      },
    ],
    activeIngredient: {
      en: ["Ibuprofen 200 mg", "Paracetamol 500 mg"],
      zh: ["布洛芬 200毫克", "扑热息痛 500毫克"],
    },
    dosage: {
      en: [
        "Take with water.",
        "Adults <65 & ≥18: 1–2 tablets every 8 hrs as needed (max 6/day).",
        "Leave ≥6 hrs between doses.",
        "Not for <18 years.",
        "Avoid with other paracetamol, ibuprofen, or anti-inflammatory medicines.",
        "Consult a doctor if taking other medicines, have diabetes, or dehydration.",
      ],
      zh: [
        "以温开水送服。",
        "65岁以下且18岁及以上成人：视需要每8小时服用1-2片（每日最多6片）。",
        "两次服药间隔至少6小时。",
        "不适用于18岁以下人群。",
        "请勿与其他含扑热息痛、布洛芬或抗炎药物同时服用。",
        "如正在服用其他药物、患有糖尿病或脱水，请咨询医生。",
      ],
    },
    keyBenefits: {
      en: ["Dual-action pain relief", "Up to 8 hours relief", "Ibuprofen + Paracetamol"],
      zh: ["双效止痛缓解", "持续缓解长达8小时", "布洛芬 + 扑热息痛"],
    },
    disclaimerPoints: {
      en: [
        "Always read the label before use.",
        "Use only as directed.",
        "If symptoms persist or worsen, if new symptoms occur, or if the product is required for more than 3 days, consult your doctor.",
        "Do not give to children under 18 years old.",
        "Do not exceed the stated dose. If you accidentally take more than the recommended dose, contact your doctor.",
        "Taking NSAIDs at about 20 weeks of pregnancy or later may harm your unborn baby.",
      ],
      zh: [
        "使用前请务必阅读标签。",
        "仅按指示使用。",
        "如果症状持续或恶化、出现新症状，或需要使用本产品超过3天，请咨询医生。",
        "请勿给18岁以下儿童使用。",
        "请勿超过规定剂量。如不小心服用超过建议剂量，请联系医生。",
        "妊娠约20周或之后服用NSAIDs（非甾体抗炎药）可能会伤害未出生的宝宝。",
      ],
    },
  },
  {
    id: "nurofen-children",
    brand: "Nurofen for Children",
    category: { en: "Children's pain & fever relief", zh: "儿童退热止痛" },
    description: {
      en: "Ibuprofen 100 mg/5 ml oral suspension for children aged 6 months to 12 years. Relieves fever, pain and inflammation.",
      zh: "儿童专用布洛芬液体制剂，适用于6个月至12岁儿童，用于缓解发热、疼痛及炎症，剂量根据儿童年龄调整。",
    },
    needId: "head",
    imageLabel: "NC",
    tags: {
      en: ["Children 6mo–12yr", "Suspension", "Ibuprofen"],
      zh: ["适用儿童6个月-12岁", "口服悬液", "含布洛芬"],
    },
    url: "https://www.nurofen.com.au/products/nurofen-for-children/",
    priority: 8,
    suitableFor: {
      audiences: ["child"],
      severities: ["mild", "moderate"],
    },
    variants: [
      {
        id: "standard",
        label: { en: "60ml", zh: "60毫升" },
        description: {
          en: "A children’s liquid ibuprofen product for fever, pain, and inflammation relief. It is designed for children from 6 months to 12 years, with dosage depending on the child’s age group.",
          zh: "儿童专用布洛芬液体制剂，适用于6个月至12岁儿童，用于缓解发热、疼痛及炎症，剂量根据儿童年龄调整。",
        },
        activeIngredient: { en: "Ibuprofen 100 mg", zh: "布洛芬 100毫克" },
        dosage: {
          en: [
            "6–12 months: 2.5 ml, 3–4× daily",
            "1–3 years: 5 ml, 3× daily",
            "4–6 years: 7.5 ml, 3× daily",
            "7–9 years: 10 ml, 3× daily",
            "10–12 years: 15 ml, 3× daily",
            "Give doses approximately every 6–8 hours as needed",
          ],
          zh: [
            "6-12个月：2.5毫升，每日3-4次",
            "1-3岁：5毫升，每日3次",
            "4-6岁：7.5毫升，每日3次",
            "7-9岁：10毫升，每日3次",
            "10-12岁：15毫升，每日3次",
            "每隔6-8小时给药一次，视需要调整",
          ],
        },
        keyBenefits: {
          en: ["Relieves fever & pain in children", "Reduces inflammation", "Contains ibuprofen"],
          zh: ["儿童退热止痛", "减轻炎症", "含布洛芬"],
        },
      },
    ],
    activeIngredient: { en: ["Ibuprofen 100 mg/5 ml"], zh: ["布洛芬 100毫克/5毫升"] },
    dosage: {
      en: [
        "1 tsp = 5ml:",
        "6-12 Months : 2.5ml : 3-4 times a day",
        "1–3 years: 5ml, 3× daily",
        "4–6 years: 7.5ml, 3× daily",
        "7–9 years: 10ml, 3× daily",
        "10–12 years: 15ml, 3× daily",
        "Give every 6–8 hrs as needed (min. 4 hrs if advised by doctor)",
      ],
      zh: [
        "1茶匙 = 5毫升：",
        "6-12个月：2.5毫升：每日3-4次",
        "1-3岁：5毫升，每日3次",
        "4-6岁：7.5毫升，每日3次",
        "7-9岁：10毫升，每日3次",
        "10-12岁：15毫升，每日3次",
        "视需要每6-8小时给药一次（如医生建议，间隔至少4小时）",
      ],
    },
    keyBenefits: {
      en: ["Relieves fever in children", "Reduces inflammation", "Contains ibuprofen"],
      zh: ["缓解儿童发烧", "减轻炎症", "含布洛芬"],
    },
    disclaimerPoints: {
      en: [
        "Always read the label before use.",
        "Use only as directed.",
        "If symptoms persist or worsen, if new symptoms occur, or if the product is required for more than 3 days, consult your doctor.",
        "Not for children under 6 months old. Always check the dosage chart on the label for the correct dose by weight.",
        "Do not exceed the stated dose. If you accidentally give more than the recommended dose, contact your doctor.",
      ],
      zh: [
        "使用前请务必阅读标签。",
        "仅按指示使用。",
        "如果症状持续或恶化、出现新症状，或产品需要使用超过3天，请咨询医生。",
        "不适用于6个月以下儿童。请务必查看标签上的剂量表，并按体重使用正确剂量。",
        "请勿超过规定剂量。若不慎给予超过建议剂量，请联系医生。",
      ],
    },
  },

  // ── THROAT — Strepsils range ───────────────────────────────────────────────
  {
    id: "strepsils-original",
    brand: "Strepsils",
    category: { en: "Sore throat relief — mild", zh: "喉咙痛缓解 - 轻度" },
    description: {
      en: "A sore throat lozenge formulated for dry, itchy or scratchy throats. It soothes and moisturises the throat while providing antibacterial and antiviral action.",
      zh: "专为缓解喉咙干燥、发痒或刺痛感而研制的润喉糖。它能舒缓并滋润喉咙，同时发挥抗菌和抗病毒作用。",
    },
    needId: "throat",
    imageLabel: "SO",
    tags: {
      en: ["Lozenges", "Antibacterial", "Ages 6+"],
      zh: ["含片", "抗菌", "适合6岁以上"],
    },
    url: "https://www.strepsils.com.au/products/",
    priority: 4,
    suitableFor: {
      audiences: ["adult", "teen", "child"],
      severities: ["mild"],
    },
    flavors: [
      { id: "honey", label: { en: "Honey & Lemon", zh: "蜂蜜柠檬味" } },
      { id: "orange-vitamin-c", label: { en: "Orange with Vitamin C", zh: "橙味（含维生素C）" } },
      { id: "original", label: { en: "Original", zh: "原味" } },
      { id: "extra-strong", label: { en: "Extra Strong", zh: "特强型" } },
      { id: "cool", label: { en: "Cool", zh: "清凉型" } },
      { id: "sugar-free-lemon", label: { en: "Sugar Free Lemon", zh: "无糖柠檬味" } },
    ] satisfies ProductFlavor[],
    variants: [
      { id: "6-pack", label: { en: "6 lozenges", zh: "6粒含片" } },
      { id: "24-pack", label: { en: "24 lozenges", zh: "24粒含片" } },
    ],
    activeIngredient: {
      en: ["Amylmetacresol 0.6 mg", "Dichlorobenzyl 1.2 mg"],
      zh: ["氨基苯甲酸乙酯 0.6毫克", "地氯苄氯铵 1.2毫克"],
    },
    dosage: {
      en: [">6 years: 1 lozenge every 2–3 hours", "Maximum 12 lozenges daily"],
      zh: ["6岁以上：每2-3小时含服1粒含片", "每日最多12粒"],
    },
    keyBenefits: {
      en: [
        "Soothes and moisturises the throat",
        "Relieves pain from 5 minutes",
        "Relief lasts up to 2 hours",
        "Fights germs with antibacterial and antiviral effects",
      ],
      zh: [
        "舒缓并滋润喉咙",
        "5分钟内缓解疼痛",
        "药效持续长达2小时",
        "具有抗菌和抗病毒功效，对抗病菌",
      ],
    },
    disclaimerPoints: {
      en: [
        "Strepsils are suitable for adults & children above 6 years old.",
        "Remember young children can choke on lozenges.",
        "Keep out of the reach of children.",
        "Do not exceed the stated dose.",
        "Read the instructions carefully before use.",
      ],
      zh: [
        "Strepsils 适用于成人及6岁以上儿童。",
        "请注意幼童可能会被含服润喉糖咽到。",
        "请将含片放在儿童无法触及的地方。",
        "请勿超过规定剂量。",
        "使用前请仔细阅读说明。",
      ],
    },
  },
  {
    id: "strepsils-max-triple",
    brand: "Strepsils Max Triple Action",
    category: { en: "Sore throat relief — moderate", zh: "缓解喉咙痛 - 中度" },
    description: {
      en: "A sore throat lozenge formulated for painful throat symptoms. It relieves pain, fights infection, and soothes the throat for effective relief.",
      zh: "专为缓解喉咙疼痛症状而设计的润喉糖。含有麻醉效果以舒缓喉咙疼痛和有效缓解剧烈的刺痛感，既能对抗感染。",
    },
    needId: "throat",
    imageLabel: "SM",
    tags: {
      en: ["Hexylrescorcinol", "Triple action", "Painful throat"],
      zh: ["己基间苯二酚", "三重功效", "喉咙刺痛"],
    },
    url: "https://www.strepsils.com.au/products/strepsils-max/",
    priority: 6,
    suitableFor: {
      audiences: ["adult", "teen", "child"],
      severities: ["moderate"],
    },
    variants: [
      {
        id: "6s",
        label: { en: "6 lozenges", zh: "6粒含片" },
        imageId: "strepsils-max-triple-6s",
        description: {
          en: "A sore throat lozenge designed for painful throat condition, helping relieve sharp, stabbing pain while fighting infection and providing a numbing effect to soothe sore throat.",
          zh: "专为缓解喉咙疼痛症状而设计的润喉糖。含有麻醉效果以舒缓喉咙疼痛和有效缓解剧烈的刺痛感，既能对抗感染。",
        },
      },
      {
        id: "16s",
        label: { en: "16 lozenges", zh: "16粒含片" },
        imageId: "strepsils-max-triple-16s",
        description: {
          en: "A sore throat lozenge designed for painful throat condition, helping relieve sharp, stabbing pain while fighting infection and providing a numbing effect to soothe sore throat.",
          zh: "专为缓解喉咙疼痛症状而设计的润喉糖。含有麻醉效果以舒缓喉咙疼痛和有效缓解剧烈的刺痛感，既能对抗感染。",
        },
      },
    ],
    activeIngredient: { en: "Hexylresorcinol 2.4 mg", zh: "己基间苯二酚 2.4毫克" },
    dosage: {
      en: [">6 years: 1 lozenge every 3 hours", "Maximum 12 lozenges daily"],
      zh: ["6岁以上：每3小时含服1粒", "每日最多12粒"],
    },
    keyBenefits: {
      en: [
        "Relieves sore throat from 1 minute",
        "Relief lasts up to 2 hours",
        "Numbs pain to ease sore throat discomfort",
        "Fights infection cause germ",
      ],
      zh: [
        "1分钟内缓解喉咙痛",
        "药效持续长达2小时",
        "含有麻醉作用减轻痛感及喉咙不适",
        "对抗喉咙感染引起的病菌",
      ],
    },
    disclaimerPoints: {
      en: [
        "Strepsils are suitable for adults & children above 6 years old.",
        "Remember young children can choke on lozenges.",
        "Keep out of the reach of children.",
        "Do not exceed the stated dose.",
        "Read the instructions carefully before use.",
      ],
      zh: [
        "Strepsils 适用于成人及6岁以上儿童。",
        "注：幼童含服润喉糖时可能发生哽噎。",
        "请置于儿童无法触及处。",
        "请勿超过规定剂量。",
        "使用前请仔细阅读说明。",
      ],
    },
  },

  {
    id: "strepsils-max-pro",
    brand: "Strepsils Max Pro",
    category: { en: "Sore throat relief — severe", zh: "喉咙痛缓解——重度" },
    variantLabel: { en: "Format", zh: "剂型" },
    description: {
      en: "Flurbiprofen 8.75 mg lozenges for swollen, red and severely inflamed throats. Alcohol-free and sugar-free. Relieves pain from 1 minute, lasting up to 6 hours. For ages 12+.",
      zh: "专为红肿、发炎的喉咙痛症状设计的强效含片。适用于较严重的咽喉不适，提供更持久的缓解效果。",
    },
    needId: "throat",
    imageLabel: "SP",
    tags: {
      en: ["Flurbiprofen", "6-hour relief", "Inflamed throat"],
      zh: ["氟比洛芬", "6小时缓解效果", "咽喉炎症"],
    },
    url: "https://www.strepsils.com.au/products/strepsils-max-pro/",
    priority: 7,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["severe"],
    },
    variants: [
      {
        id: "max-pro",
        label: { en: "Max Pro", zh: "Max Pro" },
        imageId: "strepsils-max-pro",
        description: {
          en: "A stronger lozenge for swollen, red, and inflamed sore throat symptoms. It is suitable for more severe throat discomfort and provides longer-lasting relief.",
          zh: "专为红肿、发炎的喉咙痛症状设计的强效含片。适用于较严重的咽喉不适，提供更持久的缓解效果。",
        },
        activeIngredient: { en: "Flurbiprofen 8.75 mg", zh: "氟比洛芬 8.75毫克" },
        dosage: {
          en: [">12 years: 1 lozenge every 3–6 hours", "Maximum 5 lozenges daily"],
          zh: ["12岁以上：每3-6小时含服1片", "每日最多5片"],
        },
        keyBenefits: {
          en: [
            "Relieves pain from 1 minute",
            "Relief lasts up to 3 hours",
            "Anti-inflammatory and analgesic effect",
            "Alcohol-free",
          ],
          zh: ["1分钟内缓解喉咙痛", "药效持续长达3小时", "消炎镇痛作用", "无酒精配方"],
        },
        disclaimerPoints: {
          en: [
            "Strepsils Lozenges are suitable for adults & children above 12 years old.",
            "Remember young children can choke on lozenges.",
            "Keep out of the reach of children.",
            "Do not exceed the stated dose.",
            "Read the instructions carefully before use.",
          ],
          zh: [
            "Strepsils 含片适用于成人及12岁以上儿童。",
            "请注意幼童可能会被含服润喉糖咽到。",
            "请将含片放在儿童无法触及的地方。",
            "请勿超过规定剂量。",
            "使用前请仔细阅读说明。",
          ],
        },
      },
      {
        id: "max-pro-spray",
        label: { en: "Max Pro Spray", zh: "Max Pro 喷雾剂" },
        imageId: "strepsils-max-pro-spray",
        allowedAudiences: ["adult"],
        description: {
          en: "A targeted throat spray for adults with severe or inflamed sore throat symptoms. The fine mist helps deliver relief directly to the throat, making it convenient for use during the day or night.",
          zh: "专为患有严重或伴有炎症的喉咙痛症状的成人设计的咽喉喷雾。细腻的喷雾能将药效直接送达咽喉部位，无论日间还是夜间使用都十分便捷。",
        },
        activeIngredient: { en: "Flurbiprofen 8.75 mg", zh: "氟比洛芬 8.75毫克" },
        dosage: {
          en: [">18 years: 3 sprays every 3–6 hours", "Maximum 15 sprays daily"],
          zh: ["18岁以上成人：每3-6小时喷3次", "每日最多喷15次"],
        },
        keyBenefits: {
          en: [
            "Fine mist targets the throat directly",
            "Relieves pain from 1 minute",
            "Relief lasts up to 6 hours",
            "Alcohol-free",
            "Sugar-free",
          ],
          zh: [
            "细腻喷雾直达咽喉部位",
            "1分钟起效缓解疼痛",
            "药效持续长达6小时",
            "不含酒精",
            "无糖配方",
          ],
        },
        disclaimerPoints: {
          en: [
            "Strepsils Spray is suitable for those aged above 18 years old.",
            "Keep out of the reach of children.",
            "Do not exceed the stated dose.",
            "Read the instructions carefully before use.",
          ],
          zh: [
            "Strepsils 喷雾剂只适用于18岁以上的成人。",
            "请置放在儿童无法触及的地方。",
            "请勿超过规定剂量。",
            "使用前请仔细阅读说明。",
          ],
        },
      },
    ],
    activeIngredient: { en: ["Flurbiprofen 8.75 mg"], zh: ["氟比洛芬 8.75毫克"] },
    dosage: {
      en: ["≥12 years: 1 spray every 3–6 hrs", "≥18 years: 3 sprays every 3–6 hrs"],
      zh: ["12岁及以上：每3-6小时含服1片", "18岁及以上：每3-6小时喷3次"],
    },
    keyBenefits: {
      en: ["Pain relief from 1 min, lasts up to 6 hrs", "Alcohol-free & sugar-free"],
      zh: ["1分钟起效缓解疼痛，药效持续长达6小时", "无酒精且无糖"],
    },
  },

  {
    id: "strepsils-max-plus",
    brand: "Strepsils Max Plus",
    category: { en: "Sore throat relief — strong numbing", zh: "喉咙痛缓解 - 强效麻醉" },
    description: {
      en: "Lignocaine HCl lozenges with fast-acting local anaesthetic plus 2 antiseptics. Provides numbing relief from 1 minute, lasting up to 2 hours. For ages 12+.",
      zh: "含盐酸利多卡因的含片，配以速效局部麻醉剂及2种抗菌成分。1分钟内起效麻醉缓解，药效持续长达2小时。适合12岁以上人群。",
    },
    needId: "throat",
    imageLabel: "SX",
    tags: {
      en: ["Lignocaine", "Numbing", "Antiseptic"],
      zh: ["利多卡因", "麻醉", "抗菌"],
    },
    url: "https://www.strepsils.com.au/products/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["moderate", "severe"],
    },
    variants: [
      { id: "6s", label: { en: "6 lozenges", zh: "6粒含片" } },
      { id: "16s", label: { en: "16 lozenges", zh: "16粒含片" } },
    ],
    activeIngredient: {
      en: ["Lignocaine HCl 10 mg", "2 antiseptics"],
      zh: ["盐酸利多卡因 10毫克", "2种抗菌成分"],
    },
    dosage: {
      en: ["≥12 years: 1 lozenge every 2 hrs"],
      zh: ["12岁以上：每2小时含服1粒"],
    },
    keyBenefits: {
      en: [
        "Fast-acting local anaesthetic + 2 antiseptics",
        "Numbing relief from 1 min, lasts up to 2 hrs",
      ],
      zh: ["速效局部麻醉剂 + 2种抗菌成分", "1分钟起效麻醉缓解，药效持续长达2小时"],
    },
    disclaimerPoints: {
      en: [
        "Always read the label before use.",
        "Use only as directed.",
        "If sore throat is severe, persists for more than 3 days, or is accompanied by fever, consult your doctor.",
        "Not recommended for children under 12 years old.",
        "Do not exceed 8 lozenges per day.",
      ],
      zh: [
        "使用前请务必阅读标签。",
        "仅按指示使用。",
        "如喉咙痛严重、持续超过3天，或伴有发烧，请咨询医生。",
        "不建议12岁以下儿童使用。",
        "每日请勿超过8粒。",
      ],
    },
  },

  // ── CHEST — Strepsils Chesty Cough ────────────────────────────────────────
  {
    id: "strepsils-chesty-cough",
    brand: "Strepsils Chesty Cough",
    category: { en: "Chesty cough & mucus relief", zh: "缓解咳痰及化痰" },
    description: {
      en: "A lozenge for chesty cough with phlegm, suitable for users who need help loosening mucus and clearing the airways. It supports easier coughing by helping thin and loosen mucus.",
      zh: "一款适用于有痰咳嗽的含片，适用于需要帮助稀释和清除痰液、疏通气道人群。有助于减轻咳嗽，使痰液更易咳出。",
    },
    needId: "chest",
    imageLabel: "SC",
    tags: {
      en: ["Ambroxol", "Mucus relief", "Chesty cough"],
      zh: ["氨溴索", "缓解化痰", "化痰止咳"],
    },
    url: "https://www.strepsils.com.au/products/strepsils-chesty-cough/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild", "moderate"],
    },
    variants: [
      { id: "8s", label: { en: "8 lozenges", zh: "8粒含片" }, imageId: "strepsils-chesty-cough-8s" },
      { id: "24s", label: { en: "24 lozenges", zh: "24粒含片" }, imageId: "strepsils-chesty-cough-24s" },
    ],
    activeIngredient: { en: "Ambroxol Hydrochloride 15 mg", zh: "盐酸氨溴索 15毫克" },
    dosage: {
      en: [">12 years: Up to 2 lozenges per dose", "Maximum 6 lozenges daily"],
      zh: ["12岁以上的人群：每次最多2粒", "每日最多6粒"],
    },
    keyBenefits: {
      en: [
        "Suitable for cough with phlegm",
        "Helps loosen and thin mucus",
        "Helps clear the airways",
        "Eases coughing",
      ],
      zh: ["适用于伴有痰液的咳嗽", "有助于稀释黏液", "有助于疏通气道", "缓解咳嗽"],
    },
    disclaimerPoints: {
      en: [
        "Strepsils are suitable for adults & children above 12 years old.",
        "Remember young children can choke on lozenges. Keep out of the reach of children.",
        "Do not exceed the stated dose.",
        "Read the instructions carefully before use.",
      ],
      zh: [
        "Strepsils 适用于成人及12岁以上儿童。",
        "请注意幼童可能会被含服润喉糖咽到。请将含片放在儿童无法触及的地方。",
        "请勿超过规定剂量。",
        "使用前请仔细阅读说明。",
      ],
    },
  },

  // ── STOMACH — Gaviscon range ──────────────────────────────────────────────
  {
    id: "gaviscon-original",
    brand: "Gaviscon Original",
    category: { en: "Heartburn & indigestion — mild", zh: "胃灼热与消化不良——轻度" },
    description: {
      en: "A trusted relief option for occasional heartburn. Gaviscon Original works by forming a protective raft over the stomach contents, helping to prevent acid from rising into the esophagus while providing fast, soothing relief from discomfort. Ideal for occasional heartburn after meals.",
      zh: "一款值得信赖的胃灼热偶发缓解选择。Gaviscon Original通过在胃酸环境中形成一层保护膜，有效防止胃酸反流至食道，同时提供快速舒缓，帮助减轻胃部不适，特别适合餐后偶发性胃灼热。",
    },
    needId: "stomach",
    imageLabel: "GO",
    tags: {
      en: ["Sodium Alginate", "Natural seaweed", "Mild GERD"],
      zh: ["海藻酸钠", "天然海藻", "轻度胃食道反流"],
    },
    url: "https://www.gaviscon.com.au/products/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen", "child"],
      severities: ["mild"],
    },
    variants: [
      {
        id: "bottle-200ml",
        label: { en: "Bottle 200 ml", zh: "瓶装200毫升" },
        description: {
          en: "A trusted relief option for occasional heartburn. Gaviscon Original works by forming a protective raft over the stomach contents, helping to prevent acid from rising into the esophagus while providing fast, soothing relief from discomfort. Ideal for occasional heartburn after meals.",
          zh: "一款值得信赖的胃灼热偶发缓解选择。Gaviscon Original通过在胃酸环境中形成一层保护膜，有效防止胃酸反流至食道，同时提供快速舒缓，帮助减轻胃部不适，特别适合餐后偶发性胃灼热。",
        },
        imageId: "gaviscon-original-bottle-200ml",
      },
      {
        id: "sachet-5",
        label: { en: "Sachets × 5", zh: "5包（独立小袋）" },
        description: {
          en: "5 single-serve sachets — 10 ml each. Convenient for travel and work.",
          zh: "5个独立包装，每个10毫升。便于旅行和工作。",
        },
        imageId: "gaviscon-original-sachet-5",
      },
      {
        id: "sachet-24",
        label: { en: "Sachets × 24", zh: "24包（独立小袋）" },
        description: {
          en: "24 single-serve sachets — 10 ml each. Convenient for travel and work.",
          zh: "24个独立包装，每个10毫升。便于旅行和工作。",
        },
        imageId: "gaviscon-original-sachet-24",
      },
      {
        id: "tablet-16",
        label: { en: "Tablets × 16", zh: "16片装" },
        description: {
          en: "16 chewable tablets — 2 tablets up to 4× daily, ideal when liquid is inconvenient.",
          zh: "16片装咀嚼片 - 每次2片，每日最多4次；适合不便服用液体制剂时使用。",
        },
        imageId: "gaviscon-original-tablet-16",
        dosage: {
          en: [
            "Tablets: 2 tablets up to 4x daily",
            "Recommendation: 3 times after meals and once before sleep",
          ],
          zh: ["片剂：每次2片，每日最多4次", "建议用法：餐后3次及睡前1次"],
        },
      },
    ],
    activeIngredient: {
      en: "Sodium Alginate, Potassium Bicarbonate, Calcium Carbonate",
      zh: "海藻酸钠、碳酸氢钾、碳酸钙",
    },
    dosage: {
      en: [
        "Liquid bottle/sachet: 10 ml up to 4× daily",
        "Recommended: 3 times after meals and once before sleep",
      ],
      zh: ["用量（液体瓶装/独立小袋）：每次10毫升，每日最多4次。", "建议用法：餐后3次及睡前1次。"],
    },
    keyBenefits: {
      en: [
        "Recommended as first-line treatment for mild GERD",
        "Protection lasts up to 4 hours",
        "Made from natural seaweed",
      ],
      zh: ["被推荐为轻度胃食道反流的首选治疗", "护胃效果持续长达4小时", "含天然海藻成分"],
    },
    disclaimerPoints: {
      en: [
        "Always read the label before use.",
        "Use only as directed.",
        "If symptoms persist or worsen, or if you experience difficulty swallowing or persistent abdominal pain, consult your doctor.",
        "Consult your doctor before use if you are pregnant, breastfeeding, or have kidney disease.",
        "Do not exceed the stated dose. Take after meals and at bedtime.",
      ],
      zh: [
        "使用前请务必阅读标签。",
        "仅按指示使用。",
        "如果症状持续或恶化，或出现吞咽困难或持续性腹痛，请咨询医生。",
        "如果您正在怀孕、哺乳，或患有肾脏疾病，使用前请咨询医生。",
        "请勿超过规定剂量。饭后和睡前服用。",
      ],
    },
  },
  {
    id: "gaviscon-double-action",
    brand: "Gaviscon Double Action",
    category: { en: "Heartburn & indigestion — moderate", zh: "胃灼热与消化不良——中度" },
    description: {
      en: "A dual-action relief option for heartburn and indigestion. Gaviscon Double Action not only forms a protective raft to help block acid reflux, but also helps neutralize excess stomach acid for fast and effective symptom relief. It is designed for consumers experiencing both heartburn and indigestion, providing comprehensive relief in one solution.",
      zh: "一款针对胃灼热和消化不良的双重功效缓解配方。Gaviscon Double Action 不仅能形成保护性屏障，帮助阻挡胃酸反流，同时也有助于中和过多胃酸，从而快速有效地缓解症状。适合同时出现胃灼热和消化不良的人群，提供全面的缓解方案。",
    },
    needId: "stomach",
    imageLabel: "GD",
    tags: {
      en: ["Double action", "Sugar-free", "Gluten-free"],
      zh: ["双重功效", "无糖", "无麸质"],
    },
    url: "https://www.gaviscon.com.au/products/gaviscon-double-action/",
    priority: 6,
    suitableFor: {
      audiences: ["adult", "teen", "child"],
      severities: ["moderate"],
    },
    variants: [
      {
        id: "bottle-300ml",
        label: { en: "Bottle 300 ml", zh: "瓶装300毫升" },
        description: {
          en: "A dual-action relief option for heartburn and indigestion. Gaviscon Double Action not only forms a protective raft to help block acid reflux, but also helps neutralize excess stomach acid for fast and effective symptom relief. It is designed for consumers experiencing both heartburn and indigestion, providing comprehensive relief in one solution.",
          zh: "一款针对胃灼热和消化不良的双重功效缓解配方。Gaviscon Double Action 不仅能形成保护性屏障，帮助阻挡胃酸反流，同时也有助于中和过多胃酸，从而快速有效地缓解症状。适合同时出现胃灼热和消化不良的人群，提供全面的缓解方案。",
        },
        imageId: "gaviscon-double-action-bottle-300ml",
      },
      {
        id: "bottle-150ml",
        label: { en: "Bottle 150 ml", zh: "瓶装150毫升" },
        imageId: "gaviscon-double-action-bottle-150ml",
      },
      {
        id: "sachet-5",
        label: { en: "Sachets × 5", zh: "5包（独立小袋）" },
        imageId: "gaviscon-double-action-sachet-5",
      },
      {
        id: "sachet-24",
        label: { en: "Sachets × 24", zh: "24包（独立小袋）" },
        imageId: "gaviscon-double-action-sachet-24",
      },
      {
        id: "tablet-16",
        label: { en: "Tablets × 16", zh: "16片装" },
        imageId: "gaviscon-double-action-tablet-16",
        dosage: {
          en: [
            "Tablets: 2 tablets up to 4x daily",
            "Recommendation: 3 times after meals and once before sleep",
          ],
          zh: ["片剂：每次2片，每日最多4次", "建议用法：餐后3次，睡前1次。"],
        },
      },
    ],
    activeIngredient: {
      en: "Sodium Alginate, Potassium Bicarbonate, Calcium Carbonate",
      zh: "海藻酸钠、碳酸氢钾、碳酸钙",
    },
    dosage: {
      en: [
        "Liquid bottle/sachet: 10 ml up to 4× daily",
        "Recommended: 3 times after meals and once before sleep",
      ],
      zh: ["用量（液体瓶装/独立小袋）：每次10毫升，每日最多4次。", "建议用法：餐后3次，睡前1次。"],
    },
    keyBenefits: {
      en: [
        "Soothes within 3 minutes",
        "Relief lasts up to 4 hours",
        "Recommended for mild-to-moderate GERD",
        "Can be used as add-on rescue therapy",
        "High calcium carbonate content",
        "Effective relief for moderate to severe indigestion",
        "Sugar-free",
        "Gluten-free",
        "Made from natural seaweed",
      ],
      zh: [
        "3分钟内舒缓不适",
        "缓解效果可持续长达4小时",
        "适用于轻度至中度胃食管反流症状",
        "可作为额外的快速缓解辅助方案使用",
        "含较高含量的碳酸钙",
        "有效缓解中度至重度消化不良",
        "无糖",
        "无麸质",
        "由天然海藻制成",
      ],
    },
    disclaimerPoints: {
      en: [
        "Always read the label before use.",
        "Use only as directed.",
        "If symptoms persist or worsen, or if you experience difficulty swallowing, consult your doctor.",
        "Consult your doctor before use if you are pregnant, breastfeeding, or have kidney disease.",
        "Do not exceed the stated dose. Take after meals and at bedtime.",
      ],
      zh: [
        "使用前请务必阅读标签。",
        "仅按指示使用。",
        "如果症状持续或恶化，或出现吞咽困难或持续性腹痛，请咨询医生。",
        "如果您正在怀孕、哺乳，或患有肾脏疾病，使用前请咨询医生。",
        "请勿超过规定剂量。饭后和睡前服用。",
      ],
    },
  },
  {
    id: "gaviscon-advance",
    brand: "Gaviscon Advance",
    category: {
      en: "Heartburn & indigestion — moderate to severe",
      zh: "胃灼热与消化不良 - 中度至重度",
    },
    description: {
      en: "An advanced reflux relief option for more severe and persistent stomach discomfort. It has the highest alginate concentration in the Gaviscon range and is positioned for stronger, longer-lasting protection against reflux symptoms. The advanced formula forms a robust protective barrier to help keep stomach contents down, making it suitable for those seeking enhanced reflux management.",
      zh: "它是 Gaviscon 系列中海藻酸盐浓度最高的产品，一款针对较严重及持续性胃部不适的进阶型反流缓解产品。旨在提供更强效、更持久的反流症状防护。其先进配方能形成坚固的保护层，有效阻挡胃内容物反流，非常适合寻求更强效反流控制的人群。",
    },
    needId: "stomach",
    imageLabel: "GA",
    tags: {
      en: ["Advance formula", "Pregnancy safe", "Low sodium"],
      zh: ["进阶配方", "孕期安全适用", "低钠"],
    },
    url: "https://www.gaviscon.com.au/products/gaviscon-advance/",
    priority: 7,
    suitableFor: {
      audiences: ["adult", "teen", "child"],
      severities: ["severe"],
    },
    variants: [
      {
        id: "bottle-150ml",
        label: { en: "Bottle 150 ml", zh: "瓶装 150 毫升" },
        imageId: "gaviscon-advance-bottle-150ml",
      },
      {
        id: "sachet-24",
        label: { en: "Sachets × 24", zh: "独立小袋装 x 24 包" },
        imageId: "gaviscon-advance-sachet-24",
      },
    ],
    activeIngredient: {
      en: "Sodium Alginate, Potassium Bicarbonate, Calcium Carbonate",
      zh: "海藻酸钠、碳酸氢钾、碳酸钙",
    },
    dosage: {
      en: [
        "Liquid bottle/sachet: 10 ml up to 4× daily",
        "Recommended: 3 times after meals and once before sleep",
        "Maximum 40 ml/day",
      ],
      zh: [
        "瓶装/小袋装液体：每次 10 毫升，每日最多 4 次",
        "建议用法：餐后 3 次，睡前 1 次",
        "每日最高用量 40 毫升",
      ],
    },
    keyBenefits: {
      en: [
        "Can be used as add-on rescue therapy",
        "Sugar-free",
        "Gluten-free",
        "Soothes within 3 minutes",
        "Relief lasts up to 4 hours",
      ],
      zh: ["可用作辅助性急救疗法", "无糖", "无麸质", "3分钟内舒缓", "缓解持续长达4小时"],
    },
    disclaimerPoints: {
      en: [
        "Always read the label before use.",
        "Use only as directed.",
        "If symptoms persist or worsen, or if you experience difficulty swallowing or persistent abdominal pain, consult your doctor.",
        "Suitable during pregnancy and breastfeeding, but consult your doctor if unsure.",
        "Do not exceed the stated dose. Take after meals and at bedtime.",
        "Contains potassium — consult your doctor if you are on a potassium-restricted diet.",
      ],
      zh: [
        "使用前请务必阅读标签。",
        "请按指示使用。",
        "如果症状持续或恶化，或出现吞咽困难或持续性腹痛，请咨询医生。",
        "孕期及哺乳期均可使用，但如有疑问，请咨询医生。",
        "请勿超过规定剂量。请于餐后或睡前服用。",
        "本品含有钾；若您需进行限钾饮食，请咨询医生。",
      ],
    },
  },

  // ── HEART — Cardiprin ─────────────────────────────────────────────────────
  {
    id: "cardiprin",
    brand: "Cardiprin 100",
    category: { en: "Cardiovascular risk prevention", zh: "心血管风险预防" },
    description: {
      en: "Aspirin 100 mg daily tablet that reduces platelet stickiness to help prevent blood clots, lowering the risk of stroke and heart attack. Dissolves on the tongue for rapid absorption. Must be taken under medical supervision — adults only, not for children under 16.",
      zh: "每日服用 100 毫克阿司匹林片剂，可降低血小板粘性，有助于预防血栓形成，从而降低中风和心脏病发作的风险。可在舌面上溶解以便快速吸收。必须在医生指导下服用——仅限成人，不适用于 16 岁以下儿童。",
    },
    needId: "heart",
    imageLabel: "CP",
    tags: {
      en: ["Aspirin 100mg", "Daily prevention", "Adults only"],
      zh: ["阿司匹林100毫克", "每日预防", "仅供成人"],
    },
    url: "https://www.cardiprin.com.au/",
    priority: 5,
    suitableFor: {
      audiences: ["adult"],
      severities: ["mild", "moderate"],
    },
    variants: [{ id: "standard", label: { en: "90 Tablets", zh: "90片" } }],
    activeIngredient: {
      en: ["Aspirin 100 mg", "Glycine 45 mg"],
      zh: ["阿司匹林 100毫克", "甘氨酸 45毫克"],
    },
    dosage: {
      en: [
        "Adults: 1 tablet daily",
        "Not for children/teenagers",
        "Take daily as prescribed (calendar pack helps adherence)",
        "Can dissolve on tongue or swallow whole with water",
        "Use only under medical supervision; duration per doctor’s advice & regular review",
      ],
      zh: [
        "成人：每日 1 片",
        "不适用于儿童/青少年",
        "按医嘱每日服用（日历包装有助于坚持用药）",
        "可在舌面上溶解，也可整片用水吞服",
        "仅在医生指导下使用；服用时长遵医嘱并定期复查",
      ],
    },
    keyBenefits: {
      en: [
        "Reduces platelet stickiness, helping prevent blood clots and vessel blockages",
        "Contains 100 mg low-dose aspirin; helps lower risk of stroke & heart attack",
        "Designed to dissolve on tongue for rapid absorption and effectiveness",
      ],
      zh: [
        "降低血小板粘性，有助于预防血栓和血管阻塞",
        "含 100 毫克低剂量阿司匹林；有助于降低中风和心脏病发作风险",
        "专为舌面溶解设计，以实现快速吸收和起效。",
      ],
    },
    disclaimerPoints: {
      en: [
        "Always read the label before use.",
        "Your doctor will advise you on how long you should continue to take Cardiprin 100. Make sure you see your doctor at regular intervals and discuss any questions that you may have with him or her. Cardiprin 100 should only be taken under medical supervision.",
        "Cardiprin 100 should not be taken by people who are allergic to salicylates or taking regular anticoagulant therapy. Precautions should be observed in patients with asthma or peptic ulcer.",
        "Not recommended for children and teenagers below 16 years old.",
        "If you have a history of heartburn or ulcers, you may find that Cardiprin 100 affects your symptoms. If this occurs, consult your doctor.",
      ],
      zh: [
        "使用前请务必阅读标签。",
        "请遵照医生指示服用 Cardiprin 100，并定期复诊，如有任何疑问，请咨询医生。Cardiprin 100 应在医生指导下使用。",
        "对水杨酸盐过敏者，或正在定期接受抗凝治疗者，不应服用 Cardiprin 100。哮喘或消化性溃疡患者应谨慎使用。",
        "不建议16岁以下儿童及青少年使用。",
        "若您有胃灼热或溃疡病史，Cardiprin 100 可能影响您的症状。如有这种情况，请咨询医生。",
      ],
    },
    disclaimer: {
      en: "The product in our range is specifically recommended by healthcare professionals for the prevention of heart symptoms. It does not provide immediate relief to these symptoms in an emergency. Always consult a pharmacist or doctor before use.",
      zh: "此系列是由医疗专业人士专门推荐用于预防心脏相关症状的产品。它无法在紧急情况下立即缓解此类症状。使用前请务必咨询药剂师或医生。",
    },
  },

  // ── MOUTH — Bonjela ───────────────────────────────────────────────────────
  {
    id: "bonjela-gel",
    brand: "Bonjela Gel",
    category: "Fast-acting mouth ulcer & teething pain relief",
    description:
      "Pain relieving gel which also reduces inflammation and helps fight infection in teething, mouth ulcers, denture sore spots and cold sores. Clinically shown to aid the healing and relieve the pain of mouth ulcers caused by braces and dentures. For topical oral use — not for children under 4 months old.",
    needId: "mouth",
    imageLabel: "BJ",
    tags: ["Fast Acting", "Sugar-Free", "Mouth Ulcer"],
    url: "https://www.bonjela.com.au/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen", "child"],
      severities: ["mild", "moderate"],
    },
    variants: [{ id: "standard", label: "15 g Tube" }],
    activeIngredient: [
      "Choline salicylate 8.714% w/w",
      "Cetalkonium chloride 0.010% w/w",
      "Also contains ethanol (33.45% w/w), glycerol, menthol, hypromellose 4500, star anise oil, sodium saccharin and water",
    ],
    dosage: [
      "Adults: massage approximately 1 cm of gel onto the sore area",
      "Children from 4 months: massage approximately 0.5 cm onto the sore area",
      "May be repeated after 3 hours; maximum 6 doses in 24 hours",
      "Denture sores: apply to the sore area and leave at least 30 minutes before reinserting dentures",
      "Do not apply directly to the dentures",
      "Not suitable for babies under 4 months",
    ],
    keyBenefits: [
      "Fast-acting relief for mouth ulcers and teething pain",
      "Soothes sore spots caused by braces and dentures",
      "Sugar-free formula",
      "Contains choline salicylate for pain relief",
      "Contains cetalkonium chloride, an antiseptic agent",
      "Easy topical application directly to affected areas",
    ],
    disclaimerPoints: [
      "Always read the label before use. Do not exceed the stated dose — in case of overdose, seek medical advice.",
      "Bonjela should not be used by children under 4 months, or by patients with a history of salicylate sensitivity, active peptic ulcer or haemophilia.",
      "Preparations containing aspirin should not be given to young children during treatment with Bonjela, to avoid any risk of excessive salicylate levels.",
      "Salicylates may precipitate bronchospasm and induce attacks of asthma in susceptible subjects.",
      "Do not use this product if you are taking medicine for blood clots or gout, or if you have a stomach ulcer. If you are pregnant, consult your doctor before using this product.",
      "Ethanol may be unsuitable for some patients, particularly those with epilepsy or brain damage, or who cannot tolerate alcohol.",
      "Glycerol can be harmful in high doses and may cause headache, stomach upset and diarrhoea. If symptoms persist for more than 7 days or you have a stomach disorder, consult your pharmacist, doctor or dentist.",
    ],
    disclaimer:
      "The product in our range is a fast acting gel for teething and mouth ulcers. It does not provide immediate relief to these symptoms in an emergency. Always consult a pharmacist or doctor before use.",
  },

  // ── BOWEL — Senokot ───────────────────────────────────────────────────────
  {
    id: "senokot-tablets",
    brand: "Senokot Tablets",
    category: "Relief of occasional constipation",
    description:
      "Stimulant laxative containing natural senna that provides relief from occasional constipation by stimulating bowel movement and helping restore regularity. Not recommended for children 18 years old and under.",
    needId: "bowel",
    imageLabel: "SK",
    tags: ["Natural Senna", "Constipation Relief", "Adults only"],
    url: "https://www.senokot.com.au/",
    priority: 5,
    suitableFor: {
      audiences: ["adult"],
      severities: ["mild", "moderate"],
    },
    variants: [{ id: "standard", label: "60 Tablets" }],
    activeIngredient: [
      "Standardised senna equivalent to 7.5 mg total sennosides per tablet",
      "In a base containing lactose",
    ],
    dosage: [
      "Adults, the elderly and children over 18 years: swallow one to two tablets at night",
      "Children 18 years and under: not recommended",
      "New users should start with the lowest dose and increase to the maximum dose if necessary",
      "Once regularity has been regained the dose should be reduced and can usually be stopped",
      "Senokot usually acts within 8–12 hours; if there is no bowel movement within three days of use, consult your doctor",
      "Normally sufficient to take two to three times a week. Use for more than 1 week requires medical supervision",
    ],
    keyBenefits: [
      "Effective relief of occasional constipation",
      "Contains natural senna (plant-derived active ingredient)",
      "Works in 8–12 hours",
      "Gentle on the bowel",
    ],
    disclaimerPoints: [
      "Always read the label before use.",
      "Do not give to children 18 years old and under.",
      "Tell a doctor or pharmacist if symptoms worsen or persist during use, if there is no bowel movement within 3 days of use, or if you need to take laxatives every day or abdominal pain persists.",
      "If you miss a dose, take your next dose at the usual time. Do not take two doses at the same time to make up for a missed dose. Always consult your doctor if you need further advice.",
      "Do not exceed the stated dose. If you accidentally take too many tablets, consult your doctor and take this leaflet with you.",
      "Consult your doctor or pharmacist for advice if you are taking or have recently taken any other medicines, including medicines obtained without a prescription.",
    ],
    disclaimer:
      "The product in our range is specifically for relief of occasional constipation. It does not provide immediate relief to these symptoms in an emergency. Always consult a pharmacist or doctor before use.",
  },
];
