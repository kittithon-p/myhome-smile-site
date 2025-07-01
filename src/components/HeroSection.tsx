import { Button } from "@/components/ui/button";
import { Facebook, CheckCircle, Clock, Award, Users, Phone, MessageCircle, Star, Shield, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-dental-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-dental-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dental-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-spacing relative z-10 section-spacing">
        <div className="grid-hero">
          {/* Left Content - Enhanced */}
          <div className="lg:col-span-6 text-center lg:text-left animate-fade-in">
            {/* Main Headlines */}
            <div className="element-spacing mb-12">
              <h1 className="heading-hero mb-6">
                <span className="block">ยิ้มสวย</span>
                <span className="block bg-gradient-to-r from-dental-primary via-dental-secondary to-dental-primary bg-clip-text text-transparent font-bold">
                  มั่นใจทุกวัน
                </span>
              </h1>
              
              <p className="text-body-large max-w-lg mx-auto lg:mx-0 mb-8">
                คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี
                <span className="block text-dental-light mt-2">
                  ด้วยเทคโนโลยีทันสมัย และทีมแพทย์ผู้เชี่ยวชาญ
                </span>
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: Shield, text: "ทันตแพทย์ผู้เชี่ยวชาญ", color: "text-dental-primary" },
                { icon: Clock, text: "เปิดถึง 20:00 น.", color: "text-dental-secondary" },
                { icon: Zap, text: "เทคโนโลยีทันสมัย", color: "text-dental-success" },
                { icon: CheckCircle, text: "รับประกันคุณภาพ", color: "text-dental-warning" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/60 rounded-2xl p-4 shadow-soft">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-body font-medium text-dental">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="mobile-cta btn-success shadow-strong hover:shadow-3xl group"
                onClick={() => window.open('tel:062-649-9979', '_self')}
              >
                <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                <div className="text-left">
                  <div className="font-bold">โทรเลย</div>
                  <div className="text-sm opacity-90">062-649-9979</div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="mobile-cta btn-primary shadow-strong hover:shadow-3xl group"
                onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
              >
                <Facebook className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                <div className="text-left">
                  <div className="font-bold">จองคิวออนไลน์</div>
                  <div className="text-sm opacity-90">ตอบภายใน 1 ชม.</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image Enhanced */}
          <div className="lg:col-span-6 animate-slide-up">
            <div className="relative card-elevated hover:shadow-3xl group overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop&auto=format&q=75"
                  alt="ทีมทันตแพทย์และคนไข้ยิ้ม"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating Stats - Enhanced */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 rounded-3xl p-6 shadow-strong border border-white/20">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div className="group">
                        <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
                          98%
                        </div>
                        <div className="text-caption text-dental-light">ความพอใจ</div>
                      </div>
                      <div className="group border-x border-dental-accent px-4">
                        <div className="text-3xl md:text-4xl font-bold text-dental-secondary mb-2 group-hover:scale-110 transition-transform duration-200">
                          10+
                        </div>
                        <div className="text-caption text-dental-light">ปีประสบการณ์</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl md:text-4xl font-bold text-dental-success mb-2 group-hover:scale-110 transition-transform duration-200">
                          1.2K+
                        </div>
                        <div className="text-caption text-dental-light">ลูกค้า</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Preview Badges */}
              <div className="absolute top-6 left-6 flex flex-col space-y-3">
                {[
                  { text: "จัดฟันใส", color: "bg-dental-primary" },
                  { text: "ฟอกสีฟัน", color: "bg-dental-secondary" },
                  { text: "รากฟันเทียม", color: "bg-dental-success" }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className={`${service.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-scale-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {service.text}
                  </div>
                ))}
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
