// src/components/SiteLogo.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

type SiteLogoProps = {
  href?: string;
  label?: string;
  /** Fichiers du logo (clair / sombre) placés dans /public/images/ */
  srcLight?: string;
  srcDark?: string;
  variant?: "light" | "dark";
  /** Dimensions intrinsèques (pour la netteté retina) */
  width?: number;
  height?: number;
  /** Taille d’affichage (ex: "h-10 w-auto") */
  className?: string;
  showWordmark?: boolean;
};

export default function SiteLogo({
  href = "/",
  label = "Martial Magie",
  srcLight = "/images/logo.png",
  srcDark = "/images/logo-white.png",
  variant = "light",
  width = 200,
  height = 200,
  className,
  showWordmark = false,
}: SiteLogoProps) {
  const src = variant === "dark" ? srcDark : srcLight;

  return (
    <Link href={href} className="flex items-center gap-3" aria-label={label}>
      <Image
        src={src}
        alt={label}
        width={width}
        height={height}
        sizes={`${width}px`}
        priority
        className={cn(className)}
      />
      <span className="sr-only">{label}</span>
      {showWordmark && (
        <span className="hidden sm:inline font-semibold tracking-tight">{label}</span>
      )}
    </Link>
  );
}
