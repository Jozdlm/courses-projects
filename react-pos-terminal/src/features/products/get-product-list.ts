import z from "zod";
import { productSchema } from "./schemas";
import { api } from "@/lib/http";
import type { Product } from "./types";

export async function getProductList(merchantId: string): Promise<Product[]> {
  const params = new URLSearchParams({ _embed: "category", merchantId });
  const { data } = await api.get<Product[]>("/products", { params });

  const productsSchema = z.array(productSchema);
  const result = productsSchema.safeParse(data);

  if (!result.success) {
    throw new Error("Invalid products response");
  }

  return result.data;
}
