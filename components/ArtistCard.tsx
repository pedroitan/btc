import Link from 'next/link'
import Image from 'next/image'
import type { Artista } from '@/data/artistas'

function slugColor(slug: string): string {
  const colors = [
    '#E8197A', '#FF6A00', '#CCFF00', '#5B0FAA',
    '#CC1A1A', '#0B12CC', '#007AFF', '#00C896',
  ]
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = slug.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

function initials(nome: string): string {
  return nome
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

interface Props {
  artista: Artista
}

export default function ArtistCard({ artista }: Props) {
  const color = slugColor(artista.slug)
  const ini = initials(artista.nome)
  const location = artista.estado
    ? `${artista.cidade} · ${artista.estado}`
    : artista.pais !== 'Brasil'
    ? `${artista.cidade} · ${artista.pais}`
    : artista.cidade

  return (
    <Link
      href={`/artistas/${artista.slug}`}
      className="group relative overflow-hidden block"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '2px',
      }}
    >
      {/* Foto ou placeholder */}
      <div className="aspect-[3/4] relative overflow-hidden">
        {artista.foto ? (
          <Image
            src={artista.foto}
            alt={artista.nome}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ background: `linear-gradient(145deg, rgba(5,5,8,0.95) 0%, ${color}20 100%)` }}
          >
            {/* Linhas diagonais decorativas */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`diag-${artista.slug}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#diag-${artista.slug})`}/>
            </svg>

            {/* Iniciais — elemento central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-neocrash leading-none select-none"
                style={{
                  fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
                  fontSize: 'clamp(5rem, 10vw, 7.5rem)',
                  color: 'transparent',
                  WebkitTextStroke: `1.5px ${color}`,
                  opacity: 0.55,
                  letterSpacing: '-0.02em',
                }}
              >
                {ini}
              </span>
            </div>

            {/* Ponto de cor no canto */}
            <div
              className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full"
              style={{ background: color, boxShadow: `0 0 8px ${color}` }}
            />
          </div>
        )}

        {/* Overlay no hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(transparent 40%, rgba(5,5,8,0.98) 100%)`,
          }}
        />
      </div>

      {/* Info */}
      <div
        className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-300"
        style={{
          background: 'linear-gradient(transparent, rgba(5,5,8,0.96))',
          paddingTop: '3rem',
        }}
      >
        <span
          className="block font-neocrash text-lg leading-tight text-white group-hover:text-glow-magenta transition-all"
          style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif', letterSpacing: '0.03em' }}
        >
          {artista.nome}
        </span>
        <span className="block font-mono text-[0.65rem] tracking-[0.12em] uppercase text-white/45 mt-0.5">
          {location}
        </span>
        <div className="flex flex-wrap gap-1 mt-2">
          {artista.estilos.slice(0, 2).map((e) => (
            <span
              key={e}
              className="font-mono text-[0.58rem] tracking-[0.08em] uppercase text-btc-lima/80 border border-white/15 px-1.5 py-0.5"
              style={{ borderRadius: '2px' }}
            >
              {e}
            </span>
          ))}
          {artista.destaque && (
            <span
              className="font-mono text-[0.58rem] tracking-[0.08em] uppercase text-btc-magenta/90 border border-btc-magenta/30 px-1.5 py-0.5"
              style={{ borderRadius: '2px' }}
            >
              Destaque
            </span>
          )}
          {artista.pais !== 'Brasil' && (
            <span
              className="font-mono text-[0.58rem] tracking-[0.08em] uppercase text-btc-laranja/80 border border-btc-laranja/25 px-1.5 py-0.5"
              style={{ borderRadius: '2px' }}
            >
              {artista.pais}
            </span>
          )}
        </div>
      </div>

      {/* Hover glow border */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${color}44, 0 8px 40px ${color}22`,
          borderRadius: '2px',
        }}
      />
    </Link>
  )
}
