import { Button } from "@/components/ui/button";
import { Facebook, Phone, Menu, X, MessageCircle, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "promotions", "reviews", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    console.log(`Found element:`, element);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: "หน้าแรก", id: "home" },
    { name: "บริการ", id: "services" },
    { name: "โปรโมชั่น", id: "promotions" },
    { name: "รีวิว", id: "reviews" },
    { name: "ติดต่อ", id: "contact" }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-dental-accent">
      <div className="container-spacing py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-dental-primary/10 to-dental-secondary/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <img 
                src="/lovable-uploads/4c63632a-0dc5-4fdc-ba0e-4adb5cf31b03.png" 
                alt="MY HOME Dental Clinic Logo" 
                className="relative w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-dental">
                MY HOME
              </h1>
              <p className="text-sm text-dental-light leading-tight">Dental Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  console.log(`Clicked navigation item: ${item.name} (${item.id})`);
                  scrollToSection(item.id);
                }}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-dental-primary bg-dental-accent shadow-sm"
                    : "text-dental hover:text-dental-primary hover:bg-dental-accent/50"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-dental-primary rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-sm font-medium text-dental-primary hover:bg-dental-accent"
              onClick={() => window.open('tel:062-649-9979', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              โทรเลย
            </Button>
            <Button 
              size="sm"
              className="bg-dental-primary hover:bg-dental-primary-hover text-white font-medium"
              onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
            >
              <Facebook className="w-4 h-4 mr-2" />
              จองคิว
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-6' 
            : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-lg border border-dental-accent p-6">
            {/* Mobile Navigation */}
            <nav className="space-y-2 mb-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    console.log(`Clicked mobile navigation item: ${item.name} (${item.id})`);
                    scrollToSection(item.id);
                  }}
                  className={`w-full text-left py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-dental-primary bg-dental-accent"
                      : "text-dental hover:text-dental-primary hover:bg-dental-accent/50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            {/* Quick Info */}
            <div className="bg-dental-accent rounded-xl p-4 mb-6">
              <div className="flex items-center text-sm text-dental-light mb-1">
                <MapPin className="w-4 h-4 mr-2" />
                <span>บางละมุง ชลบุรี</span>
              </div>
              <div className="font-medium text-dental">
                เปิดทุกวัน 10:00-20:00 น.
              </div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-dental-success hover:bg-dental-success-hover text-white font-medium py-3"
                onClick={() => {
                  window.open('tel:062-649-9979', '_self');
                  setIsMenuOpen(false);
                }}
              >
                <Phone className="w-5 h-5 mr-3" />
                โทรเลย 062-649-9979
              </Button>
              
              <Button 
                className="w-full bg-dental-secondary hover:bg-dental-secondary-hover text-white font-medium py-3"
                onClick={() => {
                  window.open('https://lin.ee/8rP1iJi', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                แอดไลน์
              </Button>
              
              <Button 
                className="w-full bg-dental-primary hover:bg-dental-primary-hover text-white font-medium py-3"
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
