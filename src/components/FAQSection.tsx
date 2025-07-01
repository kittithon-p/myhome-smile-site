
import { useState } from "react";
import { ChevronDown, ChevronUp, Search, Phone, MessageCircle, Calendar } from "lucide-react";
import { DentalCard, DentalCardContent, DentalCardHeader, DentalCardTitle } from "@/components/ui/dental-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const faqData = [
  {
    category: "การนัดหมาย",
    questions: [
      {
        question: "จองคิวล่วงหน้าได้ไหม?",
        answer: "ได้ครับ สามารถโทรนัดหมายล่วงหน้าได้ที่ 062-649-9979 หรือติดต่อผ่าน Facebook และ LINE ของเรา เปิดให้บริการทุกวัน เวลา 10:00-20:00 น. (จ.-ศ.) และ 09:00-18:00 น. (ส.-อา.)"
      },
      {
        question: "ต้องรอนานไหม?",
        answer: "เรามีระบบนัดหมายเพื่อลดเวลารอ หากมีนัดหมายล่วงหน้าจะได้รับการดูแลตามเวลาที่นัด แต่กรณีฉุกเฉินเราจะให้ความช่วยเหลือทันที"
      },
      {
        question: "Walk-in ได้ไหม?",
        answer: "ได้ครับ แต่แนะนำให้นัดหมายล่วงหน้าเพื่อป้องกันการรอคิวนาน เพราะเรามีผู้ป่วยจำนวนมาก"
      }
    ]
  },
  {
    category: "ราคาและการชำระเงิน",
    questions: [
      {
        question: "ราคาค่ารักษาเท่าไหร่?",
        answer: "ขึ้นอยู่กับการรักษา เช่น อุดฟัน 800-1,500 บาท, ถอนฟัน 500-2,000 บาท, ทำความสะอาดฟัน 1,200 บาท, จัดฟัน เริ่มต้น 35,000 บาท สามารถปรึกษาเพื่อรับใบเสนอราคาที่แม่นยำได้"
      },
      {
        question: "มีบัตรเครดิตและผ่อนได้ไหม?",
        answer: "รับบัตรเครดิต และมีระบบผ่อนชำระสำหรับการรักษาค่าใช้จ่ายสูง เช่น จัดฟัน รากเทียม สามารถผ่อนได้สูงสุด 24 เดือน"
      },
      {
        question: "ใช้ประกันสังคมได้ไหม?",
        answer: "ใช้ได้ครับ รับทั้งบัตรทองและประกันสังคม บัตรทอง-ฟรีทุกรายการ, ประกันสังคม-900 บาท/ปี แค่นำบัตรประชาชนมาก็รักษาได้เลย"
      }
    ]
  },
  {
    category: "บริการและการรักษา",
    questions: [
      {
        question: "มีบริการอะไรบ้าง?",
        answer: "ครบครันทุกด้าน: รักษารากฟัน, อุดฟัน, ถอนฟัน, ทำความสะอาดฟัน, ฟอกสีฟัน, จัดฟัน, รากเทียม, ทำฟันเทียม, ศัลยกรรมช่องปาก และตรวจสุขภาพช่องปาก"
      },
      {
        question: "ปลอดภัยแค่ไหน?",
        answer: "ทันตแพทย์ผู้เชี่ยวชาญ 5+ ปีประสบการณ์, เครื่องมือทันสมัย, ฆ่าเชื้อมาตรฐานสากล, ผู้ป่วยกว่า 2,500+ คน รีวิว 4.9/5 ดาว"
      },
      {
        question: "รักษาเด็กได้ไหม?",
        answer: "ได้ครับ มีทันตแพทย์เฉพาะทางเด็ก บรรยากาศเป็นกันเอง เครื่องมือเฉพาะเด็ก และมีกิจกรรมให้เด็กไม่กลัวหมอฟัน"
      }
    ]
  }
];

export const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const categories = ["ทั้งหมด", ...faqData.map(cat => cat.category)];

  const filteredFAQs = faqData.filter(category => {
    if (activeCategory !== "ทั้งหมด" && category.category !== activeCategory) {
      return false;
    }
    if (searchTerm) {
      return category.questions.some(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  });

  const toggleExpanded = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedItems(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  return (
    <section id="faq" className="section-spacing bg-gradient-to-br from-dental-light to-white">
      <div className="container-spacing">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft mb-6">
            <MessageCircle className="w-5 h-5 text-dental-primary mr-2" />
            <span className="text-caption font-medium text-dental-primary uppercase tracking-wider">
              คำถามที่พบบ่อย
            </span>
          </div>
          
          <h2 className="heading-section mb-6">
            คำตอบสำหรับคำถามที่คุณสงสัย
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            รวบรวมคำถามและคำตอบที่ผู้ป่วยถามบ่อยที่สุด เพื่อให้คุณได้ข้อมูลที่ครบถ้วน
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental-light w-4 h-4" />
            <Input
              type="text"
              placeholder="ค้นหาคำถาม..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 rounded-xl border-dental-accent focus:border-dental-primary"
              aria-label="ค้นหาคำถาม"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "dental-primary" : "dental-ghost"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={category.category}>
              <h3 className="heading-card text-dental-primary mb-4 px-4">
                {category.category}
              </h3>
              
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const isExpanded = expandedItems.includes(`${categoryIndex}-${questionIndex}`);
                  
                  return (
                    <DentalCard 
                      key={questionIndex}
                      variant="default"
                      className="overflow-hidden"
                    >
                      <button
                        className="w-full text-left p-6 flex items-center justify-between hover:bg-dental-accent/30 transition-colors"
                        onClick={() => toggleExpanded(categoryIndex, questionIndex)}
                        aria-expanded={isExpanded}
                        aria-controls={`faq-answer-${categoryIndex}-${questionIndex}`}
                      >
                        <span className="font-medium text-dental-primary pr-4">
                          {faq.question}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-dental-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-dental-primary flex-shrink-0" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div 
                          id={`faq-answer-${categoryIndex}-${questionIndex}`}
                          className="px-6 pb-6 animate-fade-in"
                        >
                          <p className="text-body text-dental-light leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </DentalCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <DentalCard variant="accent" className="max-w-2xl mx-auto">
            <DentalCardContent>
              <div className="space-y-4">
                <h3 className="heading-card text-dental-primary">
                  ไม่เจอคำตอบที่ต้องการ?
                </h3>
                <p className="text-body text-dental-light">
                  ติดต่อเราได้ทันที เราพร้อมตอบทุกคำถามและให้คำปรึกษาฟรี
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button 
                  variant="dental-primary"
                  size="lg"
                  className="mobile-cta"
                  onClick={() => window.open('tel:062-649-9979', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  โทร 062-649-9979
                </Button>
                
                <Button 
                  variant="dental-outline"
                  size="lg"
                  className="mobile-cta"
                  onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  ส่งข้อความ
                </Button>
              </div>
            </DentalCardContent>
          </DentalCard>
        </div>
      </div>
    </section>
  );
};
