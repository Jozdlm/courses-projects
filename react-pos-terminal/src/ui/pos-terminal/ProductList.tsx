import { products } from "@/lib/placeholder-data";

export default function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        // TODO: Change the key to product.id
        <div
          key={product.name}
          className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4"
        >
          <img
            src={product.imgUrl}
            alt={product.name}
            className="h-40 w-full rounded-lg object-cover"
          />
          <div>
            <p className="text-lg font-medium">{product.name}</p>
            <p className="mb-3 text-sm font-normal text-[#6A7282]">
              {product.category}
            </p>
            <p className="text-base font-medium text-[#00A63E]">
              ${product.price}
            </p>
          </div>
          <button className="mt-auto flex w-full cursor-pointer justify-center gap-4 rounded-lg bg-[#030213] px-3 py-2 text-sm font-medium text-white">
            <span>+</span>
            <span>Add to cart</span>
          </button>
        </div>
      ))}
    </div>
  );
}
