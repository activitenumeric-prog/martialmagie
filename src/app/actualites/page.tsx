// app/actualites/page.tsx
"use client";

import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // ← Ajout
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function NewsPage() {
  const categories = [
    "Tout",
    "Prestations",
    "Événements",
    "Backstage",
    "Conseils",
    "Presse",
  ];

  const allPosts = [
    {
      id: "a1",
      title: "Magicien close-up pour AD Elec by Aubade à NANCY",
      excerpt:
        "Animation d’un diner pour AD Elec by Aubade à NANCY avec 40 collaborateurs. Martial magicien digital et mentaliste a offert aux invités un show en close-up très interactif.",
      date: "2025-10-01",
      read: 3,
      category: "Événements",
      color: "bg-gray-200",
    },
    {
      id: "a2",
      title: "Spectacle Jeune Public pour SAISON 2025 à SARTROUVILLE",
      excerpt:
        "La Malle Enchantée, Magicien, magicien pour enfants, spectacle de magie pour enfants, spectacle pour arbre de Noël.",
      date: "2025-09-27",
      read: 5,
      category: "Presse",
      color: "bg-gray-300",
    },
    {
      id: "a3",
      title: "Magicien close-up pour DEMATHIEU BARD à METZ",
      excerpt:
        "Magie et Mentalisme, c’est l’animation idéale pour une soirée inoubliable.",
      date: "2025-09-05",
      read: 4,
      category: "Conseils",
      color: "bg-gray-200",
    },
    {
      id: "a4",
      title: "Interview radio : mentalisme en direct",
      excerpt:
        "Animation close-up pour PRECIPHAR à ST-QUENTIN EN YVELINES Soirée lors d’un séminaire organisée par PRECIFAR au Novotel de St-Quentin en Yvelines.",
      date: "2024-08-28",
      read: 2,
      category: "Événements",
      color: "bg-gray-200",
    },
    {
      id: "a5",
      title: "Magie close-up pour DOMICILE 90 à BELFORT",
      excerpt:
        "Magie close-up pour DOMICILE 90 à BELFORT Magie digitale et mentalisme interactif pour une soirée d’entreprise.",
      date: "2024-05-17",
      read: 3,
      category: "Backstage",
      color: "bg-gray-300",
    },
    {
      id: "a6",
      title: "Animation magie close-up pour CREDIT MUTUEL",
      excerpt:
        "Martial intervient pour la 10e année comme magicien mentaliste lors des Assemblées Générales du Crédit Mutuel dans toute l’Île-de-France.",
      date: "2024-03-21",
      read: 4,
      category: "Prestations",
      color: "bg-gray-200",
    },
  ];

  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("Tout");

  const filtered = allPosts.filter(
    (p) =>
      (category === "Tout" || p.category === category) &&
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  const featured = filtered[0] || allPosts[0];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé */}
      <Header showTopbar variant="light" />

      {/* Hero Actualités */}
      <section className="relative bg-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Actualités
          </motion.h1>
          <p className="mt-3 max-w-2xl text-gray-200">
            Derniers événements, conseils, coulisses et passages médias.
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
              <Input
                placeholder="Rechercher un article…"
                className="pl-9 bg-white text-gray-900"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-sm px-3 py-1.5 rounded-full border ${
                    category === c
                      ? "bg-white text-gray-900 border-gray-900"
                      : "bg-transparent text-gray-100 border-white/30 hover:bg-white/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article mis en avant */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <div className={`aspect-video ${featured.color}`} />
          </div>
          <div>
            <span className="inline-block text-xs px-2 py-1 rounded bg-gray-900 text-white">
              {featured.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">
              {featured.title}
            </h2>
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />{" "}
                {new Date(featured.date).toLocaleDateString("fr-FR")}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {featured.read} min
              </span>
            </div>
            <p className="mt-3 text-gray-700">{featured.excerpt}</p>
            <div className="mt-6 flex gap-3">
              <Button>Lire l&rsquo;article</Button>
              <Button variant="outline">Voir toutes les actus</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Layout principal : liste + sidebar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Liste des articles */}
          <div className="md:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <Card key={p.id} className="rounded-2xl overflow-hidden shadow-sm">
                  <div className={`aspect-[16/9] ${p.color}`} />
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span className="inline-block px-2 py-0.5 rounded bg-gray-900 text-white">
                        {p.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />{" "}
                        {new Date(p.date).toLocaleDateString("fr-FR")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {p.read} min
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-gray-700 line-clamp-2">
                      {p.excerpt}
                    </p>
                    <div className="mt-4">
                      <Button size="sm">Lire</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination (statique) */}
            <div className="mt-8 flex items-center justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" /> Précédent
              </Button>
              <div className="text-sm text-gray-600">Page 1 sur 5</div>
              <Button variant="outline" className="flex items-center gap-2">
                Suivant <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <h4 className="font-semibold">Inscription newsletter</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Recevez les nouvelles dates, vidéos et conseils.
                </p>
                <div className="mt-3 flex gap-2">
                  <Input placeholder="Votre email" />
                  <Button>S&rsquo;inscrire</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <h4 className="font-semibold">Catégories</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {categories
                    .filter((c) => c !== "Tout")
                    .map((c) => (
                      <li
                        key={c}
                        className="flex items-center justify-between"
                      >
                        <span>{c}</span>
                        <span className="text-gray-500">→</span>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <h4 className="font-semibold">Articles récents</h4>
                <ul className="mt-3 space-y-3 text-sm">
                  {allPosts.slice(0, 3).map((p) => (
                    <li key={p.id} className="flex items-start gap-3">
                      <div className={`w-14 h-10 rounded bg-gray-200 flex-shrink-0`} />
                      <div>
                        <div className="font-medium leading-snug">
                          {p.title}
                        </div>
                        <div className="text-xs text-gray-600">
                          {new Date(p.date).toLocaleDateString("fr-FR")} · {p.read}{" "}
                          min
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* CTA final */}
      <section
        className="py-16 bg-gray-950 text-gray-100 text-center"
        id="contact"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Un sujet à proposer ?</h2>
          <p className="mt-2 opacity-90">
            Presse, interviews, études de cas — écrivez-moi.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" className="bg-white text-gray-900">
              Me contacter
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer centralisé */}
      <Footer />
    </div>
  );
}