
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Shield, CheckCircle, Phone, MapPin, Clock, Heart, Star } from "lucide-react";

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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-spacing relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-green-500 text-white px-8 py-4 rounded-2xl shadow-lg mb-8">
            <Heart className="w-6 h-6 mr-3" />
            <span className="text-lg font-medium">สิทธิการรักษา</span>
          </div>
          
          <h2 className="heading-section mb-6 leading-tight">
            เลือกสิทธิที่เหมาะกับคุณ
            <span className="block font-medium text-dental-secondary mt-2">
              รักษาฟันครบทุกรายการ
            </span>
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            MY HOME Dental Clinic รับทั้งบัตรทองและประกันสังคม 
            <span className="text-dental-secondary font-semibold"> แค่นำบัตรประชาชนมา!</span>
          </p>
        </div>

        {/* Tabs for Gold Card and Social Security */}
        <Tabs defaultValue="gold-card" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 h-14 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-2">
            <TabsTrigger 
              value="gold-card" 
              className="text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              บัตรทอง
            </TabsTrigger>
            <TabsTrigger 
              value="social-security" 
              className="text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <Shield className="w-5 h-5 mr-2" />
              ประกันสังคม
            </TabsTrigger>
          </TabsList>

          {/* Gold Card Content */}
          <TabsContent value="gold-card" className="space-y-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Gold Card Info */}
              <Card className="relative overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-amber-50 to-yellow-50">
                <CardContent className="card-spacing">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-2xl mr-4">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="heading-card text-amber-600">บัตรทอง</h3>
                      <p className="text-sm text-amber-600/70">บัตรประกันสุขภาพถ้วนหน้า</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {goldCardServices.map((service, index) => (
                      <div key={index} className="flex items-center p-3 bg-white/70 rounded-xl hover:bg-white transition-all duration-300">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                        <span className="text-base font-medium text-dental">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-2xl border-2 border-amber-200">
                    <div className="text-center">
                      <div className="text-4xl font-light text-amber-600 mb-2">ฟรี</div>
                      <div className="text-lg text-amber-600 font-medium">ไม่มีค่าใช้จ่าย</div>
                      <div className="text-sm text-amber-600/70 mt-2">สิทธิบัตรทอง</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Side - Gold Card CTA */}
              <div className="text-center lg:text-left space-y-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-100">
                  <div className="heading-card mb-8 text-amber-600 leading-relaxed">
                    บัตรทองใช้ได้เลย!<br />
                    <span className="text-dental font-medium">ฟรีทุกรายการ</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-6 h-6 text-amber-500 mr-4" />
                      <span className="text-base font-medium text-dental">แค่บัตรประชาชน + บัตรทอง</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-6 h-6 text-amber-500 mr-4" />
                      <span className="text-base font-medium text-dental">ไม่ต้องจ่ายเงินเพิ่ม</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-6 h-6 text-amber-500 mr-4" />
                      <span className="text-base font-medium text-dental">รักษาได้ทันที</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="mobile-cta bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white"
                    onClick={() => window.open('tel:062-649-9979', '_self')}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    โทรจองคิวบัตรทอง
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Social Security Content */}
          <TabsContent value="social-security" className="space-y-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Social Security Info */}
              <Card className="relative overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="card-spacing">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl mr-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="heading-card text-green-600">ประกันสังคม</h3>
                      <p className="text-sm text-green-600/70">สิทธิประกันสังคม</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {socialSecurityServices.map((service, index) => (
                      <div key={index} className="flex items-center p-3 bg-white/70 rounded-xl hover:bg-white transition-all duration-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-base font-medium text-dental">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-2xl border-2 border-green-200">
                    <div className="text-center">
                      <div className="text-4xl font-light text-green-600 mb-2">900 บาท/ปี</div>
                      <div className="text-lg text-green-600 font-medium">สิทธิประกันสังคม</div>
                      <div className="text-sm text-green-600/70 mt-2">ไม่ต้องสำรองจ่าย</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Side - Social Security CTA */}
              <div className="text-center lg:text-left space-y-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
                  <div className="heading-card mb-8 text-green-600 leading-relaxed">
                    ประกันสังคมครอบคลุม<br />
                    <span className="text-dental font-medium">รักษาสบายกว่า</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                      <span className="text-base font-medium text-dental">แค่บัตรประชาชนเท่านั้น</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                      <span className="text-base font-medium text-dental">ได้ทั้ง ถอน อุด ขูด ผ่า</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                      <span className="text-base font-medium text-dental">รักษาก่อน สบายกว่า</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="mobile-cta bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    onClick={() => window.open('tel:062-649-9979', '_self')}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    โทรจองคิวประกันสังคม
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Bottom highlight */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-amber-500 mr-3" />
              <div className="heading-card">
                ตรวจสุขภาพช่องปาก #ฟรี ไม่มีค่าใช้จ่าย
              </div>
            </div>
            <div className="text-body-large text-dental-light">
              ให้บริการที่ MY HOME Dental Clinic ทั้งบัตรทองและประกันสังคม
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
