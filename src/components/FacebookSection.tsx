
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Star, Heart, Users, TrendingUp, ExternalLink } from "lucide-react";

export const FacebookSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#dae6ec]/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative">
                <Facebook className="w-12 h-12 text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#284c5d] to-blue-600 bg-clip-text text-transparent">
                ติดตามเราบน Facebook
              </h2>
            </div>
            
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">
              รับข่าวสารโปรโมชั่นล่าสุด ดูผลงานการรักษา และนัดหมายได้ง่ายๆ 
              ผ่านเพจ Facebook ของเรา
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-blue-100">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-600 mr-2" />
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#284c5d] to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">1,250+</div>
                <div className="text-gray-600 font-medium">ผู้ติดตาม</div>
              </div>
              <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-yellow-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">4.8</div>
                <div className="flex items-center justify-center text-yellow-500 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-current hover:scale-125 transition-transform duration-200" />
                  ))}
                </div>
                <div className="text-gray-600 font-medium">คะแนนรีวิว</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4 h-auto transition-all duration-300 hover:shadow-lg hover:scale-105 text-white group"
            >
              <Facebook className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              ดูรีวิวบน Facebook
              <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
            </Button>
          </div>

          {/* Right Side - Enhanced Facebook Widget */}
          <div>
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                {/* Facebook Post Header */}
                <div className="flex items-center p-6 border-b border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/4c63632a-0dc5-4fdc-ba0e-4adb5cf31b03.png" 
                      alt="MY HOME Dental Clinic" 
                      className="w-14 h-14 object-contain rounded-full border-2 border-[#284c5d]/20 bg-white p-1"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-bold text-[#284c5d] flex items-center text-lg">
                      MY HOME Dental Clinic
                      <div className="w-5 h-5 bg-blue-500 rounded-full ml-2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      2 ชั่วโมงที่แล้ว
                      <div className="w-1 h-1 bg-gray-400 rounded-full mx-2"></div>
                      <span className="text-blue-600 flex items-center">
                        📍 บางละมุง
                      </span>
                    </p>
                  </div>
                </div>
                
                {/* Facebook Post Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    🎉 <span className="font-semibold text-[#284c5d]">โปรโมชั่นพิเศษ!</span> ฟอกสีฟัน + ขูดหินปูน เพียง <span className="text-red-600 font-bold text-xl">1,500 บาท</span> (จากปกติ 3,000 บาท) 
                    🦷✨ <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm font-semibold text-yellow-800">จำกัดเพียง 20 ท่านแรกเท่านั้น!</span>
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 mb-6 border border-red-100 text-center">
                    <div className="text-4xl font-bold text-red-600 mb-3 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">฿1,500</div>
                    <div className="text-lg text-gray-500 line-through mb-3">฿3,000</div>
                    <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      🔥 ประหยัด 50%
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-red-500 mr-2 animate-pulse" />
                      <span className="font-semibold text-red-500 text-base">45 คน</span>
                      <span className="ml-1">ถูกใจสิ่งนี้</span>
                    </div>
                    <div className="font-medium">12 ความคิดเห็น • 8 แชร์</div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all duration-300 py-3">
                        <Heart className="w-5 h-5 mr-2" />
                        ถูกใจ
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-blue-50 hover:text-blue-500 transition-all duration-300 py-3">
                        💬 แสดงความคิดเห็น
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-green-50 hover:text-green-500 transition-all duration-300 py-3">
                        📤 แชร์
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
