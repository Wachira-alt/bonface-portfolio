import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/data";

/** A photo from lib/data.ts, or a labelled placeholder frame while `src` is empty. */
export default function Photo({ photo, className = "", sizes, rounded = "rounded-lg" }: {
  photo: PhotoData;
  className?: string; // sets size / aspect ratio
  sizes: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border ${rounded} ${className}`}
      style={{ borderColor: "var(--line)", background: "var(--bg-card)" }}
    >
      {photo.src ? (
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <div
          className="absolute inset-0 grid place-items-center p-3 text-center text-[0.6875rem] leading-snug"
          style={{
            color: "var(--ink-3)",
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0 10px, color-mix(in srgb, var(--line) 55%, transparent) 10px 11px)",
          }}
          role="img"
          aria-label={`Photo to add: ${photo.brief}`}
        >
          <span className="rounded px-1.5 py-0.5" style={{ background: "var(--bg-card)" }}>
            <span className="block font-semibold uppercase tracking-wider">Photo to add</span>
            <span className="block">{photo.brief}</span>
          </span>
        </div>
      )}
    </div>
  );
}
