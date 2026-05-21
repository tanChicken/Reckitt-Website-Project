"use client";

import { useMemo, useState } from "react";
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
  NeedId,
  PreferenceId,
  SeverityId,
} from "@/types/productFinder";
import Image from "next/image";

const initialAnswers: FinderAnswers = {
  preferenceIds: [],
};

export default function ProductFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FinderAnswers>(initialAnswers);

  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  function moveTo(nextStep: number, eventName: string, nextAnswers = answers) {
    setStep(nextStep);
    void trackFunnelEvent(eventName, nextStep, nextAnswers);
  }

  function setNeed(needId: NeedId) {
    const nextAnswers = { ...answers, needId };
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
      <ProgressHeader currentStep={step} />
      <main
        id="main-content"
        className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <Card className="min-h-[620px] p-5 sm:p-8 lg:p-10">
          {step === 0 && (
            <WelcomeStep onStart={() => moveTo(1, "finder_started")} />
          )}

          {step === 1 && (
            <NeedSelectionStep
              selectedNeedId={answers.needId}
              onSelect={setNeed}
              onBack={() => moveTo(0, "back_to_welcome")}
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
        </Card>
        {/*Replaced footer card section emojis w/ lineart*/}
        <section
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5"
          aria-label="Trust features"
        >
          {[
            [
              "/shield.png",
              "Trusted brands",
              "Known health, hygiene, and home-care categories.",
            ],
            [
              "/user.png",
              "Personalized",
              "Simple questions guide the recommendation.",
            ],
            [
              "/lock.png",
              "Responsible",
              "Safety notes and label guidance are included.",
            ],
            [
              "/heartCross.png",
              "Everyday care",
              "Designed for common FMCG discovery journeys.",
            ],
            [
              "/heart.png",
              "Marketing-ready",
              "Tracks starts, drop-offs, and product interest.",
            ],
          ].map(([iconPath, title, text]) => (
            <Card key={title} className="p-5">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-pinkSoft"
              >
                <Image
                  src={iconPath}
                  alt={`${title} icon`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <h2 className="mt-3 font-black text-brand-navy">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </Card>
          ))}
        </section>
      </main>
    </>
  );
}
