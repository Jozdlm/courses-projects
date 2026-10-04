import type { Category } from "@/lib/types";
import { Search } from "lucide-react";
import { useState } from "react";
import Button from "../Button";

interface Props {
  categories: Category[];
}

export default function ProductFilter({ categories }: Props) {
  const defaultOption: string = "All";
  const categoriesName: string[] = categories.map((item) => item.name);
  const filterItems: string[] = [defaultOption, ...categoriesName];
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultOption);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 transition focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-200">
        <Search className="h-4 w-4 shrink-0 text-[#99A1AF]" />
        <input
          type="text"
          aria-label="Search products"
          placeholder="Search products..."
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#99A1AF]"
        />
      </div>
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
    </div>
  );
}
