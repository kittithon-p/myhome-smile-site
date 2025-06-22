
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-20">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
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
  );
};
