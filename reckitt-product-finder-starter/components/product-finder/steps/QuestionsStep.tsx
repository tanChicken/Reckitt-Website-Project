import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";
import {
  audienceOptions,
  preferenceOptions,
  severityOptions,
} from "@/data/productFinder";
import type {
  AudienceId,
  FinderAnswers,
  PreferenceId,
  SeverityId,
} from "@/types/productFinder";

interface QuestionsStepProps {
  answers: FinderAnswers;
  setAudience: (audienceId: AudienceId) => void;
  setSeverity: (severityId: SeverityId) => void;
  togglePreference: (preferenceId: PreferenceId) => void;
  onContinue: () => void;
  onBack: () => void;
}

export default function QuestionsStep({
  answers,
  setAudience,
  setSeverity,
  togglePreference,
  onContinue,
  onBack,
}: QuestionsStepProps) {
  const canContinue = Boolean(answers.audienceId && answers.severityId);
  const answeredCount = [answers.audienceId, answers.severityId].filter(Boolean).length;

  return (
    <section aria-labelledby="questions-heading">
      {/* Step header */}
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-pinkSoft px-3 py-1 text-xs font-black uppercase tracking-widest text-brand-pink">
            Step 2 of 4
          </span>
          <h1
            id="questions-heading"
            className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl"
          >
            Answer a few questions
          </h1>
          <p className="mt-2 text-slate-500">
            This helps make the suggestion safer and more relevant.
          </p>
        </div>
        <Button variant="ghost" onClick={onBack} className="shrink-0 text-sm">
          ← Back
        </Button>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Required questions</span>
          <span className="text-brand-pink">{answeredCount} / 2 answered</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-brand-pink transition-all duration-500"
            style={{ width: `${(answeredCount / 2) * 100}%` }}
          />
        </div>
      </div>

      {/* Who + Severity side by side */}
      <div className="grid gap-4 xl:grid-cols-2">
        <Card className="p-5">
          <div className="mb-4">
            <h2 className="text-lg font-black text-brand-navy">Who is this for?</h2>
            <p className="mt-1 text-sm text-slate-500">
              This affects safety guidance and wording.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {audienceOptions.map((option) => (
              <Pill
                key={option.id}
                selected={answers.audienceId === option.id}
                onClick={() => setAudience(option.id)}
              >
                <span className="mr-1.5" aria-hidden="true">
                  {option.icon}
                </span>
                <span className="font-semibold">{option.label}</span>
                <span className="mt-0.5 block text-xs font-normal text-slate-400">
                  {option.description}
                </span>
              </Pill>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-4">
            <h2 className="text-lg font-black text-brand-navy">How severe is it?</h2>
            <p className="mt-1 text-sm text-slate-500">
              Not a diagnosis — just helps tailor the suggestion.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {severityOptions.map((option) => (
              <Pill
                key={option.id}
                selected={answers.severityId === option.id}
                onClick={() => setSeverity(option.id)}
              >
                <span className="mr-1.5" aria-hidden="true">
                  {option.icon}
                </span>
                <span className="font-semibold">{option.label}</span>
                <span className="mt-0.5 block text-xs font-normal text-slate-400">
                  {option.description}
                </span>
              </Pill>
            ))}
          </div>
        </Card>
      </div>

      {/* Preferences (optional) */}
      <Card className="mt-4 p-5">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-brand-navy">What matters most?</h2>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-500">
              Optional · up to 2
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Select preferences to further refine the suggestion.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {preferenceOptions.map((option) => (
            <Pill
              key={option.id}
              selected={answers.preferenceIds.includes(option.id)}
              onClick={() => togglePreference(option.id)}
            >
              <span className="mr-1.5" aria-hidden="true">
                {option.icon}
              </span>
              <span className="font-semibold">{option.label}</span>
            </Pill>
          ))}
        </div>
      </Card>

      {/* Actions */}
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-400">
          {!canContinue && "Please answer both required questions to continue."}
        </p>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onBack}>
            Back
          </Button>
          <Button onClick={onContinue} disabled={!canContinue}>
            See recommendations →
          </Button>
        </div>
      </div>
    </section>
  );
}
