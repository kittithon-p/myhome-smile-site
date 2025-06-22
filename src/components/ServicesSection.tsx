
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Sparkles, Heart, Shield, Smile, Stethoscope, Zap, Wrench, ArrowRight, Star } from "lucide-react";

const services = [
  {
    id: 1,
    title: "ฟอกสีฟัน",
    icon: Zap,
    description: "ฟันขาวสะอาดใน 1 ชั่วโมง ด้วยเทคโนโลยีล้ำสมัย",
    price: "เริ่มต้น ฿1,500",
    popular: true,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: 2,
    title: "ครอบฟัน/วีเนียร์",
    icon: Smile,
    description: "ฟันสวยเป็นธรรมชาติ เปลี่ยนรอยยิ้มให้สมบูรณ์แบบ",
    price: "เริ่มต้น ฿8,000",
    popular: false,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: 3,
    title: "อุดฟัน/ถอนฟัน",
    icon: Wrench,
    description: "รักษาฟันผุ ถอนฟันคุด ด้วยเทคนิคไม่เจ็บ",
    price: "เริ่มต้น ฿300",
    popular: false,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: 4,
    title: "รักษารากฟัน",
    icon: Stethoscope,
    description: "รักษาฟันให้อยู่ได้นาน ป้องกันการสูญเสียฟัน",
    price: "เริ่มต้น ฿3,000",
    popular: false,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: 5,
    title: "รากฟันเทียม",
    icon: Heart,
    description: "ทดแทนฟันที่หายไป แข็งแรงเหมือนฟันจริง",
    price: "เริ่มต้น ฿25,000",
    popular: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: 6,
    title: "จัดฟันใส",
    icon: Sparkles,
    description: "เหมาะกับวัยรุ่นและวัยทำงาน มองไม่เห็นขณะใส่",
    price: "เริ่มต้น ฿80,000",
    popular: true,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&auto=format"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8F4F8' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container-spacing relative z-10">
        {/* Section Header */}
        <div className="text-center element-spacing max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft mb-6">
            <Heart className="w-5 h-5 text-dental-primary mr-2" />
            <span className="text-caption font-medium text-dental-primary uppercase tracking-wider">
              บริการของเรา
            </span>
          </div>
          
          <h2 className="heading-section mb-6">
            บริการทันตกรรมครบวงจร
            <br />
            <span className="text-dental-primary">ด้วยทีมแพทย์ผู้เชี่ยวชาญ</span>
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            เราให้บริการทันตกรรมที่หนองาและครบครัน ด้วยเทคโนโลยีทันสมัย 
            และทีมแพทย์ที่มีประสบการณ์มากกว่า 10 ปี
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center text-caption text-dental-light">
              <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
              <span>4.9/5 จากรีวิว 500+ ราย</span>
            </div>
            <div className="w-1 h-1 bg-dental-light rounded-full"></div>
            <div className="text-caption text-dental-light">
              เปิดทุกวัน 10:00-20:00 น.
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <Card key={service.id} className="group card-elevated hover:-translate-y-3 transition-all duration-500 overflow-hidden bg-white/95 backdrop-blur-sm border-0">
              {service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    <Sparkles className="w-3 h-3 mr-1 inline" />
                    ยอดนิยม
                  </div>
                </div>
              )}
              
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-dental-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="card-spacing space-y-4">
                  <div className="space-y-3">
                    <h4 className="heading-card group-hover:text-dental-primary transition-colors duration-300">
                      {service.title}
                    </h4>
                    
                    <p className="text-body text-dental-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Price */}
                  <div className="bg-dental-accent rounded-xl p-4">
                    <div className="text-dental-primary font-bold text-lg">
                      {service.price}
                    </div>
                    <div className="text-caption text-dental-light">
                      ราคาอาจแตกต่างตามความยากง่าย
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className="btn-primary w-full group-hover:bg-dental-primary-hover transition-all duration-300"
                    onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    สอบถามและจองคิว
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="card-modern card-spacing max-w-4xl mx-auto bg-gradient-to-br from-white to-dental-accent/30">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="heading-card text-dental-primary">
                  ไม่แน่ใจว่าบริการไหนเหมาะกับคุณ?
                </h3>
                <p className="text-body text-dental-light max-w-2xl mx-auto">
                  ปรึกษาฟรีกับทีมแพทย์ผู้เชี่ยวชาญของเรา เราจะวิเคราะห์และแนะนำบริการที่เหมาะสมที่สุดสำหรับคุณ
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="btn-primary mobile-cta"
                  onClick={() => window.open('tel:062-649-9979', '_self')}
                >
                  <Stethoscope className="w-5 h-5 mr-2" />
                  ปรึกษาฟรี 062-649-9979
                </Button>
                
                <Button 
                  className="btn-outline mobile-cta"
                  onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  ส่งข้อความใน Facebook
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-dental-accent">
                <div className="text-center">
                  <div className="text-lg font-bold text-dental-primary">500+</div>
                  <div className="text-caption text-dental-light">ผู้ป่วยต่อเดือน</div>
                </div>
                <div className="w-1 h-8 bg-dental-accent"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-dental-primary">10+</div>
                  <div className="text-caption text-dental-light">ปีประสบการณ์</div>
                </div>
                <div className="w-1 h-8 bg-dental-accent"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-dental-primary">4.9/5</div>
                  <div className="text-caption text-dental-light">คะแนนรีวิว</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
