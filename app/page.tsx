import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import BestsellersSection from "@/components/BestsellersSection";
import PromiseSection from "@/components/PromiseSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MenuSection />
        <BestsellersSection />
        <PromiseSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
