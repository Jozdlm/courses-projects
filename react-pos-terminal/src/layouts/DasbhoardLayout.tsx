import { CartProvider } from "@/context/CartProvider";
import { useSession } from "@/context/SessionContext";
import Header from "@/ui/Header";
import { Navigate, Outlet } from "react-router";

export default function DashboardLayout() {
  const session = useSession();

  if (session.status !== "LOGGED_IN") {
    return <Navigate to="/login" replace />;
  }

  return (
    <CartProvider>
      <div className="min-h-dvh bg-[#F9FAFB]">
        <Header />
        <main className="mb-8 flex w-full justify-center">
          <div className="w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </CartProvider>
  );
}
