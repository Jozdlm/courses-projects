import { getProductList } from "@/lib/actions";
import type { Product } from "@/lib/types";
import { useEffect, useState } from "react";

export const useProducts = (merchantId: string) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // TODO: Retrieve products by MerchantId
    getProductList().then(setProducts);
  }, []);

  return { products };
};
