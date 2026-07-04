import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/25 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/30",
  secondary:
    "bg-slate-950 text-white hover:scale-105 hover:bg-slate-800",
  ghost:
    "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-950",
  outline:
    "border border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-white",
  icon:
    "border border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-white"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-60",
          variants[variant],
          variant === "icon" && "h-10 w-10 px-0",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
