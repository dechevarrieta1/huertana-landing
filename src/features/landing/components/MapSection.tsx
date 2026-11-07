import { HUERTANA_BRAND } from "../data/huertana.data";

export function MapSection() {
  return (
    <section
      id="ubicacion"
      aria-labelledby="location-heading"
      className="scroll-mt-16 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          {/* Columna Izquierda: Información de Contacto Compacta */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
                [ UBICACIÓN & CONTACTO ]
              </span>

              <h2
                id="location-heading"
                className="mt-1 font-serif text-2xl font-normal text-[#1B1B1B] sm:text-4xl"
              >
                Russell, Maipú · Mendoza
              </h2>

              <p className="mt-1 font-serif text-sm sm:text-base italic text-[#617248]">
                “Desde Mendoza, elaboramos alimentos que hacen bien.”
              </p>

              <div className="mt-4 rounded-xl border border-[#C99A4A]/25 bg-[#F5F0E6] p-4 text-xs space-y-2.5 text-[#1B1B1B]/85">
                <div>
                  <span className="font-semibold text-[#617248] uppercase tracking-wider text-[10px] block">
                    Taller & Origen:
                  </span>
                  <span>{HUERTANA_BRAND.location}</span>
                </div>

                <div className="border-t border-[#C99A4A]/15 pt-2">
                  <span className="font-semibold text-[#617248] uppercase tracking-wider text-[10px] block">
                    Atención & Retiros:
                  </span>
                  <span>{HUERTANA_BRAND.schedule}</span>
                </div>

                <div className="border-t border-[#C99A4A]/15 pt-2 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#617248] uppercase tracking-wider text-[10px] block">
                      WhatsApp:
                    </span>
                    <span className="font-medium text-[#1B1B1B]">
                      {HUERTANA_BRAND.whatsappDisplay}
                    </span>
                  </div>
                  <a
                    href={HUERTANA_BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#FFFCF7] border border-[#C99A4A]/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#617248] hover:bg-[#C99A4A]/20"
                  >
                    Escribir →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <a
                href={HUERTANA_BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#C99A4A] py-2.5 sm:py-3 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] shadow-xs transition-colors hover:bg-[#b8893b]"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </div>

          {/* Columna Derecha: Mapa embebido con altura optimizada para mobile */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-[#C99A4A]/30 bg-[#EFECE6] shadow-xs">
              <div className="border-b border-[#C99A4A]/20 bg-[#F5F0E6] px-3.5 py-2 flex items-center justify-between text-[11px] text-[#1B1B1B]/75 font-mono">
                <span>[ MAPA · RUSSELL ]</span>
                <span className="text-[#617248] font-semibold">Mendoza</span>
              </div>
              <div className="relative h-56 sm:h-72 lg:h-[340px] w-full">
                <iframe
                  title="Mapa de ubicación Huertana en Russell, Maipú, Mendoza"
                  src="https://maps.google.com/maps?q=Russell,+Maip%C3%BA,+Mendoza,+Argentina&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Mapa interactivo de Google Maps centrado en Russell, Maipú, Mendoza"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
