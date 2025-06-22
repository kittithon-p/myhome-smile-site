
import { Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButtons } from "@/components/FloatingActionButtons";
import { 
  LazyReviewsSection, 
  LazyPromotionsSection, 
  LazyWhyChooseUsSection, 
  LazyFacebookSection 
} from "@/components/LazyComponents";

// Loading component for lazy sections
const SectionLoader = () => (
  <div className="section-spacing flex items-center justify-center">
    <div className="animate-pulse flex space-x-4 items-center">
      <div className="rounded-full bg-dental-accent h-12 w-12"></div>
      <div className="space-y-2">
        <div className="h-4 bg-dental-accent rounded w-32"></div>
        <div className="h-3 bg-dental-accent rounded w-24"></div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      
      <Suspense fallback={<SectionLoader />}>
        <LazyPromotionsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <LazyReviewsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <LazyWhyChooseUsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <LazyFacebookSection />
      </Suspense>
      
      <ContactSection />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default Index;
