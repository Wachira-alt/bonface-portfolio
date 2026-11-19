export default function Section({ id, title, children }: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mb-20 scroll-mt-6 lg:mb-28 lg:scroll-mt-24">
      <div
        className="sticky top-0 z-20 -mx-4 mb-6 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:static lg:mx-0 lg:mb-8 lg:p-0 lg:backdrop-blur-none"
        style={{ backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
      >
        <h2
          id={`${id}-title`}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--accent)" }}
        >
          {title}
          <span className="hidden h-px flex-1 lg:block" style={{ background: "var(--line)" }} />
        </h2>
      </div>
      {children}
    </section>
  );
}
