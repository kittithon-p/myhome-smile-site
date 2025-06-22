
import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";
import { promotions } from "./promotions/PromotionData";
import { PromotionCard } from "./promotions/PromotionCard";

export const PromotionsSection = () => {
  return (
    <section id="promotions" className="section-spacing bg-gradient-to-br from-white via-dental-accent/10 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-dental-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-dental-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-spacing relative z-10">
        <div className="text-center whitespace-section">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Gift className="w-8 h-8 text-dental-primary mr-3 animate-bounce" />
              <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h2 className="heading-section bg-gradient-to-r from-dental-primary to-dental-secondary bg-clip-text text-transparent">
              โปรโมชั่นประจำเดือน
            </h2>
          </div>
          <p className="text-body-large max-w-2xl mx-auto">
            ข้อเสนอพิเศษที่คุณไม่ควรพลาด ประหยัดได้มากถึง 50%
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-dental-primary to-dental-accent mx-auto mt-4 radius-standard"></div>
        </div>

        <div className="grid-standard mb-8">
          {promotions.map((promo) => (
            <PromotionCard key={promo.id} promotion={promo} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-outline bg-white/80 backdrop-blur-sm">
            <Gift className="w-5 h-5 mr-2" />
            ดูโปรโมชั่นทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
};
