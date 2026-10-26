import Topbar from "@/components/Topbar";
import { CartProvider } from "@/context/CartProvider";
import { useSession } from "@/context/SessionContext";
import { Navigate, Outlet } from "react-router";

export default function DashboardLayout() {
  const session = useSession();

  if (session.status !== "LOGGED_IN") {
    return <Navigate to="/login" replace />;
  }

  return (
    <CartProvider>
      <div className="min-h-dvh bg-[#F9FAFB]">
        <Topbar />
        <main className="mb-8 flex w-full justify-center">
          <div className="w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </CartProvider>
  );
}
