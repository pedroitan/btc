import Image from 'next/image'

const links = [
  { href: '#sobre',    label: 'Festival'  },
  { href: '#artistas', label: 'Artistas'  },
  { href: '#agenda',   label: 'Agenda'    },
  { href: '#local',    label: 'Local'     },
  {
    href: 'https://www.instagram.com/btcgraffitifestival/',
    label: 'Instagram',
    external: true,
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScpy-Z43rDFw6x1Kl5KFRA39DJ-Dn_dY_TS6y6F3k3UTgG7UQ/viewform',
    label: 'Inscrição',
    external: true,
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--btc-preto)' }} className="border-t border-white/[0.06]">
      {/* Régua de patrocinadores */}
      <div className="border-b border-white/[0.06] py-8 px-6">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-white/25 mb-6 text-center">
            Realização & Patrocínio
          </p>
          <div className="flex justify-center">
            <Image
              src="/patrocinadores/regua_horizontal.png"
              alt="Patrocinadores e realizadores do BTC 2026"
              width={1100}
              height={80}
              className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-8 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span
              className="font-neocrash text-xl tracking-widest text-white/40"
              style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
            >
              BTC <span style={{ color: 'var(--btc-magenta)', opacity: 1 }}>/</span>{' '}
              <span className="font-mono">2026</span>
            </span>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap gap-5 list-none">
            {links.map(({ href, label, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/25 hover:text-white/60 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Créditos */}
          <span className="font-mono text-[0.58rem] tracking-[0.08em] text-white/15">
            Coletivo Vai e Faz · Rede AMO · Secult-BA
          </span>
        </div>
      </div>
    </footer>
  )
}
