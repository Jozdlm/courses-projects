import { Search } from "lucide-react";

interface Props {
  value: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({ value, onSearch }: Props) {
  return (
    <div className="mb-3 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 transition focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-200">
      <Search className="h-4 w-4 shrink-0 text-[#99A1AF]" />
      <input
        type="text"
        aria-label="Search products"
        placeholder="Search products..."
        className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#99A1AF]"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
