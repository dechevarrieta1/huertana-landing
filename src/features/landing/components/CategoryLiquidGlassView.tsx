"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type {
  CategoryItem,
  CategoryPropertyBadge,
} from "../types/huertana.types";
import { FloatingPropertyPill } from "./BrochureAnimatedIcons";

interface CategoryLiquidGlassViewProps {
  category: CategoryItem;
  allCategories: CategoryItem[];
  propertyBadges: CategoryPropertyBadge[];
}

const FLOATING_POSITIONS = [
  "md:absolute md:-top-4 md:-left-6 lg:-left-10",
  "md:absolute md:top-6 md:-right-5 lg:-right-8",
  "md:absolute md:bottom-10 md:-left-5 lg:-left-9",
  "md:absolute md:-bottom-4 md:-right-4 lg:-right-7",
];

export function CategoryLiquidGlassView({
  category,
  allCategories,
  propertyBadges,
}: CategoryLiquidGlassViewProps) {
  return (
    <div className="relative overflow-hidden bg-[#FBF7EB] py-8 sm:py-12 lg:py-16">
      {/* Orbes ambientales cálidos Liquid Glass */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#C09B5D]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-[#CCBFA4]/45 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Navegación superior limpia */}
        <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/#productos"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/85 bg-[#FFFDF8]/65 backdrop-blur-xl px-4 py-2 font-ui text-[11px] font-bold uppercase tracking-[0.12em] text-[#1B1B1B] shadow-[0_4px_16px_rgba(27,27,27,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all hover:border-[#C09B5D] hover:bg-[#FFFDF8]/90"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-[#9B773C]" />
            Nuestros productos
          </Link>

          <nav
            aria-label="Cambiar línea de productos"
            className="flex flex-wrap items-center gap-1.5 rounded-2xl sm:rounded-full border border-white/85 bg-[#FFFDF8]/55 backdrop-blur-xl p-1.5 shadow-[0_6px_24px_rgba(27,27,27,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]"
          >
            {allCategories.map((cat) => {
              const isCurrent = cat.id === category.id;
              return (
                <Link
                  key={cat.id}
                  href={`/productos/${cat.id}`}
                  className={`rounded-full px-3.5 py-1.5 font-ui text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] transition-all ${
                    isCurrent
                      ? "bg-[#C09B5D] text-[#1B1B1B] shadow-xs"
                      : "text-[#1B1B1B]/75 hover:bg-[#FFFDF8]/85 hover:text-[#1B1B1B]"
                  }`}
                >
                  {cat.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Hero sencillo con la foto y propiedades flotantes saliendo de la imagen */}
        <section className="mt-8 sm:mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Izquierda: Texto limpio y directo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <span className="inline-block rounded-full border border-white/85 bg-[#FFFDF8]/70 backdrop-blur-md px-3.5 py-1 font-ui text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B773C]">
              {category.badge}
            </span>

            <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1B1B1B]">
              {category.title}
            </h1>

            <p className="mt-2 font-serif text-base sm:text-lg italic text-[#9B773C]">
              {category.subtitle}
            </p>

            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[#1B1B1B]/80 font-light">
              {category.description}
            </p>

            <div className="mt-6">
              <a
                href={category.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C09B5D] px-6 py-3 font-ui text-xs font-bold uppercase tracking-[0.1em] text-[#1B1B1B] shadow-[0_8px_20px_rgba(192,155,93,0.3)] transition-colors hover:bg-[#AD874A]"
              >
                Comprar en Tiendanube
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Derecha: Foto en Liquid Glass + Propiedades flotantes saliendo de la foto */}
          <div className="lg:col-span-7 md:px-8 lg:px-10">
            <div className="relative mx-auto max-w-xl">
              {/* Marco Liquid Glass de la foto */}
              <div className="relative rounded-3xl border border-white/90 bg-gradient-to-br from-[#FFFDF8]/75 via-[#FBF7EB]/50 to-[#CCBFA4]/35 backdrop-blur-2xl p-3 shadow-[0_24px_60px_rgba(27,27,27,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#F3ECE0]">
                  {category.imageSrc && (
                    <Image
                      src={category.imageSrc}
                      alt={category.imageAlt ?? category.title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 46vw, 94vw"
                      className={`object-cover ${category.imagePosition ?? "object-center"}`}
                    />
                  )}
                </div>
              </div>

              {/* Propiedades flotantes: en mobile en grilla ordenada sin superposición; desde md salen flotando alrededor de la foto */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-0 md:block">
                {propertyBadges.slice(0, 4).map((badge, idx) => (
                  <FloatingPropertyPill
                    key={badge.label}
                    badge={badge}
                    index={idx}
                    positionClass={FLOATING_POSITIONS[idx] ?? ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
