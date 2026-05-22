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
