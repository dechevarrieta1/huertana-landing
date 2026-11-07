import { Placeholder } from "@/components/ui/Placeholder";
import type { CategoryItem } from "../types/huertana.types";

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#C99A4A]/35 bg-[#FFFCF7] p-6 shadow-xs transition-all duration-200 hover:border-[#C99A4A] sm:p-7">
      <div>
        {/* Placeholder de imagen */}
        <Placeholder
          label={category.placeholderLabel}
          ratio="aspect-[16/10]"
          hint="Reemplazable con foto oficial de la categoría"
        />

        <div className="mt-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
              [ {category.badge} ]
            </span>
          </div>

          <p className="mt-3 text-xs italic font-medium text-[#617248]">
            “{category.momentTrigger} {category.momentSolution}”
          </p>

          <h3 className="mt-1 font-serif text-2xl font-normal text-[#1B1B1B] sm:text-[1.65rem]">
            {category.title}
          </h3>

          <p className="mt-1 text-xs font-medium text-[#1B1B1B]/60">
            {category.subtitle}
          </p>

          <div
            className="mt-3 h-[1px] w-12 bg-[#C99A4A]"
            aria-hidden="true"
          />

          <p className="mt-3 text-sm leading-relaxed text-[#1B1B1B]/80">
            {category.description}
          </p>

          <div className="mt-4 rounded-lg border border-[#C99A4A]/25 bg-[#F5F0E6]/60 p-3">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#617248]">
              Variedades:
            </span>
            <p className="mt-1 text-xs text-[#1B1B1B]/85 font-medium">
              {category.highlights.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-[#C99A4A]/25 pt-4">
        <a
          href={category.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver ${category.title} en Tiendanube (abre en nueva pestaña)`}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#F5F0E6] py-3 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] transition-colors group-hover:bg-[#C99A4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
        >
          Ver en Tiendanube →
        </a>
      </div>
    </article>
  );
}
