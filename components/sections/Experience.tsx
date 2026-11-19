import Section from "@/components/Section";
import { earlyCareer, experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col gap-12">
        {experience.map((r) => (
          <li key={r.school} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <p className="pt-0.5 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-3)" }}>
              {r.dates}
            </p>
            <div>
              <h3 className="font-serif text-lg font-semibold leading-snug">
                {r.school}
                {r.location && (
                  <span className="font-sans text-sm font-normal" style={{ color: "var(--ink-3)" }}>
                    {" · "}{r.location}
                  </span>
                )}
              </h3>
              <p className="mt-0.5 text-sm font-medium" style={{ color: "var(--accent)" }}>{r.titles.join(" · ")}</p>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm" style={{ color: "var(--ink-2)" }}>
                {r.points.map((p) => (
                  <li key={p} className="relative pl-4">
                    <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full" style={{ background: "var(--ink-3)" }} />
                    {p}
                  </li>
                ))}
              </ul>
              {r.curriculum && (
                <span
                  className="mt-3 inline-block rounded-full px-2.5 py-0.5 text-[0.6875rem] font-medium"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  {r.curriculum}
                </span>
              )}
            </div>
          </li>
        ))}
        <li className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <p className="pt-0.5 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-3)" }}>
            2007 — 2012
          </p>
          <div>
            <h3 className="font-serif text-lg font-semibold">Early career</h3>
            <ul className="mt-3 flex flex-col gap-3 text-sm">
              {earlyCareer.map((e) => (
                <li key={e.school}>
                  <span style={{ color: "var(--ink)" }}>{e.school}</span>
                  <span style={{ color: "var(--ink-3)" }}>{" · "}{e.dates}</span>
                  <span className="block" style={{ color: "var(--ink-2)" }}>{e.titles}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ol>
    </Section>
  );
}
