import { MapPin, ExternalLink, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { HUERTANA_BRAND } from "../data/huertana.data";

export function LocationSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="location-heading"
      className="scroll-mt-20 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#617248]">
              <MapPin className="size-4 text-[#C99A4A]" aria-hidden="true" />
              <span>Ubicación y contacto</span>
            </span>

            <h2
              id="location-heading"
              className="mt-3 font-serif text-3xl leading-tight font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Russell, Maipú, Mendoza
            </h2>

            <div
              className="mt-5 h-[1.5px] w-20 bg-[#C99A4A]"
              aria-hidden="true"
            />

            <p className="mt-6 font-serif text-xl leading-relaxed italic text-[#1B1B1B]/90 sm:text-2xl">
              “Desde Mendoza, seleccionamos productos que hacen bien al cuerpo y
              al planeta.”
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#1B1B1B]/80">
              Estamos en Russell, Maipú, corazón productivo y rural de Mendoza.
              Si tenés consultas sobre nuestros productos a granel, envíos o
              puntos de entrega, escribinos directamente y te asesoramos con
              calidez.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={HUERTANA_BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver ubicación de Russell, Maipú, Mendoza en Google Maps (abre en nueva pestaña)"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#1B1B1B]/25 bg-[#F5F0E6] px-6 py-3.5 text-sm font-semibold text-[#1B1B1B] transition-colors duration-200 hover:border-[#C99A4A] hover:bg-[#C99A4A]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                <MapPin className="size-4 text-[#617248]" aria-hidden="true" />
                <span>Ver Russell, Maipú en Google Maps</span>
                <ExternalLink
                  className="size-3.5 text-[#1B1B1B]/70"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#C99A4A]/40 bg-[#F5F0E6] p-7 sm:p-9">
              <h3 className="font-serif text-2xl font-normal text-[#1B1B1B]">
                Canales directos
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1B1B1B]/80">
                Contactanos por WhatsApp o seguinos en Instagram para conocer
                novedades, ingresos de estación y recetas conscientes.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={HUERTANA_BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escribir por WhatsApp a Huertana (abre en nueva pestaña)"
                  className="flex items-center justify-between rounded-xl border border-[#C99A4A]/35 bg-[#FFFCF7] p-4 transition-colors duration-200 hover:border-[#C99A4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-10 items-center justify-center rounded-full bg-[#F5F0E6] text-[#617248]">
                      <MessageCircle className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-[#617248]">
                        WhatsApp
                      </p>
                      <p className="text-sm font-medium text-[#1B1B1B]">
                        {HUERTANA_BRAND.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    className="size-4 text-[#C99A4A]"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={HUERTANA_BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar Instagram de Huertana Alimentos (abre en nueva pestaña)"
                  className="flex items-center justify-between rounded-xl border border-[#C99A4A]/35 bg-[#FFFCF7] p-4 transition-colors duration-200 hover:border-[#C99A4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-10 items-center justify-center rounded-full bg-[#F5F0E6] text-[#617248]">
                      <InstagramIcon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-[#617248]">
                        Instagram
                      </p>
                      <p className="text-sm font-medium text-[#1B1B1B]">
                        {HUERTANA_BRAND.instagramHandle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    className="size-4 text-[#C99A4A]"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
