import Image from "next/image";
import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";
import type { CategoryItem } from "../types/huertana.types";

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const detailHref = `/productos/${category.id}`;

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#CCBFA4] bg-[#FFFDF8] p-5 shadow-xs transition-all duration-200 hover:border-[#C09B5D] sm:p-6">
      <div>
        {category.imageSrc ? (
          <Link href={detailHref} className="block mb-4">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-[#CCBFA4]/60 bg-[#F3ECE0]">
              <Image
                src={category.imageSrc}
                alt={category.imageAlt ?? category.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 560px"
                className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                  category.imagePosition ?? "object-center"
                }`}
              />
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block mb-4">
            <Placeholder
              label={category.placeholderLabel}
              ratio="aspect-[16/10]"
              hint="Reemplazable con foto oficial del producto"
            />
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1B1B1B]">
          <Link
            href={detailHref}
            className="hover:text-[#9B773C] transition-colors focus-visible:outline-2 focus-visible:outline-[#C09B5D]"
          >
            {category.title}
          </Link>
        </h3>
      </div>

      <div className="mt-4 pt-3 border-t border-[#CCBFA4]/45">
        <Link
          href={detailHref}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#C09B5D] py-2.5 px-5 font-ui text-xs font-bold uppercase tracking-[0.1em] text-[#1B1B1B] shadow-xs transition-colors hover:bg-[#AD874A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
        >
          Ver Propiedades →
        </Link>
      </div>
    </article>
  );
}
