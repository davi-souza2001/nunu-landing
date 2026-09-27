import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CheckoutButton } from '@/components/ui/CheckoutButton';
import { pricing } from '@/lib/site';

const included = [
  'Conversas ilimitadas dentro do uso justo',
  'Áudio e foto do prato',
  'Foco do dia personalizado pelo seu objetivo',
  'Anamnese completa e memória do seu histórico',
  'Filtro de segurança por alergia e condição de saúde',
  'Cancele quando quiser, sem multa',
];

export function Pricing() {
  return (
    <Section id="preco">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-leaf-600 uppercase">
            Preço
          </p>
          <h2 className="text-balance text-3xl leading-tight font-semibold sm:text-4xl">
            Um plano só. Sem pegadinha de tier.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-500">
            Comece com {pricing.freeMessages} mensagens grátis. Se fizer sentido
            para você, assina — e continua exatamente de onde parou.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mx-auto mt-12 max-w-md">
          <div className="overflow-hidden rounded-[2rem] border border-leaf-200 bg-white shadow-xl shadow-leaf-900/5">
            <div className="border-b border-leaf-100 bg-leaf-50 px-8 py-6 text-center">
              <p className="text-sm font-semibold text-leaf-700">
                Comece com {pricing.freeMessages} mensagens grátis
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Sem cartão, sem prazo de validade.
              </p>
            </div>

            <div className="px-8 py-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-semibold tracking-tight">
                  {pricing.display}
                </span>
                <span className="text-lg text-ink-500">{pricing.period}</span>
              </div>

              <ul className="mt-8 space-y-3.5">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="mt-0.5 text-leaf-500" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <CheckoutButton className="mt-8 w-full">
                Assinar a Nunu
              </CheckoutButton>

              {/* Declarado, não escondido: o teto existe e a pessoa merece saber. */}
              <p className="mt-5 text-center text-sm leading-relaxed text-ink-500">
                Uso justo de {pricing.fairUse} respostas por mês — cerca de dez
                por dia. Ao chegar perto, a Nunu te avisa.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
