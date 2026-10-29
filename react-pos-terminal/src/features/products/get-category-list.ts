import { api } from "@/lib/http";
import type { Category } from "./types";

export async function getCategoryList(merchantId: string): Promise<Category[]> {
  const params = new URLSearchParams({ merchantId });
  return (await api.get<Category[]>("/categories", { params })).data;
}
