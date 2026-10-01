import clsx from "clsx";
import { useState } from "react";

interface Category {
  name: string;
}

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
    <div className="flex w-full gap-2 rounded-xl border border-gray-200 bg-white p-4">
      {filterItems.map((item) => (
        <button
          className={clsx(
            "cursor-pointer rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition-colors ease-in",
            {
              "border-transparent bg-[#030213] text-white transition-colors ease-out":
                item.name === selectedCategory,
            },
          )}
          onClick={() => setSelectedCategory(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
