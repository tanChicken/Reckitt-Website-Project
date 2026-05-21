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
        "rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200",
        selected
          ? "border-brand-pink bg-brand-pinkSoft text-brand-pink shadow-sm ring-2 ring-pink-100"
          : "border-slate-200 bg-white text-slate-700 hover:border-pink-300 hover:bg-pink-50 hover:text-brand-navy",
        className
      )}
      aria-pressed={selected}
      {...props}
    >
      {children}
    </button>
  );
}
