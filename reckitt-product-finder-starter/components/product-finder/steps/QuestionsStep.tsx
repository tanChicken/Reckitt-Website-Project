import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";
import { audienceOptions, preferenceOptions, severityOptions } from "@/data/productFinder";
import type { AudienceId, FinderAnswers, PreferenceId, SeverityId } from "@/types/productFinder";

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
  onBack
}: QuestionsStepProps) {
  const canContinue = Boolean(answers.audienceId && answers.severityId);

  return (
    <section aria-labelledby="questions-heading">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-pink">Step 2</p>
          <h1 id="questions-heading" className="mt-2 text-4xl font-black text-brand-navy">
            Answer a few questions
          </h1>
          <p className="mt-2 text-slate-600">This helps make the suggestion safer and more relevant.</p>
        </div>
        <Button variant="ghost" onClick={onBack}>← Back</Button>
      </div>

      <Card className="mb-6 p-5">
        <div className="flex items-center justify-between text-sm font-bold text-slate-600">
          <span>Question progress</span>
          <span>2 of 4</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-pink-100" aria-hidden="true">
          <div className="h-full w-1/2 rounded-full bg-brand-pink" />
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-2xl font-black text-brand-navy">Who is this for?</h2>
          <p className="mt-2 text-slate-600">This affects safety guidance and wording.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {audienceOptions.map((option) => (
              <Pill key={option.id} selected={answers.audienceId === option.id} onClick={() => setAudience(option.id)}>
                <span className="mr-2" aria-hidden="true">{option.icon}</span>
                {option.label}
                <span className="mt-1 block text-xs font-normal text-slate-500">{option.description}</span>
              </Pill>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-black text-brand-navy">How severe is it?</h2>
          <p className="mt-2 text-slate-600">The website should not replace professional advice.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {severityOptions.map((option) => (
              <Pill key={option.id} selected={answers.severityId === option.id} onClick={() => setSeverity(option.id)}>
                <span className="mr-2" aria-hidden="true">{option.icon}</span>
                {option.label}
                <span className="mt-1 block text-xs font-normal text-slate-500">{option.description}</span>
              </Pill>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-6 p-6">
        <h2 className="text-2xl font-black text-brand-navy">What matters most?</h2>
        <p className="mt-2 text-slate-600">Select up to two preferences. This is optional.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {preferenceOptions.map((option) => (
            <Pill
              key={option.id}
              selected={answers.preferenceIds.includes(option.id)}
              onClick={() => togglePreference(option.id)}
            >
              <span className="mr-2" aria-hidden="true">{option.icon}</span>
              {option.label}
            </Pill>
          ))}
        </div>
      </Card>

      <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
        <Button variant="secondary" onClick={onBack}>Back</Button>
        <Button onClick={onContinue} disabled={!canContinue}>Continue →</Button>
      </div>
    </section>
  );
}
