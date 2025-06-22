
import { Clock, MapPin, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "เปิดบริการถึง 2 ทุ่ม",
    description: "จันทร์-ศุกร์ เปิดถึง 20:00 น.",
    detail: "สะดวกสำหรับคนทำงาน ไม่ต้องลางาน",
    gradient: "from-blue-100 to-indigo-100"
  },
  {
    icon: MapPin,
    title: "ทำเลสะดวก",
    description: "ใจกลางบางละมุง ชลบุรี",
    detail: "เดินทางง่าย จอดรถสะดวก ใกล้ห้างดัง",
    gradient: "from-green-100 to-emerald-100"
  },
  {
    icon: MessageCircle,
    title: "ติดต่อง่าย",
    description: "ปรึกษาผ่าน Facebook ตอบไว",
    detail: "ทีมงานตอบเร็ว 24 ชั่วโมง พร้อมให้คำปรึกษา",
    gradient: "from-purple-100 to-violet-100"
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#dae6ec]/30 via-[#dae6ec]/20 to-white/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#284c5d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#dae6ec]/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#284c5d] to-[#3a5f72] bg-clip-text text-transparent mb-4">
            3 เหตุผลที่ควรเลือกเรา
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ความสะดวก ความเชื่อใจ และการบริการที่ดีที่สุด
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#284c5d] to-[#dae6ec] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group relative">
              {/* Background card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 blur-sm`}></div>
              
              <div className="relative z-10 p-8 rounded-3xl bg-white/60 backdrop-blur-sm group-hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#284c5d] to-[#3a5f72] text-white rounded-full mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-2xl relative">
                  <reason.icon className="w-10 h-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#284c5d] mb-3 group-hover:text-[#3a5f72] transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-[#284c5d] font-semibold text-lg mb-4 bg-gradient-to-r from-[#284c5d] to-[#3a5f72] bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {reason.description}
                </p>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {reason.detail}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#dae6ec] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#284c5d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
