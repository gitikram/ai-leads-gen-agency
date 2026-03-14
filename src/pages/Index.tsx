import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
