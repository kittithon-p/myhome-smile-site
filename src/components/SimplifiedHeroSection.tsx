
import { Button } from "@/components/ui/button";
import { Phone, Facebook, Shield, Clock, Star, Award, Users, Heart, Play } from "lucide-react";

export const SimplifiedHeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full shadow-lg mb-6">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-medium text-sm">คลินิกทันตกรรมมาตรฐานสากล</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="block">ไว้วางใจรอยยิ้มของคุณ</span>
                <span className="block text-blue-600">กับผู้เชี่ยวชาญ!</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี พร้อมทีมแพทย์ผู้เชี่ยวชาญ 
                และเทคโนโลยีทันสมัย เพื่อรอยยิ้มที่สมบูรณ์แบบของคุณ
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-gray-800 font-semibold text-sm">ทันตแพทย์ผู้เชี่ยวชาญ</div>
                  <div className="text-gray-500 text-xs">ใบประกอบวิชาชีพครบถ้วน</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="text-gray-800 font-semibold text-sm">เปิดถึง 20:00 น.</div>
                  <div className="text-gray-500 text-xs">สะดวกสำหรับคนทำงาน</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-medium text-base w-full sm:w-auto"
                onClick={() => window.open('tel:062-649-9979', '_self')}
              >
                <Phone className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">โทรจองคิวเลย</div>
                  <div className="text-sm opacity-90">062-649-9979</div>
                </div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-200 bg-white/80 backdrop-blur-sm text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-medium text-base w-full sm:w-auto"
                onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
              >
                <Play className="w-5 h-5 mr-2" />
                <span>ดูวิดีโอแนะนำ</span>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">2000+</div>
                <div className="text-gray-500 text-sm">ผู้ป่วยไว้วางใจ</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-gray-500 text-sm">4.9/5 ดาว</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-white">
              <div className="aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=750&fit=crop&auto=format&q=80"
                  alt="ทีมทันตแพทย์ผู้เชี่ยวชาญ - MY HOME Dental Clinic"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Professional overlay with stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
                        <div className="text-gray-600 text-sm">ความพอใจ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600 mb-1">10+</div>
                        <div className="text-gray-600 text-sm">ปีประสบการณ์</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
                        <div className="text-gray-600 text-sm">สอบถามได้</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quality badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    <span>มาตรฐานสากล</span>
                  </div>
                </div>

                {/* Certification badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-green-600 text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    <span>ได้รับรอง</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center items-start p-2 bg-white/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-blue-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
