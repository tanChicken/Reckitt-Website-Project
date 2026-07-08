import { useState } from "react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { DictKey } from "@/lib/i18n/dictionary";
import Image from "next/image";

export type ThroatSymptomId = "sore-throat" | "cough";

interface ThroatSymptomStepProps {
  selectedSymptom?: ThroatSymptomId;
  onContinue: (symptomId: ThroatSymptomId) => void;
  onBack: () => void;
}

const throatOptions: {
  id: ThroatSymptomId;
  labelKey: DictKey;
  descriptionKey: DictKey;
  iconSrc: string;
  iconAltKey: DictKey;
}[] = [
  {
    id: "sore-throat",
    labelKey: "soreThroatLabel",
    descriptionKey: "soreThroatDesc",
    iconSrc: "/sore-throat.png",
    iconAltKey: "soreThroatIconAlt",
  },
  {
    id: "cough",
    labelKey: "coughLabel",
    descriptionKey: "coughDesc",
    iconSrc: "/cough.png",
    iconAltKey: "coughIconAlt",
  },
];

export default function ThroatSymptomStep({
  selectedSymptom,
  onContinue,
  onBack,
}: ThroatSymptomStepProps) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<ThroatSymptomId | undefined>(
    selectedSymptom,
  );

  return (
    <section
      aria-labelledby="throat-symptom-heading"
      className="mx-auto flex w-full max-w-3xl flex-col justify-start px-4 pt-8 pb-32 sm:min-h-screen sm:justify-center sm:pt-0 sm:pb-40"    >
      {/* ── Heading ───────────────────────────────── */}
      <div className="mb-6 sm:mb-8">
        <h1
          id="throat-symptom-heading"
          className="font-display text-[2rem] font-bold leading-[1.15] tracking-tight text-deep-navy sm:text-4xl"
        >
          {t("throatHeading")}
        </h1>
        <p className="mt-2 text-sm leading-6 text-secondary sm:text-base">
          {t("throatSubtitle")}
        </p>
      </div>

      {/* ── Options ───────────────────────────────── */}
      <fieldset className="mb-6 sm:mb-8">
        <legend className="sr-only">{t("throatTypeLegend")}</legend>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {throatOptions.map((option) => {
            const isSelected = selected === option.id;

            return (
              <label key={option.id} className="group relative cursor-pointer">
                <input
                  type="radio"
                  name="throat-symptom"
                  value={option.id}
                  checked={isSelected}
                  onChange={() => setSelected(option.id)}
                  className="sr-only"
                />

                <div
                  className={`
                    flex h-full flex-col items-center justify-center gap-2
                    rounded-2xl border-2 bg-white p-4
                    text-center
                    transition-all duration-200
                    xl:flex-row xl:gap-3 xl:p-4 xl:text-left
                    ${
                      isSelected
                        ? "border-reckitt-pink bg-primary-fixed/15 shadow-card"
                        : "border-border-subtle hover:border-secondary/40 hover:shadow-card"
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-container-low transition-transform duration-200 group-hover:scale-105 sm:h-14 sm:w-14">
                    <Image
                      src={option.iconSrc}
                      alt={t(option.iconAltKey)}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm font-bold text-deep-navy sm:text-base xl:text-sm">
                      {t(option.labelKey)}
                    </p>
                    <p className="hidden text-xs text-secondary sm:block sm:text-sm">
                      {t(option.descriptionKey)}
                    </p>
                  </div>

                  {/* Selected checkmark */}
                  {isSelected && (
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
          {t("previous")}
        </Button>

        <Button
          onClick={() => selected && onContinue(selected)}
          disabled={!selected}
          className="gap-2 px-10"
        >
          {t("next")}
        </Button>
      </div>

      {/* ── Mobile sticky bottom CTA ──────────────── */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border-subtle bg-white/95 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur sm:hidden"
        role="group"
        aria-label={t("stepNavigation")}
      >
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            onClick={onBack}
            className="min-h-[52px] shrink-0 px-4"
            aria-label={t("back")}
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
            onClick={() => selected && onContinue(selected)}
            disabled={!selected}
            className="min-h-[52px] flex-1 gap-2 text-base font-bold"
          >
            {t("next")}
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
