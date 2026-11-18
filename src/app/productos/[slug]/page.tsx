import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/features/landing/components/Header";
import { Footer } from "@/features/landing/components/Footer";
import { CategoryLiquidGlassView } from "@/features/landing/components/CategoryLiquidGlassView";
import { HUERTANA_PRODUCT_LINES } from "@/features/landing/data/huertana.data";
import { CATEGORY_BROCHURE_PROPERTIES } from "@/features/landing/data/products.data";

export function generateStaticParams() {
  return HUERTANA_PRODUCT_LINES.map((category) => ({
    slug: category.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = HUERTANA_PRODUCT_LINES.find((c) => c.id === slug);

  if (!category) {
    return {
      title: "Productos | HUERTANA",
    };
  }

  return {
    title: `${category.title} | HUERTANA`,
    description: `${category.subtitle}. ${category.description}`,
  };
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = HUERTANA_PRODUCT_LINES.find((c) => c.id === slug);

  if (!category) {
    notFound();
  }

  const propertyBadges =
    CATEGORY_BROCHURE_PROPERTIES[
      category.id as keyof typeof CATEGORY_BROCHURE_PROPERTIES
    ] ?? CATEGORY_BROCHURE_PROPERTIES.dulces;

  return (
    <>
      <Header />
      <main className="flex-1">
        <CategoryLiquidGlassView
          category={category}
          allCategories={HUERTANA_PRODUCT_LINES}
          propertyBadges={propertyBadges}
        />
      </main>
      <Footer />
    </>
  );
}
