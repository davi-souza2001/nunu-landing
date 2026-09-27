import { CheckoutButton } from '@/components/ui/CheckoutButton';
import { site } from '@/lib/site';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sand-200/70 bg-sand-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span
            className="grid size-8 place-items-center rounded-full bg-leaf-600 text-sm font-bold text-white"
            aria-hidden
          >
            N
          </span>
          <span className="text-lg">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-700 sm:flex">
          <a className="hover:text-leaf-700" href="#como-funciona">
            Como funciona
          </a>
          <a className="hover:text-leaf-700" href="#recursos">
            Recursos
          </a>
          <a className="hover:text-leaf-700" href="#preco">
            Preço
          </a>
        </nav>

        <CheckoutButton className="!px-5 !py-2 !text-sm">Assinar</CheckoutButton>
      </div>
    </header>
  );
}
