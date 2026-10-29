import type { Product } from "@/features/products/";
import type { CartItem } from "./types";

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INCREASE_QTY"; payload: string }
  | { type: "DECREASE_QTY"; payload: string }
  | { type: "SET_QTY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" };

export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.payload;
      const exists = state.items.find((item) => item.product.id === product.id);

      if (exists) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.product.id !== product.id) return item;
            return { ...item, quantity: item.quantity + 1 };
          }),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { product, unitPrice: product.price, quantity: 1 },
        ],
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.product.id != action.payload),
      };
    }
    case "INCREASE_QTY": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.product.id !== action.payload) return item;
          return { ...item, quantity: item.quantity + 1 };
        }),
      };
    }
    case "DECREASE_QTY": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.product.id !== action.payload) return item;
          return { ...item, quantity: Math.max(1, item.quantity - 1) };
        }),
      };
    }
    case "SET_QTY": {
      const { productId, quantity } = action.payload;

      if (!Number.isFinite(quantity)) return state;

      return {
        ...state,
        items: state.items.map((item) => {
          if (item.product.id !== productId) return item;
          return { ...item, quantity: Math.max(1, quantity) };
        }),
      };
    }
    case "CLEAR_CART": {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
};
