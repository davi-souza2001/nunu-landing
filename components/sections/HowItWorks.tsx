import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { steps } from '@/lib/site';

export function HowItWorks() {
  return (
    <Section id="como-funciona">
      <Reveal>
        <SectionHeading
          eyebrow="Como funciona"
          title="Três passos, e nenhum deles é preencher formulário."
        />
      </Reveal>

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 90}>
            <li className="relative h-full rounded-3xl border border-sand-200 bg-white p-7">
              <span
                className="text-sm font-bold tracking-widest text-leaf-400"
                aria-hidden
              >
                {step.number}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-500">{step.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
