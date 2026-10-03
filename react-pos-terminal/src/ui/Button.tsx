import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  variant: "filled" | "outline" | "ghost";
}

export default function Button({
  variant,
  className,
  children,
  ...rest
}: Props) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-lg border border-transparent px-4 py-2 text-sm font-medium transition-colors",
        {
          "bg-[#030213] text-white": variant === "filled",
          "border-gray-200 bg-white text-gray-900": variant === "outline",
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
