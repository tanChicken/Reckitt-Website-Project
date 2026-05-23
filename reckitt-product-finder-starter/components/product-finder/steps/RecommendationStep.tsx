import Button from "@/components/ui/Button";
import type { RecommendationResult } from "@/types/productFinder";
import Image from "next/image";
import Link from "next/link";

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
      {/* ── Mobile back link ─────────────────────────── */}
      <button
        type="button"
        onClick={onBack}
        className="mb-3 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-deep-navy sm:hidden"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="8" x2="4" y2="8" />
          <polyline points="7,5 4,8 7,11" />
        </svg>
        Back
      </button>

      {/* ── Page header ─────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary sm:text-xs">
            Recommended Relief
          </span>
          <h1
            id="recommendation-heading"
            className="mt-2 font-display text-[1.6rem] font-bold leading-[1.2] text-deep-navy sm:text-3xl lg:text-4xl"
          >
            {recommendation.headline}
          </h1>
          <p className="mt-2 text-sm leading-6 text-secondary">
            Based on your symptoms, here is your tailored suggestion.
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={onBack}
          className="hidden shrink-0 self-start text-sm sm:inline-flex"
        >
          ← Back
        </Button>
      </div>

      {/* ── Tier 2 / 3 disclaimer banner ────────────────── */}
      {recommendation.tierDisclaimer && (
        <div className="mb-5 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 sm:mb-6 sm:gap-3 sm:px-4 sm:py-3">
          <span className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true">⚠</span>
          <p className="text-xs leading-5 text-amber-800 sm:text-sm sm:leading-6">
            <span className="font-semibold">Closest available match — </span>
            {recommendation.tierDisclaimer}
          </p>
        </div>
      )}

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
              <div className="relative flex items-center justify-center border-border-subtle bg-surface-gray p-6 md:w-2/5 md:border-r md:p-8">
                {/* Safety badge */}
                <span
                  className={[
                    "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold sm:left-4 sm:top-4 sm:px-3 sm:text-xs",
                    isStandard
                      ? "bg-reckitt-pink/10 text-reckitt-pink"
                      : "bg-amber-100 text-amber-700",
                  ].join(" ")}
                >
                  {isStandard ? "✓ Best Match" : "⚠ Safety check"}
                </span>

                {/* Image placeholder */}
                <div className="flex flex-col items-center gap-3 text-center">
                  {/* <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-surface-container-low text-3xl font-bold text-secondary">
                    {recommendation.primary.imageLabel}
                  </div>
                  <code className="text-xs text-secondary/50">
                    📁 /public/products/{recommendation.primary.id}.png
                  </code> */}
                  <img
                    src={`/products/${recommendation.primary.id}.png`}
                    alt={recommendation.primary.brand}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Product details */}
              <div className="flex flex-col justify-between p-5 md:w-3/5 md:p-8">
                <div>
                  <div className="mb-3 flex items-start justify-between gap-3 sm:mb-4">
                    <div className="min-w-0">
                      <h2 className="font-display text-xl font-bold leading-tight text-deep-navy sm:text-2xl">
                        {recommendation.primary.brand}
                      </h2>
                      <p className="mt-0.5 text-xs font-semibold text-secondary sm:text-sm">
                        {recommendation.primary.category}
                      </p>
                    </div>
                    {/* Verified badge */}
                    <span
                      className="flex shrink-0 items-center justify-center text-reckitt-pink"
                      aria-label="Verified recommendation"
                    >
                      <Image
                        src="/checkIndicator.png"
                        alt="Verified"
                        width={50}
                        height={50}
                        className="h-10 w-10 object-contain sm:h-[50px] sm:w-[50px]"
                      />
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-6 text-secondary sm:mb-5">
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

                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">
                  <Button
                    onClick={onContinue}
                    className="min-h-[52px] flex-1 border-red-600 bg-red-600 text-base font-bold text-white hover:border-red-700 hover:bg-red-700 hover:text-white sm:min-h-11 sm:text-sm"
                  >
                    View Safety Notes
                  </Button>
                  {recommendation.primary.url && (
                    <Link
                      href={recommendation.primary.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-lg border border-deep-navy px-4 text-base font-bold text-deep-navy transition-colors hover:bg-deep-navy hover:text-white sm:min-h-11 sm:text-sm sm:font-semibold"
                    >
                      View Product →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right sidebar ───────────────────────────── */}
        <div className="flex h-full flex-col gap-5 lg:col-span-4">
          {/* Safety & Warnings */}
          <div className="flex h-full flex-col rounded-xl border border-border-subtle bg-white p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-error sm:mb-5">
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

            <div className="flex flex-col gap-4 sm:gap-5">
              {[
                {
                  title: "Allergy Warning",
                  text: "Do not use if allergic to related compounds. Check the label.",
                },
                {
                  title: "Medical Conditions",
                  text: "Ask a pharmacist if pregnant, have ongoing conditions, or unsure.",
                },
                {
                  title: "Concomitant Use",
                  text: "Avoid taking similar products together. Read all labels.",
                },
              ].map(({ title, text }) => (
                <div
                  key={title}
                  className="border-b border-border-subtle pb-4 last:border-0 last:pb-0 sm:pb-5"
                >
                  <p className="text-xs font-bold tracking-wide text-deep-navy">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-secondary sm:mt-1.5 sm:leading-6">
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
