import { disclaimer, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-sand-100 px-5 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span
              className="grid size-8 place-items-center rounded-full bg-leaf-600 text-sm font-bold text-white"
              aria-hidden
            >
              N
            </span>
            <span className="text-lg">{site.name}</span>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-ink-500">
            <a className="hover:text-leaf-700" href="#como-funciona">
              Como funciona
            </a>
            <a className="hover:text-leaf-700" href="#recursos">
              Recursos
            </a>
            <a className="hover:text-leaf-700" href="#preco">
              Preço
            </a>
            <a className="hover:text-leaf-700" href="#faq">
              Dúvidas
            </a>
          </nav>
        </div>

        {/*
          Aviso médico em tamanho legível, não em letra miúda: o próprio agente
          repete isso em toda resposta clínica, e a página não pode prometer
          mais do que ele entrega.
        */}
        <p className="mt-10 max-w-3xl border-t border-sand-200 pt-8 text-sm leading-relaxed text-ink-500">
          {disclaimer}
        </p>

        <p className="mt-6 text-sm text-ink-500">
          © {new Date().getFullYear()} {site.name}. Feito para quem quer comer
          melhor sem virar planilha.
        </p>
      </div>
    </footer>
  );
}
