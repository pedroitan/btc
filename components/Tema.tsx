const pilares = [
  {
    titulo: 'Inteligência Artificial',
    desc: 'Como algoritmos e IA podem amplificar — ou apagar — narrativas culturais ancestrais. A arte como resistência ao apagamento digital.',
    icon: '⬡',
    cor: '#E8197A',
  },
  {
    titulo: 'Astronomia Ancestral',
    desc: 'Povos originários e africanos mapeavam o céu com precisão milimétrica. O cosmos como território de saber e de afeto.',
    icon: '◎',
    cor: '#CCFF00',
  },
  {
    titulo: 'Biohacking Cultural',
    desc: 'Corpos aumentados, corpos que resistem. A tecnologia como extensão do corpo negro e indígena — não como substituto.',
    icon: '◈',
    cor: '#FF6A00',
  },
  {
    titulo: 'Ciberespaço Afrofuturista',
    desc: 'Redes sociais, metaverso, blockchain — repensados a partir de epistemologias do sul. Quem programa o futuro?',
    icon: '▣',
    cor: '#5B0FAA',
  },
]

export default function Tema() {
  return (
    <section
      style={{ background: 'linear-gradient(180deg, #050508 0%, #07099A 60%, #050508 100%)' }}
      className="relative overflow-hidden py-24 px-6"
    >
      {/* Elementos decorativos de circuito */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Linhas horizontais */}
        {[15, 35, 55, 75].map((top) => (
          <div
            key={top}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${top}%`,
              background: 'linear-gradient(90deg, transparent 0%, rgba(204,255,0,0.06) 30%, rgba(204,255,0,0.06) 70%, transparent 100%)',
            }}
          />
        ))}
        {/* Linhas verticais */}
        {[20, 40, 60, 80].map((left) => (
          <div
            key={left}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${left}%`,
              background: 'linear-gradient(180deg, transparent 0%, rgba(11,18,204,0.15) 50%, transparent 100%)',
            }}
          />
        ))}
        {/* Círculos nos cruzamentos */}
        {[[20,35],[40,55],[60,15],[80,75]].map(([l,t]) => (
          <div
            key={`${l}-${t}`}
            className="absolute w-2 h-2 -translate-x-1 -translate-y-1"
            style={{
              left: `${l}%`,
              top: `${t}%`,
              borderRadius: '50%',
              background: 'rgba(204,255,0,0.15)',
              boxShadow: '0 0 8px rgba(204,255,0,0.2)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-btc-lima mb-3 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-btc-lima/60" />
            8ª Edição · Tema Central
            <span className="inline-block w-8 h-px bg-btc-lima/60" />
          </p>
          <h2
            className="font-neocrash text-white leading-[0.88] mb-4"
            style={{
              fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
              fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            }}
          >
            Tecnologia<br />
            <span
              style={{
                color: '#CCFF00',
                textShadow: '0 0 40px rgba(204,255,0,0.6), 0 0 80px rgba(204,255,0,0.25)',
              }}
            >
              Ancestral
            </span>
          </h2>
          <p className="font-sans font-light text-white/55 text-[1.05rem] sm:text-xl max-w-[54ch] mx-auto leading-relaxed">
            A 8ª edição propõe um diálogo entre saberes milenares e o presente tecnológico,
            questionando quem produz conhecimento e para quê. Afrofuturismo como epistemologia,
            não como estética.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pilares.map(({ titulo, desc, icon, cor }) => (
            <div
              key={titulo}
              className="p-6 reveal group hover:-translate-y-1 transition-transform duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '2px',
              }}
            >
              <div
                className="font-mono text-2xl mb-4"
                style={{ color: cor, textShadow: `0 0 20px ${cor}80` }}
              >
                {icon}
              </div>
              <h3
                className="font-neocrash text-xl text-white leading-tight mb-3"
                style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
              >
                {titulo}
              </h3>
              <p className="font-sans font-light text-white/50 text-[0.9rem] leading-relaxed">
                {desc}
              </p>
              {/* Linha colorida na base */}
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: cor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
