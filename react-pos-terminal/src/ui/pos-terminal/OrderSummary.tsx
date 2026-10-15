import { ShoppingCart } from "lucide-react";
import Button from "../Button";
import type { Cart } from "@/lib/types";
import { formatCurrency, formatPercent } from "@/lib/utils";
import CartItem from "./CartItem";
import { useContext } from "react";
import { MerchantContext } from "@/context/MerchantContext";

interface Props {
  cart: Cart;
  onClearCart: () => void;
  onRemoveItem: (productId: string) => void;
  onIncreaseQty: (productId: string) => void;
  onDecreaseQty: (productId: string) => void;
  onQtyChange: (productId: string, newQty: number) => void;
}

export default function OrderSummary({
  cart,
  onClearCart,
  onRemoveItem,
  onIncreaseQty,
  onDecreaseQty,
  onQtyChange,
}: Props) {
  const { currency, language, tax } = useContext(MerchantContext);

  return (
    <section className="grid grid-rows-[auto_1fr] gap-6 self-start rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart size={20} />
          <p className="text-base leading-6 font-normal">Current Order</p>
        </div>
        {cart.items.length > 0 && (
          <Button variant="ghost" className="px-3 py-1.5" onClick={onClearCart}>
            Clear
          </Button>
        )}
      </div>
      {cart.items.length > 0 && (
        <div>
          <div className="mb-6 flex flex-col gap-3">
            {cart.items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                currency={currency}
                lang={language}
                onRemoveItem={onRemoveItem}
                onDecreaseQty={onDecreaseQty}
                onIncreaseQty={onIncreaseQty}
                onQtyChange={onQtyChange}
              />
            ))}
          </div>
          <div className="mb-6">
            <div className="border-b border-b-gray-300 font-medium">
              <div className="mb-2 flex items-center justify-between text-sm">
                <p className="text-sm text-[#4A5565]">Subtotal</p>
                <p>{formatCurrency(cart.subtotal, currency, language)}</p>
              </div>
              <div className="flex items-center justify-between pb-2 text-sm">
                <p className="text-[#4A5565]">Tax ({formatPercent(tax)})</p>
                <p>{formatCurrency(cart.tax, currency, language)}</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <p>Total</p>
              <p className="text-[#00A63E]">
                {formatCurrency(cart.total, currency, language)}
              </p>
            </div>
          </div>
          <Button variant="filled" className="w-full py-3">
            Checkout - {formatCurrency(cart.total, currency, language)}
          </Button>
        </div>
      )}
      {cart.items.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
          <ShoppingCart size={48} />
          <p className="text-center font-medium">Cart Empty</p>
        </div>
      )}
    </section>
  );
}
