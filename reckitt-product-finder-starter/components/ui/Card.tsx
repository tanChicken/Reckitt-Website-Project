import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-pink-100 bg-white/95 shadow-card backdrop-blur",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
