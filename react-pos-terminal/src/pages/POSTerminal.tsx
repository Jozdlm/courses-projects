import { getCategoryList, getProductList } from "@/lib/actions";
import type {
  Cart,
  CartItem,
  Category,
  MerchantProfile,
  Product,
} from "@/lib/types";
import OrderSummary from "@/ui/pos-terminal/OrderSummary";
import CategoryFilter from "@/ui/pos-terminal/CategoryFilter";
import ProductList from "@/ui/pos-terminal/ProductList";
import SearchBar from "@/ui/SearchBar";
import { useEffect, useState } from "react";

interface Props {
  merchant: MerchantProfile;
}

export default function POSTerminal({ merchant }: Props) {
  const products: Product[] = getProductList();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // SERVER REQUESTS
  useEffect(() => {
    getCategoryList().then(setCategories);
  });

  // MERCHANT
  const merchantTax = merchant.tax;
  const currency = merchant.currency;
  const lang = merchant.language;

  // CART
  const subtotal = cartItems.reduce(
    (acc, curr) => acc + curr.quantity * curr.unitPrice,
    0,
  );
  const tax = subtotal * merchantTax;
  const total = subtotal + tax;
  const cart: Cart = {
    items: cartItems,
    subtotal,
    tax,
    total,
  };

  function handleAddToCart(product: Product) {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prev.map((item) => {
          if (item.product.id !== product.id) return item;
          return { ...item, quantity: item.quantity + 1 };
        });
      }

      return [...prev, { product, unitPrice: product.price, quantity: 1 }];
    });
  }

  function handleIncreaseQty(productId: string) {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id !== productId) return item;
        return { ...item, quantity: item.quantity + 1 };
      }),
    );
  }

  function handleQtyChange(productId: string, newQty: number) {
    if (newQty <= 0) return;
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id !== productId) return item;
        return { ...item, quantity: newQty };
      }),
    );
  }

  function handleDecreaseQty(productId: string) {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id !== productId || item.quantity <= 1) return item;
        return { ...item, quantity: item.quantity - 1 };
      }),
    );
  }

  function handleRemoveItem(productId: string) {
    setCartItems(cartItems.filter((item) => item.product.id != productId));
  }

  function handleClearCart() {
    setCartItems([]);
  }

  // FILTERS

  function handleSelectCategory(option: string | null) {
    setSelectedCategory(option);
  }

  function handleSearchProduct(query: string) {
    setQuery(query);
  }

  const filteredProducts = products.filter((product) => {
    const normalize = (s: string) => s.toLowerCase().trim();
    const isMatchingQuery = normalize(product.name).includes(normalize(query));
    const isMatchingCategory = selectedCategory === product.category.id;
    return (
      (isMatchingQuery && isMatchingCategory) ||
      (selectedCategory === null && isMatchingQuery)
    );
  });

  return (
    <section className="grid grid-cols-[1fr_400px] gap-6">
      <div className="grid grid-flow-row grid-rows-[min-content_1fr] gap-4">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <SearchBar value={query} onSearch={handleSearchProduct} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={handleSelectCategory}
          />
        </div>
        <ProductList
          products={filteredProducts}
          currency={currency}
          lang={lang}
          onAddToCart={handleAddToCart}
        />
      </div>
      <OrderSummary
        cart={cart}
        merchantTax={merchantTax}
        currency={currency}
        lang={lang}
        onClearCart={handleClearCart}
        onRemoveItem={handleRemoveItem}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
        onQtyChange={handleQtyChange}
      />
    </section>
  );
}
