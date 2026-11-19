import Section from "@/components/Section";
import Text from "@/components/Text";
import Photo from "@/components/Photo";
import { about, labPhoto } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 text-[0.9375rem]" style={{ color: "var(--ink-2)" }}>
        {about.map((p) => (
          <Text key={p} as="p">{p}</Text>
        ))}
      </div>
      <figure className="mt-10">
        <Photo photo={labPhoto} className="aspect-[3/2] w-full" sizes="(min-width: 1024px) 640px, 100vw" />
        {labPhoto.caption && (
          <figcaption className="mt-2 text-xs" style={{ color: "var(--ink-3)" }}>{labPhoto.caption}</figcaption>
        )}
      </figure>
    </Section>
  );
}
