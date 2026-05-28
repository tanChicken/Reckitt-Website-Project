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
    label: "Throat & Chest",
    description: "Throat and chest-related symptoms.",
    icon: "/throat.png",
  },
  {
    id: "heart",
    label: "Heart",
    description: "Heart-related symptoms.",
    icon: "/heartQ.png",
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
    tags: ["Effective Pain Relief", "Relieves Fever", "Reduces Inflammation", "Contains Ibuprofen"],
    url: "https://www.nurofen.com.au/products/nurofen-tablets/",
    priority: 5,
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild"],
    },
    variants: [
      { id: "12s", label: "12 tablets", subLabel: "Ibuprofen 200 mg" },
      { id: "24s", label: "24 tablets", subLabel: "Ibuprofen 200 mg" },
    ],
    activeIngredient: [
    "Ibuprofen 200mg"],
    dosage: [
      "Oral use only; short-term treatment.", 
      "Adults & >12: 1–2 tabs every 4–6 hrs (max 6/day)", 
      "Children 9–12: 1 tablet every 4–6 hrs as needed (max 3/day)",],
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
    activeIngredient: ["Ibuprofen Lysine 342 mg"],
    dosage: [
      "Adults, elderly & ≥12: 1–2 caplets with water up to 3× daily",
      "Leave ≥4 hrs between doses; max 6 caplets/24 hrs.",
      "Not for children <12",
      "Consult a doctor if symptoms persist, worsen, or use exceeds 3 days",
    ],
    keyBenefits: ["Targets pain in 10 minutes", "Relieves fever", "Effective pain relief", "reduces inflammation", "Contains ibuprofen lysine"],
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
      severities: ["severe"],
    },
    activeIngredient: [
      "Ibuprofen 200 mg", 
      "Paracetamol 500 mg",
    ],
    dosage: [
      "Take with water.",
      "Adults <65 & ≥18: 1–2 tablets every 8 hrs as needed (max 6/day).",
      "Leave ≥6 hrs between doses.",
      "Not for <18 years.",
      "Avoid with other paracetamol, ibuprofen, or anti-inflammatory medicines.",
      "Consult a doctor if taking other medicines, have diabetes, or dehydration."
    ],
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
    activeIngredient: ["Ibuprofen 100 mg/5 ml"],
    dosage: ["1 tsp = 5ml:",
      "6-12 Months : 2.5ml : 3-4 times a day",
      "1–3 years: 5ml, 3× daily",
      "4–6 years: 7.5ml, 3× daily",
      "7–9 years: 10ml, 3× daily",
      "10–12 years: 15ml, 3× daily",
      "Give every 6–8 hrs as needed (min. 4 hrs if advised by doctor)",
    ],
    keyBenefits: ["Relieves fever in children", "Reduces inflammation", "Contains ibuprofen"],
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
    flavors: [
      { id: "honey",             label: "Honey" },
      { id: "orange-vitamin-c",  label: "Orange with Vitamin C" },
      { id: "original",          label: "Original" },
      { id: "extra-strong",      label: "Extra Strong" },
      { id: "cool",              label: "Cool" },
      { id: "sugar-free-lemon",  label: "Sugar Free Lemon" },
    ] satisfies ProductFlavor[],
    variants: [
      { id: "6-pack",  label: "6 Pack",  subLabel: "6 lozenges" },
      { id: "24-pack", label: "24 Pack", subLabel: "24 lozenges" },
    ],
    activeIngredient: [
      "2,4-Dichlorobenzyl alcohol 1.2 mg",
      "Amylmetacresol 0.6 mg",
    ],
    dosage: ["≥6 years: 1 lozenge every 2–3 hrs."],
    keyBenefits: ["Soothes & Moisturises", "Antibacterial & antiviral action in 1–2 mins", "Relieves pain within 5 mins for up to 2 hrs"],
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
      { id: "6s", label: "6 lozenges", subLabel: "Travel / trial pack", imageId: "strepsils-max-triple-6s" },
      { id: "24s", label: "24 lozenges", subLabel: "Standard pack", imageId: "strepsils-max-triple-24s" },
    ],
    activeIngredient: ["Hexylrescorcinol 24 mg"],
    dosage: ["≥6 years: 1 lozenge every 3 hrs"],
    keyBenefits: ["Relieves sore throat from 1 minute last up to 2 hours "],
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
    variants: [
      { id: "max-pro", label: "Max Pro",  imageId: "strepsils-max-pro" },
      { id: "max-pro-spray", label: "Max Pro Spray", imageId: "strepsils-max-pro-spray" },
    ],
    activeIngredient: ["Flurbiprofen 8.75 mg"],
    dosage: ["≥12 years: 1 spray every 3–6 hrs", "≥18 years: 3 sprays every 3–6 hrs"],
    keyBenefits: ["Pain relief from 1 min, lasts up to 6 hrs", "Alcohol-free & sugar-free"],
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
    keyBenefits: ["Fine mist spray targets & soothes the throat", "Convenient day or night use", "Pain relief from 1 min, lasts up to 6 hrs", "Alcohol-free & sugar-free"],
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
    activeIngredient: ["Lignocaine HCl 10 mg", "2 antiseptics"],
    dosage: ["≥12 years: 1 lozenge every 2 hrs."],
    keyBenefits: ["Fast-acting local anaesthetic + 2 antiseptics", "Numbing relief from 1 min, lasts up to 2 hrs"],
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
      { id: "8s", label: "8 lozenges", subLabel: "Trial pack", imageId: "strepsils-chesty-cough-8s" },
      { id: "24s", label: "24 lozenges", subLabel: "Standard pack", imageId: "strepsils-chesty-cough-24s" },
    ],
    activeIngredient: ["Ambroxol HCL 15 mg"],
    dosage: ["≥12 years: Up to 2 lozenges per dose"],
    keyBenefits: ["Suitable for cough with phlegm", "Loosens & thins mucus", "Helps clear airways & ease coughing"],
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
      audiences: ["adult", "teen", "child"],
      severities: ["mild"],
    },
    variants: [
      {
        id: "bottle-200ml",
        label: "Bottle 200 ml",
        subLabel: "Peppermint liquid",
        description:
          "200 ml peppermint liquid bottle. 10 ml after meals, up to 4× daily.",
        imageId: "gaviscon-original-bottle-200ml"
      },
      {
        id: "sachet-5",
        label: "Sachets × 5",
        subLabel: "On-the-go single-serve",
        description:
          "5 single-serve sachets — 10 ml each. Convenient for travel and work.",
        imageId: "gaviscon-original-sachet-5"
      },
      {
        id: "sachet-24",
        label: "Sachets × 24",
        subLabel: "On-the-go single-serve",
        description:
          "24 single-serve sachets — 10 ml each. Convenient for travel and work.",
        imageId: "gaviscon-original-sachet-24"
      },
      {
        id: "tablet-16",
        label: "Tablets × 16",
        subLabel: "Chewable tablets",
        description:
          "16 chewable tablets — 2 tablets up to 4× daily, ideal when liquid is inconvenient.",
        imageId: "gaviscon-original-tablet-16"
      },
    ],
    activeIngredient: ["Sodium Alginate ", "Potassium Bicarbonate ","Calcium Carbonate"],
    dosage: ["Liquid (bottle/sachet): 10ml", "Up to 4x daily", "Recommended: 3× after meals, 1× before bed", "Tablets: 2 tablets", "Up to 4x daily", "Recommended: 3× after meals, 1× before bed"],
    keyBenefits: ["First-line for mild GERD", "Protection lasts up to 4 hours", "Made from natural seaweed"],
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
      audiences: ["adult", "teen", "child"],
      severities: ["moderate"],
    },
    variants: [
      {
        id: "bottle-300ml",
        label: "Bottle 300 ml",
        subLabel: "Family size",
        description:
          "300 ml liquid bottle for regular at-home use. 10 ml after meals, up to 4× daily.",
        imageId: "gaviscon-double-action-bottle-300ml"
      },
      {
        id: "bottle-150ml",
        label: "Bottle 150 ml",
        subLabel: "Compact size",
        description: "150 ml liquid bottle — compact and travel-friendly.",
        imageId: "gaviscon-double-action-bottle-150ml"
      },
      {
        id: "sachet-5",
        label: "Sachets × 5",
        subLabel: "On-the-go single-serve",
        description:
          "5 single-serve 10 ml sachets — convenient and portion-controlled.",
        imageId: "gaviscon-double-action-sachet-5"
      },
      {
        id: "sachet-24",
        label: "Sachets × 24",
        subLabel: "On-the-go single-serve",
        description:
          "24 single-serve 10 ml sachets — convenient and portion-controlled.",
        imageId: "gaviscon-double-action-sachet-24"
      },
      {
        id: "tablet-16",
        label: "Tablets × 16",
        subLabel: "Chewable tablets",
        description: "16 chewable tablets — 2 tablets up to 4× daily.",
        imageId: "gaviscon-double-action-tablet-16"
      },
    ],
    activeIngredient: ["Sodium Alginate 500 mg", "Calcium Carbonate 325 mg"],
    dosage: ["Liquid (bottle/sachet): 10ml", "Up to 4x daily", "Recommended: 3× after meals, 1× before bed", "Tablets: 2 tablets", "Up to 4x daily", "Recommended: 3× after meals, 1× before bed"],
    keyBenefits: ["First-line for mild–moderate GERD", "Add-on rescue therapy with PPIs", "High calcium carbonate for moderate–severe indigestion", "Sugar-free and gluten-free"],
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
      audiences: ["adult", "teen", "child"],
      severities: ["severe"],
    },
    variants: [
      {
        id: "bottle-150ml",
        label: "Bottle 150 ml",
        subLabel: "Liquid — fastest soothing",
        description:
          "150 ml liquid bottle. Soothes within 3 minutes, lasts up to 4 hours. 10 ml after meals.",
        imageId: "gaviscon-advance-bottle-150ml"
      },
      {
        id: "sachet-24",
        label: "Sachets × 24",
        subLabel: "On-the-go single-serve",
        description:
          "24 single-serve 10 ml sachets — portion-controlled and travel-friendly.",
        imageId: "gaviscon-advance-sachet-24"
      },
    ],
    activeIngredient: ["Potassium Alginate 500 mg", "Potassium Bicarbonate 200 mg"],
    dosage: ["Liquid (bottle/sachet): 10ml", "Up to 4x daily", "Recommended: 3× after meals, 1× before bed"],
    keyBenefits: ["First-line for mild–moderate GERD", "Suitable for pregnant & breastfeeding women", "Lowest sodium in range", "High alginate (2× concentration)", "Sugar-free and gluten-free", "Relief in 3 mins lasting up to 4 hrs"],
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
    activeIngredient: ["Aspirin 100 mg", "Glycine 45mg"],
    dosage: ["Adults: 1 tablet daily", "Not for children/teenagers", "Take daily as prescribed (calendar pack helps adherence)", "Can dissolve on tongue or swallow whole with water", "Use only under medical supervision; duration per doctor’s advice & regular review"],
    keyBenefits: ["Reduces platelet3 stickiness, helping prevent blood clots and vessel blockages", "Contains 100 mg low-dose aspirin; helps lower risk of stroke & heart attack", "Designed to dissolve on tongue for rapid absorption and effectiveness"],
  },
];
