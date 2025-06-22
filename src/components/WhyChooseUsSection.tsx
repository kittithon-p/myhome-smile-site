
import { Clock, MapPin, MessageCircle, Award, Users, Shield } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "เปิดบริการถึง 2 ทุ่ม",
    description: "จันทร์-ศุกร์ เปิดถึง 20:00 น.",
    detail: "สะดวกสำหรับคนทำงาน ไม่ต้องลางาน พร้อมบริการหลังเลิกงาน",
    gradient: "from-blue-100 to-indigo-100",
    accent: "from-blue-500 to-indigo-500"
  },
  {
    icon: MapPin,
    title: "ทำเลสะดวก",
    description: "ใจกลางบางละมุง ชลบุรี",
    detail: "เดินทางง่าย จอดรถสะดวก ใกล้ห้างดัง และแหล่งชุมชน",
    gradient: "from-green-100 to-emerald-100",
    accent: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageCircle,
    title: "ติดต่อง่าย",
    description: "ปรึกษาผ่าน Facebook ตอบไว",
    detail: "ทีมงานตอบเร็ว 24 ชั่วโมง พร้อมให้คำปรึกษาและนัดหมาย",
    gradient: "from-purple-100 to-violet-100",
    accent: "from-purple-500 to-violet-500"
  }
];

const stats = [
  { icon: Award, number: "10+", label: "ปีประสบการณ์", color: "text-yellow-600" },
  { icon: Users, number: "1,200+", label: "ลูกค้าพอใจ", color: "text-blue-600" },
  { icon: Shield, number: "98%", label: "ความพอใจ", color: "text-green-600" }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#dae6ec]/30 via-[#dae6ec]/20 to-white/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#284c5d]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#dae6ec]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#284c5d] to-[#3a5f72] bg-clip-text text-transparent mb-6">
            3 เหตุผลที่ควรเลือกเรา
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            ความสะดวก ความเชื่อใจ และการบริการที่ดีที่สุด
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#284c5d] to-[#dae6ec] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group relative">
              {/* Background card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 blur-sm`}></div>
              
              <div className="relative z-10 p-10 rounded-3xl bg-white/70 backdrop-blur-sm group-hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
                <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${reason.accent} text-white rounded-full mb-8 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-2xl relative`}>
                  <reason.icon className="w-12 h-12" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-[#284c5d] mb-4 group-hover:text-[#3a5f72] transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className={`text-[#284c5d] font-semibold text-xl mb-6 bg-gradient-to-r ${reason.accent} bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {reason.description}
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {reason.detail}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-[#dae6ec] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#284c5d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
