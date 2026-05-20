export type NeedId =
  | "sore-throat"
  | "pain-fever"
  | "cough-mucus"
  | "heartburn"
  | "personal-hygiene"
  | "home-cleaning";

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

export interface NeedOption {
  id: NeedId;
  label: string;
  description: string;
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
  needId: NeedId;
  imageLabel: string;
  tags: string[];
}

export interface FinderAnswers {
  needId?: NeedId;
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
}

export interface FunnelEvent {
  eventName: string;
  step: number;
  answers?: Partial<FinderAnswers>;
  timestamp: string;
}
