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
