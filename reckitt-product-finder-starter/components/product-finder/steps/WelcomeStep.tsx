"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface WelcomeStepProps {
  onStart: () => void;
}

const slides = [
  {
    src: "/family-care.png",
    alt: "A family using Reckitt products for everyday health and wellness",
  },
  {
    src: "/kiosk.png",
    alt: "Reckitt SOS Corner kiosk at a pharmacy",
  },
];

const INTERVAL_MS = 4500;

export default function WelcomeStep({ onStart }: WelcomeStepProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch"
      aria-labelledby="welcome-heading"
    >
      {/* ── Right: hero copy ────────────────────────── */}
      <div className="flex flex-col justify-center space-y-5 lg:space-y-7">
        {/* Status badge */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-white px-3 py-1.5 shadow-card sm:px-4 sm:py-2">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-reckitt-pink opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-reckitt-pink" />
          </span>
          <span className="text-xs font-semibold text-deep-navy sm:text-sm">
            Welcome to your SOS Corner
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1
            id="welcome-heading"
            className="font-display text-[2.2rem] font-bold leading-[1.1] tracking-tight text-deep-navy sm:text-5xl"
          >
            Find the right care{" "}
          </h1>
          <h1
            id="welcome-heading"
            className="text-reckitt-pink font-display text-[2.2rem] font-bold leading-[1.1] tracking-tight text-deep-navy sm:text-5xl"
          >
            in just a few steps
          </h1>
          <p className="text-base leading-6 text-secondary sm:text-lg sm:leading-7">
            Answer a few simple questions for a tailored product suggestion.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            onClick={onStart}
            className="min-h-[52px] w-full justify-center px-8 text-base font-bold sm:min-h-11 sm:w-auto"
          >
            Start Now →
          </Button>
        </div>
      </div>

      {/* ── Left: image carousel ────────────────────── */}
      {/* Replaced min-h-64 and sm:min-h-80 with responsive aspect ratios */}
      <div className="relative w-full aspect-[1/1.4] md:aspect-[3/4] lg:aspect-auto lg:min-h-[540px] overflow-hidden rounded-2xl">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-[center_55%] lg:object-contain"
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        ))}

        {/* Bottom gradient overlay */}
        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-deep-navy/80 to-transparent" /> */}

        {/* Slide label */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-5">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-1.5 rounded-full bg-white transition-all duration-300"
                style={{ width: i === active ? "24px" : "6px", opacity: i === active ? 1 : 0.45 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
