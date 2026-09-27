import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

const contrast = [
  {
    label: 'Um app de dieta',
    tone: 'muted' as const,
    items: [
      'Pergunta seu peso e devolve uma meta de calorias',
      'Sugere frango e batata-doce para todo mundo',
      'Não sabe que você tem gastrite',
      'Manda notificação de cobrança às 20h',
    ],
  },
  {
    label: 'A Nunu',
    tone: 'leaf' as const,
    items: [
      'Pergunta seu objetivo e o que você já tentou',
      'Monta a sugestão com o que existe na sua cozinha',
      'Filtra toda orientação pelas suas condições de saúde',
      'Propõe um foco por dia — e diminui quando não rolou',
    ],
  },
];

export function Problem() {
  return (
    <Section className="bg-white">
      <Reveal>
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-wide text-leaf-600 uppercase">
            Por que é diferente
          </p>
          <h2 className="text-balance text-3xl leading-tight font-semibold sm:text-4xl">
            O problema nunca foi falta de informação.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-500">
            Você já sabe que precisa comer mais vegetais. O que falta é alguém
            que saiba <em>quem é você</em> — e que responda pensando nisso, às
            sete da manhã de uma terça corrida.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {contrast.map((col, i) => (
          <Reveal key={col.label} delay={i * 90}>
            <div
              className={`h-full rounded-3xl border p-7 ${
                col.tone === 'leaf'
                  ? 'border-leaf-200 bg-leaf-50'
                  : 'border-sand-200 bg-sand-50'
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  col.tone === 'leaf' ? 'text-leaf-700' : 'text-ink-500'
                }`}
              >
                {col.label}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
                    <span
                      aria-hidden
                      className={
                        col.tone === 'leaf' ? 'text-leaf-500' : 'text-ink-500/50'
                      }
                    >
                      {col.tone === 'leaf' ? '✓' : '—'}
                    </span>
                    <span
                      className={
                        col.tone === 'leaf' ? 'text-ink-900' : 'text-ink-500'
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
