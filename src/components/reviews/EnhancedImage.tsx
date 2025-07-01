
import { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { ImageOff } from "lucide-react";

interface EnhancedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const EnhancedImage = ({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "aspect-[4/3]" 
}: EnhancedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`${aspectRatio} ${className} bg-gray-100 rounded-xl flex items-center justify-center border-2 border-gray-200`}>
        <div className="text-center text-gray-400">
          <ImageOff className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">ไม่สามารถโหลดรูปภาพได้</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${aspectRatio} ${className} rounded-xl overflow-hidden border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300`}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-all duration-300 hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
        }}
        loading="lazy"
      />
      
      {/* Professional overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Quality enhancement overlay */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-dental-primary opacity-0 hover:opacity-100 transition-opacity duration-300">
        คุณภาพสูง
      </div>
    </div>
  );
};
