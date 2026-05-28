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
      "Tightness of Breath",
      "Palpitations",
      "Irregular Heartbeat",
    ],
    icon: "❤️",
  },
  {
    id: "chest",
    symptom: [
      "Chest Pain",
      "Tightness of Breath",
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
      { id: "standard", label: "standard", subLabel: "Ibuprofen 200 mg", 
        description:
              "A standard pain and fever relief tablet for adults and children over 12 years old. It is suitable for general pain relief needs and also helps reduce inflammation when symptoms are mild.",
            activeIngredient: "Ibuprofen 200 mg",
            dosage: [
              "Adults and children over 12: 1–2 tablets with water",
              "Up to 3× daily as required",
              "Leave at least 4 hours between doses",
              "Maximum 6 tablets in 24 hours",
              "Do not give to children under 12"
            ],
            keyBenefits: [
              "Provides effective pain relief",
              "Relieves fever",
              "Reduces inflammation",
              "Contains ibuprofen"
            ]      },
    ],
    activeIngredient: [
    "Ibuprofen 200mg"],
    dosage: [
      "Oral use only; short-term treatment.", 
      "Adults & >12: 1–2 tabs every 4–6 hrs (max 6/day)", 
      "Children 9–12: 1 tablet every 4–6 hrs as needed (max 3/day)",],
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If symptoms persist or worsen, if new symptoms occur, or if the product is required for more than 3 days, consult your doctor.",
      "Do not give to children under 18 years old.",
      "Do not exceed the stated dose. If you accidentally take more than the recommended dose, contact your doctor.",
      "Taking NSAIDs at about 20 weeks of pregnancy or later may harm your unborn baby.",
    ],
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
    variants: [
      { id: "standard", label: "standard", subLabel: "Ibuprofen 200 mg", 
        description:
          "A faster-acting pain relief caplet for adults, elderly users, and children aged 12 years and above. It is suitable when users want quicker relief from pain, fever, and inflammation.",
        activeIngredient: "Ibuprofen 200 mg",
        dosage: [
          "Adults, elderly, and children 12+: 1–2 caplets with water",
          "Up to 3× daily as required",
          "Leave at least 4 hours between doses",
          "Maximum 6 caplets in 24 hours",
          "Do not give to children under 12"
        ],
        keyBenefits: [
          "Targets pain in 10 minutes",
          "Provides effective pain relief",
          "Relieves fever",
          "Reduces inflammation",
          "Contains ibuprofen lysine"
        ],
      },
    ],
    activeIngredient: [
    "Ibuprofen 200mg"],
    dosage: [
      "Oral use only; short-term treatment.", 
      "Adults & >12: 1–2 tabs every 4–6 hrs (max 6/day)", 
      "Children 9–12: 1 tablet every 4–6 hrs as needed (max 3/day)",],
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If symptoms persist or worsen, if new symptoms occur, or if the product is required for more than 3 days, consult your doctor.",
      "Do not give to children under 18 years old.",
      "Do not exceed the stated dose. If you accidentally take more than the recommended dose, contact your doctor.",
      "Taking NSAIDs at about 20 weeks of pregnancy or later may harm your unborn baby.",
    ],
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
    variants: [
      { id: "standard", label: "standard", subLabel: "Ibuprofen 200 mg", 
        description:
          "A combination pain relief tablet for stronger adult pain symptoms. It combines ibuprofen and paracetamol to provide double-action relief and is positioned for users aged 18 and above.",
        activeIngredient: "Ibuprofen 200 mg + Paracetamol 500 mg",
        dosage: [
          "Adults under 65 and children from 18 years: 1 tablet, or 2 if required",
          "Take 3× daily when necessary, every 8 hours",
          "Leave 6 hours between doses",
          "Do not give to children under 18",
          "Do not take with other products containing paracetamol, ibuprofen, or other anti-inflammatory medicines"
        ],
        keyBenefits: [
          "Combines ibuprofen and paracetamol",
          "Double-action pain relief",
          "Provides relief for up to 8 hours"
        ],
      },
    ],
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
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If symptoms persist or worsen, if new symptoms occur, or if the product is required for more than 3 days, consult your doctor.",
      "Do not give to children under 18 years old.",
      "Do not exceed the stated dose. If you accidentally take more than the recommended dose, contact your doctor.",
      "Taking NSAIDs at about 20 weeks of pregnancy or later may harm your unborn baby.",
    ],
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
    variants: [
      { id: "standard", label: "standard", subLabel: "Ibuprofen 200 mg", 
        description:
          "A children’s liquid ibuprofen product for fever, pain, and inflammation relief. It is designed for children from 6 months to 12 years, with dosage depending on the child’s age group.",
        activeIngredient: "Ibuprofen 100 mg",
        dosage: [
          "6–12 months: 2.5 ml, 3–4× daily",
          "1–3 years: 5 ml, 3× daily",
          "4–6 years: 7.5 ml, 3× daily",
          "7–9 years: 10 ml, 3× daily",
          "10–12 years: 15 ml, 3× daily",
          "Give doses approximately every 6–8 hours as needed"
        ],
        keyBenefits: [
          "Relieves fever in children",
          "Reduces inflammation",
          "Contains ibuprofen"
        ],
      },
    ],
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
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If symptoms persist or worsen, if new symptoms occur, or if the product is required for more than 3 days, consult your doctor.",
      "Not for children under 6 months old. Always check the dosage chart on the label for the correct dose by weight.",
      "Do not exceed the stated dose. If you accidentally give more than the recommended dose, contact your doctor.",
    ],
  },

  // ── THROAT — Strepsils range ───────────────────────────────────────────────
  {
    id: "strepsils-original",
    brand: "Strepsils",
    category: "Sore throat relief — mild",
    description:
      "A basic sore throat lozenge range suitable for mild dry, itchy, or scratchy throat symptoms. It helps soothe and moisturise the throat while providing antibacterial and antiviral action for everyday throat discomfort.",
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
    activeIngredient: "-",
    dosage: [">6 years: 1 lozenge every 2–3 hours", "Maximum 12 lozenges daily"],
    keyBenefits: [
      "Soothes and moisturises the throat",
      "Antibacterial and antiviral action from 1–2 minutes",
      "Relieves pain from 5 minutes",
      "Relief lasts up to 2 hours"
    ],
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If sore throat is severe, persists for more than 3 days, or is accompanied by fever, headache, rash, nausea, or vomiting, consult your doctor promptly.",
      "Not recommended for children under 6 years old.",
      "Do not exceed 8 lozenges per day.",
    ],
  },
  {
    id: "strepsils-max-triple",
    brand: "Strepsils Max Triple Action",
    category: "Sore throat relief — moderate",
    description:
      "A stronger sore throat lozenge designed for painful throat symptoms. It is suitable when the throat feels more uncomfortable than a mild scratchy throat and provides fast relief while helping treat the cause.",
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
    activeIngredient: "Hexylresorcinol 24 mg",
    dosage: [">6 years: 1 lozenge every 3 hours", "Maximum 12 lozenges daily"],
    keyBenefits: [
      "Relieves sore throat from 1 minute",
      "Relief lasts up to 2 hours",
      "Strong and advanced sore throat relief",
      "Helps ease pain and treat the cause"
    ],    
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If sore throat is severe, persists for more than 3 days, or is accompanied by fever, consult your doctor.",
      "Not recommended for children under 6 years old.",
      "Do not exceed 8 lozenges per day.",
    ],
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
      { id: "max-pro", label: "Max Pro",  imageId: "strepsils-max-pro",
        description:
          "A stronger lozenge for swollen, red, and inflamed sore throat symptoms. It is suitable for more severe throat discomfort and provides longer-lasting relief compared with regular sore throat lozenges.",
        activeIngredient: "Flurbiprofen 8.75 mg",
        dosage: [">12 years: 1 lozenge every 3–6 hours", "Maximum 5 lozenges daily"],
        keyBenefits: [
          "Relieves pain from 1 minute",
          "Relief lasts up to 6 hours",
          "Anti-inflammatory and analgesic effect",
          "Alcohol-free",
          "Sugar-free"
        ],
      },
      { id: "max-pro-spray", label: "Max Pro Spray", imageId: "strepsils-max-pro-spray",
        description:
          "A targeted throat spray for adults with severe or inflamed sore throat symptoms. The fine mist helps deliver relief directly to the throat, making it convenient for use during the day or night.",
        activeIngredient: "Flurbiprofen 8.75 mg",
        dosage: [">18 years: 3 sprays every 3–6 hours", "Maximum 15 sprays daily"],
        keyBenefits: [
          "Fine mist targets the throat directly",
          "Convenient for morning or night use",
          "Relieves pain from 1 minute",
          "Relief lasts up to 6 hours",
          "Alcohol-free",
          "Sugar-free"
        ],
       },
    ],
    activeIngredient: ["Flurbiprofen 8.75 mg"],
    dosage: ["≥12 years: 1 spray every 3–6 hrs", "≥18 years: 3 sprays every 3–6 hrs"],
    keyBenefits: ["Pain relief from 1 min, lasts up to 6 hrs", "Alcohol-free & sugar-free"],
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If symptoms persist or worsen after 3 days, consult your doctor or pharmacist.",
      "Not recommended for children and teenagers under 12 years old.",
      "Do not exceed 5 lozenges per day.",
      "Contains flurbiprofen, an NSAID. If you are pregnant or breastfeeding, consult your doctor before use.",
    ],
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
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If sore throat is severe, persists for more than 3 days, or is accompanied by fever, consult your doctor.",
      "Not recommended for children under 12 years old.",
      "Do not exceed 8 lozenges per day.",
    ],
  },

  // ── CHEST — Strepsils Chesty Cough ────────────────────────────────────────
  {
    id: "strepsils-chesty-cough",
    brand: "Strepsils Chesty Cough",
    category: "Chesty cough & mucus relief",
    description:
      "A lozenge for chesty cough with phlegm, suitable for users who need help loosening mucus and clearing the airways. It supports easier coughing by helping thin and loosen mucus.",
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
    activeIngredient: "Ambroxol HCl 15 mg",
    dosage: [">12 years: Up to 2 lozenges per dose", "Maximum 6 lozenges daily"],
    keyBenefits: [
      "Suitable for cough with phlegm",
      "Helps loosen and thin mucus",
      "Helps clear the airways",
      "Eases coughing"
    ],    
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If cough persists for more than 7 days, or is accompanied by fever, rash, or persistent headache, consult your doctor.",
      "Not recommended for children under 12 years old.",
      "Do not exceed 3 lozenges per day.",
    ],
  },

  // ── STOMACH — Gaviscon range ──────────────────────────────────────────────
  {
    id: "gaviscon-original",
    brand: "Gaviscon Original",
    category: "Heartburn & indigestion — mild",
    description:
      "A first-line option for mild acid reflux, heartburn, or indigestion symptoms. It helps form a protective barrier and provides soothing relief, making it suitable for lighter stomach discomfort after meals.",
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
        imageId: "gaviscon-original-tablet-16",
        dosage: [
          "Tablet: 2 tablets up to 4× daily",
          "Maximum 40 ml/day or 8 tablets/day"
        ],
      },
    ],
    activeIngredient: "Sodium Alginate, Potassium Bicarbonate, Calcium Carbonate",
    dosage: [
      "Liquid bottle/sachet: 10 ml up to 4× daily",
      "Recommended: 3 times after meals and once before sleep"
    ],
    keyBenefits: [
      "Recommended as first-line treatment for mild GERD",
      "Protection lasts up to 4 hours",
      "Made from natural seaweed"
    ],
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If symptoms persist or worsen, or if you experience difficulty swallowing or persistent abdominal pain, consult your doctor.",
      "Consult your doctor before use if you are pregnant, breastfeeding, or have kidney disease.",
      "Do not exceed the stated dose. Take after meals and at bedtime.",
    ],
  },
  {
    id: "gaviscon-double-action",
    brand: "Gaviscon Double Action",
    category: "Heartburn & indigestion — moderate",
    description:
      "A stronger reflux and indigestion option for moderate symptoms. It is suitable when users need more complete relief, especially for acid reflux, heartburn, and moderate to severe indigestion discomfort.",
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
        imageId: "gaviscon-double-action-tablet-16",
        dosage: [
          "Tablet: 2 tablets up to 4× daily",
          "Maximum 40 ml/day or 8 tablets/day"
        ],
      },
    ],
    activeIngredient: "Sodium Alginate, Potassium Bicarbonate, Calcium Carbonate",
    dosage: [
      "Liquid bottle/sachet: 10 ml up to 4× daily",
      "Recommended: 3 times after meals and once before sleep"
    ],
    keyBenefits: [
      "Recommended for mild-to-moderate GERD",
      "Can be used as add-on rescue therapy",
      "High calcium carbonate content",
      "Effective relief for moderate to severe indigestion",
      "Sugar-free",
      "Gluten-free",
      "Soothes within 3 minutes",
      "Relief lasts up to 4 hours",
      "Made from natural seaweed"
    ],
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If symptoms persist or worsen, or if you experience difficulty swallowing, consult your doctor.",
      "Consult your doctor before use if you are pregnant, breastfeeding, or have kidney disease.",
      "Do not exceed the stated dose. Take after meals and at bedtime.",
    ],
  },
  {
    id: "gaviscon-advance",
    brand: "Gaviscon Advance",
    category: "Heartburn & indigestion — moderate to severe",
    description:
      "An advanced reflux relief option for more severe stomach discomfort. It has the highest alginate concentration in the Gaviscon range and is positioned for stronger, longer protection against reflux symptoms.",
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
        imageId: "gaviscon-advance-bottle-150ml"
      },
      {
        id: "sachet-24",
        label: "Sachets × 24",
        subLabel: "On-the-go single-serve",
        imageId: "gaviscon-advance-sachet-24"
      },
    ],
    activeIngredient: "Sodium Alginate, Potassium Bicarbonate, Calcium Carbonate",
    dosage: [
      "Liquid bottle/sachet: 10 ml up to 4× daily",
      "Recommended: 3 times after meals and once before sleep",
      "Maximum 40 ml/day"
    ],
    keyBenefits: [
      "Can be used as add-on rescue therapy",
      "Sugar-free",
      "Gluten-free",
      "Soothes within 3 minutes",
      "Relief lasts up to 4 hours",
    ],
    disclaimerPoints: [
      "Always read the label before use.",
      "Use only as directed.",
      "If symptoms persist or worsen, or if you experience difficulty swallowing or persistent abdominal pain, consult your doctor.",
      "Suitable during pregnancy and breastfeeding, but consult your doctor if unsure.",
      "Do not exceed the stated dose. Take after meals and at bedtime.",
      "Contains potassium — consult your doctor if you are on a potassium-restricted diet.",
    ],
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
    disclaimerPoints: [
      "Always read the label before use.",
      "Your doctor will advise you on how long you should continue to take Cardiprin 100. Make sure you see your doctor at regular intervals and discuss any questions that you may have with him or her. Cardiprin 100 should only be taken under medical supervision.",
      "Cardiprin 100 should not be taken by people who are allergic to salicylates or taking regular anticoagulant therapy. Precautions should be observed in patients with asthma or peptic ulcer.",
      "Not recommended for children and teenagers below 16 years old.",
      "If you have a history of heartburn or ulcers, you may find that Cardiprin 100 affects your symptoms. If this occurs, consult your doctor.",
    ],
  },
];
