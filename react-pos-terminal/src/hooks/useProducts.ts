import { getProductList } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";
import { useMerchant } from "./use-merchant";

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
