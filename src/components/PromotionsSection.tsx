
import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";
import { promotions } from "./promotions/PromotionData";
import { PromotionCard } from "./promotions/PromotionCard";

export const PromotionsSection = () => {
  return (
    <section id="promotions" className="py-20 bg-gradient-to-br from-white via-[#dae6ec]/10 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#284c5d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#dae6ec]/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
            <PromotionCard key={promo.id} promotion={promo} />
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
