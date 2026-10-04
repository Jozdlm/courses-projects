import { products } from "@/lib/placeholder-data";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
