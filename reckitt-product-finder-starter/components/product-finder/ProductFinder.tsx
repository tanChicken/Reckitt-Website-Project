"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ProgressHeader from "@/components/product-finder/ProgressHeader";
import NeedSelectionStep from "@/components/product-finder/steps/NeedSelectionStep";
import QuestionsStep from "@/components/product-finder/steps/QuestionsStep";
import RecommendationStep from "@/components/product-finder/steps/RecommendationStep";
import SafetyStep from "@/components/product-finder/steps/SafetyStep";
import WelcomeStep from "@/components/product-finder/steps/WelcomeStep";
import Card from "@/components/ui/Card";
import { trackFunnelEvent } from "@/lib/analytics";
import { getRecommendation } from "@/lib/recommendation";
import type {
  AudienceId,
  FinderAnswers,
  BodyPartId,
  PreferenceId,
  SeverityId,
} from "@/types/productFinder";
import Image from "next/image";
import Link from "next/link";

const initialAnswers: FinderAnswers = { preferenceIds: [] };

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

export default function ProductFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FinderAnswers>(initialAnswers);
  const isInitialMount = useRef(true);

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

  function moveTo(nextStep: number, eventName: string, nextAnswers = answers) {
    setStep(nextStep);
    void trackFunnelEvent(eventName, nextStep, nextAnswers);
  }

  function setNeed(bodyPartId: BodyPartId) {
    const nextAnswers = { ...answers, needId: bodyPartId };
    setAnswers(nextAnswers);
    moveTo(2, "need_selected", nextAnswers);
  }

  function setAudience(audienceId: AudienceId) {
    setAnswers((current) => ({ ...current, audienceId }));
  }

  function setSeverity(severityId: SeverityId) {
    setAnswers((current) => ({ ...current, severityId }));
  }

  function togglePreference(preferenceId: PreferenceId) {
    setAnswers((current) => {
      const alreadySelected = current.preferenceIds.includes(preferenceId);
      const preferenceIds = alreadySelected
        ? current.preferenceIds.filter((id) => id !== preferenceId)
        : [...current.preferenceIds, preferenceId].slice(0, 2);
      return { ...current, preferenceIds };
    });
  }

  function restart() {
    setAnswers(initialAnswers);
    moveTo(0, "finder_restarted", initialAnswers);
  }

  return (
    <>
      <ProgressHeader currentStep={step} onHomeClick={restart} />

      <main
        id="main-content"
        className="mx-auto w-full max-w-container-max px-4 pb-12 pt-6 sm:px-8 sm:pt-10 lg:px-16 lg:pt-12"
      >
        {/* Wizard card */}
        <Card className="min-h-[500px] p-4 shadow-card sm:min-h-[600px] sm:p-8 lg:p-10">
          <div key={step} className="animate-fade-slide-up">
            {step === 0 && (
              <WelcomeStep onStart={() => moveTo(1, "finder_started")} />
            )}
            {step === 1 && (
              <NeedSelectionStep
                selectedBodyPart={answers.needId}
                onSelect={setNeed}
                onBack={() => moveTo(0, "back_to_welcome")}
                onContinue={() => moveTo(2, "need_selected")}
              />
            )}
            {step === 2 && (
              <QuestionsStep
                answers={answers}
                setAudience={setAudience}
                setSeverity={setSeverity}
                togglePreference={togglePreference}
                onContinue={() => moveTo(3, "questions_completed")}
                onBack={() => moveTo(1, "back_to_need")}
              />
            )}
            {step === 3 && (
              <RecommendationStep
                recommendation={recommendation}
                onContinue={() => moveTo(4, "recommendation_viewed")}
                onBack={() => moveTo(2, "back_to_questions")}
              />
            )}
            {step === 4 && (
              <SafetyStep
                recommendation={recommendation}
                onRestart={restart}
                onBack={() => moveTo(3, "back_to_recommendations")}
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
            <div>
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

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-surface-variant">
              © {new Date().getFullYear()} Reckitt Benckiser Group PLC. All
              rights reserved.
            </p>
            <p className="text-xs text-surface-variant/60">
              This tool provides general guidance only — not medical advice.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
