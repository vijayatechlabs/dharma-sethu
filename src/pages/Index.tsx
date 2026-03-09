import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import HowItWorksSection from "@/components/HowItWorksSection";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <HowItWorksSection />
      <div className="section-padding px-6 text-center mandala-bg">
        <div className="relative z-10">
          <p className="font-sanskrit text-lg mb-4">॥ सर्वे भवन्तु सुखिनः ॥</p>
          <p className="font-body text-muted-foreground">More sections coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
