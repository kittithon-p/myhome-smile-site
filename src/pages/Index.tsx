
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialSecuritySection } from "@/components/SocialSecuritySection";
import { PromotionsSection } from "@/components/PromotionsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ContactSection } from "@/components/ContactSection";
import { FacebookSection } from "@/components/FacebookSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FloatingActionButtons } from "@/components/FloatingActionButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <SocialSecuritySection />
      <PromotionsSection />
      <ReviewsSection />
      <WhyChooseUsSection />
      <FacebookSection />
      <ContactSection />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default Index;
