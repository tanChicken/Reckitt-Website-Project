"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import type {
  ProductVariant,
  RecommendationResult,
} from "@/types/productFinder";
import Image from "next/image";
import Link from "next/link";

interface RecommendationStepProps {
  recommendation: RecommendationResult;
  onRestart: () => void;
  onBack: () => void;
}

export default function RecommendationStep({
  recommendation,
  onRestart,
  onBack,
}: RecommendationStepProps) {
  const isStandard = recommendation.safetyLevel === "standard";
  const product = recommendation.primary;
  const variants: ProductVariant[] = product.variants ?? [];
  const hasMultipleVariants = variants.length > 1;

  // Track which variant the user is viewing. Reset whenever the primary product changes.
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    variants[0]?.id ?? null,
  );

  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  useEffect(() => {
    setSelectedVariantId(product.variants?.[0]?.id ?? null);
  }, [product.id, product.variants]);

  useEffect(() => {
    if (!disclaimerOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDisclaimerOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [disclaimerOpen]);

  const selectedVariant: ProductVariant | null =
    variants.find((v) => v.id === selectedVariantId) ?? variants[0] ?? null;

  // Derive display values — variant fields fall back to the product's own fields.
  const displayDescription =
    selectedVariant?.description ?? product.description;
  const displayUrl = selectedVariant?.url ?? product.url;
  const displayImageId = selectedVariant?.imageId ?? product.id;
  const displayPrice = selectedVariant?.price;

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
          {/* <span className="text-[11px] font-bold uppercase tracking-widest text-secondary sm:text-xs">
            RECOMMENDED RELIEF
          </span> */}
          <h1
            id="recommendation-heading"
            className="mt-2 font-display text-[1.6rem] font-bold leading-[1.2] text-deep-navy sm:text-3xl lg:text-4xl"
          >
            RECOMMENDED RELIEF
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
          <span className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true">
            ⚠
          </span>
          <p className="text-xs leading-5 text-amber-800 sm:text-sm sm:leading-6">
            <span className="font-semibold">Closest available match — </span>
            {recommendation.tierDisclaimer}
          </p>
        </div>
      )}

      {/* ── Main grid: 8 + 4 columns on large screens ── */}
      <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
        {/* ── Left: primary product + variants ───────── */}
        <div className="flex flex-col gap-5 lg:col-span-8">
          <div className="overflow-hidden rounded-xl border border-border-subtle bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
            <div className="flex flex-col md:flex-row">
              {/* ── Image column ───────────────────────────── */}
              <div className="relative flex items-center justify-center border-border-subtle bg-surface-gray p-6 md:w-2/5 md:border-r md:p-8">
                <span
                  className={[
                    "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold sm:left-4 sm:top-4 sm:px-3 sm:text-xs",
                    "bg-reckitt-pink/10 text-reckitt-pink",
                  ].join(" ")}
                >
                  ✓ Best Match
                </span>

                {/* Product image — swaps when a variant with its own imageId is selected */}
                <div className="flex flex-col items-center gap-3 text-center">
                  <img
                    key={displayImageId}
                    src={`/products/${displayImageId}.png`}
                    alt={product.brand}
                    className="h-full w-full animate-fade-slide-up object-contain"
                  />
                </div>
              </div>

              {/* ── Detail column ──────────────────────────── */}
              <div className="flex flex-col justify-between p-5 md:w-3/5 md:p-8">
                <div>
                  <div className="mb-3 flex items-start justify-between gap-3 sm:mb-4">
                    <div className="min-w-0">
                      <h2 className="font-display text-xl font-bold leading-tight text-deep-navy sm:text-2xl">
                        {product.brand}
                      </h2>
                      <p className="mt-0.5 text-xs font-semibold text-secondary sm:text-sm">
                        {product.category}
                      </p>
                      {selectedVariant?.subLabel && (
                        <p className="mt-1 text-xs font-medium text-reckitt-pink sm:text-sm">
                          {selectedVariant.subLabel}
                        </p>
                      )}
                    </div>
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
                    {displayDescription}
                  </p>

                  {/* ── Variant selector ─────────────────────── */}
                  {hasMultipleVariants && (
                    <div className="mb-4 sm:mb-5">
                      <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-secondary sm:text-xs">
                        Available options
                      </p>
                      <div
                        role="radiogroup"
                        aria-label="Product variants"
                        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible"
                      >
                        {variants.map((variant) => {
                          const isSelected = variant.id === selectedVariant?.id;
                          return (
                            <button
                              key={variant.id}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => setSelectedVariantId(variant.id)}
                              className={[
                                "group inline-flex shrink-0 items-center gap-2 rounded-full border-2 px-3.5 py-2 text-sm font-semibold transition-all duration-150",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reckitt-pink focus-visible:ring-offset-2",
                                isSelected
                                  ? "border-reckitt-pink bg-reckitt-pink text-white shadow-pink"
                                  : "border-border-subtle bg-white text-deep-navy hover:border-reckitt-pink/40 hover:bg-surface-container-low",
                              ].join(" ")}
                            >
                              {isSelected && (
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <polyline points="2,6 5,9 10,3" />
                                </svg>
                              )}
                              <span>{variant.label}</span>
                              {variant.price && (
                                <span
                                  className={[
                                    "text-xs font-bold",
                                    isSelected
                                      ? "text-white/90"
                                      : "text-secondary",
                                  ].join(" ")}
                                >
                                  {variant.price}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-subtle bg-surface-container-low px-2.5 py-0.5 text-xs font-semibold text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">
                  <Button
                    onClick={onRestart}
                    variant ="primary"
                    className="text-sm font-bold">
                    Start Over
                  </Button>
                  <Button
                      onClick={() => setDisclaimerOpen(true)}
                      variant="ghost"
                      className="text-sm font-bold bg-white text-surface border border-border-subtle hover:bg-surface-hover hover:text-surface-dark transition-colors"
                    >
                      Medical Disclaimer
                    </Button>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right sidebar ───────────────────────────── */}
        <div className="flex h-full flex-col gap-5 lg:col-span-4">
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
