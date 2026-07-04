import { Infinity, Rocket, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Infinity,
    title: "Unlimited Free",
    description: "No credits, no limits. Generate as many images as you want."
  },
  {
    icon: Rocket,
    title: "No Registration",
    description: "Start creating instantly. No sign-up required."
  },
  {
    icon: Sparkles,
    title: "Highest Quality",
    description:
      "Powered by state-of-the-art AI models for stunning results."
  },
  {
    icon: Zap,
    title: "Fast Generation",
    description: "Get your images in seconds, not minutes."
  }
];

export function Features() {
  return (
    <section className="bg-slate-50 px-6 py-24" id="features">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase text-purple-600">
            Highlights
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Built for instant creation
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                key={feature.title}
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
