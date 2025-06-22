
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

export const ReviewCTA = () => {
  return (
    <div className="text-center bg-white rounded-3xl p-16 shadow-lg border border-gray-100">
      <h3 className="text-3xl lg:text-4xl font-light text-dental mb-8">
        ต้องการผลลัพธ์แบบนี้เหมือนกัน? 
      </h3>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        ปรึกษาทันตแพทย์ผู้เชี่ยวชาญของเราได้ฟรี
      </p>
      <Button 
        size="lg"
        className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-6 h-auto text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl"
      >
        <Facebook className="w-6 h-6 mr-4" />
        ปรึกษาฟรีทาง Facebook
      </Button>
    </div>
  );
};
