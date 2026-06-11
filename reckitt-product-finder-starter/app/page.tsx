import { Suspense } from "react";
import ProductFinder from "@/components/product-finder/ProductFinder";

export default function HomePage() {
  // ProductFinder reads the wizard state from the URL via useSearchParams,
  // which must be wrapped in a Suspense boundary in the App Router.
  return (
    <Suspense fallback={null}>
      <ProductFinder />
    </Suspense>
  );
}
