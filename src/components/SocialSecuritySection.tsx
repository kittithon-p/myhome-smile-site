
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
        {/* Header */}
        <div className="text-center whitespace-section">
          <div className="inline-flex items-center btn-success px-10 py-6 radius-card shadow-sm mb-12">
            <CreditCard className="w-8 h-8 mr-4" />
            <span className="text-xl font-medium">บัตรทอง</span>
          </div>
          
          <h2 className="heading-section mb-12 leading-tight">
            สามารถใช้รักษาฟันได้
            <span className="block font-medium text-dental-secondary mt-4">
              หลากหลายรายการ
            </span>
          </h2>
          
          <p className="text-body-large mb-8">
            เพียงยื่น<span className="text-dental-secondary font-semibold">บัตรประชาชนเท่านั้น!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Side - Services List */}
          <Card className="relative overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 border-0 bg-white radius-large">
            <CardContent className="card-spacing">
              <div className="flex items-center mb-8 md:mb-12">
                <Shield className="w-8 h-8 md:w-12 md:h-12 mr-3 md:mr-5 text-dental-secondary" />
                <h3 className="heading-card">บริการที่ครอบคลุม</h3>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center card-spacing bg-gray-50 radius-card hover:bg-gray-100 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-dental-success mr-3 md:mr-5 flex-shrink-0" />
                    <span className="text-base md:text-xl font-medium text-dental">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 md:mt-12 card-spacing bg-gradient-to-r from-green-50 to-emerald-50 radius-large border-2 border-green-100">
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-light text-dental-secondary mb-4">900 บาท/ปี</div>
                  <div className="text-lg md:text-xl text-dental-secondary font-medium">สิทธิประกันสังคม</div>
                  <div className="text-body mt-3 text-green-500">ไม่ต้องสำรองจ่าย</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Call to Action */}
          <div className="text-center lg:text-left space-y-8 md:space-y-12">
            <div className="bg-white/90 backdrop-blur-sm radius-large card-spacing shadow-lg border border-gray-100">
              <div className="heading-card mb-8 md:mb-12 leading-relaxed">
                ไม่ต้องรอปวดฟัน<br />
                <span className="text-dental-secondary font-medium">รีบมาดูแลกันนะครับ</span>
              </div>
              
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-dental-success mr-4" />
                  <span className="text-base md:text-xl font-medium text-dental">แค่บัตรประชาชนใบเดียว</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-dental-success mr-4" />
                  <span className="text-base md:text-xl font-medium text-dental">ได้ทั้ง ถอน อุด ขูด ผ่า</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-dental-success mr-4" />
                  <span className="text-base md:text-xl font-medium text-dental">รักษาก่อน สบายกว่า</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <Button 
                  size="lg" 
                  className="mobile-cta btn-success"
                  onClick={() => window.open('tel:062-649-9979', '_self')}
                >
                  <Phone className="w-5 h-5 md:w-7 md:h-7 mr-4" />
                  โทรสอบถาม 062-649-9979
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom highlight */}
        <div className="text-center mt-16 md:mt-24">
          <div className="inline-block bg-white/90 backdrop-blur-sm radius-large card-spacing shadow-lg border border-gray-100">
            <div className="heading-card mb-6">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-dental-success inline mr-4" />
              ตรวจสุขภาพช่องปาก #ฟรี ไม่มีค่าใช้จ่าย
            </div>
            <div className="text-body-large">
              ให้บริการที่ MY HOME Dental Clinic
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
