import { useMerchant } from "@/hooks/use-merchant";
import { getCategoryList } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = "categories";

export const useCategories = () => {
  const { id } = useMerchant();
  // TODO: RETRIEVE CATEGORIES BY MERCHANT_ID
  const { data, isError, error, isSuccess, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: getCategoryList,
  });

  return { data, isError, error, isSuccess, isLoading };
};
