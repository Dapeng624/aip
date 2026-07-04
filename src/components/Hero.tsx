import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-6 py-24 text-center"
      id="top"
    >
      <div className="particle-field absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="absolute bottom-12 left-[12%] h-48 w-48 animate-float rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute right-[10%] top-36 h-56 w-56 animate-float rounded-full bg-purple-500/20 blur-3xl [animation-delay:1.6s]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <div className="mb-6 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm backdrop-blur">
          Free AI image generation for everyone
        </div>
        <h1 className="max-w-5xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-[length:200%_200%] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent animate-shimmer sm:text-6xl lg:text-7xl">
          Free &amp; Unlimited AI Image Generator
        </h1>
        <p className="mt-7 max-w-[600px] text-xl leading-8 text-slate-500">
          Powered by cutting-edge AI models. No registration required. Start
          creating instantly.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-8 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition duration-200 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/30"
            href="#create"
          >
            Start Creating Free
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
      </div>
    </section>
  );
}
