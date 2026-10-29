import { z } from "zod";

export const categorySchema = z.object({
  id: z.uuid(),
  name: z.string(),
  isActive: z.boolean(),
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
