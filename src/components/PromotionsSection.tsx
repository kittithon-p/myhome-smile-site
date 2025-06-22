
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Star, Clock, Heart } from "lucide-react";
import { promotions } from "./promotions/PromotionData";
import { PromotionCard } from "./promotions/PromotionCard";

export const PromotionsSection = () => {
  return (
    <section id="promotions" className="section-spacing bg-gradient-to-br from-white via-dental-accent/10 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-dental-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-dental-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8F4F8' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container-spacing relative z-10">
        {/* Section Header */}
        <div className="text-center element-spacing max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft mb-6">
            <Gift className="w-5 h-5 text-dental-primary mr-2 animate-bounce" />
            <span className="text-caption font-medium text-dental-primary uppercase tracking-wider">
              โปรโมชั่นพิเศษ
            </span>
          </div>
          
          <h2 className="heading-section mb-6">
            โปรโมชั่นประจำเดือน
            <br />
            <span className="bg-gradient-to-r from-dental-primary to-dental-secondary bg-clip-text text-transparent">
              ประหยัดได้มากถึง 50%
            </span>
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            ข้อเสนอพิเศษที่คุณไม่ควรพลาด ด้วยบริการทันตกรรมคุณภาพสูง
            ในราคาที่คุ้มค่าที่สุด
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center text-caption text-dental-light">
              <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
              <span>โปรโมชั่นจำกัดเวลา</span>
            </div>
            <div className="w-1 h-1 bg-dental-light rounded-full"></div>
            <div className="flex items-center text-caption text-dental-light">
              <Clock className="w-4 h-4 text-dental-primary mr-1" />
              <span>อัปเดตทุกเดือน</span>
            </div>
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {promotions.map((promo) => (
            <PromotionCard key={promo.id} promotion={promo} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="card-modern card-spacing max-w-4xl mx-auto bg-gradient-to-br from-white to-dental-accent/30">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-dental-primary mr-2" />
                  <h3 className="heading-card text-dental-primary">
                    สนใจโปรโมชั่นไหนบ้าง?
                  </h3>
                </div>
                <p className="text-body text-dental-light max-w-2xl mx-auto">
                  ติดต่อเราเพื่อขอข้อมูลเพิ่มเติมหรือจองคิวล่วงหน้า พร้อมรับคำปรึกษาฟรีจากทีมแพทย์ผู้เชี่ยวชาญ
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="btn-primary mobile-cta hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
              >
                <Gift className="w-5 h-5 mr-2" />
                ดูโปรโมชั่นทั้งหมด
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Button>
              
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-dental-accent">
                <div className="text-center">
                  <div className="text-lg font-bold text-dental-primary">4</div>
                  <div className="text-caption text-dental-light">โปรโมชั่นใหม่</div>
                </div>
                <div className="w-1 h-8 bg-dental-accent"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-dental-primary">50%</div>
                  <div className="text-caption text-dental-light">ส่วนลดสูงสุด</div>
                </div>
                <div className="w-1 h-8 bg-dental-accent"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-dental-primary">ฟรี</div>
                  <div className="text-caption text-dental-light">ตรวจสุขภาพ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
