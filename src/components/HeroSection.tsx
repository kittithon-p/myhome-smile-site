
import { Button } from "@/components/ui/button";
import { Facebook, CheckCircle, Clock, Award, Users, Phone, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 text-dental section-spacing overflow-hidden min-h-[80vh] md:min-h-screen">
      {/* Background elements - smaller on mobile */}
      <div className="absolute top-20 right-10 md:top-32 md:right-32 w-48 h-48 md:w-96 md:h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 md:bottom-32 md:left-32 w-40 h-40 md:w-80 md:h-80 bg-green-100/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-spacing relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-32 items-center w-full">
          {/* Left Side - Content */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6 md:space-y-8">
            {/* Trust indicators - Mobile optimized */}
            <div className="flex items-center justify-center lg:justify-start mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row items-center md:space-x-6 bg-white/90 backdrop-blur-sm radius-card px-4 py-3 md:px-8 md:py-4 shadow-sm border border-gray-100/50 space-y-2 md:space-y-0">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-dental-primary" />
                  <span className="text-sm md:text-base font-medium text-gray-700">ประสบการณ์ 10+ ปี</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-gray-200"></div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-dental-secondary" />
                  <span className="text-sm md:text-base font-medium text-gray-700">ลูกค้า 1,200+ ราย</span>
                </div>
              </div>
            </div>
            
            {/* Main headline - Mobile first */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="heading-hero">
                ยิ้มสวย
                <span className="block font-semibold text-dental-primary mt-2 md:mt-4">
                  มั่นใจทุกวัน
                </span>
              </h1>
              
              <p className="text-body-large">
                คลินิกทันตกรรมครบวงจร
                <span className="block text-body mt-2 text-gray-500">
                  บางละมุง ชลบุรี
                </span>
              </p>
            </div>
            
            {/* Key benefits */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-dental-success" />
                <span className="text-body">ทันตแพทย์ผู้เชี่ยวชาญ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-dental-primary" />
                <span className="text-body">เปิดถึง 20:00 น.</span>
              </div>
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 md:pt-6 space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
              <Button 
                size="lg" 
                className="mobile-cta btn-success order-1 md:order-2"
                onClick={() => window.open('tel:062-649-9979', '_self')}
              >
                <Phone className="w-5 h-5 mr-3" />
                โทรเลย 062-649-9979
              </Button>
              
              <Button 
                size="lg" 
                className="mobile-cta btn-primary order-2 md:order-1"
                onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
              >
                <Facebook className="w-5 h-5 mr-3" />
                รับคำปรึกษาฟรี
              </Button>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="lg:col-span-7 order-first lg:order-last">
            <div className="relative radius-large overflow-hidden shadow-xl group bg-white p-2 md:p-4">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop"
                alt="ทีมทันตแพทย์และคนไข้ยิ้ม"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 radius-card"
                loading="eager"
              />
              
              {/* Floating stats */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-sm radius-large card-spacing shadow-lg border border-gray-100">
                <div className="flex items-center justify-center space-x-8 md:space-x-12">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-light text-dental-primary mb-1 md:mb-2">98%</div>
                    <div className="text-xs md:text-sm text-gray-600">ลูกค้าพอใจ</div>
                  </div>
                  <div className="w-px h-12 md:h-16 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-light text-dental-secondary mb-1 md:mb-2">10+</div>
                    <div className="text-xs md:text-sm text-gray-600">ปีประสบการณ์</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
