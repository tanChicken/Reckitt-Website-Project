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
import { trackFunnelEvent } from "@/lib/analytics";
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

function parseAnswers(sp: URLSearchParams): {
  answers: FinderAnswers;
  throatSymptomId?: ThroatSymptomId;
} {
  const body = (sp.get("body") as BodyPartId | null) ?? undefined;
  const symptom = (sp.get("symptom") as ThroatSymptomId | null) ?? undefined;
  const age = (sp.get("age") as AudienceId | null) ?? undefined;
  const severity = (sp.get("severity") as SeverityId | null) ?? undefined;

  // A "cough" throat symptom maps to the chest product range.
  const needId: BodyPartId | undefined =
    body === "throat" && symptom === "cough" ? "chest" : body;

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
  const explicit = sp.get("step") as WizardStep | null;
  if (explicit && explicit in STEP_INDEX) return explicit;

  const body = sp.get("body");
  const symptom = sp.get("symptom");
  const age = sp.get("age");
  const severity = sp.get("severity");

  if (!body) return "welcome";
  if (body === "throat" && !symptom) return "symptom";

  const effectiveNeed =
    body === "throat" && symptom === "cough" ? "chest" : body;
  // Heart and chest skip the questions screen and go straight to the result.
  if (effectiveNeed === "heart" || effectiveNeed === "chest") return "result";

  if (age && severity) return "result";
  return "questions";
}

export default function ProductFinder() {
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
    else if (bodyPartId === "heart") updates.step = "result";
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
    // Clear severity if the new audience makes "severe" unavailable.
    const severeBecomesUnavailable =
      (answers.needId === "throat" && audienceId === "child") ||
      (answers.needId === "head" && audienceId === "teen");
    const updates: Record<string, string | undefined> = {
      age: audienceId,
      step: "questions",
    };
    if (severeBecomesUnavailable && answers.severityId === "severe") {
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
                  else if (answers.needId === "heart")
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

            {footerLinks.map(({ heading, links }) => (
              <div key={heading} className="text-center sm:text-right">
                <h3 className="text-sm font-bold uppercase tracking-widest text-surface-variant">
                  {heading}
                </h3>

                <ul className="mt-4 flex flex-wrap justify-center gap-6 sm:justify-end">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-secondary-fixed-dim transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
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

const footerLinks = [
  {
    heading: "Support",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];
