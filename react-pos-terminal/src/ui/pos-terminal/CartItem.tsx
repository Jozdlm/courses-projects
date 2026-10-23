import { Minus, Plus, Trash } from "lucide-react";
import Button from "../Button";
import { formatCurrency } from "@/lib/utils";
import type { CartItem } from "@/lib/types";
import { useCartDispatch } from "@/context/CartContext";
import { useMerchant } from "@/hooks/use-merchant";

interface Props {
  item: CartItem;
}

export default function CartItem({ item }: Props) {
  const { currency, language } = useMerchant();
  const dispatch = useCartDispatch();

  return (
    <div className="flex justify-between rounded-xl bg-[#F9FAFB] p-3">
      <div>
        <p className="text-base font-medium">{item.product.name}</p>
        <p className="text-sm font-normal text-[#4A5565]">
          {formatCurrency(item.unitPrice, currency, language)}
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="bg-transparent p-2"
          onClick={() =>
            dispatch({ type: "DECREASE_QTY", payload: item.product.id })
          }
        >
          <Minus className="h-4" />
        </Button>
        <input
          type="text"
          value={item.quantity}
          onChange={(e) =>
            dispatch({
              type: "SET_QTY",
              payload: {
                productId: item.product.id,
                quantity: Number(e.target.value),
              },
            })
          }
          className="w-16 rounded-lg bg-[#F3F3F5] text-center"
        />
        <Button
          variant="outline"
          className="bg-transparent p-2"
          onClick={() =>
            dispatch({ type: "INCREASE_QTY", payload: item.product.id })
          }
        >
          <Plus className="h-4" />
        </Button>
        <Button
          variant="ghost"
          className="p-2"
          onClick={() =>
            dispatch({ type: "REMOVE_ITEM", payload: item.product.id })
          }
        >
          <Trash className="h-4 text-[#FB2C36]" />
        </Button>
      </div>
    </div>
  );
}
