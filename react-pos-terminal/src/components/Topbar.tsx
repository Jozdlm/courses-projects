import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSessionDispatch } from "@/context/SessionContext";
import { useMerchant } from "@/hooks/use-merchant";
import {
  HandshakeIcon,
  LogOutIcon,
  SettingsIcon,
  ShoppingBasketIcon,
  TagIcon,
  UsersRoundIcon,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";

interface NavItem {
  label: string;
  path: string;
  end?: boolean;
  icon?: React.JSX.Element;
}

const navigationLinks: NavItem[] = [
  { label: "Home", path: "/dashboard", end: true },
  { label: "Virtual Terminal", path: "/dashboard/virtual-terminal" },
  { label: "Invoices", path: "/dashboard/invoices" },
  { label: "Transaction History", path: "/dashboard/transaction-history" },
];

const dropdownLinks: NavItem[] = [
  { label: "Products", path: "/products", icon: <ShoppingBasketIcon /> },
  { label: "Categories", path: "/categories", icon: <TagIcon /> },
  { label: "Customers", path: "/customers", icon: <HandshakeIcon /> },
  { label: "Users", path: "/users", icon: <UsersRoundIcon /> },
  { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
];

export default function Topbar() {
  const { name } = useMerchant();
  const dispatch = useSessionDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
    dispatch({ type: "LOG_OUT" });
  };

  return (
    <div className="mb-6 flex w-full justify-center border-b border-b-gray-200 bg-white p-4">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <h1 className="text-base leading-normal font-medium">{name}</h1>
        <div>
          {navigationLinks.map((item) => (
            <NavLink to={item.path} key={item.path} end={item.end}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="font-normal"
                >
                  {item.label}
                </Button>
              )}
            </NavLink>
          ))}
          {/* PROFILE DROPDOWN MENU */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" className="font-normal" />}
            >
              My Business
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Business</DropdownMenuLabel>
                {dropdownLinks.map((item) => (
                  <DropdownMenuItem>
                    {item.icon}
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={handleLogOut}>
                  <LogOutIcon />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
