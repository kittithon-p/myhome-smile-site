
import { useState } from "react";
import { Star, Heart, Eye, Award } from "lucide-react";
import { reviewImages, categories } from "./reviews/ReviewImageData";
import { CategoryFilter } from "./reviews/CategoryFilter";
import { ReviewImageCarousel } from "./reviews/ReviewImageCarousel";
import { ReviewThumbnails } from "./reviews/ReviewThumbnails";
import { ReviewCTA } from "./reviews/ReviewCTA";

const ReviewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "ทั้งหมด" 
    ? reviewImages 
    : reviewImages.filter(img => img.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleImageSelect = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="reviews" className="section-spacing bg-gradient-to-br from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8F4F8' fill-opacity='0.3'%3E%3Cpath d='M25 0C25 13.8 13.8 25 0 25C13.8 25 25 36.2 25 50C25 36.2 36.2 25 50 25C36.2 25 25 13.8 25 0Z' fill-opacity='0.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container-spacing relative z-10">
        {/* Section Header */}
        <div className="text-center element-spacing max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft mb-6">
            <Eye className="w-5 h-5 text-dental-primary mr-2" />
            <span className="text-caption font-medium text-dental-primary uppercase tracking-wider">
              ผลงานจริง
            </span>
          </div>
          
          <h2 className="heading-section mb-6">
            ผลงานการรักษา
            <br />
            <span className="bg-gradient-to-r from-dental-primary to-dental-secondary bg-clip-text text-transparent">
              จากลูกค้าจริง
            </span>
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            ชมผลงานการรักษาจริงจากลูกค้าของเรา 
            ที่ได้รับการดูแลด้วยความใส่ใจและเทคโนโลยีทันสมัย
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center text-caption text-dental-light">
              <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
              <span>ผลงานคุณภาพสูง</span>
            </div>
            <div className="w-1 h-1 bg-dental-light rounded-full"></div>
            <div className="flex items-center text-caption text-dental-light">
              <Award className="w-4 h-4 text-dental-primary mr-1" />
              <span>มาตรฐานสากล</span>
            </div>
          </div>
        </div>

        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <ReviewImageCarousel 
          images={filteredImages}
          currentImageIndex={currentImageIndex}
          onNext={nextImage}
          onPrev={prevImage}
        />

        <ReviewThumbnails 
          images={filteredImages}
          currentImageIndex={currentImageIndex}
          onImageSelect={handleImageSelect}
        />

        <ReviewCTA />
      </div>
    </section>
  );
};

export default ReviewsSection;
