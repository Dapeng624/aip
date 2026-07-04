import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-8 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>© 2026 Raphael Clone. Practice project by Dapeng.</p>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <a
            className="inline-flex items-center gap-2 transition hover:text-white"
            href="https://github.com/Dapeng624/aip"
            rel="noreferrer"
            target="_blank"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            className="inline-flex items-center gap-2 transition hover:text-white"
            href="https://x.com"
            rel="noreferrer"
            target="_blank"
          >
            <Twitter className="h-4 w-4" />
            Twitter/X
          </a>
          <a className="transition hover:text-white" href="#">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}
