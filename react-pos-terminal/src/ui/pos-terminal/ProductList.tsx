import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  if (products.length === 0) {
    return (
      <div
        role="status"
        className="flex min-h-60 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 text-center text-sm text-gray-500"
      >
        <p>No products found. Try a different search or category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
