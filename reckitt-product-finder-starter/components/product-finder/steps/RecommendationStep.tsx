import Button from "@/components/ui/Button";
import type { RecommendationResult } from "@/types/productFinder";
import Image from "next/image";

interface RecommendationStepProps {
  recommendation: RecommendationResult;
  onContinue: () => void;
  onBack: () => void;
}

export default function RecommendationStep({
  recommendation,
  onContinue,
  onBack,
}: RecommendationStepProps) {
  const isStandard = recommendation.safetyLevel === "standard";

  return (
    <section aria-labelledby="recommendation-heading">
      {/* ── Page header ─────────────────────────────── */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">
            Recommended Relief
          </span>
          <h1
            id="recommendation-heading"
            className="mt-2 font-display text-2xl font-bold leading-tight text-deep-navy sm:text-3xl lg:text-4xl"
          >
            {recommendation.headline}
          </h1>
          <p className="mt-2 text-sm leading-6 text-secondary">
            Based on your reported symptoms, our clinical engine suggests the
            following care plan.
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={onBack}
          className="shrink-0 self-start text-sm"
        >
          ← Back
        </Button>
      </div>

      {/* ── Main grid: 8 + 4 columns on large screens ── */}
      <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
        {/* ── Left: primary product + care advice ─────── */}
        <div className="flex flex-col gap-5 lg:col-span-8">
          {/* Primary product card */}
          <div className="overflow-hidden rounded-xl border border-border-subtle bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
            <div className="flex flex-col md:flex-row">
              {/*
               * ── MEDIA PLACEMENT ────────────────────────────────────
               * Place the primary product image here.
               * Recommended : studio white-background PNG, no shadow
               * Size        : 400 × 400 px minimum
               * File        : /public/products/[product-id].png
               *               e.g. /public/products/nurofen.png
               *
               * To activate: replace the placeholder block below with:
               *   <img
               *     src={`/products/${recommendation.primary.id}.png`}
               *     alt={recommendation.primary.brand}
               *     className="w-full h-full object-contain"
               *   />
               * ───────────────────────────────────────────────────────
               */}
              <div className="relative flex items-center justify-center border-border-subtle bg-surface-gray p-8 md:w-2/5 md:border-r">
                {/* Safety badge */}
                <span
                  className={[
                    "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold",
                    isStandard
                      ? "bg-reckitt-pink/10 text-reckitt-pink"
                      : "bg-amber-100 text-amber-700",
                  ].join(" ")}
                >
                  {isStandard ? "✓ Best Match" : "⚠ Safety check recommended"}
                </span>

                {/* Image placeholder */}
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-surface-container-low text-3xl font-bold text-secondary">
                    {recommendation.primary.imageLabel}
                  </div>
                  <code className="text-xs text-secondary/50">
                    📁 /public/products/{recommendation.primary.id}.png
                  </code>
                </div>
              </div>

              {/* Product details */}
              <div className="flex flex-col justify-between p-6 md:w-3/5 md:p-8">
                <div>
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-deep-navy">
                        {recommendation.primary.brand}
                      </h2>
                      <p className="text-sm font-semibold text-secondary">
                        {recommendation.primary.category}
                      </p>
                    </div>
                    {/* Verified Recommendation Image */}
                    <span
                      className="text-reckitt-pink flex items-center justify-center"
                      aria-label="Verified recommendation"
                    >
                      <Image
                        src="/checkIndicator.png"
                        alt="Verified"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-6 text-secondary">
                    {recommendation.explanation}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {recommendation.primary.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-subtle bg-surface-container-low px-2.5 py-0.5 text-xs font-semibold text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={onContinue}
                    className="flex-1 bg-red-600 text-white border-red-600 hover:bg-red-700 hover hover:text-white hover:border-red-700"
                  >
                    View Safety Notes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right sidebar ───────────────────────────── */}
        <div className="flex h-full flex-col gap-5 lg:col-span-4">
          {/* Safety & Warnings */}
          <div className="flex h-full flex-col rounded-xl border border-border-subtle bg-white p-6">
            <div className="mb-5 flex items-center gap-2 text-error">
              <span className="flex h-5 w-5 items-center justify-center">
                <Image
                  src="/caution.png"
                  alt="Safety warning"
                  width={80}
                  height={80}
                  className="object-contain"
                  aria-hidden="true"
                />
              </span>
              <h2 className="text-xs font-bold uppercase tracking-wider">
                Safety &amp; Warnings
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  title: "Allergy Warning",
                  text: "Do not use if allergic to related compounds. Check product label before use.",
                },
                {
                  title: "Medical Conditions",
                  text: "Consult a pharmacist if you have ongoing conditions, are pregnant, or are unsure.",
                },
                {
                  title: "Concomitant Use",
                  text: "Avoid taking similar products simultaneously. Read all labels carefully.",
                },
              ].map(({ title, text }) => (
                <div
                  key={title}
                  className="border-b border-border-subtle pb-5 last:border-0 last:pb-0"
                >
                  <p className="text-xs font-bold tracking-wide text-deep-navy">
                    {title}
                  </p>
                  <p className="mt-1.5 text-xs leading-6 tracking-wide text-secondary">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
