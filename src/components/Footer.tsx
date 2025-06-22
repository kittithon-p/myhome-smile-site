
import { Facebook, Phone, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#284c5d]/10 via-transparent to-[#dae6ec]/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#284c5d]/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#dae6ec]/5 rounded-full blur-3xl translate-x-40 translate-y-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Logo & Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img 
                  src="/lovable-uploads/4c63632a-0dc5-4fdc-ba0e-4adb5cf31b03.png" 
                  alt="MY HOME Dental Clinic Logo" 
                  className="w-12 h-12 object-contain filter brightness-0 invert"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-[#dae6ec] bg-clip-text text-transparent">MY HOME</h3>
                <p className="text-sm text-gray-300">Dental Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี 
              ให้บริการด้วยความเชี่ยวชาญและเทคโนโลยีทันสมัย
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-[#dae6ec] bg-clip-text text-transparent">ลิงก์ด่วน</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-all duration-300 relative group">
                  หน้าแรก
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dae6ec] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-all duration-300 relative group">
                  บริการ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dae6ec] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#promotions" className="hover:text-white transition-all duration-300 relative group">
                  โปรโมชั่น
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dae6ec] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-all duration-300 relative group">
                  ติดต่อ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dae6ec] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-[#dae6ec] bg-clip-text text-transparent">ติดต่อเรา</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start group hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#dae6ec] group-hover:scale-110 transition-transform duration-300" />
                <span>77/16 หมู่ 3 ต.ตะเคียนเตี้ย อ.บางละมุง จ.ชลบุรี</span>
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5 mr-3 text-[#dae6ec] group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:062-649-9979" className="hover:underline">062-649-9979</a>
              </div>
              <div className="flex items-start group hover:text-white transition-colors duration-300">
                <Clock className="w-5 h-5 mr-3 mt-0.5 text-[#dae6ec] group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div>จันทร์-ศุกร์: 10:00-20:00 น.</div>
                  <div>เสาร์-อาทิตย์: 09:00-18:00 น.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MY HOME Dental Clinic. สงวนลิขสิทธิ์
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.facebook.com/Myhomedent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                <span className="text-sm">Facebook</span>
              </a>
              <a 
                href="tel:062-649-9979"
                className="flex items-center text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110 group"
              >
                <Phone className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                <span className="text-sm">062-649-9979</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
