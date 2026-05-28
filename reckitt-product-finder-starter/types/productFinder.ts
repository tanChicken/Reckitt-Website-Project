export type BodyPartId =
  | "head"
  | "throat"
  | "heart"
  | "chest"
  | "stomach";

export type AudienceId = "adult" | "teen" | "child" | "someone-else";
export type SeverityId = "mild" | "moderate" | "severe" | "not-sure";
export type PreferenceId =
  | "fast-relief"
  | "long-lasting"
  | "gentle"
  | "easy-to-use"
  | "non-drowsy"
  | "trusted-brand";

export type SafetyLevel = "standard" | "caution" | "professional-advice";

export interface SymsptomType {
  id: BodyPartId;
  symptom: string[];
  icon: string;
}

export interface ChoiceOption<T extends string> {
  id: T;
  label: string;
  description: string;
  icon: string;
}

export interface ProductFlavor {
  id: string;
  label: string;
  imageId?: string; // overrides product.id when locating /products/<id>.png
}

export interface ProductVariant {
  id: string;            // unique within this product's variants
  label: string;         // primary chip text e.g. "Honey", "200 ml bottle", "24-pack"
  subLabel?: string;     // optional secondary line under selected variant title
  imageId?: string;      // overrides product.id when locating /products/<id>.png
  description?: string;  // overrides product.description when this variant is selected
  url?: string;          // overrides product.url when this variant is selected
  price?: string;        // optional retail price string, e.g. "$8.99"
  activeIngredient?: string | string[];  // overrides product.activeIngredient when this variant is selected
  dosage?: string | string[];            // overrides product.dosage when this variant is selected
  keyBenefits?: string[];                // overrides product.keyBenefits when this variant is selected
}

export interface ProductItem {
  id: string;
  brand: string;
  category: string;
  description: string;
  needId: BodyPartId;
  imageLabel: string;
  tags: string[];
  url?: string;
  priority?: number; // 1–10, higher wins ties within the same tier. Default 5.
  suitableFor?: {
    audiences?: AudienceId[];
    severities?: SeverityId[];
  };
  variants?: ProductVariant[];
  flavors?: ProductFlavor[];
  activeIngredient?: string|string[]; // if array, each item is shown as a separate bullet point in the UI
  dosage?: string|string[]; // if array, each item is shown as a separate bullet point in the UI
  keyBenefits?: string[];
  disclaimerPoints?: string[];
}

export interface FinderAnswers {
  needId?: BodyPartId;
  audienceId?: AudienceId;
  severityId?: SeverityId;
  preferenceIds: PreferenceId[];
}

export interface RecommendationResult {
  safetyLevel: SafetyLevel;
  headline: string;
  explanation: string;
  primary: ProductItem;
  alternatives: ProductItem[];
  nextSteps: string[];
  matchTier: 1 | 2 | 3; // 1=exact, 2=age matched/severity relaxed, 3=body part only
  tierDisclaimer?: string; // shown as a banner for tier 2 and 3
}

export interface FunnelEvent {
  eventName: string;
  step: number;
  answers?: Partial<FinderAnswers>;
  timestamp: string;
}
