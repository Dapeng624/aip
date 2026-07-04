"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DialogProps {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  title?: string;
  onOpenChange: (open: boolean) => void;
}

export function Dialog({
  children,
  className,
  open,
  title,
  onOpenChange
}: DialogProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4 backdrop-blur-md"
      role="dialog"
    >
      <button
        aria-label="Close dialog"
        className="absolute inset-0 cursor-default"
        onClick={() => onOpenChange(false)}
        type="button"
      />
      <div
        className={cn(
          "relative z-10 max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl",
          className
        )}
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
          <h2 className="min-w-0 truncate text-base font-semibold text-slate-950">
            {title}
          </h2>
          <Button
            aria-label="Close dialog"
            className="shrink-0"
            onClick={() => onOpenChange(false)}
            type="button"
            variant="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
