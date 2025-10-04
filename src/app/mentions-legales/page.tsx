// src/app/mentions-legales/page.tsx
"use client";

import * as React from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FileText, Shield, Cookie, Globe, Link as LinkIcon, Lock, UserCheck, Scale } from "lucide-react"

export default function LegalPage() {
  const updated = new Date("2025-10-04").toLocaleDateString("fr-FR")

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé */}
      <Header showTopbar variant="light" />

      {/* Hero Mentions légales */}
      <section className="relative bg-gray-950 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.35}} className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mentions légales & politique de confidentialité
          </motion.h1>
          <p className="mt-3 max-w-2xl text-gray-200">
            Informations relatives à lʼéditeur, à lʼhébergeur, à la propriété intellectuelle, aux données personnelles et aux cookies.
          </p>
          <div className="mt-6 text-sm opacity-90">Dernière mise à jour : {updated}</div>
        </div>
      </section>

      {/* Sommaire ancré */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-3 text-sm whitespace-nowrap">
            <a href="#editeur" className="px-3 py-1.5 rounded-full border">Éditeur du site</a>
            <a href="#hebergeur" className="px-3 py-1.5 rounded-full border">Hébergeur</a>
            <a href="#propriete" className="px-3 py-1.5 rounded-full border">Propriété intellectuelle</a>
            <a href="#donnees" className="px-3 py-1.5 rounded-full border">Données personnelles (RGPD)</a>
            <a href="#cookies" className="px-3 py-1.5 rounded-full border">Cookies</a>
            <a href="#liens" className="px-3 py-1.5 rounded-full border">Liens externes</a>
            <a href="#droit" className="px-3 py-1.5 rounded-full border">Droit applicable</a>
          </div>
        </div>
      </section>

      {/* Sections principales */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8 items-start">
          {/* Colonne contenu */}
          <div className="lg:col-span-2 space-y-6">
            {/* Éditeur */}
            <Card id="editeur" className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-700"><FileText className="h-5 w-5"/> <h2 className="text-xl font-semibold">Éditeur du site</h2></div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Raison sociale / Nom</div>
                    <div className="font-medium">Martial Magie</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Statut</div>
                    <div className="font-medium">Entrepreneur individuel</div>
                  </div>
                  <div>
                    <div className="text-gray-500">SIREN / SIRET</div>
                    <div className="font-medium">123 456 789 00012</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Adresse</div>
                    <div className="font-medium">75000 Paris, France</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Téléphone</div>
                    <div className="font-medium">+33 6 07 70 92 19</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Email</div>
                    <div className="font-medium">spectacle@martialmagie.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hébergeur */}
            <Card id="hebergeur" className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-700"><Globe className="h-5 w-5"/> <h2 className="text-xl font-semibold">Hébergeur</h2></div>
                <div className="mt-4 space-y-2 text-sm">
                  <div><span className="font-medium">Vercel Inc.</span> – 340 S Lemon Ave # 4522, Walnut, CA 91789, USA</div>
                  <div>Hébergement cloud avec CDN global et protection DDoS.</div>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card id="propriete" className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-700"><Lock className="h-5 w-5"/> <h2 className="text-xl font-semibold">Propriété intellectuelle</h2></div>
                <p className="mt-3 text-sm text-gray-700">Le contenu du site (textes, images, logos, vidéos) est protégé par le droit d’auteur et ne peut être reproduit sans autorisation expresse de l’éditeur. Les marques citées appartiennent à leurs propriétaires respectifs.</p>
              </CardContent>
            </Card>

            {/* Données personnelles (RGPD) */}
            <Card id="donnees" className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-700"><UserCheck className="h-5 w-5"/> <h2 className="text-xl font-semibold">Données personnelles (RGPD)</h2></div>
                <p className="mt-3 text-sm text-gray-700">Conformément au RGPD, l’éditeur s’engage à protéger vos données. Les informations collectées (formulaires de contact, newsletter) sont utilisées uniquement pour répondre à vos demandes et ne sont pas cédées à des tiers.</p>
                <div className="mt-3 space-y-2 text-sm">
                  <div><strong>Droits</strong> : Accès, rectification, opposition, portabilité, effacement.</div>
                  <div><strong>Exercice</strong> : Par email à spectacle@martialmagie.com (objet « RGPD »).</div>
                  <div><strong>Délai de réponse</strong> : 1 mois (prolongeable à 3 mois pour demandes complexes).</div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card id="cookies" className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-700"><Cookie className="h-5 w-5"/> <h2 className="text-xl font-semibold">Cookies</h2></div>
                <p className="mt-3 text-sm text-gray-700">Le site utilise des cookies essentiels (navigation, sécurité) et analytiques (Google Analytics, anonymisé). Vous pouvez les refuser, mais cela peut limiter certaines fonctionnalités.</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Cookie</th>
                        <th className="border border-gray-300 p-2 text-left">Finalité</th>
                        <th className="border border-gray-300 p-2 text-left">Durée</th>
                        <th className="border border-gray-300 p-2 text-left">Catégorie</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="border border-gray-300 p-2">PHPSESSID</td>
                        <td className="border border-gray-300 p-2">Session utilisateur</td>
                        <td className="border border-gray-300 p-2">Fin de session</td>
                        <td className="border border-gray-300 p-2">Essentiel</td>
                      </tr>
                      <tr className="border-t">
                        <td className="border border-gray-300 p-2">_ga</td>
                        <td className="border border-gray-300 p-2">Identifiant utilisateur</td>
                        <td className="border border-gray-300 p-2">2 ans</td>
                        <td className="border border-gray-300 p-2">Analytics</td>
                      </tr>
                      <tr className="border-t">
                        <td className="border border-gray-300 p-2">_gid</td>
                        <td className="border border-gray-300 p-2">Session Analytics</td>
                        <td className="border border-gray-300 p-2">24h</td>
                        <td className="border border-gray-300 p-2">Analytics</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">analytics_*</td>
                        <td className="p-2">Mesure dʼaudience agrégée</td>
                        <td className="p-2">13 mois</td>
                        <td className="p-2">Statistiques</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline">Gérer mes cookies</Button>
                  <Button>Tout accepter</Button>
                </div>
              </CardContent>
            </Card>

            {/* Liens externes */}
            <Card id="liens" className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-700"><LinkIcon className="h-5 w-5"/> <h2 className="text-xl font-semibold">Liens externes</h2></div>
                <p className="mt-3 text-sm text-gray-700">Le site peut contenir des liens vers des sites tiers. Lʼéditeur ne saurait être tenu responsable de leur contenu ni de leur conformité légale.</p>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card id="droit" className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-700"><Scale className="h-5 w-5"/> <h2 className="text-xl font-semibold">Droit applicable & litiges</h2></div>
                <p className="mt-3 text-sm text-gray-700">Le présent site est régi par le droit français. En cas de litige et à défaut de résolution amiable, compétence exclusive des tribunaux du ressort du siège de lʼéditeur.</p>
                <p className="mt-2 text-sm text-gray-700">Version : ML-{updated.replace(/\//g, "-")}</p>
              </CardContent>
            </Card>
          </div>

          {/* Colonne latérale */}
          <aside className="space-y-6">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="font-semibold">Télécharger</div>
                <p className="mt-1 text-sm text-gray-700">Obtenez ces mentions en PDF.</p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm">PDF</Button>
                  <Button size="sm" variant="outline">Imprimer</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="font-semibold">Contact DPO</div>
                <p className="mt-1 text-sm text-gray-700">Pour toute question relative aux données personnelles :</p>
                <div className="mt-2 text-sm">
                  <div className="font-medium">spectacle@martialmagie.com</div>
                  <div>Objet : « RGPD »</div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* Footer centralisé */}
      <Footer />
    </div>
  )
}