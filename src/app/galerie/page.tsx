// app/galerie/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
// Supprimé : Card, CardContent (inutilisés)
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Search, ZoomIn, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function PhotoGalleryPage() {
  const categories = ["Tout","Close-Up","Mariages","Entreprises","Scène","Backstage","Portraits","Digital & Marketing","Séminaires"];
  const allPhotos = [
    { id:"p1", title:"Close-Up au cocktail", category:"Close-Up", h:"h-72", color:"bg-gray-200" },
    { id:"p2", title:"Mariage — vin d’honneur", category:"Mariages", h:"h-96", color:"bg-gray-300" },
    { id:"p3", title:"Séance entreprise", category:"Entreprises", h:"h-80", color:"bg-gray-200" },
    { id:"p4", title:"Mentalisme sur scène", category:"Scène", h:"h-64", color:"bg-gray-200" },
    { id:"p5", title:"Coulisses — préparation", category:"Backstage", h:"h-72", color:"bg-gray-300" },
    { id:"p6", title:"Portrait — Noir & blanc", category:"Portraits", h:"h-80", color:"bg-gray-200" },
    { id:"p7", title:"Digital — animation de stand", category:"Digital & Marketing", h:"h-72", color:"bg-gray-200" },
    { id:"p8", title:"Séminaire — ice-breaker", category:"Séminaires", h:"h-96", color:"bg-gray-300" },
    { id:"p9", title:"Close-Up — table à table", category:"Close-Up", h:"h-64", color:"bg-gray-200" },
    { id:"p10", title:"Mariage — ouverture de bal", category:"Mariages", h:"h-80", color:"bg-gray-200" },
    { id:"p11", title:"Showcase — entreprise", category:"Entreprises", h:"h-72", color:"bg-gray-300" },
    { id:"p12", title:"Scène — final", category:"Scène", h:"h-80", color:"bg-gray-200" },
  ];

  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("Tout");
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const filtered = allPhotos.filter(v =>
    (category === "Tout" || v.category === category) &&
    v.title.toLowerCase().includes(query.toLowerCase())
  );

  function openAt(idx:number) { setActiveIndex(idx); setOpen(true); }
  function prev() { setActiveIndex((i)=> (i-1+filtered.length)%filtered.length); }
  function next() { setActiveIndex((i)=> (i+1)%filtered.length); }

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé */}
      <Header showTopbar variant="light" />

      {/* Hero Galerie */}
      <section className="relative bg-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.35}} className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
            Galerie photo
          </motion.h1>
          <p className="mt-3 max-w-2xl text-gray-200">Moments capturés en close-up, sur scène et lors d’événements privés & professionnels.</p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
              <Input placeholder="Rechercher une photo…" className="pl-9 bg-white text-gray-900" value={query} onChange={(e) => setQuery(e.target.value)} />
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

      {/* Compteur */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2"><Camera className="h-4 w-4"/> {filtered.length} photos</div>
          <div className="opacity-70">Filtre : <span className="font-medium">{category}</span></div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {filtered.map((p, idx) => (
              <div key={p.id} className="mb-4 break-inside-avoid">
                <div className={`relative group rounded-2xl overflow-hidden ${p.h} ${p.color}`}>
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                          onClick={() => openAt(idx)} aria-label={`Agrandir ${p.title}`}>
                    <div className="p-3 rounded-full bg-white/90 shadow"><ZoomIn className="h-5 w-5" /></div>
                  </button>
                  <div className="absolute left-2 top-2 text-xs px-2 py-1 rounded bg-black/70 text-white">{p.category}</div>
                  <div className="absolute left-2 bottom-2 text-sm px-2 py-1 rounded bg-black/60 text-white">{p.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button size="lg">Charger plus de photos</Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl">
          <DialogHeader><DialogTitle>{filtered[activeIndex]?.title || "Photo"}</DialogTitle></DialogHeader>
          <div className="relative w-full">
            <div className="aspect-[16/10] w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
              <div className="w-full h-full bg-gray-700" />
            </div>
            <div className="absolute inset-y-0 left-2 flex items-center">
              <button onClick={prev} className="p-2 rounded-full bg-white/90 shadow"><ChevronLeft className="h-5 w-5"/></button>
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button onClick={next} className="p-2 rounded-full bg-white/90 shadow"><ChevronRight className="h-5 w-5"/></button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Appel à l'action */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat text-gray-100 text-center" style={{ backgroundImage: "url('/images/bleu-nuit.png')" }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-black">Prêt à créer de la magie ?</h2>
          <p className="text-lg text-gray-800 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Contactez-moi pour discuter de votre événement et transformer l’ordinaire en extraordinaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/prestations">Découvrir les prestations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer centralisé */}
      <Footer />
    </div>
  );
}