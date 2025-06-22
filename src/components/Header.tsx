
import { Button } from "@/components/ui/button";
import { Facebook, Phone, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#284c5d] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#284c5d]">MY HOME</h1>
              <p className="text-sm text-gray-600">Dental Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#284c5d] transition-colors">หน้าแรก</a>
            <a href="#services" className="text-gray-700 hover:text-[#284c5d] transition-colors">บริการ</a>
            <a href="#promotions" className="text-gray-700 hover:text-[#284c5d] transition-colors">โปรโมชั่น</a>
            <a href="#contact" className="text-gray-700 hover:text-[#284c5d] transition-colors">ติดต่อ</a>
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-[#284c5d] text-[#284c5d] hover:bg-[#284c5d] hover:text-white">
              <Phone className="w-4 h-4 mr-2" />
              062-649-9979
            </Button>
            <Button className="bg-[#284c5d] hover:bg-[#284c5d]/90">
              <Facebook className="w-4 h-4 mr-2" />
              นัดหมาย
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-[#284c5d] transition-colors">หน้าแรก</a>
              <a href="#services" className="text-gray-700 hover:text-[#284c5d] transition-colors">บริการ</a>
              <a href="#promotions" className="text-gray-700 hover:text-[#284c5d] transition-colors">โปรโมชั่น</a>
              <a href="#contact" className="text-gray-700 hover:text-[#284c5d] transition-colors">ติดต่อ</a>
              <div className="flex flex-col space-y-2 mt-4">
                <Button variant="outline" size="sm" className="border-[#284c5d] text-[#284c5d] hover:bg-[#284c5d] hover:text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  062-649-9979
                </Button>
                <Button className="bg-[#284c5d] hover:bg-[#284c5d]/90">
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
