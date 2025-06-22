
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Star, Heart, Users, TrendingUp } from "lucide-react";

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
                <Facebook className="w-10 h-10 text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#284c5d] to-blue-600 bg-clip-text text-transparent">
                ติดตามเราบน Facebook
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              รับข่าว��ารโปรโมชั่นล่าสุด ดูผลงานการรักษา และนัดหมายได้ง่ายๆ 
              ผ่านเพจ Facebook ของเรา
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#284c5d] to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">1,250+</div>
                <div className="text-gray-600">ผู้ติดตาม</div>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">4.8</div>
                <div className="flex items-center justify-center text-yellow-500 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-current hover:scale-125 transition-transform duration-200" />
                  ))}
                </div>
                <div className="text-gray-600">คะแนนรีวิว</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 text-white"
            >
              <Facebook className="w-5 h-5 mr-3" />
              ติดตามเพจ Facebook
            </Button>
          </div>

          {/* Right Side - Enhanced Facebook Widget */}
          <div>
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/4c63632a-0dc5-4fdc-ba0e-4adb5cf31b03.png" 
                      alt="MY HOME Dental Clinic" 
                      className="w-12 h-12 object-contain rounded-full border-2 border-[#284c5d]/20"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-[#284c5d] flex items-center">
                      MY HOME Dental Clinic
                      <div className="w-4 h-4 bg-blue-500 rounded-full ml-2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      2 ชั่วโมงที่แล้ว
                      <div className="w-1 h-1 bg-gray-400 rounded-full mx-2"></div>
                      <span className="text-blue-600">📍 บางละมุง</span>
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  🎉 <span className="font-semibold text-[#284c5d]">โปรโมชั่นพิเศษ!</span> ฟอกสีฟัน + ขูดหินปูน เพียง <span className="text-red-600 font-bold">1,500 บาท</span> (จากปกติ 3,000 บาท) 
                  🦷✨ <span className="bg-yellow-100 px-2 py-1 rounded-full text-sm font-semibold">จำกัดเพียง 20 ท่านแรกเท่านั้น!</span>
                </p>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 mb-4 border border-red-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">฿1,500</div>
                    <div className="text-sm text-gray-500 line-through mb-2">฿3,000</div>
                    <div className="inline-flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ประหยัด 50% 🔥
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 text-red-500 mr-2 animate-pulse" />
                    <span className="font-semibold text-red-500">45 คน</span>
                  </div>
                  <div>12 ความคิดเห็น • 8 แชร์</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all duration-300">
                      <Heart className="w-4 h-4 mr-1" />
                      ถูกใจ
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-blue-50 hover:text-blue-500 transition-all duration-300">
                      💬 แสดงความคิดเห็น
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-green-50 hover:text-green-500 transition-all duration-300">
                      📤 แชร์
                    </Button>
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
