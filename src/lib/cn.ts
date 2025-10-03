// Utilitaire "cn" compatible Tailwind (tu as déjà clsx & tailwind-merge)
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
