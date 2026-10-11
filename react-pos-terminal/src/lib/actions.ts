import { merchantProfile, products } from "./placeholder-data";
import type { Category, MerchantProfile, Product } from "./types";
import { api } from "./http";

export function getProductList(): Product[] {
  return [...products];
}

export async function getCategoryList(): Promise<Category[]> {
  return (await api.get<Category[]>("/categories")).data;
}

export function getMerchantProfile(): MerchantProfile {
  return { ...merchantProfile };
}
