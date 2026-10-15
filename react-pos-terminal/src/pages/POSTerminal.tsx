import { getCategoryList, getProductList } from "@/lib/actions";
import type { Category, Product } from "@/lib/types";
import OrderSummary from "@/ui/pos-terminal/OrderSummary";
import CategoryFilter from "@/ui/pos-terminal/CategoryFilter";
import ProductList from "@/ui/pos-terminal/ProductList";
import SearchBar from "@/ui/SearchBar";
import { useEffect, useState } from "react";
import { CartProvider } from "@/context/CartProvider";

export default function POSTerminal() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  // SERVER REQUESTS
  useEffect(() => {
    getCategoryList().then(setCategories);
    getProductList().then(setProducts);
  }, []);

  // FILTERS
  function handleSelectCategory(option: string | null) {
    setSelectedCategory(option);
  }

  function handleSearchProduct(query: string) {
    setQuery(query);
  }

  const filteredProducts = products.filter((product) => {
    const normalize = (s: string) => s.toLowerCase().trim();
    const isMatchingQuery = normalize(product.name).includes(normalize(query));
    const isMatchingCategory = selectedCategory === product.category.id;
    return (
      (isMatchingQuery && isMatchingCategory) ||
      (selectedCategory === null && isMatchingQuery)
    );
  });

  return (
    <CartProvider>
      <section className="grid grid-cols-[1fr_400px] gap-6">
        <div className="grid grid-flow-row grid-rows-[min-content_1fr] gap-4">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <SearchBar value={query} onSearch={handleSearchProduct} />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={handleSelectCategory}
            />
          </div>
          <ProductList products={filteredProducts} />
        </div>
        <OrderSummary />
      </section>
    </CartProvider>
  );
}
