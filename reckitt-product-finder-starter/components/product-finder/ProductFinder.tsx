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
  BodyPartId,
  PreferenceId,
  SeverityId,
} from "@/types/productFinder";
import Image from "next/image";
import Link from "next/link";

const initialAnswers: FinderAnswers = { preferenceIds: [] };

const trustFeatures = [
  { icon: "🛡", title: "Trusted brands",    text: "Known health, hygiene, and home-care categories."    },
  { icon: "👤", title: "Personalized",      text: "Simple questions guide the recommendation."          },
  { icon: "🔒", title: "Responsible",       text: "Safety notes and label guidance are included."       },
  { icon: "❤", title: "Everyday care",     text: "Designed for common FMCG discovery journeys."        },
  { icon: "📊", title: "Marketing-ready",   text: "Tracks starts, drop-offs, and product interest."     },
];

const footerLinks = [
  { heading: "Product Finder", links: ["How it works", "Our brands", "Health categories", "FAQs"]         },
  { heading: "Company",        links: ["About Reckitt", "Sustainability", "Investors", "Careers"]          },
  { heading: "Support",        links: ["Safety guidance", "Contact us", "Privacy policy", "Terms of use"] },
];

export default function ProductFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FinderAnswers>(initialAnswers);

  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

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
      <ProgressHeader currentStep={step} />

      <main
        id="main-content"
        className="mx-auto w-full max-w-container-max px-4 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-16 lg:pt-12"
      >
        {/* Wizard card */}
        <Card className="min-h-[600px] p-5 shadow-card sm:p-8 lg:p-10">
          <div key={step} className="animate-fade-slide-up">
            {step === 0 && <WelcomeStep onStart={() => moveTo(1, "finder_started")} />}
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

        {/* Trust features */}
        <section
          className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
          aria-label="Trust features"
        >
          {trustFeatures.map(({ icon, title, text }) => (
            <div
              key={title}
              className="group flex flex-col gap-3 rounded-xl border border-border-subtle bg-white p-5 transition-all duration-200 hover:-translate-y-px hover:shadow-card"
            >
              <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-xl"
              >
                {icon}
              </div>
              <div>
                <h2 className="text-sm font-bold text-deep-navy">{title}</h2>
                <p className="mt-1 text-xs leading-5 text-secondary">{text}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="mt-4 border-t border-white/10 bg-deep-navy">
        <div className="mx-auto max-w-container-max px-4 py-12 sm:px-8 lg:px-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <Image
                src="/reckitt-logo.png"
                alt="Reckitt"
                width={96}
                height={30}
                className="object-contain brightness-0 invert"
              />
              <p className="mt-4 text-sm leading-6 text-secondary-fixed-dim">
                Making access to health, hygiene and nutrition a right, not a privilege.
              </p>
            </div>

            {footerLinks.map(({ heading, links }) => (
              <div key={heading}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-surface-variant">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-secondary-fixed-dim transition-colors duration-150 hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-surface-variant">
              © {new Date().getFullYear()} Reckitt Benckiser Group PLC. All rights reserved.
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
