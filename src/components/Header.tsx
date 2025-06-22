
import { Button } from "@/components/ui/button";
import { Facebook, Phone, Menu, X, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-dental-accent">
      <div className="container-spacing py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section - Enhanced */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-dental-primary/20 to-dental-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src="/lovable-uploads/4c63632a-0dc5-4fdc-ba0e-4adb5cf31b03.png" 
                alt="MY HOME Dental Clinic Logo" 
                className="relative w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl md:text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                MY HOME
              </h1>
              <p className="text-caption text-dental-light">Dental Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation - Modern */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "หน้าแรก", href: "#home" },
              { name: "บริการ", href: "#services" },
              { name: "โปรโมชั่น", href: "#promotions" },
              { name: "รีวิว", href: "#reviews" },
              { name: "ติดต่อ", href: "#contact" }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="relative text-body font-medium text-dental hover:text-dental-primary transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-dental-primary to-dental-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons - Enhanced */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="btn-ghost text-sm"
              onClick={() => window.open('tel:062-649-9979', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              โทรเลย
            </Button>
            <Button 
              className="btn-primary text-sm"
              onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
            >
              <Facebook className="w-4 h-4 mr-2" />
              จองคิว
            </Button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden btn-ghost p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`} 
              />
            </div>
          </Button>
        </div>

        {/* Mobile Menu - Redesigned */}
        <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 mt-8' 
            : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="card-modern card-spacing animate-fade-in">
            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-8">
              {[
                { name: "หน้าแรก", href: "#home" },
                { name: "บริการ", href: "#services" },
                { name: "โปรโมชั่น", href: "#promotions" },
                { name: "รีวิว", href: "#reviews" },
                { name: "ติดต่อ", href: "#contact" }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="block py-3 px-4 text-body font-medium text-dental hover:text-dental-primary hover:bg-dental-accent rounded-2xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* Quick Info */}
            <div className="bg-dental-accent rounded-2xl p-4 mb-6">
              <div className="flex items-center text-caption text-dental-light mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>บางละมุง ชลบุรี</span>
              </div>
              <div className="text-body font-medium text-dental">
                เปิดทุกวัน 10:00-20:00 น.
              </div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="space-y-3">
              <Button 
                className="mobile-cta btn-success"
                onClick={() => {
                  window.open('tel:062-649-9979', '_self');
                  setIsMenuOpen(false);
                }}
              >
                <Phone className="w-5 h-5 mr-3" />
                โทรเลย 062-649-9979
              </Button>
              
              <Button 
                className="mobile-cta btn-secondary"
                onClick={() => {
                  window.open('https://lin.ee/8rP1iJi', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                แอดไลน์
              </Button>
              
              <Button 
                className="mobile-cta btn-primary"
                onClick={() => {
                  window.open('https://www.facebook.com/Myhomedent', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Facebook className="w-5 h-5 mr-3" />
                จองคิวผ่าน Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};
