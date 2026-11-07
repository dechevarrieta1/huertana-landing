"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles, Utensils, Coffee, Wine, Gift } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HUERTANA_MOMENTS, HUERTANA_BRAND } from "../data/huertana.data";

function MomentIcon({ id }: { id: string }) {
  switch (id) {
    case "desayuno":
      return <Coffee className="size-4" aria-hidden="true" />;
    case "picada":
      return <Wine className="size-4" aria-hidden="true" />;
    case "almuerzo":
      return <Utensils className="size-4" aria-hidden="true" />;
    case "regalo":
      return <Gift className="size-4" aria-hidden="true" />;
    default:
      return <Sparkles className="size-4" aria-hidden="true" />;
  }
}

export function MomentsSection() {
  const [activeId, setActiveId] = useState(HUERTANA_MOMENTS[0].id);
  const activeMoment =
    HUERTANA_MOMENTS.find((m) => m.id === activeId) || HUERTANA_MOMENTS[0];

  return (
    <section
      id="momentos"
      aria-labelledby="moments-heading"
      className="scroll-mt-20 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabecera de la sección */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C99A4A]/40 bg-[#F5F0E6] px-4 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-[#617248]">
            <Sparkles className="size-3.5 text-[#C99A4A]" aria-hidden="true" />
            <span>La mesa cotidiana</span>
          </div>

          <h2
            id="moments-heading"
            className="mt-4 font-serif text-3xl leading-tight font-normal text-[#1B1B1B] sm:text-4xl lg:text-5xl"
          >
            Si hay momento,{" "}
            <span className="italic font-normal text-[#617248]">
              hay Huertana.
            </span>
          </h2>

          <div
            className="mx-auto mt-5 h-[1.5px] w-20 bg-[#C99A4A]"
            aria-hidden="true"
          />

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1B1B1B]/80">
            Cada frasco está pensado para acompañar situaciones reales de tu
            día: desde la tostada del amanecer hasta la sobremesa con amigos.
          </p>
        </div>

        {/* Selector de Momentos UX-friendly (Pills/Tabs) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {HUERTANA_MOMENTS.map((moment) => {
            const isActive = moment.id === activeId;
            return (
              <button
                key={moment.id}
                type="button"
                onClick={() => setActiveId(moment.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B] ${
                  isActive
                    ? "bg-[#617248] text-[#FFFCF7] shadow-sm"
                    : "bg-[#F5F0E6] text-[#1B1B1B]/85 hover:bg-[#C99A4A]/25 border border-[#C99A4A]/30"
                }`}
              >
                <MomentIcon id={moment.id} />
                <span>{moment.scenario}</span>
              </button>
            );
          })}
        </div>

        {/* Panel Interactivo del Momento Activo */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMoment.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#C99A4A]/40 bg-[#F5F0E6] shadow-[0_8px_32px_rgba(27,27,27,0.04)] lg:grid-cols-12"
            >
              {/* Bloque Texto & CTA */}
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[#C99A4A]/50 bg-[#FFFCF7] px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#617248]">
                      {activeMoment.badge}
                    </span>
                    <span className="text-xs text-[#1B1B1B]/60 font-medium">
                      Categoría: {activeMoment.categoryName}
                    </span>
                  </div>

                  <p className="mt-5 font-serif text-2xl font-normal text-[#1B1B1B] sm:text-3xl">
                    <span className="text-[#617248] italic block sm:inline">
                      {activeMoment.trigger}
                    </span>{" "}
                    <span className="font-semibold block sm:inline">
                      {activeMoment.solution}
                    </span>
                  </p>

                  <div
                    className="mt-4 h-[1.5px] w-14 bg-[#C99A4A]"
                    aria-hidden="true"
                  />

                  <p className="mt-4 text-base leading-relaxed text-[#1B1B1B]/85 sm:text-lg">
                    {activeMoment.description}
                  </p>

                  <div className="mt-6 rounded-xl border border-[#C99A4A]/30 bg-[#FFFCF7] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
                      Variedades ideales para este momento:
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#1B1B1B]">
                      {activeMoment.pairing}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={activeMoment.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C99A4A] px-7 py-3.5 text-sm font-semibold text-[#1B1B1B] shadow-xs transition-colors hover:bg-[#b8893b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
                  >
                    <span>{activeMoment.actionText}</span>
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>

                  <a
                    href={HUERTANA_BRAND.allProductsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1B1B1B]/25 bg-[#FFFCF7] px-5 py-3.5 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#FFFCF7]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
                  >
                    <span>Ver catálogo completo</span>
                  </a>
                </div>
              </div>

              {/* Bloque Imagen Fotográfica Real y Limpia */}
              <div className="relative aspect-[16/11] lg:aspect-auto lg:col-span-5 bg-[#FFFCF7] overflow-hidden">
                <Image
                  src={activeMoment.imageUrl}
                  alt={activeMoment.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/25 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 rounded-full bg-[#FFFCF7]/95 px-3.5 py-1 text-xs font-semibold text-[#1B1B1B] backdrop-blur-xs border border-[#C99A4A]/40 shadow-xs">
                  {activeMoment.scenario}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 Mini cards de acceso rápido (Grid complementario) */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HUERTANA_MOMENTS.map((m) => (
            <div
              key={m.id}
              onClick={() => setActiveId(m.id)}
              className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 ${
                activeId === m.id
                  ? "border-[#617248] bg-[#617248]/10 shadow-xs"
                  : "border-[#C99A4A]/25 bg-[#FFFCF7] hover:border-[#C99A4A] hover:bg-[#F5F0E6]/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#F5F0E6] text-[#617248]">
                  <MomentIcon id={m.id} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#617248]">
                  {m.badge.split("·")[0].trim()}
                </span>
              </div>
              <p className="mt-3 font-serif text-base font-normal text-[#1B1B1B]">
                {m.trigger}
              </p>
              <p className="mt-1 text-xs text-[#617248] font-medium">
                {m.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
