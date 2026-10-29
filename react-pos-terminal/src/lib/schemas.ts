import { productSchema } from "@/features/products/";
import { z } from "zod";

export const cartItemSchema = z.object({
  product: productSchema,
  unitPrice: z.number(),
  quantity: z.number().int().min(1),
});

export const cartStateSchema = z.object({
  items: z.array(cartItemSchema),
});

export const merchantProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  currency: z.string(),
  country: z.string(),
  language: z.string(),
  tax: z.number().min(0).max(1),
});

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
  merchantId: z.string(),
  merchant: merchantProfileSchema,
});
