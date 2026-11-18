"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HUERTANA_BRAND, HUERTANA_PRINCIPLES } from "../data/huertana.data";

const HERO_PHOTOS = [
  {
    src: "/images/hero-picada-huertana.webp",
    alt: "Picada al aire libre con frascos de delicatessen Huertana, quesos, focaccia, pan artesanal y copas de vino",
    objectPosition: "object-[50%_58%]",
  },
  {
    src: "/images/hero-mesa-huertana.webp",
    alt: "Degustación de pastas artesanales Huertana sobre mesa de madera junto a una botella de Malbec y copa grabada",
    objectPosition: "object-[50%_68%]",
  },
  {
    src: "/images/about-elaboracion.webp",
    alt: "Mano sirviendo mermelada artesanal Huertana desde frasco de vidrio hacia un pocillo de cerámica",
    objectPosition: "object-[50%_30%]",
  },
  {
    src: "/images/hero-copa-huertana.webp",
    alt: "Persona sonriendo con una copa de vino tinto grabada con el logo de Huertana",
    objectPosition: "object-[50%_18%]",
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
      className="relative overflow-hidden bg-[#FBF7EB] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Columna Principal: Nosotros + Frases cambiantes */}
          <div className="flex flex-col items-start lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CCBFA4] bg-[#FFFDF8] px-3.5 py-1 font-ui text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#9B773C]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#C09B5D]"
                aria-hidden="true"
              />
              Nosotros · Russell, Maipú, Mendoza
            </span>

            {/* Headline Dinámico con frases cambiantes sincronizadas con las fotos */}
            <h1
              id="hero-heading"
              className="mt-4 font-serif text-3xl leading-[1.15] font-normal tracking-tight text-[#1B1B1B] sm:text-5xl lg:text-[3.55rem]"
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
                    className="inline-block italic text-[#9B773C] font-medium underline decoration-[#C09B5D]/70 decoration-[2.5px] underline-offset-6"
                  >
                    {current.phrase}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="text-[#1B1B1B]">hay Huertana.</span>
            </h1>

            <div
              className="mt-4 sm:mt-5 h-[2px] w-16 sm:w-20 bg-[#C09B5D]"
              aria-hidden="true"
            />

            <p className="mt-4 sm:mt-5 max-w-2xl text-sm leading-relaxed text-[#1B1B1B]/85 sm:text-base sm:leading-7 font-light">
              Somos una empresa familiar de Russell, Maipú, con{" "}
              <strong className="font-medium text-[#1B1B1B]">
                17 años transformando frutas y verduras de Mendoza en sabores
                genuinos
              </strong>
              , como lo hacían nuestras abuelas.
            </p>

            {/* Los 4 pilares de Nosotros */}
            <div className="mt-6 w-full divide-y divide-[#CCBFA4]/50 border-y border-[#CCBFA4]/60">
              {HUERTANA_PRINCIPLES.map((item) => (
                <div
                  key={item.num}
                  className="py-2.5 sm:py-3 flex items-baseline gap-3 sm:gap-4"
                >
                  <span className="font-ui text-xs font-bold text-[#9B773C] shrink-0">
                    {item.num}.
                  </span>
                  <div className="text-xs sm:text-sm leading-snug">
                    <span className="font-serif font-medium text-[#1B1B1B]">
                      {item.title}:{" "}
                    </span>
                    <span className="text-[#1B1B1B]/75">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Showcase Fotográfico sincronizado con las frases */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl border border-[#CCBFA4] bg-[#FFFDF8] p-3.5 sm:p-4 shadow-sm">
                <div className="relative w-full aspect-[4/4.3] overflow-hidden rounded-xl border border-[#CCBFA4]/60 bg-[#F3ECE0]">
                  {HERO_PHOTOS.map((photo, idx) => {
                    const isActive = idx === activePhotoIndex;
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
                          priority={idx === 0}
                          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 420px, 92vw"
                          className={`object-cover ${photo.objectPosition}`}
                        />
                      </motion.div>
                    );
                  })}

                  {/* Leyenda sincronizada con la frase actual */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B]/80 via-[#1B1B1B]/40 to-transparent p-4 pt-12">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.slug}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="font-ui text-[10px] font-bold uppercase tracking-[0.16em] text-[#C09B5D]">
                          {current.badge}
                        </p>
                        <p className="mt-0.5 font-serif text-sm text-[#FBF7EB]">
                          {current.fullTrigger}{" "}
                          <span className="italic">{current.solution}</span>
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Pie institucional respetando el Manual de Marca */}
                <div className="mt-3.5 flex items-center justify-between gap-3 border-t border-[#CCBFA4]/50 pt-3">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/images/huertana-isologo.png"
                      alt="Isotipo oficial de Huertana"
                      width={600}
                      height={800}
                      className="h-8 w-auto object-contain shrink-0"
                    />
                    <div className="leading-tight">
                      <span className="block font-serif text-sm text-[#1B1B1B]">
                        HUERTANA<sup className="text-[8px]">®</sup>
                      </span>
                      <span className="block font-ui text-[9px] uppercase tracking-[0.18em] text-[#9B773C]">
                        {HUERTANA_BRAND.claim}
                      </span>
                    </div>
                  </div>

                  <span className="font-ui text-[10px] font-medium uppercase tracking-[0.14em] text-[#1B1B1B]/70 text-right">
                    Maipú · Mendoza
                  </span>
                </div>
              </div>

              {/* Indicadores sincronizados */}
              <div
                className="mt-3 flex items-center justify-center gap-2"
                aria-label="Seleccionar momento institucional"
              >
                {moments.map((moment, idx) => (
                  <button
                    key={moment.slug}
                    type="button"
                    onClick={() => setIndex(idx)}
                    aria-label={`${moment.fullTrigger} ${moment.solution}`}
                    aria-pressed={idx === index}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === index
                        ? "w-6 bg-[#C09B5D]"
                        : "w-2 bg-[#CCBFA4] hover:bg-[#C09B5D]/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
