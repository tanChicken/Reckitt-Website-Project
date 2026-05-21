"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { bodyParts, bodySymptoms } from "@/data/productFinder";
import { cn } from "@/lib/cn";
import type { BodyPartId, SymsptomType } from "@/types/productFinder";

/* ── Body area configuration ─────────────────────────────────────────────── */

const dotPositions: Record<BodyPartId, { top: string; left: string }> = {
  head: { top: "20%", left: "50%" },
  throat: { top: "39%", left: "50%" },
  heart: { top: "50%", left: "50%" },
  chest: { top: "56%", left: "56%" },
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

  const bodyPart = bodyParts.find((a) => a.id === activePartId);
  const symptoms = bodySymptoms.find((s) => s.id === activePartId);
  const visibleSymptoms = symptoms?.symptom || [];
  
  const canContinue = !!activePartId; 

  return (
    <section aria-labelledby="need-heading" className="flex flex-col gap-6 w-full">
      {/* ── TOP: Topic Header (Full Width) ───────────────────────────────── */}
      <div className="w-full border-b border-border-subtle pb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
          Symptom Analysis
        </span>
        <h1
          id="need-heading"
          className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight text-deep-navy sm:text-4xl"
        >
          Where does it hurt?
        </h1>
        <p className="mt-2 text-sm leading-6 text-secondary">
          Select a body area to see relevant symptoms.
        </p>
      </div>

      {/* ── BOTTOM: 3-Column Content Layout ──────────────────────────────── */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.1fr] lg:items-start w-full">
        
        {/* ── COLUMN 1 (LEFT): Symptoms Covered & Disclaimer ──────────────── */}
        <div className="bg-white rounded-xl border border-border-subtle p-4 shadow-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary/60">
              Body Area
            </p>
            <div className="flex flex-col gap-1.5">
              {bodyParts.map((area) => {
                const isActive = area.id === activePartId;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActivePartId(area.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "border-reckitt-pink bg-reckitt-pink text-white shadow-pink"
                        : "border-border-subtle bg-white text-on-surface hover:border-secondary/40 hover:shadow-card"
                    )}
                  >
                    <span className="text-base leading-none">{area.icon}</span>
                    <span>{area.label}</span>
                    {isActive && (
                      <svg
                        className="ml-auto"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
        {/* ── COLUMN 2 (MIDDLE): Body Diagram Container ───────────────────── */}
        <div className="flex flex-col gap-5 w-full order-1 lg:order-2">
          <div className="relative flex h-[420px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-white">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-surface-container-low/40 to-transparent" />

            {/* Body diagram image */}
            <img
              src="/body-diagram.png"
              alt="Body diagram"
              className="relative z-10 h-full w-full object-contain p-6"
            />

            {/* Hotspot dots */}
            {bodyParts.map((part) => {
              const isActive = part.id === activePartId;
              const position = dotPositions[part.id];

              return (
                <button
                  key={part.id}
                  onClick={() => setActivePartId(part.id)}
                  aria-label={`Select ${part.label}`}
                  aria-pressed={isActive}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ top: position.top, left: position.left }}
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    {isActive && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-reckitt-pink opacity-50" />
                    )}
                    <span
                      className={cn(
                        "relative inline-flex h-4 w-4 rounded-full border-2 transition-all duration-200",
                        isActive
                          ? "border-white bg-reckitt-pink shadow-pink scale-125"
                          : "border-white bg-deep-navy/40 hover:bg-reckitt-pink/70 hover:scale-110"
                      )}
                    />
                  </span>
                </button>
              );
            })}

            {/* Active area badge */}
            {bodyPart && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-deep-navy px-4 py-2 text-white shadow-soft">
                <span className="text-base leading-none">{bodyPart.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {bodyPart.label} Selected
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── COLUMN 3 (RIGHT): Body Area Selector List ───────────────────── */}
        <div className="flex flex-col gap-6 w-full order-2 lg:order-3">
          <div className="flex flex-col gap-6 w-full order-2 md:order-3 lg:order-1 md:col-span-2 lg:col-span-1">
          
          {/* Isolated Symptoms Box */}
          <div className="bg-white rounded-xl border border-border-subtle p-4 shadow-sm min-h-[160px]">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary/60">
              Symptoms Covered
            </p>
            {visibleSymptoms.length > 0 ? (
              <div className="grid grid-cols-1 gap-2">
                {visibleSymptoms.map((symptomName) => (
                  <div
                    key={symptomName}
                    className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-container-low/30 p-3 transition-all duration-200"
                  >
                    <p className="text-sm font-semibold text-deep-navy">
                      {symptomName}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-secondary italic pt-2">No symptoms recorded for this zone.</p>
            )}
          </div>

          {/* Medical Disclaimer Panel */}
          <div className="rounded-xl border border-border-subtle bg-surface-container-low/50 p-4">
            <div className="flex items-start gap-2.5">
              <svg
                className="mt-0.5 shrink-0 text-secondary"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="6" />
                <line x1="7" y1="4.5" x2="7" y2="7.5" />
                <circle cx="7" cy="9.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              <p className="text-xs leading-5 text-secondary">
                <span className="font-semibold text-deep-navy">Medical Disclaimer: </span>
                This tool provides general product-category guidance only and does not constitute medical advice. Always read product labels.
              </p>
            </div>
          </div>
        </div>
        </div>

      </div>

      {/* ── Action Navigation Bar (Full Width Footer) ───────────────────── */}
      <div className="mt-4 flex flex-col justify-end gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center w-full">
        {/* Stagnant Back Button */}
        <div className="pt-1">
          <Button variant="ghost" onClick={onBack} className="text-sm">
            ← Back
          </Button>
        </div>
        <div className="pt-1">
          <Button
            onClick={onContinue}
            disabled={!canContinue}
            className="gap-2 sm:px-10"
          >
            {canContinue ? "See my recommendation" : "Select a body area to continue"}
            {canContinue && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="4" y1="8" x2="12" y2="8" /><polyline points="9,5 12,8 9,11" />
              </svg>
            )}
          </Button> 
        </div>
      </div>
    </section>
  );
}