import Section from "@/components/Section";
import Text from "@/components/Text";
import { results } from "@/lib/data";

export default function Results() {
  return (
    <Section id="results" title="Results">
      <p className="text-[0.9375rem]" style={{ color: "var(--ink-2)" }}>{results.text}</p>
      {results.todo && <Text as="p" className="mt-4 block">{results.todo}</Text>}
    </Section>
  );
}
