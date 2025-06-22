
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Facebook, MessageCircle, Share, Star, Users, Calendar } from "lucide-react";

export const ContactSection = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'MY HOME Dental Clinic',
        text: 'คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี',
        url: window.location.href,
      });
    } else {
      const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}`;
      window.open(lineUrl, '_blank');
    }
  };

  const stats = [
    { icon: Users, number: "2,500+", label: "ผู้ป่วยที่ไว้วางใจ" },
    { icon: Star, number: "4.9", label: "คะแนนรีวิว" },
    { icon: Calendar, number: "5", label: "ปีของการบริการ" }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium">ติดต่อเรา</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              พบกับเราได้ที่
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            มาเยี่ยมชมคลินิกของเรา หรือติดต่อนัดหมายล่วงหน้า
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 group">
                <stat.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
          {/* Map Section */}
          <div className="order-2 xl:order-1">
            <Card className="h-full border-0 shadow-2xl rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <CardContent className="p-0 h-full">
                <div className="relative h-[400px] lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.234567890123!2d100.8886157!3d12.9345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMY%20HOME%20Dental%20Clinic!5e0!3m2!1sen!2sth!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MY HOME Dental Clinic Location"
                    className="rounded-3xl"
                  />
                  
                  {/* Enhanced Map Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">หมู่บ้าน Life Garden Home โรงโป๊ะ</h4>
                        <p className="text-sm text-gray-600 mb-3">ตรงข้าม CJ mall ข้างร้านส้มโมบาย</p>
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 rounded-xl text-sm font-medium"
                          onClick={() => window.open('https://maps.app.goo.gl/W36TsP5M8CpBGGjq7', '_blank')}
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          เปิดแผนที่
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 order-1 xl:order-2">
            {/* Address Card */}
            <Card className="border-0 bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">ที่อยู่คลินิก</h3>
                  <div className="text-gray-300 leading-relaxed space-y-1">
                    <p>หมู่บ้าน Life Garden Home โรงโป๊ะ</p>
                    <p>ตรงข้าม CJ mall ข้างร้านส้มโมบาย</p>
                    <p>77/16 หมู่ 3 ต.ตะเคียนเตี้ย</p>
                    <p>อ.บางละมุง จ.ชลบุรี 20150</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phone Card */}
            <Card className="border-0 bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">เบอร์โทรศัพท์</h3>
                  <Button 
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-xl text-lg px-8 py-4 mb-3 font-semibold"
                    onClick={() => window.open('tel:062-649-9979', '_self')}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    062-649-9979
                  </Button>
                  <p className="text-gray-400 text-sm">คลิกเพื่อโทรหาเรา</p>
                </div>
              </div>
            </Card>

            {/* Hours Card */}
            <Card className="border-0 bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-6">เวลาทำการ</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <span className="text-gray-300">จันทร์ - ศุกร์:</span>
                      <span className="font-semibold text-white text-lg">10:00 - 20:00 น.</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <span className="text-gray-300">เสาร์ - อาทิตย์:</span>
                      <span className="font-semibold text-white text-lg">09:00 - 18:00 น.</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-8">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 rounded-2xl py-6 text-lg font-semibold"
                onClick={() => window.open('https://www.facebook.com/myhomedentalclinic', '_blank')}
              >
                <Facebook className="w-6 h-6 mr-3" />
                นัดหมายทาง Facebook
              </Button>
              
              <Button 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-2xl py-6 text-lg font-semibold"
                onClick={() => window.open('https://lin.ee/8rP1iJi', '_blank')}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                ติดต่อทาง Line
              </Button>
              
              <Button 
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 rounded-2xl py-6 text-lg font-semibold backdrop-blur-sm"
                onClick={handleShare}
              >
                <Share className="w-6 h-6 mr-3" />
                แชร์ไปยัง LINE
              </Button>
              
              <div className="text-center pt-6">
                <p className="text-gray-400 text-lg">
                  ระบบนัดหมายออนไลน์ ตอบรับภายใน 1 ชั่วโมง
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
