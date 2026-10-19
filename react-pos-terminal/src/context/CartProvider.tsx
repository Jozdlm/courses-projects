import { useEffect, useReducer } from "react";
import { CartContext, CartDispatchContext } from "./CartContext";
import { cartReducer } from "@/lib/cart-reducer";
import type { Cart } from "@/lib/types";
import { useMerchant } from "./MerchantContext";
import { loadCartState, saveCartSate } from "@/lib/cart-storage";

export function CartProvider({ children }: React.PropsWithChildren) {
  const { tax: merchantTax } = useMerchant();
  const [cartState, dispatch] = useReducer(
    cartReducer,
    undefined,
    loadCartState,
  );

  // SIDE EFFECTS
  useEffect(() => {
    saveCartSate(cartState);
  }, [cartState]);

  // CART
  const subtotal = cartState.items.reduce(
    (acc, curr) => acc + curr.quantity * curr.unitPrice,
    0,
  );
  const tax = subtotal * merchantTax;
  const cart: Cart = {
    items: cartState.items,
    subtotal,
    tax,
    total: subtotal + tax,
  };

  return (
    <CartContext value={cart}>
      <CartDispatchContext value={dispatch}>{children}</CartDispatchContext>
    </CartContext>
  );
}
