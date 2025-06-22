
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Star, Heart } from "lucide-react";

export const FacebookSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <div className="flex items-center mb-6">
              <Facebook className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-[#284c5d]">
                ติดตามเราบน Facebook
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              รับข่าวสารโปรโมชั่นล่าสุด ดูผลงานการรักษา และนัดหมายได้ง่ายๆ 
              ผ่านเพจ Facebook ของเรา
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#284c5d] mb-2">1,250+</div>
                <div className="text-gray-600">ผู้ติดตาม</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#284c5d] mb-2">4.8</div>
                <div className="flex items-center justify-center text-yellow-500 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-gray-600">คะแนนรีวิว</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
            >
              <Facebook className="w-5 h-5 mr-3" />
              ติดตามเพจ Facebook
            </Button>
          </div>

          {/* Right Side - Mock Facebook Widget */}
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#284c5d] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">MH</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#284c5d]">MY HOME Dental Clinic</h3>
                    <p className="text-sm text-gray-500">2 ชั่วโมงที่แล้ว</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  🎉 โปรโมชั่นพิเศษ! ฟอกสีฟัน + ขูดหินปูน เพียง 1,500 บาท (จากปกติ 3,000 บาท) 
                  🦷✨ จำกัดเพียง 20 ท่านแรกเท่านั้น!
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">฿1,500</div>
                    <div className="text-sm text-gray-500 line-through mb-2">฿3,000</div>
                    <div className="text-sm text-[#284c5d] font-semibold">ประหยัด 50%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 text-red-500 mr-1" />
                    <span>45 คน</span>
                  </div>
                  <div>12 ความคิดเห็น 8 แชร์</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <Heart className="w-4 h-4 mr-1" />
                      ถูกใจ
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      💬 แสดงความคิดเห็น
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      📤 แชร์
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
