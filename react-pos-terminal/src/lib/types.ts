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
