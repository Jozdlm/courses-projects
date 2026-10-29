import type { LoginPayload, MerchantProfile, User } from "./types";
import { api } from "./http";

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
