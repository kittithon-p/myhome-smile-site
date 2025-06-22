
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
    description: "อุดเติมฟันหน้า เพื่อความสวยงาม",
    category: "อุดฟัน"
  },
  {
    id: 3,
    src: "/lovable-uploads/3ca78caf-38bf-470e-b7e4-01b06d8cf9eb.png",
    title: "ผลลัพธ์ก่อน-หลังขูดหินปูน",
    description: "ควรขูดหินปูนเป็นประจำทุก 6-12 เดือน",
    category: "ขูดหินปูน"
  },
  {
    id: 4,
    src: "/lovable-uploads/e4ed645f-b1a2-4c03-b046-14345a4e0eac.png",
    title: "ผลลัพธ์ก่อน-หลังฟอกสีฟัน",
    description: "ผลลัพธ์ที่น่าพอใจในฟันแต่ละบุคคล",
    category: "ฟอกสีฟัน"
  },
  {
    id: 5,
    src: "/lovable-uploads/947af994-08d4-4d55-ade2-9f3ddae28ad0.png",
    title: "ผลลัพธ์ก่อน-หลังใส่ครอบฟัน",
    description: "การทำครอบฟันเพื่อฟันที่สวยงาม",
    category: "ครอบฟัน"
  },
  {
    id: 6,
    src: "/lovable-uploads/bf476b9c-c12c-4eb9-b38a-111f28ca0342.png",
    title: "Composite Veneer",
    description: "สวยงามเป็นธรรมชาติ ทำเสร็จในวันเดียว",
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
    <section className="section-spacing bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto container-spacing relative z-10">
        {/* Section Header */}
        <div className="text-center whitespace-section">
          <h2 className="text-4xl lg:text-5xl font-light text-dental mb-8">
            ผลงานการรักษา
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ชมผลงานการรักษาจริงจากลูกค้าของเรา
          </p>
          <div className="w-24 h-1 bg-blue-200 mx-auto mt-12 rounded-full"></div>
        </div>

        {/* Category Filter - cleaner design */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentImageIndex(0);
              }}
              className={`px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Image Display - larger and more prominent */}
        {filteredImages.length > 0 && (
          <div className="max-w-6xl mx-auto mb-20">
            <Card className="overflow-hidden shadow-xl border-0 bg-white rounded-3xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={filteredImages[currentImageIndex].src}
                    alt={filteredImages[currentImageIndex].title}
                    className="w-full h-auto object-contain bg-white max-h-[700px]"
                  />
                  
                  {/* Navigation Arrows */}
                  {filteredImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  {filteredImages.length > 1 && (
                    <div className="absolute bottom-8 right-8 bg-black/80 text-white px-6 py-3 rounded-2xl text-base font-medium">
                      {currentImageIndex + 1} / {filteredImages.length}
                    </div>
                  )}
                </div>
                
                <div className="card-spacing">
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-2xl text-base font-medium">
                      {filteredImages[currentImageIndex].category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-3xl font-medium text-dental mb-6">
                    {filteredImages[currentImageIndex].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xl">
                    {filteredImages[currentImageIndex].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Thumbnails - larger and more spaced */}
        {filteredImages.length > 1 && (
          <div className="flex justify-center gap-6 mb-20 overflow-x-auto pb-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-28 h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border-3 transition-all duration-300 hover:scale-110 ${
                  index === currentImageIndex
                    ? "border-blue-700 shadow-lg"
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

        {/* CTA Section - simplified */}
        <div className="text-center bg-white rounded-3xl p-16 shadow-lg border border-gray-100">
          <h3 className="text-3xl lg:text-4xl font-light text-dental mb-8">
            ต้องการผลลัพธ์แบบนี้เหมือนกัน? 
          </h3>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            ปรึกษาทันตแพทย์ผู้เชี่ยวชาญของเราได้ฟรี
          </p>
          <Button 
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-6 h-auto text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl"
          >
            <Facebook className="w-6 h-6 mr-4" />
            ปรึกษาฟรีทาง Facebook
          </Button>
        </div>
      </div>
    </section>
  );
};
