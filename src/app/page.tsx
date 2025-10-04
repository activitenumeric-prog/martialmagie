// src/app/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// Ajoute cette ligne après les imports existants
import GoogleReviews from "@/components/GoogleReviews";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé (topbar incluse) */}
      <Header showTopbar variant="light" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Magicien de Paris & Mentaliste Professionnel
          </motion.h1>
          <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg opacity-90">
            Magie moderne, visuelle et interactive pour mariages, entreprises et événements privés. + de 300 avis clients vérifiés.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button size="lg" asChild><Link href="/galerie-video">Découvrir le teaser</Link></Button>
            <Button variant="outline" size="lg" className="bg-white text-gray-900">Consulter les avis</Button>
          </div>
        </div>
      </section>

      {/* Bande preuves sociales */}
      <section className="border-y bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <div className="text-2xl font-bold"><GoogleReviews placeId="ChIJN1t_tDeu5kcRUlarG-kbA8M" /></div> 
            <div><Link href="https://www.google.com/maps/place/Martial+Magicien+digital+Mentaliste" target="_blank" rel="noopener noreferrer" className="text-xs underline hover:text-gray-600">
              Avis Google
            </Link></div>
          </div>
          <div><div className="text-2xl font-bold">FR / EN</div> Langues</div>
          <div><div className="text-2xl font-bold">France & Intl.</div> Déplacements</div>
          <div><div className="text-2xl font-bold">Close-up & Scène</div> Polyvalence</div>
        </div>
      </section>

      
            

      {/* Prestations */}
      <section id="prestations" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Prestations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Magicien Close-Up", desc: "Animation mobile au plus près des invités, idéale cocktail & dîner." },
              { title: "Magicien pour Mariage", desc: "Vin d’honneur, repas, ouverture de bal : émerveillement garanti." },
              { title: "Anniversaires", desc: "Prestation sur-mesure pour enfants, ados ou adultes." },
              { title: "Spectacle de Mentalisme", desc: "Démonstrations bluffantes, participation du public, humour." },
              { title: "Magie digitale & marketing", desc: "Attraction de stand, product reveal, expériences connectées." },
              { title: "Séminaires & congrès", desc: "Ice-breaker, interludes scéniques, moments fédérateurs." },
            ].map(({ title, desc }) => (
              <Card key={title} className="shadow-sm rounded-2xl overflow-hidden">
                <div className="h-36 bg-gray-200" aria-hidden />
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Button size="sm" asChild><Link href="/prestations">En savoir plus</Link></Button>
                    <Button size="sm" variant="outline">Demander un devis</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vidéos / Teaser */}
      <section id="videos" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-3">Vidéos</h2>
              <p className="text-gray-700 mb-4">
                Découvrez le teaser et des extraits de prestations : close-up, mentalisme et scènes d’entreprise.
              </p>
              <div className="flex gap-3">
                <Button asChild><Link href="/galerie-video">Voir le teaser</Link></Button>
                <Button variant="outline" asChild><Link href="/galerie-video">+ de vidéos</Link></Button>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-gray-200 overflow-hidden"> {/* Ajoute overflow-hidden pour clipper si besoin */}
              <iframe
                src="https://www.youtube.com/embed/rY9_wkeJPuw?start=5"
                title="Vidéo de présentation Martial Magie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-2xl" // Remplit tout le div
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Références logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Ils m&lsquo;ont fait confiance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-80">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-14 bg-white rounded shadow-sm flex items-center justify-center text-xs">
                Logo
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi me choisir */}
      <section className="py-16 bg-white" id="bio">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/5] rounded-2xl bg-gray-200" />
          <div>
            <h2 className="text-3xl font-bold mb-3">Pourquoi choisir Martial ?</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Style moderne : magie visuelle + mentalisme + humour.</li>
              <li>• Forte interactivité et adaptation à tous les publics.</li>
              <li>• 300+ avis Google et références variées.</li>
              <li>• Prestation possible en FR / EN, en France et à l’international.</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <Button>Télécharger la plaquette</Button>
              <Button variant="outline" asChild><Link href="/biographie">Me contacter</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section id="contact" className="py-16 bg-gray-950 text-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Parlons de votre événement</h2>
          <p className="mt-2 opacity-90">
            Mariage, soirée d’entreprise, anniversaire, séminaire : je vous réponds sous 24h.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" className="bg-white text-gray-900">Demander un devis</Button>
            <Button size="lg" variant="outline" className="border-gray-300">M’appeler</Button>
          </div>
        </div>
      </section>

      {/* Footer centralisé */}
      <Footer />
    </div>
  );
}