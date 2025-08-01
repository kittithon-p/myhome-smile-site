
import { Clock, MapPin, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "เปิดบริการถึง 2 ทุ่ม",
    description: "จันทร์-ศุกร์ เปิดถึง 20:00 น.",
    detail: "สะดวกสำหรับคนทำงาน ไม่ต้องลางาน",
    color: "text-dental-primary"
  },
  {
    icon: MapPin,
    title: "ทำเลสะดวก",
    description: "ใจกลางบางละมุง ชลบุรี",
    detail: "เดินทางง่าย จอดรถสะดวก ใกล้ห้างดัง",
    color: "text-dental-secondary"
  },
  {
    icon: MessageCircle,
    title: "ติดต่อง่าย",
    description: "ปรึกษาผ่าน Facebook ตอบไว",
    detail: "ทีมงานตอบเร็ว 24 ชั่วโมง พร้อมให้คำปรึกษา",
    color: "text-purple-600"
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="container mx-auto container-spacing relative z-10">
        {/* Section Header */}
        <div className="text-center element-spacing hero-content">
          <h2 className="heading-section text-dental mb-4 text-shimmer">
            3 เหตุผลที่ควรเลือกเรา
          </h2>
          <p className="text-body-large max-w-2xl mx-auto animate-fade-in-up">
            ความสะดวก ความเชื่อใจ และการบริการที่ดีที่สุด
          </p>
          <div className="w-16 h-1 bg-dental-primary/20 mx-auto mt-6 rounded-full animate-scale-in"></div>
        </div>

        {/* Reasons Grid with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 list-stagger">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group stagger-item">
              <div className="relative z-10 card-spacing rounded-2xl bg-white card-interactive shadow-soft hover:shadow-glow border border-gray-100 hover:border-gray-200 gpu-accelerated">
                {/* Animated Icon Container */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-50 ${reason.color} rounded-2xl mb-6 icon-container icon-hover-bounce group-hover:shadow-lg transition-all duration-300`}>
                  <reason.icon className="w-8 h-8 icon-floating" />
                </div>
                
                {/* Animated Title */}
                <h3 className="heading-card text-dental mb-3 group-hover:text-gray-900 transition-colors duration-300 text-glow">
                  {reason.title}
                </h3>
                
                {/* Animated Description */}
                <p className={`${reason.color} font-medium mb-4 hover:scale-105 transition-transform duration-300`}>
                  {reason.description}
                </p>
                
                {/* Animated Detail */}
                <p className="text-body group-hover:text-gray-700 transition-colors duration-300">
                  {reason.detail}
                </p>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 rounded-2xl hover-shine pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-dental-primary/5 rounded-full blur-3xl animate-float opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-dental-secondary/5 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
