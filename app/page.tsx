import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProjectBrainSection from "@/components/ProjectBrainSection";
import ProjectIntelligenceSection from "@/components/ProjectIntelligenceSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";

export default function Home() {
  // TODO: Add analytics tracking for page views
  console.log("Home page loaded - test change for git demo");

  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />

      <ValuesSection />

      <FeaturesSection />

      <ProjectBrainSection />

      <ProjectIntelligenceSection />

      <CapabilitiesSection />

      <div className="flex justify-center py-20">
        <button className="bg-primary hover:bg-primary-dark transition-colors text-white text-2xl font-bold px-12 py-8 rounded-3xl border border-primary">
          Launching Soon
        </button>
      </div>

      <Footer />
    </main>
  );
}
