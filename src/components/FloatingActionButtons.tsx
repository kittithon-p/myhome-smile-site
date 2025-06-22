
import { Phone, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        onClick={() => window.open('tel:062-649-9979', '_self')}
      >
        <Phone className="w-6 h-6 text-white" />
      </Button>
      
      {/* LINE Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-[#00B900] hover:bg-[#009900] shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        onClick={() => window.open('https://lin.ee/8rP1iJi', '_blank')}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
      
      {/* Facebook Chat Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
      >
        <Facebook className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
};
