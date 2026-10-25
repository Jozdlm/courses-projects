import OrderSummary from "@/ui/pos-terminal/OrderSummary";
import CategoryFilter from "@/ui/pos-terminal/CategoryFilter";
import ProductList from "@/ui/pos-terminal/ProductList";
import SearchBar from "@/components/SearchBar";
import { useProducts } from "@/hooks/useProducts";
import { useProductFilter } from "@/hooks/useProductFilter";

export default function POSTerminal() {
  const { products } = useProducts();

  const {
    query,
    setQuery,
    selectedCategoryId,
    setSelectedCategoryId,
    filteredProducts,
  } = useProductFilter(products);

  return (
    <section className="grid grid-cols-[1fr_400px] gap-6">
      <div className="grid grid-flow-row grid-rows-[min-content_1fr] gap-4">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <SearchBar value={query} onSearch={setQuery} />
          <CategoryFilter
            selectedCategory={selectedCategoryId}
            onSelect={setSelectedCategoryId}
          />
        </div>
        <ProductList products={filteredProducts} />
      </div>
      <OrderSummary />
    </section>
  );
}
