import type { Product } from "@/features/products/";
import { normalizeText } from "@/lib/utils";
import { useState } from "react";

export const useProductFilter = (products: Product[] | null | undefined) => {
  const [query, setQuery] = useState<string>("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  const normalizedQuery = normalizeText(query);

  if (!products) {
    products = [];
  }

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

  const clearSearchAndFilter = () => {
    setQuery("");
    setSelectedCategoryId(null);
  };

  return {
    query,
    setQuery,
    selectedCategoryId,
    setSelectedCategoryId,
    filteredProducts,
    clearSearchAndFilter,
  };
};
