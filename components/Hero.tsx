import Image from 'next/image'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex flex-col"
      style={{ background: '#050508' }}
    >
      {/* Capa — desktop */}
      <div className="relative w-full hidden sm:block">
        <Image
          src="/bg/capa_site.png"
          alt="Festival Bahia de Todas as Cores — 8ª Edição"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto block"
          sizes="100vw"
        />
      </div>

      {/* Capa — mobile */}
      <div className="relative w-full sm:hidden">
        <Image
          src="/bg/capa_site_mobile.png"
          alt="Festival Bahia de Todas as Cores — 8ª Edição"
          width={576}
          height={1024}
          priority
          className="w-full h-auto block"
          sizes="100vw"
        />
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
