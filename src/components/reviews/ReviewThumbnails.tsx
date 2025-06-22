
import { ReviewImage } from "./ReviewImageData";

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
    <div className="flex justify-center gap-6 mb-20 overflow-x-auto pb-4">
      {images.map((image, index) => (
        <button
          key={image.id}
          onClick={() => onImageSelect(index)}
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
  );
};
