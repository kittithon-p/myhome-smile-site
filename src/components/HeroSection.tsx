
import { Button } from "@/components/ui/button";
import { Facebook, Gift, Users, Award, Clock, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#284c5d] to-[#3a5f72] text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#dae6ec]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span className="text-sm font-semibold">ประสบการณ์ 10+ ปี</span>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <Users className="w-6 h-6 text-green-400" />
                <span className="text-sm font-semibold">ลูกค้าพอใจ 1,200+ ราย</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              ยิ้มสวยมั่นใจ
              <br />
              <span className="text-[#dae6ec] bg-gradient-to-r from-[#dae6ec] to-white bg-clip-text text-transparent">
                ที่ MY HOME Dental Clinic
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-4 text-white/90 font-medium">
              คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-white/80">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>ทันตแพทย์ผู้เชี่ยวชาญ</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                <span>เปิดถึง 20:00 น.</span>
              </div>
              <div className="flex items-center">
                <Gift className="w-5 h-5 text-pink-400 mr-2" />
                <span>โปรพิเศษลูกค้าใหม่</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-[#284c5d] hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Facebook className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                รับคำปรึกษาฟรี
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#284c5d] text-lg px-8 py-4 h-auto font-semibold transition-all duration-300 hover:scale-105 group"
              >
                <Gift className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                เริ่มต้นเปลี่ยนรอยยิ้มวันนี้
              </Button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop"
                alt="ทีมทันตแพทย์และคนไข้ยิ้ม"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#284c5d]/20 to-transparent"></div>
              
              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#284c5d]">98%</div>
                    <div className="text-xs text-gray-600">ลูกค้าพอใจ</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#284c5d]">10+</div>
                    <div className="text-xs text-gray-600">ปีประสบการณ์</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
