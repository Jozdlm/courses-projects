import type { CartAction } from "@/lib/cart-reducer";
import type { Cart } from "@/lib/types";
import { createContext, useContext } from "react";

export const CartContext = createContext<Cart | null>(null);
export const CartDispatchContext = createContext<React.ActionDispatch<
  [action: CartAction]
> | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (ctx === null)
    throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext);
  if (ctx === null)
    throw new Error("useCartDispatch must be used inside <CartProvider>");
  return ctx;
}
