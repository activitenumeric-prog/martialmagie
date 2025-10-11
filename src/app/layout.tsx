// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"  // ← Built-in, pas d'install
import { Roboto } from "next/font/google";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adapte selon ton usage
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: { // Fallback titre (override par page)
    default: "Martial Magicien Close-up Mentaliste Magie Numérique",
    template: "%s | Martial Magie", // Format : "Page Title | Site Name"
  },
  description: "Magie moderne pour mariages, entreprises et événements.Disponible à Paris & en Île-de-France ainsi qu'à l'international.",
  keywords: ["magicien", "mentaliste", "mariage", "entreprise", "Paris", "événementiel", "close-up", "scène", "digital", "Magicien Paris" , "magicien close-up", "magicien mentaliste", "magicien mariage", "magie numérique"],
  authors: [{ name: "Martial Bacquias" }],
  creator: "Mikaël Folio - Integdevelop Studio",
  openGraph: { // Partage social
    type: "website",
    locale: "fr_FR",
    url: "https://martialmagie.com",
    siteName: "Martial Magicien & Mentaliste",
    images: [{ url: "/images/og-image.jpg" }],
    description: "Magie et mentalisme professionnel à Paris & en Île-de-France ainsi qu'à l'international.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Théotim Martins – Magicien & Mentaliste",
    description: "Magie moderne pour vos événements.",
    images: ["/images/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}