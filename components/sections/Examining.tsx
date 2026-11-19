import Section from "@/components/Section";
import { examining, syllabuses } from "@/lib/data";

export default function Examining() {
  return (
    <Section id="examining" title="Examining">
      <p className="text-[0.9375rem]" style={{ color: "var(--ink-2)" }}>{examining}</p>
      <p className="mt-6 text-sm" style={{ color: "var(--ink)" }}>What I teach:</p>
      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm" style={{ color: "var(--ink-2)" }}>
        {syllabuses.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </Section>
  );
}
