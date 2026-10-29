import type { Category } from "@/features/categories/types";

export interface Product {
  id: string;
  imgUrl: string;
  name: string;
  category: Category;
  price: number;
  isActive: boolean;
}

export interface CartItem {
  product: Product;
  unitPrice: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

export interface MerchantProfile {
  id: string;
  name: string;
  currency: string;
  country: string;
  language: string;
  tax: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  merchantId: string;
  merchant: MerchantProfile;
}

export interface LoginPayload {
  email: string;
  password: string;
}
