// src/components/Footer.tsx
"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
// Supprimé : import { cn } from "@/lib/cn"; (inutilisé)

export default function Footer() {
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Biographie", href: "/biographie" },
    { label: "Prestations", href: "/prestations" },
    { label: "Vidéos", href: "/galerie-video" },
    { label: "Galerie", href: "/galerie" },
    { label: "Actualités", href: "/actualites" },
    { label: "Boutique", href: "/boutique" },
    { label: "It’s magic !", href: "/its-magic" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        {/* Colonne 1: Marque & Description */}
        <div>
          <div className="font-bold text-white mb-2">Théotim Martins</div>
          <p className="text-sm opacity-80">
            Magicien & Mentaliste Professionnel
            <br />
            Bordeaux & sa région
            <br />
            33000 Bordeaux – Aquitaine
          </p>
          <Link href="/contact" className="mt-2 inline-block text-sm underline hover:text-white">
            Contactez-moi
          </Link>
        </div>

        {/* Colonne 2: Navigation */}
        <div>
          <div className="font-semibold mb-2">Navigation</div>
          <ul className="space-y-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3: Contact */}
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="tel:+33607709219" className="flex items-center gap-2 hover:text-white">
                📞 +33 6 07 70 92 19
              </Link>
            </li>
            <li>
              <Link href="mailto:spectacle@martialmagie.com" className="flex items-center gap-2 hover:text-white">
                ✉️ spectacle@martialmagie.com
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 4: Réseaux */}
        <div>
          <div className="font-semibold mb-2">Suivez-moi</div>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="https://fr-fr.facebook.com/martial.bacquias" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook
            </Link>
            <Link href="https://www.instagram.com/martialmagicien/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
            </Link>
            <Link href="https://www.youtube.com/channel/UCySayulh_mZ8aTGSCg74ahQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Youtube className="h-4 w-4" aria-hidden="true" /> YouTube
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="border-t border-white/10 text-center text-xs py-4 bg-gray-950">
        © 2025 Théotim Martins – Magicien et Mentaliste Professionnel —{" "}
        <Link href="/mentions-legales" className="underline hover:text-white">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}