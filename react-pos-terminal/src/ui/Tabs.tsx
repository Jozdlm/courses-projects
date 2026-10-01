import clsx from "clsx";
import { useState } from "react";

interface Tabs {
  label: string;
}

const tabs: Tabs[] = [
  { label: "POS Terminal" },
  { label: "Transaction History" },
  { label: "Manage Products" },
  { label: "Customer List" },
];

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].label);

  return (
    <section className="mb-8">
      <div className="w-fit rounded-2xl bg-[#ECECF0] p-1 text-sm leading-5">
        {tabs.map((tab) => (
          <button
            className={clsx(
              "cursor-pointer rounded-[14px] px-2 py-1 font-medium text-[#5d5d5d] transition-colors ease-in",
              {
                "bg-white text-black transition-colors ease-out":
                  selectedTab === tab.label,
              },
            )}
            onClick={() => setSelectedTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
}
