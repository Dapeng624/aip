"use client";

import { Github, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#gallery", label: "Gallery" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <a
          aria-label="Raphael Clone home"
          className="flex items-center gap-2 text-xl font-bold text-slate-950"
          href="#top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/20">
            <Sparkles className="h-5 w-5" />
          </span>
          Raphael
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <a
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            aria-label="Open GitHub"
            onClick={() => window.open("https://github.com", "_blank")}
            type="button"
            variant="icon"
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>

        <Button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
          variant="icon"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      <div
        className={cn(
          "border-b border-slate-200 bg-white/95 px-6 py-4 shadow-lg backdrop-blur-xl md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav aria-label="Mobile navigation" className="grid gap-2">
          {links.map((link) => (
            <a
              className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            href="https://github.com"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
