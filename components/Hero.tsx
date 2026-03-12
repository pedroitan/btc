import Image from 'next/image'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: '#050508' }}
    >
      {/* Textura de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/bg_azul.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
        {/* Gradiente sobre textura */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 80% at 65% 60%, rgba(91,15,170,0.45) 0%, transparent 65%),
              radial-gradient(ellipse 55% 50% at 10% 90%, rgba(255,106,0,0.2) 0%, transparent 55%),
              radial-gradient(ellipse 45% 45% at 85% 15%, rgba(232,25,122,0.15) 0%, transparent 55%),
              linear-gradient(165deg, rgba(11,18,204,0.55) 0%, rgba(5,5,8,0.85) 70%)
            `,
          }}
        />
      </div>

      {/* Personagens — mix-blend-mode screen */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {/* Personagem principal */}
        <div
          className="absolute bottom-0 right-[-2%] w-[52vw] max-w-[680px] h-[95%]"
          style={{ mixBlendMode: 'screen' }}
        >
          <Image
            src="/personagens/personagem_1.png"
            alt="Personagem afrofuturista BTC"
            fill
            priority
            className="object-contain object-bottom"
            sizes="52vw"
          />
        </div>
        {/* Personagem secundário — desktop only */}
        <div
          className="absolute bottom-0 right-[32vw] w-[22vw] max-w-[300px] h-[72%] hidden xl:block"
          style={{ mixBlendMode: 'screen', opacity: 0.75 }}
        >
          <Image
            src="/personagens/personagem_3.png"
            alt="Personagem afrofuturista BTC"
            fill
            className="object-contain object-bottom"
            sizes="22vw"
          />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 flex flex-col justify-center flex-1 max-w-[1400px] mx-auto w-full px-6 sm:px-10 pt-28 pb-6">

        {/* Eyebrow — imagem do governo ou fallback texto */}
        <div
          className="mb-5 opacity-0"
          style={{ animation: 'fadeUp 0.7s 0.1s ease forwards' }}
        >
          <Image
            src="/logo/governo_apresenta.png"
            alt="Governo da Bahia apresenta: Festival Bahia de Todas as Cores"
            width={500}
            height={36}
            className="max-w-[260px] sm:max-w-[360px] lg:max-w-[480px] w-full h-auto"
          />
        </div>

        {/* Título principal — HTML Neocrash (não depende de imagem) */}
        <div
          className="mb-2 opacity-0"
          style={{ animation: 'fadeUp 0.75s 0.25s ease forwards' }}
        >
          <h1
            className="font-neocrash uppercase leading-[0.85] text-white"
            style={{
              fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
              fontSize: 'clamp(3.6rem, 11.5vw, 11rem)',
              letterSpacing: '0.01em',
              textShadow: '0 0 60px rgba(232,25,122,0.25)',
            }}
          >
            Bahia de<br />
            <span
              style={{
                color: '#E8197A',
                textShadow: '0 0 40px rgba(232,25,122,0.7), 0 0 80px rgba(232,25,122,0.3)',
              }}
            >
              Todas as
            </span>
            <br />Cores
          </h1>
        </div>

        {/* Badge + logo em linha */}
        <div
          className="flex flex-wrap items-center gap-4 mb-6 opacity-0"
          style={{ animation: 'fadeUp 0.75s 0.4s ease forwards' }}
        >
          <Image
            src="/logo/8a_oitava_BTC.png"
            alt="8ª edição BTC"
            width={120}
            height={48}
            className="h-10 sm:h-12 w-auto"
          />
          <div className="h-8 w-px bg-white/15" />
          <Image
            src="/logo/logo_festival.png"
            alt="Bahia de Todas as Cores"
            width={300}
            height={60}
            className="h-8 sm:h-10 w-auto max-w-[220px] sm:max-w-xs"
          />
        </div>

        {/* Datas + Local — HTML Neocrash */}
        <div
          className="flex flex-wrap items-baseline gap-x-6 gap-y-1 mb-8 opacity-0"
          style={{ animation: 'fadeUp 0.75s 0.52s ease forwards' }}
        >
          <span
            className="font-mono uppercase leading-none text-btc-lima tabular-nums"
            style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
              textShadow: '0 0 30px rgba(204,255,0,0.5)',
              letterSpacing: '0.04em',
            }}
          >
            26 a 29 de Março
          </span>
          <span
            className="font-neocrash uppercase leading-none text-btc-magenta"
            style={{
              fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
              fontSize: 'clamp(1.2rem, 2.8vw, 2.4rem)',
              textShadow: '0 0 20px rgba(232,25,122,0.6)',
            }}
          >
            Salvador · Bahia
          </span>
        </div>

        {/* Tema */}
        <p
          className="font-mono text-[0.78rem] sm:text-[0.75rem] tracking-[0.2em] uppercase text-white/40 mb-4 opacity-0"
          style={{ animation: 'fadeUp 0.75s 0.62s ease forwards' }}
        >
          8ª edição &nbsp;·&nbsp; Tema: Tecnologia Ancestral
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3 opacity-0"
          style={{ animation: 'fadeUp 0.75s 0.74s ease forwards' }}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScpy-Z43rDFw6x1Kl5KFRA39DJ-Dn_dY_TS6y6F3k3UTgG7UQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-[0.72rem] tracking-[0.1em] uppercase bg-btc-magenta text-white px-7 py-3.5 hover:bg-btc-magenta-dark hover:-translate-y-0.5 transition-all duration-150"
            style={{ borderRadius: '2px', boxShadow: '0 0 30px rgba(232,25,122,0.4)' }}
          >
            Inscrever-se como artista
          </a>
          <a
            href="#artistas"
            className="inline-block font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white px-7 py-3.5 border border-white/25 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-150"
            style={{ borderRadius: '2px' }}
          >
            Ver artistas →
          </a>
        </div>
      </div>

      {/* Barra de countdown */}
      <div
        className="relative z-20 border-t"
        style={{
          background: 'rgba(5,5,8,0.7)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(255,255,255,0.07)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
          <Countdown />
          <a
            href="#artistas"
            className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-btc-lima/70 hover:text-btc-lima border border-btc-lima/25 hover:border-btc-lima/60 px-4 py-2 transition-all duration-200 ml-auto"
            style={{ borderRadius: '2px' }}
          >
            50 artistas selecionados →
          </a>
        </div>
      </div>
    </section>
  )
}
