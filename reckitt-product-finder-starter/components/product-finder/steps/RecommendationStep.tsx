import Button from "@/components/ui/Button";
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
  const isStandard = recommendation.safetyLevel === "standard";

  return (
    <section aria-labelledby="recommendation-heading">
      {/* ── Page header ─────────────────────────────── */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">
            Recommended Relief
          </span>
          <h1
            id="recommendation-heading"
            className="mt-2 font-display text-3xl font-bold leading-tight text-deep-navy sm:text-4xl"
          >
            {recommendation.headline}
          </h1>
          <p className="mt-2 text-sm leading-6 text-secondary">
            Based on your reported symptoms, our clinical engine suggests the following care plan.
          </p>
        </div>
        <Button variant="ghost" onClick={onBack} className="shrink-0 text-sm">
          ← Back
        </Button>
      </div>

      {/* ── Main grid: 8 + 4 columns on large screens ── */}
      <div className="grid gap-5 lg:grid-cols-12 lg:items-start">

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
                    <span className="text-reckitt-pink" aria-label="Verified recommendation">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 11l2 2 4-4" /><circle cx="10" cy="10" r="8" />
                      </svg>
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
                  <Button className="flex-1 gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 2h2l1.5 7.5h7L14 6H5.5" /><circle cx="7" cy="13" r="1" /><circle cx="12" cy="13" r="1" />
                    </svg>
                    Find at Pharmacy
                  </Button>
                  <Button variant="secondary" onClick={onContinue} className="flex-1">
                    View Safety Notes
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary care advice */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: "💧", title: "Stay Hydrated",   text: "Increase fluid intake to support recovery." },
              { icon: "😴", title: "Rest and Recover", text: "Allow the body to manage inflammation effectively." },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-border-subtle bg-surface-container p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-card">
                  {icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-deep-navy">{title}</h3>
                  <p className="mt-0.5 text-sm text-secondary">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Alternative products */}
          {recommendation.alternatives.length > 0 && (
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary/60">
                Also Consider
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {recommendation.alternatives.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 rounded-xl border border-border-subtle bg-white p-4 transition-shadow hover:shadow-card"
                  >
                    {/*
                     * ── MEDIA PLACEMENT (alternative product) ──────────
                     * File: /public/products/{product.id}.png
                     * To activate: replace the initials div with <img>
                     * ───────────────────────────────────────────────────
                     */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-surface-container-low text-sm font-bold text-secondary">
                      {product.imageLabel}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-deep-navy">{product.brand}</p>
                      <p className="mt-0.5 text-xs leading-5 text-secondary line-clamp-2">{product.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {product.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="rounded-full bg-surface-container-low px-2 py-0.5 text-xs font-medium text-secondary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Right sidebar ───────────────────────────── */}
        <div className="flex flex-col gap-5 lg:col-span-4">

          {/* Safety & Warnings */}
          <div className="rounded-xl border border-border-subtle bg-white p-6">
            <div className="mb-5 flex items-center gap-2 text-error">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 2L1 15h16L9 2z" /><line x1="9" y1="8" x2="9" y2="11" /><circle cx="9" cy="13.5" r="0.5" fill="currentColor" />
              </svg>
              <h2 className="text-xs font-bold uppercase tracking-wider">Safety &amp; Warnings</h2>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: "Allergy Warning",     text: "Do not use if allergic to related compounds. Check product label before use." },
                { title: "Medical Conditions",  text: "Consult a pharmacist if you have ongoing conditions, are pregnant, or are unsure." },
                { title: "Concomitant Use",      text: "Avoid taking similar products simultaneously. Read all labels carefully." },
              ].map(({ title, text }) => (
                <div key={title} className="border-b border-border-subtle pb-4 last:border-0 last:pb-0">
                  <p className="text-xs font-bold text-deep-navy">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-secondary">{text}</p>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full text-center text-xs font-semibold text-reckitt-pink hover:underline">
              Download Full Patient Leaflet
            </button>
          </div>

          {/* Need help? card */}
          <div className="relative overflow-hidden rounded-xl bg-deep-navy p-6 text-white">
            <div className="relative z-10">
              <h3 className="font-display text-lg font-bold">Need Help?</h3>
              <p className="mt-1 text-sm text-secondary-fixed-dim">
                Our team is available if your symptoms persist or worsen.
              </p>
              <Button
                variant="secondary"
                className="mt-5 w-full !border-white/20 !text-white hover:!bg-white/10"
              >
                Talk to a Pharmacist
              </Button>
            </div>
            {/* Decorative blob */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-reckitt-pink/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
