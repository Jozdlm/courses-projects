import { getMerchantProfile } from "@/lib/actions";
import Tabs from "./Tabs";
import Topbar from "./Topbar";

export default function Header() {
  const merchantName = getMerchantProfile().name;

  return (
    <header>
      <Topbar merchantName={merchantName} />
      <Tabs />
    </header>
  );
}
