import { checkoutUrl } from '@/lib/site';

interface CheckoutButtonProps {
  children: React.ReactNode;
  className?: string;
}

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full bg-leaf-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-leaf-600/20';

/**
 * CTA da assinatura: leva ao Payment Link do Stripe.
 *
 * Sem link configurado (`NEXT_PUBLIC_CHECKOUT_URL` vazio) renderiza como
 * texto, não como <a> sem destino — link que não leva a lugar nenhum é pior
 * que botão que não parece clicável.
 */
export function CheckoutButton({
  children,
  className = '',
}: CheckoutButtonProps) {
  if (!checkoutUrl) {
    return <span className={`${baseClass} ${className}`}>{children}</span>;
  }
  return (
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} transition-colors duration-150 hover:bg-leaf-700 ${className}`}
    >
      {children}
    </a>
  );
}
