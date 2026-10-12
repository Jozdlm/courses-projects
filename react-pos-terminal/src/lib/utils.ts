import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPercent(value: number, decimals: number = 2) {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatCurrency(value: number, currency: string, lang: string) {
  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency,
  }).format(value);
}
