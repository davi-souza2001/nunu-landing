interface CheckoutButtonProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * CTA da assinatura.
 *
 * Hoje é apenas visual: não há checkout para onde mandar a pessoa. Renderiza
 * como texto, não como <a> sem destino nem <button> sem ação — link que não
 * leva a lugar nenhum é pior que botão que não parece clicável.
 *
 * Para ligar o pagamento depois, basta voltar a envolver o conteúdo num
 * <a href={checkoutUrl}> com o Payment Link do Stripe.
 */
export function CheckoutButton({
  children,
  className = '',
}: CheckoutButtonProps) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-leaf-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-leaf-600/20 ${className}`}
    >
      {children}
    </span>
  );
}
