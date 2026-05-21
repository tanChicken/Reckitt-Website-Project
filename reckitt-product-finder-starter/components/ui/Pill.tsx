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
        "rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all duration-200",
        selected
          ? "border-reckitt-pink bg-primary-fixed/30 text-deep-navy shadow-sm"
          : "border-border-subtle bg-white text-on-surface hover:border-secondary/40 hover:bg-surface-container-low",
        className
      )}
      aria-pressed={selected}
      {...props}
    >
      {children}
    </button>
  );
}
