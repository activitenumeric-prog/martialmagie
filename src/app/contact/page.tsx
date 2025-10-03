// app/contact/page.tsx
"use client";

import * as React from "react"
import { motion } from "framer-motion"
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // ← Ajout
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Calendar, Users, Send, Shield } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé */}
      <Header showTopbar variant="light" />

      {/* Hero */}
      <section className="relative bg-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Contact & Devis
          </motion.h1>
          <p className="mt-3 max-w-2xl text-gray-200">
            Dites-moi votre date, le lieu et le type d’événement. Réponse rapide avec recommandations et devis.
          </p>

          {/* Bande d’infos directes */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <a href="tel:+33607709219" className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
              <Phone className="h-4 w-4" /> +33 6 07 70 92 19
            </a>
            <a href="mailto:spectacle@martialmagie.com" className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
              <Mail className="h-4 w-4" /> spectacle@martialmagie.com
            </a>
            <div className="hidden lg:flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
              <Shield className="h-4 w-4" /> Devis sans engagement
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire + Sidebar */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Blocs info (ex-sidebar) remontés au-dessus du formulaire */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold">Coordonnées directes</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +33 6 07 70 92 19</li>
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> spectacle@martialmagie.com</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bordeaux — Déplacements France & Intl.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold">Infos utiles</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Réponse rapide et conseils sur-mesure</li>
                  <li>Prestations FR / EN / ES</li>
                  <li>Close-up, mentalisme & formats scéniques</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire + Image à droite */}
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Form - mêmes composants Input & Button */}
            <Card className="lg:col-span-2 rounded-2xl shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold">Demande de devis</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Renseignez quelques détails pour une estimation adaptée à votre événement.
                </p>

                <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
                  {/* Société & Nom */}
                  <div>
                    <label className="text-sm font-medium">Société</label>
                    <Input placeholder="Nom de l’entreprise (facultatif)" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Nom</label>
                    <Input placeholder="Votre nom et prénom" />
                  </div>

                  {/* Téléphone & Email */}
                  <div>
                    <label className="text-sm font-medium">Téléphone</label>
                    <Input type="tel" placeholder="+33 6 00 00 00 00" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="votre@email.com" />
                  </div>

                  {/* Adresse & Code Postal */}
                  <div>
                    <label className="text-sm font-medium">Adresse</label>
                    <Input placeholder="N° et rue" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Code Postal</label>
                    <Input placeholder="Ex. 33000" />
                  </div>

                  {/* Ville & Date de l’événement */}
                  <div>
                    <label className="text-sm font-medium">Ville</label>
                    <Input placeholder="Bordeaux, Paris, Genève…" />
                  </div>
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2"><Calendar className="h-4 w-4" /> Date de l’événement</label>
                    <Input type="date" />
                  </div>

                  {/* Lieu de l’événement & Nombre d’invités */}
                  <div>
                    <label className="text-sm font-medium">Lieu de l’événement</label>
                    <Input placeholder="Nom du lieu / salle" />
                  </div>
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2"><Users className="h-4 w-4" /> Nombre d’invités</label>
                    <Input type="number" min={1} placeholder="Ex. 120" />
                  </div>

                  {/* Options complémentaires (facultatif) */}
                  <div>
                    <label className="text-sm font-medium">Type d’événement (facultatif)</label>
                    <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10">
                      <option value="">Choisir…</option>
                      <option>Mariage</option>
                      <option>Entreprise / Séminaire</option>
                      <option>Anniversaire</option>
                      <option>Soirée privée</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Budget indicatif (facultatif)</label>
                    <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10">
                      <option value="">Choisir…</option>
                      <option>– 800 €</option>
                      <option>800 – 1 500 €</option>
                      <option>1 500 – 3 000 €</option>
                      <option>3 000 € +</option>
                    </select>
                  </div>

                  {/* Description de l’événement */}
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">Description de l’événement</label>
                    <textarea
                      rows={5}
                      placeholder="Décrivez votre besoin (format souhaité, durée, contraintes éventuelles)…"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    />
                  </div>

                  {/* RGPD */}
                  <div className="md:col-span-2 text-xs text-gray-600 space-y-3">
                    <label className="flex items-start gap-2 text-sm">
                      <input id="rgpd" type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                      <span>
                        En soumettant ce formulaire j&rsquo;accepte que les données saisies soient exploitées dans le cadre de la demande de devis et de la relation commerciale qui peut en découler.
                      </span>
                    </label>
                    <p>
                      Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par Martial Magie pour Demande de devis, demande de contact, emailing et toutes relations commerciales qui en découle. Vos données personnelles sont conservées pendant 1 an et sont destinées à Martial Bacquias.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="md:col-span-2">
                    <Button size="lg" className="inline-flex items-center gap-2">
                      <Send className="h-4 w-4" /> Envoyer la demande
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Emplacement image (à la place des ex-blocs) */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[3/4] bg-gray-100">
                  <Image
                    src="/images/martial-magicien-photo-accueil.png"
                    alt="Martial Magie"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={346}
                    height={462}
                  />
                </div>
              </div>
              <p className="mt-3 pt-12 text-[2rem] leading-tight text-gray-700" style={{ fontFamily: '"Trebuchet MS", script' }}>
                Contactez-moi à l&rsquo;aide de ce formulaire ou par téléphone au<br />
                <a href="tel:+33607709219" className="font-semibold text-red-600 hover:text-red-700" style={{ fontFamily: '"Trebuchet MS", script', fontSize: '2rem' }}>+33 (0)6 07 70 92 19</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carte / zone de couverture (placeholder) */}
      <section className="py-6 bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="aspect-[16/6] rounded-xl bg-gray-200" aria-hidden />
        </div>
      </section>

      {/* FAQ courte */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Questions rapides</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <Card><CardContent className="p-4">
              <div className="font-semibold">Délais de réponse</div>
              <p className="mt-1 text-gray-700">Généralement sous 24 h (jours ouvrés).</p>
            </CardContent></Card>
            <Card><CardContent className="p-4">
              <div className="font-semibold">Zones d’intervention</div>
              <p className="mt-1 text-gray-700">France & international selon planning.</p>
            </CardContent></Card>
            <Card><CardContent className="p-4">
              <div className="font-semibold">Personnalisation</div>
              <p className="mt-1 text-gray-700">Formats et effets adaptables à votre événement.</p>
            </CardContent></Card>
          </div>
        </div>
      </section>

      {/* Footer centralisé */}
      <Footer />
    </div>
  )
}