
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Shield, CheckCircle, Phone, MapPin, Clock } from "lucide-react";

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
    <section className="section-spacing bg-gradient-to-br from-green-50/50 via-blue-50/30 to-white relative overflow-hidden">
      <div className="container mx-auto container-spacing relative z-10">
        {/* Header - cleaner design */}
        <div className="text-center whitespace-section">
          <div className="inline-flex items-center bg-green-600 text-white px-10 py-6 rounded-2xl shadow-sm mb-12">
            <CreditCard className="w-8 h-8 mr-4" />
            <span className="text-2xl font-medium">บัตรทอง</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-dental mb-12 leading-tight">
            สามารถใช้รักษาฟันได้
            <span className="block font-medium text-green-700 mt-4">
              หลากหลายรายการ
            </span>
          </h2>
          
          <p className="text-2xl text-dental font-medium mb-8">
            เพียงยื่น<span className="text-green-700 font-semibold">บัตรประชาชนเท่านั้น!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Services List */}
          <Card className="relative overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 border-0 bg-white rounded-3xl">
            <CardContent className="card-spacing">
              <div className="flex items-center mb-12">
                <Shield className="w-12 h-12 text-green-600 mr-5" />
                <h3 className="text-3xl font-medium text-dental">บริการที่ครอบคลุม</h3>
              </div>
              
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300">
                    <CheckCircle className="w-7 h-7 text-green-500 mr-5 flex-shrink-0" />
                    <span className="text-xl font-medium text-dental">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-10 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl border-2 border-green-100">
                <div className="text-center">
                  <div className="text-5xl font-light text-green-700 mb-4">900 บาท/ปี</div>
                  <div className="text-xl text-green-600 font-medium">สิทธิประกันสังคม</div>
                  <div className="text-base text-green-500 mt-3">ไม่ต้องสำรองจ่าย</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Call to Action */}
          <div className="text-center lg:text-left space-y-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-100">
              <div className="text-3xl lg:text-4xl font-light text-dental mb-12 leading-relaxed">
                ไม่ต้องรอปวดฟัน<br />
                <span className="text-green-700 font-medium">รีบมาดูแลกันนะครับ</span>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-7 h-7 text-green-500 mr-4" />
                  <span className="text-xl font-medium text-dental">แค่บัตรประชาชนใบเดียว</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-7 h-7 text-green-500 mr-4" />
                  <span className="text-xl font-medium text-dental">ได้ทั้ง ถอน อุด ขูด ผ่า</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-7 h-7 text-green-500 mr-4" />
                  <span className="text-xl font-medium text-dental">รักษาก่อน สบายกว่า</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <Button 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-xl py-6 h-auto font-medium shadow-sm hover:shadow-md transition-all duration-300 rounded-xl group"
                >
                  <Phone className="w-7 h-7 mr-4 group-hover:animate-bounce" />
                  โทรสอบถาม 062-649-9979
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom highlight */}
        <div className="text-center mt-24">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-100">
            <div className="text-3xl font-light text-dental mb-6">
              <CheckCircle className="w-10 h-10 text-green-500 inline mr-4" />
              ตรวจสุขภาพช่องปาก #ฟรี ไม่มีค่าใช้จ่าย
            </div>
            <div className="text-xl text-gray-600">
              ให้บริการที่ MY HOME Dental Clinic
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
