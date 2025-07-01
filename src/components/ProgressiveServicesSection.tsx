
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Sparkles, Heart, Shield, Smile, Stethoscope, Zap, Wrench, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const allServices = [
  {
    id: 1,
    title: "ฟอกสีฟัน",
    icon: Zap,
    description: "ฟันขาวสะอาดใน 1 ชั่วโมง ด้วยเทคโนโลยีล้ำสมัย",
    price: "เริ่มต้น ฿1,500",
    popular: true,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop&auto=format&q=75"
  },
  {
    id: 2,
    title: "ครอบฟัน/วีเนียร์",
    icon: Smile,
    description: "ฟันสวยเป็นธรรมชาติ เปลี่ยนรอยยิ้มให้สมบูรณ์แบบ",
    price: "เริ่มต้น ฿8,000",
    popular: true,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop&auto=format&q=75"
  },
  {
    id: 3,
    title: "รากฟันเทียม",
    icon: Heart,
    description: "ทดแทนฟันที่หายไป แข็งแรงเหมือนฟันจริง",
    price: "เริ่มต้น ฿25,000",
    popular: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&auto=format&q=75"
  },
  {
    id: 4,
    title: "อุดฟัน/ถอนฟัน",
    icon: Wrench,
    description: "รักษาฟันผุ ถอนฟันคุด ด้วยเทคนิคไม่เจ็บ",
    price: "เริ่มต้น ฿300",
    popular: false,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format&q=75"
  },
  {
    id: 5,
    title: "รักษารากฟัน",
    icon: Stethoscope,
    description: "รักษาฟันให้อยู่ได้นาน ป้องกันการสูญเสียฟัน",
    price: "เริ่มต้น ฿3,000",
    popular: false,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format&q=75"
  },
  {
    id: 6,
    title: "จัดฟันใส",
    icon: Sparkles,
    description: "เหมาะกับวัยรุ่นและวัยทำงาน มองไม่เห็นขณะใส่",
    price: "เริ่มต้น ฿80,000",
    popular: false,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop&auto=format&q=75"
  }
];

const mainServices = allServices.filter(service => service.popular);
const additionalServices = allServices.filter(service => !service.popular);

export const ProgressiveServicesSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const ServiceCard = ({ service }: { service: typeof allServices[0] }) => (
    <Card className="group hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-white shadow-lg hover:shadow-xl border-0 rounded-2xl">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg">
              <service.icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
              {service.title}
            </h4>
            
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="text-blue-600 font-bold text-lg">
              {service.price}
            </div>
          </div>
          
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-xl py-3 font-medium transition-all duration-200"
            onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
          >
            <Facebook className="w-4 h-4 mr-2" />
            สอบถามและจองคิว
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DBEAFE' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm mb-6">
            <Heart className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              บริการยอดนิยม
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            บริการทันตกรรม
            <br />
            <span className="text-blue-600">ที่ได้รับความนิยมสูงสุด</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            3 บริการหลักที่ลูกค้าส่วนใหญ่เลือกใช้ ด้วยเทคโนโลยีทันสมัยและทีมแพทย์ผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mainServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Progressive Disclosure Button */}
        <div className="text-center mb-12">
          <Button 
            variant="outline"
            size="lg"
            className="group hover:bg-blue-50 hover:border-blue-300 border-2 rounded-xl px-8 py-4 font-medium transition-all duration-200"
            onClick={() => setShowAllServices(!showAllServices)}
          >
            {showAllServices ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-200" />
                ซ่อนบริการเพิ่มเติม
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-200" />
                ดูบริการทั้งหมด ({additionalServices.length} บริการ)
              </>
            )}
          </Button>
        </div>

        {/* Additional Services */}
        {showAllServices && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                บริการเพิ่มเติม
              </h3>
              <p className="text-gray-600">
                บริการทันตกรรมครบครัน สำหรับทุกความต้องการ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {additionalServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto border border-gray-100">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  ไม่แน่ใจว่าบริการไหนเหมาะกับคุณ?
                </h3>
                <p className="text-gray-600 text-lg">
                  ปรึกษาฟรีกับทีมแพทย์ผู้เชี่ยวชาญ
                </p>
              </div>
              
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg w-full sm:w-auto"
                onClick={() => window.open('tel:062-649-9979', '_self')}
              >
                <Stethoscope className="w-5 h-5 mr-2" />
                ปรึกษาฟรี 062-649-9979
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
