
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";
import { Promotion } from "./PromotionData";
import { CountdownTimer } from "./CountdownTimer";
import { PromotionBadges } from "./PromotionBadges";

interface PromotionCardProps {
  promotion: Promotion;
}

export const PromotionCard = ({ promotion }: PromotionCardProps) => {
  return (
    <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
      <PromotionBadges promotion={promotion} />
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={promotion.image} 
          alt={promotion.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${promotion.gradient} shadow-lg`}>
          {promotion.discount}
        </div>
        
        {/* Countdown Timer */}
        <div className="absolute bottom-3 left-3">
          <CountdownTimer endDate={promotion.endDate} />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#dae6ec]/20 group-hover:from-[#dae6ec]/20 group-hover:to-white/50 transition-all duration-500"></div>
      <CardContent className="p-6 relative z-10">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-[#284c5d] mb-3 line-clamp-2 group-hover:text-[#3a5f72] transition-colors duration-300">
            {promotion.title}
          </h3>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            {promotion.originalPrice !== "500" && (
              <span className="text-gray-400 line-through text-sm">
                ฿{promotion.originalPrice}
              </span>
            )}
          </div>
          <div className={`text-2xl font-bold ${promotion.salePrice === "0" ? "text-green-600" : "text-red-600"} group-hover:scale-110 transition-transform duration-300`}>
            {promotion.salePrice === "0" ? (
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                ฟรี! ✨
              </span>
            ) : (
              `฿${promotion.salePrice}`
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {promotion.description}
        </p>

        <div className="flex items-center text-xs text-gray-500 mb-4">
          <Clock className="w-3 h-3 mr-1" />
          <span>ถึง {promotion.validUntil}</span>
        </div>

        <Button className="w-full bg-gradient-to-r from-[#284c5d] to-[#3a5f72] hover:from-[#3a5f72] hover:to-[#284c5d] transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:animate-pulse text-white">
          <Gift className="w-4 h-4 mr-2" />
          จองโปรนี้
        </Button>
      </CardContent>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-[#dae6ec]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};
