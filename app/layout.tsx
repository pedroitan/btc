import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://btcfestival.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'BTC — Bahia de Todas as Cores | 8ª Edição · Salvador 2026',
    template: '%s | BTC Festival',
  },
  description:
    'O maior festival de graffiti do Norte e Nordeste do Brasil. 8ª edição — 26 a 29 de março de 2026, Salvador-BA. Tema: Tecnologia Ancestral. 50 artistas de 11 países.',
  keywords: [
    'BTC', 'Bahia de Todas as Cores', 'festival de graffiti', 'arte urbana',
    'Salvador', 'Bahia', '2026', 'graffiti', 'muralismo', 'arte de rua',
    'Coletivo Vai e Faz', 'Secult', 'afrofuturismo',
  ],
  authors: [{ name: 'Coletivo Vai e Faz' }],
  creator: 'Coletivo Vai e Faz',
  publisher: 'BTC — Bahia de Todas as Cores',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'BTC Festival',
    title: 'BTC — Bahia de Todas as Cores | 8ª Edição · Salvador 2026',
    description:
      'O maior festival de graffiti do Norte e Nordeste do Brasil. 26 a 29 de março de 2026, Salvador-BA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BTC — Bahia de Todas as Cores · 8ª Edição · Tecnologia Ancestral · Salvador 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTC — Bahia de Todas as Cores | Salvador 2026',
    description: 'O maior festival de graffiti do Norte e Nordeste do Brasil. 26–29 março, Salvador-BA.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
