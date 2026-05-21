import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
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
        <path d="M14 3l2 2" /><path d="M16 3l-2 2" />
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
      {/* Step header */}
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-pinkSoft px-3 py-1 text-xs font-black uppercase tracking-widest text-brand-pink">
            Step 4 of 4
          </span>
          <h1
            id="safety-heading"
            className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl"
          >
            Use safely. Feel better.
          </h1>
          <p className="mt-2 text-slate-500">Your wellbeing comes first.</p>
        </div>
        <Button variant="ghost" onClick={onBack} className="shrink-0 text-sm">
          ← Back
        </Button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        {/* Left: summary card */}
        <Card className="flex flex-col items-center p-8 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-pink shadow-pink">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 3L4 9v9c0 7.9 6 15.3 14 17 8-1.7 14-9.1 14-17V9L18 3z" />
              <polyline points="12,18 16,22 24,14" />
            </svg>
          </div>
          <h2 className="mt-5 text-xl font-black text-brand-navy">
            Safety-first recommendation
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Suggested category:{" "}
            <strong className="text-brand-navy">
              {recommendation.primary.brand}
            </strong>
          </p>
          <div className="mt-5 w-full rounded-2xl border border-green-100 bg-green-50 p-4 text-left">
            {recommendation.nextSteps.map((step) => (
              <div key={step} className="flex items-start gap-2.5 py-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0 text-green-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2,7 5.5,10.5 12,3.5" />
                </svg>
                <p className="text-sm leading-6 text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Right: safety guidance cards */}
        <div className="grid gap-3 content-start">
          {safetyCards.map(({ icon, title, text }) => (
            <Card key={title} className="p-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-pinkSoft text-brand-pink">
                  {icon}
                </div>
                <div>
                  <h3 className="text-sm font-black text-brand-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="secondary" onClick={onRestart}>
          Start over
        </Button>
        <Button
          onClick={() =>
            alert(
              "Connect this to your product page, pharmacy locator, or CRM flow."
            )
          }
        >
          View products →
        </Button>
      </div>
    </section>
  );
}
