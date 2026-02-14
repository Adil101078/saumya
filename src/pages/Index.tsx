import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import TimelineSection from "@/components/TimelineSection";
import ReasonsSection from "@/components/ReasonsSection";
import SurpriseSection from "@/components/SurpriseSection";
import MusicToggle from "@/components/MusicToggle";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <MusicToggle />
      <HeroSection />
      <LoveLetterSection />
      <TimelineSection />
      <ReasonsSection />
      <SurpriseSection />
      <Footer />
    </div>
  );
};

export default Index;
