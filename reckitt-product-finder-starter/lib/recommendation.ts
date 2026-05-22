import { productItems } from "@/data/productFinder";
import type { FinderAnswers, ProductItem, RecommendationResult } from "@/types/productFinder";

// ── Helpers ────────────────────────────────────────────────────────────────

function audienceMatches(product: ProductItem, answers: FinderAnswers): boolean {
  const { audiences } = product.suitableFor ?? {};
  return !audiences || !answers.audienceId || audiences.includes(answers.audienceId);
}

function severityMatches(product: ProductItem, answers: FinderAnswers): boolean {
  const { severities } = product.suitableFor ?? {};
  return !severities || !answers.severityId || severities.includes(answers.severityId);
}

// Higher priority wins ties within a tier. Tier 3 uses ascending sort (most general first).
const byPriorityDesc = (a: ProductItem, b: ProductItem) => (b.priority ?? 5) - (a.priority ?? 5);
const byPriorityAsc  = (a: ProductItem, b: ProductItem) => (a.priority ?? 5) - (b.priority ?? 5);

// ── Tiered selection ───────────────────────────────────────────────────────

function pickProducts(answers: FinderAnswers): {
  primary: ProductItem;
  alternatives: ProductItem[];
  matchTier: 1 | 2 | 3;
  tierDisclaimer?: string;
} {
  const forBodyPart = productItems.filter((p) => p.needId === answers.needId);

  // No products exist for this body part at all → fall back gracefully
  if (forBodyPart.length === 0) {
    const fallback = productItems[0];
    return {
      primary: fallback,
      alternatives: [],
      matchTier: 3,
      tierDisclaimer:
        "No products in our current range cover this area. Please consult a pharmacist or doctor for guidance.",
    };
  }

  // Tier 1 — exact match: audience AND severity both fit
  const tier1 = forBodyPart
    .filter((p) => audienceMatches(p, answers) && severityMatches(p, answers))
    .sort(byPriorityDesc);

  if (tier1.length > 0) {
    return { primary: tier1[0], alternatives: tier1.slice(1), matchTier: 1 };
  }

  // Tier 2 — age fits but severity doesn't (relax severity)
  const tier2 = forBodyPart
    .filter((p) => audienceMatches(p, answers) && !severityMatches(p, answers))
    .sort(byPriorityDesc);

  if (tier2.length > 0) {
    return {
      primary: tier2[0],
      alternatives: tier2.slice(1),
      matchTier: 2,
      tierDisclaimer:
        "No product in our range exactly matches your reported severity level. The suggestion below is the closest match for your age group — check the label carefully or speak to a pharmacist.",
    };
  }

  // Tier 3 — only body part fits (no age or severity match)
  // Sort ascending so the most general product (lowest priority) appears first.
  const tier3 = [...forBodyPart].sort(byPriorityAsc);

  return {
    primary: tier3[0],
    alternatives: tier3.slice(1),
    matchTier: 3,
    tierDisclaimer:
      "No product in our range is specifically recommended for your age group with this symptom. The suggestion below is the closest available — always consult a pharmacist or doctor before use.",
  };
}

// ── Safety level ───────────────────────────────────────────────────────────

function buildResult(
  answers: FinderAnswers,
  primary: ProductItem,
  alternatives: ProductItem[],
  matchTier: 1 | 2 | 3,
  tierDisclaimer?: string
): RecommendationResult {
  // Severe or unsure → always redirect to professional advice
  const needsProfessionalAdvice =
    answers.severityId === "severe" ||
    answers.severityId === "not-sure" ||
    // Heart symptoms in children are always serious
    (answers.needId === "heart" && answers.audienceId === "child");

  if (needsProfessionalAdvice) {
    return {
      safetyLevel: "professional-advice",
      headline: "Please speak to a pharmacist or doctor before choosing a product.",
      explanation:
        "Your answers suggest that professional guidance is the safest next step before selecting a health product.",
      primary,
      alternatives,
      matchTier,
      nextSteps: [
        "Read the product label and age guidance carefully.",
        "Tell the pharmacist about age, allergies, and current medicines.",
        "Get urgent help if symptoms feel severe or worrying.",
      ],
    };
  }

  // Teen or child + tier 3 (shown an adult product) → caution
  const showCaution =
    answers.audienceId === "teen" ||
    (answers.audienceId === "child" && matchTier === 3);

  if (showCaution) {
    return {
      safetyLevel: "caution",
      headline: `${primary.brand} may be relevant, but check age suitability first.`,
      explanation:
        "This suggestion is based on your reported symptoms. Always check the label for age guidance and ask a pharmacist if unsure.",
      primary,
      alternatives,
      matchTier,
      tierDisclaimer,
      nextSteps: [
        "Check the label for age suitability and warnings.",
        "Avoid mixing medicines unless a professional says it is safe.",
        "Speak to a pharmacist if symptoms continue.",
      ],
    };
  }

  return {
    safetyLevel: "standard",
    headline: `${primary.brand} is your closest product match.`,
    explanation:
      "Based on your selected body area, age, and symptom severity, this is the best starting point.",
    primary,
    alternatives,
    matchTier,
    tierDisclaimer,
    nextSteps: [
      "Compare products within this category.",
      "Always follow label directions and warnings.",
      "Restart the finder if your symptoms change.",
    ],
  };
}

// ── Public API ─────────────────────────────────────────────────────────────

export function getRecommendation(answers: FinderAnswers): RecommendationResult {
  const { primary, alternatives, matchTier, tierDisclaimer } = pickProducts(answers);
  return buildResult(answers, primary, alternatives, matchTier, tierDisclaimer);
}
