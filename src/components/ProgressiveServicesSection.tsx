
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Sparkles, Heart, Shield, Smile, Stethoscope, Zap, Wrench, ArrowRight, Star, ChevronDown, ChevronUp } from "lucide-react";

const allServices = [
  {
    id: 1,
    title: "ฟอกสีฟัน",
    icon: Zap,
    description: "ฟันขาวสะอาดใน 1 ชั่วโมง ด้วยเทคโนโลยีล้ำสมัย",
    price: "เริ่มต้น ฿1,500",
    popular: true,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop&auto=format&q=75"
  },
  {
    id: 2,
    title: "ครอบฟัน/วีเนียร์",
    icon: Smile,
    description: "ฟันสวยเป็นธรรมชาติ เปลี่ยนรอยยิ้มให้สมบูรณ์แบบ",
    price: "เริ่มต้น ฿8,000",
    popular: true,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop&auto=format&q=75"
  },
  {
    id: 3,
    title: "รากฟันเทียม",
    icon: Heart,
    description: "ทดแทนฟันที่หายไป แข็งแรงเหมือนฟันจริง",
    price: "เริ่มต้น ฿25,000",
    popular: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=250&fit=crop&auto=format&q=75"
  },
  {
    id: 4,
    title: "อุดฟัน/ถอนฟัน",
    icon: Wrench,
    description: "รักษาฟันผุ ถอนฟันคุด ด้วยเทคนิคไม่เจ็บ",
    price: "เริ่มต้น ฿300",
    popular: false,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&auto=format&q=75"
  },
  {
    id: 5,
    title: "รักษารากฟัน",
    icon: Stethoscope,
    description: "รักษาฟันให้อยู่ได้นาน ป้องกันการสูญเสียฟัน",
    price: "เริ่มต้น ฿3,000",
    popular: false,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format&q=75"
  },
  {
    id: 6,
    title: "จัดฟันใส",
    icon: Sparkles,
    description: "เหมาะกับวัยรุ่นและวัยทำงาน มองไม่เห็นขณะใส่",
    price: "เริ่มต้น ฿80,000",
    popular: false,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop&auto=format&q=75"
  }
];

const mainServices = allServices.filter(service => service.popular);
const additionalServices = allServices.filter(service => !service.popular);

export const ProgressiveServicesSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const ServiceCard = ({ service }: { service: typeof allServices[0] }) => (
    <Card className="group card-elevated hover:-translate-y-2 transition-all duration-200 overflow-hidden bg-white/95 border-0">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <service.icon className="w-6 h-6 text-dental-primary" />
            </div>
          </div>
        </div>
        
        <div className="card-spacing space-y-4">
          <div className="space-y-3">
            <h4 className="heading-card group-hover:text-dental-primary transition-colors duration-200">
              {service.title}
            </h4>
            
            <p className="text-body text-dental-light leading-relaxed">
              {service.description}
            </p>
          </div>
          
          <div className="bg-dental-accent rounded-xl p-4">
            <div className="text-dental-primary font-bold text-lg">
              {service.price}
            </div>
          </div>
          
          <Button 
            className="btn-primary w-full group-hover:bg-dental-primary-hover transition-all duration-200"
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
    <section id="services" className="section-spacing bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8F4F8' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container-spacing relative z-10">
        {/* Section Header - Simplified */}
        <div className="text-center element-spacing max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white/80 rounded-full px-6 py-3 shadow-soft mb-6">
            <Heart className="w-5 h-5 text-dental-primary mr-2" />
            <span className="text-caption font-medium text-dental-primary uppercase tracking-wider">
              บริการยอดนิยม
            </span>
          </div>
          
          <h2 className="heading-section mb-6">
            บริการทันตกรรม
            <br />
            <span className="text-dental-primary">ที่ได้รับความนิยมสูงสุด</span>
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            3 บริการหลักที่ลูกค้าส่วนใหญ่เลือกใช้ ด้วยเทคโนโลジีทันสมัยและทีมแพทย์ผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Main Services (Always visible) */}
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
            className="group hover:bg-dental-accent/30 hover:border-dental-primary transition-all duration-200"
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

        {/* Additional Services (Progressive Disclosure) */}
        {showAllServices && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="heading-card text-dental-primary mb-2">
                บริการเพิ่มเติม
              </h3>
              <p className="text-body text-dental-light">
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

        {/* Simplified Bottom CTA */}
        <div className="text-center">
          <div className="card-modern card-spacing max-w-2xl mx-auto bg-gradient-to-br from-white to-dental-accent/30">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="heading-card text-dental-primary">
                  ไม่แน่ใจว่าบริการไหนเหมาะกับคุณ?
                </h3>
                <p className="text-body text-dental-light">
                  ปรึกษาฟรีกับทีมแพทย์ผู้เชี่ยวชาญ
                </p>
              </div>
              
              <Button 
                className="btn-primary mobile-cta"
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
