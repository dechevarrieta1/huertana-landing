import { ArrowRight, ShoppingBag, CheckCircle2 } from "lucide-react";
import { HUERTANA_BRAND } from "../data/huertana.data";

export function OnlineStoreCtaSection() {
  return (
    <section
      aria-labelledby="online-store-heading"
      className="border-t border-[#C99A4A]/30 bg-[#F5F0E6] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-[#C99A4A]/50 bg-[#FFFCF7] px-6 py-14 shadow-[0_12px_36px_rgba(27,27,27,0.05)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C99A4A]/45 bg-[#F5F0E6] px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#617248]">
              <ShoppingBag className="size-3.5 text-[#C99A4A]" aria-hidden="true" />
              <span>Tienda oficial Huertana</span>
            </span>

            <p className="mt-4 font-serif text-xl sm:text-2xl text-[#617248] italic font-medium">
              “Si hay ganas de algo rico y noble, hay Huertana.”
            </p>

            <h2
              id="online-store-heading"
              className="mt-3 font-serif text-3xl leading-tight font-normal text-[#1B1B1B] sm:text-4xl lg:text-5xl"
            >
              Todo lo que necesitás para comer mejor, en un solo lugar.
            </h2>

            <div
              className="mx-auto mt-6 h-[1.5px] w-24 bg-[#C99A4A]"
              aria-hidden="true"
            />

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#1B1B1B]/80 sm:text-lg">
              Hacé tu pedido online de manera simple y segura en nuestra tienda
              oficial. Elegí tus mermeladas gourmet, delicatessen vegetales con
              AOVE, salsas de tomate artesanal y packs de regalo.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={HUERTANA_BRAND.storeUrl}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#C99A4A] px-9 py-4 text-base font-semibold text-[#1B1B1B] shadow-xs transition-all duration-200 hover:bg-[#b8893b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B] sm:w-auto"
              >
                <span>Ir a la tienda online</span>
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-[#C99A4A]/25 pt-8 text-xs font-medium text-[#1B1B1B]/80 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  className="size-4 text-[#617248]"
                  aria-hidden="true"
                />
                <span>Compra directa y segura</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  className="size-4 text-[#617248]"
                  aria-hidden="true"
                />
                <span>Elaboración artesanal en Mendoza</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  className="size-4 text-[#617248]"
                  aria-hidden="true"
                />
                <span>Atención cercana por WhatsApp</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
