import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PromptInput } from "@/components/PromptInput";
import { type GalleryImage } from "@/data/gallery";

interface HeroProps {
  onImageGenerated: (image: GalleryImage) => void;
}

export function Hero({ onImageGenerated }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden px-4 py-12 text-center sm:px-6 sm:py-16 lg:py-20"
      id="top"
    >
      <div className="particle-field absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-300/25 blur-3xl" />
      <div className="absolute bottom-12 left-[12%] h-44 w-44 animate-float rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute right-[10%] top-36 h-48 w-48 animate-float rounded-full bg-violet-400/15 blur-3xl [animation-delay:1.6s]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <div className="mb-5 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
          AI image generation playground
        </div>
        <h1 className="max-w-5xl bg-gradient-to-r from-slate-950 via-purple-700 to-fuchsia-600 bg-[length:200%_200%] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent animate-shimmer sm:text-6xl lg:text-7xl">
          Create images from text instantly
        </h1>
        <p className="mt-5 max-w-[640px] text-base leading-7 text-slate-500 sm:text-xl sm:leading-8">
          Type a prompt, choose a visual style, and preview the result without
          leaving the first screen.
        </p>
        <div className="mt-7 flex flex-col items-center gap-4">
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 sm:min-h-14 sm:text-base"
            href="#create"
          >
            Start creating
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              No credit card required
            </span>
            <span aria-hidden="true">·</span>
            <span>Unlimited generations</span>
          </p>
        </div>

        <div className="mt-8 w-full sm:mt-10">
          <PromptInput onImageGenerated={onImageGenerated} />
        </div>
      </div>
    </section>
  );
}
