import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-pink to-brand-pinkDark text-white shadow-pink hover:shadow-pinkLg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:translate-y-0",
  secondary:
    "border border-pink-200 bg-white text-brand-pink hover:bg-brand-pinkSoft hover:border-brand-pink hover:-translate-y-0.5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
  ghost:
    "text-slate-600 hover:bg-slate-100 hover:text-brand-navy active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
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
        "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition-all duration-200",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
