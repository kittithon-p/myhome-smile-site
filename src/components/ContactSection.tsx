
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Facebook, MessageCircle, Share } from "lucide-react";

export const ContactSection = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'MY HOME Dental Clinic',
        text: 'คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}`;
      window.open(lineUrl, '_blank');
    }
  };

  return (
    <section id="contact" className="section-spacing bg-gray-800 text-white">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <div className="text-center whitespace-section">
          <h2 className="mobile-section-title mb-4 md:mb-6">ข้อมูลติดต่อ</h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            มาเยี่ยมชมคลินิกของเรา หรือติดต่อนัดหมายล่วงหน้า
          </p>
          <div className="w-16 md:w-24 h-1 bg-white/30 mx-auto mt-6 md:mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Google Maps - Mobile optimized */}
          <div className="order-2 lg:order-1">
            <Card className="h-full border-0 shadow-xl rounded-2xl md:rounded-3xl overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.234567890123!2d100.8886157!3d12.9345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMY%20HOME%20Dental%20Clinic!5e0!3m2!1sen!2sth!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MY HOME Dental Clinic Location"
                    className="rounded-2xl md:rounded-3xl"
                  />
                  
                  {/* Overlay with address info - Mobile friendly */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg">
                    <div className="text-center">
                      <p className="text-gray-800 font-medium text-sm md:text-base mb-2">หมู่บ้าน Life Garden Home โรงโป๊ะ</p>
                      <p className="text-gray-600 text-xs md:text-sm mb-3">ตรงข้าม CJ mall ข้างร้านส้มโมบาย</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-xs md:text-sm"
                        onClick={() => window.open('https://maps.app.goo.gl/W36TsP5M8CpBGGjq7', '_blank')}
                      >
                        <Navigation className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        เปิดแผนที่
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info - Mobile optimized */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Address */}
            <div className="bg-white/10 rounded-2xl p-4 md:p-6">
              <div className="flex items-start mb-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 mt-1 text-white/70 flex-shrink-0" />
                <div>
                  <h3 className="mobile-card-title mb-3 md:mb-4">ที่อยู่คลินิก</h3>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base">
                    หมู่บ้าน Life Garden Home โรงโป๊ะ<br />
                    ตรงข้าม CJ mall ข้างร้านส้มโมบาย<br />
                    77/16 หมู่ 3 ต.ตะเคียนเตี้ย<br />
                    อ.บางละมุง จ.ชลบุรี 20150
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/10 rounded-2xl p-4 md:p-6">
              <div className="flex items-start mb-4">
                <Phone className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 mt-1 text-white/70 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="mobile-card-title mb-4">เบอร์โทรศัพท์</h3>
                  <Button 
                    className="mobile-cta bg-green-500 hover:bg-green-600 text-white mb-3"
                    onClick={() => window.open('tel:062-649-9979', '_self')}
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    062-649-9979
                  </Button>
                  <p className="text-white/70 text-xs md:text-sm">คลิกเพื่อโทรหาเรา</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 rounded-2xl p-4 md:p-6">
              <div className="flex items-start mb-4">
                <Clock className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 mt-1 text-white/70 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="mobile-card-title mb-4">เวลาทำการ</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                      <span className="text-sm md:text-base">จันทร์ - ศุกร์:</span>
                      <span className="font-medium text-sm md:text-base">10:00 - 20:00 น.</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                      <span className="text-sm md:text-base">เสาร์ - อาทิตย์:</span>
                      <span className="font-medium text-sm md:text-base">09:00 - 18:00 น.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className="space-y-3 pt-4">
              <Button 
                className="mobile-cta bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => window.open('https://www.facebook.com/myhomedentalclinic', '_blank')}
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                นัดหมายทาง Facebook
              </Button>
              
              <Button 
                className="mobile-cta bg-[#00B900] text-white hover:bg-[#009900]"
                onClick={() => window.open('https://lin.ee/8rP1iJi', '_blank')}
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                ติดต่อทาง Line
              </Button>
              
              <Button 
                className="mobile-cta bg-white/20 text-white hover:bg-white/30 border border-white/30"
                onClick={handleShare}
              >
                <Share className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                แชร์ไปยัง LINE
              </Button>
              
              <p className="text-center text-white/70 pt-3 text-sm md:text-base">
                ระบบนัดหมายออนไลน์ ตอบรับภายใน 1 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
