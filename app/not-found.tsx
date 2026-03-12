import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Página não encontrada | BTC Festival',
}

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: '#050508' }}
    >
      {/* Número decorativo */}
      <span
        aria-hidden
        className="absolute font-neocrash leading-none pointer-events-none select-none"
        style={{
          fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
          fontSize: '55vw',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(232,25,122,0.07)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        404
      </span>

      <div className="relative z-10 max-w-lg">
        <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-btc-magenta mb-4 flex items-center justify-center gap-3">
          <span className="inline-block w-6 h-px bg-btc-magenta" />
          Página não encontrada
          <span className="inline-block w-6 h-px bg-btc-magenta" />
        </p>

        <h1
          className="font-neocrash text-white leading-[0.9] mb-6"
          style={{
            fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            textShadow: '0 0 60px rgba(232,25,122,0.3)',
          }}
        >
          LOST<br />
          <span style={{ color: '#E8197A' }}>IN THE</span><br />
          STREETS
        </h1>

        <p className="font-sans font-light text-white/45 text-base leading-relaxed mb-8 max-w-[38ch] mx-auto">
          Este mural ainda não foi pintado. Volte para a página principal e explore o festival.
        </p>

        <Link
          href="/"
          className="inline-block font-mono text-[0.72rem] tracking-[0.1em] uppercase bg-btc-magenta text-white px-8 py-3.5 hover:bg-btc-magenta-dark hover:-translate-y-0.5 transition-all duration-150"
          style={{ borderRadius: '2px', boxShadow: '0 0 30px rgba(232,25,122,0.35)' }}
        >
          ← Voltar ao Festival
        </Link>
      </div>
    </div>
  )
}
