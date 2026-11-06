import { Leaf, ShoppingBag, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { HUERTANA_BRAND, HUERTANA_NAV_ITEMS } from "../data/huertana.data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#C99A4A]/40 bg-[#1B1B1B] text-[#F5F0E6]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-[#C99A4A]/25 pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full border border-[#C99A4A]/60 bg-[#FFFCF7]/10 text-[#C99A4A]">
                <Leaf className="size-4" aria-hidden="true" />
              </span>
              <span className="font-serif text-2xl font-normal tracking-tight text-[#FFFCF7]">
                {HUERTANA_BRAND.name}
              </span>
            </div>

            <p className="mt-4 font-serif text-lg italic text-[#C99A4A]">
              “{HUERTANA_BRAND.claim}”
            </p>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#F5F0E6]/80">
              {HUERTANA_BRAND.sector}. Seleccionados con conciencia desde{" "}
              {HUERTANA_BRAND.location}.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A4A]">
              Secciones
            </h2>
            <ul className="mt-4 space-y-2.5">
              {HUERTANA_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-sm text-sm text-[#F5F0E6]/85 transition-colors hover:text-[#C99A4A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A4A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A4A]">
              Tienda y comunidad
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={HUERTANA_BRAND.storeUrl}
                  className="inline-flex items-center gap-2.5 rounded-sm text-sm text-[#F5F0E6]/90 transition-colors hover:text-[#C99A4A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A4A]"
                >
                  <ShoppingBag
                    className="size-4 text-[#C99A4A]"
                    aria-hidden="true"
                  />
                  <span>Tienda online oficial</span>
                </a>
              </li>
              <li>
                <a
                  href={HUERTANA_BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-sm text-sm text-[#F5F0E6]/90 transition-colors hover:text-[#C99A4A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A4A]"
                >
                  <InstagramIcon
                    className="size-4 text-[#C99A4A]"
                  />
                  <span>Instagram ({HUERTANA_BRAND.instagramHandle})</span>
                </a>
              </li>
              <li>
                <a
                  href={HUERTANA_BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-sm text-sm text-[#F5F0E6]/90 transition-colors hover:text-[#C99A4A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A4A]"
                >
                  <MessageCircle
                    className="size-4 text-[#C99A4A]"
                    aria-hidden="true"
                  />
                  <span>WhatsApp ({HUERTANA_BRAND.whatsappDisplay})</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-[#F5F0E6]/70 sm:flex-row">
          <p>
            © {currentYear} {HUERTANA_BRAND.name}. Todos los derechos
            reservados.
          </p>
          <p>Russell, Maipú, Mendoza, Argentina · Alimentos naturales y a granel</p>
        </div>
      </div>
    </footer>
  );
}
