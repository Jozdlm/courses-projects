export interface Product {
  id: string;
  imgUrl: string;
  name: string;
  category: Category;
  price: number;
}

export interface Category {
  id: string;
  name: string;
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
  tax: number;
}
