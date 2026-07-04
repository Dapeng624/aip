import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";

interface ImageCardProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

export function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <button
      className="masonry-card group mb-5 block w-full overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/15"
      onClick={() => onClick(image)}
      type="button"
    >
      <div className="overflow-hidden">
        <Image
          alt={image.prompt}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          height={image.height}
          loading="lazy"
          src={image.url}
          width={image.width}
        />
      </div>
      <p className="line-clamp-2 p-4 text-sm font-medium leading-6 text-slate-700">
        {image.prompt}
      </p>
    </button>
  );
}
