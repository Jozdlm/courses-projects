import OrderSummary from "@/components/pos-terminal/OrderSummary";
import CategoryFilter from "@/components/pos-terminal/CategoryFilter";
import ProductList from "@/components/pos-terminal/ProductList";
import SearchBar from "@/components/SearchBar";
import { useProductFilter } from "@/hooks/useProductFilter";
import { useProducts } from "@/features/products/";

export default function POSTerminal() {
  const { products } = useProducts();
  const {
    query,
    setQuery,
    selectedCategoryId,
    setSelectedCategoryId,
    filteredProducts,
    clearSearchAndFilter,
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
        <ProductList
          products={filteredProducts}
          onClearFilter={clearSearchAndFilter}
        />
      </div>
      <OrderSummary />
    </section>
  );
}
