// app/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
            Magicien de Paris &amp; Mentaliste Professionnel
          </motion.h1>
          <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg opacity-90">
            Magie moderne, visuelle et interactive pour mariages, entreprises et &eacute;v&eacute;nements priv&eacute;s. + de 300 avis clients v&eacute;rif&eacute;s.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button size="lg" asChild><Link href="/galerie-video">D&eacute;couvrir le teaser</Link></Button>
            <Button variant="outline" size="lg" className="bg-white text-gray-900">Consulter les avis</Button>
          </div>
        </div>
      </section>

      {/* Bande preuves sociales */}
      <section className="border-y bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div><div className="text-2xl font-bold">300+</div> Avis Google</div>
          <div><div className="text-2xl font-bold">FR / EN / ES</div> Langues</div>
          <div><div className="text-2xl font-bold">France &amp; Intl.</div> D&eacute;placements</div>
          <div><div className="text-2xl font-bold">Close-up &amp; Sc&egrave;ne</div> Polyvalence</div>
        </div>
      </section>

      {/* Prestations */}
      <section id="prestations" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Prestations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Magicien Close-Up", desc: "Animation mobile au plus pr&egrave;s des invit&eacute;s, id&eacute;ale cocktail &amp; d&icirc;ner." },
              { title: "Magicien pour Mariage", desc: "Vin d&rsquo;honneur, repas, ouverture de bal : &eacute;merveillement garanti." },
              { title: "Anniversaires", desc: "Prestation sur-mesure pour enfants, ados ou adultes." },
              { title: "Spectacle de Mentalisme", desc: "D&eacute;monstrations bluffantes, participation du public, humour." },
              { title: "Magie digitale &amp; marketing", desc: "Attraction de stand, product reveal, exp&eacute;riences connect&eacute;es." },
              { title: "S&eacute;minaires &amp; congr&egrave;s", desc: "Ice-breaker, interludes sc&eacute;niques, moments f&eacute;d&eacute;rateurs." },
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
                D&eacute;couvrez le teaser et des extraits de pr&eacute;stations : close-up, mentalisme et sc&egrave;nes d&rsquo;entreprise.
              </p>
              <div className="flex gap-3">
                <Button asChild><Link href="/galerie-video">Voir le teaser</Link></Button>
                <Button variant="outline" asChild><Link href="/galerie-video">+ de vid&eacute;os</Link></Button>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Références logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Ils m&rsquo;ont fait confiance</h2>
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
            <h2 className="text-3xl font-bold mb-3">Pourquoi choisir Th&eacute;otim ?</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&bull; Style moderne : magie visuelle + mentalisme + humour.</li>
              <li>&bull; Forte interactivit&eacute; et adaptation &agrave; tous les publics.</li>
              <li>&bull; 300+ avis Google et r&eacute;f&eacute;rences vari&eacute;es.</li>
              <li>&bull; Prestation possible en FR / EN / ES, en France et &agrave; l&rsquo;international.</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <Button>T&eacute;l&eacute;charger la plaquette</Button>
              <Button variant="outline" asChild><Link href="/biographie">Me contacter</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section id="contact" className="py-16 bg-gray-950 text-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Parlons de votre &eacute;v&eacute;nement</h2>
          <p className="mt-2 opacity-90">
            Mariage, soir&eacute;e d&rsquo;entreprise, anniversaire, s&eacute;minaire : je vous r&eacute;ponds sous 24h.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" className="bg-white text-gray-900">Demander un devis</Button>
            <Button size="lg" variant="outline" className="border-gray-300">M&rsquo;appeler</Button>
          </div>
        </div>
      </section>

      {/* Footer centralisé */}
      <Footer />
    </div>
  );
}