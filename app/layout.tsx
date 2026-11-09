import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { site, pricing, disclaimer } from '@/lib/site';
import './globals.css';

// `display: swap` evita o texto invisível enquanto a fonte carrega — o título
// é o LCP da página.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: '#fdfbf7',
};

// WebSite e Organization dizem ao Google o nome do site ("Nunu") e a logo que
// ele mostra no resultado de busca. A assinatura é Service, não Product:
// Product com preço vira "listagem do comerciante" no Google, que cobra
// imagem, frete e política de devolução — nada disso existe num serviço digital.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    alternateName: 'Nunu Wellness',
    url: site.url,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.png`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: site.name,
    serviceType: 'Assistente de nutrição no WhatsApp',
    description: site.description,
    slogan: site.tagline,
    disclaimer,
    provider: { '@type': 'Organization', name: site.name, url: site.url },
    areaServed: 'BR',
    offers: {
      '@type': 'Offer',
      price: pricing.amount,
      priceCurrency: pricing.currency,
      availability: 'https://schema.org/InStock',
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          // Conteúdo estático definido em build; não há entrada de usuário aqui.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
