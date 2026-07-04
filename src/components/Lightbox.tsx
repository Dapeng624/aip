"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";
import { Dialog } from "@/components/ui/dialog";

interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      open={Boolean(image)}
      title={image?.prompt}
    >
      {image ? (
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid max-h-[78vh] place-items-center overflow-auto bg-slate-950 p-4">
            <Image
              alt={image.prompt}
              className="max-h-[72vh] w-auto rounded-xl object-contain"
              height={image.height}
              src={image.url}
              width={image.width}
            />
          </div>
          <aside className="flex flex-col gap-5 p-5">
            <div>
              <p className="text-xs font-bold uppercase text-purple-600">
                Prompt
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {image.prompt}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">
              {image.width} × {image.height}
            </div>
            <a
              className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition duration-200 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/30"
              download={`raphael-clone-${image.id}.jpg`}
              href={image.url}
            >
              <Download className="h-4 w-4" />
              Download
            </a>
          </aside>
        </div>
      ) : null}
    </Dialog>
  );
}
