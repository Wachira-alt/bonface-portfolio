"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids]);
  return active;
}

const ids = nav.map((n) => n.id);

export default function Sidebar() {
  const active = useActiveSection(ids);

  return (
    <header className="pt-14 pb-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[38%] lg:max-w-sm lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div
          className="mb-7 grid h-24 w-24 place-items-center overflow-hidden rounded-full border text-center text-[0.625rem] uppercase tracking-wider"
          style={{ borderColor: "var(--line)", background: "var(--bg-card)", color: "var(--ink-3)" }}
        >
          {site.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={site.photo} alt={site.name} className="h-full w-full object-cover" />
          ) : (
            <span className="px-2 leading-tight">Photo<br />to add</span>
          )}
        </div>
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{site.name}</h1>
        <p className="mt-3 text-base font-medium sm:text-lg" style={{ color: "var(--accent)" }}>
          {site.title}
        </p>
        <p className="mt-4 max-w-xs text-sm" style={{ color: "var(--ink-2)" }}>
          {site.tagline}
        </p>

        <nav className="mt-12 hidden lg:block" aria-label="Sections">
          <ul className="flex flex-col gap-1">
            {nav.map((n) => {
              const on = active === n.id;
              return (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="group flex items-center py-1.5" aria-current={on ? "true" : undefined}>
                    <span
                      className="mr-4 h-px transition-all duration-200 group-hover:w-14"
                      style={{ width: on ? "3.5rem" : "1.75rem", background: on ? "var(--accent)" : "var(--ink-3)" }}
                    />
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
                      style={{ color: on ? "var(--accent)" : "var(--ink-3)" }}
                    >
                      {n.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={site.cvUrl || undefined}
          aria-disabled={!site.cvUrl}
          className="rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            opacity: site.cvUrl ? 1 : 0.45,
            cursor: site.cvUrl ? "pointer" : "not-allowed",
          }}
          title={site.cvUrl ? undefined : "Add the edited CV to public/cv.pdf"}
          download={site.cvUrl ? true : undefined}
        >
          Download CV
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent)]"
          style={{ borderColor: "var(--line)", color: "var(--ink)" }}
        >
          Email me
        </a>
        {site.linkedin && (
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="px-2 text-sm underline-offset-4 hover:underline" style={{ color: "var(--ink-2)" }}>
            LinkedIn
          </a>
        )}
      </div>
    </header>
  );
}
