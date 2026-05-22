import { productItems } from "@/data/productFinder";
import type { FinderAnswers, ProductItem, RecommendationResult } from "@/types/productFinder";

/**
 * Score a product against the user's answers.
 * +2 for audience match, +2 for severity match.
 * Omitting suitableFor.audiences or .severities means "suitable for all" — still scores +2.
 */
function scoreProduct(product: ProductItem, answers: FinderAnswers): number {
  let score = 0;
  const { audiences, severities } = product.suitableFor ?? {};

  const audienceMatch = !audiences || !answers.audienceId || audiences.includes(answers.audienceId);
  const severityMatch = !severities || !answers.severityId || severities.includes(answers.severityId);

  if (audienceMatch) score += 2;
  if (severityMatch) score += 2;

  return score;
}

export function getRecommendation(answers: FinderAnswers): RecommendationResult {
  // Filter to this body part, then rank by how well they match age + severity
  const candidates = productItems
    .filter((p) => p.needId === answers.needId)
    .map((p) => ({ product: p, score: scoreProduct(p, answers) }))
    .sort((a, b) => b.score - a.score);

  const primary: ProductItem = candidates[0]?.product ?? productItems[0];
  const alternatives: ProductItem[] = candidates.slice(1).map((c) => c.product);

  const needsProfessionalAdvice =
    answers.severityId === "severe" ||
    answers.severityId === "not-sure" ||
    (answers.audienceId === "child" && answers.needId !== undefined);

  if (needsProfessionalAdvice) {
    return {
      safetyLevel: "professional-advice",
      headline: "Ask a pharmacist or doctor before choosing a product.",
      explanation:
        "Your answers suggest that professional guidance is the safest next step before selecting a health-related product.",
      primary,
      alternatives,
      nextSteps: [
        "Read the product label and age guidance carefully.",
        "Tell the pharmacist about age, allergies, and current medicines.",
        "Get urgent help if symptoms feel severe or worrying.",
      ],
    };
  }

  if (answers.audienceId === "teen") {
    return {
      safetyLevel: "caution",
      headline: `${primary.brand} may be a relevant category, but check suitability first.`,
      explanation:
        "This is a general product category suggestion. Always check the label and ask a pharmacist if unsure.",
      primary,
      alternatives,
      nextSteps: [
        "Check the label for age suitability and warnings.",
        "Avoid mixing medicines unless a professional says it is safe.",
        "Speak to a pharmacist if symptoms continue.",
      ],
    };
  }

  return {
    safetyLevel: "standard",
    headline: `${primary.brand} is your closest product category match.`,
    explanation:
      "Based on your selected body area, age, and symptom severity, this is the best starting point for product discovery.",
    primary,
    alternatives,
    nextSteps: [
      "Compare products within this category.",
      "Always follow label directions and warnings.",
      "Restart the finder if the need changes.",
    ],
  };
}
