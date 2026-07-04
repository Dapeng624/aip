import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: "Raphael Clone - Free AI Image Generator",
  description:
    "A pixel-inspired Raphael AI clone built as a MicroSaaS landing page practice project.",
  openGraph: {
    title: "Raphael Clone",
    description: "Free and unlimited AI image generator landing page clone.",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
