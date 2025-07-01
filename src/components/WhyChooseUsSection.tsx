
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
        <div className="text-center whitespace-section">
          <h2 className="heading-section text-dental mb-4">
            3 เหตุผลที่ควรเลือกเรา
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">
            ความสะดวก ความเชื่อใจ และการบริการที่ดีที่สุด
          </p>
          <div className="w-16 h-1 bg-blue-200 mx-auto mt-6 radius-standard"></div>
        </div>

        {/* Reasons Grid - Changed to horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group relative">
              <div className="relative z-10 card-spacing radius-card bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-50 ${reason.color} radius-card mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  <reason.icon className="w-8 h-8" />
                </div>
                
                <h3 className="heading-card text-dental mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className={`${reason.color} font-medium mb-4`}>
                  {reason.description}
                </p>
                
                <p className="text-body group-hover:text-gray-700 transition-colors duration-300">
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
