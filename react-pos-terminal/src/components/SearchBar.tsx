import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

interface Props {
  value: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({ value, onSearch }: Props) {
  return (
    <InputGroup className="mb-3 h-10">
      <InputGroupInput
        placeholder="Search products..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
