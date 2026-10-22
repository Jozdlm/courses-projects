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
import { useMerchant } from "@/context/MerchantContext";
import { Link } from "react-router";

export default function Topbar() {
  const { name } = useMerchant();

  return (
    <div className="mb-6 flex w-full justify-center border-b border-b-gray-200 bg-white p-4">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <h1 className="text-base leading-normal font-medium">{name}</h1>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" className="font-normal" />}
          >
            My Account
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link to={"/login"}>Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
