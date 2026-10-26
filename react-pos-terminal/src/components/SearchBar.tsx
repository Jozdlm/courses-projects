import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, XIcon } from "lucide-react";

interface Props {
  value: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({ value, onSearch }: Props) {
  return (
    <InputGroup className="mb-3 h-10">
      <InputGroupAddon align="inline-start">
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput
        placeholder="Search products..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      {value.length >= 1 && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => onSearch("")}>
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
