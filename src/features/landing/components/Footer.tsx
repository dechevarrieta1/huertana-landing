import Image from "next/image";
import {
  HUERTANA_BRAND,
  HUERTANA_NAV_ITEMS,
  HUERTANA_TOURISM,
} from "../data/huertana.data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#C09B5D]/45 bg-[#1B1B1B] text-[#FBF7EB]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-12">
        <div className="grid grid-cols-1 gap-8 border-b border-[#CCBFA4]/20 pb-10 md:grid-cols-12">
          {/* Marca en Versión Negativa Oficial (Manual de Marca pág. 02) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <Image
                src="/images/huertana-isologo-negativo.png"
                alt="Isologo de Huertana en versión negativa"
                width={600}
                height={800}
                className="h-16 w-auto shrink-0 object-contain"
              />
              <div>
                <span className="font-serif text-2xl font-normal tracking-tight text-[#FBF7EB]">
                  {HUERTANA_BRAND.name}
                  <sup className="ml-0.5 text-[10px] font-ui align-super">®</sup>
                </span>
                <span className="mt-0.5 block font-ui text-[10px] font-medium uppercase tracking-[0.22em] text-[#C09B5D]">
                  {HUERTANA_BRAND.originSubtitle}
                </span>
                <p className="mt-1.5 font-serif text-sm italic text-[#CCBFA4]">
                  “{HUERTANA_BRAND.familyTagline}”
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#FBF7EB]/75 max-w-sm">
              {HUERTANA_BRAND.claim} · Elaboración artesanal de productos gourmet,
              libres de gluten y sin conservantes químicos.{" "}
              {HUERTANA_BRAND.location}.
            </p>
          </div>

          {/* Navegación */}
          <div className="md:col-span-3">
            <span className="font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-[#C09B5D]">
              Navegación
            </span>
            <ul className="mt-3 space-y-2">
              {HUERTANA_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-ui text-xs text-[#FBF7EB]/80 transition-colors hover:text-[#C09B5D]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Canales oficiales */}
          <div className="md:col-span-4">
            <span className="font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-[#C09B5D]">
              Canales oficiales & Turismo
            </span>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a
                  href={HUERTANA_BRAND.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FBF7EB]/90 hover:text-[#C09B5D] transition-colors"
                >
                  Tienda online: huertana.mitiendanube.com →
                </a>
              </li>
              <li>
                <a
                  href={HUERTANA_BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FBF7EB]/90 hover:text-[#C09B5D] transition-colors"
                >
                  WhatsApp Tienda: {HUERTANA_BRAND.whatsappDisplay} →
                </a>
              </li>
              <li>
                <a
                  href={HUERTANA_TOURISM.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FBF7EB]/90 hover:text-[#C09B5D] transition-colors"
                >
                  Turismo & Reservas: {HUERTANA_TOURISM.contact.phoneDisplay} →
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${HUERTANA_TOURISM.contact.email}`}
                  className="text-[#FBF7EB]/90 hover:text-[#C09B5D] transition-colors"
                >
                  {HUERTANA_TOURISM.contact.email} →
                </a>
              </li>
              <li>
                <a
                  href={HUERTANA_BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FBF7EB]/90 hover:text-[#C09B5D] transition-colors"
                >
                  Instagram: {HUERTANA_BRAND.instagramHandle} ·{" "}
                  {HUERTANA_TOURISM.contact.instagramHandle} →
                </a>
              </li>
              <li>
                <a
                  href={HUERTANA_BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FBF7EB]/90 hover:text-[#C09B5D] transition-colors"
                >
                  Google Maps: {HUERTANA_BRAND.streetAddress} →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-[11px] text-[#CCBFA4]/80 sm:flex-row">
          <p>© {currentYear} HUERTANA®. Elaboración artesanal de productos gourmet.</p>
          <p>{HUERTANA_BRAND.location}</p>
        </div>
      </div>
    </footer>
  );
}
