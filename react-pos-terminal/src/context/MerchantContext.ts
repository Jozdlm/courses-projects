import type { MerchantProfile } from "@/lib/types";
import { createContext } from "react";

export const MerchantContext = createContext<MerchantProfile>({
  id: "",
  name: "",
  currency: "",
  country: "",
  language: "",
  tax: 0,
});
