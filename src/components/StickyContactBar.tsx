
import { useState, useEffect } from "react";
import { Phone, MessageCircle, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const StickyContactBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-dental-accent shadow-lg transition-transform duration-300",
      isVisible ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="container-spacing py-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-sm font-medium text-dental-primary">
              ต้องการปรึกษาหรือนัดหมาย?
            </div>
            <div className="text-xs text-dental-light">
              โทรเลย หรือส่งข้อความ - ตอบกลับเร็ว
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="dental-primary"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => window.open('tel:062-649-9979', '_self')}
            >
              <Phone className="w-4 h-4 mr-1" />
              โทร
            </Button>
            
            <Button
              variant="dental-secondary"
              size="sm"
              onClick={() => window.open('https://lin.ee/8rP1iJi', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              LINE
            </Button>
            
            <Button
              variant="dental-outline"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
            >
              <Calendar className="w-4 h-4 mr-1" />
              นัดหมาย
            </Button>
            
            {/* Mobile-only call button */}
            <Button
              variant="dental-primary"
              size="sm"
              className="sm:hidden"
              onClick={() => window.open('tel:062-649-9979', '_self')}
            >
              <Phone className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDismissed(true)}
              className="p-1 h-8 w-8"
              aria-label="ปิด"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
