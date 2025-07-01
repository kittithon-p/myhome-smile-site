
import { Button } from "@/components/ui/button";
import { Phone, Facebook, Shield, Clock, Star, Award, Users, Heart } from "lucide-react";

export const SimplifiedHeroSection = () => {
  return (
    <section id="home" className="relative gradient-medical-hero min-h-screen flex items-center overflow-hidden">
      {/* Professional Medical Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-medical-primary/10 rounded-full blur-3xl animate-medical-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-medical-secondary/10 rounded-full blur-3xl animate-medical-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-medical relative z-10 py-12">
        <div className="grid-hero">
          {/* Left Content - Professional Medical Presentation */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-medical-success-light text-medical-success px-6 py-3 rounded-full mb-8 animate-medical-fade-in trust-badge">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-medium thai-optimized">คลินิกทันตกรรมมาตรฐานสากล</span>
            </div>

            {/* Professional Headlines */}
            <div className="mb-10">
              <h1 className="heading-hero mb-6 thai-optimized animate-medical-slide-up">
                <span className="block">ยิ้มสวย สุขภาพดี</span>
                <span className="block text-medical-shimmer font-bold">
                  ด้วยใจแพทย์ผู้เชี่ยวชาญ
                </span>
              </h1>
              
              <p className="text-lead max-w-2xl mx-auto lg:mx-0 mb-8 thai-optimized animate-medical-fade-in" style={{ animationDelay: '0.3s' }}>
                คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี
                <span className="block text-medical-primary font-semibold mt-3 text-trust">
                  ทีมแพทย์ผู้เชี่ยวชาญมากกว่า 10 ปี พร้อมเทคโนโลยีทันสมัย
                </span>
              </p>
            </div>
            
            {/* Professional Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto lg:mx-0 stagger-medical">
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-medical stagger-item hover-medical-lift">
                <div className="icon-medical-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-medical-primary font-semibold thai-optimized">ทันตแพทย์ผู้เชี่ยวชาญ</div>
                  <div className="text-medical-text-light text-sm thai-optimized">ใบประกอบวิชาชีพครบถ้วน</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-medical stagger-item hover-medical-lift">
                <div className="icon-medical-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-medical-primary font-semibold thai-optimized">เปิดถึง 20:00 น.</div>
                  <div className="text-medical-text-light text-sm thai-optimized">สะดวกสำหรับคนทำงาน</div>
                </div>
              </div>
            </div>
            
            {/* Professional CTA Section */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <Button 
                size="lg" 
                className="btn-medical-primary btn-medical-lg mobile-full group shadow-medical-lg hover:shadow-medical-xl animate-medical-scale-in"
                style={{ animationDelay: '0.8s' }}
                onClick={() => window.open('tel:062-649-9979', '_self')}
              >
                <Phone className="w-6 h-6 mr-3 icon-medical-bounce" />
                <div className="text-left">
                  <div className="font-bold thai-optimized">โทรจองคิวเลย</div>
                  <div className="text-sm opacity-90">062-649-9979</div>
                </div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="btn-medical-outline group hover-medical-lift animate-medical-fade-in"
                style={{ animationDelay: '1s' }}
                onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
              >
                <Facebook className="w-5 h-5 mr-2" />
                <span className="thai-optimized">ส่งข้อความ Facebook</span>
              </Button>
            </div>

            {/* Professional Social Proof */}
            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-8 animate-medical-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-primary">2000+</div>
                <div className="text-medical-text-light text-sm thai-optimized">ผู้ป่วยไว้วางใจ</div>
              </div>
              <div className="divider-medical-vertical h-12"></div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-medical-text-light text-sm thai-optimized">4.9/5 ดาว</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Medical Imagery */}
          <div className="lg:col-span-5">
            <div className="relative card-medical-lg hover-medical-glow group overflow-hidden animate-medical-slide-down gpu-accelerated">
              <div className="aspect-medical-hero relative">
                <img 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="ทีมทันตแพทย์ผู้เชี่ยวชาญ - MY HOME Dental Clinic บางละมุง ชลบุรี"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-medical"
                  loading="eager"
                />
                
                {/* Professional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-medical-primary/20 via-transparent to-transparent group-hover:from-medical-primary/10 transition-all duration-300"></div>
                
                {/* Professional Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-medical-lg border border-white/20 hover-medical-lift animate-medical-scale-in gpu-accelerated">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div className="group cursor-pointer">
                        <div className="text-2xl md:text-3xl font-bold text-medical-primary mb-2 hover-medical-scale text-medical-shimmer">
                          98%
                        </div>
                        <div className="text-medical-text-light text-sm thai-optimized">ความพอใจ</div>
                      </div>
                      <div className="group cursor-pointer">
                        <div className="text-2xl md:text-3xl font-bold text-medical-secondary mb-2 hover-medical-scale">
                          10+
                        </div>
                        <div className="text-medical-text-light text-sm thai-optimized">ปีประสบการณ์</div>
                      </div>
                      <div className="group cursor-pointer">
                        <div className="text-2xl md:text-3xl font-bold text-medical-accent mb-2 hover-medical-scale">
                          24/7
                        </div>
                        <div className="text-medical-text-light text-sm thai-optimized">สอบถามได้</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical Quality Certifications */}
              <div className="absolute top-6 right-6">
                <div className="bg-medical-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-medical-lg animate-medical-pulse flex items-center">
                  <Heart className="w-4 h-4 mr-2 icon-medical-pulse" />
                  <span className="thai-optimized">มาตรฐานสากล</span>
                </div>
              </div>

              {/* Medical Certification Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-medical-success text-white px-3 py-2 rounded-full text-xs font-medium shadow-medical flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  <span className="thai-optimized">ได้รับรอง</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-medical-bounce">
        <div className="w-6 h-10 border-2 border-medical-primary rounded-full flex justify-center items-start p-2 hover:border-medical-secondary transition-colors duration-300 bg-white/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-medical-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
