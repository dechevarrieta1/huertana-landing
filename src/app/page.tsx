import { Header } from "@/features/landing/components/Header";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { MomentsSection } from "@/features/landing/components/MomentsSection";
import { CategoriesSection } from "@/features/landing/components/CategoriesSection";
import { AboutSection } from "@/features/landing/components/AboutSection";
import { PillarsSection } from "@/features/landing/components/PillarsSection";
import { OnlineStoreCtaSection } from "@/features/landing/components/OnlineStoreCtaSection";
import { LocationSection } from "@/features/landing/components/LocationSection";
import { Footer } from "@/features/landing/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MomentsSection />
        <CategoriesSection />
        <AboutSection />
        <PillarsSection />
        <OnlineStoreCtaSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
