import { z } from "zod";

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  merchantId: z.uuid(),
});

export const productSchema = z.object({
  id: z.string(),
  imgUrl: z.string(),
  name: z.string(),
  category: categorySchema,
  price: z.number(),
});

export const cartItemSchema = z.object({
  product: productSchema,
  unitPrice: z.number(),
  quantity: z.number().int().min(1),
});

export const cartStateSchema = z.object({
  items: z.array(cartItemSchema),
});
