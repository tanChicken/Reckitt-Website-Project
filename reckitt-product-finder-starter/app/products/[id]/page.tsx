import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productItems } from "@/data/productFinder";
import { PRODUCT_PAGES_ENABLED } from "@/lib/featureFlags";
import { tx } from "@/lib/i18n/localized";
import ProductDetail from "@/components/products/ProductDetail";

interface ProductPageProps {
  params: { id: string };
}

// Pre-render a static page for every product at build time.
// While the feature is disabled we generate no pages at all.
export function generateStaticParams() {
  if (!PRODUCT_PAGES_ENABLED) return [];
  return productItems.map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = productItems.find((p) => p.id === params.id);
  if (!product) return { title: "Product not found — Reckitt" };
  return {
    title: `${product.brand} — Reckitt`,
    description: tx(product.description, "en"),
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // Feature disabled → block direct-link access with a 404. See lib/featureFlags.ts.
  if (!PRODUCT_PAGES_ENABLED) notFound();

  const product = productItems.find((p) => p.id === params.id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
