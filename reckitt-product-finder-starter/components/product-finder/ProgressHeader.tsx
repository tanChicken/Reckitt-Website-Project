import { cn } from "@/lib/cn";

const stepLabels = ["Welcome", "Select need", "Answer questions", "Recommendation", "Safety"];

interface ProgressHeaderProps {
  currentStep: number;
}

export default function ProgressHeader({ currentStep }: ProgressHeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between rounded-full border border-pink-100 bg-white/90 px-5 py-3 shadow-sm backdrop-blur" aria-label="Main navigation">
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-pink text-lg font-black text-white">
            r
          </div>
          <div>
            <p className="text-sm font-black text-brand-pink">reckitt</p>
            <p className="text-xs text-slate-500">Product Finder</p>
          </div>
        </div>
        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          <a href="#main-content" className="hover:text-brand-pink">Product Finder</a>
          <a href="#" className="hover:text-brand-pink">Our Brands</a>
          <a href="#" className="hover:text-brand-pink">Health Hub</a>
          <a href="#" className="hover:text-brand-pink">Safety</a>
        </div>
      </nav>

      <div className="rounded-3xl border border-pink-100 bg-white/70 p-4 shadow-sm">
        <ol className="grid gap-2 sm:grid-cols-5" aria-label="Product finder progress">
          {stepLabels.map((label, index) => {
            const active = currentStep === index;
            const complete = currentStep > index;
            return (
              <li
                key={label}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-bold",
                  active && "bg-brand-pinkSoft text-brand-pink",
                  complete && "text-brand-pink",
                  !active && !complete && "text-slate-500"
                )}
                aria-current={active ? "step" : undefined}
              >
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs",
                    active || complete
                      ? "border-brand-pink bg-brand-pink text-white"
                      : "border-slate-200 bg-white text-slate-500"
                  )}
                >
                  {complete ? "✓" : index + 1}
                </span>
                <span>{label}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </header>
  );
}
