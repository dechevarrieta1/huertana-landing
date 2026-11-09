import { HUERTANA_BRAND } from "../data/huertana.data";
import { InteractiveBranchesMap } from "./map/InteractiveBranchesMap";
import { Store, Compass, MessageCircle } from "lucide-react";

export function MapSection() {
  const wholesaleWaUrl = `https://wa.me/5492613432657?text=${encodeURIComponent(
    "Hola Huertana, me gustaría recibir información sobre venta mayorista / incorporar sus productos a mi comercio o catálogo corporativo."
  )}`;

  const tourismWaUrl = `https://wa.me/5492613432657?text=${encodeURIComponent(
    "Hola Huertana, quisiera consultar por visitas guiadas, experiencia y degustación en su fábrica de Russell, Maipú."
  )}`;

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
            <span className="italic text-[#C99A4A]">hay HUERTANA</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#1B1B1B]/80 leading-relaxed font-sans">
            Nacimos en los viñedos y olivares de Russell, Maipú. Hoy nuestros centros de distribución y puntos de venta llevan sabores reales, mermeladas con 65% de fruta y delicatessen con AOVE a mesas de todo el país.
          </p>
        </div>

        {/* Mapa Interactivo Protagonista */}
        <InteractiveBranchesMap />

        {/* Fila: Taller de Origen & Retiros */}
        <div className="mt-12 rounded-2xl border border-[#C99A4A]/25 bg-[#F5F0E6] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#617248]">
              TALLER CENTRAL & RETIROS OFICIALES
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1B1B1B]">
              Russell, Maipú · Mendoza
            </h3>
            <p className="text-xs sm:text-sm text-[#1B1B1B]/75 max-w-xl">
              {HUERTANA_BRAND.location} · {HUERTANA_BRAND.schedule}.
              Retiro de pedidos de la tienda online y punto neurálgico de producción artesanal.
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

        {/* Dos tarjetas complementarias: Venta Mayorista y Turismo/Fábrica */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tarjeta Venta Mayorista & Regalos Corporativos */}
          <div className="rounded-2xl border border-[#C99A4A]/25 bg-[#FFFCF7] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#617248]">
                <Store className="h-5 w-5" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">
                  Venta Mayorista & Corporativos
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl text-[#1B1B1B]">
                ¿Querés vender nuestros productos en tu local?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#1B1B1B]/75 leading-relaxed">
                Abastecemos a vinotecas, almacenes naturales, charcuterías y tiendas gourmet de todo el país. También armamos propuestas a medida para regalos empresariales, cajas de fin de año y celebraciones.
              </p>
            </div>
            <div className="mt-5">
              <a
                href={wholesaleWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#617248] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#52603c] transition-colors shadow-xs"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Consultar por Venta Mayorista →
              </a>
            </div>
          </div>

          {/* Tarjeta Turismo & Experiencia en Fábrica */}
          <div className="rounded-2xl border border-[#C99A4A]/25 bg-[#FFFCF7] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#BA8840]">
                <Compass className="h-5 w-5" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">
                  Turismo & Visitas
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl text-[#1B1B1B]">
                Conocé la fábrica en Russell, Maipú
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#1B1B1B]/75 leading-relaxed">
                ¿Sabías que podés visitarnos? Te invitamos a conocer el corazón de Huertana, observar los procesos de elaboración artesanal del día y compartir una degustación con los sabores genuinos de nuestra tierra.
              </p>
            </div>
            <div className="mt-5">
              <a
                href={tourismWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C99A4A]/40 bg-[#F5F0E6] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] hover:bg-[#C99A4A]/20 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#617248]" />
                Coordinar visita o degustación →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
