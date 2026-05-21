import Button from "@/components/ui/Button";
import { needOptions } from "@/data/productFinder";
import { cn } from "@/lib/cn";
import type { NeedId } from "@/types/productFinder";

interface NeedSelectionStepProps {
  selectedNeedId?: NeedId;
  onSelect: (needId: NeedId) => void;
  onBack: () => void;
}

export default function NeedSelectionStep({
  selectedNeedId,
  onSelect,
  onBack,
}: NeedSelectionStepProps) {
  return (
    <section aria-labelledby="need-heading">
      {/* Step header */}
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-pinkSoft px-3 py-1 text-xs font-black uppercase tracking-widest text-brand-pink">
            Step 1 of 4
          </span>
          <h1
            id="need-heading"
            className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl"
          >
            What do you need help with today?
          </h1>
          <p className="mt-2 text-slate-500">
            Choose the option that best describes your need.
          </p>
        </div>
        <Button variant="ghost" onClick={onBack} className="shrink-0 text-sm">
          ← Back
        </Button>
      </div>

      {/* Need options grid */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {needOptions.map((option) => {
          const selected = option.id === selectedNeedId;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                "group relative rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5",
                selected
                  ? "border-brand-pink bg-brand-pinkSoft shadow-pink ring-1 ring-brand-pink"
                  : "border-slate-200 bg-white shadow-card hover:border-pink-300 hover:shadow-cardHover"
              )}
              aria-pressed={selected}
            >
              <div className="flex items-start justify-between gap-3">
                {/* Icon */}
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-colors",
                    selected ? "bg-white shadow-sm" : "bg-brand-pinkSoft"
                  )}
                  aria-hidden="true"
                >
                  {option.icon}
                </div>
                {/* Check/arrow indicator */}
                <div
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors",
                    selected
                      ? "bg-brand-pink text-white"
                      : "border border-slate-200 text-slate-300 group-hover:border-brand-pink group-hover:text-brand-pink"
                  )}
                >
                  {selected ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1.5,5 4,7.5 8.5,2.5" />
                    </svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="5" x2="7" y2="5" />
                      <polyline points="5.5,3 7.5,5 5.5,7" />
                    </svg>
                  )}
                </div>
              </div>
              <h2
                className={cn(
                  "mt-4 text-base font-black transition-colors",
                  selected ? "text-brand-pink" : "text-brand-navy"
                )}
              >
                {option.label}
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Hint */}
      <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-sm text-slate-500">
          <span className="font-semibold text-brand-pink">Not sure?</span> Pick the
          closest option — the next questions help refine the recommendation.
        </p>
      </div>
    </section>
  );
}
