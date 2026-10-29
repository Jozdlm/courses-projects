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

export interface CreateProductInput {
  name: string;
  imgUrl: string;
  categoryId: string;
  price: number;
  isActive: boolean;
}

export interface CreateCategoryInput {
  name: string;
  isActive: boolean;
}
