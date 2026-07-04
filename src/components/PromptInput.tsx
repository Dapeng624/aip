"use client";

import { Loader2, WandSparkles } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StyleSelector } from "@/components/StyleSelector";

const promptIdeas = [
  "A futuristic cyberpunk city at night",
  "A majestic dragon soaring through stormy clouds",
  "An enchanted forest with glowing mushrooms",
  "A tiny astronaut gardening on a floating island",
  "A premium product photo of translucent headphones"
];

export function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [loading, setLoading] = useState(false);
  const [lastPrompt, setLastPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function resizeTextarea(value: string) {
    const node = textareaRef.current;
    if (!node) return;
    node.style.height = "auto";
    node.style.height = `${Math.min(node.scrollHeight, 260)}px`;
    setPrompt(value);
  }

  function submit() {
    const cleanPrompt = prompt.trim();
    if (!cleanPrompt || loading) return;

    setLoading(true);
    setLastPrompt(`${cleanPrompt} · ${style}`);
    window.setTimeout(() => {
      setLoading(false);
    }, 1200);
  }

  return (
    <section className="px-6 pb-24" id="create">
      <Card className="mx-auto max-w-4xl p-4 sm:p-6">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition focus-within:border-purple-300 focus-within:shadow-[0_0_0_4px_rgba(168,85,247,0.14)]">
          <textarea
            className="block min-h-32 w-full resize-none rounded-t-2xl border-0 bg-transparent p-5 text-base leading-7 text-slate-900 outline-none placeholder:text-slate-400"
            onChange={(event) => resizeTextarea(event.target.value)}
            placeholder="Describe the image you want to create..."
            ref={textareaRef}
            rows={4}
            value={prompt}
          />
          <div className="flex flex-col gap-4 border-t border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
            <StyleSelector onChange={setStyle} value={style} />
            <Button
              className="min-w-40"
              disabled={loading || prompt.trim().length === 0}
              onClick={submit}
              type="button"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <WandSparkles className="h-4 w-4" />
                  Generate
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {promptIdeas.map((idea) => (
            <button
              className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-500 transition hover:scale-105 hover:border-purple-200 hover:text-purple-700"
              key={idea}
              onClick={() => {
                setPrompt(idea);
                requestAnimationFrame(() => resizeTextarea(idea));
              }}
              type="button"
            >
              {idea}
            </button>
          ))}
        </div>

        <div className="mt-5 min-h-6 text-center text-sm font-medium text-slate-500">
          {loading
            ? "Rendering your image preview..."
            : lastPrompt
              ? `Generated preview request: ${lastPrompt}`
              : "Choose a prompt idea or write your own to begin."}
        </div>
      </Card>
    </section>
  );
}
