import Section from "@/components/Section";
import Text from "@/components/Text";
import { resources } from "@/lib/data";

export default function Resources() {
  return (
    <Section id="resources" title="Resources">
      <ul className="flex flex-col gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
        {resources.map((r) => (
          <li key={r}><Text as="div" className="block">{r}</Text></li>
        ))}
      </ul>
    </Section>
  );
}
