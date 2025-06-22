
import { Button } from "@/components/ui/button";
import { Facebook, Phone, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/4c63632a-0dc5-4fdc-ba0e-4adb5cf31b03.png" 
                alt="MY HOME Dental Clinic Logo" 
                className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#284c5d] bg-gradient-to-r from-[#284c5d] to-[#3a5f72] bg-clip-text text-transparent">MY HOME</h1>
              <p className="text-sm text-gray-600">Dental Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#284c5d] transition-all duration-300 relative group">
              หน้าแรก
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#284c5d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#284c5d] transition-all duration-300 relative group">
              บริการ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#284c5d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#promotions" className="text-gray-700 hover:text-[#284c5d] transition-all duration-300 relative group">
              โปรโมชั่น
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#284c5d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#284c5d] transition-all duration-300 relative group">
              ติดต่อ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#284c5d] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-[#284c5d] text-[#284c5d] hover:bg-gradient-to-r hover:from-[#284c5d] hover:to-[#3a5f72] hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Phone className="w-4 h-4 mr-2" />
              062-649-9979
            </Button>
            <Button className="bg-gradient-to-r from-[#284c5d] to-[#3a5f72] hover:from-[#3a5f72] hover:to-[#284c5d] transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Facebook className="w-4 h-4 mr-2" />
              นัดหมาย
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-[#dae6ec]/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 bg-white/95 backdrop-blur-md rounded-lg">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-[#284c5d] transition-colors py-2 px-3 rounded-lg hover:bg-[#dae6ec]/30">หน้าแรก</a>
              <a href="#services" className="text-gray-700 hover:text-[#284c5d] transition-colors py-2 px-3 rounded-lg hover:bg-[#dae6ec]/30">บริการ</a>
              <a href="#promotions" className="text-gray-700 hover:text-[#284c5d] transition-colors py-2 px-3 rounded-lg hover:bg-[#dae6ec]/30">โปรโมชั่น</a>
              <a href="#contact" className="text-gray-700 hover:text-[#284c5d] transition-colors py-2 px-3 rounded-lg hover:bg-[#dae6ec]/30">ติดต่อ</a>
              <div className="flex flex-col space-y-2 mt-4">
                <Button variant="outline" size="sm" className="border-[#284c5d] text-[#284c5d] hover:bg-[#284c5d] hover:text-white transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  062-649-9979
                </Button>
                <Button className="bg-gradient-to-r from-[#284c5d] to-[#3a5f72] hover:from-[#3a5f72] hover:to-[#284c5d] transition-all duration-300">
                  <Facebook className="w-4 h-4 mr-2" />
                  นัดหมายผ่าน Facebook
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
