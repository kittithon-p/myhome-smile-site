
import { useState, useEffect } from "react";
import { Phone, MessageCircle, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const StickyContactBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl transition-transform duration-300",
      isVisible ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="container mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-800">
              ต้องการปรึกษาหรือนัดหมาย?
            </div>
            <div className="text-xs text-gray-600">
              โทรเลย หรือส่งข้อความ - ตอบกลับเร็ว
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:inline-flex rounded-lg px-4 py-2"
              size="sm"
              onClick={() => window.open('tel:062-649-9979', '_self')}
            >
              <Phone className="w-4 h-4 mr-1" />
              โทร
            </Button>
            
            <Button
              className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2"
              size="sm"
              onClick={() => window.open('https://lin.ee/8rP1iJi', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              LINE
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-2"
              onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
            >
              <Calendar className="w-4 h-4 mr-1" />
              นัดหมาย
            </Button>
            
            {/* Mobile-only call button */}
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white sm:hidden rounded-lg p-2"
              size="sm"
              onClick={() => window.open('tel:062-649-9979', '_self')}
            >
              <Phone className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDismissed(true)}
              className="p-2 h-8 w-8 hover:bg-gray-100 rounded-lg"
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
