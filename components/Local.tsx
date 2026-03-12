export default function Local() {
  return (
    <>
      {/* LOCAL */}
      <section
        id="local"
        style={{ background: 'linear-gradient(180deg, #050508 0%, #07099A 100%)' }}
        className="py-24 px-6"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Info */}
            <div className="reveal">
              <p className="font-mono text-[0.85rem] tracking-[0.22em] uppercase text-btc-magenta mb-2 flex items-center gap-3">
                <span className="inline-block w-6 h-px bg-btc-magenta" />
                Onde acontece
              </p>
              <h2
                className="font-neocrash text-display-lg text-white leading-[0.9] mb-8"
                style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
              >
                Salvador,<br />
                <span className="text-btc-magenta text-glow-magenta">Bahia</span>
              </h2>

              <div className="space-y-4 text-white/60 font-sans font-light leading-relaxed text-[1.15rem] max-w-[44ch]">
                <p>
                  A 8ª edição do BTC acontece em Salvador, cidade que abrigou as primeiras edições e
                  onde o festival tem suas raízes mais profundas. Diversos pontos da cidade serão
                  transformados pelos painéis do circuito oficial.
                </p>
                <p>
                  O festival é de <strong className="text-white font-medium">entrada franca</strong> e
                  aberto ao público em todas as atividades.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <div className="font-mono text-[0.82rem] tracking-[0.12em] uppercase text-btc-lima">
                  Salvador · Bahia · Brasil
                </div>
                <div className="font-mono text-[0.82rem] tracking-[0.12em] uppercase text-white/45">
                  26 a 29 de Março de 2026
                </div>
                <div className="font-mono text-[0.85rem] tracking-[0.1em] uppercase text-btc-magenta mt-1">
                  Locais detalhados em breve
                </div>
              </div>
            </div>

            {/* Mapa visual placeholder */}
            <div
              className="relative h-72 lg:h-96 flex items-center justify-center reveal overflow-hidden"
              style={{
                background: 'rgba(11,18,204,0.3)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '2px',
              }}
            >
              {/* Grid de circuito decorativo */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E8197A" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Pin central */}
              <div className="relative flex flex-col items-center gap-3">
                <div
                  className="w-14 h-14 flex items-center justify-center shadow-glow-magenta"
                  style={{ background: 'var(--btc-magenta)', borderRadius: '2px' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div
                  className="font-neocrash text-2xl text-white tracking-widest"
                  style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
                >
                  SALVADOR
                </div>
                <div className="font-mono text-[0.82rem] tracking-[0.2em] uppercase text-white/40">
                  Bahia · Brasil
                </div>
              </div>

              {/* Pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-btc-magenta/20 animate-ping"
                    style={{
                      width: `${i * 80}px`,
                      height: `${i * 80}px`,
                      animationDelay: `${(i - 1) * 0.7}s`,
                      animationDuration: '2.5s',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA INSCRIÇÃO */}
      <section
        id="inscricao"
        className="relative overflow-hidden text-center py-28 px-6"
        style={{ background: 'linear-gradient(135deg, #050508 0%, #07099A 50%, #050508 100%)' }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="font-neocrash leading-none"
            style={{
              fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
              fontSize: '40vw',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(232,25,122,0.06)',
            }}
          >
            BTC
          </span>
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto">
          <p className="font-mono text-[0.85rem] tracking-[0.22em] uppercase text-btc-magenta mb-3 flex items-center justify-center gap-3 reveal">
            <span className="inline-block w-6 h-px bg-btc-magenta" />
            Participe
            <span className="inline-block w-6 h-px bg-btc-magenta" />
          </p>

          <h2
            className="font-neocrash leading-[0.9] text-white mb-6 reveal"
            style={{
              fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
            }}
          >
            Sua arte<br />
            nos muros<br />
            <span className="text-btc-magenta text-glow-magenta">da Bahia</span>
          </h2>

          <p className="font-sans font-light text-white/55 text-[1.15rem] sm:text-xl max-w-[48ch] mx-auto leading-relaxed mb-10 reveal">
            Inscrições abertas para artistas de todo o Brasil e do mundo. A seleção é feita pelo
            Coletivo Vai e Faz com foco em diversidade regional, estética e de gênero.
          </p>

          <div className="flex flex-wrap gap-4 justify-center reveal">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScpy-Z43rDFw6x1Kl5KFRA39DJ-Dn_dY_TS6y6F3k3UTgG7UQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[0.85rem] tracking-[0.12em] uppercase bg-btc-magenta text-white px-8 py-4 hover:bg-btc-magenta-dark hover:-translate-y-0.5 transition-all duration-150 shadow-glow-magenta"
              style={{ borderRadius: '2px' }}
            >
              Inscrever-se como artista
            </a>
            <a
              href="https://www.instagram.com/btcgraffitifestival/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[0.85rem] tracking-[0.12em] uppercase bg-transparent text-white px-8 py-4 border border-white/25 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-150"
              style={{ borderRadius: '2px' }}
            >
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
