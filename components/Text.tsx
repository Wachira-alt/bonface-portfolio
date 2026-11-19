/** Renders content from lib/data.ts. Strings starting with "TODO:" show as a visible placeholder. */
export function isTodo(s: string) {
  return s.startsWith("TODO:");
}

export default function Text({ children, as: Tag = "span", className = "" }: {
  children: string;
  as?: "span" | "p" | "h3" | "div";
  className?: string;
}) {
  if (!isTodo(children)) return <Tag className={className}>{children}</Tag>;
  return (
    <Tag
      className={`${className} rounded-md border border-dashed px-2 py-1 text-[0.8125rem] font-normal not-italic`}
      style={{ background: "var(--todo-bg)", borderColor: "var(--todo-line)", color: "var(--todo-ink)" }}
    >
      <span className="mr-1 font-semibold uppercase tracking-wider text-[0.6875rem]">To add</span>
      {children.slice(5).trim()}
    </Tag>
  );
}
