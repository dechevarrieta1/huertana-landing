"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ShoppingBag, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HUERTANA_BRAND } from "../data/huertana.data";

export function HeroSection() {
  const phrases = HUERTANA_BRAND.taglinePhrases;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F5F0E6] pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Columna Izquierda: Mensaje y Headline dinámico */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Ubicación y sello */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C99A4A]/40 bg-[#FFFCF7] px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#617248] shadow-xs">
              <MapPin className="size-3.5 text-[#C99A4A]" aria-hidden="true" />
              <span>Russell · Maipú · Mendoza</span>
            </div>

            {/* Headline Dinámico "Si hay... hay Huertana" */}
            <h1
              id="hero-heading"
              className="mt-6 font-serif text-4xl leading-[1.14] font-normal tracking-tight text-[#1B1B1B] sm:text-5xl lg:text-[3.75rem]"
            >
              <span>Si hay </span>
              <span className="inline-block relative min-w-[240px] sm:min-w-[340px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[index]}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="inline-block italic text-[#617248] font-medium underline decoration-[#C99A4A]/60 decoration-[2.5px] underline-offset-6"
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="text-[#1B1B1B]">hay Huertana.</span>
            </h1>

            <div
              className="mt-6 h-[1.5px] w-20 bg-[#C99A4A]"
              aria-hidden="true"
            />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#1B1B1B]/85 sm:text-lg sm:leading-8">
              Mermeladas gourmet con 65% de fruta mendocina, delicatessen 100%
              vegetales elaboradas con Aceite de Oliva Virgen Extra y salsas
              caseras de tomate. Alimentos nobles creados en Russell, Maipú,
              para transformar cada momento de tu mesa.
            </p>

            {/* Botones de acción UX-friendly */}
            <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={HUERTANA_BRAND.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C99A4A] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#1B1B1B] shadow-xs transition-all duration-200 hover:bg-[#b8893b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                <ShoppingBag className="size-4" aria-hidden="true" />
                <span>Comprar en tienda oficial</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>

              <a
                href="#momentos"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#1B1B1B]/20 bg-[#FFFCF7] px-6 py-3.5 text-sm font-semibold tracking-wide text-[#1B1B1B] transition-all duration-200 hover:border-[#C99A4A] hover:bg-[#FFFCF7]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                <Sparkles className="size-4 text-[#617248]" aria-hidden="true" />
                <span>Explorar momentos Huertana</span>
              </a>
            </div>

            {/* Mini selectores rápidos interactivos */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#1B1B1B]/60 font-medium mr-1">
                Probar en:
              </span>
              {phrases.slice(0, 4).map((p, i) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-full px-3 py-1 text-xs transition-colors duration-200 ${
                    index === i
                      ? "bg-[#617248] text-[#FFFCF7] font-medium"
                      : "bg-[#FFFCF7] text-[#1B1B1B]/80 hover:bg-[#C99A4A]/20 border border-[#C99A4A]/25"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Cintas de valor real */}
            <div className="mt-10 grid w-full grid-cols-3 gap-3 border-t border-[#C99A4A]/30 pt-6 sm:max-w-lg">
              <div>
                <p className="font-serif text-lg font-medium text-[#1B1B1B] sm:text-xl">
                  100% Vegetal
                </p>
                <p className="mt-0.5 text-xs text-[#1B1B1B]/75">
                  Sin TACC · Sin aditivos
                </p>
              </div>
              <div className="border-l border-[#C99A4A]/30 pl-3">
                <p className="font-serif text-lg font-medium text-[#1B1B1B] sm:text-xl">
                  Con AOVE
                </p>
                <p className="mt-0.5 text-xs text-[#1B1B1B]/75">
                  Oliva virgen extra
                </p>
              </div>
              <div className="border-l border-[#C99A4A]/30 pl-3">
                <p className="font-serif text-lg font-medium text-[#1B1B1B] sm:text-xl">
                  65% Fruta
                </p>
                <p className="mt-0.5 text-xs text-[#1B1B1B]/75">
                  Dulzor justo natural
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Fotográfica Limpia & Editorial (Sin Arte IA) */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-[#C99A4A]/35 bg-[#FFFCF7] p-3.5 shadow-[0_12px_36px_rgba(27,27,27,0.06)]">
                <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-xl bg-[#F5F0E6]">
                  <Image
                    src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85"
                    alt="Frascos de mermeladas gourmet y conservas artesanales Huertana en mesa de campo"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded-full border border-[#C99A4A]/40 bg-[#FFFCF7]/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#617248] backdrop-blur-xs">
                    Russell · Mendoza
                  </div>
                </div>

                <div className="mt-3.5 flex items-center justify-between border-t border-[#C99A4A]/25 pt-3 px-1 text-xs text-[#1B1B1B]/80">
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-medium text-[#1B1B1B]">
                      Alimentos nobles y conscientes
                    </span>
                    <span className="text-[11px] text-[#617248]">
                      Envases de vidrio reciclables · Compra online segura
                    </span>
                  </div>
                  <a
                    href={HUERTANA_BRAND.allProductsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#F5F0E6] px-3 py-1.5 text-xs font-semibold text-[#1B1B1B] hover:bg-[#C99A4A] transition-colors"
                  >
                    Ver catálogo
                  </a>
                </div>
              </div>

              {/* Placa flotante con el claim */}
              <div className="mt-3.5 rounded-xl border border-[#C99A4A]/35 bg-[#FFFCF7] p-3.5 shadow-xs sm:absolute sm:-bottom-5 sm:-left-5 sm:mt-0 sm:max-w-xs">
                <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#617248]">
                  Manifiesto Huertana
                </p>
                <p className="mt-1 font-serif text-base italic text-[#1B1B1B]">
                  “{HUERTANA_BRAND.claim}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
