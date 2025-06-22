
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Sparkles, Heart, Shield, Smile, Stethoscope, Zap, Wrench } from "lucide-react";

const serviceCategories = [
  {
    category: "ความงาม",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-700",
    services: [
      {
        id: 1,
        title: "ฟอกสีฟัน",
        icon: Zap,
        description: "ขาวสะอาดใน 1 ชั่วโมง",
        popular: true,
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop"
      },
      {
        id: 2,
        title: "ครอบฟัน/วีเนียร์",
        icon: Smile,
        description: "ฟันสวยเป็นธรรมชาติ",
        popular: false,
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop"
      }
    ]
  },
  {
    category: "สุขภาพฟัน",
    icon: Shield,
    color: "bg-green-100 text-green-700",
    services: [
      {
        id: 3,
        title: "อุดฟัน/ถอนฟัน",
        icon: Wrench,
        description: "รักษาฟันผุ ถอนฟันคุด",
        popular: false,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
      },
      {
        id: 4,
        title: "รักษารากฟัน",
        icon: Stethoscope,
        description: "รักษาฟันให้อยู่นาน",
        popular: false,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
      },
      {
        id: 5,
        title: "รากฟันเทียม",
        icon: Heart,
        description: "ทดแทนฟันที่หายไป",
        popular: true,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop"
      }
    ]
  },
  {
    category: "การจัดฟัน",
    icon: Smile,
    color: "bg-purple-100 text-purple-700", 
    services: [
      {
        id: 6,
        title: "จัดฟันใส",
        icon: Sparkles,
        description: "เหมาะกับวัยรุ่นและวัยทำงาน",
        popular: true,
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop"
      }
    ]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing bg-white relative overflow-hidden">
      <div className="container mx-auto container-spacing relative z-10">
        {/* Section Header - more spacious */}
        <div className="text-center whitespace-section">
          <h2 className="text-4xl lg:text-5xl font-light text-dental mb-8">
            บริการของเรา
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            บริการทันตกรรมครบวงจร ด้วยทีมแพทย์ผู้เชี่ยวชาญ
          </p>
          <div className="w-24 h-1 bg-blue-200 mx-auto mt-12 rounded-full"></div>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="whitespace-section">
            {/* Category Header - simplified */}
            <div className="flex items-center justify-center mb-20">
              <div className={`flex items-center ${category.color} px-10 py-5 rounded-2xl shadow-sm`}>
                <category.icon className="w-7 h-7 mr-4" />
                <h3 className="text-2xl font-medium">{category.category}</h3>
              </div>
            </div>

            {/* Services Grid - more spacious */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {category.services.map((service) => (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-sm overflow-hidden bg-white rounded-3xl">
                  {service.popular && (
                    <div className="absolute top-6 right-6 z-20">
                      <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                        <Sparkles className="w-4 h-4 mr-1 inline" />
                        ยอดนิยม
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-0">
                    {/* Image Section - larger and more prominent */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                    
                    {/* Content Section - more spacious */}
                    <div className="card-spacing text-center space-y-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 text-gray-600 rounded-2xl">
                        <service.icon className="w-8 h-8" />
                      </div>
                      
                      <h4 className="text-2xl font-medium text-dental">
                        {service.title}
                      </h4>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="pt-4">
                        <Button 
                          className="bg-blue-700 hover:bg-blue-800 transition-all duration-300 rounded-xl font-medium text-white px-8 py-3"
                        >
                          <Facebook className="w-5 h-5 mr-3" />
                          สอบถาม
                        </Button>
                      </div>
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
