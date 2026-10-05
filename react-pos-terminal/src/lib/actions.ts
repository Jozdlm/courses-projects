import { categories, merchantProfile, products } from "./placeholder-data";
import type { Category, MerchantProfile, Product } from "./types";

export function getProductList(): Product[] {
  return [...products];
}

export function getCategoryList(): Category[] {
  return [...categories];
}

export function getMerchantProfile(): MerchantProfile {
  return { ...merchantProfile };
}
