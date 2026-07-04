"use client";

import { Download, Eye, Loader2, WandSparkles } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StyleSelector } from "@/components/StyleSelector";
import { type GalleryImage, sampleImages } from "@/data/gallery";

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
  const [result, setResult] = useState<GalleryImage | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

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
    setResult(null);
    window.setTimeout(() => {
      const imageIndex =
        Array.from(cleanPrompt).reduce((sum, char) => sum + char.charCodeAt(0), 0) %
        sampleImages.length;
      setResult({
        ...sampleImages[imageIndex],
        prompt: cleanPrompt
      });
      setLoading(false);
      requestAnimationFrame(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      });
    }, 1200);
  }

  return (
    <div id="create">
      <Card className="mx-auto max-w-4xl p-3 text-left sm:p-5">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition focus-within:border-purple-300 focus-within:shadow-[0_0_0_4px_rgba(168,85,247,0.14)]">
          <textarea
            className="block min-h-28 w-full resize-none rounded-t-2xl border-0 bg-transparent p-4 text-base leading-7 text-slate-900 outline-none placeholder:text-slate-400 sm:min-h-32 sm:p-5"
            onChange={(event) => resizeTextarea(event.target.value)}
            placeholder="Describe the image you want to create..."
            ref={textareaRef}
            rows={4}
            value={prompt}
          />
          <div className="flex flex-col gap-4 border-t border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
            <StyleSelector onChange={setStyle} value={style} />
            <Button
              className="min-w-full sm:min-w-40"
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
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-500 transition hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-200 sm:px-4"
              key={idea}
              onClick={() => {
                setPrompt(idea);
                requestAnimationFrame(() => resizeTextarea(idea));
                textareaRef.current?.focus();
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

        <div ref={resultRef} className="mt-5">
          {loading ? (
            <div className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[180px_1fr]">
              <div className="aspect-square animate-pulse rounded-xl bg-slate-200" />
              <div className="flex flex-col justify-center gap-3">
                <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-4/5 animate-pulse rounded bg-slate-200" />
              </div>
            </div>
          ) : result ? (
            <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[180px_1fr]">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100">
                <Image
                  alt={result.prompt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, 180px"
                  src={result.url}
                />
              </div>
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase text-purple-600">
                    Preview result
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                    {result.prompt}
                  </p>
                  <p className="mt-2 text-xs font-medium text-slate-400">
                    Style: {style}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                    href={result.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
                    download={`raphael-preview-${result.id}.jpg`}
                    href={result.url}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
