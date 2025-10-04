// src/components/Header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// ✅ correct
import { Facebook, Instagram, Youtube } from "lucide-react";

import SiteLogo from "@/components/Sitelogo";
import { cn } from "@/lib/cn";

type HeaderProps = {
  /** Apparence sur fond clair (default) ou sombre */
  variant?: "light" | "dark";
  /** Affiche la topbar contact (au-dessus du header) */
  showTopbar?: boolean;
};

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Biographie", href: "/biographie" },
  // "Prestations" a un sous-menu plus bas
  { label: "Vidéos", href: "/galerie-video" }, // <- MAJ chemin
  { label: "Galerie", href: "/galerie" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

const prestationsChildren = [
  { label: "Close-Up", href: "/prestations#closeup" },
  { label: "Mariages", href: "/prestations#mariages" },
  { label: "Anniversaires", href: "/prestations#anniversaires" },
  { label: "Mentalisme", href: "/prestations#mentalisme" },
  { label: "Magie digitale & marketing", href: "/prestations#digital" },
  { label: "Séminaires & congrès", href: "/prestations#seminaires" },
];

export default function Header({ variant = "light", showTopbar = true }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [openPrestations, setOpenPrestations] = React.useState(false);
  const isDark = variant === "dark";

  return (
    <>
      {/* Topbar — mobile */}
      {showTopbar && (
        <div className="md:hidden bg-gray-900 text-gray-100">
          <div className="max-w-6xl mx-auto px-3 py-1.5 text-xs flex items-center justify-between gap-3 overflow-x-auto whitespace-nowrap">
            <a href="tel:+33607709219" className="underline">📞 Appeler</a>
            <a href="mailto:spectacle@martialmagie.com" className="underline">✉️ Email</a>
            <div className="flex items-center gap-4 opacity-80">
  <a href="https://fr-fr.facebook.com/martial.bacquias" target="_blank" rel="noopener noreferrer"
     aria-label="Facebook" className="inline-flex items-center gap-1.5 hover:underline">
    <Facebook className="h-4 w-4" aria-hidden="true" />
    <span>Facebook</span>
  </a>
  <a href="https://www.instagram.com/martialmagicien/" target="_blank" rel="noopener noreferrer"
     aria-label="Instagram" className="inline-flex items-center gap-1.5 hover:underline">
    <Instagram className="h-4 w-4" aria-hidden="true" />
    <span>Instagram</span>
  </a>
  <a href="https://www.youtube.com/channel/UCySayulh_mZ8aTGSCg74ahQ" target="_blank" rel="noopener noreferrer"
     aria-label="YouTube" className="inline-flex items-center gap-1.5 hover:underline">
    <Youtube className="h-4 w-4" aria-hidden="true" />
    <span>YouTube</span>
  </a>
</div>

          </div>
        </div>
      )}

      {/* Topbar — desktop */}
      {showTopbar && (
        <div
          className={cn(
            "hidden md:flex items-center justify-between px-4 py-2 text-sm",
            isDark ? "bg-black text-gray-100" : "bg-gray-900 text-gray-100"
          )}
        >
          <div className="flex items-center gap-6">
            <a href="tel:+33607709219" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-4 w-4" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>+33 6 07 70 92 19</a>
            <a href="mailto:spectacle@martialmagie.com" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>spectacle@martialmagie.com
            </a>
          </div>
          <div className="flex items-center gap-4 opacity-80">
            <a href="https://fr-fr.facebook.com/martial.bacquias" aria-label="Facebook" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/martialmagicien/" aria-label="Instagram" target="_blank">Instagram</a>
            <a href="https://www.youtube.com/channel/UCySayulh_mZ8aTGSCg74ahQ" aria-label="YouTube" target="_blank">YouTube</a>
          </div>
        </div>
      )}

      <header
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur",
          isDark ? "bg-black/80 border-white/10 text-gray-100" : "bg-white/90 border-gray-200 text-gray-900"
        )}
        style={{ paddingTop: "env(safe-area-inset-top)" }} // anti-encoche iOS
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo 200x200 intrinsèque, affiché ~40–48px de haut */}
            <SiteLogo
              variant={isDark ? "dark" : "light"}
              label="Martial Magie"
              width={200}
              height={200}
              className="h-10 w-auto md:h-12"
            />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-[15px]">
              {/* Accueil + Biographie */}
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("hover:opacity-80", pathname === item.href && "font-semibold")}
                >
                  {item.label}
                </Link>
              ))}

              {/* Prestations (dropdown desktop) */}
              <div className="group relative">
                <Link
                  href="/prestations"
                  className={cn(
                    "flex items-center gap-1 hover:opacity-80",
                    pathname?.startsWith("/prestations") && "font-semibold"
                  )}
                >
                  Prestations <ChevronDown className="h-4 w-4 opacity-70" />
                </Link>
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-gray-900 shadow-lg rounded-xl p-3 w-72 border border-gray-200">
                  <ul className="space-y-1 text-sm">
                    {prestationsChildren.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="block px-2 py-1 rounded hover:bg-gray-50">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reste des items */}
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "hover:opacity-80",
                    item.href !== "/#contact" && pathname === item.href && "font-semibold"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + burger */}
            <div className="flex items-center gap-2">
              <Button className="hidden md:inline-flex">Demander un devis</Button>
              <button
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300"
                onClick={() => setOpen((v) => !v)}
                aria-label="Ouvrir le menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className={cn(
              "md:hidden border-t",
              isDark ? "border-white/10 bg-black/90 text-gray-100" : "border-gray-200 bg-white/95 text-gray-900"
            )}
          >
            <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
              {navItems.slice(0, 2).map((item) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  active={pathname === item.href}
                >
                  {item.label}
                </MobileLink>
              ))}

              {/* Prestations (accordion mobile) */}
              <button
                className="w-full flex items-center justify-between py-2"
                onClick={() => setOpenPrestations((v) => !v)}
              >
                <span className={cn("font-medium", pathname?.startsWith("/prestations") && "underline")}>
                  Prestations
                </span>
                <ChevronDown className={cn("h-4 w-4 transition", openPrestations && "rotate-180")} />
              </button>
              {openPrestations && (
                <div className="pl-3 pb-2">
                  {prestationsChildren.map((s) => (
                    <MobileLink key={s.href} href={s.href} onClick={() => setOpen(false)}>
                      {s.label}
                    </MobileLink>
                  ))}
                </div>
              )}

              {navItems.slice(2).map((item) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  active={pathname === item.href}
                >
                  {item.label}
                </MobileLink>
              ))}

              <div className="pt-3">
                <Button className="w-full">Demander un devis</Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  active,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("block py-2", active ? "font-semibold" : "opacity-90 hover:opacity-100")}
    >
      {children}
    </Link>
  );
}
