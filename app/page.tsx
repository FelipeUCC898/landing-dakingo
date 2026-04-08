import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import BestsellersSection from "@/components/BestsellersSection";
import PromiseSection from "@/components/PromiseSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        {/* Card Container for all sections - overlaps hero */}
        <div className="container mx-auto px-4 max-w-7xl -mt-16 md:-mt-20 relative z-20">
          <div className="bg-white rounded-t-[3rem] shadow-2xl p-6 md:p-12 pt-8 md:pt-12">
            <MenuSection />
            <BestsellersSection />
            <PromiseSection />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
