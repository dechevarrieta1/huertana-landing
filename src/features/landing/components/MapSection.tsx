import { HUERTANA_BRAND, HUERTANA_TOURISM } from "../data/huertana.data";
import { InteractiveBranchesMap } from "./map/InteractiveBranchesMap";
import { Store, Compass, MessageCircle } from "lucide-react";

export function MapSection() {
  const wholesaleWaUrl = `https://wa.me/5492613432657?text=${encodeURIComponent(
    "Hola Huertana, me gustaría recibir información sobre venta mayorista / incorporar sus productos a mi comercio o catálogo corporativo."
  )}`;

  return (
    <section
      id="ubicacion"
      aria-labelledby="location-heading"
      className="scroll-mt-16 border-t border-[#CCBFA4]/60 bg-[#FFFDF8] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabecera Editorial de la Sección */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="font-ui text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#9B773C]">
            Ubicación & red de sucursales
          </span>

          <h2
            id="location-heading"
            className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1B1B] leading-tight"
          >
            Si hay mesa Argentina, <br className="hidden sm:inline" />
            <span className="italic text-[#9B773C]">hay HUERTANA</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#1B1B1B]/80 leading-relaxed font-sans">
            Nacimos en Russell, Maipú. Hoy nuestros puntos de venta llevan
            mermeladas con 65% de fruta, delicatessen 100% vegetales con AOVE y
            salsas caseras libres de gluten a mesas de todo el país.
          </p>
        </div>

        {/* Mapa Interactivo Protagonista */}
        <InteractiveBranchesMap />

        {/* Fila: Taller de Origen & Retiros */}
        <div className="mt-12 rounded-2xl border border-[#CCBFA4] bg-[#FBF7EB] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <span className="font-ui text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B773C]">
              Taller central & retiros oficiales
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1B1B1B]">
              {HUERTANA_BRAND.streetAddress} · Mendoza
            </h3>
            <p className="text-xs sm:text-sm text-[#1B1B1B]/75 max-w-xl">
              {HUERTANA_BRAND.schedule} · GPS: {HUERTANA_BRAND.gps}. Retiro de
              pedidos de la tienda online y sala de elaboración artesanal a la
              vista.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={HUERTANA_BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 md:flex-initial items-center justify-center rounded-full bg-[#C09B5D] px-5 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-[#1B1B1B] hover:bg-[#AD874A] transition-colors shadow-xs"
            >
              Cómo llegar a Maipú →
            </a>
          </div>
        </div>

        {/* Dos tarjetas complementarias: Venta Mayorista y Turismo/Fábrica */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tarjeta Venta Mayorista & Regalos Corporativos */}
          <div className="rounded-2xl border border-[#CCBFA4] bg-[#FBF7EB] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#9B773C]">
                <Store className="h-5 w-5" />
                <span className="font-ui text-[11px] font-bold uppercase tracking-[0.14em]">
                  Venta Mayorista & Corporativos
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl text-[#1B1B1B]">
                ¿Querés vender nuestros productos en tu local?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#1B1B1B]/75 leading-relaxed">
                Abastecemos a vinotecas, almacenes naturales, charcuterías y
                tiendas gourmet de todo el país, y armamos propuestas a medida
                para regalos empresariales.
              </p>
            </div>
            <div className="mt-5">
              <a
                href={wholesaleWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B1B1B] px-5 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-[#FBF7EB] hover:bg-[#333333] transition-colors shadow-xs"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#C09B5D]" />
                Consultar por WhatsApp →
              </a>
            </div>
          </div>

          {/* Tarjeta Turismo & Experiencia en Fábrica */}
          <div className="rounded-2xl border border-[#CCBFA4] bg-[#FBF7EB] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#9B773C]">
                <Compass className="h-5 w-5" />
                <span className="font-ui text-[11px] font-bold uppercase tracking-[0.14em]">
                  Turismo & Visitas Guiadas
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl text-[#1B1B1B]">
                Sumá Huertana a tu recorrido por Maipú
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#1B1B1B]/75 leading-relaxed">
                Recibimos visitantes y agencias de 10 a 16 hs con reserva
                previa: recorrido por nuestro taller artesanal y degustación
                guiada de 12 a 15 variedades.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={HUERTANA_TOURISM.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C09B5D] px-5 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-[#1B1B1B] hover:bg-[#AD874A] transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Reservar visita →
              </a>
              <a
                href="#turismo"
                className="inline-flex items-center justify-center rounded-full border border-[#CCBFA4] bg-[#FFFDF8] px-4 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-[#1B1B1B] hover:border-[#C09B5D]"
              >
                Ver tarifas y brochure ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
