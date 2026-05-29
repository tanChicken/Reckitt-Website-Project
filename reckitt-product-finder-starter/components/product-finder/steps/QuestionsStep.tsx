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

  // Audiences that are unavailable for the selected body part
  const disabledAudiences = new Set<AudienceId>(
    answers.needId === "stomach" ? ["child"] : []
  );

  // Severities that are unavailable for the selected body part + audience combo
  const disabledSeverities = new Set<SeverityId>(
    (answers.needId === "throat" && answers.audienceId === "child") ||
    (answers.needId === "head"   && answers.audienceId === "teen")
      ? ["severe"]
      : []
  );

  return (
    <section
      aria-labelledby="questions-heading"
      className="mx-auto max-w-3xl pb-24 sm:pb-0"
    >
      {/* ── Progress indicator ────────────────────── */}
      {/* <div className="mb-6 sm:mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary sm:text-xs">
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
      </div> */}

      {/* ── Heading ───────────────────────────────── */}
      <div className="mb-6 sm:mb-8">
        <h1
          id="questions-heading"
          className="font-display text-[2rem] font-bold leading-[1.15] tracking-tight text-deep-navy sm:text-4xl"
        >
          Tell us a little more
        </h1>
        <p className="mt-2 text-sm leading-6 text-secondary sm:text-base">
          Two quick questions to tailor your suggestion.
        </p>
      </div>

      {/* ── Question 1: Who ───────────────────────── */}
      <fieldset className="mb-6 sm:mb-8">
        <legend className="mb-3 block">
          <span className="block text-lg font-bold text-deep-navy sm:text-base">
            Who is this for?
          </span>
          {/* <span className="mt-0.5 block text-xs text-secondary sm:text-sm">
            Affects safety guidance.
          </span> */}
        </legend>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {audienceOptions.map((option) => {
            const isSelected = answers.audienceId === option.id;
            const isDisabled = disabledAudiences.has(option.id);

            return (
              <label
                key={option.id}
                className={`group relative ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <input
                  type="radio"
                  name="audience"
                  value={option.id}
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={isDisabled ? undefined : () => setAudience(option.id)}
                  className="sr-only"
                />

                <div
                  className={`
                    flex h-full flex-col items-center justify-center gap-2
                    rounded-2xl border-2 p-3
                    text-center
                    transition-all duration-200
                    xl:flex-row xl:gap-3 xl:p-4 xl:text-left
                    ${
                      isDisabled
                        ? "border-surface-container-high bg-surface-container-highest opacity-50"
                        : isSelected
                          ? "border-reckitt-pink bg-primary-fixed/15 shadow-card"
                          : "bg-white border-border-subtle hover:border-secondary/40 hover:shadow-card"
                    }
                  `}
                >
                  {/* Icon */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-container-low sm:h-11 sm:w-11 ${isDisabled ? "" : "transition-transform duration-200 group-hover:scale-105"}`}>
                    <Image
                      src={option.icon}
                      alt=""
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <p className={`text-sm font-bold sm:text-base xl:text-sm ${isDisabled ? "text-secondary" : "text-deep-navy"}`}>
                      {option.label}
                    </p>
                    <p className="hidden text-xs text-secondary xl:block">
                      {option.description}
                    </p>
                  </div>

                  {/* Selected check (top-right on mobile) */}
                  {isSelected && !isDisabled && (
                    <span
                      className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-reckitt-pink text-white xl:right-3 xl:top-3"
                      aria-hidden="true"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="1.5,5 4,7.5 8.5,2.5" />
                      </svg>
                    </span>
                  )}
                </div>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* ── Question 2: Severity ──────────────────── */}
      <fieldset className="mb-6 sm:mb-8">
        <legend className="mb-3 block">
          <span className="block text-lg font-bold text-deep-navy sm:text-base">
            How severe is it?
          </span>
          {/* <span className="mt-0.5 block text-xs text-secondary sm:text-sm">
            Not a diagnosis — helps tailor the suggestion.
          </span> */}
        </legend>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {severityOptions.map((option) => {
            const isSelected = answers.severityId === option.id;
            const isDisabled = disabledSeverities.has(option.id);

            return (
              <label
                key={option.id}
                className={`group relative ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <input
                  type="radio"
                  name="severity"
                  value={option.id}
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={isDisabled ? undefined : () => setSeverity(option.id)}
                  className="sr-only"
                />

                <div
                  className={`
                    flex h-full flex-col items-center justify-center gap-2
                    rounded-2xl border-2 p-3
                    text-center
                    transition-all duration-200
                    xl:flex-row xl:gap-3 xl:p-4 xl:text-left
                    ${
                      isDisabled
                        ? "border-surface-container-high bg-surface-container-highest opacity-50"
                        : isSelected
                          ? "border-reckitt-pink bg-primary-fixed/15 shadow-card"
                          : "bg-white border-border-subtle hover:border-secondary/40 hover:shadow-card"
                    }
                  `}
                >
                  {/* Icon */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-container-low sm:h-11 sm:w-11 ${isDisabled ? "" : "transition-transform duration-200 group-hover:scale-105"}`}>
                    <Image
                      src={option.icon}
                      alt=""
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <p className={`text-sm font-bold sm:text-base xl:text-sm ${isDisabled ? "text-secondary" : "text-deep-navy"}`}>
                      {option.label}
                    </p>
                    <p className="hidden text-xs text-secondary xl:block">
                      {option.description}
                    </p>
                  </div>

                  {/* Selected check */}
                  {isSelected && !isDisabled && (
                    <span
                      className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-reckitt-pink text-white xl:right-3 xl:top-3"
                      aria-hidden="true"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="1.5,5 4,7.5 8.5,2.5" />
                      </svg>
                    </span>
                  )}
                </div>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* ── Desktop action bar ────────────────────── */}
      <div className="hidden border-t border-border-subtle pt-6 sm:flex sm:items-center sm:justify-between sm:gap-3">
        <Button variant="secondary" onClick={onBack} className="gap-1.5">
          {/* <svg
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
          </svg> */}
          Previous
        </Button>

        <Button
          onClick={onContinue}
          disabled={!canContinue}
          className="gap-2 px-10"
        >
          Next
          {/* {canContinue && (
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
              <line x1="4" y1="8" x2="12" y2="8" />
              <polyline points="9,5 12,8 9,11" />
            </svg>
          )} */}
        </Button>
      </div>

      {/* ── Mobile sticky bottom CTA ──────────────── */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border-subtle bg-white/95 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur sm:hidden"
        role="group"
        aria-label="Step navigation"
      >
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            onClick={onBack}
            className="min-h-[52px] shrink-0 px-4"
            aria-label="Back"
          >
            <svg
              width="16"
              height="16"
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
          </Button>
          <Button
            onClick={onContinue}
            disabled={!canContinue}
            className="min-h-[52px] flex-1 gap-2 text-base font-bold"
          >
            Next
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="8" x2="12" y2="8" />
              <polyline points="9,5 12,8 9,11" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
