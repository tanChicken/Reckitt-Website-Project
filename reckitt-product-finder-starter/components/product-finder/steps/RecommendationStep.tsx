import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { RecommendationResult } from "@/types/productFinder";

interface RecommendationStepProps {
  recommendation: RecommendationResult;
  onContinue: () => void;
  onBack: () => void;
}

export default function RecommendationStep({ recommendation, onContinue, onBack }: RecommendationStepProps) {
  const allProducts = [recommendation.primary, ...recommendation.alternatives];

  return (
    <section aria-labelledby="recommendation-heading">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-pink">Step 3</p>
          <h1 id="recommendation-heading" className="mt-2 text-4xl font-black text-brand-navy">
            Here are our top picks for you
          </h1>
          <p className="mt-2 text-slate-600">These are general product-category suggestions based on your answers.</p>
        </div>
        <Button variant="ghost" onClick={onBack}>← Back</Button>
      </div>

      <Card className="mb-6 overflow-hidden p-6">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-brand-pink px-4 py-2 text-sm font-bold text-white">
              {recommendation.safetyLevel === "standard" ? "Best match" : "Safety check needed"}
            </span>
            <h2 className="mt-4 text-3xl font-black text-brand-navy">{recommendation.headline}</h2>
            <p className="mt-3 leading-8 text-slate-600">{recommendation.explanation}</p>
          </div>
          <div className="rounded-[2rem] bg-brand-pinkSoft p-5">
            <div className="grid h-32 place-items-center rounded-[1.5rem] bg-white text-4xl font-black text-brand-pink shadow-sm">
              {recommendation.primary.imageLabel}
            </div>
            <p className="mt-4 text-xl font-black text-brand-navy">{recommendation.primary.brand}</p>
            <p className="text-slate-600">{recommendation.primary.category}</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {allProducts.map((product, index) => (
          <Card key={product.id} className="p-5">
            <div className="flex gap-4">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-brand-pinkSoft text-xl font-black text-brand-pink">
                {product.imageLabel}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-black text-brand-navy">{product.brand}</h3>
                  {index === 0 && (
                    <span className="rounded-full bg-brand-pink px-3 py-1 text-xs font-bold text-white">Best match</span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">{product.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-brand-pink">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-5">
        <p className="text-sm text-slate-600">
          <strong className="text-brand-pink">Safety note:</strong> This is not medical diagnosis. Always follow product labels and consult a professional when unsure.
        </p>
      </Card>

      <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
        <Button variant="secondary" onClick={onBack}>Back</Button>
        <Button onClick={onContinue}>Safety advice →</Button>
      </div>
    </section>
  );
}
