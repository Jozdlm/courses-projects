import { Plus } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { useMerchant } from "@/hooks/use-merchant";
import { useCartDispatch } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import type { Product } from "@/features/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { currency, language } = useMerchant();
  const dispatch = useCartDispatch();

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
        <p className="text-base font-medium text-[#00A63E]">
          {formatCurrency(product.price, currency, language)}
        </p>
      </div>
      <Button
        size="lg"
        className="mt-auto w-full"
        onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
      >
        <Plus className="h-4 w-4" data-icon="inline-start" />
        Add to cart
      </Button>
    </div>
  );
}
