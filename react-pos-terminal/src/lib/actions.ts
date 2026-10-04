import { categories, products } from "./placeholder-data";
import type { Category, Product } from "./types";

export function getProductList(): Product[] {
  return [...products];
}

export function getCategoryList(): Category[] {
  return [...categories];
}
