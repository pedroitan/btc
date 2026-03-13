import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { artistas } from '@/data/artistas'
import Navbar from '@/components/Navbar'
import ArtistHero from '@/components/ArtistHero'

interface Props {
  params: { slug: string }
}

function slugColor(slug: string): string {
  const colors = ['#E8197A', '#FF6A00', '#CCFF00', '#5B0FAA', '#CC1A1A', '#007AFF', '#00C896']
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = slug.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

function initials(nome: string): string {
  return nome.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

export async function generateStaticParams() {
  return artistas.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artista = artistas.find((a) => a.slug === params.slug)
  if (!artista) return {}
  return {
    title: `${artista.nome} | BTC Festival 2026`,
    description: artista.bio,
    openGraph: {
      title: `${artista.nome} — BTC Festival 2026`,
      description: artista.bio,
      images: artista.foto ? [artista.foto] : ['/logo/logo_festival.png'],
    },
  }
}

export default function ArtistaPage({ params }: Props) {
  const artista = artistas.find((a) => a.slug === params.slug)
  if (!artista) notFound()

  const color = slugColor(artista.slug)
  const ini = initials(artista.nome)
  const location = artista.estado
    ? `${artista.cidade}, ${artista.estado}`
    : artista.pais !== 'Brasil'
    ? artista.cidade === artista.pais
      ? artista.pais
      : `${artista.cidade}, ${artista.pais}`
    : artista.cidade

  const indexAtual = artistas.findIndex((a) => a.slug === artista.slug)
  const proximo = artistas[indexAtual + 1]
  const anterior = artistas[indexAtual - 1]

  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--btc-preto)' }} className="min-h-screen">
        {/* Hero do artista */}
        <div
          className="relative min-h-[60vh] flex items-end overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #050508 0%, ${color}18 60%, #050508 100%)`,
          }}
        >
          {/* Número decorativo */}
          <span
            className="absolute right-[-0.05em] top-[-0.05em] font-neocrash leading-none pointer-events-none select-none"
            style={{
              fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
              fontSize: '40vw',
              color: 'transparent',
              WebkitTextStroke: `1px ${color}12`,
            }}
            aria-hidden
          >
            {ini}
          </span>

          {/* Foto — cobre todo o hero */}
          {artista.foto && <ArtistHero foto={artista.foto} nome={artista.nome} color={color} />}

          <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 pt-32 pb-10">
            <Link
              href="/#artistas"
              className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/35 hover:text-white/70 transition-colors mb-8"
            >
              ← Todos os artistas
            </Link>

            <div className="flex flex-wrap items-end gap-6">
              {/* Placeholder sem foto */}
              {!artista.foto && (
                <div
                  className="w-24 h-24 flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: `${color}22`,
                    border: `1px solid ${color}44`,
                    borderRadius: '2px',
                  }}
                >
                  <span
                    className="font-neocrash text-3xl"
                    style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif', color, opacity: 0.7 }}
                  >
                    {ini}
                  </span>
                </div>
              )}

              <div>
                <h1
                  className="font-neocrash text-display-lg text-white leading-[0.9]"
                  style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
                >
                  {artista.nome}
                </h1>
                {artista.nomeReal && (
                  <p className="font-mono text-[0.65rem] tracking-[0.12em] text-white/35 mt-1 uppercase">
                    {artista.nomeReal}
                  </p>
                )}
                <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase mt-2" style={{ color }}>
                  {location}
                  {artista.pais !== 'Brasil' && (
                    <span className="text-white/35 ml-2">· Internacional</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="max-w-[1400px] mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="lg:col-span-2">
              <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-btc-magenta mb-4">
                Sobre o artista
              </p>
              <p className="font-sans font-light text-white/70 text-[1.05rem] leading-[1.8] max-w-[68ch]">
                {artista.bio}
              </p>
            </div>

            {/* Meta */}
            <div className="space-y-6">
              {/* Estilos */}
              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/30 mb-2">
                  Estilos
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {artista.estilos.map((e) => (
                    <span
                      key={e}
                      className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-btc-lima/80 border border-white/15 px-2 py-1"
                      style={{ borderRadius: '2px' }}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instagram */}
              {artista.instagram && (
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/30 mb-2">
                    Instagram
                  </p>
                  <a
                    href={`https://instagram.com/${artista.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.72rem] text-btc-magenta hover:underline"
                  >
                    {artista.instagram}
                  </a>
                </div>
              )}

              {/* BTC tag */}
              <div
                className="p-4"
                style={{ background: `${color}10`, border: `1px solid ${color}25`, borderRadius: '2px' }}
              >
                <p className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-white/30 mb-1">
                  Selecionado para
                </p>
                <p className="text-lg text-white leading-none">
                  <span className="font-neocrash" style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}>BTC </span>
                  <span className="font-mono tabular-nums">2026</span>
                </p>
                <p className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-white/35">
                  8ª Edição · Salvador-BA
                </p>
              </div>
            </div>
          </div>

          {/* Nav anterior/próximo */}
          <div className="mt-16 pt-8 border-t border-white/[0.06] flex justify-between items-center gap-4">
            {anterior ? (
              <Link
                href={`/artistas/${anterior.slug}`}
                className="flex items-center gap-3 group"
              >
                <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-white/30 group-hover:text-white/60 transition-colors">
                  ← Anterior
                </span>
                <span
                  className="font-neocrash text-xl text-white/50 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
                >
                  {anterior.nome}
                </span>
              </Link>
            ) : <span />}

            {proximo ? (
              <Link
                href={`/artistas/${proximo.slug}`}
                className="flex items-center gap-3 group text-right"
              >
                <span
                  className="font-neocrash text-xl text-white/50 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
                >
                  {proximo.nome}
                </span>
                <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-white/30 group-hover:text-white/60 transition-colors">
                  Próximo →
                </span>
              </Link>
            ) : <span />}
          </div>
        </div>
      </div>
    </>
  )
}
