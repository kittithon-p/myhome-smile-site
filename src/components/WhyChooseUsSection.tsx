
import { Clock, MapPin, MessageCircle, Award, Users, Shield } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "เปิดบริการถึง 2 ทุ่ม",
    description: "จันทร์-ศุกร์ เปิดถึง 20:00 น.",
    detail: "สะดวกสำหรับคนทำงาน ไม่ต้องลางาน พร้อมบริการหลังเลิกงาน",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    title: "ทำเลสะดวก",
    description: "ใจกลางบางละมุง ชลบุรี",
    detail: "เดินทางง่าย จอดรถสะดวก ใกล้ห้างดัง และแหล่งชุมชน",
    color: "text-emerald-600"
  },
  {
    icon: MessageCircle,
    title: "ติดต่อง่าย",
    description: "ปรึกษาผ่าน Facebook ตอบไว",
    detail: "ทีมงานตอบเร็ว 24 ชั่วโมง พร้อมให้คำปรึกษาและนัดหมาย",
    color: "text-purple-600"
  }
];

const stats = [
  { icon: Award, number: "10+", label: "ปีประสบการณ์", color: "text-amber-600" },
  { icon: Users, number: "1,200+", label: "ลูกค้าพอใจ", color: "text-blue-600" },
  { icon: Shield, number: "98%", label: "ความพอใจ", color: "text-emerald-600" }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">
            3 เหตุผลที่ควรเลือกเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ความสะดวก ความเชื่อใจ และการบริการที่ดีที่สุด
          </p>
          <div className="w-16 h-px bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-light ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group relative">
              <div className="relative z-10 p-10 lg:p-12 rounded-3xl bg-white hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-50 ${reason.color} rounded-full mb-8 group-hover:scale-125 transition-all duration-500 shadow-sm group-hover:shadow-md relative`}>
                  <reason.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className={`${reason.color} font-medium text-lg mb-6`}>
                  {reason.description}
                </p>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
