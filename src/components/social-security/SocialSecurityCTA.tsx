
import { Button } from "@/components/ui/button";
import { Phone, Sparkles } from "lucide-react";

export const SocialSecurityCTA = () => {
  return (
    <div className="text-center">
      <div className="card-modern card-spacing max-w-4xl mx-auto bg-gradient-to-br from-white to-dental-accent/30">
        <div className="space-y-6">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-dental-primary mr-3" />
            <div className="heading-card text-dental-primary">
              ตรวจสุขภาพช่องปาก #ฟรี ไม่มีค่าใช้จ่าย
            </div>
          </div>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            ให้บริการที่ MY HOME Dental Clinic ทั้งบัตรทองและประกันสังคม
            <span className="text-dental-secondary font-semibold block mt-2">
              แค่นำบัตรประชาชนมา รักษาได้เลย!
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-primary mobile-cta"
              onClick={() => window.open('tel:062-649-9979', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              โทรจองคิว 062-649-9979
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-6 border-t border-dental-accent">
            <div className="text-center">
              <div className="text-xl font-bold text-dental-primary">บัตรทอง</div>
              <div className="text-caption text-dental-light">ฟรีทุกรายการ</div>
            </div>
            <div className="w-1 h-8 bg-dental-accent"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-dental-primary">ประกันสังคม</div>
              <div className="text-caption text-dental-light">900 บาท/ปี</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
