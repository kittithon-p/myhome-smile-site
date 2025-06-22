
import { Clock, MapPin, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "เปิดบริการถึง 2 ทุ่ม",
    description: "จันทร์-ศุกร์ เปิดถึง 20:00 น.",
    detail: "สะดวกสำหรับคนทำงาน ไม่ต้องลางาน"
  },
  {
    icon: MapPin,
    title: "ทำเลสะดวก",
    description: "ใจกลางบางละมุง ชลบุรี",
    detail: "เดินทางง่าย จอดรถสะดวก ใกล้ห้างดัง"
  },
  {
    icon: MessageCircle,
    title: "ติดต่อง่าย",
    description: "ปรึกษาผ่าน Facebook ตอบไว",
    detail: "ทีมงานตอบเร็ว 24 ชั่วโมง พร้อมให้คำปรึกษา"
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-[#dae6ec]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#284c5d] mb-4">
            3 เหตุผลที่ควรเลือกเรา
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ความสะดวก ความเชื่อใจ และการบริการที่ดีที่สุด
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#284c5d] text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#284c5d] mb-3">
                {reason.title}
              </h3>
              <p className="text-[#284c5d] font-semibold text-lg mb-3">
                {reason.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {reason.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
