'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  foto: string
  nome: string
  color: string
}

export default function ArtistHero({ foto, nome, color }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Foto — cobre todo o hero */}
      <div className="absolute inset-0">
        <Image
          src={foto}
          alt={nome}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.35) 55%, rgba(5,5,8,0.1) 100%)`,
          }}
        />
      </div>

      {/* Botão de ampliar — z-20 para ficar acima do conteúdo */}
      <button
        onClick={() => setOpen(true)}
        className="absolute top-20 right-4 z-20 flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors border border-white/15 hover:border-white/40 px-2.5 py-1.5 cursor-zoom-in"
        style={{ borderRadius: '2px', background: 'rgba(5,5,8,0.6)', backdropFilter: 'blur(4px)' }}
        title="Ver imagem completa"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
        Ampliar
      </button>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: 'rgba(5,5,8,0.96)', backdropFilter: 'blur(12px)' }}
          onClick={() => setOpen(false)}
        >
          {/* Container com dimensões de viewport para o fill funcionar */}
          <div
            className="relative"
            style={{ width: '90vw', height: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={foto}
              alt={nome}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-white/50 hover:text-white transition-colors border border-white/15 hover:border-white/40 px-3 py-1.5"
            style={{ borderRadius: '2px', background: 'rgba(5,5,8,0.8)' }}
          >
            ✕ Fechar
          </button>

          <p className="absolute bottom-5 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/25">
            Clique fora para fechar
          </p>
        </div>
      )}
    </>
  )
}
