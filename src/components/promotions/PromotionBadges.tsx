
import { Badge } from "@/components/ui/badge";
import { Flame, Sparkles, Star } from "lucide-react";
import { Promotion } from "./PromotionData";

interface PromotionBadgesProps {
  promotion: Promotion;
}

export const PromotionBadges = ({ promotion }: PromotionBadgesProps) => {
  return (
    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
      {promotion.isHot && (
        <Badge className={`bg-gradient-to-r ${promotion.gradient} hover:bg-gradient-to-l text-white font-bold animate-pulse shadow-lg`}>
          <Flame className="w-3 h-3 mr-1" />
          HOT!
        </Badge>
      )}
      {promotion.isNew && (
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold shadow-lg">
          <Sparkles className="w-3 h-3 mr-1" />
          ใหม่
        </Badge>
      )}
      {promotion.isPopular && (
        <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold shadow-lg">
          <Star className="w-3 h-3 mr-1" />
          ยอดนิยม
        </Badge>
      )}
    </div>
  );
};
