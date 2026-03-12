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

      {/* Personagens — abaixo da navbar, z-[12] no container pai (blend correto) */}
      <div className="absolute top-16 left-0 right-0 z-[12] pointer-events-none select-none">
        {/* Personagem 3 — esquerda (primeiro no DOM = atrás) */}
        <div
          className="absolute top-0 left-1/2"
          style={{ transform: 'translateX(calc(-50% - 14vw))', mixBlendMode: 'screen' }}
        >
          <Image
            src="/personagens/personagem_3_new.png"
            alt=""
            width={2003}
            height={2518}
            className="h-[52vh] w-auto"
          />
        </div>
        {/* Personagem 2a — direita (segundo no DOM = atrás) */}
        <div
          className="absolute top-0 left-1/2"
          style={{ transform: 'translateX(calc(-50% + 14vw))', mixBlendMode: 'screen' }}
        >
          <Image
            src="/personagens/personagem_2a_new.png"
            alt=""
            width={1679}
            height={2753}
            className="h-[52vh] w-auto"
          />
        </div>
        {/* Personagem 1 — centro exato (último no DOM = na frente) */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{ mixBlendMode: 'screen' }}
        >
          <Image
            src="/personagens/personagem_1_new.png"
            alt=""
            width={1764}
            height={2528}
            className="h-[52vh] w-auto"
          />
        </div>
      </div>

      {/* Conteúdo central — logos */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-end pt-24 pb-12 px-6">

        {/* Linha central: 8a_oitava | logo_festival | 26_a_29_marco */}
        <div
          className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-0"
          style={{ animation: 'fadeUp 0.75s 0.15s ease forwards' }}
        >
          {/* 8ª — esquerda */}
          <Image
            src="/logo/8a_oitava_new.png"
            alt="8ª Edição"
            width={476}
            height={501}
            className="w-auto h-auto max-h-[70px] sm:max-h-[90px] lg:max-h-[110px] flex-shrink-0"
          />

          {/* Logo festival + Salvador Bahia — centro */}
          <div className="flex flex-col items-center">
            <Image
              src="/logo/logo_festival_new.png"
              alt="Festival Bahia de Todas as Cores"
              width={750}
              height={1151}
              priority
              className="w-auto h-auto max-h-[220px] sm:max-h-[300px] lg:max-h-[380px]"
            />
            <Image
              src="/logo/salvador_bahia_new.png"
              alt="Salvador, Bahia"
              width={924}
              height={99}
              className="w-auto h-auto max-w-[160px] sm:max-w-[210px] lg:max-w-[260px] mt-3"
            />
          </div>

          {/* 26 a 29 de Março — direita */}
          <Image
            src="/logo/26_a_29_marco_new.png"
            alt="26 a 29 de Março"
            width={946}
            height={508}
            className="w-auto h-auto max-w-[100px] sm:max-w-[140px] lg:max-w-[180px] flex-shrink-0"
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
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-center">
          <Countdown />
        </div>
      </div>
    </section>
  )
}
