import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
