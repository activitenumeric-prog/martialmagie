// app/biographie/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BioPage() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé */}
      <Header showTopbar variant="light" />

      {/* Hero Biographie */}
      <section className="relative bg-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.35}} className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Biographie
          </motion.h1>
          <p className="mt-3 max-w-2xl text-gray-200">
            Parcours, influences et engagements de scène : l&rsquo;histoires derrière la magie et le mentalisme.
          </p>
          <div className="mt-6 flex gap-2">
            <Button asChild><a href="#histoire">Découvrir l&rsquo;histoires</a></Button>
            <Button variant="outline" className="bg-white text-gray-900">Voir les références</Button>
          </div>
        </div>
      </section>

      {/* Portrait + pitch */}
      <section id="histoire" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Image martial.png */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/martial.png"
              alt="Portrait de Théotim Martins, magicien et mentaliste"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">L&rsquo;artiste</h2>
            <p className="mt-3 text-gray-700">
              Martial est magicien mentaliste à Paris depuis 30 ans. Il vous invite en tant que magicien mentaliste à participer à des expériences au cours desquelles il vous dévoilera des informations personnelles. Ainsi, vous serez subjugués par ses performances et son humour.
            </p>
            <p className="mt-3 text-gray-700">
              Martial fera un court voyage dans le passé d’un spectateur. Ce dernier choisira librement dans son esprit le prénom d’un camarade de classe, l’année de sa fréquentation et une activité qu’ils partageaient ensemble. Ensuite, Martial sera en mesure de lui révéler ses pensées. Vous assisterez à un show bluffant, sensationnel et efficace avec un mentaliste qui se déplace partout en France, en Suisse et en Belgique pour agrémenter des événements d’entreprises.
            </p>
            <blockquote className="mt-4 italic text-gray-600 border-l-4 border-gray-200 pl-4">
              Martial vous propose ses services pour marquer vos soirées privées, mariages, anniversaires à domicile…
            </blockquote>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <Card><CardContent className="p-4"><div className="text-xl font-bold">400+</div><div className="text-xs">Avis Google</div></CardContent></Card>
              <Card><CardContent className="p-4"><div className="text-xl font-bold">FR / EN</div><div className="text-xs">Langues</div></CardContent></Card>
              <Card><CardContent className="p-4"><div className="text-xl font-bold">Close-up</div><div className="text-xs">&amp; Scène</div></CardContent></Card>
              <Card><CardContent className="p-4"><div className="text-xl font-bold">France</div><div className="text-xs">&amp; International</div></CardContent></Card>
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

      {/* Style &amp; influences */}
      <section className="py-16 bg-white">
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

      {/* Références &amp; distinctions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center">Références &amp; distinctions</h2>
          <p className="mt-2 text-center text-gray-700">Sélection d&rsquo;entreprises, lieux et événements ayant accueilli les prestations (placeholders).</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-80">
            {Array.from({length:12}).map((_,i)=> (
              <div key={i} className="h-14 bg-white rounded shadow-sm flex items-center justify-center text-xs">Logo</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ courte */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="bio-1">
              <AccordionTrigger>Quels sont les formats privilégiés ?</AccordionTrigger>
              <AccordionContent>Close-up pour la proximité et la fluidité, mentalisme pour l&rsquo;impact collectif &mdash; les deux peuvent se combiner selon la durée et le public.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="bio-2">
              <AccordionTrigger>Intervenez-vous à l&rsquo;international ?</AccordionTrigger>
              <AccordionContent>Oui &mdash; prestations en français, anglais, avec expérience d&rsquo;événements en France et à l&rsquo;étranger.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="bio-3">
              <AccordionTrigger>Peut-on adapter la préstation à notre identité ?</AccordionTrigger>
              <AccordionContent>Des effets et messages peuvent être personnalisés : intégration de thématiques, logo, ou créations dédiées pour des lancements.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gray-950 text-gray-100 text-center" id="contact">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Envie d&rsquo;en savoir plus ?</h2>
          <p className="mt-2 opacity-90">Discutons de votre événement et des formats possibles. Réponse rapide.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" className="bg-white text-gray-900">Demander un devis</Button>
            <Button size="lg" variant="outline" className="border-gray-300">Me contacter</Button>
          </div>
        </div>
      </section>

      {/* Footer centralisé */}
      <Footer />
    </div>
  );
}