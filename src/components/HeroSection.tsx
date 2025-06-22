
import { Button } from "@/components/ui/button";
import { Facebook, Gift } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#284c5d] to-[#3a5f72] text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            ยิ้มสวยมั่นใจ
            <br />
            <span className="text-[#dae6ec]">ที่ MY HOME Dental Clinic</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-white/90">
            คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี
          </p>
          <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto">
            บริการด้วยความเชี่ยวชาญกว่า 10 ปี เปิดบริการจันทร์-ศุกร์ ถึง 20:00 น. 
            พร้อมโปรโมชั่นพิเศษสำหรับลูกค้าใหม่
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-[#284c5d] hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold"
            >
              <Facebook className="w-5 h-5 mr-3" />
              นัดหมายผ่าน Facebook
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#284c5d] text-lg px-8 py-4 h-auto font-semibold"
            >
              <Gift className="w-5 h-5 mr-3" />
              ดูโปรโมชั่นพิเศษ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
