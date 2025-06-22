
import { Button } from "@/components/ui/button";
import { Facebook, CheckCircle, Clock, Award, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 text-dental section-spacing overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-32 right-32 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-80 h-80 bg-green-100/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-spacing relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-center">
          {/* Left Side - Content */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-12">
            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start mb-12">
              <div className="flex items-center space-x-8 bg-white/90 backdrop-blur-sm rounded-2xl px-10 py-6 shadow-sm border border-gray-100/50">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-base font-medium text-gray-700">ประสบการณ์ 10+ ปี</span>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <span className="text-base font-medium text-gray-700">ลูกค้า 1,200+ ราย</span>
                </div>
              </div>
            </div>
            
            {/* Main headline */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-light leading-tight text-dental">
                ยิ้มสวย
                <span className="block font-normal text-blue-700 mt-4">
                  มั่นใจทุกวัน
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed">
                คลินิกทันตกรรมครบวงจร
                <span className="block text-xl mt-4 text-gray-500">
                  บางละมุง ชลบุรี
                </span>
              </p>
            </div>
            
            {/* Key benefits */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-gray-500">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-base">ทันตแพทย์ผู้เชี่ยวชาญ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-base">เปิดถึง 20:00 น.</span>
              </div>
            </div>
            
            {/* CTA - simplified */}
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-6 h-auto text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl group"
              >
                <Facebook className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-300" />
                รับคำปรึกษาฟรี
              </Button>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-white p-4">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=800&fit=crop"
                alt="ทีมทันตแพทย์และคนไข้ยิ้ม"
                className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl"
              />
              
              {/* Floating stats - cleaner design */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center justify-center space-x-12">
                  <div className="text-center">
                    <div className="text-4xl font-light text-blue-700 mb-2">98%</div>
                    <div className="text-sm text-gray-600">ลูกค้าพอใจ</div>
                  </div>
                  <div className="w-px h-16 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-green-700 mb-2">10+</div>
                    <div className="text-sm text-gray-600">ปีประสบการณ์</div>
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
