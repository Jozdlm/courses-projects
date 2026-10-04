import "./App.css";
import POSTerminal from "./pages/POSTerminal";
import Header from "./ui/Header";

function App() {
  return (
    <div className="min-h-dvh bg-[#F9FAFB]">
      <Header />
      <main className="mb-8 flex w-full justify-center">
        <div className="w-full max-w-7xl">
          {/* Add Pages/Tabs Here */}
          <POSTerminal />
        </div>
      </main>
    </div>
  );
}

export default App;
