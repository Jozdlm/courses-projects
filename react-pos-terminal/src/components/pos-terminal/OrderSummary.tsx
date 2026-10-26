import { ShoppingCartIcon } from "lucide-react";
import { formatCurrency, formatPercent } from "@/lib/utils";
import CartItem from "./CartItem";
import { useMerchant } from "@/hooks/use-merchant";
import { useCart, useCartDispatch } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function OrderSummary() {
  const { currency, language, tax } = useMerchant();
  const cart = useCart();
  const dispatch = useCartDispatch();

  return (
    <section className="grid grid-rows-[auto_1fr] gap-6 self-start rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCartIcon className="size-4" />
          <p className="text-base leading-6 font-normal">Current Order</p>
        </div>
        {cart.items.length > 0 && (
          <Button
            variant="ghost"
            size="lg"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Clear
          </Button>
        )}
      </div>
      {cart.items.length > 0 && (
        <div>
          <div className="mb-6 flex flex-col gap-3">
            {cart.items.map((item) => (
              <CartItem key={item.product.id} item={item} />
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
          <Button size="lg" className="h-12 w-full">
            Checkout - {formatCurrency(cart.total, currency, language)}
          </Button>
        </div>
      )}
      {cart.items.length === 0 && (
        <div className="flex items-center justify-center">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <ShoppingCartIcon />
              </EmptyMedia>
              <EmptyTitle>Cart Empty</EmptyTitle>
              <EmptyDescription>
                You haven't added a product to your cart yet. Search by name or
                filter by category.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>Click "Add to cart" in any product.</EmptyContent>
          </Empty>
        </div>
      )}
    </section>
  );
}
