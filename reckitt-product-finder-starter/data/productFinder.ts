import type { AudienceId, ChoiceOption, SymsptomType, PreferenceId, ProductItem, SeverityId, BodyPartId } from "@/types/productFinder";

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
  { id: "head", label: "Head", description: "Head-related symptoms.", icon: "🧠" },
  { id: "throat", label: "Throat", description: "Throat-related symptoms.", icon: "�️" },
  { id: "heart", label: "Heart", description: "Heart-related symptoms.", icon: "❤️" },
  { id: "chest", label: "Chest", description: "Chest-related symptoms.", icon: "🫁" },
  { id: "stomach", label: "Stomach", description: "Stomach-related symptoms.", icon: "🔥" }
];
export const bodySymptoms: SymsptomType[] = [
  { id: "head", symptom: ["Headache", "Migraine", "Fever", "Dental Pain", "Menstrual Pain"], icon: "🧠" },
  { id: "throat", symptom: ["Sore Throat", "Cough", "Hoarseness", "Throat Irritation", "Difficulty Swallowing"], icon: "️" },
  { id: "heart", symptom: ["Heart Attack", "Chest Pain", "Shortness of Breath", "Palpitations", "Irregular Heartbeat"], icon: "❤️" },
  { id: "chest", symptom: ["Chest Pain", "Shortness of Breath", "Cough", "Chest Congestion", "Chest Tightness"], icon: "🫁" },
  { id: "stomach", symptom: ["Stomach Ache", "Indigestion", "Nausea", "Bloating", "Gas"], icon: "🔥" }
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
    needId: "head",
    imageLabel: "ST",
    tags: ["Lozenges", "Throat care", "Popular"]
  }
];
