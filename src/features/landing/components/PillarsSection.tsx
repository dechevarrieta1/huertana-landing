import { Sprout, Scale, Handshake, Recycle } from "lucide-react";
import { HUERTANA_PILLARS } from "../data/huertana.data";
import type { PillarItem } from "../types/huertana.types";

function PillarIcon({ name }: { name: PillarItem["iconName"] }) {
  switch (name) {
    case "sprout":
      return <Sprout className="size-5 text-[#617248]" aria-hidden="true" />;
    case "scale":
      return <Scale className="size-5 text-[#617248]" aria-hidden="true" />;
    case "handshake":
      return <Handshake className="size-5 text-[#617248]" aria-hidden="true" />;
    case "recycle":
      return <Recycle className="size-5 text-[#617248]" aria-hidden="true" />;
  }
}

export function PillarsSection() {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="border-t border-[#C99A4A]/30 bg-[#F5F0E6] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#617248]">
            Qué hacemos
          </span>
          <h2
            id="pillars-heading"
            className="mt-3 font-serif text-3xl leading-tight font-normal text-[#1B1B1B] sm:text-4xl"
          >
            Cuatro pilares que guían cada elección en Huertana
          </h2>
          <div
            className="mx-auto mt-5 h-[1.5px] w-20 bg-[#C99A4A]"
            aria-hidden="true"
          />
          <p className="mt-5 text-base leading-relaxed text-[#1B1B1B]/80">
            Cuidamos cada etapa del camino para que encuentres alimentos reales,
            frescos y alineados con una vida más consciente.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HUERTANA_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="flex flex-col justify-between rounded-2xl border border-[#C99A4A]/35 bg-[#FFFCF7] p-7 shadow-[0_6px_24px_rgba(27,27,27,0.03)] transition-all duration-300 hover:border-[#C99A4A]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#C99A4A]/25 pb-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#F5F0E6] border border-[#C99A4A]/40">
                    <PillarIcon name={pillar.iconName} />
                  </span>
                  <span className="font-serif text-sm font-medium tracking-widest text-[#C99A4A]">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl leading-snug font-medium text-[#1B1B1B]">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#1B1B1B]/80">
                  {pillar.description}
                </p>
              </div>

              <div
                className="mt-6 h-[1px] w-12 bg-[#C99A4A]/60"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
