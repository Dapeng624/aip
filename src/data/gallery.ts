export interface GalleryImage {
  id: string;
  url: string;
  prompt: string;
  width: number;
  height: number;
}

export const sampleImages: GalleryImage[] = [
  {
    id: "1",
    url: "https://picsum.photos/seed/dragon/600/800",
    prompt: "A majestic dragon soaring through stormy clouds",
    width: 600,
    height: 800
  },
  {
    id: "2",
    url: "https://picsum.photos/seed/cyberpunk/600/600",
    prompt: "A futuristic cyberpunk city at night with neon lights",
    width: 600,
    height: 600
  },
  {
    id: "3",
    url: "https://picsum.photos/seed/forest/600/900",
    prompt: "An enchanted forest with glowing mushrooms and fairy lights",
    width: 600,
    height: 900
  },
  {
    id: "4",
    url: "https://picsum.photos/seed/robot/600/760",
    prompt: "A friendly robot painting a watercolor sunset",
    width: 600,
    height: 760
  },
  {
    id: "5",
    url: "https://picsum.photos/seed/castle/600/720",
    prompt: "A floating crystal castle above a calm ocean",
    width: 600,
    height: 720
  },
  {
    id: "6",
    url: "https://picsum.photos/seed/portrait/600/840",
    prompt: "A cinematic portrait with neon rim light and soft shadows",
    width: 600,
    height: 840
  },
  {
    id: "7",
    url: "https://picsum.photos/seed/spaceship/600/680",
    prompt: "A retro spaceship landing in a desert canyon",
    width: 600,
    height: 680
  },
  {
    id: "8",
    url: "https://picsum.photos/seed/fantasy/600/920",
    prompt: "A fantasy library with endless staircases and glowing books",
    width: 600,
    height: 920
  },
  {
    id: "9",
    url: "https://picsum.photos/seed/product/600/640",
    prompt: "A premium product photo of translucent headphones",
    width: 600,
    height: 640
  },
  {
    id: "10",
    url: "https://picsum.photos/seed/ocean/600/820",
    prompt: "A surreal ocean wave made of glass and starlight",
    width: 600,
    height: 820
  },
  {
    id: "11",
    url: "https://picsum.photos/seed/garden/600/700",
    prompt: "A tiny astronaut gardening on a floating island",
    width: 600,
    height: 700
  },
  {
    id: "12",
    url: "https://picsum.photos/seed/mountain/600/880",
    prompt: "A cozy cabin under aurora lights in snowy mountains",
    width: 600,
    height: 880
  }
];
