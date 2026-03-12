import Image from 'next/image'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: '#050508' }}
    >
      {/* Fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/bg_azul.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
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

      {/* 26 a 29 de Março — top right */}
      <div
        className="absolute top-20 sm:top-24 right-5 sm:right-10 z-30 opacity-0"
        style={{ animation: 'fadeUp 0.7s 0.35s ease forwards' }}
      >
        <Image
          src="/logo/26_a_29_marco_new.png"
          alt="26 a 29 de Março"
          width={946}
          height={508}
          className="w-auto h-auto max-w-[120px] sm:max-w-[165px] lg:max-w-[210px]"
        />
      </div>

      {/* Personagens — z-10, bottom-aligned, spread */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {/* Personagem 1 — esquerda */}
        <div
          className="absolute bottom-0 left-0 w-[34%] sm:w-[29%] lg:w-[25%]"
          style={{ mixBlendMode: 'screen' }}
        >
          <Image
            src="/personagens/personagem_1_new.png"
            alt=""
            width={1764}
            height={2528}
            className="w-full h-auto"
          />
        </div>
        {/* Personagem 3 — direita */}
        <div
          className="absolute bottom-0 right-0 w-[34%] sm:w-[29%] lg:w-[25%]"
          style={{ mixBlendMode: 'screen' }}
        >
          <Image
            src="/personagens/personagem_3_new.png"
            alt=""
            width={2003}
            height={2518}
            className="w-full h-auto"
          />
        </div>
        {/* Personagem 2a — centro, na frente (último no DOM) */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30%] sm:w-[25%] lg:w-[22%]"
          style={{ mixBlendMode: 'screen' }}
        >
          <Image
            src="/personagens/personagem_2a_new.png"
            alt=""
            width={1679}
            height={2753}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Conteúdo central — logos */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pt-24 pb-[32vh] px-6 text-center">

        {/* 8ª Edição badge */}
        <div
          className="opacity-0"
          style={{ animation: 'fadeUp 0.7s 0.1s ease forwards' }}
        >
          <Image
            src="/logo/8a_oitava_new.png"
            alt="8ª Edição"
            width={476}
            height={501}
            className="w-auto h-auto max-h-[56px] sm:max-h-[72px] lg:max-h-[88px] mx-auto mb-3"
          />
        </div>

        {/* Logo festival — elemento principal */}
        <div
          className="opacity-0"
          style={{ animation: 'fadeUp 0.75s 0.22s ease forwards' }}
        >
          <Image
            src="/logo/logo_festival_new.png"
            alt="Festival Bahia de Todas as Cores"
            width={750}
            height={1151}
            priority
            className="w-auto h-auto max-h-[240px] sm:max-h-[320px] lg:max-h-[400px] mx-auto"
          />
        </div>

        {/* Salvador Bahia */}
        <div
          className="mt-5 opacity-0"
          style={{ animation: 'fadeUp 0.75s 0.4s ease forwards' }}
        >
          <Image
            src="/logo/salvador_bahia_new.png"
            alt="Salvador, Bahia"
            width={924}
            height={99}
            className="w-auto h-auto max-w-[190px] sm:max-w-[250px] lg:max-w-[310px] mx-auto"
          />
        </div>
      </div>

      {/* Barra de countdown */}
      <div
        className="relative z-30 border-t"
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
