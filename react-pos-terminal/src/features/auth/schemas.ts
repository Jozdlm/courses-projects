import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(6, "Password must be greater than 5 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
