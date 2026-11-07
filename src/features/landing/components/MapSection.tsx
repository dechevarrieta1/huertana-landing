import { HUERTANA_BRAND } from "../data/huertana.data";
import { InteractiveBranchesMap } from "./map/InteractiveBranchesMap";

export function MapSection() {
  return (
    <section
      id="ubicacion"
      aria-labelledby="location-heading"
      className="scroll-mt-16 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabecera Editorial de la Sección */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
            [ UBICACIÓN & RED DE SUCURSALES ]
          </span>

          <h2
            id="location-heading"
            className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1B1B] leading-tight"
          >
            Si hay mesa Argentina, <br className="hidden sm:inline" />
            <span className="italic text-[#C99A4A]">hay Huertana</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#1B1B1B]/80 leading-relaxed font-sans">
            Nacimos en los viñedos y olivares de Russell, Maipú. Hoy nuestros centros de distribución y puntos de venta llevan sabores reales, mermeladas con 65% de fruta y delicatessen con AOVE a mesas de todo el país.
          </p>
        </div>

        {/* Mapa Interactivo Protagonista */}
        <InteractiveBranchesMap />

        {/* Fila inferior: Taller de Origen & Contacto Directo */}
        <div className="mt-12 rounded-2xl border border-[#C99A4A]/25 bg-[#F5F0E6] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#617248]">
              TALLER CENTRAL & RETIROS OFICIALES
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1B1B1B]">
              Russell, Maipú · Mendoza
            </h3>
            <p className="text-xs sm:text-sm text-[#1B1B1B]/75 max-w-xl">
              {HUERTANA_BRAND.location} · {HUERTANA_BRAND.schedule}.
              ¿Querés ser punto de venta o distribuidor en tu provincia? Escribinos por WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={HUERTANA_BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 md:flex-initial items-center justify-center rounded-full bg-[#FFFCF7] border border-[#C99A4A]/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#617248] hover:bg-[#C99A4A]/15 transition-colors"
            >
              WhatsApp directo →
            </a>
            <a
              href={HUERTANA_BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 md:flex-initial items-center justify-center rounded-full bg-[#C99A4A] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] hover:bg-[#b8893b] transition-colors shadow-xs"
            >
              Cómo llegar a Mendoza →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
