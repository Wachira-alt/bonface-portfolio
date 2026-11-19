import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/data";

export default function Photo({ photo, className = "", sizes, rounded = "rounded-lg", fallback, priority }: {
  photo: PhotoData;
  className?: string; // sets size / aspect ratio
  sizes: string;
  rounded?: string;
  fallback?: string; // shown when there is no image, e.g. initials
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ background: "var(--accent-soft)" }}
    >
      {photo.src ? (
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" priority={priority} />
      ) : (
        <span
          className="absolute inset-0 grid place-items-center font-serif text-3xl font-semibold"
          style={{ color: "var(--accent)" }}
          aria-label={photo.alt}
          role="img"
        >
          {fallback}
        </span>
      )}
    </div>
  );
}
