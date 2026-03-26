'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LINKS = [
  { href: '/#sobre', label: 'Festival' },
  { href: '/#artistas', label: 'Artistas' },
  { href: '/#agenda', label: 'Agenda' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[rgba(5,5,8,0.92)] backdrop-blur-md border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo/festival_btc.png"
            alt="Governo da Bahia apresenta: Festival Bahia de Todas as Cores"
            width={1063}
            height={67}
            className="h-auto w-auto max-w-[220px] sm:max-w-[300px] opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-[0.85rem] tracking-[0.14em] uppercase text-white/50 hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Inscrever-se — ocultado temporariamente */}

        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[rgba(5,5,8,0.97)] border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4 list-none mb-4">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-mono text-[0.8rem] tracking-[0.14em] uppercase text-white/60 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* Inscrever-se mobile — ocultado temporariamente */}
        </div>
      )}
    </nav>
  )
}
