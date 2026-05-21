"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { needOptions } from "@/data/productFinder";
import { cn } from "@/lib/cn";
import type { NeedId } from "@/types/productFinder";

/* ── Body area configuration ─────────────────────────────────────────────── */

type BodyAreaId = "head" | "throat" | "heart" | "chest" | "stomach";

interface BodyArea {
  id: BodyAreaId;
  label: string;
  icon: string;
  needIds: NeedId[];
  /** Position of the hotspot dot as percentage of the image container */
  dotPosition: { top: string; left: string };
}

const bodyAreas: BodyArea[] = [
  {
    id: "head",
    label: "Head",
    icon: "🧠",
    needIds: ["sore-throat", "pain-fever"],
    dotPosition: { top: "10%", left: "50%" },
  },
  {
    id: "throat",
    label: "Throat",
    icon: "🗣️",
    needIds: ["sore-throat"],
    dotPosition: { top: "22%", left: "50%" },
  },
  {
    id: "heart",
    label: "Heart",
    icon: "❤️",
    needIds: ["pain-fever"],
    dotPosition: { top: "36%", left: "44%" },
  },
  {
    id: "chest",
    label: "Chest",
    icon: "🫁",
    needIds: ["cough-mucus"],
    dotPosition: { top: "36%", left: "56%" },
  },
  {
    id: "stomach",
    label: "Stomach",
    icon: "🔥",
    needIds: ["heartburn"],
    dotPosition: { top: "52%", left: "50%" },
  },
];

const otherNeedIds: NeedId[] = ["personal-hygiene", "home-cleaning"];

interface NeedSelectionStepProps {
  selectedNeedId?: NeedId;
  onSelect: (needId: NeedId) => void;
  onBack: () => void;
}

export default function NeedSelectionStep({
  selectedNeedId,
  onSelect,
  onBack,
}: NeedSelectionStepProps) {
  const [activeArea, setActiveArea] = useState<BodyAreaId>("head");

  const currentArea = bodyAreas.find((a) => a.id === activeArea)!;

  const visibleNeeds = needOptions.filter((o) =>
    currentArea.needIds.includes(o.id as NeedId)
  );
  const otherNeeds = needOptions.filter((o) =>
    otherNeedIds.includes(o.id as NeedId)
  );

  const singleCard = visibleNeeds.length === 1;

  return (
    <section
      aria-labelledby="need-heading"
      className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start"
    >
      {/* ── Left: body diagram + area badge ─────────────────────────────── */}
      <div className="flex flex-col gap-5">
        {/* Step label + heading */}
        <div>
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

        {/*
         * ── MEDIA PLACEMENT ──────────────────────────────────────────────
         * Recommended : SVG or PNG with transparent background
         * Recommended size : 360 × 520 px (portrait ratio)
         * File location    : /public/body-diagram.png
         *
         * The <img> below already references this path.
         * ─────────────────────────────────────────────────────────────────
         */}
        <div className="relative flex min-h-[340px] flex-1 flex-col items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-white lg:min-h-[420px]">
          {/* Soft tint */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-surface-container-low/40 to-transparent" />

          {/* Body diagram image */}
          <img
            src="/body-diagram.png"
            alt="Body diagram"
            className="relative z-10 h-full w-full object-contain p-6"
          />

          {/* Hotspot dots */}
          {bodyAreas.map((area) => {
            const isActive = area.id === activeArea;
            return (
              <button
                key={area.id}
                onClick={() => setActiveArea(area.id)}
                aria-label={`Select ${area.label}`}
                aria-pressed={isActive}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{ top: area.dotPosition.top, left: area.dotPosition.left }}
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-deep-navy px-4 py-2 text-white shadow-soft">
            <span className="text-base leading-none">{currentArea.icon}</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              {currentArea.label} Selected
            </span>
          </div>
        </div>

        {/* Selected need info card */}
        {selectedNeedId && (() => {
          const sel = needOptions.find((o) => o.id === selectedNeedId);
          return sel ? (
            <div className="animate-fade-in rounded-xl border border-l-[3px] border-border-subtle border-l-reckitt-pink bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                Selected symptom
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-2xl leading-none">{sel.icon}</span>
                <div>
                  <p className="font-semibold text-deep-navy">{sel.label}</p>
                  <p className="text-xs text-secondary">{sel.description}</p>
                </div>
              </div>
            </div>
          ) : null;
        })()}

        {/* Back */}
        <Button variant="ghost" onClick={onBack} className="self-start text-sm">
          ← Back
        </Button>
      </div>

      {/* ── Right: body area selector + symptom cards ────────────────────── */}
      <div className="flex flex-col gap-5">
        {/* Body area selector */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary/60">
            Body Area
          </p>
          <div className="flex flex-col gap-1.5">
            {bodyAreas.map((area) => {
              const isActive = area.id === activeArea;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area.id)}
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

        {/* Active area header */}
        <div className="rounded-xl border border-l-4 border-border-subtle border-l-reckitt-pink bg-white p-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl leading-none">{currentArea.icon}</span>
            <div>
              <p className="font-semibold text-deep-navy">{currentArea.label}</p>
              <p className="text-xs text-secondary">
                {visibleNeeds.length} symptom{visibleNeeds.length !== 1 ? "s" : ""} available
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic symptom cards */}
        <div
          className={cn(
            "grid gap-3",
            singleCard ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
          )}
        >
          {visibleNeeds.map((option) => {
            const isSelected = option.id === selectedNeedId;
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option.id as NeedId)}
                aria-pressed={isSelected}
                className={cn(
                  "group flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-200",
                  singleCard ? "min-h-[88px]" : "",
                  isSelected
                    ? "border-reckitt-pink bg-primary-fixed/20 shadow-sm"
                    : "border-border-subtle bg-white hover:border-secondary/40 hover:shadow-card"
                )}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-200",
                      isSelected
                        ? "bg-reckitt-pink/10"
                        : "bg-surface-container-low group-hover:scale-110"
                    )}
                    aria-hidden="true"
                  >
                    {option.icon}
                  </div>
                  <div>
                    <p
                      className={cn(
                        "text-sm font-semibold",
                        isSelected ? "text-deep-navy" : "text-on-surface"
                      )}
                    >
                      {option.label}
                    </p>
                    <p className="text-xs text-secondary">{option.description}</p>
                  </div>
                </div>

                {/* Check / arrow indicator */}
                <span
                  className={cn(
                    "ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs transition-all duration-200",
                    isSelected
                      ? "bg-reckitt-pink text-white"
                      : "border border-border-subtle text-secondary/40 group-hover:border-reckitt-pink group-hover:text-reckitt-pink"
                  )}
                >
                  {isSelected ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1.5,5 4,7.5 8.5,2.5" />
                    </svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="5" x2="7" y2="5" /><polyline points="5.5,3 7.5,5 5.5,7" />
                    </svg>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Other needs (personal hygiene + home cleaning — not mapped to body areas) */}
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary/50">
            Other Needs
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {otherNeeds.map((option) => {
              const isSelected = option.id === selectedNeedId;
              return (
                <button
                  key={option.id}
                  onClick={() => onSelect(option.id as NeedId)}
                  aria-pressed={isSelected}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all duration-200",
                    isSelected
                      ? "border-reckitt-pink bg-primary-fixed/20"
                      : "border-border-subtle bg-white hover:border-secondary/40 hover:shadow-card"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg transition-all duration-200",
                      isSelected ? "bg-reckitt-pink/10" : "bg-surface-container-low group-hover:scale-110"
                    )}
                    aria-hidden="true"
                  >
                    {option.icon}
                  </div>
                  <div>
                    <p className={cn("text-xs font-semibold", isSelected ? "text-deep-navy" : "text-on-surface")}>
                      {option.label}
                    </p>
                    <p className="text-xs text-secondary line-clamp-1">{option.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="rounded-lg border border-border-subtle bg-surface-container-low/50 p-4">
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
              This tool provides general product-category guidance only and does not constitute medical advice. Always read product labels and consult a qualified healthcare professional if symptoms are severe, persistent, or affect vulnerable individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
