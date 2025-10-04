// src/components/Footer.tsx
"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";  // ← Supprimé imports inutilisés (Phone, Mail, etc.)
import Image from "next/image";

export default function Footer() {
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Biographie", href: "/biographie" },
    { label: "Prestations", href: "/prestations" },
    { label: "Vidéos", href: "/galerie-video" },
    { label: "Galerie", href: "/galerie" },
    { label: "Actualités", href: "/actualites" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        {/* Colonne 1: Marque & Description */}
        <div>
          <div className="font-bold text-white mb-2">Martial Magie</div>
          <p className="text-sm opacity-80">
            Magicien & Mentaliste Professionnel
            <br />
            Paris — Déplacements France & Intl.
          </p>
          <ul>
            <li className="flex mt-3 text-sm opacity-80">
              <a href="tel:+33607709219" className="flex items-center gap-2 rounded-lg px-3 hover:underline">
                <Phone className="h-4 w-4" /> +33 6 07 70 92 19
              </a>
            </li>
            <li className="mt-2 text-sm opacity-80">
              <a href="mailto:spectacle@martialmagie.com" className="flex items-center gap-2 rounded-lg px-3 hover:underline">
                <Mail className="h-4 w-4" /> spectacle@martialmagie.com
              </a>
            </li>
          </ul>
          <ul>
            <li className="flex mt-4 text-sm opacity-80">Contact & devis</li>
            <li className="flex mt-2 text-sm opacity-80">Mes références</li>
            <li className="flex mt-2 text-sm opacity-80">Mobilité géographique</li>
            <li className="flex mt-2 text-sm opacity-80">Plan du site</li>
            <li className="flex mt-2 text-sm opacity-80">
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3: Magicien Paris et France */}
        <div>
          <div className="font-semibold mb-2">Magicien Paris et France</div>
          <ul>
            <li className="flex mt-4 text-sm opacity-80">Magicien Paris et dans toute la France</li>
            <li className="flex mt-2 text-sm opacity-80">Magicien close-up Paris</li>
            <li className="flex mt-2 text-sm opacity-80">Magicien Mentaliste</li>
            <li className="flex mt-2 text-sm opacity-80">Magicien Numérique iPad Paris</li>
            <li className="flex mt-2 text-sm opacity-80">Magicien Spectacle Enfant Paris</li>
            <li className="flex mt-2 text-sm opacity-80">Magie digitale iPad iPhone Paris</li>
            <li className="flex mt-2 text-sm opacity-80">Magicien anniversaire</li>
            <li className="flex mt-2 text-sm opacity-80">Animation mariage</li>
          </ul>
        </div>

        {/* Colonne 2: Navigation */}
        <div className="ml-4">
          <div className="font-semibold mb-2">Navigation</div>
          <ul className="space-y-1 text-sm">
            {navItems.map((item) => (
              <li className="flex mt-2 text-sm opacity-80" key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 4: Réseaux */}
        <div>
          <div className="font-semibold mb-2">Suivez-moi sur</div>
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
          </div>
          {/* Custom HTML Widget */}
          <div id="custom_html-5" className="widget_text widget_custom_html widget group">
            <div className="widget_text widget-content">
              <div className="textwidget custom-html-widget">
                <a href="https://www.martialmagie.com/" title="Magicien Paris, close-up, mentaliste, magicien mariage, magie numérique - Martial magie.">
                  <Image
                    src="/images/logo.png"
                    alt="Martial Magie Logo"
                    className="object-cover"
                    priority
                    width={200}
                    height={200}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="border-t border-white/10 text-center text-xs py-4 bg-gray-950">
        © 2025 Martial Magie – Magicien et Mentaliste Professionnel —{" "}
        <Link href="/mentions-legales" className="underline hover:text-white">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}