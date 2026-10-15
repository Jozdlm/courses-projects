import { useEffect, useReducer } from "react";
import { CartContext, CartDispatchContext } from "./CartContext";
import { cartReducer, getCartInitialState } from "@/lib/cart-reducer";
import type { Cart } from "@/lib/types";
import { useMerchant } from "./MerchantContext";

export function CartProvider({ children }: React.PropsWithChildren) {
  const { tax: merchantTax } = useMerchant();
  const [cartState, dispatch] = useReducer(
    cartReducer,
    undefined,
    getCartInitialState,
  );

  // SIDE EFFECTS
  useEffect(() => {
    localStorage.setItem("cart-state", JSON.stringify(cartState));
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
