
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Percent } from "lucide-react";

const promotions = [
  {
    id: 1,
    title: "แพ็กเกจจัดฟันใส",
    discount: "ลด 30%",
    originalPrice: "80,000",
    salePrice: "56,000",
    description: "จัดฟันใสแบบครบวงจร รวมถอนฟันคุด",
    validUntil: "31 ธันวาคม 2024",
    isHot: true
  },
  {
    id: 2,
    title: "ฟอกสีฟัน + ขูดหินปูน",
    discount: "ลด 50%",
    originalPrice: "3,000",
    salePrice: "1,500",
    description: "ฟอกสีฟัน Laser + ขูดหินปูน ในราคาพิเศษ",
    validUntil: "15 มกราคม 2025",
    isHot: false
  },
  {
    id: 3,
    title: "รากฟันเทียม + ครอบฟัน",
    discount: "ลด 25%",
    originalPrice: "60,000",
    salePrice: "45,000",
    description: "รากฟันเทียมแท้ 100% รวมครอบฟันเซรามิก",
    validUntil: "28 กุมภาพันธ์ 2025",
    isHot: true
  },
  {
    id: 4,
    title: "ตรวจฟันฟรี + เคลียร์ปัญหา",
    discount: "ฟรี!",
    originalPrice: "500",
    salePrice: "0",
    description: "ตรวจสุขภาพฟันฟรี สำหรับลูกค้าใหม่",
    validUntil: "31 มีนาคม 2025",
    isHot: false
  }
];

export const PromotionsSection = () => {
  return (
    <section id="promotions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-[#284c5d] mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#284c5d]">
              โปรโมชั่นประจำเดือน
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ข้อเสนอพิเศษที่คุณไม่ควรพลาด ประหยัดได้มากถึง 50%
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {promotions.map((promo) => (
            <Card key={promo.id} className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              {promo.isHot && (
                <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-500 text-white font-bold z-10">
                  HOT!
                </Badge>
              )}
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#284c5d] mb-2 line-clamp-2">
                    {promo.title}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-[#dae6ec] text-[#284c5d] font-bold">
                      {promo.discount}
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {promo.originalPrice !== "500" && (
                      <span className="text-gray-400 line-through text-sm">
                        ฿{promo.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-red-600">
                    {promo.salePrice === "0" ? "ฟรี!" : `฿${promo.salePrice}`}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {promo.description}
                </p>

                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>ถึง {promo.validUntil}</span>
                </div>

                <Button className="w-full bg-[#284c5d] hover:bg-[#284c5d]/90">
                  <Gift className="w-4 h-4 mr-2" />
                  จองโปรนี้
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-[#284c5d] text-[#284c5d] hover:bg-[#284c5d] hover:text-white">
            ดูโปรโมชั่นทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
};
