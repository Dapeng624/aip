import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImageGallery } from "@/components/ImageGallery";
import { Navbar } from "@/components/Navbar";
import { PromptInput } from "@/components/PromptInput";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <PromptInput />
      <ImageGallery />
      <Features />
      <Footer />
    </main>
  );
}
