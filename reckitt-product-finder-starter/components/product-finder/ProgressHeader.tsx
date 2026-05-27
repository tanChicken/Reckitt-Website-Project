"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// 3 visible steps — Safety is an epilogue, not a numbered step
const steps = [
  { id: 1, label: "Symptoms" },
  { id: 2, label: "Assessment" },
  { id: 3, label: "Results" },
];

interface ProgressHeaderProps {
  currentStep: number;
  /** Called when the user clicks the logo while already on /. Should reset the wizard to the welcome step. */
  onHomeClick?: () => void;
}

export default function ProgressHeader({
  currentStep,
  onHomeClick,
}: ProgressHeaderProps) {
  const showProgress = currentStep >= 1 && currentStep <= 4;
  // Step 4 (Safety) shows progress bar fully complete
  const effectiveStep = currentStep > 3 ? 4 : currentStep;

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      // Fade out over the first 30% of the viewport height
      const fadeDistance = window.innerHeight * 0.3;
      const next = Math.max(0, 1 - window.scrollY / fadeDistance);
      setOpacity(next);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleHomeClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!onHomeClick) return;
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      event.preventDefault();
      onHomeClick();
    }
  }

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        opacity,
        pointerEvents: opacity < 0.05 ? "none" : "auto",
      }}
    >
      <nav aria-label="Main navigation">
        {/*
          ↓ Change py-3 here to resize the header height (e.g. py-2 = smaller, py-5 = taller)
        */}
        <div className="relative mx-auto flex w-full max-w-container-max items-center px-4 py-2 sm:px-8 lg:px-16">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-reckitt-pink focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
          >
            Skip to main content
          </a>

          {/* Logo — left-anchored */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reckitt-pink focus-visible:ring-offset-2"
            aria-label="Reckitt — back to welcome page"
          >
            <Image
              src="/sosLogo.png"
              alt="Reckitt"
              width={100}
              height={30}
              className="object-contain"
              priority
            />
          </Link>

          {/* Steps — absolutely centred in the header row */}
          {showProgress && (
            <div className="absolute left-1/2 -translate-x-1/2 flex w-44 items-center gap-2 sm:w-72 sm:gap-3">
              {steps.map((step, i) => {
                const done = effectiveStep > step.id;
                const active = effectiveStep === step.id;
                return (
                  <div
                    key={step.id}
                    className="flex flex-1 items-center gap-2 sm:gap-3"
                  >
                    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                      <div
                        className={[
                          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 sm:h-6 sm:w-6",
                          done || active
                            ? "bg-reckitt-pink text-white"
                            : "bg-surface-container-high text-secondary",
                          active ? "ring-4 ring-primary-fixed" : "",
                        ].join(" ")}
                      >
                        {done ? (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="1.5,5 4,7.5 8.5,2.5" />
                          </svg>
                        ) : (
                          step.id
                        )}
                      </div>
                      <span
                        className={[
                          "hidden text-xs font-semibold transition-colors duration-300 sm:block",
                          active
                            ? "text-deep-navy"
                            : done
                              ? "text-reckitt-pink"
                              : "text-secondary opacity-60",
                        ].join(" ")}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-surface-container-high">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-deep-navy to-reckitt-pink transition-all duration-500"
                          style={{ width: done ? "100%" : "0%" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
