// app/biographie/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function BioPage() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé */}
      <Header showTopbar variant="light" />

      <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display">
              Martial — <span className="text-[#ef010d] ">Magicien & Mentaliste</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Close-up, mentalisme et magie digitale au service de vos événements : mariages,
              séminaires, soirées privées & d’entreprise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="inline-flex items-center rounded-lg px-5 py-3 text-white font-semibold" size="lg">
                Demander un devis
              </Button>
              <Button className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-3 font-semibold" size="lg">
                Appeler : +33 6 07 70 92 19
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500">Portrait (placeholder)</div>
          </div>
        </div>
      </section>

      {/* EN DEUX MOTS */}
      <section className="py-10 md:py-14 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold">En deux mots</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-3 text-gray-800">
            <li>• Magicien professionnel, spécialiste du close-up et du mentalisme</li>
            <li>• Magie digitale interactive pour stands, lancements & cocktails</li>
            <li>• Approche conviviale : créer des souvenirs communs et des moments “wow”</li>
            <li>• Intervient en français et en anglais</li>
            <li>• Mariages, séminaires, soirées privées & événements d’entreprise</li>
            <li>• Matériel autonome, prestations adaptables au lieu et au timing</li>
          </ul>
        </div>
      </section>
      {/* Style &amp; influences */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Style &amp; influences</h2>
            <p className="mt-3 text-gray-700">Magie visuelle, mentalisme participatif et humour bienveillant constituent la signature des prestations. Priorité au rythme, au naturel des interactions et au respect du public.</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>&bull; Magie moderne &amp; impact visuel immédiat</li>
              <li>&bull; Mentalisme interactif et surprenant</li>
              <li>&bull; Mise en scène fluide, adaptée à chaque lieu</li>
              <li>&bull; Expériences mémorables au service de l&rsquo;événement</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.from({length:4}).map((_,i)=> (
              <div key={i} className="aspect-[4/3] rounded-2xl bg-gray-200" />
            ))}
          </div>
        </div>
      </section>
      {/* MON PARCOURS */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold">Mon parcours</h2>
            <p className="mt-4 text-gray-700">
              D’une première découverte fascinée à une pratique assidue, j’ai affûté ma magie au contact du public :
              scènes locales, événements privés, puis collaborations pour des marques et des agences. Au fil des
              rencontres et formations, j’ai choisi le close-up et le mentalisme pour leur proximité et l’intensité
              des réactions qu’ils provoquent. Aujourd’hui, j’accompagne vos moments importants en créant des parenthèses
              conviviales dont on parle encore le lendemain.
            </p>
            <p className="mt-4 text-gray-700">
              Mon credo : une magie élégante, moderne et chaleureuse — où la technique s’efface au profit du souvenir.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 font-semibold" size="lg">
                Voir les prestations
              </Button>
              <Button className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 font-semibold" size="lg">
                Voir des vidéos
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="font-semibold">Prestations phares</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><span className="underline">Close-up</span> — circulation parmi vos invités, miracles à quelques centimètres.</li>
                <li><span className="underline">Mentalisme</span> — influence, prédictions & expériences impossibles.</li>
                <li><span className="underline">Magie digitale</span> — interactions sur tablette/téléphone, parfait pour l’image de marque.</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="font-semibold">Contact direct</h3>
              <p className="mt-2 text-sm text-gray-700">
                Tél. : <span className="underline">+33 6 07 70 92 19</span><br />
                Email : <span className="underline">spectacle@martialmagie.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline / étapes clés */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">étapes clés</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {["Débuts et apprentissage","Premières prestations publiques","Développement du style personnel","Ouverture aux événements pro"].map((t,i)=> (
              <Card key={t} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500">20{10+i}&ndash;20{11+i}</div>
                  <h3 className="font-semibold mt-1">{t}</h3>
                  <p className="text-sm text-gray-700 mt-2">Texte descriptif court sur la période, les apprentissages et les scènes marquantes (placeholder).</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
        {/* PREUVES / LOGOS */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold">Ils m’ont fait confiance</h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-80">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-14 rounded-lg border bg-gray-50" />
              ))}
            </div>
          </div>
        </section>

        {/* ZONES D’INTERVENTION */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold">Je me déplace</h2>
            <p className="mt-4 text-gray-700">
              Basé dans les Hauts-de-France, j’interviens régulièrement à Lille, Paris, Luxembourg et Genève — et partout en France.
            </p>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <details className="rounded-xl border p-5">
                <summary className="font-semibold cursor-pointer">Combien de temps dure une prestation ?</summary>
                <p className="mt-2 text-gray-700">
                  De 45 minutes à 3 heures selon le format (cocktail, dîner, salon). On ajuste au nombre d’invités.
                </p>
              </details>
              <details className="rounded-xl border p-5">
                <summary className="font-semibold cursor-pointer">Faut-il du matériel spécifique ?</summary>
                <p className="mt-2 text-gray-700">
                  Non : je suis autonome. Pour les shows scéniques, un micro HF et une zone dégagée sont idéaux.
                </p>
              </details>
              <details className="rounded-xl border p-5">
                <summary className="font-semibold cursor-pointer">La magie convient-elle aux mariages ?</summary>
                <p className="mt-2 text-gray-700">
                  Oui, c’est parfait en vin d’honneur et entre les plats pour dynamiser le dîner.
                </p>
              </details>
              <details className="rounded-xl border p-5">
                <summary className="font-semibold cursor-pointer">Vous vous déplacez hors de France ?</summary>
                <p className="mt-2 text-gray-700">
                  Possible sur demande (Belgique, Luxembourg, Suisse). Parlons-en.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
      
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