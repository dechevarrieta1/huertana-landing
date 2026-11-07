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
    detail: "Alimentos seguros y reconfortantes para compartir sin restricciones.",
  },
  {
    num: "05",
    title: "Elaboración a la vista",
    detail: "Taller artesanal abierto en Russell, Maipú, con procesos a escala humana.",
  },
];

export function AboutSection() {
  return (
    <section
      id="sobre-huertana"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Columna Izquierda: Placeholder Taller & Elaboración a la vista */}
          <div className="lg:col-span-5">
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

          {/* Columna Derecha: Quiénes Somos y los 5 pilares con sabores genuinos */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
              [ QUIÉNES SOMOS ]
            </span>

            <h2
              id="about-heading"
              className="mt-2 font-serif text-3xl font-normal text-[#1B1B1B] sm:text-4xl lg:text-[2.65rem]"
            >
              Sabores genuinos, hechos con cuidado.
            </h2>

            <div
              className="mt-4 h-[1.5px] w-16 bg-[#C99A4A]"
              aria-hidden="true"
            />

            <p className="mt-5 text-base leading-relaxed text-[#1B1B1B]/85 sm:text-lg">
              En Huertana elaboramos alimentos reales para la mesa compartida.
              Creemos en los tiempos pacientes de la tierra, en el respeto por
              quien cultiva y en la transparencia absoluta de cada frasco que
              llega a tu hogar.
            </p>

            {/* Los 5 ítems exactos solicitados por el usuario */}
            <div className="mt-8 border-t border-[#C99A4A]/25 pt-4 divide-y divide-[#C99A4A]/15">
              {BRAND_PRINCIPLES.map((item) => (
                <div
                  key={item.num}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
                >
                  <span className="font-mono text-xs font-bold text-[#C99A4A] shrink-0">
                    {item.num}.
                  </span>
                  <div className="flex-1">
                    <span className="font-serif text-base sm:text-lg font-medium text-[#1B1B1B]">
                      {item.title}:{" "}
                    </span>
                    <span className="text-xs sm:text-sm text-[#1B1B1B]/75 leading-relaxed">
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
