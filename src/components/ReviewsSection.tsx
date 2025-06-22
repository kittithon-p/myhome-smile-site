
import { useState } from "react";
import { reviewImages, categories } from "./reviews/ReviewImageData";
import { CategoryFilter } from "./reviews/CategoryFilter";
import { ReviewImageCarousel } from "./reviews/ReviewImageCarousel";
import { ReviewThumbnails } from "./reviews/ReviewThumbnails";
import { ReviewCTA } from "./reviews/ReviewCTA";

export const ReviewsSection = () => {
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
