import type {
  AudienceId,
  ChoiceOption,
  SymsptomType,
  PreferenceId,
  ProductItem,
  SeverityId,
  BodyPartId,
} from "@/types/productFinder";

// export const needOptions: NeedOption[] = [
//   {
//     id: "sore-throat",
//     label: "Sore throat",
//     description: "Relieve throat irritation and discomfort.",
//     icon: "🗣️"
//   },
//   {
//     id: "pain-fever",
//     label: "Pain & fever",
//     description: "Support for everyday pain or fever needs.",
//     icon: "🌡️"
//   },
//   {
//     id: "cough-mucus",
//     label: "Cough & mucus",
//     description: "Help users explore cough and chest mucus care.",
//     icon: "🫁"
//   },
//   {
//     id: "heartburn",
//     label: "Heartburn & indigestion",
//     description: "Guidance for reflux, acidity, and indigestion needs.",
//     icon: "🔥"
//   },
//   {
//     id: "personal-hygiene",
//     label: "Personal hygiene",
//     description: "Everyday protection for hands and body.",
//     icon: "🛡️"
//   },
//   {
//     id: "home-cleaning",
//     label: "Home cleaning",
//     description: "Cleaning support for surfaces, dishes, and laundry.",
//     icon: "🏠"
//   }
// ];
export const bodyParts: ChoiceOption<BodyPartId>[] = [
  {
    id: "head",
    label: "Head",
    description: "Head-related symptoms.",
    icon: "/head.png",
  },
  {
    id: "throat",
    label: "Throat",
    description: "Throat-related symptoms.",
    icon: "/throat.png",
  },
  {
    id: "heart",
    label: "Heart",
    description: "Heart-related symptoms.",
    icon: "/heartQ.png",
  },
  {
    id: "chest",
    label: "Chest",
    description: "Chest-related symptoms.",
    icon: "/chest.png",
  },
  {
    id: "stomach",
    label: "Stomach",
    description: "Stomach-related symptoms.",
    icon: "/stomach.png",
  },
];
export const bodySymptoms: SymsptomType[] = [
  {
    id: "head",
    symptom: ["Headache", "Migraine", "Fever", "Dental Pain", "Menstrual Pain"],
    icon: "🧠",
  },
  {
    id: "throat",
    symptom: [
      "Sore Throat",
      "Cough",
      "Hoarseness",
      "Throat Irritation",
      "Difficulty Swallowing",
    ],
    icon: "️",
  },
  {
    id: "heart",
    symptom: [
      "Heart Attack",
      "Chest Pain",
      "Shortness of Breath",
      "Palpitations",
      "Irregular Heartbeat",
    ],
    icon: "❤️",
  },
  {
    id: "chest",
    symptom: [
      "Chest Pain",
      "Shortness of Breath",
      "Cough",
      "Chest Congestion",
      "Chest Tightness",
    ],
    icon: "🫁",
  },
  {
    id: "stomach",
    symptom: ["Stomach Ache", "Indigestion", "Nausea", "Bloating", "Gas"],
    icon: "🔥",
  },
];
export const audienceOptions: ChoiceOption<AudienceId>[] = [
  {
    id: "adult",
    label: "Adult",
    description: "18 years old and above.",
    icon: "/adult.png",
  },
  {
    id: "teen",
    label: "Teen",
    description: "13–17 years old.",
    icon: "/teen.png",
  },
  {
    id: "child",
    label: "Child",
    description: "Under 13 years old.",
    icon: "/child.png",
  },
];

export const severityOptions: ChoiceOption<SeverityId>[] = [
  {
    id: "mild",
    label: "Mild",
    description:
      "Occasional discomfort",
    icon: "/mild.png",
  },
  {
    id: "moderate",
    label: "Moderate",
    description:
      "Frequent discomfort",
    icon: "/moderate.png",
  },
  {
    id: "severe",
    label: "Severe",
    description:
      "Constant discomfort",
    icon: "/severe.png",
  },
];

export const preferenceOptions: ChoiceOption<PreferenceId>[] = [
  {
    id: "fast-relief",
    label: "Fast relief",
    description: "Prioritise speed.",
    icon: "⚡",
  },
  {
    id: "long-lasting",
    label: "Long lasting",
    description: "Prioritise duration.",
    icon: "⏱️",
  },
  {
    id: "gentle",
    label: "Gentle",
    description: "Suitable for sensitive needs.",
    icon: "🌿",
  },
  {
    id: "easy-to-use",
    label: "Easy to use",
    description: "Simple formats or routines.",
    icon: "✅",
  },
  {
    id: "non-drowsy",
    label: "Non-drowsy",
    description: "Avoid sleepy-feeling options.",
    icon: "☀️",
  },
  {
    id: "trusted-brand",
    label: "Trusted brand",
    description: "Known household brands.",
    icon: "⭐",
  },
];

export const productItems: ProductItem[] = [
  // ── HEAD — Nurofen range ───────────────────────────────────────────────────
  // priority guide: 5=baseline, higher=preferred when tied in same tier
  {
    id: "nurofen-regular",
    brand: "Nurofen Regular",
    category: "Pain & fever relief",
    description:
      "Standard ibuprofen 200 mg tablets that relieve headaches, migraines, dental pain, fever and inflammation.",
    needId: "head",
    imageLabel: "NR",
    tags: ["Ibuprofen 200mg", "Pain relief", "Fever"],
    url: "https://www.nurofen.com.au/products/nurofen-tablets/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild", "moderate"],
    },
    variants: [
      { id: "12s", label: "12 tablets", subLabel: "Ibuprofen 200 mg" },
      { id: "24s", label: "24 tablets", subLabel: "Ibuprofen 200 mg" },
    ],
    activeIngredient: "Ibuprofen 200 mg",
    dosage: "1–2 tablets every 4–6 hours. Max 6 tablets/day.",
    keyBenefits: ["Relieves headaches & migraines", "Reduces fever", "Anti-inflammatory"],
  },
  {
    id: "nurofen-express",
    brand: "Nurofen Express",
    category: "Fast-acting pain & fever relief",
    description:
      "Ibuprofen lysine 342 mg caplets — targets pain in 10 minutes and relieves fever and inflammation.",
    needId: "head",
    imageLabel: "NE",
    tags: ["Ibuprofen Lysine", "10-min relief", "Fast acting"],
    url: "https://www.nurofen.com.au/products/nurofen-express/",
    priority: 6,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["moderate", "severe"],
    },
    activeIngredient: "Ibuprofen Lysine 342 mg",
    dosage: "1–2 caplets every 4–6 hours. Max 6 caplets/day.",
    keyBenefits: ["Targets pain in 10 minutes", "Relieves fever", "Fast-acting formula"],
  },
  {
    id: "nurofen-nuromol",
    brand: "Nurofen Nuromol",
    category: "Dual-action pain relief",
    description:
      "Combines ibuprofen 200 mg and paracetamol 500 mg for double-action relief lasting up to 8 hours.",
    needId: "head",
    imageLabel: "NM",
    tags: ["Dual action", "8-hour relief", "Ibuprofen + Paracetamol"],
    url: "https://www.nurofen.com.au/products/nuromol/",
    priority: 7,
    suitableFor: {
      audiences: ["adult"],
      severities: ["moderate", "severe"],
    },
    activeIngredient: "Ibuprofen 200 mg + Paracetamol 500 mg",
    dosage: "1–2 tablets every 6–8 hours. Max 3 doses/day.",
    keyBenefits: ["Dual-action pain relief", "Up to 8 hours relief", "Ibuprofen + Paracetamol"],
  },
  {
    id: "nurofen-children",
    brand: "Nurofen for Children",
    category: "Children's pain & fever relief",
    description:
      "Ibuprofen 100 mg/5 ml oral suspension for children aged 6 months to 12 years. Relieves fever, pain and inflammation.",
    needId: "head",
    imageLabel: "NC",
    tags: ["Children 6mo–12yr", "Suspension", "Ibuprofen"],
    url: "https://www.nurofen.com.au/products/nurofen-for-children/",
    priority: 8,
    suitableFor: {
      audiences: ["child"],
      severities: ["mild", "moderate"],
    },
    activeIngredient: "Ibuprofen 100 mg / 5 ml",
    dosage: "Dose by weight every 6–8 hours. Max 3 doses/day.",
    keyBenefits: ["Suitable for ages 6 months–12 years", "Relieves fever & pain", "Oral suspension"],
  },

  // ── THROAT — Strepsils range ───────────────────────────────────────────────
  {
    id: "strepsils-original",
    brand: "Strepsils",
    category: "Sore throat relief — mild",
    description:
      "Antibacterial and antiviral lozenges that soothe a dry, scratchy sore throat and relieve pain within 5 minutes, lasting up to 2 hours. Suitable for ages 6+.",
    needId: "throat",
    imageLabel: "SO",
    tags: ["Lozenges", "Antibacterial", "Ages 6+"],
    url: "https://www.strepsils.com.au/products/",
    priority: 4,
    suitableFor: {
      audiences: ["adult", "teen", "child"],
      severities: ["mild"],
    },
    variants: [
      {
        id: "6-pack",
        label: "6 Pack",
        subLabel: "Soothing classic — 24 lozenges",
        description:
          "Honey-flavoured lozenges that soothe and moisturise a dry, scratchy throat with antibacterial action.",
      },
      {
        id: "24-pack",
        label: "24 Pack",
        subLabel: "With added Vitamin C — 24 lozenges",
        description:
          "Orange-flavoured lozenges with added Vitamin C to soothe a dry, scratchy throat.",
      },
    ],
    activeIngredient: "2,4-Dichlorobenzyl alcohol 1.2 mg + Amylmetacresol 0.6 mg",
    dosage: "1 lozenge every 2–3 hours. Max 8 lozenges/day.",
    keyBenefits: ["Antibacterial & antiviral", "Soothes in 5 minutes", "Suitable for ages 6+"],
  },
  {
    id: "strepsils-max-triple",
    brand: "Strepsils Max Triple Action",
    category: "Sore throat relief — moderate",
    description:
      "Hexylrescorcinol 24 mg lozenges with anaesthetic, antiseptic and anti-inflammatory action for painful sore throats. Relieves pain from 1 minute, lasting up to 2 hours. Suitable for ages 6+.",
    needId: "throat",
    imageLabel: "SM",
    tags: ["Hexylrescorcinol", "Triple action", "Painful throat"],
    url: "https://www.strepsils.com.au/products/strepsils-max/",
    priority: 6,
    suitableFor: {
      audiences: ["adult", "teen", "child"],
      severities: ["moderate"],
    },
    variants: [
      { id: "6s", label: "6 lozenges", subLabel: "Travel / trial pack" },
      { id: "24s", label: "24 lozenges", subLabel: "Standard pack" },
    ],
    activeIngredient: "Hexylrescorcinol 24 mg",
    dosage: "1 lozenge every 2–3 hours. Max 8 lozenges/day.",
    keyBenefits: ["Triple action relief", "Anaesthetic + antiseptic + anti-inflammatory", "Relieves from 1 minute"],
  },
  {
    id: "strepsils-max-pro",
    brand: "Strepsils Max Pro",
    category: "Sore throat relief — severe",
    description:
      "Flurbiprofen 8.75 mg lozenges for swollen, red and severely inflamed throats. Alcohol-free and sugar-free. Relieves pain from 1 minute, lasting up to 6 hours. For ages 12+.",
    needId: "throat",
    imageLabel: "SP",
    tags: ["Flurbiprofen", "6-hour relief", "Inflamed throat"],
    url: "https://www.strepsils.com.au/products/strepsils-max-pro/",
    priority: 7,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["severe"],
    },
    variants: [{ id: "16s", label: "16 lozenges", subLabel: "Standard pack" }],
    activeIngredient: "Flurbiprofen 8.75 mg",
    dosage: "1 lozenge every 3–6 hours. Max 5 lozenges/day.",
    keyBenefits: ["Up to 6 hours relief", "Reduces throat inflammation", "Alcohol-free & sugar-free"],
  },
  {
    id: "strepsils-max-pro-spray",
    brand: "Strepsils Max Pro Spray",
    category: "Sore throat spray — severe",
    description:
      "Flurbiprofen 8.75 mg/10 ml fine mist spray for severely inflamed throats. Delivers targeted relief especially useful in the morning or at night. Alcohol-free and sugar-free. Adults 18+ only.",
    needId: "throat",
    imageLabel: "SS",
    tags: ["Spray", "Flurbiprofen", "Adults 18+"],
    url: "https://www.strepsils.com.au/products/strepsils-max-pro-spray/",
    priority: 8,
    suitableFor: {
      audiences: ["adult"],
      severities: ["severe"],
    },
    activeIngredient: "Flurbiprofen 8.75 mg / 10 ml",
    dosage: "2 sprays every 3–6 hours. Max 5 doses/day.",
    keyBenefits: ["Fast targeted spray delivery", "Up to 6 hours relief", "Alcohol-free & sugar-free"],
  },
  {
    id: "strepsils-max-plus",
    brand: "Strepsils Max Plus",
    category: "Sore throat relief — strong numbing",
    description:
      "Lignocaine HCl lozenges with fast-acting local anaesthetic plus 2 antiseptics. Provides numbing relief from 1 minute, lasting up to 2 hours. For ages 12+.",
    needId: "throat",
    imageLabel: "SX",
    tags: ["Lignocaine", "Numbing", "Antiseptic"],
    url: "https://www.strepsils.com.au/products/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["moderate", "severe"],
    },
    variants: [
      { id: "6s", label: "6 lozenges", subLabel: "Trial pack" },
      { id: "16s", label: "16 lozenges", subLabel: "Standard pack" },
    ],
    activeIngredient: "Lignocaine HCl 10 mg + 2 antiseptics",
    dosage: "1 lozenge every 2–3 hours. Max 8 lozenges/day.",
    keyBenefits: ["Fast-acting local anaesthetic", "Numbing relief from 1 minute", "Dual antiseptic action"],
  },

  // ── CHEST — Strepsils Chesty Cough ────────────────────────────────────────
  {
    id: "strepsils-chesty-cough",
    brand: "Strepsils Chesty Cough",
    category: "Chesty cough & mucus relief",
    description:
      "Ambroxol HCl 15 mg lozenges that loosen and thin phlegm, clear the airways and ease chesty coughing. Suitable for ages 12+.",
    needId: "chest",
    imageLabel: "SC",
    tags: ["Ambroxol", "Mucus relief", "Chesty cough"],
    url: "https://www.strepsils.com.au/products/strepsils-chesty-cough/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild", "moderate"],
    },
    variants: [
      { id: "8s", label: "8 lozenges", subLabel: "Trial pack" },
      { id: "24s", label: "24 lozenges", subLabel: "Standard pack" },
    ],
    activeIngredient: "Ambroxol HCl 15 mg",
    dosage: "1 lozenge 3× daily. Max 3 lozenges/day.",
    keyBenefits: ["Loosens & thins phlegm", "Clears airways", "Eases chesty cough"],
  },

  // ── STOMACH — Gaviscon range ──────────────────────────────────────────────
  {
    id: "gaviscon-original",
    brand: "Gaviscon Original",
    category: "Heartburn & indigestion — mild",
    description:
      "Sodium alginate antacid — first-line treatment for mild GERD/heartburn. Forms a protective raft over stomach acid. Soothes within 3 minutes, lasts up to 4 hours.",
    needId: "stomach",
    imageLabel: "GO",
    tags: ["Sodium Alginate", "Natural seaweed", "Mild GERD"],
    url: "https://www.gaviscon.com.au/products/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild"],
    },
    variants: [
      {
        id: "bottle-200ml",
        label: "Bottle 200 ml",
        subLabel: "Peppermint liquid",
        description:
          "200 ml peppermint liquid bottle. 10 ml after meals, up to 4× daily.",
      },
      {
        id: "sachet-24",
        label: "Sachets × 24",
        subLabel: "On-the-go single-serve",
        description:
          "24 single-serve sachets — 10 ml each. Convenient for travel and work.",
      },
      {
        id: "tablet-16",
        label: "Tablets × 16",
        subLabel: "Chewable tablets",
        description:
          "16 chewable tablets — 2 tablets up to 4× daily, ideal when liquid is inconvenient.",
      },
    ],
    activeIngredient: "Sodium Alginate 500 mg + Sodium Bicarbonate 267 mg",
    dosage: "10–20 ml after meals & at bedtime. Max 4× daily.",
    keyBenefits: ["Forms protective raft over stomach acid", "Soothes in 3 minutes", "Lasts up to 4 hours"],
  },
  {
    id: "gaviscon-double-action",
    brand: "Gaviscon Double Action",
    category: "Heartburn & indigestion — moderate",
    description:
      "Sodium alginate + calcium carbonate formula for mild-to-moderate GERD. Highest calcium carbonate content in the Gaviscon range. Sugar-free and gluten-free.",
    needId: "stomach",
    imageLabel: "GD",
    tags: ["Double action", "Sugar-free", "Gluten-free"],
    url: "https://www.gaviscon.com.au/products/gaviscon-double-action/",
    priority: 6,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["moderate"],
    },
    variants: [
      {
        id: "bottle-300ml",
        label: "Bottle 300 ml",
        subLabel: "Family size",
        description:
          "300 ml liquid bottle for regular at-home use. 10 ml after meals, up to 4× daily.",
      },
      {
        id: "bottle-150ml",
        label: "Bottle 150 ml",
        subLabel: "Compact size",
        description: "150 ml liquid bottle — compact and travel-friendly.",
      },
      {
        id: "sachet-24",
        label: "Sachets × 24",
        subLabel: "On-the-go single-serve",
        description:
          "24 single-serve 10 ml sachets — convenient and portion-controlled.",
      },
      {
        id: "tablet-16",
        label: "Tablets × 16",
        subLabel: "Chewable tablets",
        description: "16 chewable tablets — 2 tablets up to 4× daily.",
      },
    ],
    activeIngredient: "Sodium Alginate 500 mg + Calcium Carbonate 325 mg",
    dosage: "10–20 ml after meals & at bedtime. Max 4× daily.",
    keyBenefits: ["Highest calcium carbonate in range", "Sugar-free & gluten-free", "Neutralises & blocks acid"],
  },
  {
    id: "gaviscon-advance",
    brand: "Gaviscon Advance",
    category: "Heartburn & indigestion — moderate to severe",
    description:
      "Highest alginate concentration (2×) and lowest sodium content in the Gaviscon range. Recommended for moderate-to-severe GERD and safe for pregnant and breastfeeding women. Sugar-free and gluten-free.",
    needId: "stomach",
    imageLabel: "GA",
    tags: ["Advance formula", "Pregnancy safe", "Low sodium"],
    url: "https://www.gaviscon.com.au/products/gaviscon-advance/",
    priority: 7,
    suitableFor: {
      audiences: ["adult"],
      severities: ["moderate", "severe"],
    },
    variants: [
      {
        id: "bottle-150ml",
        label: "Bottle 150 ml",
        subLabel: "Liquid — fastest soothing",
        description:
          "150 ml liquid bottle. Soothes within 3 minutes, lasts up to 4 hours. 10 ml after meals.",
      },
      {
        id: "sachet-24",
        label: "Sachets × 24",
        subLabel: "On-the-go single-serve",
        description:
          "24 single-serve 10 ml sachets — portion-controlled and travel-friendly.",
      },
    ],
    activeIngredient: "Potassium Alginate 500 mg + Potassium Bicarbonate 200 mg",
    dosage: "10–20 ml after meals & at bedtime. Max 4× daily.",
    keyBenefits: ["2× alginate concentration", "Safe during pregnancy & breastfeeding", "Lowest sodium in range"],
  },

  // ── HEART — Cardiprin ─────────────────────────────────────────────────────
  {
    id: "cardiprin",
    brand: "Cardiprin 100",
    category: "Cardiovascular risk prevention",
    description:
      "Aspirin 100 mg daily tablet that reduces platelet stickiness to help prevent blood clots, lowering the risk of stroke and heart attack. Dissolves on the tongue for rapid absorption. Must be taken under medical supervision — adults only, not for children under 16.",
    needId: "heart",
    imageLabel: "CP",
    tags: ["Aspirin 100mg", "Daily prevention", "Adults only"],
    url: "https://www.cardiprin.com.au/",
    priority: 5,
    suitableFor: {
      audiences: ["adult"],
      severities: ["mild", "moderate"],
    },
    activeIngredient: "Aspirin 100 mg",
    dosage: "1 tablet daily. Must be taken under medical supervision.",
    keyBenefits: ["Reduces blood clot risk", "Helps prevent stroke & heart attack", "Dissolves on tongue for fast absorption"],
  },
];
