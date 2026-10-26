import { z } from "zod";

export const categorySchema = z.object({
  id: z.uuid(),
  name: z.string(),
  merchantId: z.uuid(),
});

export const productSchema = z.object({
  id: z.uuid(),
  imgUrl: z.string(),
  name: z.string(),
  price: z.number(),
  isActive: z.boolean(),
  categoryId: z.uuid(),
  merchantId: z.uuid(),
  category: categorySchema,
});

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
