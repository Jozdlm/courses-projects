import type { Category } from "@/lib/types";
import Button from "../Button";

interface Props {
  categories: Category[];
  selectedCategory: string | null;
  onSelect: (categoryId: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: Props) {
  return (
    <div className="flex gap-2">
      <Button
        variant={selectedCategory === null ? "filled" : "outline"}
        onClick={() => onSelect(null)}
      >
        All
      </Button>
      {categories.map((category) => (
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
