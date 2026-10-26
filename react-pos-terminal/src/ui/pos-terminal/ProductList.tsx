import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { SearchIcon } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  if (products.length === 0) {
    return (
      <div
        role="status"
        className="flex min-h-60 items-center justify-center rounded-xl border border-gray-200 bg-white"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchIcon />
            </EmptyMedia>
            <EmptyTitle>No product found</EmptyTitle>
            <EmptyDescription>
              No products match the query or the selected category.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>Click 'All' and clear the search bar.</EmptyContent>
        </Empty>
      </div>
    );
  }

  return (
    <div className="grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
