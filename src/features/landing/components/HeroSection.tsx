import Image from "next/image";
import { ArrowRight, Compass, MapPin } from "lucide-react";
import { HUERTANA_BRAND } from "../data/huertana.data";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F5F0E6] pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col items-start lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C99A4A]/50 bg-[#FFFCF7] px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-[#617248]">
              <MapPin className="size-3.5 text-[#C99A4A]" aria-hidden="true" />
              <span>Russell · Maipú · Mendoza</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-6 font-serif text-4xl leading-[1.12] font-normal tracking-tight text-[#1B1B1B] sm:text-5xl lg:text-6xl"
            >
              Sabores de la tierra,{" "}
              <span className="italic font-normal text-[#617248]">
                elegidos con conciencia.
              </span>
            </h1>

            <div
              className="mt-6 h-[1.5px] w-24 bg-[#C99A4A]"
              aria-hidden="true"
            />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#1B1B1B]/85 sm:text-lg sm:leading-8">
              En Huertana creamos mermeladas gourmet con 65% de fruta,
              delicatessen 100% vegetales con Aceite de Oliva Virgen Extra y
              salsas artesanales de tomate. Alimentos reales, sin gluten ni
              conservantes, elaborados con pasión desde Russell, Maipú.
            </p>

            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={HUERTANA_BRAND.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C99A4A] px-7 py-4 text-sm font-semibold tracking-wide text-[#1B1B1B] shadow-xs transition-all duration-200 hover:bg-[#b8893b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                <span>Conocé nuestra tienda</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>

              <a
                href="#categorias"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#1B1B1B]/25 bg-[#FFFCF7] px-7 py-4 text-sm font-semibold tracking-wide text-[#1B1B1B] transition-all duration-200 hover:border-[#C99A4A] hover:bg-[#FFFCF7]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                <Compass className="size-4 text-[#617248]" aria-hidden="true" />
                <span>Ver categorías</span>
              </a>
            </div>

            <div className="mt-12 grid w-full grid-cols-3 gap-4 border-t border-[#C99A4A]/35 pt-7 sm:max-w-lg">
              <div>
                <p className="font-serif text-xl font-medium text-[#1B1B1B] sm:text-2xl">
                  100% Vegetal
                </p>
                <p className="mt-0.5 text-xs leading-snug text-[#1B1B1B]/75">
                  Sin TACC ni conservantes
                </p>
              </div>
              <div className="border-l border-[#C99A4A]/30 pl-4">
                <p className="font-serif text-xl font-medium text-[#1B1B1B] sm:text-2xl">
                  Con AOVE
                </p>
                <p className="mt-0.5 text-xs leading-snug text-[#1B1B1B]/75">
                  Oliva Virgen Extra
                </p>
              </div>
              <div className="border-l border-[#C99A4A]/30 pl-4">
                <p className="font-serif text-xl font-medium text-[#1B1B1B] sm:text-2xl">
                  65% Fruta
                </p>
                <p className="mt-0.5 text-xs leading-snug text-[#1B1B1B]/75">
                  Puro dulzor natural
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-3 rounded-3xl border border-[#C99A4A]/45"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#C99A4A]/30 bg-[#FFFCF7] shadow-[0_16px_40px_rgba(27,27,27,0.08)]">
                <Image
                  src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85"
                  alt="Frascos de conservas artesanales y mermeladas gourmet Huertana en mesa de madera"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 rounded-xl border border-[#C99A4A]/40 bg-[#FFFCF7] p-4 shadow-xs sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:max-w-xs">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#617248]">
                  Nuestro propósito
                </p>
                <p className="mt-1 font-serif text-lg italic text-[#1B1B1B]">
                  “{HUERTANA_BRAND.claim}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
