import type { Product } from "@/lib/types";
import Button from "../Button";
import { Plus } from "lucide-react";

interface Props {
  product: Product;
  onAddToCart: (item: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div
      key={product.id}
      className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4"
    >
      <img
        src={product.imgUrl}
        alt={product.name}
        className="h-40 w-full rounded-lg object-cover"
      />
      <div>
        <p className="text-lg font-medium">{product.name}</p>
        <p className="mb-3 text-sm font-normal text-[#6A7282]">
          {product.category.name}
        </p>
        <p className="text-base font-medium text-[#00A63E]">${product.price}</p>
      </div>
      <Button
        variant="filled"
        className="mt-auto flex w-full items-center justify-center gap-4"
        onClick={() => onAddToCart(product)}
      >
        <Plus className="h-4 w-4" />
        <span>Add to cart</span>
      </Button>
    </div>
  );
}
