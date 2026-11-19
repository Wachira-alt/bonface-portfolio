import Section from "@/components/Section";
import Text from "@/components/Text";
import { about } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 text-[0.9375rem]" style={{ color: "var(--ink-2)" }}>
        {about.map((p) => (
          <Text key={p} as="p">{p}</Text>
        ))}
      </div>
    </Section>
  );
}
