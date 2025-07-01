
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Calendar, Award } from "lucide-react";
import { ReviewImage } from "./ReviewImageData";
import { EnhancedImage } from "./EnhancedImage";

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
      <Card className="overflow-hidden shadow-2xl border-0 bg-white rounded-3xl">
        <CardContent className="p-0">
          <div className="relative">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
              <EnhancedImage
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full max-h-[600px]"
                aspectRatio="aspect-auto"
              />
              
              {/* Professional watermark */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium opacity-80">
                ผลงานจริงจากคลินิก
              </div>
            </div>
            
            {/* Enhanced Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-dental-primary p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm border border-white/50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-dental-primary p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm border border-white/50"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            {/* Enhanced Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-6 right-6 bg-dental-primary/90 backdrop-blur-sm text-white px-6 py-3 rounded-2xl text-base font-medium shadow-lg">
                <span className="text-white/80">รูปที่</span> {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
          
          <div className="p-8 bg-gradient-to-br from-white to-gray-50/50">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center bg-dental-primary text-white px-6 py-3 rounded-2xl text-base font-medium shadow-md">
                  <Award className="w-4 h-4 mr-2" />
                  {currentImage.category}
                </span>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Calendar className="w-4 h-4 text-dental-light mr-2" />
                  <span className="text-sm text-dental-light">ผลงานล่าสุด</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
                ))}
                <span className="ml-2 text-sm text-dental-light font-medium">คุณภาพสูง</span>
              </div>
            </div>
            
            <h3 className="text-3xl font-semibold text-dental mb-6 leading-tight">
              {currentImage.title}
            </h3>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm">
              <p className="text-dental-light leading-relaxed text-lg">
                {currentImage.description}
              </p>
              
              {/* Professional badges */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  ✓ รับรอง FDA
                </div>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  ✓ มาตรฐานสากล
                </div>
                <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  ✓ ผลลัพธ์จริง
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
