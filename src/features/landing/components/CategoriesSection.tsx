import { HUERTANA_PRODUCT_LINES, HUERTANA_BRAND } from "../data/huertana.data";
import { CategoryCard } from "./CategoryCard";

export function CategoriesSection() {
  return (
    <section
      id="productos"
      aria-labelledby="products-heading"
      className="scroll-mt-16 border-t border-[#CCBFA4]/60 bg-[#F3ECE0] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-4 border-b border-[#CCBFA4]/70 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-ui text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#9B773C]">
              Elaboración artesanal · Hasta 45 variedades
            </span>
            <h2
              id="products-heading"
              className="mt-1.5 font-serif text-2xl font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Nuestros productos
            </h2>
          </div>

          <div className="shrink-0">
            <a
              href={HUERTANA_BRAND.allProductsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-[#C09B5D] bg-[#FFFDF8] px-5 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-[#1B1B1B] transition-colors hover:bg-[#C09B5D]"
            >
              Ver todo el catálogo →
            </a>
          </div>
        </div>

        {/* Grid de líneas de producto */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8">
          {HUERTANA_PRODUCT_LINES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
