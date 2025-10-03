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
            Parcours, influences et engagements de sc&egrave;ne : l&rsquo;histoires derri&egrave;re la magie et le mentalisme.
          </p>
          <div className="mt-6 flex gap-2">
            <Button asChild><a href="#histoire">D&eacute;couvrir l&rsquo;histoires</a></Button>
            <Button variant="outline" className="bg-white text-gray-900">Voir les r&eacute;f&eacute;rences</Button>
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
              alt="Portrait de Th&eacute;otim Martins, magicien et mentaliste"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">L&rsquo;artiste</h2>
            <p className="mt-3 text-gray-700">
              Magicien &amp; mentaliste professionnel bas&eacute; &agrave; Bordeaux, Th&eacute;otim d&eacute;veloppe un style moderne m&ecirc;lant magie visuelle, lecture de pens&eacute;e et humour. 
              Ses pr&eacute;stations sont con&ccedil;ues pour cr&eacute;er de v&eacute;ritables moments de partage, en close-up comme sur sc&egrave;ne.
            </p>
            <p className="mt-3 text-gray-700">
              La biographie met en avant l&rsquo;&eacute;volution artistique, les premi&egrave;res repr&eacute;sentations, l&rsquo;exigence technique et l&rsquo;importance donn&eacute;e &agrave; l&rsquo;interaction avec le public.
            </p>
            <blockquote className="mt-4 italic text-gray-600 border-l-4 border-gray-200 pl-4">
              &laquo; Faire vivre des &eacute;motions fortes, sans jamais prendre le public de haut : la magie comme langage universel. &raquo;
            </blockquote>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <Card><CardContent className="p-4"><div className="text-xl font-bold">300+</div><div className="text-xs">Avis Google</div></CardContent></Card>
              <Card><CardContent className="p-4"><div className="text-xl font-bold">FR / EN / ES</div><div className="text-xs">Langues</div></CardContent></Card>
              <Card><CardContent className="p-4"><div className="text-xl font-bold">Close-up</div><div className="text-xs">&amp; Sc&egrave;ne</div></CardContent></Card>
              <Card><CardContent className="p-4"><div className="text-xl font-bold">France</div><div className="text-xs">&amp; International</div></CardContent></Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / &Eacute;tapes cl&eacute;s */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">&Eacute;tapes cl&eacute;s</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {["D&eacute;buts et apprentissage","Premi&egrave;res pr&eacute;stations publiques","D&eacute;veloppement du style personnel","Ouverture aux &eacute;v&eacute;nements pro"].map((t,i)=> (
              <Card key={t} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500">20{10+i}&ndash;20{11+i}</div>
                  <h3 className="font-semibold mt-1">{t}</h3>
                  <p className="text-sm text-gray-700 mt-2">Texte descriptif court sur la p&eacute;riode, les apprentissages et les sc&egrave;nes marquantes (placeholder).</p>
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
            <p className="mt-3 text-gray-700">Magie visuelle, mentalisme participatif et humour bienveillant constituent la signature des pr&eacute;stations. Priorit&eacute; au rythme, au naturel des interactions et au respect du public.</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>&bull; Magie moderne &amp; impact visuel imm&eacute;diat</li>
              <li>&bull; Mentalisme interactif et surprenant</li>
              <li>&bull; Mise en sc&egrave;ne fluide, adapt&eacute;e &agrave; chaque lieu</li>
              <li>&bull; Exp&eacute;riences m&eacute;morables au service de l&rsquo;&eacute;v&eacute;nement</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.from({length:4}).map((_,i)=> (
              <div key={i} className="aspect-[4/3] rounded-2xl bg-gray-200" />
            ))}
          </div>
        </div>
      </section>

      {/* R&eacute;f&eacute;rences &amp; distinctions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center">R&eacute;f&eacute;rences &amp; distinctions</h2>
          <p className="mt-2 text-center text-gray-700">S&eacute;lection d&rsquo;entreprises, lieux et &eacute;v&eacute;nements ayant accueilli les pr&eacute;stations (placeholders).</p>
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
          <h2 className="text-3xl font-bold text-center mb-6">Questions fr&eacute;quentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="bio-1">
              <AccordionTrigger>Quels formats privil&eacute;giez-vous ?</AccordionTrigger>
              <AccordionContent>Close-up pour la proximit&eacute; et la fluidit&eacute;, mentalisme pour l&rsquo;impact collectif &mdash; les deux peuvent se combiner selon la dur&eacute;e et le public.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="bio-2">
              <AccordionTrigger>Intervenez-vous &agrave; l&rsquo;international ?</AccordionTrigger>
              <AccordionContent>Oui &mdash; pr&eacute;stations en fran&ccedil;ais, anglais et espagnol, avec exp&eacute;rience d&rsquo;&eacute;v&eacute;nements en France et &agrave; l&rsquo;&eacute;tranger.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="bio-3">
              <AccordionTrigger>Peut-on adapter la pr&eacute;station &agrave; notre identit&eacute; ?</AccordionTrigger>
              <AccordionContent>Des effets et messages peuvent &ecirc;tre personnalis&eacute;s : int&eacute;gration de th&eacute;matiques, logo, ou cr&eacute;ations d&eacute;di&eacute;es pour des lancements.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gray-950 text-gray-100 text-center" id="contact">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Envie d&rsquo;en savoir plus ?</h2>
          <p className="mt-2 opacity-90">Discutons de votre &eacute;v&eacute;nement et des formats possibles. R&eacute;ponse rapide.</p>
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