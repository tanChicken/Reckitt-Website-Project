import type { AudienceId, ChoiceOption, NeedOption, PreferenceId, ProductItem, SeverityId } from "@/types/productFinder";

export const needOptions: NeedOption[] = [
  {
    id: "sore-throat",
    label: "Sore throat",
    description: "Relieve throat irritation and discomfort.",
    icon: "🗣️"
  },
  {
    id: "pain-fever",
    label: "Pain & fever",
    description: "Support for everyday pain or fever needs.",
    icon: "🌡️"
  },
  {
    id: "cough-mucus",
    label: "Cough & mucus",
    description: "Help users explore cough and chest mucus care.",
    icon: "🫁"
  },
  {
    id: "heartburn",
    label: "Heartburn & indigestion",
    description: "Guidance for reflux, acidity, and indigestion needs.",
    icon: "🔥"
  },
  {
    id: "personal-hygiene",
    label: "Personal hygiene",
    description: "Everyday protection for hands and body.",
    icon: "🛡️"
  },
  {
    id: "home-cleaning",
    label: "Home cleaning",
    description: "Cleaning support for surfaces, dishes, and laundry.",
    icon: "🏠"
  }
];

export const audienceOptions: ChoiceOption<AudienceId>[] = [
  { id: "adult", label: "Adult", description: "18 years old and above.", icon: "👤" },
  { id: "teen", label: "Teen", description: "13–17 years old.", icon: "🙂" },
  { id: "child", label: "Child", description: "Under 13 years old.", icon: "🧒" },
  { id: "someone-else", label: "Someone else", description: "I am helping another person.", icon: "👥" }
];

export const severityOptions: ChoiceOption<SeverityId>[] = [
  { id: "mild", label: "Mild", description: "I can manage it.", icon: "😊" },
  { id: "moderate", label: "Moderate", description: "It feels uncomfortable.", icon: "😐" },
  { id: "severe", label: "Severe", description: "It is difficult to manage.", icon: "⚠️" },
  { id: "not-sure", label: "Not sure", description: "I need safer guidance.", icon: "❔" }
];

export const preferenceOptions: ChoiceOption<PreferenceId>[] = [
  { id: "fast-relief", label: "Fast relief", description: "Prioritise speed.", icon: "⚡" },
  { id: "long-lasting", label: "Long lasting", description: "Prioritise duration.", icon: "⏱️" },
  { id: "gentle", label: "Gentle", description: "Suitable for sensitive needs.", icon: "🌿" },
  { id: "easy-to-use", label: "Easy to use", description: "Simple formats or routines.", icon: "✅" },
  { id: "non-drowsy", label: "Non-drowsy", description: "Avoid sleepy-feeling options.", icon: "☀️" },
  { id: "trusted-brand", label: "Trusted brand", description: "Known household brands.", icon: "⭐" }
];

export const productItems: ProductItem[] = [
  {
    id: "strepsils",
    brand: "Strepsils",
    category: "Sore throat relief",
    description: "A throat-care category for users looking for sore throat support.",
    needId: "sore-throat",
    imageLabel: "ST",
    tags: ["Lozenges", "Throat care", "Popular"]
  },
  {
    id: "nurofen",
    brand: "Nurofen",
    category: "Pain and fever relief",
    description: "A pain and fever category for users who want everyday relief options.",
    needId: "pain-fever",
    imageLabel: "NF",
    tags: ["Pain relief", "Fever", "Fast relief"]
  },
  {
    id: "mucinex",
    brand: "Mucinex",
    category: "Cough and mucus relief",
    description: "A cough-care category for mucus and chest congestion support.",
    needId: "cough-mucus",
    imageLabel: "MX",
    tags: ["Cough", "Mucus", "Chest care"]
  },
  {
    id: "gaviscon",
    brand: "Gaviscon",
    category: "Heartburn and indigestion relief",
    description: "A digestive-care category for reflux, acidity, and indigestion needs.",
    needId: "heartburn",
    imageLabel: "GV",
    tags: ["Heartburn", "Indigestion", "Digestive care"]
  },
  {
    id: "dettol",
    brand: "Dettol",
    category: "Personal hygiene protection",
    description: "A hygiene category for everyday hand and body protection.",
    needId: "personal-hygiene",
    imageLabel: "DT",
    tags: ["Hygiene", "Protection", "Everyday care"]
  },
  {
    id: "finish",
    brand: "Finish / Vanish / Harpic",
    category: "Home care and cleaning",
    description: "A home-care category for dishes, laundry, toilet, and surface cleaning.",
    needId: "home-cleaning",
    imageLabel: "HC",
    tags: ["Home care", "Cleaning", "Family home"]
  }
];
