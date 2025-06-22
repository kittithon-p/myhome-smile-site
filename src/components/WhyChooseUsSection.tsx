
import { Clock, MapPin, MessageCircle, Award, Users, Shield } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "เปิดบริการถึง 2 ทุ่ม",
    description: "จันทร์-ศุกร์ เปิดถึง 20:00 น.",
    detail: "สะดวกสำหรับคนทำงาน ไม่ต้องลางาน",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    title: "ทำเลสะดวก",
    description: "ใจกลางบางละมุง ชลบุรี",
    detail: "เดินทางง่าย จอดรถสะดวก ใกล้ห้างดัง",
    color: "text-green-600"
  },
  {
    icon: MessageCircle,
    title: "ติดต่อง่าย",
    description: "ปรึกษาผ่าน Facebook ตอบไว",
    detail: "ทีมงานตอบเร็ว 24 ชั่วโมง พร้อมให้คำปรึกษา",
    color: "text-purple-600"
  }
];

const stats = [
  { icon: Award, number: "10+", label: "ปีประสบการณ์", color: "text-blue-600" },
  { icon: Users, number: "1,200+", label: "ลูกค้าพอใจ", color: "text-green-600" },
  { icon: Shield, number: "98%", label: "ความพอใจ", color: "text-purple-600" }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="container mx-auto container-spacing relative z-10">
        {/* Section Header - tighter spacing */}
        <div className="text-center whitespace-section">
          <h2 className="mobile-section-title text-dental mb-4">
            3 เหตุผลที่ควรเลือกเรา
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            ความสะดวก ความเชื่อใจ และการบริการที่ดีที่สุด
          </p>
          <div className="w-16 h-1 bg-blue-200 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Section - tighter spacing */}
        <div className="mobile-grid mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-light ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons Grid - tighter spacing */}
        <div className="mobile-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group relative">
              <div className="relative z-10 p-6 md:p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-50 ${reason.color} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  <reason.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-lg md:text-xl font-medium text-dental mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className={`${reason.color} font-medium mb-4`}>
                  {reason.description}
                </p>
                
                <p className="text-gray-600 text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {reason.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
