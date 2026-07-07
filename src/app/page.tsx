"use client";

import { useState } from "react";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImageGallery } from "@/components/ImageGallery";
import { Navbar } from "@/components/Navbar";
import { type GalleryImage } from "@/data/gallery";

export default function Home() {
  const [generatedImages, setGeneratedImages] = useState<GalleryImage[]>([]);

  function addImage(image: GalleryImage) {
    setGeneratedImages((images) => [image, ...images]);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero onImageGenerated={addImage} />
      <ImageGallery generatedImages={generatedImages} />
      <Features />
      <Footer />
    </main>
  );
}
