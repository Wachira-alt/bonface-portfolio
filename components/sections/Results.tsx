import Section from "@/components/Section";
import Text from "@/components/Text";
import { results } from "@/lib/data";

export default function Results() {
  return (
    <Section id="results" title="Results">
      <p className="text-[0.9375rem]" style={{ color: "var(--ink-2)" }}>{results.intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {results.stats.map((s) => (
          <div key={s.label} className="rounded-xl border p-5" style={{ borderColor: "var(--line)", background: "var(--bg-card)" }}>
            <p className="font-serif text-5xl font-semibold tracking-tight" style={{ color: "var(--accent)" }}>{s.value}</p>
            <p className="mt-2 text-sm font-medium">{s.label}</p>
            {s.context && <Text as="p" className="mt-3 block">{s.context}</Text>}
          </div>
        ))}
      </div>
      {results.note && <Text as="p" className="mt-4 block">{results.note}</Text>}
    </Section>
  );
}
