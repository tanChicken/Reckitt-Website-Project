import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { RecommendationResult } from "@/types/productFinder";

interface SafetyStepProps {
  recommendation: RecommendationResult;
  onRestart: () => void;
  onBack: () => void;
}

export default function SafetyStep({ recommendation, onRestart, onBack }: SafetyStepProps) {
  return (
    <section aria-labelledby="safety-heading">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-pink">Step 4</p>
          <h1 id="safety-heading" className="mt-2 text-4xl font-black text-brand-navy">
            Use safely. Feel better.
          </h1>
          <p className="mt-2 text-slate-600">Your wellbeing comes first.</p>
        </div>
        <Button variant="ghost" onClick={onBack}>← Back</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="grid place-items-center p-8 text-center">
          <div className="grid h-28 w-28 place-items-center rounded-[2rem] bg-brand-pink text-5xl text-white shadow-soft" aria-hidden="true">
            🛡️
          </div>
          <h2 className="mt-6 text-3xl font-black text-brand-navy">Safety-first recommendation</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Suggested category: <strong>{recommendation.primary.brand}</strong>
          </p>
          <div className="mt-5 rounded-2xl bg-brand-pinkSoft p-4 text-left text-sm leading-7 text-slate-700">
            {recommendation.nextSteps.map((step) => (
              <p key={step}>✓ {step}</p>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          {[
            ["📄", "Always read the label", "Use as directed. Check warnings, dosage, age suitability, and storage guidance."],
            ["👩‍⚕️", "Talk to a pharmacist or doctor", "Do this if symptoms are severe, last more than a few days, or if the user is unsure."],
            ["🚨", "Emergency guidance", "Seek immediate medical help if symptoms feel urgent or worrying."],
            ["🔁", "Restart anytime", "If the user's need changes, restart the finder for a cleaner recommendation journey."]
          ].map(([icon, title, text]) => (
            <Card key={title} className="p-5">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-pinkSoft text-2xl" aria-hidden="true">
                  {icon}
                </div>
                <div>
                  <h3 className="font-black text-brand-navy">{title}</h3>
                  <p className="mt-1 leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
        <Button variant="secondary" onClick={onBack}>Back</Button>
        <Button variant="secondary" onClick={onRestart}>Restart</Button>
        <Button onClick={() => alert("Connect this to your product page, pharmacy locator, or CRM flow.")}>View recommended products →</Button>
      </div>
    </section>
  );
}
