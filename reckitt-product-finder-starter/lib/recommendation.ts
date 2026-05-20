import { productItems } from "@/data/productFinder";
import type { FinderAnswers, ProductItem, RecommendationResult } from "@/types/productFinder";

const fallbackProduct = productItems[0];

export function getRecommendation(answers: FinderAnswers): RecommendationResult {
  const primary: ProductItem =
    productItems.find((product) => product.needId === answers.needId) ?? fallbackProduct;

  const alternatives = productItems.filter((product) => product.id !== primary.id).slice(0, 3);

  const isMedicalNeed = ["sore-throat", "pain-fever", "cough-mucus", "heartburn"].includes(
    answers.needId ?? ""
  );

  const needsProfessionalAdvice =
    answers.severityId === "severe" ||
    answers.severityId === "not-sure" ||
    (answers.audienceId === "child" && isMedicalNeed);

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
        "Get urgent help if symptoms feel severe or worrying."
      ]
    };
  }

  if (isMedicalNeed && answers.audienceId === "teen") {
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
        "Speak to a pharmacist if symptoms continue."
      ]
    };
  }

  return {
    safetyLevel: "standard",
    headline: `${primary.brand} is your closest product category match.`,
    explanation:
      "Based on the selected need and preferences, this category is the best starting point for product discovery.",
    primary,
    alternatives,
    nextSteps: [
      "Compare products within this category.",
      "Always follow label directions and warnings.",
      "Restart the finder if the need changes."
    ]
  };
}
