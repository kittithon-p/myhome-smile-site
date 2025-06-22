
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
        popular: true,
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
      },
      {
        id: 2,
        title: "ครอบฟัน/วีเนียร์",
        icon: Smile,
        description: "ฟันสวยเป็นธรรมชาติ",
        details: "ออกแบบเฉพาะบุคคล ดูธรรมชาติ ทนทาน",
        gradient: "from-purple-50 to-violet-100",
        popular: false,
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop"
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
        popular: false,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
      },
      {
        id: 4,
        title: "รักษารากฟัน",
        icon: Stethoscope,
        description: "รักษาฟันให้อยู่นาน",
        details: "เทคนิคการรักษาที่ทันสมัย ลดความเจ็บปวด",
        gradient: "from-teal-50 to-cyan-100",
        popular: false,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
      },
      {
        id: 5,
        title: "รากฟันเทียม",
        icon: Heart,
        description: "ทดแทนฟันที่หายไป",
        details: "ใช้วัสดุคุณภาพสูง ทนทานและธรรมชาติ",
        gradient: "from-green-50 to-emerald-100",
        popular: true,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"
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
        popular: true,
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
      }
    ]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">
            บริการของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            บริการทันตกรรมครบวงจร ด้วยทีมแพทย์ผู้เชี่ยวชาญ และเครื่องมือทันสมัย
          </p>
          <div className="w-16 h-px bg-gray-300 mx-auto mt-8"></div>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-24">
            {/* Category Header */}
            <div className="flex items-center justify-center mb-16">
              <div className={`flex items-center bg-gradient-to-r ${category.color} text-white px-8 py-4 rounded-full shadow-sm`}>
                <category.icon className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-medium">{category.category}</h3>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {category.services.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-500 border-0 shadow-sm overflow-hidden relative bg-white">
                  {service.popular && (
                    <div className="absolute top-6 right-6 z-20">
                      <Badge className="bg-gradient-to-r from-orange-400 to-red-400 text-white font-medium shadow-sm">
                        <Sparkles className="w-3 h-3 mr-1" />
                        ยอดนิยม
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-0">
                    {/* Image Section - เน้นรูปภาพให้เด่น */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 text-center space-y-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 text-gray-600 rounded-full mb-4">
                        <service.icon className="w-7 h-7" />
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        {service.title}
                      </h4>
                      
                      <p className="text-gray-600 font-medium mb-4">
                        {service.description}
                      </p>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-8">
                        {service.details}
                      </p>
                      
                      <Button 
                        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 rounded-xl font-medium text-white py-3"
                      >
                        <Facebook className="w-4 h-4 mr-2" />
                        สอบถามทาง Facebook
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
