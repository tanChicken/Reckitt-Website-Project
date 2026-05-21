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
  const selected = needOptions.find((o) => o.id === selectedNeedId);

  return (
    <section
      aria-labelledby="need-heading"
      className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start"
    >
      {/* ── Left: illustration panel ────────────────── */}
      <div className="flex flex-col gap-5">
        {/* Step label + heading */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">
            Symptom Analysis
          </span>
          <h1
            id="need-heading"
            className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight text-deep-navy sm:text-4xl"
          >
            Where does it hurt?
          </h1>
          <p className="mt-2 text-sm leading-6 text-secondary">
            Select the option that best describes your symptom to get a tailored suggestion.
          </p>
        </div>

        {/*
         * ── MEDIA PLACEMENT ──────────────────────────────────────────
         * Place a clinical body-diagram illustration here.
         * Recommended format : SVG or PNG, transparent background
         * Recommended size   : 360 × 520 px (portrait ratio)
         * File location      : /public/body-diagram.png  (or .svg)
         *
         * To activate: replace the placeholder <div> below with:
         *   <img src="/body-diagram.png" alt="Body diagram" className="h-full w-full object-contain" />
         * ─────────────────────────────────────────────────────────────
         */}
        <div className="relative flex min-h-[300px] flex-1 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-border-subtle bg-white p-8 lg:min-h-[380px]">
          {/* Soft background tint */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-surface-container-low/40 to-transparent" />

          {/* Placeholder body graphic */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface-container-low">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#475d92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="20" cy="10" r="5" />
                <path d="M12 22c0-4.4 3.6-8 8-8s8 3.6 8 8v10H12V22z" />
                <line x1="12" y1="28" x2="8" y2="38" /><line x1="28" y1="28" x2="32" y2="38" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-deep-navy">Clinical Body Diagram</p>
              <p className="mt-1 text-xs text-secondary">Place your illustration here</p>
              <code className="mt-1 block text-xs text-secondary/60">📁 /public/body-diagram.png</code>
            </div>
          </div>

          {/* Active category badge */}
          {selected && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-deep-navy px-4 py-2 text-white shadow-soft">
              <span className="text-lg leading-none">{selected.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wider">{selected.label}</span>
            </div>
          )}

          {/* "Clinical Model Active" badge when nothing selected */}
          {!selected && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-deep-navy px-4 py-2 text-white shadow-soft">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider">Clinical Model Active</span>
            </div>
          )}
        </div>

        {/* Active category info card */}
        {selected && (
          <div className="animate-fade-in rounded-xl border border-l-[3px] border-border-subtle border-l-reckitt-pink bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary">Selected symptom</p>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-2xl leading-none">{selected.icon}</span>
              <div>
                <p className="font-semibold text-deep-navy">{selected.label}</p>
                <p className="text-xs text-secondary">{selected.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Back */}
        <Button variant="ghost" onClick={onBack} className="self-start text-sm">
          ← Back
        </Button>
      </div>

      {/* ── Right: symptom / need option list ───────── */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary/60 px-1">
          Common Symptoms
        </p>
        {needOptions.map((option) => {
          const isSelected = option.id === selectedNeedId;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                "group flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-200",
                isSelected
                  ? "border-reckitt-pink bg-primary-fixed/20 shadow-sm"
                  : "border-border-subtle bg-white hover:border-secondary/40 hover:shadow-card"
              )}
              aria-pressed={isSelected}
            >
              <div className="flex items-center gap-4">
                {/* Icon circle */}
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-200",
                    isSelected
                      ? "bg-reckitt-pink/10"
                      : "bg-surface-container-low group-hover:scale-110"
                  )}
                  aria-hidden="true"
                >
                  {option.icon}
                </div>
                <div>
                  <p className={cn("text-sm font-semibold", isSelected ? "text-deep-navy" : "text-on-surface")}>
                    {option.label}
                  </p>
                  <p className="text-xs text-secondary">{option.description}</p>
                </div>
              </div>

              {/* Check / arrow indicator */}
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs transition-all duration-200",
                  isSelected
                    ? "bg-reckitt-pink text-white"
                    : "border border-border-subtle text-secondary/40 group-hover:border-reckitt-pink group-hover:text-reckitt-pink"
                )}
              >
                {isSelected ? (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                ) : (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="5" x2="7" y2="5" /><polyline points="5.5,3 7.5,5 5.5,7" />
                  </svg>
                )}
              </span>
            </button>
          );
        })}

        {/* Hint */}
        <div className="mt-1 rounded-lg border border-border-subtle bg-surface-container-low/50 p-4">
          <p className="text-xs text-secondary">
            <span className="font-semibold text-deep-navy">Not sure?</span>{" "}
            Pick the closest option — the next questions help refine the recommendation.
          </p>
        </div>
      </div>
    </section>
  );
}
