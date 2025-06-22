
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

const services = [
  {
    id: 1,
    title: "จัดฟัน",
    icon: "🦷",
    description: "เหมาะกับวัยรุ่นและวัยทำงาน",
    details: "จัดฟันใสและจัดฟันแบบดั้งเดิม ด้วยเทคนิคทันสมัย",
    gradient: "from-blue-50 to-indigo-100"
  },
  {
    id: 2,
    title: "รากฟันเทียม",
    icon: "🔧",
    description: "ทดแทนฟันที่หายไป",
    details: "ใช้วัสดุคุณภาพสูง ทนทานและธรรมชาติ",
    gradient: "from-green-50 to-emerald-100"
  },
  {
    id: 3,
    title: "ฟอกสีฟัน",
    icon: "✨",
    description: "ขาวสะอาดใน 1 ชั่วโมง",
    details: "เทคนิคขั้นสูง ปลอดภัย ไม่เจ็บฟัน",
    gradient: "from-yellow-50 to-amber-100"
  },
  {
    id: 4,
    title: "อุดฟัน/ถอนฟัน",
    icon: "💊",
    description: "รักษาฟันผุ ถอนฟันคุด",
    details: "ใช้เครื่องมือทันสมัย รักษาอย่างละเอียด",
    gradient: "from-pink-50 to-rose-100"
  },
  {
    id: 5,
    title: "ทำฟันปลอม",
    icon: "😁",
    description: "ฟันปลอมคุณภาพดี",
    details: "ออกแบบให้เข้ากับใบหน้า ดูธรรมชาติ",
    gradient: "from-purple-50 to-violet-100"
  },
  {
    id: 6,
    title: "รักษารากฟัน",
    icon: "🏥",
    description: "รักษาฟันให้อยู่นาน",
    details: "เทคนิคการรักษาที่ทันสมัย ลดความเจ็บปวด",
    gradient: "from-teal-50 to-cyan-100"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#dae6ec]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#284c5d] mb-4 bg-gradient-to-r from-[#284c5d] to-[#3a5f72] bg-clip-text text-transparent">
            บริการของเรา
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            บริการทันตกรรมครบวงจร ด้วยทีมแพทย์ผู้เชี่ยวชาญ และเครื่องมือทันสมัย
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#284c5d] to-[#dae6ec] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm`}>
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-white/40"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#284c5d] mb-3 group-hover:text-[#3a5f72] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#284c5d] font-semibold mb-4 text-lg">
                  {service.description}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.details}
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-[#284c5d] to-[#3a5f72] hover:from-[#3a5f72] hover:to-[#284c5d] transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:animate-pulse text-white"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  สอบถามทาง Facebook
                </Button>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-r from-[#284c5d]/5 to-[#dae6ec]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
