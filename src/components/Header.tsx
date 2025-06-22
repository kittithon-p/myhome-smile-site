
import { Button } from "@/components/ui/button";
import { Facebook, Phone, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="container mx-auto container-spacing py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Mobile optimized */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/4c63632a-0dc5-4fdc-ba0e-4adb5cf31b03.png" 
                alt="MY HOME Dental Clinic Logo" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-[#284c5d] bg-gradient-to-r from-[#284c5d] to-[#3a5f72] bg-clip-text text-transparent">MY HOME</h1>
              <p className="text-xs md:text-sm text-gray-600">Dental Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          {/* Desktop Contact Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-[#284c5d] text-[#284c5d] hover:bg-gradient-to-r hover:from-[#284c5d] hover:to-[#3a5f72] hover:text-white transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              062-649-9979
            </Button>
            <Button className="bg-gradient-to-r from-[#284c5d] to-[#3a5f72] hover:from-[#3a5f72] hover:to-[#284c5d] transition-all duration-300">
              <Facebook className="w-4 h-4 mr-2" />
              นัดหมาย
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden hover:bg-[#dae6ec]/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu - Full screen overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-50 flex flex-col">
            <nav className="flex flex-col flex-1 p-6 space-y-6 text-center">
              <a 
                href="#home" 
                className="text-2xl text-gray-700 hover:text-[#284c5d] transition-colors py-4 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                หน้าแรก
              </a>
              <a 
                href="#services" 
                className="text-2xl text-gray-700 hover:text-[#284c5d] transition-colors py-4 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                บริการ
              </a>
              <a 
                href="#promotions" 
                className="text-2xl text-gray-700 hover:text-[#284c5d] transition-colors py-4 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                โปรโมชั่น
              </a>
              <a 
                href="#contact" 
                className="text-2xl text-gray-700 hover:text-[#284c5d] transition-colors py-4 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                ติดต่อ
              </a>
              
              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-4 mt-8 px-4">
                <Button 
                  size="lg" 
                  className="mobile-cta bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => {
                    window.open('tel:062-649-9979', '_self');
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  โทร 062-649-9979
                </Button>
                <Button 
                  size="lg" 
                  className="mobile-cta bg-[#00B900] hover:bg-[#009900] text-white"
                  onClick={() => {
                    window.open('https://lin.ee/8rP1iJi', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  แอดไลน์
                </Button>
                <Button 
                  size="lg" 
                  className="mobile-cta bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    window.open('https://www.facebook.com/Myhomedent', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  <Facebook className="w-5 h-5 mr-3" />
                  Facebook
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
