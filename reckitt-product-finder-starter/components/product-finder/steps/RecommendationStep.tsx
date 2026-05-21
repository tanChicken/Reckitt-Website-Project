import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { RecommendationResult } from "@/types/productFinder";

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
  const allProducts = [recommendation.primary, ...recommendation.alternatives];
  const isStandard = recommendation.safetyLevel === "standard";

  return (
    <section aria-labelledby="recommendation-heading">
      {/* Step header */}
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-pinkSoft px-3 py-1 text-xs font-black uppercase tracking-widest text-brand-pink">
            Step 3 of 4
          </span>
          <h1
            id="recommendation-heading"
            className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl"
          >
            Here are your top picks
          </h1>
          <p className="mt-2 text-slate-500">
            General product-category suggestions based on your answers.
          </p>
        </div>
        <Button variant="ghost" onClick={onBack} className="shrink-0 text-sm">
          ← Back
        </Button>
      </div>

      {/* Primary recommendation hero card */}
      <Card className="mb-5 overflow-hidden">
        <div className="grid gap-6 p-6 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:p-8">
          <div>
            <span
              className={[
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold",
                isStandard
                  ? "bg-brand-pink text-white"
                  : "bg-amber-100 text-amber-700",
              ].join(" ")}
            >
              {isStandard ? (
                <>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                  Best match
                </>
              ) : (
                <>⚠ Safety check recommended</>
              )}
            </span>
            <h2 className="mt-4 text-2xl font-black text-brand-navy sm:text-3xl">
              {recommendation.headline}
            </h2>
            <p className="mt-3 leading-7 text-slate-500">
              {recommendation.explanation}
            </p>
          </div>

          {/* Primary product visual */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-pinkSoft to-pink-100 p-5">
            <div className="grid h-24 place-items-center rounded-2xl bg-white text-3xl font-black text-brand-pink shadow-sm">
              {recommendation.primary.imageLabel}
            </div>
            <p className="mt-3 font-black text-brand-navy">
              {recommendation.primary.brand}
            </p>
            <p className="text-sm text-slate-500">
              {recommendation.primary.category}
            </p>
          </div>
        </div>
      </Card>

      {/* All product cards */}
      <div className="grid gap-3 sm:grid-cols-2">
        {allProducts.map((product, index) => (
          <Card
            key={product.id}
            className="p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cardHover"
          >
            <div className="flex gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-pinkSoft text-lg font-black text-brand-pink">
                {product.imageLabel}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-black text-brand-navy">
                    {product.brand}
                  </h3>
                  {index === 0 && (
                    <span className="rounded-full bg-brand-pink px-2.5 py-0.5 text-xs font-bold text-white">
                      Best match
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {product.description}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-pinkSoft px-2.5 py-0.5 text-xs font-semibold text-brand-pink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Safety disclaimer */}
      <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50 p-4">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-amber-700">Safety note:</span> This is
          not a medical diagnosis. Always follow product labels and consult a
          professional when unsure.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onContinue}>Safety advice →</Button>
      </div>
    </section>
  );
}
