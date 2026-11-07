import { Placeholder } from "@/components/ui/Placeholder";
import { HUERTANA_BRAND } from "../data/huertana.data";

export function AboutSection() {
  return (
    <section
      id="sobre-huertana"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Placeholder
              label="FOTOGRAFÍA: TALLER / ORIGEN EN RUSSELL"
              ratio="aspect-[4/3.5]"
              hint="Imagen del espacio de elaboración o terruño maipucino"
            />
          </div>

          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
              [ QUIÉNES SOMOS ]
            </span>

            <h2
              id="about-heading"
              className="mt-2 font-serif text-3xl font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Origen artesanal desde Russell, Maipú
            </h2>

            <div
              className="mt-4 h-[1.5px] w-16 bg-[#C99A4A]"
              aria-hidden="true"
            />

            <p className="mt-5 text-base leading-relaxed text-[#1B1B1B]/85 sm:text-lg">
              Huertana nace en Mendoza para acercar alimentos honestos a la mesa
              cotidiana. Elaboramos conservas y pastas en pequeña escala,
              utilizando frutas mendocinas de estación y Aceite de Oliva Virgen
              Extra, sin aditivos ni conservantes químicos.
            </p>

            {/* 3 pilares sintetizados sin duplicación ni iconos */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#C99A4A]/25 pt-6 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#617248]">
                  01. Fruta Real
                </p>
                <p className="mt-1 text-xs text-[#1B1B1B]/75 leading-relaxed">
                  65% de fruta seleccionada en cada frasco de dulce.
                </p>
              </div>
              <div className="border-t border-[#C99A4A]/20 pt-3 sm:border-t-0 sm:border-l sm:pl-4 sm:pt-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#617248]">
                  02. Aceite de Oliva
                </p>
                <p className="mt-1 text-xs text-[#1B1B1B]/75 leading-relaxed">
                  AOVE mendocino puro como base de todas las delicatessen.
                </p>
              </div>
              <div className="border-t border-[#C99A4A]/20 pt-3 sm:border-t-0 sm:border-l sm:pl-4 sm:pt-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#617248]">
                  03. Sin Químicos
                </p>
                <p className="mt-1 text-xs text-[#1B1B1B]/75 leading-relaxed">
                  Libre de gluten, colorantes y conservantes industriales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
