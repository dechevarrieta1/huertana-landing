"use client";

import { useState } from "react";
import { HUERTANA_CATEGORIES, HUERTANA_BRAND } from "../data/huertana.data";
import { CategoryCard } from "./CategoryCard";
import { ShoppingBag, ArrowRight, Layers } from "lucide-react";

export function CategoriesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("todas");

  const displayedCategories =
    selectedFilter === "todas"
      ? HUERTANA_CATEGORIES
      : HUERTANA_CATEGORIES.filter((c) => c.id === selectedFilter);

  return (
    <section
      id="categorias"
      aria-labelledby="categories-heading"
      className="scroll-mt-20 border-t border-[#C99A4A]/30 bg-[#FFFCF7] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#C99A4A]/30 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#617248]">
              Catálogo oficial en Tiendanube
            </span>
            <h2
              id="categories-heading"
              className="mt-3 font-serif text-3xl leading-tight font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Líneas de producto Huertana
            </h2>
            <div
              className="mt-5 h-[1.5px] w-20 bg-[#C99A4A]"
              aria-hidden="true"
            />
            <p className="mt-5 text-base leading-relaxed text-[#1B1B1B]/80">
              Explorá nuestras 4 categorías oficiales. Cada tarjeta te permite
              ir directo a sus variedades en la tienda online o ver el catálogo
              completo.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={HUERTANA_BRAND.allProductsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#C99A4A] bg-[#F5F0E6] px-6 py-3 text-sm font-semibold text-[#1B1B1B] transition-colors duration-200 hover:bg-[#C99A4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
            >
              <ShoppingBag className="size-4 text-[#617248]" aria-hidden="true" />
              <span>Ver catálogo completo ({HUERTANA_CATEGORIES.length} líneas)</span>
              <ArrowRight className="size-4 text-[#1B1B1B]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Filtros rápidos UX-friendly */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-[#1B1B1B]/70 mr-1 flex items-center gap-1">
            <Layers className="size-3.5 text-[#C99A4A]" />
            Filtrar:
          </span>
          <button
            type="button"
            onClick={() => setSelectedFilter("todas")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
              selectedFilter === "todas"
                ? "bg-[#1B1B1B] text-[#FFFCF7]"
                : "bg-[#F5F0E6] text-[#1B1B1B]/80 hover:bg-[#C99A4A]/25 border border-[#C99A4A]/25"
            }`}
          >
            Todas ({HUERTANA_CATEGORIES.length})
          </button>
          {HUERTANA_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedFilter(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === cat.id
                  ? "bg-[#617248] text-[#FFFCF7]"
                  : "bg-[#F5F0E6] text-[#1B1B1B]/80 hover:bg-[#C99A4A]/25 border border-[#C99A4A]/25"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grid de Categorías */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {displayedCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
