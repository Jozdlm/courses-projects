import { Minus, Plus, Trash } from "lucide-react";
import Button from "../Button";
import { formatCurrency } from "@/lib/utils";
import type { CartItem } from "@/lib/types";

interface Props {
  item: CartItem;
  currency: string;
  lang: string;
  onRemoveItem: (productId: string) => void;
  onIncreaseQty: (productId: string) => void;
  onDecreaseQty: (productId: string) => void;
  onQtyChange: (productId: string, newQty: number) => void;
}

export default function CartItem({
  item,
  currency,
  lang,
  onDecreaseQty,
  onIncreaseQty,
  onRemoveItem,
  onQtyChange,
}: Props) {
  return (
    <div className="flex justify-between rounded-xl bg-[#F9FAFB] p-3">
      <div>
        <p className="text-base font-medium">{item.product.name}</p>
        <p className="text-sm font-normal text-[#4A5565]">
          {formatCurrency(item.unitPrice, currency, lang)}
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="bg-transparent p-2"
          onClick={() => onDecreaseQty(item.product.id)}
        >
          <Minus className="h-4" />
        </Button>
        <input
          type="text"
          value={item.quantity}
          onChange={(e) => onQtyChange(item.product.id, Number(e.target.value))}
          className="w-16 rounded-lg bg-[#F3F3F5] text-center"
        />
        <Button
          variant="outline"
          className="bg-transparent p-2"
          onClick={() => onIncreaseQty(item.product.id)}
        >
          <Plus className="h-4" />
        </Button>
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => onRemoveItem(item.product.id)}
        >
          <Trash className="h-4 text-[#FB2C36]" />
        </Button>
      </div>
    </div>
  );
}
