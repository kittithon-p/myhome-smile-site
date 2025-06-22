
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Sparkles } from "lucide-react";

const promotions = [
  {
    id: 1,
    title: "แพ็กเกจจัดฟันใส",
    discount: "ลด 30%",
    originalPrice: "80,000",
    salePrice: "56,000",
    description: "จัดฟันใสแบบครบวงจร รวมถอนฟันคุด",
    validUntil: "31 ธันวาคม 2024",
    isHot: true,
    gradient: "from-red-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "ฟอกสีฟัน + ขูดหินปูน",
    discount: "ลด 50%",
    originalPrice: "3,000",
    salePrice: "1,500",
    description: "ฟอกสีฟัน Laser + ขูดหินปูน ในราคาพิเศษ",
    validUntil: "15 มกราคม 2025",
    isHot: false,
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "รากฟันเทียม + ครอบฟัน",
    discount: "ลด 25%",
    originalPrice: "60,000",
    salePrice: "45,000",
    description: "รากฟันเทียมแท้ 100% รวมครอบฟันเซรามิก",
    validUntil: "28 กุมภาพันธ์ 2025",
    isHot: true,
    gradient: "from-purple-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1606811843722-d80b4b3fb5e5?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "ตรวจฟันฟรี + เคลียร์ปัญหา",
    discount: "ฟรี!",
    originalPrice: "500",
    salePrice: "0",
    description: "ตรวจสุขภาพฟันฟรี สำหรับลูกค้าใหม่",
    validUntil: "31 มีนาคม 2025",
    isHot: false,
    gradient: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
  }
];

export const PromotionsSection = () => {
  return (
    <section id="promotions" className="py-20 bg-gradient-to-br from-white via-[#dae6ec]/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Gift className="w-10 h-10 text-[#284c5d] mr-4 animate-bounce" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#284c5d] to-[#3a5f72] bg-clip-text text-transparent">
              โปรโมชั่นประจำเดือน
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ข้อเสนอพิเศษที่คุณไม่ควรพลาด ประหยัดได้มากถึง 50%
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#284c5d] to-[#dae6ec] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {promotions.map((promo) => (
            <Card key={promo.id} className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
              {promo.isHot && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge className={`bg-gradient-to-r ${promo.gradient} hover:bg-gradient-to-l text-white font-bold animate-pulse shadow-lg`}>
                    <Sparkles className="w-3 h-3 mr-1" />
                    HOT!
                  </Badge>
                </div>
              )}
              
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${promo.gradient} shadow-lg`}>
                  {promo.discount}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#dae6ec]/20 group-hover:from-[#dae6ec]/20 group-hover:to-white/50 transition-all duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#284c5d] mb-3 line-clamp-2 group-hover:text-[#3a5f72] transition-colors duration-300">
                    {promo.title}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {promo.originalPrice !== "500" && (
                      <span className="text-gray-400 line-through text-sm">
                        ฿{promo.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className={`text-2xl font-bold ${promo.salePrice === "0" ? "text-green-600" : "text-red-600"} group-hover:scale-110 transition-transform duration-300`}>
                    {promo.salePrice === "0" ? (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                        ฟรี! ✨
                      </span>
                    ) : (
                      `฿${promo.salePrice}`
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {promo.description}
                </p>

                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>ถึง {promo.validUntil}</span>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#284c5d] to-[#3a5f72] hover:from-[#3a5f72] hover:to-[#284c5d] transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:animate-pulse text-white">
                  <Gift className="w-4 h-4 mr-2" />
                  จองโปรนี้
                </Button>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-[#dae6ec]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-[#284c5d] text-[#284c5d] hover:bg-gradient-to-r hover:from-[#284c5d] hover:to-[#3a5f72] hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/80 backdrop-blur-sm">
            <Gift className="w-5 h-5 mr-2" />
            ดูโปรโมชั่นทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
};
