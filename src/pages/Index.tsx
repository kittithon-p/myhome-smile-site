
import { Suspense } from "react";
import { SimplifiedHeroSection } from "@/components/SimplifiedHeroSection";
import { QuickDecisionHelper } from "@/components/QuickDecisionHelper";
import { ProgressiveServicesSection } from "@/components/ProgressiveServicesSection";
import { SocialSecuritySection } from "@/components/SocialSecuritySection";
import { PricingSection } from "@/components/PricingSection";
import { ProgressivePromotionsSection } from "@/components/ProgressivePromotionsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButtons } from "@/components/FloatingActionButtons";
import { StickyContactBar } from "@/components/StickyContactBar";
import { 
  LazyReviewsSection, 
  LazyWhyChooseUsSection
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
      <SimplifiedHeroSection />
      
      {/* Quick Decision Helper - Progressive Disclosure Feature */}
      <section className="py-8 bg-gradient-to-br from-dental-accent/5 to-white">
        <div className="container-spacing">
          <QuickDecisionHelper />
        </div>
      </section>
      
      <ProgressiveServicesSection />
      <PricingSection />
      <SocialSecuritySection />
      <ProgressivePromotionsSection />
      
      <Suspense fallback={<SectionLoader />}>
        <LazyReviewsSection />
      </Suspense>
      
      <FAQSection />
      
      <Suspense fallback={<SectionLoader />}>
        <LazyWhyChooseUsSection />
      </Suspense>
      
      <ContactSection />
      <Footer />
      <FloatingActionButtons />
      <StickyContactBar />
    </div>
  );
};

export default Index;
