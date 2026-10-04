import { getProductList } from "@/lib/actions";
import type { Product } from "@/lib/types";
import Cart from "@/ui/pos-terminal/Cart";
import ProductFilter from "@/ui/pos-terminal/ProductFilter";
import ProductList from "@/ui/pos-terminal/ProductList";

export default function POSTerminal() {
  const products: Product[] = getProductList();

  return (
    <section className="grid grid-cols-[1fr_400px] gap-6">
      <div className="grid grid-flow-row grid-rows-[content-fit_1fr] gap-4">
        <ProductFilter />
        <ProductList products={products} />
      </div>
      <Cart />
    </section>
  );
}
