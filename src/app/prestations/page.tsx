// src/app/prestations/page.tsx
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"; // ← Ajout

export default function ServicesPage() {
  const services = [
    {
      id: "closeup",
      title: "Magicien Close‑Up",
      desc:
        "Animation mobile au plus près des invités — idéal pour cocktails, vins d’honneur et dîners.",
      bullets: [
        "Passages de table en table / groupes debout",
        "Magie visuelle et mentalisme, forte interactivité",
        "Format flexible (de 45 min à 3 h suivant l’événement)",
      ],
    },
    {
      id: "mariages",
      title: "Mariages",
      desc:
        "Moments d’émerveillement pendant le vin d’honneur, le repas ou l’ouverture de bal.",
      bullets: [
        "Accueil des invités & brise‑glace",
        "Tours personnalisés pour les mariés",
        "Coordination avec DJ / traiteur pour un timing fluide",
      ],
    },
    {
      id: "anniversaires",
      title: "Anniversaires",
      desc:
        "Prestation sur‑mesure pour enfants, ados ou adultes — à domicile ou en salle.",
      bullets: [
        "Spectacle court + close‑up parmi les invités",
        "Participation du public et souvenirs personnalisés",
        "Adapté à l’espace et au nombre de convives",
      ],
    },
    {
      id: "mentalisme",
      title: "Spectacle de Mentalisme",
      desc:
        "Expériences de lecture de pensée et prédictions spectaculaires — sur scène ou en salon.",
      bullets: [
        "De 20 à 60 minutes selon le contexte",
        "Mise en scène dynamique + humour",
        "Implication du public en toute bienveillance",
      ],
    },
    {
      id: "digital",
      title: "Magie digitale & marketing",
      desc:
        "Créations sur iPad / smartphone pour stands et lancements — parfaite pour attirer et retenir l’attention.",
      bullets: [
        "Personnalisation à la marque (logos, messages, produits)",
        "Lead‑gen et mécanique d’animation de stand",
        "Idéal salons, retail, soirées RP",
      ],
    },
    {
      id: "seminaires",
      title: "Séminaires & congrès",
      desc:
        "Ice‑breakers, interludes scéniques et moments fédérateurs pour vos équipes.",
      bullets: [
        "Ouvertures / transitions de plénière",
        "Messages clés intégrés dans les effets",
        "FR / EN / ES — déplacements France & international",
      ],
    },
  ]

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé (topbar incluse) */}
      <Header showTopbar variant="light" />

      {/* Hero Prestations */}
      <section className="relative bg-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.35}} className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Prestations de magie & mentalisme
          </motion.h1>
          <p className="mt-3 max-w-2xl text-gray-200">
            Choisissez le format adapté à votre événement : mariages, entreprises, anniversaires, séminaires, salons…
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`} className="text-sm px-3 py-1.5 rounded-full bg-white text-gray-900 border border-white/20 hover:bg-gray-100">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu des offres (cards) */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ id, title, desc }) => (
              <Card key={id} className="rounded-2xl overflow-hidden shadow-sm">
                <div className="h-40 bg-gray-200" aria-hidden />
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Button size="sm" asChild>
                      <a href={`#${id}`}>Voir le détail</a>
                    </Button>
                    <Button size="sm" variant="outline">Demander un devis</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sections détaillées */}
      {services.map(({ id, title, desc, bullets }, idx) => (
        <section id={id} key={id} className={"py-16 " + (idx % 2 === 0 ? "bg-gray-50" : "bg-white") }>
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[16/10] rounded-2xl bg-gray-200" />
            <div>
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="mt-3 text-gray-700">{desc}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2.5 bg-gray-900 rounded-full flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Button>Demander un devis</Button>
                <Button variant="outline">En savoir plus</Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Tarification indicative */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Tarification indicative</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Début de soirée (1h)", "Soirée complète (2–3h)", "Événement sur-mesure"].map((tier) => (
              <Card key={tier} className={`rounded-2xl shadow-sm border ${tier === "Événement sur-mesure" ? "border-gray-900" : ''}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{tier}</h3>
                  <p className="text-sm text-gray-600 mt-1">Sur devis</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li>• Durée adaptée à l’événement</li>
                    <li>• Matériel son / lumière si nécessaire</li>
                    <li>• Personnalisation possible</li>
                    <li>• FR / EN / ES</li>
                  </ul>
                  <Button className="mt-5 w-full">Demander un devis</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Vous déplacez‑vous en dehors de Paris ?</AccordionTrigger>
              <AccordionContent>
                Oui, déplacements partout en France et à l’international selon le planning. Les frais sont précisés au devis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Combien de temps dure une prestation ?</AccordionTrigger>
              <AccordionContent>
                Du format court (20–30 min) au format long (jusqu’à 4 h en close‑up). La durée est ajustée en fonction du nombre d’invités et du rythme de l’événement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quels sont les besoins techniques ?</AccordionTrigger>
              <AccordionContent>
                Close‑up : pas de besoin spécifique. Scène / mentalisme : un espace dégagé et, selon la taille, micro HF + sonorisation. Ces éléments peuvent être fournis si nécessaire.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Peut‑on personnaliser la prestation ?</AccordionTrigger>
              <AccordionContent>
                Oui — intégration de messages, logos, thématiques, voire créations sur‑mesure pour lancements de produits et animations de stand.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gray-950 text-gray-100 text-center" id="contact">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Parlons de votre événement</h2>
          <p className="mt-2 opacity-90">Indiquez la date, le lieu et le nombre d’invités : réponse sous 24 h.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" className="bg-white text-gray-900">Demander un devis</Button>
            <Button size="lg" variant="outline" className="border-gray-300">Vérifier la disponibilité</Button>
          </div>
        </div>
      </section>

      {/* Footer centralisé */}
      <Footer />
    </div>
  )
}