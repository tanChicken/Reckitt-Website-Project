import Button from "@/components/ui/Button";
import Image from "next/image";
import { audienceOptions, severityOptions } from "@/data/productFinder";
import type {
  AudienceId,
  FinderAnswers,
  SeverityId,
} from "@/types/productFinder";

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

  const answeredCount = [answers.audienceId, answers.severityId].filter(
    Boolean,
  ).length;

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
          <h2 className="text-base font-bold text-deep-navy">
            Who is this for?
          </h2>

          <p className="mt-0.5 text-sm text-secondary">
            This affects safety guidance and wording.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {audienceOptions.map((option) => {
            const isSelected = answers.audienceId === option.id;

            return (
              <label key={option.id} className="relative cursor-pointer group">
                <input
                  type="radio"
                  name="audience"
                  value={option.id}
                  checked={isSelected}
                  onChange={() => setAudience(option.id)}
                  className="sr-only"
                />

                <div
                  className={`
                    flex h-full flex-col xl:flex-row items-center gap-3
                    rounded-xl border bg-white p-4
                    text-center xl:text-left
                    transition-all duration-200
                    hover:border-secondary/40 hover:shadow-card
                    ${
                      isSelected
                        ? "border-reckitt-pink bg-primary-fixed/20 shadow-card"
                        : "border-border-subtle"
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-low transition-transform duration-200 group-hover:scale-105 overflow-hidden">
                    <Image
                      src={option.icon}
                      alt={"${option.label}"}
                      width={80}
                      height={80}
                      className="h-30 w-30 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="mb-4 xl:mb-0">
                    <p className="text-sm font-semibold text-deep-navy">
                      {option.label}
                    </p>

                    <p className="text-xs text-secondary">
                      {option.description}
                    </p>
                  </div>

                  {/* Radio Indicator */}
                  <div
                    className={`
                      absolute right-3 top-3
                      xl:top-1/2 xl:-translate-y-1/2
                      flex h-5 w-5 items-center justify-center
                      rounded-full border-2 transition-all duration-200
                      ${
                        isSelected
                          ? "border-reckitt-pink bg-reckitt-pink"
                          : "border-border-subtle bg-white"
                      }
                    `}
                  >
                    <div
                      className={`
                        h-2 w-2 rounded-full bg-white
                        transition-opacity duration-200
                        ${isSelected ? "opacity-100" : "opacity-0"}
                      `}
                    />
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* ── Question 2: Severity ──────────────────── */}
      <div className="mb-8">
        <div className="mb-3">
          <h2 className="text-base font-bold text-deep-navy">
            How severe is it?
          </h2>

          <p className="mt-0.5 text-sm text-secondary">
            Not a diagnosis — just helps tailor the suggestion.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {severityOptions.map((option) => {
            const isSelected = answers.severityId === option.id;

            return (
              <label key={option.id} className="relative cursor-pointer group">
                <input
                  type="radio"
                  name="severity"
                  value={option.id}
                  checked={isSelected}
                  onChange={() => setSeverity(option.id)}
                  className="sr-only"
                />

                <div
                  className={`
              flex h-full flex-col xl:flex-row items-center gap-3
              rounded-xl border bg-white p-4
              text-center xl:text-left
              transition-all duration-200
              hover:border-secondary/40 hover:shadow-card
              ${
                isSelected
                  ? "border-reckitt-pink bg-primary-fixed/20 shadow-card"
                  : "border-border-subtle"
              }
            `}
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-low transition-transform duration-200 group-hover:scale-105 overflow-hidden">
                    <Image
                      src={option.icon}
                      alt={"${option.label}"}
                      width={80}
                      height={80}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="mb-4 xl:mb-0">
                    <p className="text-sm font-semibold text-deep-navy">
                      {option.label}
                    </p>

                    <p className="text-xs text-secondary">
                      {option.description}
                    </p>
                  </div>

                  {/* Radio Indicator */}
                  <div
                    className={`
                absolute right-3 top-3
                xl:top-1/2 xl:-translate-y-1/2
                flex h-5 w-5 items-center justify-center
                rounded-full border-2 transition-all duration-200
                ${
                  isSelected
                    ? "border-reckitt-pink bg-reckitt-pink"
                    : "border-border-subtle bg-white"
                }
              `}
                  >
                    <div
                      className={`
                  h-2 w-2 rounded-full bg-white
                  transition-opacity duration-200
                  ${isSelected ? "opacity-100" : "opacity-0"}
                `}
                    />
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* ── Actions ───────────────────────────────── */}
      <div className="flex w-full flex-row items-stretch justify-between gap-2 border-t border-border-subtle pt-6">
        <Button
          variant="secondary"
          onClick={onBack}
          className="flex w-[30%] shrink-0 items-center justify-center gap-1 px-0 text-xs sm:w-auto sm:px-4 sm:text-sm"
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
            className="shrink-0"
          >
            <line x1="12" y1="8" x2="4" y2="8" />
            <polyline points="7,5 4,8 7,11" />
          </svg>

          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden">Back</span>
        </Button>

        <Button
          onClick={onContinue}
          disabled={!canContinue}
          className="flex w-[68%] shrink-0 items-center justify-center gap-1 px-1 text-center text-[11px] leading-tight sm:w-auto sm:px-10 sm:text-sm"
        >
          <span className="hidden sm:inline">
            {canContinue
              ? "See my recommendation"
              : "Answer both questions to continue"}
          </span>

          <span className="sm:hidden">
            {canContinue ? "Recommendation" : "Answer both to continue"}
          </span>

          {canContinue && (
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
              className="shrink-0"
            >
              <line x1="4" y1="8" x2="12" y2="8" />
              <polyline points="9,5 12,8 9,11" />
            </svg>
          )}
        </Button>
      </div>
    </section>
  );
}
