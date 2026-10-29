import { Button } from "@/components/ui/button";
import { useCategories } from "@/features/products/use-categories";

interface Props {
  selectedCategory: string | null;
  onSelect: (categoryId: string | null) => void;
}

export default function CategoryFilter({ selectedCategory, onSelect }: Props) {
  const { data: categories } = useCategories();
  return (
    <div className="flex gap-2">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="lg"
        onClick={() => onSelect(null)}
      >
        All
      </Button>
      {categories &&
        categories.map((category) => (
          <Button
            key={category.id}
            variant={category.id === selectedCategory ? "default" : "outline"}
            size="lg"
            onClick={() => onSelect(category.id)}
          >
            {category.name}
          </Button>
        ))}
    </div>
  );
}
