import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CheckoutButton } from '@/components/ui/CheckoutButton';
import { pricing } from '@/lib/site';

export function Cta() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-leaf-700 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -bottom-24 size-80 rounded-full bg-leaf-600/60 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-balance text-3xl leading-tight font-semibold text-white sm:text-4xl">
              As primeiras {pricing.freeMessages} mensagens são por nossa conta.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-leaf-100">
              Sem cartão e sem cadastro. Se não fizer sentido para você, é só
              parar de responder.
            </p>
            <div className="mt-9 flex justify-center">
              <CheckoutButton className="!bg-white !text-leaf-700 hover:!bg-leaf-50">
                Começar agora
              </CheckoutButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
