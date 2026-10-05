import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import Button from "../Button";
import type { Cart } from "@/lib/types";
import { formatPercent } from "@/lib/utils";

interface Props {
  cart: Cart;
  merchantTax: number;
  onClearCart: () => void;
  onRemoveItem: (productId: string) => void;
}

export default function OrderSummary({
  cart,
  onClearCart,
  onRemoveItem,
  merchantTax,
}: Props) {
  return (
    <section className="grid grid-rows-[auto_1fr_auto] gap-6 self-start rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-5" />
          <p className="text-base leading-6 font-normal">Current Order</p>
        </div>
        <Button variant="ghost" className="px-3 py-1.5" onClick={onClearCart}>
          Clear
        </Button>
      </div>
      <div>
        <div className="mb-4 flex flex-col gap-3">
          {cart.items.map((item) => (
            <div className="flex justify-between rounded-xl bg-[#F9FAFB] p-3">
              <div>
                <p className="text-base font-medium">{item.product.name}</p>
                <p className="text-sm font-normal text-[#4A5565]">
                  ${item.unitPrice}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="bg-transparent p-2">
                  <Minus className="h-4" />
                </Button>
                <input
                  type="text"
                  defaultValue={1}
                  className="w-16 rounded-lg bg-[#F3F3F5] text-center"
                />
                <Button variant="outline" className="bg-transparent p-2">
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
          ))}
        </div>
        <div className="border-t border-t-gray-300 pt-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[#4A5565]">Subtotal</p>
            <p>${cart.subtotal}</p>
          </div>
          <div className="flex items-center justify-between border-b border-b-gray-300 pb-2">
            <p className="text-[#4A5565]">Tax ({formatPercent(merchantTax)})</p>
            <p>${cart.tax}</p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <p>Total</p>
            <p className="text-[#00A63E]">${cart.total}</p>
          </div>
        </div>
      </div>
      <Button variant="filled" className="w-full py-3">
        Checkout - $3.51
      </Button>
    </section>
  );
}
