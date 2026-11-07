"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HUERTANA_BRAND } from "../data/huertana.data";
import { Placeholder } from "@/components/ui/Placeholder";

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
      className="relative overflow-hidden bg-[#F5F0E6] pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Columna Izquierda: Mensaje y Headline dinámico */}
          <div className="flex flex-col items-start lg:col-span-7">
            <span className="rounded-full border border-[#C99A4A]/40 bg-[#FFFCF7] px-3.5 py-1 font-mono text-[11px] font-semibold tracking-wider uppercase text-[#617248]">
              [ Russell · Maipú · Mendoza ]
            </span>

            {/* Headline Dinámico "Si hay... hay Huertana" */}
            <h1
              id="hero-heading"
              className="mt-6 font-serif text-4xl leading-[1.12] font-normal tracking-tight text-[#1B1B1B] sm:text-5xl lg:text-[3.85rem]"
            >
              <span>Si hay </span>
              <span className="inline-block relative min-w-[240px] sm:min-w-[340px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[index]}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="inline-block italic text-[#617248] font-medium underline decoration-[#C99A4A]/60 decoration-[2.5px] underline-offset-8"
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
              Mermeladas gourmet con 65% de fruta mendocina, delicatessen
              vegetales elaboradas con Aceite de Oliva Virgen Extra y salsas
              caseras de tomate.
            </p>

            {/* Selector interactivo de frases */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#1B1B1B]/60 font-semibold mr-1">
                Momento:
              </span>
              {phrases.map((p, i) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-full px-3 py-1 text-xs transition-colors duration-200 cursor-pointer ${
                    index === i
                      ? "bg-[#617248] text-[#FFFCF7] font-medium"
                      : "bg-[#FFFCF7] text-[#1B1B1B]/80 hover:bg-[#C99A4A]/20 border border-[#C99A4A]/25"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Botones de acción (Sin iconos, tipografía limpia) */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={HUERTANA_BRAND.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#C99A4A] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] shadow-xs transition-colors hover:bg-[#b8893b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                Comprar en Tiendanube →
              </a>

              <a
                href="#categorias"
                className="inline-flex items-center justify-center rounded-full border border-[#1B1B1B]/20 bg-[#FFFCF7] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] transition-colors hover:border-[#C99A4A] hover:bg-[#FFFCF7]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                Ver 4 categorías ↓
              </a>
            </div>

            {/* Sellos de calidad esenciales */}
            <div className="mt-10 grid w-full grid-cols-3 gap-3 border-t border-[#C99A4A]/30 pt-6 sm:max-w-lg">
              <div>
                <p className="font-serif text-lg font-medium text-[#1B1B1B]">
                  100% Vegetal
                </p>
                <p className="mt-0.5 text-xs text-[#1B1B1B]/70">
                  Sin TACC ni químicos
                </p>
              </div>
              <div className="border-l border-[#C99A4A]/30 pl-3">
                <p className="font-serif text-lg font-medium text-[#1B1B1B]">
                  Con AOVE
                </p>
                <p className="mt-0.5 text-xs text-[#1B1B1B]/70">
                  Oliva virgen extra
                </p>
              </div>
              <div className="border-l border-[#C99A4A]/30 pl-3">
                <p className="font-serif text-lg font-medium text-[#1B1B1B]">
                  65% Fruta
                </p>
                <p className="mt-0.5 text-xs text-[#1B1B1B]/70">
                  Dulzor justo natural
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Placeholder limpio editorial para foto oficial */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl border border-[#C99A4A]/35 bg-[#FFFCF7] p-4 shadow-sm">
                <Placeholder
                  label="FOTOGRAFÍA OFICIAL HUERTANA"
                  ratio="aspect-[4/4.2]"
                  hint="Frascos de producto · Mesa artesanal en Russell"
                />

                <div className="mt-3.5 flex items-center justify-between border-t border-[#C99A4A]/20 pt-3 text-xs text-[#1B1B1B]/75">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#617248]">
                    [ ORIGEN MAIPÚ ]
                  </span>
                  <span>Envases de vidrio reciclables</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
