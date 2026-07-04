"use client";

import { cn } from "@/lib/utils";

const styles = ["Realistic", "Anime", "Oil Painting", "Fantasy", "3D Render"];

interface StyleSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2" role="radiogroup">
      {styles.map((style) => (
        <button
          aria-checked={value === style}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-semibold transition hover:scale-105",
            value === style
              ? "border-purple-300 bg-purple-600 text-white shadow-lg shadow-purple-500/20"
              : "border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:text-slate-950"
          )}
          key={style}
          onClick={() => onChange(style)}
          role="radio"
          type="button"
        >
          {style}
        </button>
      ))}
    </div>
  );
}
