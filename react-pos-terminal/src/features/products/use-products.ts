import { useQuery } from "@tanstack/react-query";
import { getProductList } from "@/features/products/";
import { useMerchant } from "@/hooks/use-merchant";

const QUERY_KEY = "products";

export const useProducts = () => {
  const { id } = useMerchant();

  const {
    data: products,
    isError,
    error,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getProductList(id),
  });

  return { products, isError, error, isSuccess, isLoading };
};
