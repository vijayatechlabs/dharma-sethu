import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import HowItWorksSection from "@/components/HowItWorksSection";
import OurSevasSection from "@/components/OurSevasSection";
import MissionSection from "@/components/MissionSection";
import WhatsAppCTASection from "@/components/WhatsAppCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <HowItWorksSection />
      <OurSevasSection />
      <MissionSection />
      <WhatsAppCTASection />
      <Footer />
    </div>
  );
};

export default Index;
