"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  { id: 1, label: "Need" },
  { id: 2, label: "Questions" },
  { id: 3, label: "Results" },
  { id: 4, label: "Safety" },
];

const navLinks = [
  { label: "Product Finder", href: "#main-content" },
  { label: "Our Brands", href: "#" },
  { label: "Health Hub", href: "#" },
  { label: "Safety", href: "#" },
];

interface ProgressHeaderProps {
  currentStep: number;
}

export default function ProgressHeader({ currentStep }: ProgressHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const showProgress = currentStep >= 1 && currentStep <= 4;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main nav bar */}
      <nav
        className="w-full border-b border-slate-100 bg-white/95 shadow-nav backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Skip link */}
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-brand-pink focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white">
            Skip to main content
          </a>

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/reckitt-logo.png"
              alt="Reckitt"
              width={110}
              height={36}
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-brand-pinkSoft hover:text-brand-pink"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-brand-pinkSoft hover:text-brand-pink md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="2" x2="16" y2="16" />
                <line x1="16" y1="2" x2="2" y2="16" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="5" x2="16" y2="5" />
                <line x1="2" y1="9" x2="16" y2="9" />
                <line x1="2" y1="13" x2="16" y2="13" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="animate-fade-in border-t border-slate-100 bg-white px-4 pb-4 md:hidden">
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-pinkSoft hover:text-brand-pink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Step progress bar — shown during wizard steps 1–4 */}
      {showProgress && (
        <div className="w-full border-b border-slate-100 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 sm:gap-3">
              {steps.map((step, i) => {
                const done = currentStep > step.id;
                const active = currentStep === step.id;
                return (
                  <div key={step.id} className="flex flex-1 items-center gap-2 sm:gap-3">
                    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                      <div
                        className={[
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black transition-colors",
                          done
                            ? "bg-brand-pink text-white"
                            : active
                            ? "bg-brand-pink text-white ring-4 ring-pink-100"
                            : "bg-slate-100 text-slate-400",
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
                          "hidden text-xs font-semibold sm:block",
                          active ? "text-brand-navy" : done ? "text-slate-400" : "text-slate-400",
                        ].join(" ")}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="h-px flex-1 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full bg-brand-pink transition-all duration-500"
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
