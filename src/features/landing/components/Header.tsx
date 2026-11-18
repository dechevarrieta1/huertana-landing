"use client";

import Image from "next/image";
import { HUERTANA_BRAND, HUERTANA_NAV_ITEMS } from "../data/huertana.data";
import { useHeaderNavigation } from "../hooks/useHeaderNavigation";

export function Header() {
  const { isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu } =
    useHeaderNavigation();

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBF7EB]/95 backdrop-blur-md border-b border-[#C09B5D]/35 shadow-[0_2px_16px_rgba(27,27,27,0.04)]"
          : "bg-[#FBF7EB] border-b border-[#CCBFA4]/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
        {/* Marca oficial: Isotipo + Logotipo según Manual de Normas Gráficas */}
        <a
          href="/#inicio"
          onClick={closeMobileMenu}
          aria-label="HUERTANA - Ir al inicio (Nosotros)"
          className="flex items-center gap-3 rounded-sm py-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1B1B]"
        >
          <Image
            src="/images/huertana-isologo.png"
            alt=""
            width={600}
            height={800}
            priority
            className="h-10 w-auto sm:h-11 shrink-0 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif text-[1.45rem] font-normal leading-none tracking-tight text-[#1B1B1B] sm:text-[1.65rem]">
              HUERTANA<sup className="ml-0.5 text-[9px] font-ui font-medium align-super">®</sup>
            </span>
            <span className="mt-1 font-ui text-[9px] font-medium uppercase tracking-[0.22em] text-[#9B773C]">
              {HUERTANA_BRAND.originSubtitle}
            </span>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {HUERTANA_NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-ui text-[11px] font-medium uppercase tracking-[0.12em] text-[#1B1B1B]/80 transition-colors duration-200 hover:text-[#9B773C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1B1B]"
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
            className="rounded-full bg-[#C09B5D] px-5 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.12em] text-[#1B1B1B] shadow-xs transition-colors duration-200 hover:bg-[#AD874A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
          >
            Tienda online →
          </a>
        </div>

        {/* Botón Móvil y Tablet Tipográfico */}
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
          className="rounded-md border border-[#CCBFA4] bg-[#FFFDF8] px-3.5 py-1.5 font-ui text-[11px] font-medium uppercase tracking-wider text-[#1B1B1B] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
        >
          {isMobileMenuOpen ? "Cerrar" : "Menú"}
        </button>
      </div>

      {/* Menú Móvil y Tablet */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="border-t border-[#CCBFA4]/60 bg-[#FFFDF8] px-5 py-6 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col space-y-3.5">
            {HUERTANA_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block font-ui text-xs font-medium uppercase tracking-[0.14em] text-[#1B1B1B] hover:text-[#9B773C]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-[#CCBFA4]/50 pt-4">
            <a
              href={HUERTANA_BRAND.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex w-full items-center justify-center rounded-full bg-[#C09B5D] py-2.5 font-ui text-xs font-bold uppercase tracking-wider text-[#1B1B1B] hover:bg-[#AD874A]"
            >
              Tienda online oficial →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
