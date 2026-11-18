"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HUERTANA_BRAND } from "../data/huertana.data";

const HERO_PHOTOS = [
  {
    src: "/images/hero-mesa-huertana.webp",
    alt: "Degustación de pastas artesanales Huertana sobre mesa de madera junto a una botella de Malbec y copa grabada",
    objectPosition: "object-[50%_68%]",
  },
  {
    src: "/images/hero-copa-huertana.webp",
    alt: "Persona sonriendo con una copa de vino tinto grabada con el logo de Huertana",
    objectPosition: "object-[50%_18%]",
  },
  {
    src: "/images/hero-picada-huertana.webp",
    alt: "Picada al aire libre con frascos de delicatessen Huertana, quesos, focaccia, pan artesanal y copas de vino",
    objectPosition: "object-[50%_58%]",
  },
] as const;

export function HeroSection() {
  const moments = HUERTANA_BRAND.moments;
  const [index, setIndex] = useState(0);
  const current = moments[index] || moments[0];
  const activePhotoIndex = index % HERO_PHOTOS.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % moments.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [moments.length]);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F5F0E6] pt-7 pb-10 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Columna Principal: Mensaje y Headline dinámico */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Headline Dinámico referenciado a momentos entre amigos y familia */}
            <h1
              id="hero-heading"
              className="font-serif text-3xl leading-[1.15] font-normal tracking-tight text-[#1B1B1B] sm:text-5xl lg:text-[3.85rem]"
            >
              <span>Si hay </span>
              <span className="inline-block relative min-w-[210px] sm:min-w-[420px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="inline-block italic text-[#617248] font-medium underline decoration-[#C99A4A]/60 decoration-[2.5px] underline-offset-6"
                  >
                    {current.phrase}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="text-[#1B1B1B]">hay Huertana.</span>
            </h1>

            <div
              className="mt-4 sm:mt-6 h-[1.5px] w-16 sm:w-20 bg-[#C99A4A]"
              aria-hidden="true"
            />

            <p className="mt-4 sm:mt-6 max-w-xl text-sm leading-relaxed text-[#1B1B1B]/85 sm:text-lg sm:leading-8">
              Mermeladas con 65% de fruta mendocina, delicatessen 100% vegetales
              con Aceite de Oliva Virgen Extra y salsas caseras. Alimentos
              nobles elaborados en Russell, Maipú, para compartir en familia y
              amigos.
            </p>

            {/* Botones de acción directos a Tiendanube */}
            <div className="mt-6 sm:mt-8 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={HUERTANA_BRAND.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#C99A4A] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] shadow-xs transition-colors hover:bg-[#b8893b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                Comprar en Tiendanube →
              </a>

              <a
                href="#categorias"
                className="inline-flex items-center justify-center rounded-full border border-[#1B1B1B]/20 bg-[#FFFCF7] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] transition-colors hover:border-[#C99A4A] hover:bg-[#FFFCF7]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                Ver las 4 categorías ↓
              </a>
            </div>

            {/* Sellos de calidad esenciales (compactos en mobile) */}
            <div className="mt-7 sm:mt-10 grid w-full grid-cols-3 gap-2 border-t border-[#C99A4A]/25 pt-4 sm:pt-6 sm:max-w-lg">
              <div>
                <p className="font-serif text-base sm:text-lg font-medium text-[#1B1B1B]">
                  100% Vegetal
                </p>
                <p className="text-[11px] text-[#1B1B1B]/70">
                  Sin TACC
                </p>
              </div>
              <div className="border-l border-[#C99A4A]/30 pl-2.5 sm:pl-3">
                <p className="font-serif text-base sm:text-lg font-medium text-[#1B1B1B]">
                  Con AOVE
                </p>
                <p className="text-[11px] text-[#1B1B1B]/70">
                  Oliva virgen
                </p>
              </div>
              <div className="border-l border-[#C99A4A]/30 pl-2.5 sm:pl-3">
                <p className="font-serif text-base sm:text-lg font-medium text-[#1B1B1B]">
                  65% Fruta
                </p>
                <p className="text-[11px] text-[#1B1B1B]/70">
                  Puro dulzor
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Oculto en Mobile para evitar scroll infinito, visible en Desktop */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative mx-auto max-w-none">
              <div className="rounded-2xl border border-[#C99A4A]/35 bg-[#FFFCF7] p-4 shadow-sm">
                <div className="relative w-full aspect-[4/4.2] overflow-hidden rounded-xl border border-[#C99A4A]/30 bg-[#EFECE6]">
                  {HERO_PHOTOS.map((photo, photoIdx) => {
                    const isActive = photoIdx === activePhotoIndex;
                    return (
                      <motion.div
                        key={photo.src}
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        aria-hidden={!isActive}
                        className="absolute inset-0"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          priority={photoIdx === 0}
                          sizes="(min-width: 1024px) 42vw, 1px"
                          className={`object-cover ${photo.objectPosition}`}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-3.5 flex items-center justify-between border-t border-[#C99A4A]/20 pt-3 text-xs text-[#1B1B1B]/75">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#617248]">
                    [ ORIGEN MAIPÚ ]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
