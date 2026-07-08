import { productItems } from "@/data/productFinder";
import type { Localized } from "@/lib/i18n/localized";
import type { FinderAnswers, ProductItem, RecommendationResult, AudienceId,} from "@/types/productFinder";

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

// Helper function to filter product variants based on audience suitability. This is applied after tier selection to ensure we don't exclude variants too early.
function filterVariantsForAudience(product: ProductItem, audienceId?: AudienceId): ProductItem {
  if (!product.variants || !audienceId) return product;

  const filteredVariants = product.variants.filter(variant => {
    // If no specific audience limit is set on the variant, anyone who sees the product can see the variant
    if (!variant.allowedAudiences) return true; 
    // Otherwise, check if the current user's audience is in the allowed list
    return variant.allowedAudiences.includes(audienceId);
  });

  return {
    ...product,
    variants: filteredVariants,
  };
}

// ── Tiered selection ───────────────────────────────────────────────────────

function pickProducts(answers: FinderAnswers): {
  primary: ProductItem;
  alternatives: ProductItem[];
  matchTier: 1 | 2 | 3;
  tierDisclaimer?: Localized;
} {
  const forBodyPart = productItems.filter((p) => p.needId === answers.needId);

  // No products exist for this body part at all → fall back gracefully
  if (forBodyPart.length === 0) {
    const fallback = productItems[0];
    return {
      primary: fallback,
      alternatives: [],
      matchTier: 3,
      tierDisclaimer: {
        en: "No products in our current range cover this area. Please consult a pharmacist or doctor for guidance.",
        zh: "我们目前的产品系列尚未涵盖此部位。请咨询药剂师或医生以获取指导。",
      },
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
      tierDisclaimer: {
        en: "No product in our range exactly matches your reported severity level. The suggestion below is the closest match for your age group — check the label carefully or speak to a pharmacist.",
        zh: "我们的产品系列中没有与您所述严重程度完全匹配的产品。以下建议是最适合您年龄段的最接近选择——请仔细阅读标签或咨询药剂师。",
      },
    };
  }

  // Tier 3 — only body part fits (no age or severity match)
  // Sort ascending so the most general product (lowest priority) appears first.
  const tier3 = [...forBodyPart].sort(byPriorityAsc);

  return {
    primary: tier3[0],
    alternatives: tier3.slice(1),
    matchTier: 3,
    tierDisclaimer: {
      en: "No product in our range is specifically recommended for your age group with this symptom. The suggestion below is the closest available — always consult a pharmacist or doctor before use.",
      zh: "我们的产品系列中没有专门针对您所在年龄段此症状推荐的产品。以下是最接近的可用建议——使用前请务必咨询药剂师或医生。",
    },
  };
}

// ── Safety level ───────────────────────────────────────────────────────────

function buildResult(
  answers: FinderAnswers,
  primary: ProductItem,
  alternatives: ProductItem[],
  matchTier: 1 | 2 | 3,
  tierDisclaimer?: Localized
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
  
  // Strip out any variants the current age group isn't allowed to see
  const filteredPrimary = filterVariantsForAudience(primary, answers.audienceId);
  const filteredAlternatives = alternatives.map(alt => filterVariantsForAudience(alt, answers.audienceId));

  // Product-level disclaimer overrides the tier disclaimer banner
  const effectiveDisclaimer = filteredPrimary.disclaimer ?? tierDisclaimer;

  return buildResult(answers, filteredPrimary, filteredAlternatives, matchTier, effectiveDisclaimer);
}