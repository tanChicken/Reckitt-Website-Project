"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProgressHeader from "@/components/product-finder/ProgressHeader";
import NeedSelectionStep from "@/components/product-finder/steps/NeedSelectionStep";
import QuestionsStep from "@/components/product-finder/steps/QuestionsStep";
import RecommendationStep from "@/components/product-finder/steps/RecommendationStep";
import ThroatSymptomStep, {
  type ThroatSymptomId,
} from "@/components/product-finder/steps/ThroatSymptomStep";
import WelcomeStep from "@/components/product-finder/steps/WelcomeStep";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { DictKey } from "@/lib/i18n/dictionary";
import { trackFunnelEvent } from "@/lib/analytics";
import { isAudienceAvailable, isSeverityAvailable } from "@/lib/finderRules";
import { getRecommendation } from "@/lib/recommendation";
import type {
  AudienceId,
  FinderAnswers,
  BodyPartId,
  SeverityId,
} from "@/types/productFinder";
import Image from "next/image";
import Link from "next/link";

// ── URL <-> wizard mapping ───────────────────────────────────────────────────
// The whole funnel is driven by the query string so every screen is shareable
// and the browser Back/Forward buttons work. Param contract:
//   step      welcome | need | symptom | questions | result   (navigational stage)
//   body      head | throat | heart | stomach                 (NeedSelectionStep)
//   symptom   sore-throat | cough                             (throat sub-question)
//   age       adult | teen | child | someone-else             (audience)
//   severity  mild | moderate | severe | not-sure
// `step` is set on every in-app navigation for exact Back/Forward. When it is
// absent (e.g. an externally-shared link like ?body=head&age=adult&severity=mild)
// the stage is derived from the answers instead.

type WizardStep = "welcome" | "need" | "symptom" | "questions" | "result";

const STEP_INDEX: Record<WizardStep, number> = {
  welcome: 0,
  need: 1,
  symptom: 2,
  questions: 3,
  result: 4,
};

// Body areas served by a single product that isn't age/severity dependent
// (Heart → Cardiprin). These jump straight from the body-area step to the
// result, skipping the questions screen.
const SINGLE_PRODUCT_BODY_PARTS: readonly BodyPartId[] = ["heart"];

function skipsQuestions(needId: BodyPartId | undefined): boolean {
  // "chest" is only ever reached via the throat → cough sub-question, which
  // already resolves to a single product range.
  return needId === "chest" || SINGLE_PRODUCT_BODY_PARTS.includes(needId as BodyPartId);
}

// Read the raw params and strip any combination the UI would not allow, so a
// hand-typed or shared URL (e.g. ?body=stomach&age=child) can't bypass the
// availability rules. A disallowed answer is treated as "not chosen".
function readParams(sp: URLSearchParams): {
  body?: BodyPartId;
  symptom?: ThroatSymptomId;
  age?: AudienceId;
  severity?: SeverityId;
  needId?: BodyPartId;
} {
  const body = (sp.get("body") as BodyPartId | null) || undefined;
  const symptom = (sp.get("symptom") as ThroatSymptomId | null) || undefined;
  let age = (sp.get("age") as AudienceId | null) || undefined;
  let severity = (sp.get("severity") as SeverityId | null) || undefined;

  // A "cough" throat symptom maps to the chest product range.
  const needId: BodyPartId | undefined =
    body === "throat" && symptom === "cough" ? "chest" : body;

  // Enforce the availability rules at the data layer (not just in the UI).
  if (age && !isAudienceAvailable(needId, age)) age = undefined;
  if (severity && !isSeverityAvailable(needId, age, severity)) severity = undefined;

  return { body, symptom, age, severity, needId };
}

function parseAnswers(sp: URLSearchParams): {
  answers: FinderAnswers;
  throatSymptomId?: ThroatSymptomId;
} {
  const { needId, age, severity, symptom } = readParams(sp);
  return {
    answers: {
      needId,
      audienceId: age,
      severityId: severity,
      preferenceIds: [],
    },
    throatSymptomId: symptom,
  };
}

function deriveStep(sp: URLSearchParams): WizardStep {
  const { body, symptom, age, severity, needId } = readParams(sp);
  const explicit = sp.get("step") as WizardStep | null;

  const skipQuestions = skipsQuestions(needId);
  const complete = Boolean(body) && (skipQuestions || Boolean(age && severity));

  // Natural (data-derived) position. Also the fallback when an explicit step is
  // inconsistent with the answers — e.g. a hand-crafted URL.
  let natural: WizardStep;
  if (!body) natural = "welcome";
  else if (body === "throat" && !symptom) natural = "symptom";
  else if (!complete) natural = "questions";
  else natural = "result";

  // Trust an explicit step only when it is consistent with the current answers.
  // This keeps Back/Forward exact while stopping a crafted URL from jumping
  // forward past an incomplete (or now-stripped, invalid) answer.
  switch (explicit) {
    case "welcome":
      return "welcome";
    case "need":
      return "need";
    case "symptom":
      return body === "throat" ? "symptom" : natural;
    case "questions":
      return body && !skipQuestions ? "questions" : natural;
    case "result":
      return complete ? "result" : natural;
    default:
      return natural;
  }
}

export default function ProductFinder() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  const { answers, throatSymptomId } = useMemo(
    () => parseAnswers(new URLSearchParams(searchParams.toString())),
    [searchParams],
  );
  const step = useMemo(
    () => deriveStep(new URLSearchParams(searchParams.toString())),
    [searchParams],
  );

  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  // Scroll to the top of the wizard whenever the step changes (skip initial mount).
  // Respects prefers-reduced-motion for accessibility.
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [step]);

  // Keep the address bar honest: if it carries an answer the rules don't allow
  // (typed or shared by hand), strip it so the visible URL matches what is shown
  // and the bad link can't be re-shared.
  useEffect(() => {
    const sp = new URLSearchParams(searchParams.toString());
    const rawAge = sp.get("age") || undefined;
    const rawSeverity = sp.get("severity") || undefined;
    const { age, severity } = readParams(sp);
    if (rawAge === age && rawSeverity === severity) return;

    if (!age) sp.delete("age");
    if (!severity) sp.delete("severity");
    sp.set("step", deriveStep(sp));
    router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
  }, [searchParams, pathname, router]);

  // Write the given param updates to the URL. `undefined` removes a param.
  // `replace` avoids polluting history for in-place edits (e.g. picking an answer
  // before pressing Next); step transitions use push so Back works naturally.
  const navigate = useCallback(
    (
      updates: Record<string, string | undefined>,
      eventName: string,
      mode: "push" | "replace" = "push",
    ) => {
      const sp = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        if (value === undefined) sp.delete(key);
        else sp.set(key, value);
      }
      const query = sp.toString();
      const href = query ? `${pathname}?${query}` : pathname;
      if (mode === "replace") router.replace(href, { scroll: false });
      else router.push(href, { scroll: false });

      const nextStep = (updates.step as WizardStep | undefined) ?? deriveStep(sp);
      void trackFunnelEvent(eventName, STEP_INDEX[nextStep], parseAnswers(sp).answers);
    },
    [searchParams, pathname, router],
  );

  function setNeed(bodyPartId: BodyPartId) {
    // Reset downstream answers so a previously-saved invalid combo can't persist.
    const updates: Record<string, string | undefined> = {
      body: bodyPartId,
      symptom: undefined,
      age: undefined,
      severity: undefined,
    };
    if (bodyPartId === "throat") updates.step = "symptom";
    else if (skipsQuestions(bodyPartId)) updates.step = "result";
    else updates.step = "questions";
    navigate(updates, "need_selected");
  }

  function handleThroatSymptom(symptomId: ThroatSymptomId) {
    if (symptomId === "cough") {
      navigate({ symptom: "cough", step: "result" }, "throat_cough_selected");
    } else {
      navigate({ symptom: symptomId, step: "questions" }, "throat_sore_selected");
    }
  }

  function setAudience(audienceId: AudienceId) {
    const updates: Record<string, string | undefined> = {
      age: audienceId,
      step: "questions",
    };
    // Clear a previously chosen severity if it isn't available for the new audience.
    if (
      answers.severityId &&
      !isSeverityAvailable(answers.needId, audienceId, answers.severityId)
    ) {
      updates.severity = undefined;
    }
    navigate(updates, "audience_selected", "replace");
  }

  function setSeverity(severityId: SeverityId) {
    navigate({ severity: severityId, step: "questions" }, "severity_selected", "replace");
  }

  function restart() {
    navigate(
      {
        step: undefined,
        body: undefined,
        symptom: undefined,
        age: undefined,
        severity: undefined,
      },
      "finder_restarted",
    );
  }

  return (
    <>
      <ProgressHeader currentStep={STEP_INDEX[step]} onHomeClick={restart} />

      <main
        id="main-content"
        className="mx-auto w-full max-w-container-max px-4 pb-12 pt-6 sm:px-8 sm:pt-10 lg:px-16 lg:pt-12"
      >
        {/* Wizard card */}
        <Card className="min-h-[800px] p-4 shadow-card sm:min-h-[650px] sm:p-8 lg:p-10">
          <div key={step} className="animate-fade-slide-up">
            {step === "welcome" && (
              <WelcomeStep onStart={() => navigate({ step: "need" }, "finder_started")} />
            )}
            {step === "need" && (
              <NeedSelectionStep
                selectedBodyPart={answers.needId}
                onSelect={setNeed}
                onBack={() => restart()}
                onContinue={() => {}}
              />
            )}
            {step === "symptom" && (
              <ThroatSymptomStep
                selectedSymptom={throatSymptomId}
                onContinue={handleThroatSymptom}
                onBack={() => navigate({ step: "need" }, "back_to_need")}
              />
            )}
            {step === "questions" && (
              <QuestionsStep
                answers={answers}
                setAudience={setAudience}
                setSeverity={setSeverity}
                togglePreference={() => {}}
                onContinue={() => navigate({ step: "result" }, "questions_completed")}
                onBack={() =>
                  answers.needId === "throat"
                    ? navigate({ step: "symptom" }, "back_to_throat_symptom")
                    : navigate({ step: "need" }, "back_to_need")
                }
              />
            )}
            {step === "result" && (
              <RecommendationStep
                recommendation={recommendation}
                onRestart={restart}
                onBack={() => {
                  if (throatSymptomId === "cough")
                    navigate({ step: "symptom" }, "back_to_throat_symptom");
                  else if (skipsQuestions(answers.needId))
                    navigate({ step: "need" }, "back_to_need");
                  else navigate({ step: "questions" }, "back_to_questions");
                }}
              />
            )}
          </div>
        </Card>
      </main>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="mt-4 border-t border-white/10 bg-deep-navy">
        <div className="mx-auto max-w-container-max px-4 py-12 sm:px-8 lg:px-16">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            {/* Brand column */}
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/sosLogo.png"
                alt="Reckitt"
                width={96}
                height={30}
                className="object-contain brightness-0 invert"
              />
            </div>

            {footerLinks.map(({ headingKey, links }) => (
              <div key={headingKey} className="text-center sm:text-right">
                <h3 className="text-sm font-bold uppercase tracking-widest text-surface-variant">
                  {t(headingKey)}
                </h3>

                <ul className="mt-4 flex flex-wrap justify-center gap-6 sm:justify-end">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base text-secondary-fixed-dim transition-colors duration-150 hover:text-white"
                      >
                        {t(link.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

const footerLinks: {
  headingKey: DictKey;
  links: { labelKey: DictKey; href: string }[];
}[] = [
  {
    headingKey: "supportHeading",
    links: [
      { labelKey: "contactUs", href: "/contact" },
      { labelKey: "privacyPolicy", href: "/privacy" },
      { labelKey: "termsOfUse", href: "/terms" },
    ],
  },
];
