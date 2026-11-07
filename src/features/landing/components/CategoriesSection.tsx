import { HUERTANA_CATEGORIES, HUERTANA_BRAND } from "../data/huertana.data";
import { CategoryCard } from "./CategoryCard";

export function CategoriesSection() {
  return (
    <section
      id="categorias"
      aria-labelledby="categories-heading"
      className="scroll-mt-16 border-t border-[#C99A4A]/30 bg-[#F5F0E6] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-4 border-b border-[#C99A4A]/25 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
              [ CATÁLOGO TIENDANUBE ]
            </span>
            <h2
              id="categories-heading"
              className="mt-1 font-serif text-2xl font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Las 4 líneas de Huertana
            </h2>
          </div>

          <div>
            <a
              href={HUERTANA_BRAND.allProductsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-[#C99A4A] bg-[#FFFCF7] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] transition-colors hover:bg-[#C99A4A]"
            >
              Ver todo el catálogo →
            </a>
          </div>
        </div>

        {/* Grid de 4 categorías compactas en mobile */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
          {HUERTANA_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
