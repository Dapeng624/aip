"use client";

import { useState } from "react";
import { ImageCard } from "@/components/ImageCard";
import { Lightbox } from "@/components/Lightbox";
import { type GalleryImage, sampleImages } from "@/data/gallery";

export function ImageGallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section className="px-6 py-24" id="gallery">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-purple-600">
            Image Gallery
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Explore what your prompts can become
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-500">
            A masonry-style grid of generated examples, ready to be replaced by
            a real image generation API in the next phase.
          </p>
        </div>

        <div className="columns-2 gap-5 md:columns-3 lg:columns-4">
          {sampleImages.map((image) => (
            <ImageCard image={image} key={image.id} onClick={setSelected} />
          ))}
        </div>
      </div>
      <Lightbox image={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
