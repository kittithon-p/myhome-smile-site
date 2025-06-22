
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Sparkles, Heart, Shield, Smile, Stethoscope, Zap, Wrench } from "lucide-react";

const serviceCategories = [
  {
    category: "ความงาม",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    services: [
      {
        id: 1,
        title: "ฟอกสีฟัน",
        icon: Zap,
        description: "ขาวสะอาดใน 1 ชั่วโมง",
        details: "เทคนิคขั้นสูง ปลอดภัย ไม่เจ็บฟัน ผลลัพธ์ทันที",
        gradient: "from-yellow-50 to-amber-100",
        popular: true
      },
      {
        id: 2,
        title: "ครอบฟัน/วีเนียร์",
        icon: Smile,
        description: "ฟันสวยเป็นธรรมชาติ",
        details: "ออกแบบเฉพาะบุคคล ดูธรรมชาติ ทนทาน",
        gradient: "from-purple-50 to-violet-100",
        popular: false
      }
    ]
  },
  {
    category: "สุขภาพฟัน",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        id: 3,
        title: "อุดฟัน/ถอนฟัน",
        icon: Wrench,
        description: "รักษาฟันผุ ถอนฟันคุด",
        details: "ใช้เครื่องมือทันสมัย รักษาอย่างละเอียด ไม่เจ็บ",
        gradient: "from-blue-50 to-cyan-100",
        popular: false
      },
      {
        id: 4,
        title: "รักษารากฟัน",
        icon: Stethoscope,
        description: "รักษาฟันให้อยู่นาน",
        details: "เทคนิคการรักษาที่ทันสมัย ลดความเจ็บปวด",
        gradient: "from-teal-50 to-cyan-100",
        popular: false
      },
      {
        id: 5,
        title: "รากฟันเทียม",
        icon: Heart,
        description: "ทดแทนฟันที่หายไป",
        details: "ใช้วัสดุคุณภาพสูง ทนทานและธรรมชาติ",
        gradient: "from-green-50 to-emerald-100",
        popular: true
      }
    ]
  },
  {
    category: "การจัดฟัน",
    icon: Smile,
    color: "from-blue-500 to-indigo-500", 
    services: [
      {
        id: 6,
        title: "จัดฟันใส",
        icon: Sparkles,
        description: "เหมาะกับวัยรุ่นและวัยทำงาน",
        details: "จัดฟันใสและจัดฟันแบบดั้งเดิม ด้วยเทคนิคทันสมัย",
        gradient: "from-indigo-50 to-blue-100",
        popular: true
      }
    ]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#dae6ec]/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#284c5d]/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#dae6ec]/20 rounded-full blur-3xl translate-x-40 translate-y-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#284c5d] to-[#3a5f72] bg-clip-text text-transparent mb-4">
            บริการของเรา
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            บริการทันตกรรมครบวงจร ด้วยทีมแพทย์ผู้เชี่ยวชาญ และเครื่องมือทันสมัย
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#284c5d] to-[#dae6ec] mx-auto mt-4 rounded-full"></div>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category Header */}
            <div className="flex items-center justify-center mb-8">
              <div className={`flex items-center bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full shadow-lg`}>
                <category.icon className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <Card key={service.id} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm`}>
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold animate-pulse shadow-lg">
                        <Sparkles className="w-3 h-3 mr-1" />
                        ยอดนิยม
                      </Badge>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-white/40"></div>
                  
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#284c5d] to-[#3a5f72] text-white rounded-full mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-[#284c5d] mb-3 group-hover:text-[#3a5f72] transition-colors duration-300">
                      {service.title}
                    </h4>
                    
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
        ))}
      </div>
    </section>
  );
};
