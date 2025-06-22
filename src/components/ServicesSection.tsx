
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Sparkles, Heart, Shield, Smile, Stethoscope, Zap, Wrench } from "lucide-react";

const serviceCategories = [
  {
    category: "ความงาม",
    icon: Sparkles,
    color: "bg-blue-100 text-dental-primary",
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
    color: "bg-green-100 text-dental-secondary",
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
        {/* Section Header */}
        <div className="text-center whitespace-section">
          <h2 className="heading-section mb-4">
            บริการของเรา
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">
            บริการทันตกรรมครบวงจร ด้วยทีมแพทย์ผู้เชี่ยวชาญ
          </p>
          <div className="w-16 h-1 bg-blue-200 mx-auto mt-6 radius-standard"></div>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8 md:mb-12">
            {/* Category Header */}
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <div className={`flex items-center ${category.color} px-6 py-3 radius-standard shadow-sm`}>
                <category.icon className="w-5 h-5 mr-3" />
                <h3 className="heading-card">{category.category}</h3>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid-standard">
              {category.services.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden bg-white radius-card">
                  {service.popular && (
                    <div className="absolute top-3 right-3 z-20">
                      <div className="bg-orange-500 text-white px-3 py-1 radius-standard text-xs font-medium shadow-sm">
                        <Sparkles className="w-3 h-3 mr-1 inline" />
                        ยอดนิยม
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="card-spacing text-center space-y-3 md:space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 text-gray-600 radius-standard">
                        <service.icon className="w-6 h-6" />
                      </div>
                      
                      <h4 className="heading-card">
                        {service.title}
                      </h4>
                      
                      <p className="text-body">
                        {service.description}
                      </p>
                      
                      <div className="pt-2">
                        <Button 
                          className="btn-primary text-sm px-6 py-2"
                        >
                          <Facebook className="w-4 h-4 mr-2" />
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
