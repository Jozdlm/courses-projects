import { Minus, Plus, Trash } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import type { CartItem } from "@/lib/types";
import { useCartDispatch } from "@/context/CartContext";
import { useMerchant } from "@/hooks/use-merchant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  item: CartItem;
}

export default function CartItem({ item }: Props) {
  const { currency, language } = useMerchant();
  const dispatch = useCartDispatch();

  return (
    <div className="flex items-center justify-between rounded-xl bg-[#F9FAFB] p-3">
      <div>
        <p className="text-base font-medium">{item.product.name}</p>
        <p className="text-sm font-normal text-[#4A5565]">
          {formatCurrency(item.unitPrice, currency, language)}
        </p>
      </div>
      <div className="items-strech flex h-10 gap-2">
        <Button
          variant="outline"
          size="icon-lg"
          className="h-full bg-transparent"
          onClick={() =>
            dispatch({ type: "DECREASE_QTY", payload: item.product.id })
          }
        >
          <Minus className="h-4" />
        </Button>
        <Input
          type="text"
          className="h-full w-16 text-center"
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
        />
        <Button
          variant="outline"
          size="icon-lg"
          className="h-full bg-transparent"
          onClick={() =>
            dispatch({ type: "INCREASE_QTY", payload: item.product.id })
          }
        >
          <Plus />
        </Button>
        <Button
          variant="destructive"
          size="icon-lg"
          className="h-full"
          onClick={() =>
            dispatch({ type: "REMOVE_ITEM", payload: item.product.id })
          }
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
}
