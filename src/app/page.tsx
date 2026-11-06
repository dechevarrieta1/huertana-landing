import { Header } from "@/features/landing/components/Header";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { AboutSection } from "@/features/landing/components/AboutSection";
import { PillarsSection } from "@/features/landing/components/PillarsSection";
import { CategoriesSection } from "@/features/landing/components/CategoriesSection";
import { OnlineStoreCtaSection } from "@/features/landing/components/OnlineStoreCtaSection";
import { LocationSection } from "@/features/landing/components/LocationSection";
import { Footer } from "@/features/landing/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <CategoriesSection />
        <OnlineStoreCtaSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
