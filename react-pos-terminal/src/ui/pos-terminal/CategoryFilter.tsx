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
  return (
    <div className="flex gap-2">
      <Button
        variant={"All" === selectedCategory ? "filled" : "outline"}
        onClick={() => onSelect("All")}
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
