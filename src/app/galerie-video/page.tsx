// app/galerie/galerie-video/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer"; // ← Ajout
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Play, Search, Clock } from "lucide-react";
import * as React from "react";

export default function VideoGalleryPage() {
  const categories = ["Tout","Close-Up","Mariages","Entreprises","Mentalisme","Digital & Marketing","Séminaires"];
  const allVideos = [
    { id: "v1", title: "Teaser — Magie & Mentalisme", category: "Entreprises", duration: "01:12", src: "https://www.youtube.com/embed/VIDEO_ID_1", color: "bg-gray-300" },
    { id: "v2", title: "Close-Up au cocktail", category: "Close-Up", duration: "00:48", src: "https://www.youtube.com/embed/VIDEO_ID_2", color: "bg-gray-200" },
    { id: "v3", title: "Mariage — Vin d’honneur", category: "Mariages", duration: "01:05", src: "https://www.youtube.com/embed/VIDEO_ID_3", color: "bg-gray-200" },
    { id: "v4", title: "Séminaire — Ice-breaker", category: "Séminaires", duration: "00:54", src: "https://www.youtube.com/embed/VIDEO_ID_4", color: "bg-gray-300" },
    { id: "v5", title: "Mentalisme sur scène", category: "Mentalisme", duration: "01:22", src: "https://www.youtube.com/embed/VIDEO_ID_5", color: "bg-gray-200" },
    { id: "v6", title: "Magie digitale (stand)", category: "Digital & Marketing", duration: "00:41", src: "https://www.youtube.com/embed/VIDEO_ID_6", color: "bg-gray-200" },
    { id: "v7", title: "Anniversaire — Salon privé", category: "Entreprises", duration: "00:59", src: "https://www.youtube.com/embed/VIDEO_ID_7", color: "bg-gray-300" },
    { id: "v8", title: "Close-Up — Table à table", category: "Close-Up", duration: "01:07", src: "https://www.youtube.com/embed/VIDEO_ID_8", color: "bg-gray-200" },
    { id: "v9", title: "Showcase — Extraits", category: "Entreprises", duration: "01:36", src: "https://www.youtube.com/embed/VIDEO_ID_9", color: "bg-gray-200" },
  ];

  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("Tout");
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<any>(null);

  const filtered = allVideos.filter(v =>
    (category === "Tout" || v.category === category) &&
    v.title.toLowerCase().includes(query.toLowerCase())
  );

  const featured = allVideos[0];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé */}
      <Header showTopbar variant="light" />

      {/* Hero Galerie Vidéo */}
      <section className="relative bg-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.35}} className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Galerie vidéo
          </motion.h1>
          <p className="mt-3 max-w-2xl text-gray-200">Extraits de prestations : close-up, mentalisme, mariages et événements d’entreprise.</p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
              <Input placeholder="Rechercher une vidéo…" className="pl-9 bg-white text-gray-900" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCategory(c)}
                  className={`text-sm px-3 py-1.5 rounded-full border ${category===c?"bg-white text-gray-900 border-gray-900":"bg-transparent text-gray-100 border-white/30 hover:bg-white/10"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo mise en avant */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <Card className="rounded-2xl shadow-sm">
            <div className="aspect-video relative flex items-center justify-center bg-gray-200">
              <button className="absolute inset-0 flex items-center justify-center" onClick={() => { setActive(featured); setOpen(true); }} aria-label="Lire la vidéo">
                <div className="p-4 rounded-full bg-white/90 shadow"><Play className="h-6 w-6" /></div>
              </button>
            </div>
          </Card>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{featured.title}</h2>
            <p className="mt-2 text-gray-700">Teaser condensé des meilleures séquences : close-up, mentalisme participatif et moments d’entreprise.</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featured.duration}</span>
              <span>Catégorie : {featured.category}</span>
            </div>
            <div className="mt-6 flex gap-3">
              <Button onClick={() => { setActive(featured); setOpen(true); }}>Voir la vidéo</Button>
              <Button variant="outline">Plus de vidéos</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Grille des vidéos */}
      <section className="py-4 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v) => (
              <Card key={v.id} className="rounded-2xl overflow-hidden shadow-sm">
                <div className={`aspect-video relative ${v.color}`}>
                  <button className="absolute inset-0 flex items-center justify-center" onClick={() => { setActive(v); setOpen(true); }} aria-label={`Lire ${v.title}`}>
                    <div className="p-3 rounded-full bg-white/90 shadow"><Play className="h-5 w-5" /></div>
                  </button>
                  <div className="absolute left-2 top-2 text-xs px-2 py-1 rounded bg-black/70 text-white">{v.category}</div>
                  <div className="absolute right-2 bottom-2 text-xs px-2 py-1 rounded bg-black/70 text-white flex items-center gap-1"><Clock className="h-3 w-3" /> {v.duration}</div>
                </div>
                <CardContent className="p-4">
                  <div className="font-semibold text-sm">{v.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline">Charger plus de vidéos</Button>
          </div>
        </div>
      </section>

      {/* Dialog lecteur vidéo */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader><DialogTitle>{active?.title || "Lecture"}</DialogTitle></DialogHeader>
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            {active && (
              <iframe className="w-full h-full" src={active.src} title={active.title} frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA final */}
      <section className="py-16 bg-gray-950 text-gray-100 text-center" id="contact">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Vous voulez plus d’extraits ?</h2>
          <p className="mt-2 opacity-90">Envoyez une demande et recevez une sélection adaptée à votre événement.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" className="bg-white text-gray-900">Demander une sélection</Button>
            <Button size="lg" variant="outline" className="border-gray-300">Me contacter</Button>
          </div>
        </div>
      </section>

      {/* Footer centralisé */}
      <Footer />
    </div>
  );
}