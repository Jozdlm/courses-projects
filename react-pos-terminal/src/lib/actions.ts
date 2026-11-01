import type { MerchantProfile } from "./types";
import { api } from "./http";

export async function getMerchantProfile(id: string): Promise<MerchantProfile> {
  return (await api.get<MerchantProfile>(`/merchants/${id}`)).data;
}
