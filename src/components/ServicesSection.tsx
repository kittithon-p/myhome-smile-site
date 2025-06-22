
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

const services = [
  {
    id: 1,
    title: "จัดฟัน",
    icon: "🦷",
    description: "เหมาะกับวัยรุ่นและวัยทำงาน",
    details: "จัดฟันใสและจัดฟันแบบดั้งเดิม ด้วยเทคนิคทันสมัย"
  },
  {
    id: 2,
    title: "รากฟันเทียม",
    icon: "🔧",
    description: "ทดแทนฟันที่หายไป",
    details: "ใช้วัสดุคุณภาพสูง ทนทานและธรรมชาติ"
  },
  {
    id: 3,
    title: "ฟอกสีฟัน",
    icon: "✨",
    description: "ขาวสะอาดใน 1 ชั่วโมง",
    details: "เทคนิคขั้นสูง ปลอดภัย ไม่เจ็บฟัน"
  },
  {
    id: 4,
    title: "อุดฟัน/ถอนฟัน",
    icon: "💊",
    description: "รักษาฟันผุ ถอนฟันคุด",
    details: "ใช้เครื่องมือทันสมัย รักษาอย่างละเอียด"
  },
  {
    id: 5,
    title: "ทำฟันปลอม",
    icon: "😁",
    description: "ฟันปลอมคุณภาพดี",
    details: "ออกแบบให้เข้ากับใบหน้า ดูธรรมชาติ"
  },
  {
    id: 6,
    title: "รักษารากฟัน",
    icon: "🏥",
    description: "รักษาฟันให้อยู่นาน",
    details: "เทคนิคการรักษาที่ทันสมัย ลดความเจ็บปวด"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#284c5d] mb-4">
            บริการของเรา
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            บริการทันตกรรมครบวงจร ด้วยทีมแพทย์ผู้เชี่ยวชาญ และเครื่องมือทันสมัย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#284c5d] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#284c5d] font-semibold mb-3">
                  {service.description}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.details}
                </p>
                <Button 
                  className="w-full bg-[#284c5d] hover:bg-[#284c5d]/90"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  สอบถามทาง Facebook
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
