import type { Category } from "@/lib/types";
import { Search } from "lucide-react";
import { useState } from "react";
import Button from "../Button";

const categories: Category[] = [
  { name: "Coffe" },
  { name: "Pastry" },
  { name: "Food" },
  { name: "Beverage" },
];

export default function ProductFilter() {
  const defaultOption: Category = { name: "All" };
  const filterItems: Category[] = [defaultOption, ...categories];
  const [selectedCategory, setSelectedCategory] = useState<string>(
    defaultOption.name,
  );

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
            key={item.name}
            variant={item.name === selectedCategory ? "filled" : "outline"}
            onClick={() => setSelectedCategory(item.name)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
