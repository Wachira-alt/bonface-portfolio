import Section from "@/components/Section";
import { site } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--line)", background: "var(--bg-card)" }}>
        <p className="font-serif text-2xl font-semibold leading-snug">
          Looking for a Head of Science or a Biology and Chemistry teacher?
        </p>
        <p className="mt-3 text-sm" style={{ color: "var(--ink-2)" }}>
          I&apos;m happy to talk about roles, share sample resources or arrange a lesson observation. References are available on request.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-block break-all font-medium underline decoration-1 underline-offset-4 hover:decoration-2"
          style={{ color: "var(--accent)" }}
        >
          {site.email}
        </a>
      </div>
      <footer className="mt-12 text-xs" style={{ color: "var(--ink-3)" }}>
        © {new Date().getFullYear()} {site.name} · {site.location}
      </footer>
    </Section>
  );
}
