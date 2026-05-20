import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface WelcomeStepProps {
  onStart: () => void;
}

export default function WelcomeStep({ onStart }: WelcomeStepProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center" aria-labelledby="welcome-heading">
      <div className="space-y-7">
        <div className="inline-flex rounded-full bg-brand-pinkSoft px-4 py-2 text-sm font-bold text-brand-pink">
          ♥ Welcome to the product finder
        </div>
        <div className="space-y-4">
          <h1 id="welcome-heading" className="max-w-3xl text-5xl font-black leading-tight text-brand-navy md:text-7xl">
            Find the right care in under a minute
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Answer a few simple questions and get a responsible product-category suggestion for health, hygiene, or home care.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={onStart} className="px-8">
            Start now →
          </Button>
          <Button variant="secondary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
            View trust points
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["⏱️", "Quick", "Takes 1–2 mins"],
            ["🧭", "Guided", "Step-by-step"],
            ["🛡️", "Safety-first", "Label guidance included"]
          ].map(([icon, title, text]) => (
            <Card key={title} className="p-5">
              <div className="text-2xl" aria-hidden="true">{icon}</div>
              <p className="mt-3 font-black text-brand-navy">{title}</p>
              <p className="mt-1 text-sm text-slate-500">{text}</p>
            </Card>
          ))}
        </div>
      </div>

      <Card className="overflow-hidden p-6">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-pinkSoft via-white to-pink-50 p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">Example categories</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["Strepsils", "Sore throat"],
              ["Nurofen", "Pain & fever"],
              ["Mucinex", "Cough & mucus"],
              ["Gaviscon", "Heartburn"],
              ["Dettol", "Hygiene"],
              ["Finish", "Home care"]
            ].map(([brand, label]) => (
              <div key={brand} className="rounded-3xl border border-pink-100 bg-white p-4 shadow-sm">
                <div className="grid h-16 w-full place-items-center rounded-2xl bg-brand-pinkSoft text-xl font-black text-brand-pink">
                  {brand.slice(0, 2).toUpperCase()}
                </div>
                <p className="mt-3 font-black text-brand-navy">{brand}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
