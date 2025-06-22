
export interface ReviewImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

export const reviewImages: ReviewImage[] = [
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

export const categories = ["ทั้งหมด", "ฟันปลอม", "อุดฟัน", "ขูดหินปูน", "ฟอกสีฟัน", "ครอบฟัน", "วิเนียร์"];
