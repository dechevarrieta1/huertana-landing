import { Placeholder } from "@/components/ui/Placeholder";
import type { CategoryItem } from "../types/huertana.types";

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#C99A4A]/30 bg-[#FFFCF7] p-5 shadow-xs transition-all duration-200 hover:border-[#C99A4A] sm:p-7">
      <div>
        {/* Placeholder visible en tablet/desktop, oculto en mobile para evitar scroll excesivo */}
        <div className="hidden sm:block mb-5">
          <Placeholder
            label={category.placeholderLabel}
            ratio="aspect-[16/10]"
            hint="Reemplazable con foto oficial de la categoría"
          />
        </div>

        <div>
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
            [ {category.badge} ]
          </span>

          <h3 className="mt-1 font-serif text-xl sm:text-2xl font-normal text-[#1B1B1B]">
            {category.title}
          </h3>

          <p className="text-xs font-medium text-[#1B1B1B]/60">
            {category.subtitle}
          </p>

          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1B1B1B]/80 hidden sm:block">
            {category.description}
          </p>

          <div className="mt-3 rounded-lg border border-[#C99A4A]/20 bg-[#F5F0E6]/70 p-2.5 sm:p-3">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#617248]">
              Variedades:
            </span>
            <p className="mt-0.5 text-xs text-[#1B1B1B]/85 font-medium leading-snug">
              {category.highlights.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 border-t border-[#C99A4A]/20 pt-3 sm:pt-4">
        <a
          href={category.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver ${category.title} en Tiendanube (abre en nueva pestaña)`}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#F5F0E6] py-2.5 sm:py-3 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] transition-colors group-hover:bg-[#C99A4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
        >
          Ver en Tiendanube →
        </a>
      </div>
    </article>
  );
}
