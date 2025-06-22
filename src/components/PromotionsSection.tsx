
import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";
import { promotions } from "./promotions/PromotionData";
import { PromotionCard } from "./promotions/PromotionCard";

export const PromotionsSection = () => {
  return (
    <section id="promotions" className="section-spacing bg-gradient-to-br from-white via-[#dae6ec]/10 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#284c5d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#dae6ec]/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-spacing relative z-10">
        <div className="text-center whitespace-section">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Gift className="w-8 h-8 text-[#284c5d] mr-3 animate-bounce" />
              <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h2 className="mobile-section-title bg-gradient-to-r from-[#284c5d] to-[#3a5f72] bg-clip-text text-transparent">
              โปรโมชั่นประจำเดือน
            </h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            ข้อเสนอพิเศษที่คุณไม่ควรพลาด ประหยัดได้มากถึง 50%
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#284c5d] to-[#dae6ec] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="mobile-grid mb-8">
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
