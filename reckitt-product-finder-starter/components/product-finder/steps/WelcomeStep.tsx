import Button from "@/components/ui/Button";
import Image from "next/image";

interface WelcomeStepProps {
  onStart: () => void;
}

const quickFeatures = [
  { icon: "⏱", title: "Quick",        text: "Takes 1–2 mins"              },
  { icon: "🧭", title: "Guided",       text: "Step-by-step"                 },
  { icon: "🛡", title: "Safety-first", text: "Label guidance included"      },
];

const showcaseProducts = [
  { brand: "Strepsils", label: "Sore throat & cough", logo: "/brands/strepsils.png" },
  { brand: "Nurofen",   label: "Pain & fever",        logo: "/brands/nurofen.png"   },
  { brand: "Gaviscon",  label: "Heartburn & indigestion", logo: "/brands/gaviscon.png" },
  { brand: "Cardiprin", label: "Cardiovascular care", logo: "/brands/cardiprin.png" },
];

export default function WelcomeStep({ onStart }: WelcomeStepProps) {
  return (
    <section
      className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center"
      aria-labelledby="welcome-heading"
    >
      {/* ── Left: hero copy ─────────────────────────── */}
      <div className="space-y-6 lg:space-y-8">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-2 shadow-card">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-reckitt-pink opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-reckitt-pink" />
          </span>
          <span className="text-sm font-semibold text-deep-navy">Welcome to Reckitt</span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1
            id="welcome-heading"
            className="max-w-xl font-display text-4xl font-bold leading-tight tracking-tight text-deep-navy sm:text-5xl"
          >
            Find the right care{" "}
            <span className="text-reckitt-pink">in under a minute</span>
          </h1>
          <p className="max-w-lg text-base leading-7 text-secondary">
            Answer a few simple questions and get a responsible product-category
            suggestion for health, hygiene, or home care.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button onClick={onStart} className="w-full justify-center px-8 py-3 text-base sm:w-auto">
            Start now →
          </Button>
          <Button
            variant="secondary"
            className="w-full justify-center px-6 sm:w-auto"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
          >
            Learn more
          </Button>
        </div>

        {/* Feature mini cards */}
        <div className="grid gap-3 sm:grid-cols-3">
          {quickFeatures.map(({ icon, title, text }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-xl border border-border-subtle bg-white p-4 shadow-card transition-all duration-200 hover:-translate-y-px hover:shadow-card-hover"
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container-low text-xl"
                aria-hidden="true"
              >
                {icon}
              </div>
              <div>
                <p className="text-sm font-bold text-deep-navy">{title}</p>
                <p className="text-xs text-secondary">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: product showcase ──────────────────── */}
      <div className="rounded-xl border border-border-subtle bg-white p-6 shadow-soft">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary">
            Example categories
          </p>
          <span className="rounded-full border border-border-subtle px-2.5 py-1 text-xs font-semibold text-secondary">
            4 brands
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {showcaseProducts.map(({ brand, label, logo }) => (
            <div
              key={brand}
              className="group rounded-xl border border-border-subtle bg-surface-gray p-4 transition-all duration-200 hover:-translate-y-px hover:border-reckitt-pink/30 hover:shadow-card"
            >
              {/* Brand logo — store at /public/brands/<brand-lowercase>.png */}
              <div className="flex h-14 w-full items-center justify-center rounded-lg bg-white p-2">
                <Image
                  src={logo}
                  alt={`${brand} logo`}
                  width={160}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm font-bold text-deep-navy">{brand}</p>
              <p className="text-xs text-secondary">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
