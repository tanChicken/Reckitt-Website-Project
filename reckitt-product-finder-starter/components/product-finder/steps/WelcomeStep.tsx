import Button from "@/components/ui/Button";
import Image from "next/image";

interface WelcomeStepProps {
  onStart: () => void;
}

const quickFeatures = [
  { iconPath: "/clock.png", title: "Quick", text: "Takes 1–2 mins" },
  { iconPath: "/compass.png", title: "Guided", text: "Step-by-step" },
  { iconPath: "/shield.png", title: "Safety-first", text: "Label guidance included" },
];

const showcaseProducts = [
  { brand: "Strepsils", label: "Sore throat" },
  { brand: "Nurofen", label: "Pain & fever" },
  { brand: "Mucinex", label: "Cough & mucus" },
  { brand: "Gaviscon", label: "Heartburn" },
  { brand: "Dettol", label: "Hygiene" },
  { brand: "Finish", label: "Home care" },
];

export default function WelcomeStep({ onStart }: WelcomeStepProps) {
  return (
    <section
      className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center"
      aria-labelledby="welcome-heading"
    >
      {/* Left: hero copy */}
      <div className="space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-brand-pinkSoft px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-brand-pink" aria-hidden="true" />
          <span className="text-sm font-semibold text-brand-pink">Welcome to Reckitt</span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1
            id="welcome-heading"
            className="max-w-xl text-4xl font-black leading-[1.1] tracking-tight text-brand-navy sm:text-5xl md:text-6xl"
          >
            Find the right care{" "}
            <span className="text-brand-pink">in under a minute</span>
          </h1>
          <p className="max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
            Answer a few simple questions and get a responsible product-category
            suggestion for health, hygiene, or home care.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <Button onClick={onStart} className="px-8 py-3 text-base">
            Start now →
          </Button>
          <Button
            variant="secondary"
            className="px-6"
            onClick={() =>
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
            }
          >
            Learn more
          </Button>
        </div>

        {/* Feature mini cards */}
        <div className="grid gap-3 sm:grid-cols-3">
          {quickFeatures.map(({ iconPath, title, text }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-card"
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-pinkSoft"
                aria-hidden="true"
              >
                <Image src={iconPath} alt="" width={20} height={20} className="object-contain" />
              </div>
              <div>
                <p className="text-sm font-black text-brand-navy">{title}</p>
                <p className="text-xs text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: product showcase card */}
      <div className="rounded-4xl border border-pink-100 bg-gradient-to-br from-brand-pinkSoft via-white to-pink-50 p-6 shadow-soft">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-pink">
          Example categories
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {showcaseProducts.map(({ brand, label }) => (
            <div
              key={brand}
              className="group rounded-2xl border border-pink-100 bg-white p-4 shadow-card transition hover:border-brand-pink hover:shadow-cardHover"
            >
              <div className="grid h-14 w-full place-items-center rounded-xl bg-brand-pinkSoft text-lg font-black text-brand-pink transition group-hover:bg-brand-pinkMid">
                {brand.slice(0, 2).toUpperCase()}
              </div>
              <p className="mt-2.5 text-sm font-black text-brand-navy">{brand}</p>
              <p className="text-xs text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
