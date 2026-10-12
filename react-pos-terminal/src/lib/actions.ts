import { products } from "./placeholder-data";
import type { Category, MerchantProfile, Product } from "./types";
import { api } from "./http";

export function getProductList(): Product[] {
  return [...products];
}

export async function getCategoryList(): Promise<Category[]> {
  return (await api.get<Category[]>("/categories")).data;
}

export async function getMerchantProfile(id: string): Promise<MerchantProfile> {
  return (await api.get<MerchantProfile>(`/merchants/${id}`)).data;
}
