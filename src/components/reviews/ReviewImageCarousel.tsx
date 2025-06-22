
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewImage } from "./ReviewImageData";

interface ReviewImageCarouselProps {
  images: ReviewImage[];
  currentImageIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export const ReviewImageCarousel = ({ 
  images, 
  currentImageIndex, 
  onNext, 
  onPrev 
}: ReviewImageCarouselProps) => {
  if (images.length === 0) return null;

  const currentImage = images[currentImageIndex];

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <Card className="overflow-hidden shadow-xl border-0 bg-white rounded-3xl">
        <CardContent className="p-0">
          <div className="relative">
            <img 
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-auto object-contain bg-white max-h-[700px]"
            />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
            
            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-8 right-8 bg-black/80 text-white px-6 py-3 rounded-2xl text-base font-medium">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
          
          <div className="card-spacing">
            <div className="flex items-center justify-between mb-8">
              <span className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-2xl text-base font-medium">
                {currentImage.category}
              </span>
              <div className="flex items-center text-yellow-500">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <h3 className="text-3xl font-medium text-dental mb-6">
              {currentImage.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-xl">
              {currentImage.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
