import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  selected?: boolean;
}

export default function Pill({ children, selected, className, ...props }: PillProps) {
  return (
    <button
      className={cn(
        "rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
        selected
          ? "border-brand-pink bg-brand-pinkSoft text-brand-pink shadow-sm"
          : "border-slate-200 bg-white text-slate-700 hover:border-pink-300 hover:bg-pink-50",
        className
      )}
      aria-pressed={selected}
      {...props}
    >
      {children}
    </button>
  );
}
