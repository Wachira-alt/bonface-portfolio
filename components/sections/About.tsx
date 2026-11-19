import Section from "@/components/Section";
import Photo from "@/components/Photo";
import { about, labPhoto } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 text-[0.9375rem]" style={{ color: "var(--ink-2)" }}>
        {about.map((p) => <p key={p}>{p}</p>)}
      </div>
      {labPhoto.src && (
        <Photo photo={labPhoto} className="mt-10 aspect-[3/2] w-full" sizes="(min-width: 1024px) 640px, 100vw" />
      )}
    </Section>
  );
}
