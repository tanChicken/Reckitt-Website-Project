import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-pink text-white shadow-soft hover:bg-brand-pinkDark disabled:cursor-not-allowed disabled:opacity-50",
  secondary:
    "border border-pink-200 bg-white text-brand-pink hover:bg-brand-pinkSoft disabled:cursor-not-allowed disabled:opacity-50",
  ghost: "text-brand-pink hover:bg-brand-pinkSoft disabled:cursor-not-allowed disabled:opacity-50"
};

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
