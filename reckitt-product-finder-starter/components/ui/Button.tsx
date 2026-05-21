import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-reckitt-pink text-white shadow-pink hover:brightness-110 hover:-translate-y-px active:scale-95 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:translate-y-0",
  secondary:
    "border border-deep-navy text-deep-navy bg-white hover:bg-surface-container-low active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
  ghost:
    "text-secondary hover:bg-surface-container-low hover:text-deep-navy active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold tracking-wide transition-all duration-200",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
