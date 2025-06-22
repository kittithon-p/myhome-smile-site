
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Facebook, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#284c5d] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ข้อมูลติดต่อ
          </h2>
          <p className="text-white/80 text-lg">
            มาเยี่ยมชมคลินิกของเรา หรือติดต่อนัดหมายล่วงหน้า
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Map */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <div className="bg-gray-200 h-80 lg:h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Google Maps</p>
                    <p className="text-sm">หมู่บ้าน Life Garden Home โรงโป๊ะ</p>
                    <p className="text-sm">ตรงข้าม CJ mall ข้างร้านส้มโมบาย</p>
                    <p className="text-sm">77/16 หมู่ 3 ต.ตะเคียนเตี้ย อ.บางละมุง จ.ชลบุรี 20150</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-[#284c5d] text-[#284c5d] hover:bg-[#284c5d] hover:text-white"
                      onClick={() => window.open('https://maps.app.goo.gl/W36TsP5M8CpBGGjq7', '_blank')}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      ดูแผนที่ขนาดใหญ่
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-start mb-4">
                <MapPin className="w-6 h-6 mr-4 mt-1 text-[#dae6ec]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ที่อยู่คลินิก</h3>
                  <p className="text-white/90 leading-relaxed">
                    หมู่บ้าน Life Garden Home โรงโป๊ะ<br />
                    ตรงข้าม CJ mall ข้างร้านส้มโมบาย<br />
                    77/16 หมู่ 3 ต.ตะเคียนเตี้ย<br />
                    อ.บางละมุง จ.ชลบุรี 20150
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <Phone className="w-6 h-6 mr-4 mt-1 text-[#dae6ec]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">เบอร์โทรศัพท์</h3>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-[#284c5d] mb-2"
                    onClick={() => window.open('tel:062-649-9979', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    062-649-9979
                  </Button>
                  <p className="text-white/80 text-sm">คลิกเพื่อโทรหาเรา</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <Clock className="w-6 h-6 mr-4 mt-1 text-[#dae6ec]" />
                <div>
                  <h3 className="text-xl font-bold mb-3">เวลาทำการ</h3>
                  <div className="space-y-2 text-white/90">
                    <div className="flex justify-between">
                      <span>จันทร์ - ศุกร์:</span>
                      <span className="font-semibold">10:00 - 20:00 น.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>เสาร์ - อาทิตย์:</span>
                      <span className="font-semibold">09:00 - 18:00 น.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20 space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-white text-[#284c5d] hover:bg-white/90 text-lg py-4"
                onClick={() => window.open('https://www.facebook.com/myhomedentalclinic', '_blank')}
              >
                <Facebook className="w-5 h-5 mr-3" />
                นัดหมายทาง Facebook
              </Button>
              
              <Button 
                size="lg" 
                className="w-full bg-green-500 text-white hover:bg-green-600 text-lg py-4"
                onClick={() => window.open('https://lin.ee/8rP1iJi', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                ติดต่อทาง Line
              </Button>
              
              <p className="text-center text-white/80 text-sm">
                ระบบนัดหมายออนไลน์ ตอบรับภายใน 1 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
