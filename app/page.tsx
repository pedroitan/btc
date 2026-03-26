import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Artistas from '@/components/Artistas'
// import Agenda from '@/components/Agenda'
// import Tema from '@/components/Tema'
// import Local from '@/components/Local'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Festival',
  name: 'BTC — Bahia de Todas as Cores — 8ª Edição',
  description: 'O maior festival de graffiti do Norte e Nordeste do Brasil. Tema: Tecnologia Ancestral.',
  url: 'https://btcfestival.com.br',
  startDate: '2026-03-26',
  endDate: '2026-03-29',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  isAccessibleForFree: true,
  location: {
    '@type': 'PostalAddress',
    addressLocality: 'Salvador',
    addressRegion: 'Bahia',
    addressCountry: 'BR',
  },
  organizer: { '@type': 'Organization', name: 'Coletivo Vai e Faz' },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        {/* <Tema /> */}
        <Artistas />
        {/* <Agenda /> */}
        {/* <Local /> */}
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
