import type { MerchantProfile } from "@/lib/types";
import { createContext, useContext } from "react";

export const MerchantContext = createContext<MerchantProfile | null>(null);

export function useMerchant() {
  const ctx = useContext(MerchantContext);
  if (ctx === null)
    throw new Error("useMerchant must be used inside <MerchantProvider>");
  return ctx;
}
