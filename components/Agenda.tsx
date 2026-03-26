const dias = [
  {
    dia: '25', weekday: 'Quarta', mes: 'Março',
    eventos: [
      { hora: '19h00', titulo: 'Documentário MUSAS', desc: 'Cineteatro 2 de Julho · Entrada livre · Ingressos pelo Sympla', destaque: true },
    ],
  },
  {
    dia: '26', weekday: 'Quinta', mes: 'Março',
    eventos: [
      { hora: '12h — 15h', titulo: 'Credenciamento', desc: 'Pousada (selecionados) e Hostel (não selecionados)', destaque: false },
      { hora: '18h — 20h30', titulo: 'Mesa de Abertura Oficial', desc: 'Teatro Eugênio Teixeira Leal', destaque: true },
    ],
  },
  {
    dia: '27', weekday: 'Sexta', mes: 'Março',
    label: 'Produção',
    eventos: [
      { hora: '9h — 17h', titulo: 'Mutirão de Pintura Comunitária', desc: 'Fazendinha do Graffiti', destaque: true },
      { hora: '9h30 — 10h', titulo: 'Bate-papo', desc: 'Fazendinha, redução de danos, saúde mental e arte', destaque: false },
    ],
  },
  {
    dia: '28', weekday: 'Sábado', mes: 'Março',
    eventos: [
      { hora: '9h — 17h', titulo: 'Pintura de Muro Oficial', desc: '', destaque: true },
      { hora: '12h — 17h', titulo: '1º Encontro Baiano de Sound System', desc: '', destaque: false },
      { hora: '16h00', titulo: 'Foto Oficial BTC 2026', desc: '', destaque: true },
      { hora: '20h30', titulo: 'Show · Fragmentos de Samba', desc: 'Tereza Batista · com participação de BNegão', destaque: true },
    ],
  },
  {
    dia: '29', weekday: 'Domingo', mes: 'Março',
    eventos: [
      { hora: '9h — 17h', titulo: 'Pintura de Muro Oficial', desc: '', destaque: true },
      { hora: '9h — 17h', titulo: '1º Encontro Baiano de Sound System', desc: '', destaque: false },
      { hora: '16h30', titulo: 'Batalha do 3º Round', desc: 'Local a definir', destaque: true },
    ],
  },
]

export default function Agenda() {
  return (
    <section
      id="agenda"
      style={{ background: '#07099A' }}
      className="py-24 px-6"
    >
      <div className="max-w-[1400px] mx-auto">

        <div className="mb-12 reveal">
          <p className="font-mono text-[0.75rem] tracking-[0.22em] uppercase text-btc-lima mb-2 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-btc-lima" />
            Programação
          </p>
          <h2
            className="font-neocrash text-display-lg text-white leading-[0.9]"
            style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
          >
            <span className="font-mono">8ª</span> Edição —<br />
            <span className="text-btc-lima text-glow-lima">
              Salvador <span className="font-mono">2026</span>
            </span>
          </h2>
          <p className="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-white/35 mt-3">
            25 a 30 de Março · Programação sujeita a alterações
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          {dias.map(({ dia, weekday, mes, eventos, label }) => (
            <div
              key={dia}
              className="bg-[#07099A] p-6 flex flex-col gap-5 hover:bg-[rgba(255,255,255,0.03)] transition-colors reveal"
            >
              {/* Data */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-5xl leading-none text-white tabular-nums">
                  {dia}
                </span>
                <div>
                  <div className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-btc-lima">
                    {weekday}{label ? ` · ${label}` : ''}
                  </div>
                  <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-white/35">
                    {mes}
                  </div>
                </div>
              </div>

              {/* Eventos */}
              <div className="flex flex-col gap-4">
                {eventos.map(({ hora, titulo, desc, destaque }, i) => (
                  <div
                    key={i}
                    className="border-l-2 pl-3"
                    style={{ borderColor: destaque ? 'var(--btc-magenta)' : 'rgba(255,255,255,0.12)' }}
                  >
                    <div
                      className="font-mono text-[0.72rem] tracking-[0.1em] uppercase mb-1"
                      style={{ color: destaque ? 'var(--btc-magenta)' : 'var(--btc-lima)' }}
                    >
                      {hora}
                    </div>
                    <div className="font-sans font-medium text-white text-[1.05rem] leading-tight mb-1">
                      {titulo}
                    </div>
                    {desc && (
                      <div className="font-sans font-light text-white/45 text-[0.85rem] leading-relaxed">
                        {desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-white/25 mt-6 text-center">
          Programação sujeita a alterações · Acompanhe @btcgraffitifestival
        </p>
      </div>
    </section>
  )
}
