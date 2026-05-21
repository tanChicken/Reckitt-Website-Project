import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import { audienceOptions, severityOptions } from "@/data/productFinder";
import type { AudienceId, FinderAnswers, SeverityId } from "@/types/productFinder";

interface QuestionsStepProps {
  answers: FinderAnswers;
  setAudience: (audienceId: AudienceId) => void;
  setSeverity: (severityId: SeverityId) => void;
  togglePreference: (preferenceId: never) => void; // kept for type compat, not rendered
  onContinue: () => void;
  onBack: () => void;
}

export default function QuestionsStep({
  answers,
  setAudience,
  setSeverity,
  onContinue,
  onBack,
}: QuestionsStepProps) {
  const canContinue = Boolean(answers.audienceId && answers.severityId);
  const answeredCount = [answers.audienceId, answers.severityId].filter(Boolean).length;

  return (
    <section aria-labelledby="questions-heading" className="mx-auto max-w-3xl">
      {/* ── Progress indicator ────────────────────── */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">
            Diagnostic Assessment
          </span>
          <span className="text-xs font-semibold text-reckitt-pink">
            {answeredCount} / 2 answered
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-surface-container-high">
          <div
            className="h-full rounded-full bg-gradient-to-r from-deep-navy to-reckitt-pink transition-all duration-500 ease-out"
            style={{ width: `${(answeredCount / 2) * 100}%` }}
          />
        </div>
      </div>

      {/* ── Heading ───────────────────────────────── */}
      <div className="mb-8 text-center md:text-left">
        <h1
          id="questions-heading"
          className="font-display text-3xl font-bold leading-tight text-deep-navy sm:text-4xl"
        >
          Tell us a little more
        </h1>
        <p className="mt-2 text-sm leading-6 text-secondary">
          These two questions help make the suggestion safer and more relevant.
        </p>
      </div>

      {/* ── Question 1: Who ───────────────────────── */}
      <div className="mb-6">
        <div className="mb-3">
          <h2 className="text-base font-bold text-deep-navy">Who is this for?</h2>
          <p className="mt-0.5 text-sm text-secondary">This affects safety guidance and wording.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {audienceOptions.map((option) => (
            <label key={option.id} className="relative cursor-pointer group">
              <input
                type="radio"
                name="audience"
                value={option.id}
                checked={answers.audienceId === option.id}
                onChange={() => setAudience(option.id)}
                className="peer sr-only"
              />
              <div className="flex h-full items-center gap-4 rounded-xl border border-border-subtle bg-white p-4 transition-all duration-200 peer-checked:border-reckitt-pink peer-checked:bg-primary-fixed/20 hover:border-secondary/40 hover:shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-xl group-hover:scale-105 transition-transform">
                  {option.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-deep-navy">{option.label}</p>
                  <p className="text-xs text-secondary">{option.description}</p>
                </div>
                {/* Radio indicator */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-border-subtle transition-all peer-checked:border-reckitt-pink peer-checked:bg-reckitt-pink">
                  <div className="h-2 w-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* ── Question 2: Severity ──────────────────── */}
      <div className="mb-8">
        <div className="mb-3">
          <h2 className="text-base font-bold text-deep-navy">How severe is it?</h2>
          <p className="mt-0.5 text-sm text-secondary">Not a diagnosis — just helps tailor the suggestion.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {severityOptions.map((option) => (
            <Pill
              key={option.id}
              selected={answers.severityId === option.id}
              onClick={() => setSeverity(option.id)}
              className="p-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl leading-none" aria-hidden="true">{option.icon}</span>
                <div>
                  <span className="block font-semibold text-sm">{option.label}</span>
                  <span className="block text-xs text-secondary mt-0.5">{option.description}</span>
                </div>
              </div>
            </Pill>
          ))}
        </div>
      </div>

      {/* ── Actions ───────────────────────────────── */}
      <div className="flex flex-col gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="secondary" onClick={onBack} className="gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="8" x2="4" y2="8" /><polyline points="7,5 4,8 7,11" />
          </svg>
          Previous
        </Button>
        <Button
          onClick={onContinue}
          disabled={!canContinue}
          className="gap-2 sm:px-10"
        >
          {canContinue ? "See my recommendation" : "Answer both questions to continue"}
          {canContinue && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" y1="8" x2="12" y2="8" /><polyline points="9,5 12,8 9,11" />
            </svg>
          )}
        </Button>
      </div>

      {/* ── Trust signals ─────────────────────────── */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { icon: "🔒", title: "Privacy Protected",  text: "Your data is handled securely."         },
          { icon: "🩺", title: "Clinically Vetted",   text: "Questions designed by health experts."   },
          { icon: "🚨", title: "Immediate Help",      text: "Call emergency services if urgent."      },
        ].map(({ icon, title, text }) => (
          <div
            key={title}
            className="flex flex-col gap-2 rounded-lg border border-border-subtle bg-surface-container-low/50 p-4"
          >
            <span className="text-xl" aria-hidden="true">{icon}</span>
            <p className="text-xs font-bold text-deep-navy">{title}</p>
            <p className="text-xs text-secondary">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
