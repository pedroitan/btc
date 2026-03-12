'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const LINKS = [
  { href: '#sobre',    label: 'Festival' },
  { href: '#agenda',   label: 'Agenda'   },
  { href: '#artistas', label: 'Artistas' },
  { href: '#local',    label: 'Local'    },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(5,5,8,0.92)] backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="font-neocrash text-2xl tracking-widest text-white group-hover:text-btc-magenta transition-colors"
            style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
          >
            BTC
          </span>
          <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/40 mt-1 hidden sm:block">
            / Bahia de Todas as Cores
          </span>
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-white/50 hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScpy-Z43rDFw6x1Kl5KFRA39DJ-Dn_dY_TS6y6F3k3UTgG7UQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block font-mono text-[0.7rem] tracking-[0.1em] uppercase bg-btc-magenta text-white px-5 py-2 hover:bg-btc-magenta-dark hover:-translate-y-0.5 transition-all duration-150"
          style={{ borderRadius: '2px' }}
        >
          Inscrever-se
        </a>

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
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScpy-Z43rDFw6x1Kl5KFRA39DJ-Dn_dY_TS6y6F3k3UTgG7UQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-[0.7rem] tracking-[0.1em] uppercase bg-btc-magenta text-white px-5 py-2 w-full text-center"
            style={{ borderRadius: '2px' }}
            onClick={() => setMenuOpen(false)}
          >
            Inscrever-se
          </a>
        </div>
      )}
    </nav>
  )
}
