
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const reviewImages = [
  {
    id: 1,
    src: "/lovable-uploads/6c05b85f-1371-4e06-ab70-bdcede7809de.png",
    title: "ฟิลปลอมฟัน",
    description: "ก่อนใส่ฟันปลอม vs หลังใส่ฟันปลอม",
    category: "ฟันปลอม"
  },
  {
    id: 2,
    src: "/lovable-uploads/69e47a0f-288d-4dad-99b8-8b4da9b987f9.png",
    title: "ผลลัพธ์ก่อน-หลังการอุดฟันหน้า",
    description: "อุดเติมฟันหน้า เพื่อความสวยงาม ไม่ให้การอุดฟันผุผะคะ",
    category: "อุดฟัน"
  },
  {
    id: 3,
    src: "/lovable-uploads/3ca78caf-38bf-470e-b7e4-01b06d8cf9eb.png",
    title: "ผลลัพธ์ก่อน-หลังขูดหินปูน",
    description: "ควรขูดหินปูนเป็นประจำทุก 6-12 เดือน เพื่อสุขภาพเหงือกที่ดี",
    category: "ขูดหินปูน"
  },
  {
    id: 4,
    src: "/lovable-uploads/e4ed645f-b1a2-4c03-b046-14345a4e0eac.png",
    title: "ผลลัพธ์ก่อน-หลังฟอกสีฟัน",
    description: "ผลลัพธ์ที่น่อยใจในฟันแต่ละบุคคล หลังหอกควรเสียงการกาบอาหารสีเข้มขุ่นะคะ",
    category: "ฟอกสีฟัน"
  },
  {
    id: 5,
    src: "/lovable-uploads/947af994-08d4-4d55-ade2-9f3ddae28ad0.png",
    title: "ผลลัพธ์ก่อน-หลังใส่ครอบฟัน",
    description: "การทำครอบฟันอาจรู้สึกเจ็บ หรือเสียวฟันระหว่างการรรักษา",
    category: "ครอบฟัน"
  },
  {
    id: 6,
    src: "/lovable-uploads/bf476b9c-c12c-4eb9-b38a-111f28ca0342.png",
    title: "Composite Veneer (คอมโพสิต วิเนียร์)",
    description: "สวยงามเป็นธรรมชาติ ไม่ต้องกรอฟันมาก ทำเสร็จในวันเดียว",
    category: "วิเนียร์"
  }
];

const categories = ["ทั้งหมด", "ฟันปลอม", "อุดฟัน", "ขูดหินปูน", "ฟอกสีฟัน", "ครอบฟัน", "วิเนียร์"];

export const ReviewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "ทั้งหมด" 
    ? reviewImages 
    : reviewImages.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">
            ผลงานการรักษา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ชมผลงานการรักษาจริงจากลูกค้าของเรา เห็นความแตกต่างก่อนและหลังการรักษา
          </p>
          <div className="w-16 h-px bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentImageIndex(0);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gray-800 text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Image Display - เน้นรูปภาพให้ใหญ่และเด่น */}
        {filteredImages.length > 0 && (
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="overflow-hidden shadow-lg border-0 bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={filteredImages[currentImageIndex].src}
                    alt={filteredImages[currentImageIndex].title}
                    className="w-full h-auto object-contain bg-white max-h-[600px]"
                  />
                  
                  {/* Navigation Arrows */}
                  {filteredImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  {filteredImages.length > 1 && (
                    <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {filteredImages.length}
                    </div>
                  )}
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                      {filteredImages[currentImageIndex].category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {filteredImages[currentImageIndex].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {filteredImages[currentImageIndex].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Thumbnails */}
        {filteredImages.length > 1 && (
          <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                  index === currentImageIndex
                    ? "border-gray-800 shadow-md"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-6">
            ต้องการผลลัพธ์แบบนี้เหมือนกัน? 
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            ปรึกษาทันตแพทย์ผู้เชี่ยวชาญของเราได้ฟรี ผ่าน Facebook
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 h-auto font-medium shadow-sm hover:shadow-md transition-all duration-300 rounded-xl"
          >
            <Facebook className="w-5 h-5 mr-3" />
            ปรึกษาฟรีทาง Facebook
          </Button>
        </div>
      </div>
    </section>
  );
};
