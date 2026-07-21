import type { Localized, LocalizedList, LocalizedTextOrList } from "@/lib/i18n/localized";

export type BodyPartId =
  | "head"
  | "mouth"
  | "throat"
  | "heart"
  | "chest"
  | "stomach"
  | "bowel";

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
  symptom: LocalizedList;
  icon: string;
}

export interface ChoiceOption<T extends string> {
  id: T;
  label: Localized;
  description: Localized;
  icon: string;
}

export interface ProductFlavor {
  id: string;
  label: Localized;
  imageId?: string; // overrides product.id when locating /products/<id>.png
}

export interface ProductVariant {
  id: string;            // unique within this product's variants
  label: Localized;      // primary chip text e.g. "Honey", "200 ml bottle", "24-pack"
  subLabel?: Localized;  // optional secondary line under selected variant title
  imageId?: string;      // overrides product.id when locating /products/<id>.png
  description?: Localized;  // overrides product.description when this variant is selected
  url?: string;          // overrides product.url when this variant is selected
  price?: string;        // optional retail price string, e.g. "$8.99"
  activeIngredient?: LocalizedTextOrList;  // overrides product.activeIngredient when this variant is selected
  dosage?: LocalizedTextOrList;            // overrides product.dosage when this variant is selected
  keyBenefits?: LocalizedList;
  allowedAudiences?: AudienceId[]; // overrides product.suitableFor.audiences when this variant is selected
  disclaimerPoints?: LocalizedList; // overrides product.disclaimerPoints when this variant is selected
}

export interface ProductItem {
  id: string;
  brand: string;          // brand names are kept in their original (Latin) form
  category: Localized;
  description: Localized;
  needId: BodyPartId;
  imageLabel: string;
  tags: LocalizedList;
  url?: string;
  priority?: number; // 1–10, higher wins ties within the same tier. Default 5.
  suitableFor?: {
    audiences?: AudienceId[];
    severities?: SeverityId[];
  };
  variants?: ProductVariant[];
  flavors?: ProductFlavor[];
  activeIngredient?: LocalizedTextOrList; // if array, each item is shown as a separate bullet point in the UI
  dosage?: LocalizedTextOrList; // if array, each item is shown as a separate bullet point in the UI
  keyBenefits?: LocalizedList;
  disclaimerPoints?: LocalizedList;
  variantLabel?: Localized;  // label shown above the variant selector, defaults to "Pack Size"
  disclaimer?: Localized;    // always shown as the tier disclaimer banner when this product is recommended
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
  tierDisclaimer?: Localized; // shown as a banner for tier 2 and 3
}

export interface FunnelEvent {
  eventName: string;
  step: number;
  answers?: Partial<FinderAnswers>;
  timestamp: string;
}
