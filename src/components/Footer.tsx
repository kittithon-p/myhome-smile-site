
import { Facebook, Phone, MapPin, Clock, Heart, Star, Users, Calendar } from "lucide-react";

export const Footer = () => {
  const quickStats = [
    { icon: Users, value: "2,500+", label: "ผู้ป่วย" },
    { icon: Star, value: "4.9", label: "คะแนน" },
    { icon: Calendar, value: "5", label: "ปี" }
  ];

  const services = [
    "จัดฟัน",
    "รักษารากฟัน", 
    "ทำฟันปลอม",
    "ขูดหินปูน",
    "อุดฟัน",
    "ถอนฟัน"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent)] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img 
                    src="/lovable-uploads/4c63632a-0dc5-4fdc-ba0e-4adb5cf31b03.png" 
                    alt="MY HOME Dental Clinic Logo" 
                    className="relative w-16 h-16 object-contain filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    MY HOME
                  </h3>
                  <p className="text-gray-400">Dental Clinic</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี 
                ให้บริการด้วยความเชี่ยวชาญและเทคโนโลยีทันสมัย
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                บริการของเรา
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="group">
                    <a 
                      href="#services" 
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></div>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                ลิงก์ด่วน
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "หน้าแรก", href: "#home" },
                  { name: "บริการ", href: "#services" },
                  { name: "โปรโมชั่น", href: "#promotions" },
                  { name: "รีวิว", href: "#reviews" },
                  { name: "ติดต่อ", href: "#contact" }
                ].map((link, index) => (
                  <li key={index} className="group">
                    <a 
                      href={link.href} 
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                ติดต่อเรา
              </h4>
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-sm text-gray-300 leading-relaxed">
                      77/16 หมู่ 3 ต.ตะเคียนเตี้ย<br />
                      อ.บางละมุง จ.ชลบุรี
                    </div>
                  </div>
                </div>

                <div className="group">
                  <a 
                    href="tel:062-649-9979"
                    className="flex items-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      062-649-9979
                    </span>
                  </a>
                </div>

                <div className="group">
                  <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-300 font-medium">เวลาทำการ</span>
                    </div>
                    <div className="text-sm text-gray-400 space-y-1 ml-8">
                      <div>จันทร์-ศุกร์: 10:00-20:00 น.</div>
                      <div>เสาร์-อาทิตย์: 09:00-18:00 น.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-400" />
              <p className="text-gray-400 text-sm">
                © 2024 MY HOME Dental Clinic. สงวนลิขสิทธิ์
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.facebook.com/Myhomedent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-2xl backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                  Facebook
                </span>
              </a>
              
              <a 
                href="tel:062-649-9979"
                className="group flex items-center space-x-3 px-6 py-3 bg-green-600/20 hover:bg-green-600/30 rounded-2xl backdrop-blur-sm border border-green-500/30 hover:border-green-400/50 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-green-300 group-hover:text-green-200 transition-colors duration-300">
                  062-649-9979
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
