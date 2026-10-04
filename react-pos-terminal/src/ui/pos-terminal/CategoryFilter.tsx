import type { Category } from "@/lib/types";
import Button from "../Button";

interface Props {
  categories: Category[];
  selectedCategory: string;
  onSelect: (categoryId: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: Props) {
  categories = [{ id: "All", name: "All" }, ...categories];
  return (
    <div className="flex gap-2">
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
