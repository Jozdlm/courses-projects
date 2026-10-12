import Tabs from "./Tabs";
import Topbar from "./Topbar";

interface Props {
  merchantName: string;
}

export default function Header({ merchantName }: Props) {
  return (
    <header>
      <Topbar merchantName={merchantName} />
      <Tabs />
    </header>
  );
}
