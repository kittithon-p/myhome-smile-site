import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Hospital, Phone, MapPin, Clock, Facebook, Star } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PromotionsSection } from "@/components/PromotionsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ContactSection } from "@/components/ContactSection";
import { FacebookSection } from "@/components/FacebookSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReviewsSection } from "@/components/ReviewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PromotionsSection />
      <ReviewsSection />
      <WhyChooseUsSection />
      <FacebookSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
