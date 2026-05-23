"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// 3 visible steps — Safety is an epilogue, not a numbered step
const steps = [
  { id: 1, label: "Symptoms"   },
  { id: 2, label: "Assessment" },
  { id: 3, label: "Results"    },
];

const navLinks = [
  { label: "Symptom Finder", href: "/#main-content" },
  { label: "Products",       href: "/products"      },
];

interface ProgressHeaderProps {
  currentStep: number;
  /** Called when the user clicks the logo or "Symptom Finder" nav link while already on /. Should reset the wizard to the welcome step. */
  onHomeClick?: () => void;
}

export default function ProgressHeader({ currentStep, onHomeClick }: ProgressHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const showProgress = currentStep >= 1 && currentStep <= 4;
  // Step 4 (Safety) shows progress bar fully complete
  const effectiveStep = currentStep > 3 ? 4 : currentStep;

  // If we're already on the home route, intercept the click and reset the wizard
  // via the callback instead of letting Next.js no-op the navigation.
  function handleHomeClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!onHomeClick) return;
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      event.preventDefault();
      onHomeClick();
    }
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Nav bar ─────────────────────────────────── */}
      <nav
        className="w-full border-b border-border-subtle bg-white/95 backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-4 py-4 sm:px-8 lg:px-16">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-reckitt-pink focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
          >
            Skip to main content
          </a>

          {/* Logo — clicking returns to the welcome page (resets the wizard) */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reckitt-pink focus-visible:ring-offset-2"
            aria-label="Reckitt — back to welcome page"
          >
            <Image
              src="/reckitt-logo.png"
              alt="Reckitt"
              width={100}
              height={32}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isFinderLink = link.href.startsWith("/#") || link.href === "/";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={isFinderLink ? handleHomeClick : undefined}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-secondary transition-all duration-200 hover:bg-surface-container-low hover:text-deep-navy"
                >
                  {link.label}
                </Link>
              );
            })}
            {currentStep === 0 && (
              <Link
                href="/#main-content"
                onClick={handleHomeClick}
                className="ml-4 inline-flex min-h-10 items-center justify-center rounded-lg bg-reckitt-pink px-5 text-sm font-semibold text-white shadow-pink transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                Start Finder →
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-secondary transition-all duration-200 hover:bg-surface-container-low md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="2" x2="16" y2="16" /><line x1="16" y1="2" x2="2" y2="16" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="5" x2="16" y2="5" /><line x1="2" y1="9" x2="16" y2="9" /><line x1="2" y1="13" x2="16" y2="13" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="animate-slide-down border-t border-border-subtle bg-white px-4 pb-5 md:hidden">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => {
                const isFinderLink = link.href.startsWith("/#") || link.href === "/";
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-sm font-semibold text-secondary transition-all hover:bg-surface-container-low hover:text-deep-navy"
                    onClick={(e) => {
                      if (isFinderLink) handleHomeClick(e);
                      else setMobileOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {currentStep === 0 && (
                <Link
                  href="/#main-content"
                  className="mt-2 flex items-center justify-center rounded-lg bg-reckitt-pink px-4 py-3 text-sm font-semibold text-white"
                  onClick={handleHomeClick}
                >
                  Start Finder →
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ── Step progress bar ───────────────────────── */}
      {showProgress && (
        <div className="w-full border-b border-border-subtle bg-white/90 backdrop-blur-sm">
          <div className="mx-auto max-w-container-max px-4 py-3 sm:px-8 lg:px-16">
            <div className="flex items-center gap-2 sm:gap-3">
              {steps.map((step, i) => {
                const done   = effectiveStep > step.id;
                const active = effectiveStep === step.id;
                return (
                  <div key={step.id} className="flex flex-1 items-center gap-2 sm:gap-3">
                    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                      <div
                        className={[
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
                          done || active
                            ? "bg-reckitt-pink text-white"
                            : "bg-surface-container-high text-secondary",
                          active ? "ring-4 ring-primary-fixed" : "",
                        ].join(" ")}
                      >
                        {done ? (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="1.5,5 4,7.5 8.5,2.5" />
                          </svg>
                        ) : (
                          step.id
                        )}
                      </div>
                      <span
                        className={[
                          "hidden text-xs font-semibold transition-colors duration-300 sm:block",
                          active ? "text-deep-navy" : done ? "text-reckitt-pink" : "text-secondary opacity-60",
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
          </div>
        </div>
      )}
    </header>
  );
}
