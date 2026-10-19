import type { CartState } from "./cart-reducer";
import { cartStateSchema } from "./schemas";

const CART_STORAGE_KEY = "cart-state";

export const loadCartState = (): CartState => {
  const cartState: CartState = { items: [] };
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return cartState;
    const result = cartStateSchema.safeParse(JSON.parse(raw));
    if (result.error) {
      return cartState;
    }
    return result.data;
  } catch (error) {
    return cartState;
  }
};

export const saveCartSate = (state: CartState) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // TODO: IMPLEMENTS ERROR HANDLING
  }
};
