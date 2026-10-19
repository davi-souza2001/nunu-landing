import { whatsappUrl } from '@/lib/site';
import { ctaBaseClass } from './CheckoutButton';

interface WhatsAppButtonProps {
  children: React.ReactNode;
  /** Classes completas do botão; sem elas, usa o estilo do CTA principal. */
  className?: string;
}

/**
 * CTA do teste grátis: abre a conversa com a Nunu no WhatsApp, já com a
 * primeira mensagem digitada. Sem número configurado, leva ao card de preço
 * (onde o teste grátis é explicado) em vez de um link quebrado.
 */
export function WhatsAppButton({
  children,
  className = `${ctaBaseClass} transition-colors duration-150 hover:bg-leaf-700`,
}: WhatsAppButtonProps) {
  if (!whatsappUrl) {
    return (
      <a href="#preco" className={className}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
