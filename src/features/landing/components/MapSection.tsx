import { HUERTANA_BRAND } from "../data/huertana.data";

export function MapSection() {
  return (
    <section
      id="ubicacion"
      aria-labelledby="location-heading"
      className="scroll-mt-20 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Columna Izquierda: Información de Contacto y Ubicación (Sin Iconos) */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
                [ UBICACIÓN & CONTACTO ]
              </span>

              <h2
                id="location-heading"
                className="mt-2 font-serif text-3xl font-normal text-[#1B1B1B] sm:text-4xl"
              >
                Russell, Maipú
              </h2>

              <p className="mt-1 font-serif text-lg italic text-[#617248]">
                “Desde Mendoza, elaboramos alimentos que hacen bien.”
              </p>

              <div
                className="mt-4 h-[1.5px] w-16 bg-[#C99A4A]"
                aria-hidden="true"
              />

              <div className="mt-6 space-y-4 text-sm text-[#1B1B1B]/85">
                <div className="rounded-xl border border-[#C99A4A]/25 bg-[#F5F0E6] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
                    Localidad & Taller:
                  </p>
                  <p className="mt-1 font-medium text-[#1B1B1B]">
                    {HUERTANA_BRAND.location}
                  </p>
                  <p className="mt-1 text-xs text-[#1B1B1B]/70">
                    Cuna vitivinícola y productora de Maipú, Mendoza.
                  </p>
                </div>

                <div className="rounded-xl border border-[#C99A4A]/25 bg-[#F5F0E6] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
                    Atención & Envíos:
                  </p>
                  <p className="mt-1 font-medium text-[#1B1B1B]">
                    {HUERTANA_BRAND.schedule}
                  </p>
                  <p className="mt-1 text-xs text-[#1B1B1B]/70">
                    Envíos a todo el país y retiros previa coordinación.
                  </p>
                </div>

                <div className="rounded-xl border border-[#C99A4A]/25 bg-[#F5F0E6] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
                    WhatsApp Directo:
                  </p>
                  <p className="mt-1 font-medium text-[#1B1B1B]">
                    {HUERTANA_BRAND.whatsappDisplay}
                  </p>
                  <a
                    href={HUERTANA_BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold uppercase tracking-wider text-[#617248] hover:underline"
                  >
                    Escribir por WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={HUERTANA_BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#C99A4A] py-3 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] shadow-xs transition-colors hover:bg-[#b8893b]"
              >
                Abrir en la aplicación de Google Maps →
              </a>
            </div>
          </div>

          {/* Columna Derecha: Embed interactivo oficial de Google Maps */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-[#C99A4A]/35 bg-[#EFECE6] shadow-sm">
              <div className="border-b border-[#C99A4A]/25 bg-[#F5F0E6] px-4 py-2.5 flex items-center justify-between text-xs text-[#1B1B1B]/75 font-mono">
                <span>[ GOOGLE MAPS · RUSSELL, MAIPÚ ]</span>
                <span className="text-[#617248] font-semibold">Mendoza, Argentina</span>
              </div>
              <div className="relative aspect-[16/11] w-full">
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
