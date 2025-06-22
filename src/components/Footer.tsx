
import { Facebook, Phone, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Logo & Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#284c5d] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">MY HOME</h3>
                <p className="text-sm text-gray-400">Dental Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              คลินิกทันตกรรมครบวงจร บางละมุง ชลบุรี 
              ให้บริการด้วยความเชี่ยวชาญและเทคโนโลยีทันสมัย
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">ลิงก์ด่วน</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">หน้าแรก</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">บริการ</a></li>
              <li><a href="#promotions" className="hover:text-white transition-colors">โปรโมชั่น</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">ติดต่อ</a></li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">ติดต่อเรา</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-[#dae6ec]" />
                <span>77/16 หมู่ 3 ต.ตะเคียนเตี้ย อ.บางละมุง จ.ชลบุรี</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#dae6ec]" />
                <span>062-649-9979</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 text-[#dae6ec]" />
                <div>
                  <div>จันทร์-ศุกร์: 10:00-20:00 น.</div>
                  <div>เสาร์-อาทิตย์: 09:00-18:00 น.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MY HOME Dental Clinic. สงวนลิขสิทธิ์
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/Myhomedent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Facebook className="w-5 h-5 mr-2" />
                <span className="text-sm">Facebook</span>
              </a>
              <a 
                href="tel:062-649-9979"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-sm">062-649-9979</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
