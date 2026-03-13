'use client'

import { useMemo, useCallback, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { artistas, type Estilo } from '@/data/artistas'
import ArtistCard from './ArtistCard'

const ESTILOS: Estilo[] = [
  'Muralismo', 'Wildstyle', 'Lettering', 'Throw-up',
  'Stencil', 'Realismo', 'Cartoon', 'Ilustração', '3D',
  'Hiperrealismo', 'Artivismo', 'String Art', 'Semi-realismo',
]

type Genero = 'todos' | 'feminino' | 'masculino'
type Origem = 'todos' | 'nacionais' | 'internacionais'

function ArtistasInner() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const estilo = (searchParams.get('estilo') as Estilo | 'todos') ?? 'todos'
  const genero = (searchParams.get('genero') as Genero) ?? 'todos'
  const origem = (searchParams.get('origem') as Origem) ?? 'todos'

  const setFilter = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'todos') params.delete(key)
    else params.set(key, value)
    const qs = params.toString()
    router.replace(`/${qs ? '?' + qs : ''}#artistas`, { scroll: false })
  }, [searchParams, router])

  const setEstilo = (v: Estilo | 'todos') => setFilter('estilo', v)
  const setGenero = (v: Genero) => setFilter('genero', v)
  const setOrigem = (v: Origem) => setFilter('origem', v)

  const filtrados = useMemo(() => {
    return artistas.filter((a) => {
      if (estilo !== 'todos' && !a.estilos.includes(estilo)) return false
      if (genero !== 'todos' && a.genero !== genero) return false
      if (origem === 'nacionais' && a.pais !== 'Brasil') return false
      if (origem === 'internacionais' && a.pais === 'Brasil') return false
      return true
    })
  }, [estilo, genero, origem])

  return (
    <section id="artistas" style={{ background: '#050508' }} className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-10 reveal">
          <div>
            <p className="font-mono text-[0.85rem] tracking-[0.22em] uppercase text-btc-magenta mb-2 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-btc-magenta" />
              Selecionados 2026
            </p>
            <h2
              className="font-neocrash text-display-lg text-white leading-[0.9]"
              style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
            >
              Artistas
            </h2>
          </div>
          <span className="font-mono text-[0.85rem] tracking-[0.12em] uppercase text-white/35">
            {filtrados.length} de {artistas.length} artistas
          </span>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-10 reveal">
          {/* Estilo */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setEstilo('todos')}
              className={`font-mono text-[0.8rem] tracking-[0.1em] uppercase px-3 py-1.5 border transition-all duration-150 ${
                estilo === 'todos'
                  ? 'bg-btc-magenta border-btc-magenta text-white'
                  : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white'
              }`}
              style={{ borderRadius: '2px' }}
            >
              Todos
            </button>
            {ESTILOS.map((e) => (
              <button
                key={e}
                onClick={() => setEstilo(estilo === e ? 'todos' : e)}
                className={`font-mono text-[0.8rem] tracking-[0.1em] uppercase px-3 py-1.5 border transition-all duration-150 ${
                  estilo === e
                    ? 'bg-btc-lima/90 border-btc-lima text-btc-preto'
                    : 'border-white/20 text-white/50 hover:border-btc-lima/50 hover:text-btc-lima'
                }`}
                style={{ borderRadius: '2px' }}
              >
                {e}
              </button>
            ))}
          </div>

          <div className="w-full h-px bg-white/[0.06] my-1" />

          {/* Gênero */}
          <div className="flex gap-1.5">
            {(['todos', 'feminino', 'masculino'] as Genero[]).map((g) => (
              <button
                key={g}
                onClick={() => setGenero(g)}
                className={`font-mono text-[0.8rem] tracking-[0.1em] uppercase px-3 py-1.5 border transition-all duration-150 ${
                  genero === g
                    ? 'bg-btc-laranja/90 border-btc-laranja text-white'
                    : 'border-white/20 text-white/50 hover:border-btc-laranja/50 hover:text-btc-laranja'
                }`}
                style={{ borderRadius: '2px' }}
              >
                {g === 'todos' ? 'Todos' : g === 'feminino' ? 'Mulheres' : 'Homens'}
              </button>
            ))}
          </div>

          {/* Origem */}
          <div className="flex gap-1.5">
            {(['todos', 'nacionais', 'internacionais'] as Origem[]).map((o) => (
              <button
                key={o}
                onClick={() => setOrigem(o)}
                className={`font-mono text-[0.8rem] tracking-[0.1em] uppercase px-3 py-1.5 border transition-all duration-150 ${
                  origem === o
                    ? 'bg-white/90 border-white text-btc-preto'
                    : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white'
                }`}
                style={{ borderRadius: '2px' }}
              >
                {o === 'todos' ? 'Origem: Todos' : o === 'nacionais' ? 'Nacionais' : 'Internacionais'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtrados.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {filtrados.map((artista) => (
              <ArtistCard key={artista.slug} artista={artista} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-neocrash text-3.1xl text-white/20" style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}>
              Nenhum artista encontrado
            </p>
            <button
              onClick={() => { setEstilo('todos'); setGenero('todos'); setOrigem('todos') }}
              className="mt-4 font-mono text-[0.85rem] tracking-[0.12em] uppercase text-btc-magenta hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default function Artistas() {
  return (
    <Suspense>
      <ArtistasInner />
    </Suspense>
  )
}
