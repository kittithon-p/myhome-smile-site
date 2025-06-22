
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, CheckCircle, Clock, Phone, MapPin, Sparkles } from "lucide-react";

const services = [
  "ตรวจสุขภาพฟัน",
  "ถอนฟัน", 
  "ขูดหินปูน",
  "อุดฟัน",
  "เคลือบหลุมร่องฟัน",
  "เคลือบฟลูออไรด์"
];

export const SocialSecuritySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/30 to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-lg mb-6 animate-bounce">
            <CreditCard className="w-8 h-8 mr-3" />
            <span className="text-2xl font-bold">บัตรทอง</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
            สามารถใช้รักษาฟันได้หลากหลายรายการ
          </h2>
          
          <p className="text-2xl text-gray-700 font-semibold mb-4">
            เพียงยื่น<span className="text-orange-600 font-bold">บัตรประชาชนเท่านั้น!</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Badge className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-2 animate-pulse">
              <Sparkles className="w-5 h-5 mr-2" />
              ฟรี! ไม่มีค่าใช้จ่าย
            </Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-2">
              <Clock className="w-5 h-5 mr-2" />
              ใช้ได้ปีละ 3 ครั้ง
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Services List */}
          <Card className="relative overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500 border-2 border-yellow-200">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-orange-100/50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
            
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center mb-8">
                <Shield className="w-12 h-12 text-yellow-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-800">บริการที่ครอบคลุม</h3>
              </div>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-xl font-semibold text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border-2 border-green-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">900 บาท/ปี</div>
                  <div className="text-lg text-green-600 font-semibold">สิทธิประกันสังคม</div>
                  <div className="text-sm text-green-500 mt-2">ไม่ต้องสำรองจ่าย</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Call to Action */}
          <div className="text-center lg:text-left space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-200">
              <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                ไม่ต้องรอปวดฟัน<br />
                <span className="text-orange-600">รีบมาดูแลกันนะครับ</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg font-semibold">แค่บัตรประชาชนใบเดียว</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg font-semibold">ได้ทั้ง ถอน อุด ขูด ผ่า</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg font-semibold">รักษาก่อน สบายกว่า</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white text-xl py-6 h-auto font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  โทรสอบถามเลย 062-649-9979
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white text-xl py-6 h-auto font-bold transition-all duration-300 hover:scale-105"
                >
                  <MapPin className="w-6 h-6 mr-3" />
                  ดูที่ตั้งคลินิก
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-6 border-2 border-red-200">
              <div className="text-center">
                <div className="text-xl font-bold text-red-700 mb-2">
                  ⚠️ อย่าลืมมาใช้สิทธิประกันสังคม
                </div>
                <div className="text-red-600 font-semibold">
                  ก่อนที่จะลืมกันใช้สิทธิ
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-200">
            <div className="text-2xl font-bold text-gray-800 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500 inline mr-3" />
              ตรวจสุขภาพช่องปาก #ฟรี ไม่มีค่าใช้จ่าย
            </div>
            <div className="text-lg text-gray-600">
              ให้บริการที่ MY HOME Dental Clinic
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
