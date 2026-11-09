"use client";

import { HUERTANA_BRAND, HUERTANA_NAV_ITEMS } from "../data/huertana.data";
import { useHeaderNavigation } from "../hooks/useHeaderNavigation";

export function Header() {
  const { isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu } =
    useHeaderNavigation();

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#C99A4A]/30 shadow-[0_2px_16px_rgba(27,27,27,0.03)]"
          : "bg-[#F5F0E6] border-b border-[#C99A4A]/25"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo / Marca puramente tipográfica */}
        <a
          href="#inicio"
          onClick={closeMobileMenu}
          aria-label="HUERTANA - Ir al inicio"
          className="flex flex-col rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1B1B]"
        >
          <span className="font-serif text-2xl font-normal tracking-tight text-[#1B1B1B] sm:text-[1.65rem]">
            HUERTANA
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#617248]">
            Russell · Mendoza
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {HUERTANA_NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#1B1B1B]/80 transition-colors duration-200 hover:text-[#1B1B1B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1B1B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón CTA Tienda */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={HUERTANA_BRAND.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#C99A4A] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] shadow-xs transition-colors duration-200 hover:bg-[#b8893b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
          >
            Tienda online →
          </a>
        </div>

        {/* Botón Móvil y Tablet Tipográfico (Sin íconos) */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isMobileMenuOpen
              ? "Cerrar menú de navegación"
              : "Abrir menú de navegación"
          }
          className="rounded-md border border-[#C99A4A]/40 bg-[#FFFCF7] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
        >
          {isMobileMenuOpen ? "Cerrar" : "Menú"}
        </button>
      </div>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="border-t border-[#C99A4A]/30 bg-[#FFFCF7] px-5 py-6 shadow-lg md:hidden"
        >
          <ul className="flex flex-col space-y-3.5">
            {HUERTANA_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block text-sm font-semibold uppercase tracking-wider text-[#1B1B1B] hover:text-[#617248]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-[#C99A4A]/25 pt-4">
            <a
              href={HUERTANA_BRAND.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex w-full items-center justify-center rounded-full bg-[#C99A4A] py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] hover:bg-[#b8893b]"
            >
              Tienda online oficial →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
