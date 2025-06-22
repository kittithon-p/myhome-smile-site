
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
    <section className="py-24 lg:py-32 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full shadow-sm mb-8">
            <CreditCard className="w-7 h-7 mr-3" />
            <span className="text-xl font-semibold">บัตรทอง</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-8 leading-tight">
            สามารถใช้รักษาฟันได้
            <span className="block font-semibold text-orange-600 mt-2">
              หลากหลายรายการ
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 font-medium mb-6">
            เพียงยื่น<span className="text-orange-600 font-bold">บัตรประชาชนเท่านั้น!</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white text-base px-6 py-3 font-medium">
              <Sparkles className="w-5 h-5 mr-2" />
              ฟรี! ไม่มีค่าใช้จ่าย
            </Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-base px-6 py-3 font-medium">
              <Clock className="w-5 h-5 mr-2" />
              ใช้ได้ปีละ 3 ครั้ง
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Services List */}
          <Card className="relative overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 border-0 bg-white">
            <CardContent className="p-10 lg:p-12">
              <div className="flex items-center mb-10">
                <Shield className="w-10 h-10 text-yellow-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">บริการที่ครอบคลุม</h3>
              </div>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                    <span className="text-lg font-medium text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl border border-emerald-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-700 mb-3">900 บาท/ปี</div>
                  <div className="text-lg text-emerald-600 font-semibold">สิทธิประกันสังคม</div>
                  <div className="text-sm text-emerald-500 mt-2">ไม่ต้องสำรองจ่าย</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Call to Action */}
          <div className="text-center lg:text-left space-y-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-gray-100">
              <div className="text-2xl lg:text-3xl font-light text-gray-800 mb-8 leading-relaxed">
                ไม่ต้องรอปวดฟัน<br />
                <span className="text-orange-600 font-semibold">รีบมาดูแลกันนะครับ</span>
              </div>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
                  <span className="text-lg font-medium text-gray-700">แค่บัตรประชาชนใบเดียว</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
                  <span className="text-lg font-medium text-gray-700">ได้ทั้ง ถอน อุด ขูด ผ่า</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
                  <span className="text-lg font-medium text-gray-700">รักษาก่อน สบายกว่า</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white text-lg py-4 h-auto font-semibold shadow-sm hover:shadow-md transition-all duration-300 rounded-xl group"
                >
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  โทรสอบถามเลย 062-649-9979
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-orange-200 text-orange-600 hover:bg-orange-50 text-lg py-4 h-auto font-semibold transition-all duration-300 rounded-xl"
                >
                  <MapPin className="w-6 h-6 mr-3" />
                  ดูที่ตั้งคลินิก
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border-2 border-red-100">
              <div className="text-center">
                <div className="text-xl font-semibold text-red-700 mb-2">
                  ⚠️ อย่าลืมมาใช้สิทธิประกันสังคม
                </div>
                <div className="text-red-600 font-medium">
                  ก่อนที่จะลืมกันใช้สิทธิ
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-gray-100">
            <div className="text-2xl font-light text-gray-800 mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-500 inline mr-3" />
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
