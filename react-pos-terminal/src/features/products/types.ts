export interface Category {
  id: string;
  name: string;
  isActive: boolean;
  merchantId: string;
}

export interface Product {
  id: string;
  imgUrl: string;
  name: string;
  category: Category;
  price: number;
  isActive: boolean;
}
