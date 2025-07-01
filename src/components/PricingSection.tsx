
import { useState } from "react";
import { DentalCard, DentalCardContent, DentalCardHeader, DentalCardTitle, DentalCardDescription } from "@/components/ui/dental-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Check, Phone, MessageCircle, Heart, Shield, Clock, Star } from "lucide-react";

const pricingData = [
  {
    category: "การรักษาทั่วไป",
    icon: Heart,
    services: [
      { name: "ตรวจสุขภาพช่องปาก", price: "ฟรี", note: "ทุกครั้งที่มารักษา" },
      { name: "ทำความสะอาดฟัน", price: "1,200", note: "รวมฟลูออไรด์" },
      { name: "อุดฟัน (Composite)", price: "800-1,500", note: "ตามขนาดรู" },
      { name: "อุดฟัน (GIC)", price: "500-800", note: "สำหรับฟันน้ำนม" },
      { name: "ถอนฟัน", price: "500-2,000", note: "ตามความยาก" },
    ]
  },
  {
    category: "ความงามและเสริมสวย",
    icon: Star,
    services: [
      { name: "ฟอกสีฟัน (In-office)", price: "8,000-12,000", note: "1 ครั้ง ขาวทันที" },
      { name: "ฟอกสีฟัน (Home kit)", price: "5,000-7,000", note: "ใช้ที่บ้าน 2 สัปดาห์" },
      { name: "เคลือบฟัน (Veneer)", price: "15,000-25,000", note: "ต่อซี่" },
      { name: "ครอบฟัน (Crown)", price: "8,000-20,000", note: "ตามวัสดุ" },
    ]
  },
  {
    category: "จัดฟันและทันตกรรมจัดฟัน",
    icon: Shield,
    popular: true,
    services: [
      { name: "จัดฟันใส (Clear Aligners)", price: "80,000-120,000", note: "ผ่อน 0% 24 เดือน" },
      { name: "จัดฟันแบบดั้งเดิม", price: "35,000-60,000", note: "ผ่อน 0% 24 เดือน" },
      { name: "จัดฟัน Damon", price: "70,000-90,000", note: "ระยะเวลาสั้นลง" },
      { name: "Retainer หลังจัดฟัน", price: "3,000-5,000", note: "ใส/ลวด" },
    ]
  },
  {
    category: "รากเทียมและฟันเทียม",
    icon: Clock,
    services: [
      { name: "รากเทียม (Implant)", price: "35,000-50,000", note: "รวมครอบฟัน" },
      { name: "ฟันเทียมถอดได้ (บางส่วน)", price: "8,000-15,000", note: "ตามจำนวนซี่" },
      { name: "ฟันเทียมถอดได้ (เต็มปาก)", price: "25,000-45,000", note: "บน/ล่าง" },
      { name: "All-on-4", price: "400,000-600,000", note: "เต็มปาก 1 วัน" },
    ]
  }
];

export const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="pricing" className="section-spacing bg-gradient-to-br from-white via-dental-accent/5 to-white">
      <div className="container-spacing">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft mb-6">
            <Calculator className="w-5 h-5 text-dental-primary mr-2" />
            <span className="text-caption font-medium text-dental-primary uppercase tracking-wider">
              ราคาค่ารักษา
            </span>
          </div>
          
          <h2 className="heading-section mb-6">
            ราคาโปร่งใส
            <br />
            <span className="bg-gradient-to-r from-dental-primary to-dental-secondary bg-clip-text text-transparent">
              ไม่มีค่าใช้จ่ายแอบแฝง
            </span>
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            ราคามาตรฐาน ประกันคุณภาพ มีบริการผ่อนชำระ 0% นานสูงสุด 24 เดือน
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {pricingData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={index}
                variant={selectedCategory === index ? "medical-primary" : "medical-ghost"}
                size="lg"
                onClick={() => setSelectedCategory(index)}
                className="relative"
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.category}
                {category.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-dental-success text-white text-xs">
                    ยอดนิยม
                  </Badge>
                )}
              </Button>
            );
          })}
        </div>

        {/* Pricing Content */}
        <div className="max-w-4xl mx-auto">
          <DentalCard variant="elevated" radius="lg" className="overflow-hidden">
            <DentalCardHeader className="bg-gradient-to-r from-dental-primary to-dental-secondary text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <DentalCardTitle className="text-2xl text-white mb-2">
                    {pricingData[selectedCategory].category}
                  </DentalCardTitle>
                  <DentalCardDescription className="text-white/90">
                    ราคารวม VAT แล้ว ไม่มีค่าใช้จ่ายเพิ่มเติม
                  </DentalCardDescription>
                </div>
                <div className="text-right">
                  {pricingData[selectedCategory].popular && (
                    <Badge className="bg-dental-success text-white mb-2">
                      บริการยอดนิยม
                    </Badge>
                  )}
                  <div className="text-white/90 text-sm">
                    มีบริการผ่อนชำระ 0%
                  </div>
                </div>
              </div>
            </DentalCardHeader>

            <DentalCardContent className="p-8">
              <div className="space-y-4">
                {pricingData[selectedCategory].services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-dental-accent/30 hover:bg-dental-accent/50 transition-colors">
                    <div className="flex-1">
                      <div className="font-medium text-dental-primary mb-1">
                        {service.name}
                      </div>
                      <div className="text-caption text-dental-light">
                        {service.note}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-dental-primary">
                        {service.price === "ฟรี" ? service.price : `฿${service.price}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-8 p-6 bg-dental-success/10 rounded-xl">
                <h4 className="font-semibold text-dental-primary mb-4">
                  สิทธิประโยชน์ที่คุณได้รับ
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "ตรวจสุขภาพช่องปากฟรีทุกครั้ง",
                    "รับประกันงานทุกรายการ",
                    "ผ่อนชำระ 0% นาน 24 เดือน",
                    "ติดตามผลหลังการรักษา",
                    "ปรึกษาทันตแพทย์ฟรี",
                    "บัตรสมาชิกส่วนลด 10%"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-dental-success mr-2 flex-shrink-0" />
                      <span className="text-body text-dental-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  variant="medical-primary"
                  size="xl"
                  className="mobile-cta"
                  onClick={() => window.open('tel:062-649-9979', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  ขอใบเสนอราคา
                </Button>
                
                <Button 
                  variant="medical-outline"
                  size="xl"
                  className="mobile-cta"
                  onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  ปรึกษาฟรี
                </Button>
              </div>
            </DentalCardContent>
          </DentalCard>
        </div>

        {/* Bottom Notice */}
        <div className="text-center mt-8">
          <p className="text-caption text-dental-light max-w-3xl mx-auto">
            <strong>หมายเหตุ:</strong> ราคาอาจแตกต่างกันตามความซับซ้อนของแต่ละรายการ 
            สามารถปรึกษาทันตแพทย์เพื่อรับใบเสนอราคาที่แม่นยำ รับประกันราคาที่เสนอเป็นเวลา 30 วัน
          </p>
        </div>
      </div>
    </section>
  );
};
