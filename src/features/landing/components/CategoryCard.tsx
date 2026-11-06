import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import type { CategoryItem } from "../types/huertana.types";

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#C99A4A]/35 bg-[#FFFCF7] shadow-[0_6px_24px_rgba(27,27,27,0.03)] transition-all duration-300 hover:border-[#C99A4A] hover:shadow-[0_12px_32px_rgba(27,27,27,0.08)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F0E6]">
        <Image
          src={category.imageUrl}
          alt={category.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-full border border-[#C99A4A]/45 bg-[#FFFCF7]/95 px-3 py-1 text-[11px] font-medium tracking-wider uppercase text-[#617248] shadow-xs">
          {category.badge}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <p className="text-xs font-semibold tracking-wide text-[#617248]">
            {category.subtitle}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-normal text-[#1B1B1B] sm:text-[1.65rem]">
            {category.title}
          </h3>
          <div
            className="mt-3 h-[1.5px] w-12 bg-[#C99A4A]"
            aria-hidden="true"
          />
          <p className="mt-3.5 text-sm leading-relaxed text-[#1B1B1B]/80">
            {category.description}
          </p>

          <div className="mt-5 rounded-xl border border-[#C99A4A]/25 bg-[#F5F0E6]/60 p-3.5">
            <p className="text-[11px] font-semibold tracking-wider uppercase text-[#617248]">
              Variedades destacadas:
            </p>
            <ul className="mt-2 grid grid-cols-2 gap-1.5 text-xs text-[#1B1B1B]/85">
              {category.highlights.map((item) => (
                <li key={item} className="flex items-center gap-1.5 truncate">
                  <Check
                    className="size-3 shrink-0 text-[#C99A4A]"
                    aria-hidden="true"
                  />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-[#C99A4A]/25 pt-4">
          <a
            href={category.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ${category.title} en la tienda oficial de Huertana (abre en nueva pestaña)`}
            className="inline-flex w-full items-center justify-between rounded-full bg-[#F5F0E6] px-5 py-3 text-sm font-semibold text-[#1B1B1B] transition-all duration-200 group-hover:bg-[#C99A4A] group-hover:text-[#1B1B1B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
          >
            <span>Ver categoría en Tiendanube</span>
            <ArrowUpRight
              className="size-4 text-[#1B1B1B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
