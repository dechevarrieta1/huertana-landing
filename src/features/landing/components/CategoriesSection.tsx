import { HUERTANA_CATEGORIES, HUERTANA_BRAND } from "../data/huertana.data";
import { CategoryCard } from "./CategoryCard";
import { ShoppingBag, ArrowRight } from "lucide-react";

export function CategoriesSection() {
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
              Nuestras categorías en Tiendanube
            </span>
            <h2
              id="categories-heading"
              className="mt-3 font-serif text-3xl leading-tight font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Sabores artesanales creados en Russell, Maipú
            </h2>
            <div
              className="mt-5 h-[1.5px] w-20 bg-[#C99A4A]"
              aria-hidden="true"
            />
            <p className="mt-5 text-base leading-relaxed text-[#1B1B1B]/80">
              Explorá nuestras 4 líneas oficiales disponibles en la tienda
              nube. Cada una te lleva directamente a sus productos específicos
              para armar tu pedido con la frescura y calidad de origen.
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
              <span>Ver todos los productos ({HUERTANA_CATEGORIES.length} categorías)</span>
              <ArrowRight className="size-4 text-[#1B1B1B]" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {HUERTANA_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
