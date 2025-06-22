
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Facebook, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing bg-gray-800 text-white">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <div className="text-center whitespace-section">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">
            ข้อมูลติดต่อ
          </h2>
          <p className="text-white/80 text-xl leading-relaxed">
            มาเยี่ยมชมคลินิกของเรา หรือติดต่อนัดหมายล่วงหน้า
          </p>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-12 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side - Map */}
          <div>
            <Card className="h-full border-0 shadow-xl rounded-3xl">
              <CardContent className="p-0 h-full">
                <div className="bg-gray-100 h-96 lg:h-[500px] rounded-3xl flex items-center justify-center">
                  <div className="text-center text-gray-600 p-12">
                    <MapPin className="w-16 h-16 mx-auto mb-8 text-gray-400" />
                    <p className="text-2xl font-medium text-gray-700 mb-4">Google Maps</p>
                    <div className="space-y-2 text-base text-gray-600 mb-8">
                      <p>หมู่บ้าน Life Garden Home โรงโป๊ะ</p>
                      <p>ตรงข้าม CJ mall ข้างร้านส้มโมบาย</p>
                      <p>77/16 หมู่ 3 ต.ตะเคียนเตี้ย อ.บางละมุง จ.ชลบุรี 20150</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl px-8 py-4"
                      onClick={() => window.open('https://maps.app.goo.gl/W36TsP5M8CpBGGjq7', '_blank')}
                    >
                      <Navigation className="w-5 h-5 mr-3" />
                      ดูแผนที่ขนาดใหญ่
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-16">
            <div>
              <div className="flex items-start mb-8">
                <MapPin className="w-8 h-8 mr-6 mt-2 text-white/70" />
                <div>
                  <h3 className="text-2xl font-medium mb-6">ที่อยู่คลินิก</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    หมู่บ้าน Life Garden Home โรงโป๊ะ<br />
                    ตรงข้าม CJ mall ข้างร้านส้มโมบาย<br />
                    77/16 หมู่ 3 ต.ตะเคียนเตี้ย<br />
                    อ.บางละมุง จ.ชลบุรี 20150
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-8">
                <Phone className="w-8 h-8 mr-6 mt-2 text-white/70" />
                <div>
                  <h3 className="text-2xl font-medium mb-6">เบอร์โทรศัพท์</h3>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white hover:text-gray-800 mb-4 rounded-2xl px-8 py-4 text-lg"
                    onClick={() => window.open('tel:062-649-9979', '_self')}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    062-649-9979
                  </Button>
                  <p className="text-white/70">คลิกเพื่อโทรหาเรา</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-8">
                <Clock className="w-8 h-8 mr-6 mt-2 text-white/70" />
                <div>
                  <h3 className="text-2xl font-medium mb-8">เวลาทำการ</h3>
                  <div className="space-y-4 text-white/90">
                    <div className="flex justify-between items-center p-6 bg-white/10 rounded-2xl">
                      <span className="text-lg">จันทร์ - ศุกร์:</span>
                      <span className="font-medium text-lg">10:00 - 20:00 น.</span>
                    </div>
                    <div className="flex justify-between items-center p-6 bg-white/10 rounded-2xl">
                      <span className="text-lg">เสาร์ - อาทิตย์:</span>
                      <span className="font-medium text-lg">09:00 - 18:00 น.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/20 space-y-6">
              <Button 
                size="lg" 
                className="w-full bg-white text-gray-800 hover:bg-gray-100 text-xl py-6 h-auto font-medium rounded-2xl"
                onClick={() => window.open('https://www.facebook.com/myhomedentalclinic', '_blank')}
              >
                <Facebook className="w-6 h-6 mr-4" />
                นัดหมายทาง Facebook
              </Button>
              
              <Button 
                size="lg" 
                className="w-full bg-green-600 text-white hover:bg-green-700 text-xl py-6 h-auto font-medium rounded-2xl"
                onClick={() => window.open('https://lin.ee/8rP1iJi', '_blank')}
              >
                <MessageCircle className="w-6 h-6 mr-4" />
                ติดต่อทาง Line
              </Button>
              
              <p className="text-center text-white/70 pt-6 text-lg">
                ระบบนัดหมายออนไลน์ ตอบรับภายใน 1 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
