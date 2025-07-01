
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
    <section id="promotions" className="section-spacing bg-gradient-to-br from-white via-dental-accent/10 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-dental-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-dental-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container-spacing relative z-10">
        {/* Simplified Section Header */}
        <div className="text-center element-spacing max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft mb-6">
            <Gift className="w-5 h-5 text-dental-primary mr-2 animate-bounce" />
            <span className="text-caption font-medium text-dental-primary uppercase tracking-wider">
              โปรโมชั่นพิเศษ
            </span>
          </div>
          
          <h2 className="heading-section mb-6">
            โปรโมชั่นยอดนิยม
            <br />
            <span className="bg-gradient-to-r from-dental-primary to-dental-secondary bg-clip-text text-transparent">
              ประหยัดได้มากถึง 50%
            </span>
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            โปรโมชั่นที่ได้รับความนิยมมากที่สุด จำกัดเวลา อย่าพลาดโอกาสดี ๆ
          </p>
        </div>

        {/* Main Promotions (Always visible) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {mainPromotions.map((promo) => (
            <PromotionCard key={promo.id} promotion={promo} />
          ))}
        </div>

        {/* Progressive Disclosure Button */}
        {additionalPromotions.length > 0 && (
          <div className="text-center mb-12">
            <Button 
              variant="dental-outline"
              size="lg"
              className="group rounded-full"
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

        {/* Additional Promotions (Progressive Disclosure) */}
        {showAllPromotions && additionalPromotions.length > 0 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="heading-card text-dental-primary mb-2">
                โปรโมชั่นเพิ่มเติม
              </h3>
              <p className="text-body text-dental-light">
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

        {/* Simplified Bottom CTA Section */}
        <div className="text-center">
          <div className="card-modern card-spacing max-w-2xl mx-auto bg-gradient-to-br from-white to-dental-accent/30">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-dental-primary mr-2" />
                  <h3 className="heading-card text-dental-primary">
                    สนใจโปรโมชั่นไหนบ้าง?
                  </h3>
                </div>
                <p className="text-body text-dental-light">
                  ติดต่อเราเพื่อจองคิวและรับคำปรึกษาฟรี
                </p>
              </div>
              
              <Button 
                variant="dental-primary"
                size="lg" 
                className="mobile-cta hover:scale-105 transition-all duration-300"
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
