import axios from "axios";
import { merchantProfile, products } from "./placeholder-data";
import type { Category, MerchantProfile, Product } from "./types";

export function getProductList(): Product[] {
  return [...products];
}

export async function getCategoryList(): Promise<Category[]> {
  return (await axios.get<Category[]>("http://localhost:3000/categories")).data;
}

export function getMerchantProfile(): MerchantProfile {
  return { ...merchantProfile };
}
