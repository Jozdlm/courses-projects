import { MerchantContext } from "@/context/MerchantContext";
import Header from "@/ui/Header";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  // TODO: Load the information when use login
  const testValue = {
    id: "7a1e4c92-3b5d-4f68-9a0c-2d8e6b1f3a47",
    name: "Libreria La Joya",
    currency: "GTQ",
    country: "Guatemala",
    language: "es-GT",
    tax: 0.12,
  };

  return (
    <MerchantContext value={testValue}>
      <div className="min-h-dvh bg-[#F9FAFB]">
        <Header />
        <main className="mb-8 flex w-full justify-center">
          <div className="w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </MerchantContext>
  );
}
