import Button from "@/components/ui/Button";
import type { RecommendationResult } from "@/types/productFinder";

interface SafetyStepProps {
  recommendation: RecommendationResult;
  onRestart: () => void;
  onBack: () => void;
}

const safetyCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2H3a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-6" />
        <path d="M17 2l-8 8-2-2" />
      </svg>
    ),
    title: "Always read the label",
    text: "Use as directed. Check warnings, dosage, age suitability, and storage guidance.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="7" r="3" />
        <path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
    title: "Talk to a pharmacist or doctor",
    text: "Do this if symptoms are severe, last more than a few days, or if you are unsure.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2L2 6v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6l-8-4z" />
        <path d="M7 10l2 2 4-4" />
      </svg>
    ),
    title: "Emergency guidance",
    text: "Seek immediate medical help if symptoms feel urgent or worrying.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1,4 1,10 7,10" />
        <path d="M3.5 15A8 8 0 1018 10" />
      </svg>
    ),
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
    <section aria-labelledby="safety-heading">
      {/* ── Header — no step badge, epilogue feel ─── */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">
            Safety &amp; Next Steps
          </span>
          <h1
            id="safety-heading"
            className="mt-2 font-display text-3xl font-bold leading-tight text-deep-navy sm:text-4xl"
          >
            Use safely. Feel better.
          </h1>
          <p className="mt-2 text-sm text-secondary">Your wellbeing comes first.</p>
        </div>
        <Button variant="ghost" onClick={onBack} className="shrink-0 text-sm">
          ← Back
        </Button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        {/* ── Left: recommendation summary ─────────── */}
        <div className="flex flex-col items-center rounded-xl border border-border-subtle bg-white p-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-reckitt-pink shadow-pink">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2L3 7v7c0 6.1 4.7 11.8 11 13 6.3-1.2 11-6.9 11-13V7L14 2z" />
              <polyline points="9,14 12,17 19,10" />
            </svg>
          </div>
          <h2 className="mt-4 font-display text-lg font-bold text-deep-navy">
            Safety-first recommendation
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Suggested category:{" "}
            <strong className="font-bold text-deep-navy">{recommendation.primary.brand}</strong>
          </p>

          {/* Next steps list */}
          <div className="mt-5 w-full rounded-xl border border-border-subtle bg-surface-container-low/50 p-4 text-left">
            {recommendation.nextSteps.map((step) => (
              <div key={step} className="flex items-start gap-2.5 py-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0 text-reckitt-pink" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2,7 5.5,10.5 12,3.5" />
                </svg>
                <p className="text-sm leading-6 text-on-surface">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: safety guidance cards ─────────── */}
        <div className="grid gap-3 content-start">
          {safetyCards.map(({ icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-border-subtle bg-white p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container-low text-reckitt-pink">
                {icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-deep-navy">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-secondary">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Actions ───────────────────────────────── */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-6">
        <Button variant="secondary" onClick={onRestart}>
          Start over
        </Button>
        <Button
          onClick={() =>
            alert("Connect this to your product page, pharmacy locator, or CRM flow.")
          }
          className="gap-2"
        >
          View products
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="7" x2="11" y2="7" /><polyline points="8.5,4.5 11,7 8.5,9.5" />
          </svg>
        </Button>
      </div>
    </section>
  );
}
