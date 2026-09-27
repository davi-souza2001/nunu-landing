import { ChatDemo } from '@/components/ChatDemo';
import { Reveal } from '@/components/ui/Reveal';
import { CheckoutButton } from '@/components/ui/CheckoutButton';
import { pricing, site } from '@/lib/site';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
      {/* Brilho quente atrás do título. Decorativo — fora da árvore acessível. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-leaf-100/60 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-leaf-200 bg-white px-4 py-1.5 text-sm font-medium text-leaf-700">
              <span className="size-2 rounded-full bg-leaf-500" aria-hidden />
              {pricing.freeMessages} mensagens grátis, sem cartão
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl leading-[1.08] font-semibold tracking-tight sm:text-6xl">
              Nutrition that{' '}
              <span className="text-leaf-600">nurtures.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-500 sm:text-xl">
              A {site.name} é uma assistente de nutrição que vive no seu
              WhatsApp. Ela pergunta o que precisa saber uma vez — objetivo,
              alergias, rotina — e a partir daí cada resposta já considera tudo
              isso.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CheckoutButton>Assinar por {pricing.display}</CheckoutButton>
              <a
                href="#preco"
                className="inline-flex items-center justify-center rounded-full border border-leaf-200 bg-white px-7 py-3.5 text-base font-semibold text-leaf-700 transition-colors duration-150 hover:border-leaf-400 hover:bg-leaf-50"
              >
                Começar grátis
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-5 text-sm text-ink-500">
              Sem app para baixar, sem senha para criar. É só uma conversa.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <ChatDemo />
        </Reveal>
      </div>
    </section>
  );
}
