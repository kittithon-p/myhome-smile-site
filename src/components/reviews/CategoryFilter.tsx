
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="mb-20">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-8 py-4 rounded-2xl text-base font-medium transition-all duration-200 shadow-soft hover:shadow-strong ${
              selectedCategory === category
                ? "bg-dental-primary text-white hover:bg-dental-primary-hover"
                : "bg-white text-dental-light border-2 border-gray-200 hover:bg-gray-50 hover:border-dental-primary/30 hover:text-dental-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
