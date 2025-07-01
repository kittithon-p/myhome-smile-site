
import { ReviewImage } from "./ReviewImageData";
import { EnhancedImage } from "./EnhancedImage";

interface ReviewThumbnailsProps {
  images: ReviewImage[];
  currentImageIndex: number;
  onImageSelect: (index: number) => void;
}

export const ReviewThumbnails = ({ 
  images, 
  currentImageIndex, 
  onImageSelect 
}: ReviewThumbnailsProps) => {
  if (images.length <= 1) return null;

  return (
    <div className="mb-20">
      <div className="flex justify-center mb-6">
        <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-soft border border-white/50">
          <p className="text-dental-light text-center font-medium">
            คลิกเพื่อดูผลงานอื่น ๆ ({images.length} รูป)
          </p>
        </div>
      </div>
      
      <div className="flex justify-center gap-4 overflow-x-auto pb-4 px-4">
        <div className="flex gap-4 min-w-max">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => onImageSelect(index)}
              className={`flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg group ${
                index === currentImageIndex
                  ? "ring-4 ring-dental-primary shadow-xl scale-105"
                  : "ring-2 ring-gray-200 hover:ring-dental-primary/50"
              }`}
            >
              <EnhancedImage
                src={image.src}
                alt={image.title}
                className="w-full h-full"
                aspectRatio="aspect-square"
              />
              
              {/* Category badge on thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                <span className="text-white text-xs font-medium px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  {image.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
