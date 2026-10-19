import clsx from "clsx";
import { NavLink } from "react-router";

interface Tabs {
  label: string;
  path: string;
  end?: boolean;
}

const tabs: Tabs[] = [
  { label: "POS Terminal", path: "/dashboard", end: true },
  { label: "Transaction History", path: "/dashboard/transaction-history" },
  { label: "Manage Products", path: "/dashboard/products" },
  { label: "Customer List", path: "/dashboard/customers" },
];

export default function Tabs() {
  return (
    <section className="mb-8 flex w-full justify-center">
      <div className="w-full max-w-7xl">
        <nav className="w-fit rounded-2xl bg-[#ECECF0] p-1 text-sm leading-5">
          {tabs.map((tab) => (
            <NavLink
              to={tab.path}
              key={tab.path}
              end={tab.end}
              className={({ isActive }) =>
                clsx(
                  "inline-block cursor-pointer rounded-[14px] px-2 py-1 font-medium text-[#5d5d5d] transition-colors ease-in",
                  {
                    "bg-white text-black transition-colors ease-out": isActive,
                  },
                )
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  );
}
