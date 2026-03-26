import Image from 'next/image'

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
          src="/bg/capa_site.webp"
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
          src="/bg/capa_site_mobile.webp"
          alt="Festival Bahia de Todas as Cores — 8ª Edição"
          width={576}
          height={1024}
          priority
          className="w-full h-auto block"
          sizes="100vw"
        />
      </div>
    </section>
  )
}
