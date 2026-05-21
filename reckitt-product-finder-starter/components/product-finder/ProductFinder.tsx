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

const trustFeatures = [
  {
    iconPath: "/shield.png",
    title: "Trusted brands",
    text: "Known health, hygiene, and home-care categories.",
  },
  {
    iconPath: "/user.png",
    title: "Personalized",
    text: "Simple questions guide the recommendation.",
  },
  {
    iconPath: "/lock.png",
    title: "Responsible",
    text: "Safety notes and label guidance are included.",
  },
  {
    iconPath: "/heartCross.png",
    title: "Everyday care",
    text: "Designed for common FMCG discovery journeys.",
  },
  {
    iconPath: "/heart.png",
    title: "Marketing-ready",
    text: "Tracks starts, drop-offs, and product interest.",
  },
];

const footerLinks = [
  {
    heading: "Product Finder",
    links: ["How it works", "Our brands", "Health categories", "FAQs"],
  },
  {
    heading: "Company",
    links: ["About Reckitt", "Sustainability", "Investors", "Careers"],
  },
  {
    heading: "Support",
    links: ["Safety guidance", "Contact us", "Privacy policy", "Terms of use"],
  },
];

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
        className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12"
      >
        {/* Wizard card with step transition */}
        <Card className="min-h-[580px] p-5 sm:p-8 lg:p-10">
          <div key={step} className="animate-fade-slide-up">
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
          </div>
        </Card>

        {/* Trust features section */}
        <section
          className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
          aria-label="Trust features"
        >
          {trustFeatures.map(({ iconPath, title, text }) => (
            <Card
              key={title}
              className="group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-pinkSoft transition-colors group-hover:bg-brand-pinkMid"
              >
                <Image
                  src={iconPath}
                  alt=""
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h2 className="mt-3 text-sm font-black text-brand-navy">{title}</h2>
              <p className="mt-1.5 text-sm leading-6 text-slate-500">{text}</p>
            </Card>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-6 border-t border-slate-200 bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Top row: logo + link columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Image
                src="/reckitt-logo.png"
                alt="Reckitt"
                width={100}
                height={32}
                className="object-contain brightness-0 invert"
              />
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Making access to health, hygiene and nutrition a right, not a privilege.
              </p>
            </div>

            {footerLinks.map(({ heading, links }) => (
              <div key={heading}>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-400 transition-colors duration-150 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom row: legal */}
          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Reckitt Benckiser Group PLC. All rights reserved.
            </p>
            <p className="text-xs text-slate-600">
              This tool provides general guidance only — not medical advice.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
