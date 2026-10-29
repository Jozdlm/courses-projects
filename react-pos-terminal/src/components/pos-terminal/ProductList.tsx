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
import { Button } from "@/components/ui/button";
import type { Product } from "@/features/products/";

interface Props {
  products: Product[];
  onClearFilter: () => void;
}

export default function ProductList({ products, onClearFilter }: Props) {
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
          <EmptyContent>
            <Button onClick={onClearFilter}>Clear search and filter</Button>
          </EmptyContent>
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
