import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, XIcon } from "lucide-react";
import type { Ref } from "react";

interface Props {
  value: string;
  onSearch: (value: string) => void;
  inputRef?: Ref<HTMLInputElement>;
}

export default function SearchBar({ value, onSearch, inputRef }: Props) {
  return (
    <InputGroup className="mb-3 h-10">
      <InputGroupAddon align="inline-start">
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput
        ref={inputRef}
        placeholder="Search products..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      {value.length >= 1 && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => {
              onSearch("");
              if (inputRef && typeof inputRef !== "function") {
                inputRef.current?.focus();
              }
            }}
          >
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
