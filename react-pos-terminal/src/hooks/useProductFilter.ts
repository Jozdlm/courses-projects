import type { Product } from "@/lib/types";
import { normalizeText } from "@/lib/utils";
import { useState } from "react";

export const useProductFilter = (products: Product[]) => {
  const [query, setQuery] = useState<string>("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  const normalizedQuery = normalizeText(query);

  const filteredProducts = products.filter((product) => {
    const isMatchingQuery = normalizeText(product.name).includes(
      normalizedQuery,
    );
    const isMatchingCategory = selectedCategoryId === product.category.id;
    return (
      (isMatchingQuery && isMatchingCategory) ||
      (selectedCategoryId === null && isMatchingQuery)
    );
  });

  return {
    query,
    setQuery,
    selectedCategoryId,
    setSelectedCategoryId,
    filteredProducts,
  };
};
