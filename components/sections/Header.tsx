import Image from 'next/image';
import logo from '@/assets/nunu-logo.png';
import { CheckoutButton } from '@/components/ui/CheckoutButton';
import { site } from '@/lib/site';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sand-200/70 bg-sand-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center">
          {/* Import estático: o Next aplica o basePath do GitHub Pages sozinho. */}
          <Image
            src={logo}
            alt={site.name}
            priority
            className="h-14 w-auto"
          />
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
