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
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: '#fdfbf7',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: site.name,
  description: site.description,
  slogan: site.tagline,
  disclaimer,
  offers: {
    '@type': 'Offer',
    price: pricing.amount,
    priceCurrency: pricing.currency,
    availability: 'https://schema.org/InStock',
  },
};

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
