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
    description: "I can manage it.",
    icon: "/mild.png",
  },
  {
    id: "moderate",
    label: "Moderate",
    description: "It feels uncomfortable.",
    icon: "/moderate.png",
  },
  {
    id: "severe",
    label: "Severe",
    description: "It is difficult to manage.",
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
  // ── HEAD ──────────────────────────────────────────────────────────────────
  // Best for adults/teens with moderate-to-severe head pain (fast ibuprofen)
  {
    id: "nurofen-express",
    brand: "Nurofen Express",
    category: "Pain & fever relief",
    description: "Fast-acting ibuprofen capsules for headaches, migraines, and dental pain.",
    needId: "head",
    imageLabel: "NF",
    tags: ["Ibuprofen", "Fast relief", "Adult"],
    url: "https://www.nurofen.com.au/products/",
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["moderate", "severe"],
    },
  },
  // Gentle paracetamol — adults/teens with mild symptoms
  {
    id: "panadol",
    brand: "Panadol",
    category: "Pain & fever relief",
    description: "Gentle paracetamol tablets for mild headaches and low-grade fever.",
    needId: "head",
    imageLabel: "PD",
    tags: ["Paracetamol", "Gentle", "Fever"],
    url: "https://www.panadol.com/en-au/products/",
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild", "moderate"],
    },
  },
  // Children's formula — only for child audience
  {
    id: "panadol-children",
    brand: "Panadol Children's",
    category: "Children's pain & fever relief",
    description: "Paracetamol suspension specially formulated for children's headaches and fever.",
    needId: "head",
    imageLabel: "PC",
    tags: ["Children", "Paracetamol", "Suspension"],
    url: "https://www.panadol.com/en-au/products/childrens/",
    suitableFor: {
      audiences: ["child"],
      severities: ["mild", "moderate"],
    },
  },

  // ── THROAT ────────────────────────────────────────────────────────────────
  // Adults/teens — mild throat irritation
  {
    id: "strepsils",
    brand: "Strepsils",
    category: "Sore throat relief",
    description: "Antibacterial lozenges to soothe sore throats and relieve hoarseness.",
    needId: "throat",
    imageLabel: "ST",
    tags: ["Lozenges", "Throat care", "Popular"],
    url: "https://www.strepsils.com.au/products/",
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild", "moderate"],
    },
  },
  // Adults — moderate-to-severe throat inflammation
  {
    id: "difflam",
    brand: "Difflam",
    category: "Anti-inflammatory throat spray",
    description: "Benzydamine throat spray providing targeted anti-inflammatory and numbing relief.",
    needId: "throat",
    imageLabel: "DF",
    tags: ["Spray", "Anti-inflammatory", "Numbing"],
    url: "https://www.difflam.com.au/",
    suitableFor: {
      audiences: ["adult"],
      severities: ["moderate", "severe"],
    },
  },
  // Children — mild sore throat
  {
    id: "strepsils-children",
    brand: "Strepsils Junior",
    category: "Children's sore throat relief",
    description: "Gentle sugar-free lozenges for children's sore throats and throat irritation.",
    needId: "throat",
    imageLabel: "SJ",
    tags: ["Children", "Sugar-free", "Lozenges"],
    url: "https://www.strepsils.com.au/products/",
    suitableFor: {
      audiences: ["child"],
      severities: ["mild"],
    },
  },

  // ── HEART (heartburn / acid reflux) ───────────────────────────────────────
  // Adults/teens — mild to moderate reflux
  {
    id: "cardiprin",
    brand: "Cardiprin",
    category: "Heartburn & acid reflux",
    description: "Fast-acting antacid liquid that forms a protective raft to block acid reflux.",
    needId: "heart",
    imageLabel: "GV",
    tags: ["Antacid", "Reflux", "Fast relief"],
    url: "https://www.gaviscon.com.au/products/",
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild", "moderate"],
    },
  },
  // Adults — frequent or severe heartburn
  {
    id: "nexium",
    brand: "Nexium 24HR",
    category: "Proton pump inhibitor",
    description: "Esomeprazole tablets for frequent heartburn, providing 24-hour acid control.",
    needId: "heart",
    imageLabel: "NX",
    tags: ["PPI", "24-hour relief", "Adult"],
    url: "https://www.nexium.com/",
    suitableFor: {
      audiences: ["adult"],
      severities: ["moderate"],
    },
  },

  // ── CHEST ─────────────────────────────────────────────────────────────────
  // Adults/teens — chest congestion and mucus
  {
    id: "mucinex",
    brand: "Mucinex",
    category: "Chest congestion relief",
    description: "Guaifenesin expectorant that loosens and thins mucus to ease chest congestion.",
    needId: "chest",
    imageLabel: "MX",
    tags: ["Expectorant", "Mucus relief", "Adult"],
    url: "https://www.mucinex.com/products/",
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["moderate", "severe"],
    },
  },
  // Adults/teens — mild cough and chest tightness
  {
    id: "robitussin",
    brand: "Robitussin",
    category: "Cough & chest relief",
    description: "Cough syrup to relieve mild chest congestion and suppress irritating coughs.",
    needId: "chest",
    imageLabel: "RB",
    tags: ["Cough syrup", "Mild relief", "Popular"],
    url: "https://www.robitussin.com/",
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild", "moderate"],
    },
  },
  // Children — mild chest/cough symptoms
  {
    id: "dimetapp-children",
    brand: "Dimetapp Children's",
    category: "Children's cough & chest relief",
    description: "Children's cold and cough liquid for mild chest congestion and runny nose.",
    needId: "chest",
    imageLabel: "DM",
    tags: ["Children", "Cold relief", "Liquid"],
    url: "https://www.dimetapp.com.au/",
    suitableFor: {
      audiences: ["child"],
      severities: ["mild", "moderate"],
    },
  },

  // ── STOMACH ───────────────────────────────────────────────────────────────
  // All ages — mild indigestion and bloating
  {
    id: "mylanta",
    brand: "Mylanta",
    category: "Indigestion & bloating relief",
    description: "Antacid liquid to quickly neutralise stomach acid and relieve bloating and gas.",
    needId: "stomach",
    imageLabel: "MY",
    tags: ["Antacid", "Bloating", "Gas relief"],
    url: "https://www.mylanta.com.au/",
    suitableFor: {
      severities: ["mild", "moderate"],
    },
  },
  // Adults — moderate-to-severe stomach cramps
  {
    id: "buscopan",
    brand: "Buscopan",
    category: "Stomach cramp relief",
    description: "Antispasmodic tablets that relax stomach muscle cramps and abdominal pain.",
    needId: "stomach",
    imageLabel: "BS",
    tags: ["Antispasmodic", "Cramps", "Adult"],
    url: "https://www.buscopan.com.au/",
    suitableFor: {
      audiences: ["adult"],
      severities: ["moderate", "severe"],
    },
  },
  // Adults/teens — mild indigestion and stomach upset
  {
    id: "gaviscon-stomach",
    brand: "Gaviscon",
    category: "Indigestion & stomach relief",
    description: "Provides relief from indigestion, nausea, and general stomach discomfort.",
    needId: "stomach",
    imageLabel: "GS",
    tags: ["Antacid", "Indigestion", "Nausea"],
    url: "https://www.gaviscon.com.au/products/",
    suitableFor: {
      audiences: ["adult", "teen"],
      severities: ["mild"],
    },
  },
];
