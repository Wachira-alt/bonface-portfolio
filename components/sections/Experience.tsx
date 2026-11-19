import Section from "@/components/Section";
import { earlyCareer, experience } from "@/lib/data";

const dateCls = "pt-0.5 text-xs font-semibold uppercase tracking-wide";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col gap-10">
        {experience.map((r) => (
          <li key={r.school} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <p className={dateCls} style={{ color: "var(--ink-3)" }}>{r.dates}</p>
            <div>
              <h3 className="font-serif text-lg font-semibold leading-snug">{r.school}</h3>
              <p className="text-sm" style={{ color: "var(--ink)" }}>{r.titles}</p>
              <p className="text-xs" style={{ color: "var(--ink-3)" }}>{r.place}</p>
              <p className="mt-3 text-sm" style={{ color: "var(--ink-2)" }}>{r.description}</p>
            </div>
          </li>
        ))}
        <li className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <p className={dateCls} style={{ color: "var(--ink-3)" }}>2007 — 2012</p>
          <div>
            <h3 className="font-serif text-lg font-semibold">Earlier schools</h3>
            <ul className="mt-2 flex flex-col gap-1 text-sm" style={{ color: "var(--ink-2)" }}>
              {earlyCareer.map((e) => (
                <li key={e.school}>
                  {e.school}, {e.dates}. {e.titles}.
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ol>
    </Section>
  );
}
