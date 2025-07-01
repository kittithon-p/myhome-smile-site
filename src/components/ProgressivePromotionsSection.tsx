
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Star, Clock, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { PromotionCard } from "./promotions/PromotionCard";
import { promotions } from "./promotions/PromotionData";

const mainPromotions = promotions.slice(0, 2);
const additionalPromotions = promotions.slice(2);

export const ProgressivePromotionsSection = () => {
  const [showAllPromotions, setShowAllPromotions] = useState(false);

  return (
    <section id="promotions" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm mb-6">
            <Gift className="w-5 h-5 text-orange-500 mr-2 animate-bounce" />
            <span className="text-sm font-medium text-orange-600 uppercase tracking-wider">
              โปรโมชั่นพิเศษ
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            โปรโมชั่นยอดนิยม
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              ประหยัดได้มากถึง 50%
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            โปรโมชั่นที่ได้รับความนิยมมากที่สุด จำกัดเวลา อย่าพลาดโอกาสดี ๆ
          </p>
        </div>

        {/* Main Promotions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {mainPromotions.map((promo) => (
            <PromotionCard key={promo.id} promotion={promo} />
          ))}
        </div>

        {/* Progressive Disclosure Button */}
        {additionalPromotions.length > 0 && (
          <div className="text-center mb-12">
            <Button 
              variant="outline"
              size="lg"
              className="group rounded-full border-2 hover:bg-blue-50 hover:border-blue-300 px-8 py-4 font-medium transition-all duration-200"
              onClick={() => setShowAllPromotions(!showAllPromotions)}
            >
              {showAllPromotions ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-200" />
                  ซ่อนโปรโมชั่นเพิ่มเติม
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-200" />
                  ดูโปรโมชั่นทั้งหมด ({additionalPromotions.length} โปรฯ)
                </>
              )}
            </Button>
          </div>
        )}

        {/* Additional Promotions */}
        {showAllPromotions && additionalPromotions.length > 0 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                โปรโมชั่นเพิ่มเติม
              </h3>
              <p className="text-gray-600">
                โปรโมชั่นอื่น ๆ ที่คุ้มค่าไม่แพ้กัน
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {additionalPromotions.map((promo) => (
                <PromotionCard key={promo.id} promotion={promo} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto border border-gray-100">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    สนใจโปรโมชั่นไหนบ้าง?
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  ติดต่อเราเพื่อจองคิวและรับคำปรึกษาฟรี
                </p>
              </div>
              
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
              >
                <Gift className="w-5 h-5 mr-2" />
                ดูโปรโมชั่นทั้งหมด
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
