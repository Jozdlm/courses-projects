import { getMerchantProfile } from "@/lib/actions";
import type { MerchantProfile } from "@/lib/types";
import Header from "@/ui/Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

// TODO: Get it from login
const MERCHANT_ID: string = "7a1e4c92-3b5d-4f68-9a0c-2d8e6b1f3a47";

export default function DashboardLayout() {
  const [merchant, setMerchant] = useState<MerchantProfile | null>(null);

  useEffect(() => {
    getMerchantProfile(MERCHANT_ID).then(setMerchant);
  }, []);

  if (!merchant) return <p>Loading....</p>;

  return (
    <div className="min-h-dvh bg-[#F9FAFB]">
      <Header merchantName={merchant.name} />
      <main className="mb-8 flex w-full justify-center">
        <div className="w-full max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
