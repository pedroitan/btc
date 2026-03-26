const edicoes = [
  { ano: 2026, num: '8ª', local: 'Salvador-BA', tema: 'Tecnologia Ancestral', desc: '50 artistas de 11 países · Afrofuturismo e cultura do spray · 26–29 março', atual: true },
  { ano: 2025, num: '7ª', local: 'Ilha de Itaparica-BA', tema: 'Bahia, Tela do Mundo', desc: '11 países · 25 estados · 50%+ mulheres · Masterclass Arte Urbana e Mídias Sociais' },
  { ano: 2023, num: '6ª', local: 'MAM / Solar do Unhão', tema: 'Viva a Arte Consciente', desc: 'Retorno pós-pandemia · 100+ artistas · Residência artística no MAM' },
  { ano: 2019, num: '5ª', local: 'Ribeira, Salvador', tema: '—', desc: 'Geomantas em 5 bairros · Parceria com Acervo da Laje · Festival da Cidade' },
  { ano: 2018, num: '4ª', local: 'Candeias-BA', tema: 'A Arte que Ilumina a Cidade', desc: '100+ artistas · 500m de muro na Av. Getúlio Vargas · Curso Graffiti Candeias' },
  { ano: 2017, num: '3ª', local: 'Centro Antigo, Salvador', tema: 'Colorida Cidade Viva', desc: '90+ artistas · Ladeira da Preguiça e Barroquinha' },
  { ano: 2016, num: '2ª', local: 'Salvador-BA', tema: '—', desc: 'Consolidação do formato itinerante e da curadoria por inscrição pública' },
  { ano: 2015, num: '1ª', local: 'Salvador-BA', tema: '—', desc: 'Fundação pelo Coletivo Vai e Faz · Estreia no calendário nacional' },
]

const stats = [
  { num: '8ª', desc: 'Edição 2026' },
  { num: '11', desc: 'Países representados' },
  { num: '25', desc: 'Estados brasileiros' },
  { num: '50%+', desc: 'Mulheres selecionadas' },
]

const dna = [
  { titulo: 'Itinerância', desc: 'Cada edição em cidade ou região diferente da Bahia, levando arte a quem raramente tem acesso.' },
  { titulo: 'Curadoria diversa', desc: 'Inscrição pública com foco em representatividade regional, de gênero e internacional.' },
  { titulo: 'Mutirão comunitário', desc: 'Pintura coletiva com moradores — a cidade anfitriã participa da transformação.' },
  { titulo: 'BTC Sound', desc: 'Shows musicais conectando graffiti às raízes do hip-hop e da cultura baiana.' },
]

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #07099A 0%, #050508 100%)' }}
    >
      {/* Número decorativo de fundo */}
      <span
        className="absolute right-[-0.05em] top-[-0.1em] font-neocrash leading-none pointer-events-none select-none"
        style={{
          fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
          fontSize: '38vw',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(232,25,122,0.06)',
        }}
        aria-hidden
      >
        8
      </span>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Coluna esquerda */}
          <div className="reveal">
            <p className="font-mono text-[0.75rem] tracking-[0.22em] uppercase text-btc-magenta mb-3 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-btc-magenta" />
              O Festival
            </p>
            <h2
              className="font-neocrash text-display-lg text-white mb-8 leading-[0.9]"
              style={{ fontFamily: 'Neocrash, "Bebas Neue", sans-serif' }}
            >
              Arte urbana<br />
              que move<br />
              <span className="text-btc-magenta text-glow-magenta">o Brasil</span>
            </h2>

            <div className="space-y-5 text-white/65 font-sans font-light leading-relaxed text-[1.05rem]">
              <p>
                O BTC nasceu em <strong className="text-white font-medium">2015 pelo Coletivo Vai e Faz</strong> com
                uma missão clara: levar a arte de rua a diferentes regiões da Bahia, criando pontes entre
                artistas e comunidades. Em quase uma década, se consolidou como o{' '}
                <strong className="text-white font-medium">maior festival de graffiti do Norte e Nordeste</strong>.
              </p>
              <p>
                Itinerante por natureza, cada edição escolhe uma nova cidade para transformar. Já passamos pelo
                Centro Antigo de Salvador, Candeias, Ribeira, MAM e Ilha de Itaparica. Em 2026, voltamos a
                Salvador com o tema <strong className="text-btc-lima font-medium">Tecnologia Ancestral</strong>.
              </p>
              <p>
                Mais do que pintar muros, o BTC debate, forma e conecta — com masterclasses, mutirões
                comunitários, BTC Sound e a foto oficial que reúne todos os artistas no encerramento.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map(({ num, desc }) => (
                <div key={desc} className="border-l-2 border-btc-magenta pl-4 reveal">
                  <div className="font-mono text-4xl text-white leading-none tabular-nums">
                    {num}
                  </div>
                  <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-white/45 mt-1">
                    {desc}
                  </div>
                </div>
              ))}
            </div>

            {/* DNA — ocultado temporariamente */}
          </div>

          {/* Coluna direita — Timeline */}
          <div className="reveal">
            <p className="font-mono text-[0.75rem] tracking-[0.22em] uppercase text-white/35 mb-6 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-white/20" />
              Histórico · 8 Edições
            </p>

            <div className="relative">
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, var(--btc-magenta), transparent)' }}
              />

              <div className="space-y-0">
                {edicoes.map(({ ano, num, local, tema, desc, atual }) => (
                  <div
                    key={ano}
                    className={`pl-5 py-4 border-b border-white/[0.06] transition-colors hover:bg-white/[0.03] cursor-default ${atual ? 'bg-white/[0.04]' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16">
                        <div
                          className={`font-mono text-2xl leading-none tabular-nums ${atual ? 'text-btc-lima' : 'text-btc-magenta'}`}
                        >
                          {ano}
                        </div>
                        <div className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-white/35 mt-0.5">
                          {num} Ed.
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-sans font-medium text-white text-[0.88rem] leading-tight mb-1">
                          {local}{tema !== '—' ? ` · ${tema}` : ''}
                        </h4>
                        <p className="font-sans font-light text-white/45 text-[0.84rem] leading-relaxed">
                          {desc}
                        </p>
                        {atual && (
                          <span
                            className="inline-block font-mono text-[0.65rem] tracking-[0.1em] uppercase bg-btc-lima/10 text-btc-lima px-2 py-0.5 mt-2"
                            style={{ borderRadius: '2px' }}
                          >
                            Em andamento
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="line-neon opacity-40" />
    </section>
  )
}
