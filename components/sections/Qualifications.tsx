import Section from "@/components/Section";
import { development, education, labPhoto, languages, site } from "@/lib/data";

export default function Qualifications() {
  return (
    <Section id="qualifications" title="Qualifications">
      <ol className="flex flex-col gap-6">
        {education.map((e) => (
          <li key={e.title} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <p className="pt-0.5 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-3)" }}>{e.dates}</p>
            <div>
              <h3 className="text-sm font-semibold leading-snug">{e.title}</h3>
              <p className="text-sm" style={{ color: "var(--ink-2)" }}>{e.place}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold">Professional development</h3>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm" style={{ color: "var(--ink-2)" }}>
            {development.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Languages</h3>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm" style={{ color: "var(--ink-2)" }}>
            {languages.map((l) => <li key={l}>{l}</li>)}
          </ul>
        </div>
      </div>
      <footer className="mt-20 text-xs" style={{ color: "var(--ink-3)" }}>
        References available on request ·{" "}
        <a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a>
        {labPhoto.credit && (
          <span className="mt-2 block">
            Photo:{" "}
            <a href={labPhoto.credit.url} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
              {labPhoto.credit.text}
            </a>
          </span>
        )}
      </footer>
    </Section>
  );
}
