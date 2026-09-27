import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { faq } from '@/lib/site';

export function Faq() {
  return (
    <Section id="faq" className="bg-white">
      <Reveal>
        <SectionHeading eyebrow="Dúvidas" title="O que costumam perguntar." />
      </Reveal>

      <div className="mt-10 max-w-3xl divide-y divide-sand-200 border-y border-sand-200">
        {faq.map((item, i) => (
          <Reveal key={item.q} delay={i * 50}>
            {/* <details> nativo: funciona sem JS e já vem acessível por teclado. */}
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium marker:hidden">
                {item.q}
                <span
                  aria-hidden
                  className="shrink-0 text-2xl leading-none text-leaf-500 transition-transform duration-200 ease-soft group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-500">
                {item.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
