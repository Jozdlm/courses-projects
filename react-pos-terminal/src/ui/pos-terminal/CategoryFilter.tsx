import { useCategories } from "@/hooks/use-categories";
import Button from "../Button";

interface Props {
  selectedCategory: string | null;
  onSelect: (categoryId: string | null) => void;
}

export default function CategoryFilter({ selectedCategory, onSelect }: Props) {
  const { data: categories } = useCategories();
  return (
    <div className="flex gap-2">
      <Button
        variant={selectedCategory === null ? "filled" : "outline"}
        onClick={() => onSelect(null)}
      >
        All
      </Button>
      {categories &&
        categories.map((category) => (
          <Button
            key={category.id}
            variant={category.id === selectedCategory ? "filled" : "outline"}
            onClick={() => onSelect(category.id)}
          >
            {category.name}
          </Button>
        ))}
    </div>
  );
}
