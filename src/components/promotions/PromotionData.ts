
export interface Promotion {
  id: number;
  title: string;
  discount: string;
  originalPrice: string;
  salePrice: string;
  description: string;
  validUntil: string;
  isHot: boolean;
  isNew: boolean;
  isPopular: boolean;
  gradient: string;
  image: string;
  endDate: string;
}

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "แพ็กเกจจัดฟันใส",
    discount: "ลด 30%",
    originalPrice: "80,000",
    salePrice: "56,000",
    description: "จัดฟันใสแบบครบวงจร รวมถอนฟันคุด",
    validUntil: "31 ธันวาคม 2024",
    isHot: true,
    isNew: false,
    isPopular: true,
    gradient: "from-red-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop",
    endDate: "2024-12-31"
  },
  {
    id: 2,
    title: "ฟอกสีฟัน + ขูดหินปูน",
    discount: "ลด 50%",
    originalPrice: "3,000",
    salePrice: "1,500",
    description: "ฟอกสีฟัน Laser + ขูดหินปูน ในราคาพิเศษ",
    validUntil: "15 มกราคม 2025",
    isHot: false,
    isNew: true,
    isPopular: false,
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    endDate: "2025-01-15"
  },
  {
    id: 3,
    title: "รากฟันเทียม + ครอบฟัน",
    discount: "ลด 25%",
    originalPrice: "60,000",
    salePrice: "45,000",
    description: "รากฟันเทียมแท้ 100% รวมครอบฟันเซรามิก",
    validUntil: "28 กุมภาพันธ์ 2025",
    isHot: true,
    isNew: false,
    isPopular: false,
    gradient: "from-purple-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1606811843722-d80b4b3fb5e5?w=400&h=300&fit=crop",
    endDate: "2025-02-28"
  },
  {
    id: 4,
    title: "ตรวจฟันฟรี + เคลียร์ปัญหา",
    discount: "ฟรี!",
    originalPrice: "500",
    salePrice: "0",
    description: "ตรวจสุขภาพฟันฟรี สำหรับลูกค้าใหม่",
    validUntil: "31 มีนาคม 2025",
    isHot: false,
    isNew: false,
    isPopular: true,
    gradient: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
    endDate: "2025-03-31"
  }
];
