
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Shield, CheckCircle, Phone, Heart, Star, Sparkles } from "lucide-react";

const goldCardServices = [
  "ตรวจสุขภาพฟัน",
  "ถอนฟัน", 
  "ขูดหินปูน",
  "อุดฟัน",
  "เคลือบหลุมร่องฟัน",
  "เคลือบฟลูออไรด์"
];

const socialSecurityServices = [
  "ตรวจสุขภาพฟัน",
  "ถอนฟัน",
  "ขูดหินปูน", 
  "อุดฟัน",
  "รักษารากฟัน (บางกรณี)",
  "ผ่าฟันคุด (บางกรณี)"
];

export const SocialSecuritySection = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-amber-50/30 via-green-50/20 to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8F4F8' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto container-spacing relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft mb-6">
            <Heart className="w-5 h-5 text-dental-primary mr-2" />
            <span className="text-caption font-medium text-dental-primary uppercase tracking-wider">
              สิทธิการรักษา
            </span>
          </div>
          
          <h2 className="heading-section mb-6">
            รับทั้งบัตรทองและประกันสังคม
            <br />
            <span className="text-dental-primary">รักษาฟันครบทุกรายการ</span>
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            MY HOME Dental Clinic รับทั้งบัตรทองและประกันสังคม 
            <span className="text-dental-secondary font-semibold"> แค่นำบัตรประชาชนมา!</span>
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center text-caption text-dental-light">
              <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
              <span>รับสิทธิครบทุกประเภท</span>
            </div>
            <div className="w-1 h-1 bg-dental-light rounded-full"></div>
            <div className="text-caption text-dental-light">
              ไม่ต้องสำรองจ่าย
            </div>
          </div>
        </div>

        {/* Combined Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Gold Card */}
          <Card className="card-elevated hover:-translate-y-3 transition-all duration-500 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 border-0">
            <CardContent className="card-spacing">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-4 rounded-2xl mr-4 shadow-lg">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="heading-card text-amber-600">บัตรทอง</h3>
                  <p className="text-body text-amber-600/70">บัตรประกันสุขภาพถ้วนหน้า</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {goldCardServices.map((service, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/80 rounded-xl hover:bg-white transition-all duration-300 shadow-soft">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span className="text-base font-medium text-dental">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-2xl border-2 border-amber-200 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-light text-amber-600 mb-2">ฟรี</div>
                  <div className="text-lg text-amber-600 font-medium">ไม่มีค่าใช้จ่าย</div>
                  <div className="text-caption text-amber-600/70 mt-2">สิทธิบัตรทอง</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-body font-medium text-dental">แค่บัตรประชาชน + บัตรทอง</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-body font-medium text-dental">ไม่ต้องจ่ายเงินเพิ่ม</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-body font-medium text-dental">รักษาได้ทันที</span>
                </div>
              </div>
              
              <Button 
                className="btn-primary w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600"
                onClick={() => window.open('tel:062-649-9979', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                โทรจองคิวบัตรทอง
              </Button>
            </CardContent>
          </Card>

          {/* Social Security */}
          <Card className="card-elevated hover:-translate-y-3 transition-all duration-500 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 border-0">
            <CardContent className="card-spacing">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl mr-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="heading-card text-green-600">ประกันสังคม</h3>
                  <p className="text-body text-green-600/70">สิทธิประกันสังคม</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {socialSecurityServices.map((service, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/80 rounded-xl hover:bg-white transition-all duration-300 shadow-soft">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-base font-medium text-dental">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-2xl border-2 border-green-200 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-light text-green-600 mb-2">900 บาท/ปี</div>
                  <div className="text-lg text-green-600 font-medium">สิทธิประกันสังคม</div>
                  <div className="text-caption text-green-600/70 mt-2">ไม่ต้องสำรองจ่าย</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-body font-medium text-dental">แค่บัตรประชาชนเท่านั้น</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-body font-medium text-dental">ได้ทั้ง ถอน อุด ขูด ผ่า</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-body font-medium text-dental">รักษาก่อน สบายกว่า</span>
                </div>
              </div>
              
              <Button 
                className="btn-primary w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                onClick={() => window.open('tel:062-649-9979', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                โทรจองคิวประกันสังคม
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom highlight */}
        <div className="text-center">
          <div className="card-modern card-spacing max-w-4xl mx-auto bg-gradient-to-br from-white to-dental-accent/30">
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-dental-primary mr-3" />
                <div className="heading-card text-dental-primary">
                  ตรวจสุขภาพช่องปาก #ฟรี ไม่มีค่าใช้จ่าย
                </div>
              </div>
              
              <p className="text-body-large text-dental-light max-w-2xl mx-auto">
                ให้บริการที่ MY HOME Dental Clinic ทั้งบัตรทองและประกันสังคม
                <span className="text-dental-secondary font-semibold block mt-2">
                  แค่นำบัตรประชาชนมา รักษาได้เลย!
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="btn-primary mobile-cta"
                  onClick={() => window.open('tel:062-649-9979', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  โทรจองคิว 062-649-9979
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 pt-6 border-t border-dental-accent">
                <div className="text-center">
                  <div className="text-xl font-bold text-dental-primary">บัตรทอง</div>
                  <div className="text-caption text-dental-light">ฟรีทุกรายการ</div>
                </div>
                <div className="w-1 h-8 bg-dental-accent"></div>
                <div className="text-center">
                  <div className="text-xl font-bold text-dental-primary">ประกันสังคม</div>
                  <div className="text-caption text-dental-light">900 บาท/ปี</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
