import Section from "@/components/Section";
import Text from "@/components/Text";
import Photo from "@/components/Photo";
import { resources } from "@/lib/data";

export default function Resources() {
  return (
    <Section id="resources" title="Resources">
      <ul className="flex flex-col gap-8">
        {resources.map((r, i) => (
          <li key={i} className="grid grid-cols-[5.5rem_1fr] gap-5 sm:grid-cols-[7rem_1fr]">
            <Photo photo={r.thumb} className="aspect-[3/4] w-full" rounded="rounded-md" sizes="112px" />
            <div className="text-sm">
              <h3 className="font-serif text-base font-semibold leading-snug">
                {r.file ? (
                  <a href={r.file} className="underline-offset-4 hover:underline" style={{ color: "var(--ink)" }}>{r.title}</a>
                ) : (
                  <Text>{r.title}</Text>
                )}
              </h3>
              <Text as="p" className="mt-2 block" >{r.description}</Text>
              {r.file && <a href={r.file} className="mt-2 inline-block text-xs underline underline-offset-4" style={{ color: "var(--accent)" }}>Download PDF</a>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
