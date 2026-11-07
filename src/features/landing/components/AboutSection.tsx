import { Placeholder } from "@/components/ui/Placeholder";

const BRAND_PRINCIPLES = [
  {
    num: "01",
    title: "Frutas y verduras de estación",
    detail: "Cosechadas en su maduración óptima bajo el sol de Mendoza.",
  },
  {
    num: "02",
    title: "Aceite de oliva virgen extra",
    detail: "AOVE de primera presión en frío como base noble de cada conserva.",
  },
  {
    num: "03",
    title: "Sin colorantes ni conservantes",
    detail: "Recetas limpias y transparentes, sin agregados químicos.",
  },
  {
    num: "04",
    title: "Libre de gluten",
    detail: "Alimentos seguros y reconfortantes para compartir en familia.",
  },
  {
    num: "05",
    title: "Elaboración a la vista",
    detail: "Taller artesanal abierto en Russell, Maipú, a escala humana.",
  },
];

export function AboutSection() {
  return (
    <section
      id="sobre-huertana"
      aria-labelledby="about-heading"
      className="scroll-mt-16 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Columna Izquierda: Oculto en mobile para no duplicar scroll, visible en desktop */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="rounded-2xl border border-[#C99A4A]/35 bg-[#F5F0E6] p-4">
              <Placeholder
                label="FOTOGRAFÍA: ELABORACIÓN A LA VISTA"
                ratio="aspect-[4/4.2]"
                hint="Cocina abierta y taller artesanal en Russell, Maipú"
              />

              <div className="mt-3.5 flex items-center justify-between border-t border-[#C99A4A]/25 pt-3 text-xs text-[#1B1B1B]/70 font-mono">
                <span>[ TALLER TRANSPARENTE ]</span>
                <span className="text-[#617248] font-semibold">Russell · Maipú</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Quiénes Somos y los 5 pilares compactos */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
              [ QUIÉNES SOMOS ]
            </span>

            <h2
              id="about-heading"
              className="mt-1 font-serif text-2xl font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Sabores genuinos, hechos con cuidado.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#1B1B1B]/85 sm:text-base">
              En Huertana elaboramos alimentos reales para la mesa compartida.
              Creemos en los tiempos pacientes de la tierra, en el respeto por
              quien cultiva y en la transparencia absoluta de cada frasco.
            </p>

            {/* Los 5 ítems compactos */}
            <div className="mt-6 border-t border-[#C99A4A]/20 pt-2 divide-y divide-[#C99A4A]/15">
              {BRAND_PRINCIPLES.map((item) => (
                <div
                  key={item.num}
                  className="py-2.5 sm:py-3.5 flex items-baseline gap-2.5 sm:gap-4"
                >
                  <span className="font-mono text-xs font-bold text-[#C99A4A] shrink-0">
                    {item.num}.
                  </span>
                  <div className="text-xs sm:text-sm">
                    <span className="font-serif font-medium text-[#1B1B1B]">
                      {item.title}:{" "}
                    </span>
                    <span className="text-[#1B1B1B]/70">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
