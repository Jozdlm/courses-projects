import { getCategoryList, getProductList } from "@/lib/actions";
import type { Category, Product } from "@/lib/types";
import Cart from "@/ui/pos-terminal/Cart";
import CategoryFilter from "@/ui/pos-terminal/CategoryFilter";
import ProductList from "@/ui/pos-terminal/ProductList";
import { Search } from "lucide-react";
import { useState } from "react";

export default function POSTerminal() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const products: Product[] = getProductList();
  const categories: Category[] = getCategoryList();

  function handleSelectCategory(option: string) {
    setSelectedCategory(option);
  }

  return (
    <section className="grid grid-cols-[1fr_400px] gap-6">
      <div className="grid grid-flow-row grid-rows-[content-fit_1fr] gap-4">
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
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={handleSelectCategory}
          />
        </div>
        <ProductList products={products} />
      </div>
      <Cart />
    </section>
  );
}
