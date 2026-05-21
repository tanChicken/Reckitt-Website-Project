"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { bodyParts, bodySymptoms } from "@/data/productFinder";
import { cn } from "@/lib/cn";
import type { BodyPartId } from "@/types/productFinder";

const dotPositions: Record<BodyPartId, { top: string; left: string }> = {
  head:    { top: "20%", left: "50%" },
  throat:  { top: "39%", left: "50%" },
  heart:   { top: "50%", left: "50%" },
  chest:   { top: "56%", left: "56%" },
  stomach: { top: "67%", left: "50%" },
};

interface NeedSelectionStepProps {
  selectedBodyPart?: BodyPartId;
  onSelect: (symptom: BodyPartId) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function NeedSelectionStep({
  selectedBodyPart,
  onSelect,
  onBack,
  onContinue,
}: NeedSelectionStepProps) {
  const [activePartId, setActivePartId] = useState<BodyPartId>("head");

  const bodyPart   = bodyParts.find((a) => a.id === activePartId);
  const symptoms   = bodySymptoms.find((s) => s.id === activePartId);
  const visibleSymptoms = symptoms?.symptom ?? [];
  const canContinue = !!activePartId;

  return (
    <section aria-labelledby="need-heading" className="flex flex-col gap-5 w-full">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="border-b border-border-subtle pb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
          Symptom Analysis
        </span>
        <h1
          id="need-heading"
          className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-deep-navy sm:text-3xl lg:text-4xl"
        >
          Where does it hurt?
        </h1>
        <p className="mt-1.5 text-sm leading-6 text-secondary">
          Select a body area to see relevant symptoms.
        </p>
      </div>

      {/* ── 3-column grid ──────────────────────────────────────────────── */}
      {/*
       * Mobile  (< md)  : single column — area selector → diagram → symptoms
       * Tablet  (md)    : 2 columns — [area selector | diagram] above [symptoms spanning both]
       * Desktop (lg)    : 3 equal columns side-by-side
       */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.1fr] lg:items-start">

        {/* ── COL 1: Area selector ─────────────────────────────────────── */}
        <div className="rounded-xl border border-border-subtle bg-white p-4 shadow-sm">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary/60">
            Body Area
          </p>
          {/*
           * Mobile : horizontal scrollable pills (compact, finger-friendly)
           * md+    : vertical full-width buttons
           */}
          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:gap-1.5 md:overflow-visible md:pb-0">
            {bodyParts.map((area) => {
              const isActive = area.id === activePartId;
              return (
                <button
                  key={area.id}
                  onClick={() => setActivePartId(area.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 border font-semibold transition-all duration-200",
                    /* mobile pill style */
                    "rounded-full px-3 py-1.5 text-xs whitespace-nowrap",
                    /* md+ full-width style */
                    "md:w-full md:shrink md:rounded-lg md:px-4 md:py-3 md:text-sm md:gap-3 md:whitespace-normal",
                    isActive
                      ? "border-reckitt-pink bg-reckitt-pink text-white shadow-pink"
                      : "border-border-subtle bg-white text-on-surface hover:border-secondary/40 hover:shadow-card"
                  )}
                >
                  <span className="text-sm leading-none">{area.icon}</span>
                  <span>{area.label}</span>
                  {isActive && (
                    <svg
                      className="ml-auto hidden md:block shrink-0"
                      width="14" height="14" viewBox="0 0 14 14"
                      fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="2,7 6,11 12,3" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── COL 2: Body diagram ──────────────────────────────────────── */}
        {/*
         * ── MEDIA PLACEMENT ──────────────────────────────────────────
         * Body diagram image: /public/body-diagram.png
         * Recommended: SVG or PNG with transparent background, portrait ratio
         * ─────────────────────────────────────────────────────────────
         */}
        <div>
          <div className="relative flex h-[220px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-white sm:h-[280px] md:h-[360px] lg:h-[420px]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-surface-container-low/40 to-transparent" />

            <img
              src="/body-diagram.png"
              alt="Body diagram showing selectable areas"
              className="relative z-10 h-full w-full object-contain p-4 sm:p-6"
            />

            {/* Hotspot dots */}
            {bodyParts.map((part) => {
              const isActive = part.id === activePartId;
              const pos = dotPositions[part.id];
              return (
                <button
                  key={part.id}
                  onClick={() => setActivePartId(part.id)}
                  aria-label={`Select ${part.label}`}
                  aria-pressed={isActive}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ top: pos.top, left: pos.left }}
                >
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    {isActive && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-reckitt-pink opacity-50" />
                    )}
                    <span
                      className={cn(
                        "relative inline-flex h-4 w-4 rounded-full border-2 transition-all duration-200",
                        isActive
                          ? "scale-125 border-white bg-reckitt-pink shadow-pink"
                          : "border-white bg-deep-navy/40 hover:scale-110 hover:bg-reckitt-pink/70"
                      )}
                    />
                  </span>
                </button>
              );
            })}

            {/* Active area badge */}
            {bodyPart && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-deep-navy px-3 py-1.5 text-white shadow-soft whitespace-nowrap">
                <span className="text-sm leading-none">{bodyPart.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {bodyPart.label} Selected
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── COL 3: Symptoms + Disclaimer ─────────────────────────────── */}
        {/* Spans both columns on tablet so it fills the row below the 2-col layout */}
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">

          {/* Symptoms covered */}
          <div className="rounded-xl border border-border-subtle bg-white p-4 shadow-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary/60">
              Symptoms Covered
            </p>
            {visibleSymptoms.length > 0 ? (
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                {visibleSymptoms.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-2.5 rounded-lg border border-border-subtle bg-surface-container-low/30 px-3 py-2.5"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-reckitt-pink" aria-hidden="true" />
                    <p className="text-sm font-semibold text-deep-navy">{name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm italic text-secondary">No symptoms recorded for this zone.</p>
            )}
          </div>

          {/* Medical Disclaimer */}
          <div className="rounded-xl border border-border-subtle bg-surface-container-low/50 p-4">
            <div className="flex items-start gap-2.5">
              <svg
                className="mt-0.5 shrink-0 text-secondary"
                width="14" height="14" viewBox="0 0 14 14"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="6" />
                <line x1="7" y1="4.5" x2="7" y2="7.5" />
                <circle cx="7" cy="9.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              <p className="text-xs leading-5 text-secondary">
                <span className="font-semibold text-deep-navy">Medical Disclaimer: </span>
                This tool provides general product-category guidance only and does not constitute
                medical advice. Always read product labels and consult a healthcare professional if
                symptoms are severe or persistent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Action bar ─────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 border-t border-border-subtle pt-5 sm:flex-row sm:items-center sm:justify-end">
        <Button variant="ghost" onClick={onBack} className="w-full justify-center sm:w-auto text-sm">
          ← Back
        </Button>
        <Button
          onClick={onContinue}
          disabled={!canContinue}
          className="w-full justify-center gap-2 sm:w-auto sm:px-10"
        >
          <span className="hidden sm:inline">
            {canContinue ? "See my recommendation" : "Select a body area first"}
          </span>
          <span className="sm:hidden">
            {canContinue ? "Continue" : "Select an area first"}
          </span>
          {canContinue && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" y1="8" x2="12" y2="8" /><polyline points="9,5 12,8 9,11" />
            </svg>
          )}
        </Button>
      </div>
    </section>
  );
}
