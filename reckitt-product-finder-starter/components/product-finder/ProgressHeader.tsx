import { cn } from "@/lib/cn";
import Image from "next/image";

const stepLabels = [
  "Welcome",
  "Select need",
  "Answer questions",
  "Recommendation",
  "Safety",
];

interface ProgressHeaderProps {
  currentStep: number;
}

export default function ProgressHeader({ currentStep }: ProgressHeaderProps) {
  return (
    // Removed the max-w-7xl and padding constraints from the parent header
    // so the nav can span the full width of the screen
    <header className="w-full flex flex-col gap-5 pb-6">
      {/* Edge-to-edge navigation bar */}
      <nav
        className="w-full border-b border-pink-100 bg-white/90 shadow-sm backdrop-blur px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Inner container to keep logo and links aligned with the page content */}
        <div className="flex w-full items-center justify-between">
          <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to main content
          </a>
          {/*replaced text with company logo, removed weird numbered status bar
           */}
          <div className="flex items-center gap-3">
            <Image
              src="/reckitt-logo.png"
              alt="reckittLogo"
              width={120}
              height={40}
              className="object-contain rounded"
            />
          </div>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a
              href="#main-content"
              className="hover:text-brand-pink transition-colors"
            >
              Product Finder
            </a>
            <a href="#" className="hover:text-brand-pink transition-colors">
              Our Brands
            </a>
            <a href="#" className="hover:text-brand-pink transition-colors">
              Health Hub
            </a>
            <a href="#" className="hover:text-brand-pink transition-colors">
              Safety
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
