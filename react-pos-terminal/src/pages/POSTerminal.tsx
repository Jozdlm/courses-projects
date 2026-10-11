import {
  getCategoryList,
  getMerchantProfile,
  getProductList,
} from "@/lib/actions";
import type { Cart, CartItem, Category, Product } from "@/lib/types";
import OrderSummary from "@/ui/pos-terminal/OrderSummary";
import CategoryFilter from "@/ui/pos-terminal/CategoryFilter";
import ProductList from "@/ui/pos-terminal/ProductList";
import SearchBar from "@/ui/SearchBar";
import { useState } from "react";

export default function POSTerminal() {
  const products: Product[] = getProductList();
  const categories: Category[] = getCategoryList();
  const merchantTax: number = getMerchantProfile().tax;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  // CART
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
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
    const isItemOnCart = cartItems.find(
      (item) => item.product.id === product.id,
    );
    const unitPrice = product.price;
    let quantity = 1;

    if (isItemOnCart) {
      const filteredCart = cartItems.filter(
        (item) => item.product.id !== product.id,
      );

      quantity = isItemOnCart.quantity + 1;
      setCartItems([...filteredCart, { product, unitPrice, quantity }]);
    } else {
      setCartItems((prev) => [...prev, { product, unitPrice, quantity }]);
    }
  }

  function handleIncreaseQty(productId: string) {
    const cartItem = cartItems.find((item) => item.product.id === productId);
    if (!cartItem) return;

    cartItem.quantity = cartItem.quantity + 1;

    const filteredCart = cartItems.filter(
      (item) => item.product.id !== productId,
    );
    setCartItems([...filteredCart, cartItem]);
  }

  function handleQtyChange(productId: string, newQty: number) {
    const cartItem = cartItems.find((item) => item.product.id === productId);
    if (!cartItem) return;
    if (newQty <= 0) return;

    cartItem.quantity = newQty;

    const filteredCart = cartItems.filter(
      (item) => item.product.id !== productId,
    );
    setCartItems([...filteredCart, cartItem]);
  }

  function handleDecreaseQty(productId: string) {
    const cartItem = cartItems.find((item) => item.product.id === productId);
    if (!cartItem) return;
    if (cartItem.quantity <= 1) return;

    cartItem.quantity = cartItem.quantity - 1;

    const filteredCart = cartItems.filter(
      (item) => item.product.id !== productId,
    );
    setCartItems([...filteredCart, cartItem]);
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
          onAddToCart={handleAddToCart}
        />
      </div>
      <OrderSummary
        cart={cart}
        onClearCart={handleClearCart}
        onRemoveItem={handleRemoveItem}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
        onQtyChange={handleQtyChange}
        merchantTax={merchantTax}
      />
    </section>
  );
}
