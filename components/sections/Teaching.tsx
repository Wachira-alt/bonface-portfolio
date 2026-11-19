import Section from "@/components/Section";
import Text from "@/components/Text";
import { teaching, testimonials } from "@/lib/data";

export default function Teaching() {
  return (
    <Section id="teaching" title="Teaching in practice">
      <div className="grid gap-4">
        {teaching.map((t, i) => (
          <article key={i} className="rounded-xl border p-5" style={{ borderColor: "var(--line)", background: "var(--bg-card)" }}>
            {t.tag && (
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--accent)" }}>{t.tag}</p>
            )}
            <Text as="h3" className="mt-2 block font-serif text-base font-semibold">{t.title}</Text>
            <Text as="p" className="mt-2 block text-sm">{t.body}</Text>
          </article>
        ))}
      </div>

      <h3 className="mt-12 text-sm font-semibold">What colleagues say</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {testimonials.map((q, i) => (
          <figure key={i} className="border-l-2 pl-4" style={{ borderColor: "var(--accent)" }}>
            <blockquote className="font-serif text-[0.9375rem] italic" style={{ color: "var(--ink-2)" }}>
              <Text>{q.quote}</Text>
            </blockquote>
            <figcaption className="mt-3 flex flex-col gap-1 text-xs" style={{ color: "var(--ink-3)" }}>
              <Text>{q.name}</Text>
              <Text>{q.role}</Text>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
