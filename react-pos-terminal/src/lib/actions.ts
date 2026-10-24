import type {
  Category,
  LoginPayload,
  MerchantProfile,
  Product,
  User,
} from "./types";
import { api } from "./http";
import z from "zod";
import { productSchema } from "./schemas";

export async function getProductList(): Promise<Product[]> {
  const productsSchema = z.array(productSchema);
  const params = new URLSearchParams({ _embed: "category" });
  const { data } = await api.get<Product[]>("/products", { params });
  const result = productsSchema.safeParse(data);

  if (!result.success) {
    throw new Error("Invalid products response");
  }

  return result.data;
}

export async function getCategoryList(merchantId: string): Promise<Category[]> {
  const params = new URLSearchParams({ merchantId });
  return (await api.get<Category[]>("/categories", { params })).data;
}

export async function getMerchantProfile(id: string): Promise<MerchantProfile> {
  return (await api.get<MerchantProfile>(`/merchants/${id}`)).data;
}

export async function logInWithPassword(
  credentials: LoginPayload,
): Promise<User> {
  const params = new URLSearchParams({
    email: credentials.email,
    _embed: "merchant",
  });
  const result = await api.get<User[]>(`/users`, { params });

  if (result.data.length === 0) {
    throw new Error("Email or password incorrect");
  }

  return result.data[0];
}
