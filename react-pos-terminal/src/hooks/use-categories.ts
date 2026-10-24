import { useMerchant } from "@/hooks/use-merchant";
import { getCategoryList } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = "categories";

export const useCategories = () => {
  const { id } = useMerchant();

  const { data, isError, error, isSuccess, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getCategoryList(id),
  });

  return { data, isError, error, isSuccess, isLoading };
};
