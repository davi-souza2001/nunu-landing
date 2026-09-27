import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { features } from '@/lib/site';

export function Features() {
  return (
    <Section id="recursos" className="bg-white">
      <Reveal>
        <SectionHeading
          eyebrow="Recursos"
          title="Ela se adapta ao seu jeito de conversar."
          body="Você não precisa aprender a falar com ela. Manda áudio, manda foto, manda três mensagens seguidas — ela entende do mesmo jeito."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 3) * 80}>
            <div className="group h-full rounded-3xl border border-sand-200 bg-sand-50 p-7 transition-[border-color,transform] duration-150 ease-soft hover:-translate-y-0.5 hover:border-leaf-200">
              <span className="text-3xl" aria-hidden>
                {feature.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink-500">
                {feature.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
