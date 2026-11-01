import { api } from "@/lib/http";
import type { LoginPayload, User } from "@/lib/types";

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
