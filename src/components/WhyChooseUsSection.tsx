
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
        {/* Section Header */}
        <div className="text-center whitespace-section">
          <h2 className="text-4xl lg:text-5xl font-light text-dental mb-8">
            3 เหตุผลที่ควรเลือกเรา
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ความสะดวก ความเชื่อใจ และการบริการที่ดีที่สุด
          </p>
          <div className="w-24 h-1 bg-blue-200 mx-auto mt-12 rounded-full"></div>
        </div>

        {/* Stats Section - more spacious */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-3xl shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-10 h-10 ${stat.color}`} />
              </div>
              <div className={`text-5xl font-light ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons Grid - more spacious */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group relative">
              <div className="relative z-10 p-12 lg:p-16 rounded-3xl bg-white hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gray-50 ${reason.color} rounded-3xl mb-10 group-hover:scale-125 transition-all duration-500 shadow-sm group-hover:shadow-md`}>
                  <reason.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-medium text-dental mb-6 group-hover:text-gray-900 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className={`${reason.color} font-medium text-xl mb-8`}>
                  {reason.description}
                </p>
                
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
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
