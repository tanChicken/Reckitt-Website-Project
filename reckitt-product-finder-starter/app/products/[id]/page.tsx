import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productItems } from "@/data/productFinder";
import ProductDetail from "@/components/products/ProductDetail";

interface ProductPageProps {
  params: { id: string };
}

// Pre-render a static page for every product at build time.
export function generateStaticParams() {
  return productItems.map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = productItems.find((p) => p.id === params.id);
  if (!product) return { title: "Product not found — Reckitt" };
  return {
    title: `${product.brand} — Reckitt`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productItems.find((p) => p.id === params.id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
