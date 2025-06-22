
import { Button } from "@/components/ui/button";
import { Facebook, MessageCircle, Phone } from "lucide-react";

export const ReviewCTA = () => {
  return (
    <div className="text-center">
      <div className="card-modern card-spacing max-w-4xl mx-auto bg-gradient-to-br from-white to-dental-accent/30">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="heading-card text-dental-primary">
              ต้องการผลลัพธ์แบบนี้เหมือนกัน?
            </h3>
            <p className="text-body text-dental-light max-w-2xl mx-auto">
              ปรึกษาทันตแพทย์ผู้เชี่ยวชาญของเราได้ฟรี 
              เราจะวิเคราะห์ปัญหาและแนะนำแผนการรักษาที่เหมาะสมที่สุดสำหรับคุณ
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="btn-primary mobile-cta hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
            >
              <Facebook className="w-5 h-5 mr-2" />
              ปรึกษาฟรีทาง Facebook
              <MessageCircle className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              className="btn-outline mobile-cta hover:scale-105 transition-all duration-300"
              onClick={() => window.open('tel:062-649-9979', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              โทร 062-649-9979
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-dental-accent">
            <div className="text-center">
              <div className="text-lg font-bold text-dental-primary">ฟรี</div>
              <div className="text-caption text-dental-light">ปรึกษาออนไลน์</div>
            </div>
            <div className="w-1 h-8 bg-dental-accent"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-dental-primary">24/7</div>
              <div className="text-caption text-dental-light">รับข้อความ</div>
            </div>
            <div className="w-1 h-8 bg-dental-accent"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-dental-primary">เร็ว</div>
              <div className="text-caption text-dental-light">ตอบกลับทันที</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
