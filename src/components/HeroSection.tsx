
import { Button } from "@/components/ui/button";
import { Facebook, Gift, Users, Award, Clock, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 py-24 lg:py-40 overflow-hidden">
      {/* Background decorative elements - more subtle */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Content with more spacing */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-medium text-gray-600">ประสบการณ์ 10+ ปี</span>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium text-gray-600">ลูกค้า 1,200+ ราย</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                ยิ้มสวย
                <span className="block font-semibold text-blue-600 mt-2">
                  มั่นใจทุกวัน
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
                คลินิกทันตกรรมครบวงจร
                <span className="block text-lg mt-2 text-gray-500">
                  บางละมุง ชลบุรี
                </span>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>ทันตแพทย์ผู้เชี่ยวชาญ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>เปิดถึง 20:00 น.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-4 h-4 text-pink-400" />
                <span>โปรลูกค้าใหม่</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 h-auto font-medium shadow-sm hover:shadow-md transition-all duration-300 rounded-xl group"
              >
                <Facebook className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                รับคำปรึกษาฟรี
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 h-auto font-medium transition-all duration-300 rounded-xl"
              >
                <Gift className="w-5 h-5 mr-3" />
                ดูโปรโมชั่น
              </Button>
            </div>
          </div>

          {/* Right Side - Visual with more emphasis */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl group bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop"
                alt="ทีมทันตแพทย์และคนไข้ยิ้ม"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl"
              />
              
              {/* Floating stats - cleaner design */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-500 mt-1">ลูกค้าพอใจ</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">10+</div>
                    <div className="text-sm text-gray-500 mt-1">ปีประสบการณ์</div>
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
