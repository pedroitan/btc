const dias = [
  {
    dia: '26', weekday: 'Quinta', mes: 'Março',
    eventos: [
      { hora: '18h00', titulo: 'Abertura Oficial · Masterclass', desc: 'Arte Urbana e Tecnologia — debate com artistas, ativistas e desenvolvedores. Entrada franca.', destaque: true },
      { hora: '20h00', titulo: 'Intervenção Cultural & BTC Sound', desc: 'Apresentação musical e abertura das pinturas de abertura.', destaque: false },
    ],
  },
  {
    dia: '27', weekday: 'Sexta', mes: 'Março',
    eventos: [
      { hora: '09h — 17h', titulo: 'Mutirão de Graffiti Comunitário', desc: 'Artistas e moradores pintam juntos. DJ Selecta anima o dia.', destaque: true },
      { hora: '19h00', titulo: 'Noite Cultural', desc: 'Shows, slam de poesia e exposição de stickers.', destaque: false },
    ],
  },
  {
    dia: '28', weekday: 'Sábado', mes: 'Março',
    eventos: [
      { hora: '09h — 17h', titulo: 'Pintura Oficial do Circuito BTC', desc: 'Artistas de 11 países e 25 estados produzem os painéis oficiais.', destaque: true },
      { hora: '19h — 22h', titulo: 'BTC Sound Fest', desc: 'Shows de Sista K, Noelson do Cavaco e convidados especiais.', destaque: true },
    ],
  },
  {
    dia: '29', weekday: 'Domingo', mes: 'Março',
    eventos: [
      { hora: '09h — 16h', titulo: 'Finalização dos Painéis', desc: 'Últimas pinceladas e visita ao circuito completo.', destaque: false },
      { hora: '16h30', titulo: 'Foto Oficial do BTC 2026', desc: 'Tradição que encerra cada edição — todos os artistas reunidos.', destaque: true },
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
          <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-btc-lima mb-2 flex items-center gap-3">
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
          <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-white/35 mt-3">
            26 a 29 de Março · Entrada franca em todas as atividades
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          {dias.map(({ dia, weekday, mes, eventos }) => (
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
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-btc-lima">
                    {weekday}
                  </div>
                  <div className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-white/35">
                    {mes}
                  </div>
                </div>
              </div>

              {/* Eventos */}
              <div className="flex flex-col gap-4">
                {eventos.map(({ hora, titulo, desc, destaque }) => (
                  <div
                    key={titulo}
                    className="border-l-2 pl-3"
                    style={{ borderColor: destaque ? 'var(--btc-magenta)' : 'rgba(255,255,255,0.12)' }}
                  >
                    <div
                      className="font-mono text-[0.58rem] tracking-[0.1em] uppercase mb-1"
                      style={{ color: destaque ? 'var(--btc-magenta)' : 'var(--btc-lima)' }}
                    >
                      {hora}
                    </div>
                    <div className="font-sans font-medium text-white text-[0.95rem] leading-tight mb-1">
                      {titulo}
                    </div>
                    <div className="font-sans font-light text-white/45 text-[0.85rem] leading-relaxed">
                      {desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/25 mt-6 text-center">
          Programação sujeita a alterações · Acompanhe @btcgraffitifestival
        </p>
      </div>
    </section>
  )
}
