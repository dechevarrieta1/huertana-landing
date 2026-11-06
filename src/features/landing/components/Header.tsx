"use client";

import { Menu, X, ShoppingBag, Leaf } from "lucide-react";
import { HUERTANA_BRAND, HUERTANA_NAV_ITEMS } from "../data/huertana.data";
import { useHeaderNavigation } from "../hooks/useHeaderNavigation";

export function Header() {
  const { isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu } =
    useHeaderNavigation();

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#C99A4A]/35 shadow-[0_4px_24px_rgba(27,27,27,0.04)]"
          : "bg-[#F5F0E6] border-b border-[#C99A4A]/25"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#inicio"
          onClick={closeMobileMenu}
          aria-label="Huertana - Ir al inicio"
          className="group inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1B1B]"
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-[#C99A4A]/50 bg-[#FFFCF7] text-[#617248] transition-colors duration-200 group-hover:border-[#617248]">
            <Leaf className="size-4" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-medium tracking-tight text-[#1B1B1B] sm:text-[1.7rem]">
              {HUERTANA_BRAND.name}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#617248]">
              Alimentos Naturales
            </span>
          </div>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {HUERTANA_NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium tracking-wide text-[#1B1B1B]/85 transition-colors duration-200 hover:text-[#1B1B1B] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C99A4A] after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1B1B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={HUERTANA_BRAND.storeUrl}
            className="inline-flex items-center gap-2 rounded-full bg-[#C99A4A] px-5 py-2.5 text-sm font-semibold text-[#1B1B1B] shadow-xs transition-all duration-200 hover:bg-[#b8893b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            <span>Comprar online</span>
          </a>
        </div>

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
          className="inline-flex items-center justify-center rounded-md border border-[#C99A4A]/40 bg-[#FFFCF7] p-2.5 text-[#1B1B1B] transition-colors hover:bg-[#C99A4A]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B] md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="border-t border-[#C99A4A]/30 bg-[#FFFCF7] px-5 py-6 shadow-lg md:hidden"
        >
          <ul className="flex flex-col space-y-4">
            {HUERTANA_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block rounded-sm py-1.5 text-base font-medium text-[#1B1B1B] transition-colors hover:text-[#617248] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-[#C99A4A]/25 pt-5">
            <a
              href={HUERTANA_BRAND.storeUrl}
              onClick={closeMobileMenu}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C99A4A] px-6 py-3 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#b8893b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              <span>Comprar online</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
