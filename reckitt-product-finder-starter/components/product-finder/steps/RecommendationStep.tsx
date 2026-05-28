"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/ui/Button";
import type {
  ProductFlavor,
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
  const flavors: ProductFlavor[] = product.flavors ?? [];
  const hasMultipleVariants = variants.length > 1;
  const hasFlavors = flavors.length > 0;

  // Track which variant and flavor the user is viewing. Reset when the primary product changes.
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    variants[0]?.id ?? null,
  );
  const [selectedFlavorId, setSelectedFlavorId] = useState<string | null>(
    flavors[0]?.id ?? null,
  );

  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  useEffect(() => {
    setSelectedVariantId(product.variants?.[0]?.id ?? null);
    setSelectedFlavorId(product.flavors?.[0]?.id ?? null);
  }, [product.id, product.variants, product.flavors]);

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
  const selectedFlavor: ProductFlavor | null =
    flavors.find((f) => f.id === selectedFlavorId) ?? flavors[0] ?? null;

  // Derive display values — flavor > variant > product fallback chain.
  const displayDescription =
    selectedVariant?.description ?? product.description;
  const displayUrl = selectedVariant?.url ?? product.url;
  const displayImageId =
    selectedFlavor?.imageId ?? selectedVariant?.imageId ?? product.id;
  const displayPrice = selectedVariant?.price;

  return (
    <section aria-labelledby="recommendation-heading">
      {/* ── Blurable content — blur applied when modal is open ── */}
      <div className={`transition-[filter] duration-300 ${disclaimerOpen ? "blur-sm" : ""}`}>
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
            Recommended Relief
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
                    "absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-bold sm:left-4 sm:top-4 sm:px-3 sm:text-xs",
                    "bg-reckitt-pink/10 text-reckitt-pink",
                  ].join(" ")}
                >
                  ✓ Best Match
                </span>

                {/* Product image — re-animates on every variant change */}
                <div className="flex flex-col items-center gap-3 text-center">
                  <img
                    key={`${product.id}-${selectedFlavorId ?? "noflavor"}-${selectedVariantId ?? "novariant"}`}
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

                  {/* ── Flavour selector ─────────────────────── */}
                  {hasFlavors && (
                    <div className="mb-4 sm:mb-5">
                      <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-secondary sm:text-xs">
                        Flavour
                      </p>
                      <div
                        role="radiogroup"
                        aria-label="Product flavours"
                        className="flex flex-wrap gap-2"
                      >
                        {flavors.map((flavor) => {
                          const isSelected = flavor.id === selectedFlavor?.id;
                          return (
                            <button
                              key={flavor.id}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => setSelectedFlavorId(flavor.id)}
                              className={[
                                "inline-flex min-h-[44px] items-center gap-1.5 rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-all duration-150 sm:min-h-0 sm:px-3.5 sm:py-2 sm:text-sm",                              
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reckitt-pink focus-visible:ring-offset-2",
                                isSelected
                                  ? "border-reckitt-pink bg-reckitt-pink text-white shadow-pink"
                                  : "border-border-subtle bg-white text-deep-navy hover:border-reckitt-pink/40 hover:bg-surface-container-low",
                              ].join(" ")}
                            >
                              {/* {isSelected && (
                                <svg
                                  width="10"
                                  height="10"
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
                              )} */}
                              <span>{flavor.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── Variant selector ─────────────────────── */}
                  {hasMultipleVariants && (
                    <div className="mb-4 sm:mb-5">
                      <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-secondary sm:text-xs">
                        Pack Size
                      </p>
                      <div
                        role="radiogroup"
                        aria-label="Product variants"
                        className="flex flex-wrap gap-2"
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
                                "inline-flex min-h-[44px] items-center gap-1.5 rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-all duration-150 sm:min-h-0 sm:px-3.5 sm:py-2 sm:text-sm",                              
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reckitt-pink focus-visible:ring-offset-2",
                                isSelected
                                  ? "border-reckitt-pink bg-reckitt-pink text-white shadow-pink"
                                  : "border-border-subtle bg-white text-deep-navy hover:border-reckitt-pink/40 hover:bg-surface-container-low",
                              ].join(" ")}
                            >
                              {/* {isSelected && (
                                <svg
                                  width="10"
                                  height="10"
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
                              )} */}
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
            <div className="mb-4 flex items-center gap-2 sm:mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-deep-navy">
                Product Details
              </h2>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="border-b border-border-subtle pb-4 sm:pb-5">
                <p className="text-xs font-bold tracking-wide text-deep-navy">Active Ingredient</p>
                <p className="mt-1 text-xs leading-5 text-secondary sm:mt-1.5 sm:leading-6 whitespace-pre-line">
                  {Array.isArray(product.activeIngredient) 
                    ? product.activeIngredient.join('\n') 
                    : (product.activeIngredient ?? "See product label")}
                </p>
            </div>

              <div className="border-b border-border-subtle pb-4 sm:pb-5">
                <p className="text-xs font-bold tracking-wide text-deep-navy">Dosage</p>
                <p className="mt-1 text-xs leading-5 text-secondary sm:mt-1.5 sm:leading-6 whitespace-pre-line">
                  {Array.isArray(product.dosage)
                    ? product.dosage.join('\n')
                    : (product.dosage ?? "See product label")}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold tracking-wide text-deep-navy">Key Benefits</p>
                <ul className="mt-1.5 flex flex-col gap-1">
                  {(product.keyBenefits ?? product.tags).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-1.5 text-xs leading-5 text-secondary sm:leading-6">
                      <span className="mt-0.5 shrink-0 text-reckitt-pink">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>{/* end blurable wrapper */}

{/* ── Medical Disclaimer Modal ─────────────────── */}
      {disclaimerOpen && createPortal(
        <div
          className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(228, 226, 226, 0.6)", backdropFilter: "blur(8px)" }}
          onClick={() => setDisclaimerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-modal-title"
        >
          <div
            className="animate-scale-in relative flex w-full max-h-[85vh] flex-col overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-2xl sm:max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header
            <div className="shrink-0 flex items-center justify-between gap-3 border-b border-border-subtle/60 bg-surface-container-low/30 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-error/10">
                  <Image
                    src="/caution.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <h2
                  id="disclaimer-modal-title"
                  className="text-base font-bold text-deep-navy sm:text-lg"
                >
                  Safety &amp; Warnings
                </h2>
              </div>
              <button
                onClick={() => setDisclaimerOpen(false)}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-secondary transition-colors hover:bg-surface-gray hover:text-deep-navy"
              >
                <svg width="12" height="12" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="1" y1="1" x2="10" y2="10" />
                  <line x1="10" y1="1" x2="1" y2="10" />
                </svg>
              </button>
            </div> */}

            {/* Body — scrollable, takes remaining height */}
            <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5 sm:px-8 sm:py-7">
              <div className="mb-7 flex items-start gap-3 rounded-xl border border-amber-200/60 bg-amber-50/50 p-4 shadow-sm">
                <span className="mt-0.5 text-lg" aria-hidden="true">💡</span>
                <p className="text-sm font-medium leading-relaxed text-amber-900">
                  This tool is for informational purposes only and does not constitute medical advice.
                </p>
              </div>

              <div className="flex flex-col gap-6 sm:gap-7">
                {[
                  { id: 1, title: "Product Labeling",             text: "Always read the label before use." },
                  { id: 2, title: "Medical Supervision Required", text: `Your doctor will advise you on how long you should continue to take ${product.brand}. Make sure you see your doctor at regular intervals and discuss any questions that you may have with him or her. ${product.brand} should only be taken under medical supervision.` },
                  { id: 3, title: "Contraindications",            text: `${product.brand} should not be taken by people who are allergic to salicylates or taking regular anticoagulant therapy. Precautions should be observed in patients with asthma or peptic ulcer.` },
                  { id: 4, title: "Age Restriction",              text: "Not recommended for children and teenagers below 16 years old." },
                  { id: 5, title: "Heartburn & Ulcer Warning",    text: `If you have a history of heartburn or ulcers, you may find that ${product.brand} affects your symptoms. If this occurs, consult your doctor.` },
                ].map(({ id, title, text }) => (
                  <div key={id} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-reckitt-pink/10 text-xs font-bold text-reckitt-pink ring-4 ring-white">
                      {id}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-sm font-bold tracking-wide text-deep-navy">{title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-secondary sm:leading-7">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 border-t border-border-subtle/60 bg-surface-container-low/20 px-6 py-5 sm:px-8">
              <Button
                onClick={() => setDisclaimerOpen(false)}
                className="w-full justify-center py-3.5 text-sm font-bold shadow-md transition-transform hover:scale-[1.01] active:scale-95"
              >
                I Understand
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
