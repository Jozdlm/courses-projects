import "./App.css";
import Topbar from "@/ui/Topbar";
import POSTerminal from "./pages/POSTerminal";

function App() {
  return (
    <div className="bg-[#F9FAFB]">
      <Topbar />
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
