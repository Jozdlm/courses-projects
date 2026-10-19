import { getCategoryList } from "@/lib/actions";
import type { Category } from "@/lib/types";
import { useEffect, useState } from "react";

export const useCategories = (merchantId: string) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // TODO: RETRIEVE CATEGORIES BY MERCHANT_ID
    getCategoryList().then(setCategories);
  }, []);

  return { categories };
};
