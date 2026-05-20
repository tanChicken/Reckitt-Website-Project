import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { needOptions } from "@/data/productFinder";
import { cn } from "@/lib/cn";
import type { NeedId } from "@/types/productFinder";

interface NeedSelectionStepProps {
  selectedNeedId?: NeedId;
  onSelect: (needId: NeedId) => void;
  onBack: () => void;
}

export default function NeedSelectionStep({ selectedNeedId, onSelect, onBack }: NeedSelectionStepProps) {
  return (
    <section aria-labelledby="need-heading">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-pink">Step 1</p>
          <h1 id="need-heading" className="mt-2 text-4xl font-black text-brand-navy">
            What do you need help with today?
          </h1>
          <p className="mt-2 text-slate-600">Choose the option that best describes your need.</p>
        </div>
        <Button variant="ghost" onClick={onBack}>← Back</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {needOptions.map((option) => {
          const selected = option.id === selectedNeedId;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                "group rounded-3xl border bg-white p-6 text-left shadow-card transition hover:-translate-y-1 hover:border-brand-pink hover:shadow-soft",
                selected ? "border-brand-pink ring-4 ring-pink-100" : "border-pink-100"
              )}
              aria-pressed={selected}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-pinkSoft text-3xl" aria-hidden="true">
                  {option.icon}
                </div>
                <span className={cn("text-xl font-black", selected ? "text-brand-pink" : "text-slate-300 group-hover:text-brand-pink")}>
                  {selected ? "✓" : "→"}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-black text-brand-navy">{option.label}</h2>
              <p className="mt-2 leading-7 text-slate-600">{option.description}</p>
            </button>
          );
        })}
      </div>

      <Card className="mt-6 p-5">
        <p className="text-sm text-slate-600">
          <strong className="text-brand-pink">Not sure?</strong> Pick the closest option. The next questions help refine the recommendation.
        </p>
      </Card>
    </section>
  );
}
