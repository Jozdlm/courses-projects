import type { Category } from "@/lib/types";
import { useState } from "react";
import Button from "../Button";

interface Props {
  categories: Category[];
}

export default function CategoryFilter({ categories }: Props) {
  const defaultOption: string = "All";
  const categoriesName: string[] = categories.map((item) => item.name);
  const filterItems: string[] = [defaultOption, ...categoriesName];
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultOption);

  return (
    <div className="flex gap-2">
      {filterItems.map((item) => (
        <Button
          key={item}
          variant={item === selectedCategory ? "filled" : "outline"}
          onClick={() => setSelectedCategory(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
