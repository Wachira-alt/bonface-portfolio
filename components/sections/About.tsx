import Section from "@/components/Section";
import Text from "@/components/Text";
import { about, highlights } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 text-[0.9375rem]" style={{ color: "var(--ink-2)" }}>
        {about.map((p) => (
          <Text key={p} as="p">{p}</Text>
        ))}
      </div>
      <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--bg-card)" }}>
            <dt className="order-2 mt-1 text-xs leading-snug" style={{ color: "var(--ink-3)" }}>{h.label}</dt>
            <dd className="font-serif text-xl font-semibold" style={{ color: "var(--ink)" }}>{h.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
