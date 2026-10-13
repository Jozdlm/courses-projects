import { getCategoryList, getProductList } from "@/lib/actions";
import type { Cart, Category, MerchantProfile, Product } from "@/lib/types";
import OrderSummary from "@/ui/pos-terminal/OrderSummary";
import CategoryFilter from "@/ui/pos-terminal/CategoryFilter";
import ProductList from "@/ui/pos-terminal/ProductList";
import SearchBar from "@/ui/SearchBar";
import { useEffect, useReducer, useState } from "react";
import { cartReducer, getCartInitialState } from "@/lib/cart-reducer";

interface Props {
  merchant: MerchantProfile;
}

export default function POSTerminal({ merchant }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [cartState, dispatch] = useReducer(cartReducer, getCartInitialState());

  // SERVER REQUESTS
  useEffect(() => {
    getCategoryList().then(setCategories);
    getProductList().then(setProducts);
  }, []);

  // SIDE EFFECTS
  useEffect(() => {
    localStorage.setItem("cart-state", JSON.stringify(cartState));
  }, [cartState]);

  // MERCHANT
  const merchantTax = merchant.tax;
  const currency = merchant.currency;
  const lang = merchant.language;

  // CART
  const subtotal = cartState.items.reduce(
    (acc, curr) => acc + curr.quantity * curr.unitPrice,
    0,
  );
  const tax = subtotal * merchantTax;
  const total = subtotal + tax;
  const cart: Cart = {
    items: cartState.items,
    subtotal,
    tax,
    total,
  };

  function handleAddToCart(product: Product) {
    dispatch({ type: "ADD_ITEM", payload: product });
  }

  function handleIncreaseQty(productId: string) {
    dispatch({ type: "INCREASE_QTY", payload: productId });
  }

  function handleSetQty(productId: string, quantity: number) {
    dispatch({ type: "SET_QTY", payload: { productId, quantity } });
  }

  function handleDecreaseQty(productId: string) {
    dispatch({ type: "DECREASE_QTY", payload: productId });
  }

  function handleRemoveItem(productId: string) {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  }

  function handleClearCart() {
    dispatch({ type: "CLEAR_CART" });
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
        onQtyChange={handleSetQty}
      />
    </section>
  );
}
