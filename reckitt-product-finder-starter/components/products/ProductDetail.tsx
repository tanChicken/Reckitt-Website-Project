"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type {
  ProductFlavor,
  ProductItem,
  ProductVariant,
} from "@/types/productFinder";

interface ProductDetailProps {
  product: ProductItem;
}

/**
 * Standalone, shareable product page body. Mirrors the variant/flavour display
 * logic used inside the recommendation step so a product looks the same whether
 * it is reached through the finder or via a direct /products/<id> link.
 */
export default function ProductDetail({ product }: ProductDetailProps) {
  const variants: ProductVariant[] = product.variants ?? [];
  const flavors: ProductFlavor[] = product.flavors ?? [];
  const hasVariants = variants.length > 0;
  const hasFlavors = flavors.length > 0;

  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    variants[0]?.id ?? null,
  );
  const [selectedFlavorId, setSelectedFlavorId] = useState<string | null>(
    flavors[0]?.id ?? null,
  );

  useEffect(() => {
    setSelectedVariantId(product.variants?.[0]?.id ?? null);
    setSelectedFlavorId(product.flavors?.[0]?.id ?? null);
  }, [product.id, product.variants, product.flavors]);

  const selectedVariant: ProductVariant | null =
    variants.find((v) => v.id === selectedVariantId) ?? variants[0] ?? null;
  const selectedFlavor: ProductFlavor | null =
    flavors.find((f) => f.id === selectedFlavorId) ?? flavors[0] ?? null;

  // Derive display values — flavor+variant combo > flavor-only > variant-only > product fallback.
  const displayDescription = selectedVariant?.description ?? product.description;
  const displayUrl = selectedVariant?.url ?? product.url;
  const displayImageId =
    selectedFlavor && selectedVariant
      ? `${product.id}-${selectedFlavor.id}-${selectedVariant.id}`
      : selectedFlavor?.imageId ?? selectedVariant?.imageId ?? product.id;
  const displayPrice = selectedVariant?.price;
  const displayActiveIngredient =
    selectedVariant?.activeIngredient ?? product.activeIngredient;
  const displayDosage = selectedVariant?.dosage ?? product.dosage;
  const displayKeyBenefits =
    selectedVariant?.keyBenefits ?? product.keyBenefits ?? product.tags;
  const displayDisclaimerPoints =
    selectedVariant?.disclaimerPoints ?? product.disclaimerPoints ?? [];

  return (
    <>
      {/* ── Navigation ──────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border-subtle bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-container-max items-center justify-between px-4 py-4 sm:px-8 lg:px-16">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/reckitt-logo.png"
              alt="Reckitt"
              width={100}
              height={32}
              className="object-contain"
              priority
            />
          </Link>
          <Link
            href="/products"
            className="text-sm font-semibold text-secondary transition-colors hover:text-reckitt-pink"
          >
            ← All products
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-container-max px-4 py-8 sm:px-8 sm:py-12 lg:px-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold text-secondary">
          <Link href="/products" className="hover:text-reckitt-pink">
            Products
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-deep-navy">{product.brand}</span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* ── Left: image + variants ──────────────── */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-border-subtle bg-white shadow-card">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative flex items-center justify-center border-border-subtle bg-surface-gray p-6 md:w-2/5 md:border-r md:p-8">
                  <span className="absolute left-3 top-3 z-10 rounded border border-border-subtle bg-white px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-secondary">
                    {product.tags[0]}
                  </span>
                  <img
                    key={`${product.id}-${selectedFlavorId ?? "noflavor"}-${selectedVariantId ?? "novariant"}`}
                    src={`/products/${displayImageId}.png`}
                    alt={product.brand}
                    className="h-full w-full animate-fade-slide-up object-contain"
                  />
                </div>

                {/* Detail */}
                <div className="flex flex-col justify-between p-5 md:w-3/5 md:p-8">
                  <div>
                    <h1 className="font-display text-2xl font-bold leading-tight text-deep-navy sm:text-3xl">
                      {product.brand}
                    </h1>
                    <p className="mt-1 text-xs font-semibold text-secondary sm:text-sm">
                      {product.category}
                    </p>
                    {selectedVariant?.subLabel && (
                      <p className="mt-1 text-xs font-medium text-reckitt-pink sm:text-sm">
                        {selectedVariant.subLabel}
                      </p>
                    )}
                    {displayPrice && (
                      <p className="mt-3 text-lg font-bold text-deep-navy">
                        {displayPrice}
                      </p>
                    )}

                    <p className="mb-4 mt-4 text-sm leading-6 text-secondary">
                      {displayDescription}
                    </p>

                    {/* Variant selector */}
                    {hasVariants && (
                      <div className="mb-4 sm:mb-5">
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-secondary sm:text-xs">
                          {product.variantLabel ?? "Pack Size"}
                        </p>
                        <div role="radiogroup" aria-label="Product variants" className="flex flex-wrap gap-2">
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
                                <span>{variant.label}</span>
                                {variant.price && (
                                  <span className={["text-xs font-bold", isSelected ? "text-white/90" : "text-secondary"].join(" ")}>
                                    {variant.price}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Flavour selector */}
                    {hasFlavors && (
                      <div className="mb-4 sm:mb-5">
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-secondary sm:text-xs">
                          Flavour
                        </p>
                        <div role="radiogroup" aria-label="Product flavours" className="flex flex-wrap gap-2">
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
                                <span>{flavor.label}</span>
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
                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                    {displayUrl && (
                      <a
                        href={displayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-reckitt-pink px-6 py-3 text-sm font-bold text-white shadow-pink transition-all hover:brightness-110 active:scale-95"
                      >
                        Where to buy
                      </a>
                    )}
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center rounded-lg border border-border-subtle bg-white px-6 py-3 text-sm font-bold text-deep-navy transition-colors hover:bg-surface-container-low"
                    >
                      Find my product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: product details ──────────────── */}
          <aside className="lg:col-span-5">
            <div className="rounded-xl border border-border-subtle bg-white p-4 sm:p-6">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-deep-navy sm:mb-5">
                Product Details
              </h2>

              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="border-b border-border-subtle pb-4 sm:pb-5">
                  <p className="text-xs font-bold tracking-wide text-deep-navy">Active Ingredient</p>
                  <p className="mt-1 whitespace-pre-line text-xs leading-5 text-secondary sm:mt-1.5 sm:leading-6">
                    {Array.isArray(displayActiveIngredient)
                      ? displayActiveIngredient.join("\n")
                      : displayActiveIngredient ?? "See product label"}
                  </p>
                </div>

                <div className="border-b border-border-subtle pb-4 sm:pb-5">
                  <p className="text-xs font-bold tracking-wide text-deep-navy">Dosage</p>
                  <p className="mt-1 whitespace-pre-line text-xs leading-5 text-secondary sm:mt-1.5 sm:leading-6">
                    {Array.isArray(displayDosage)
                      ? displayDosage.join("\n")
                      : displayDosage ?? "Follow label instructions"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold tracking-wide text-deep-navy">Key Benefits</p>
                  <ul className="mt-1.5 flex flex-col gap-1">
                    {displayKeyBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-1.5 text-xs leading-5 text-secondary sm:leading-6">
                        <span className="mt-0.5 shrink-0 text-reckitt-pink">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Safety / disclaimer */}
            {displayDisclaimerPoints.length > 0 && (
              <div className="mt-5 rounded-xl border border-amber-200/60 bg-amber-50/50 p-4 sm:p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-amber-800">
                  Safety &amp; Warnings
                </p>
                <ul className="flex flex-col gap-3">
                  {displayDisclaimerPoints.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-reckitt-pink/10 text-xs font-bold text-reckitt-pink">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-secondary">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-4 px-1 text-xs leading-5 text-secondary/70">
              This tool is for informational purposes only and does not constitute
              medical advice. Always read the label and consult a healthcare
              professional if symptoms are severe or persistent.
            </p>
          </aside>
        </div>
      </main>
    </>
  );
}
