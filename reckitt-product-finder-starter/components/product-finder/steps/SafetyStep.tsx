import Button from "@/components/ui/Button";
import type { RecommendationResult } from "@/types/productFinder";
import Image from "next/image";

interface SafetyStepProps {
  recommendation: RecommendationResult;
  onRestart: () => void;
  onBack: () => void;
}

const safetyCards = [
  {
    icon: "/read.png",
    title: "Always read the label",
    text: "Use as directed. Check warnings, dosage, age suitability, and storage guidance.",
  },
  {
    icon: "/user.png",
    title: "Talk to a pharmacist or doctor",
    text: "Do this if symptoms are severe, last more than a few days, or if you are unsure.",
  },
  {
    icon: "/shield.png",
    title: "Emergency guidance",
    text: "Seek immediate medical help if symptoms feel urgent or worrying.",
  },
  {
    icon: "/restart.png",
    title: "Restart anytime",
    text: "If your need changes, restart the finder for a fresh recommendation.",
  },
];

export default function SafetyStep({
  recommendation,
  onRestart,
  onBack,
}: SafetyStepProps) {
  return (
    <section aria-labelledby="safety-heading" className="pb-24 sm:pb-0">
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

      {/* ── Header ─────────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary sm:text-xs">
            Safety &amp; Next Steps
          </span>
          <h1
            id="safety-heading"
            className="mt-2 font-display text-[2rem] font-bold leading-[1.15] text-deep-navy sm:text-3xl lg:text-4xl"
          >
            Use safely. Feel better.
          </h1>
          <p className="mt-2 text-sm text-secondary sm:text-base">
            Your wellbeing comes first.
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

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1fr_1.4fr]">
        {/* ── Left: recommendation summary ─────────── */}
        <div className="flex flex-col items-center rounded-2xl border border-border-subtle bg-white p-5 text-center sm:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-reckitt-pink shadow-pink sm:h-16 sm:w-16">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2L3 7v7c0 6.1 4.7 11.8 11 13 6.3-1.2 11-6.9 11-13V7L14 2z" />
              <polyline points="9,14 12,17 19,10" />
            </svg>
          </div>
          <h2 className="mt-3 font-display text-base font-bold text-deep-navy sm:mt-4 sm:text-lg">
            Safety-first recommendation
          </h2>
          <p className="mt-1.5 text-sm text-secondary sm:mt-2">
            Suggested:{" "}
            <strong className="font-bold text-deep-navy">
              {recommendation.primary.brand}
            </strong>
          </p>

          {/* Next steps list */}
          <div className="mt-4 w-full rounded-xl border border-border-subtle bg-surface-container-low/50 p-3 text-left sm:mt-5 sm:p-4">
            {recommendation.nextSteps.map((step) => (
              <div key={step} className="flex items-start gap-2.5 py-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="mt-0.5 shrink-0 text-reckitt-pink"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="2,7 5.5,10.5 12,3.5" />
                </svg>
                <p className="text-sm leading-5 text-on-surface sm:leading-6">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: safety guidance cards ─────────── */}
        <div className="grid content-start gap-2.5 sm:gap-3">
          {safetyCards.map(({ icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl border border-border-subtle bg-white p-3.5 sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-container-low">
                <Image
                  src={icon}
                  alt=""
                  width={62}
                  height={62}
                  className="h-8 w-8 object-contain"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-bold text-deep-navy">{title}</h3>
                <p className="mt-0.5 text-xs leading-5 text-secondary sm:mt-1 sm:text-sm sm:leading-6">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop actions ───────────────────────── */}
      <div className="mt-8 hidden flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-6 sm:flex">
        <Button variant="secondary" onClick={onRestart}>
          Start over
        </Button>
        <Button
          onClick={() =>
            alert(
              "Connect this to your product page, pharmacy locator, or CRM flow.",
            )
          }
          className="gap-2"
        >
          View products
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="3" y1="7" x2="11" y2="7" />
            <polyline points="8.5,4.5 11,7 8.5,9.5" />
          </svg>
        </Button>
      </div>

      {/* ── Mobile sticky bottom CTAs ─────────────── */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border-subtle bg-white/95 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 shadow-[0_-4px_12px_rgba(0,0,0,0.04)] backdrop-blur sm:hidden"
        role="group"
        aria-label="Final actions"
      >
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            onClick={onRestart}
            className="min-h-[52px] shrink-0 px-4 text-sm"
          >
            Restart
          </Button>
          <Button
            onClick={() =>
              alert(
                "Connect this to your product page, pharmacy locator, or CRM flow.",
              )
            }
            className="min-h-[52px] flex-1 gap-2 text-base font-bold"
          >
            View products
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="7" x2="11" y2="7" />
              <polyline points="8.5,4.5 11,7 8.5,9.5" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
