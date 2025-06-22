
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Facebook, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-light mb-6">
            ข้อมูลติดต่อ
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            มาเยี่ยมชมคลินิกของเรา หรือติดต่อนัดหมายล่วงหน้า
          </p>
          <div className="w-16 h-px bg-white/30 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Map */}
          <div>
            <Card className="h-full border-0 shadow-lg">
              <CardContent className="p-0 h-full">
                <div className="bg-gray-100 h-80 lg:h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600 p-8">
                    <MapPin className="w-12 h-12 mx-auto mb-6 text-gray-400" />
                    <p className="text-lg font-semibold text-gray-700 mb-2">Google Maps</p>
                    <div className="space-y-1 text-sm text-gray-600 mb-6">
                      <p>หมู่บ้าน Life Garden Home โรงโป๊ะ</p>
                      <p>ตรงข้าม CJ mall ข้างร้านส้มโมบาย</p>
                      <p>77/16 หมู่ 3 ต.ตะเคียนเตี้ย อ.บางละมุง จ.ชลบุรี 20150</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl"
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
          <div className="space-y-12">
            <div>
              <div className="flex items-start mb-6">
                <MapPin className="w-6 h-6 mr-4 mt-1 text-white/70" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">ที่อยู่คลินิก</h3>
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
              <div className="flex items-start mb-6">
                <Phone className="w-6 h-6 mr-4 mt-1 text-white/70" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">เบอร์โทรศัพท์</h3>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white hover:text-gray-800 mb-3 rounded-xl"
                    onClick={() => window.open('tel:062-649-9979', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    062-649-9979
                  </Button>
                  <p className="text-white/70 text-sm">คลิกเพื่อโทรหาเรา</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-6">
                <Clock className="w-6 h-6 mr-4 mt-1 text-white/70" />
                <div>
                  <h3 className="text-xl font-semibold mb-6">เวลาทำการ</h3>
                  <div className="space-y-3 text-white/90">
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                      <span>จันทร์ - ศุกร์:</span>
                      <span className="font-semibold">10:00 - 20:00 น.</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
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
                className="w-full bg-white text-gray-800 hover:bg-gray-100 text-lg py-4 h-auto font-semibold rounded-xl"
                onClick={() => window.open('https://www.facebook.com/myhomedentalclinic', '_blank')}
              >
                <Facebook className="w-5 h-5 mr-3" />
                นัดหมายทาง Facebook
              </Button>
              
              <Button 
                size="lg" 
                className="w-full bg-emerald-500 text-white hover:bg-emerald-600 text-lg py-4 h-auto font-semibold rounded-xl"
                onClick={() => window.open('https://lin.ee/8rP1iJi', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                ติดต่อทาง Line
              </Button>
              
              <p className="text-center text-white/70 text-sm pt-4">
                ระบบนัดหมายออนไลน์ ตอบรับภายใน 1 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
