import Section from "@/components/Section";
import { results } from "@/lib/data";

export default function Results() {
  return (
    <Section id="results" title="Results">
      <p className="text-[0.9375rem]" style={{ color: "var(--ink-2)" }}>{results.intro}</p>
      <table className="mt-5 w-full text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide" style={{ color: "var(--ink-3)" }}>
            <th className="pb-2 font-semibold">Cohort</th>
            <th className="pb-2 font-semibold">Course</th>
            <th className="pb-2 text-right font-semibold">Mean</th>
          </tr>
        </thead>
        <tbody>
          {results.rows.map((r) => (
            <tr key={r.cohort} className="border-t" style={{ borderColor: "var(--line)" }}>
              <td className="py-2.5">{r.cohort}</td>
              <td className="py-2.5" style={{ color: "var(--ink-2)" }}>{r.course}</td>
              <td className="py-2.5 text-right font-semibold tabular-nums">{r.mean}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
