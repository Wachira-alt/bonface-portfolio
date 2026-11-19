import Section from "@/components/Section";
import { cambridge, syllabuses } from "@/lib/data";

export default function Cambridge() {
  return (
    <Section id="cambridge" title="Cambridge & assessment">
      <div className="grid gap-4 sm:grid-cols-2">
        {cambridge.map((c) => (
          <article key={c.title} className="rounded-xl border p-5" style={{ borderColor: "var(--line)", background: "var(--bg-card)" }}>
            <h3 className="font-serif text-base font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--ink-2)" }}>{c.body}</p>
          </article>
        ))}
      </div>
      <h3 className="mt-10 text-sm font-semibold" style={{ color: "var(--ink)" }}>Syllabuses taught</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {syllabuses.map((s) => (
          <li key={s} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: "var(--line)", color: "var(--ink-2)" }}>
            {s}
          </li>
        ))}
      </ul>
    </Section>
  );
}
