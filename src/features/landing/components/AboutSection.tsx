import Image from "next/image";
import { HeartHandshake, Leaf, Sparkles } from "lucide-react";
import { HUERTANA_BRAND } from "../data/huertana.data";

export function AboutSection() {
  return (
    <section
      id="sobre-huertana"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-[#C99A4A]/35 bg-[#F5F0E6] p-3">
              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80"
                  alt="Mesa artesanal con conservas vegetales gourmet, pesto y aceite de oliva virgen extra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-2 py-1.5 text-xs text-[#1B1B1B]/80">
                <span className="font-medium tracking-wide uppercase text-[#617248]">
                  Origen artesanal
                </span>
                <span>Russell, Maipú · Mendoza</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#617248]">
              Sobre Huertana
            </span>

            <h2
              id="about-heading"
              className="mt-3 font-serif text-3xl leading-tight font-normal text-[#1B1B1B] sm:text-4xl lg:text-[2.65rem]"
            >
              Volver a lo simple, honesto y nutritivo en la mesa de todos los
              días.
            </h2>

            <div
              className="mt-5 h-[1.5px] w-20 bg-[#C99A4A]"
              aria-hidden="true"
            />

            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#1B1B1B]/85 sm:text-lg sm:leading-8">
              <p>
                <strong>{HUERTANA_BRAND.name}</strong> nace en Russell, Maipú,
                Mendoza, con la convicción de elaborar alimentos honestos que
                cuidan el cuerpo y honran la tierra.
              </p>
              <p>
                Nuestras mermeladas gourmet rescatan la mejor fruta madurada
                bajo el sol andino con un 65% de fruta real y sin químicos.
                Nuestras delicatessen y salsas saladas son 100% vegetales, sin
                gluten y cocinadas con Aceite de Oliva Virgen Extra de primera
                calidad. Esenciales pensados para elevar tu cocina cotidiana con
                sabor real.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[#C99A4A]/35 bg-[#F5F0E6] p-4">
                <Leaf className="size-5 text-[#617248]" aria-hidden="true" />
                <h3 className="mt-2.5 font-serif text-lg font-medium text-[#1B1B1B]">
                  100% Vegetal
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#1B1B1B]/80">
                  Sin gluten, sin colorantes y sin conservantes artificiales.
                </p>
              </div>

              <div className="rounded-xl border border-[#C99A4A]/35 bg-[#F5F0E6] p-4">
                <HeartHandshake
                  className="size-5 text-[#617248]"
                  aria-hidden="true"
                />
                <h3 className="mt-2.5 font-serif text-lg font-medium text-[#1B1B1B]">
                  Aceite de Oliva Virgen Extra
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#1B1B1B]/80">
                  Base noble y saludable para todas nuestras pastas saladas.
                </p>
              </div>

              <div className="rounded-xl border border-[#C99A4A]/35 bg-[#F5F0E6] p-4">
                <Sparkles
                  className="size-5 text-[#617248]"
                  aria-hidden="true"
                />
                <h3 className="mt-2.5 font-serif text-lg font-medium text-[#1B1B1B]">
                  65% Fruta Real
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#1B1B1B]/80">
                  Mermeladas con fruta mendocina seleccionada y 35% de azúcar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
