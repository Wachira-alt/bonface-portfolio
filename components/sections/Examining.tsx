import Section from "@/components/Section";
import { examining, syllabuses } from "@/lib/data";

export default function Examining() {
  return (
    <Section id="examining" title="Examining & assessment">
      <ul className="flex list-disc flex-col gap-2 pl-5 text-[0.9375rem]" style={{ color: "var(--ink-2)" }}>
        {examining.map((e) => <li key={e}>{e}</li>)}
      </ul>
      <h3 className="mt-10 text-sm font-semibold">Syllabuses taught</h3>
      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm" style={{ color: "var(--ink-2)" }}>
        {syllabuses.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </Section>
  );
}
