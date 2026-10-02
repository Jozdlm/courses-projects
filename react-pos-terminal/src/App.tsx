import "./App.css";
import Topbar from "@/ui/Topbar";
import Tabs from "./ui/Tabs";
import ProductFilter from "./ui/pos-terminal/ProductFilter";
import ProductList from "./ui/pos-terminal/ProductList";
import Cart from "./ui/pos-terminal/Cart";

function App() {
  return (
    <div className="bg-[#F9FAFB]">
      <Topbar />
      <main className="mb-8 flex w-full justify-center">
        <div className="w-full max-w-7xl">
          <Tabs />
          <section className="grid grid-cols-[1fr_400px] gap-6">
            <div className="grid grid-flow-row grid-rows-[content-fit_1fr] gap-4">
              <ProductFilter />
              <ProductList />
            </div>
            <Cart />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
