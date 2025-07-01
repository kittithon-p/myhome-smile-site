
import { Button } from "@/components/ui/button";
import { Phone, Facebook, Shield, Clock, Star } from "lucide-react";

export const SimplifiedHeroSection = () => {
  return (
    <section id="home" className="relative gradient-hero min-h-[80vh] flex items-center overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-dental-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-dental-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container-spacing relative z-10 py-8 md:py-12">
        <div className="grid-hero">
          {/* Left Content - Focused */}
          <div className="lg:col-span-6 text-center lg:text-left animate-fade-in">
            {/* Main Headlines */}
            <div className="mb-8">
              <h1 className="heading-hero mb-4">
                <span className="block">ยิ้มสวย</span>
                <span className="block bg-gradient-to-r from-dental-primary via-dental-secondary to-dental-primary bg-clip-text text-transparent font-bold">
                  มั่นใจทุกวัน
                </span>
              </h1>
              
              <p className="text-body-large max-w-lg mx-auto lg:mx-0 mb-6">
                คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี
                <span className="block text-dental-primary font-semibold mt-2">
                  ด้วยทีมแพทย์ผู้เชี่ยวชาญมากกว่า 10 ปี
                </span>
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 bg-white/60 rounded-2xl p-4 shadow-soft">
                <Shield className="w-5 h-5 text-dental-primary" />
                <span className="text-body font-medium text-dental">ทันตแพทย์ผู้เชี่ยวชาญ</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 rounded-2xl p-4 shadow-soft">
                <Clock className="w-5 h-5 text-dental-secondary" />
                <span className="text-body font-medium text-dental">เปิดถึง 20:00 น.</span>
              </div>
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col items-center lg:items-start">
              <Button 
                size="lg" 
                variant="dental-primary"
                className="mobile-cta shadow-strong hover:shadow-3xl group mb-4"
                onClick={() => window.open('tel:062-649-9979', '_self')}
              >
                <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                <div className="text-left">
                  <div className="font-bold">โทรจองคิวเลย</div>
                  <div className="text-sm opacity-90">062-649-9979</div>
                </div>
              </Button>
              
              {/* Secondary CTA */}
              <Button 
                variant="dental-outline"
                size="lg"
                className="group hover:bg-dental-accent/30 transition-all duration-200"
                onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
              >
                <Facebook className="w-5 h-5 mr-2" />
                ส่งข้อความ Facebook
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 animate-slide-up">
            <div className="relative card-elevated hover:shadow-3xl group overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop&auto=format&q=75"
                  alt="ทีมทันตแพทย์และคนไข้ยิ้ม - My Home Dental Clinic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Trust Indicators */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 rounded-3xl p-6 shadow-strong border border-white/20">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div className="group">
                        <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
                          98%
                        </div>
                        <div className="text-caption text-dental-light">ความพอใจ</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl md:text-4xl font-bold text-dental-primary mb-2 group-hover:scale-110 transition-transform duration-200">
                          10+
                        </div>
                        <div className="text-caption text-dental-light">ปีประสบการณ์</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-dental-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-scale-in flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  คุณภาพสากล
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dental-primary rounded-full flex justify-center items-start p-2">
          <div className="w-1 h-3 bg-dental-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
