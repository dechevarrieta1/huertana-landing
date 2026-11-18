import { Header } from "@/features/landing/components/Header";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { CategoriesSection } from "@/features/landing/components/CategoriesSection";
import { TourismSection } from "@/features/landing/components/TourismSection";
import { ReviewsSection } from "@/features/landing/components/ReviewsSection";
import { MapSection } from "@/features/landing/components/MapSection";
import { Footer } from "@/features/landing/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <TourismSection />
        <ReviewsSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
