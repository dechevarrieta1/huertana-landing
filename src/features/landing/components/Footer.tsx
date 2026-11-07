import { HUERTANA_BRAND, HUERTANA_NAV_ITEMS } from "../data/huertana.data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#C99A4A]/40 bg-[#1B1B1B] text-[#F5F0E6]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:py-12 lg:px-12">
        <div className="grid grid-cols-1 gap-6 border-b border-[#C99A4A]/25 pb-8 sm:gap-8 md:grid-cols-12">
          {/* Marca & Tagline */}
          <div className="md:col-span-5">
            <span className="font-serif text-2xl font-normal tracking-tight text-[#FFFCF7]">
              {HUERTANA_BRAND.name}
            </span>

            <p className="mt-2 font-serif text-sm sm:text-base italic text-[#C99A4A]">
              “Si hay momento, hay Huertana.”
            </p>

            <p className="mt-1 text-xs text-[#F5F0E6]/70">
              {HUERTANA_BRAND.claim} · Russell, Maipú, Mendoza.
            </p>
          </div>

          {/* Navegación mínima */}
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C99A4A]">
              [ NAVEGACIÓN ]
            </span>
            <ul className="mt-2.5 space-y-1.5">
              {HUERTANA_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs text-[#F5F0E6]/80 transition-colors hover:text-[#C99A4A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Canales oficiales */}
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C99A4A]">
              [ CANALES OFICIALES ]
            </span>
            <ul className="mt-2.5 space-y-1.5 text-xs">
              <li>
                <a
                  href={HUERTANA_BRAND.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E6]/90 hover:text-[#C99A4A]"
                >
                  Tienda: huertana.mitiendanube.com →
                </a>
              </li>
              <li>
                <a
                  href={HUERTANA_BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E6]/90 hover:text-[#C99A4A]"
                >
                  WhatsApp: {HUERTANA_BRAND.whatsappDisplay} →
                </a>
              </li>
              <li>
                <a
                  href={HUERTANA_BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E6]/90 hover:text-[#C99A4A]"
                >
                  Instagram: {HUERTANA_BRAND.instagramHandle} →
                </a>
              </li>
              <li>
                <a
                  href={HUERTANA_BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F0E6]/90 hover:text-[#C99A4A]"
                >
                  Google Maps: Perfil & Reseñas →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-2 text-[10px] sm:text-[11px] text-[#F5F0E6]/60 sm:flex-row">
          <p>© {currentYear} Huertana. Alimentos naturales y de autor.</p>
          <p>Russell, Maipú, Mendoza, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
