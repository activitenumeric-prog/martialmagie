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

import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import { Calendar, Clock} from "lucide-react";

export default function HomePage() {
  // Données des 3 dernières actualités (extrait de actualités/page.tsx, triées par date récente)
  const latestPosts = [
    {
      id: "a1",
      title: "Magicien close-up pour AD Elec by Aubade à NANCY",
      excerpt: "Animation d’un diner pour AD Elec by Aubade à NANCY avec 40 collaborateurs. Martial magicien digital et mentaliste a offert aux invités un show en close-up très interactif.",
      date: "2025-10-01",
      read: 3,
      category: "Événements",
      color: "bg-gray-200",
    },
    {
      id: "a2",
      title: "Spectacle Jeune Public pour SAISON 2025 à SARTROUVILLE",
      excerpt: "La Malle Enchantée, Magicien, magicien pour enfants, spectacle de magie pour enfants, spectacle pour arbre de Noël.",
      date: "2025-09-27",
      read: 5,
      category: "Conseils",
      color: "bg-gray-300",
    },
    {
      id: "a3",
      title: "Magicien close-up pour DEMATHIEU BARD à METZ",
      excerpt: "La Malle Enchantée, Magicien, magicien pour enfants, spectacle de magie pour enfants, spectacle pour arbre de Noël.",
      date: "2025-09-27",
      read: 4,
      category: "Prestations",
      color: "bg-gray-200",
    },
  ];
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header centralisé (topbar incluse) */}
      <Header showTopbar variant="light" />

      {/* Hero */}
<section className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat text-gray-100" style={{ backgroundImage: "url('/images/header-top.png')" }}>
  <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Overlay semi-transparent pour lisibilité */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-6xl md:text-6xl font-extrabold tracking-tight text-white"
    >
      Martial Magie
    </motion.h1>
    <p className="text-4xl font-extrabold tracking-tight text-white">
      Magicien de Paris & Mentaliste Professionnel
    </p>
    <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg opacity-90 text-gray-200">
      Magie moderne, visuelle et interactive pour mariages, entreprises et événements privés. + de 400 avis clients vérifiés.
    </p>
    <div className="mt-8 flex items-center justify-center gap-3">
      <Button size="lg"><Link href="/galerie-video">Découvrir le teaser</Link></Button>
      <Button size="lg">Consulter les avis</Button>
    </div>
  </div>
</section>

      {/* Bande preuves sociales */}
      <section className="border-y bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <div className="text-2xl font-bold"><GoogleReviews placeId="ChIJN1t_tDeu5kcRUlarG-kbA8M" />+</div> 
            <div><Link href="https://www.google.com/maps/place/Martial+Magicien+digital+Mentaliste" target="_blank" rel="noopener noreferrer" className="text-xs underline hover:text-gray-600">
              Avis Google
            </Link></div>
          </div>
          <div><div className="text-2xl font-bold">FR / EN</div> Langues</div>
          <div><div className="text-2xl font-bold">France & Intl.</div> Déplacements</div>
          <div><div className="text-2xl font-bold">Close-up & Scène</div> Polyvalence</div>
        </div>
      </section>

{/* Portrait + pitch */}
      <section id="histoire" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Image martial.png */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/martial-magicien-photo-accueil.png"
              alt="Portrait de Martial Magie, magicien et mentaliste"
              className="object-cover"
              priority
              width={500}
              height={683}
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
            
          </div>
        </div>
      </section>      
            

      {/* Prestations */}
<section id="prestations" className="py-16 md:py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Prestations</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Magicien Close-Up */}
      <Card className="shadow-sm rounded-2xl overflow-hidden">
        <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: "url('/images/close-up.jpg')" }} aria-hidden />
        <CardContent className="pl-5">
          <h3 className="text-lg font-semibold font-display">Magicien Close-Up</h3>
          <p className="text-sm text-gray-600 mt-1">Animation mobile au plus près des invités, idéale cocktail & dîner.</p>
          <div className="mt-4 flex items-center gap-2">
            <Button size="sm"><Link href="/prestations#closeup">En savoir plus</Link></Button>
            <Button size="sm">Devis close-up</Button>
          </div>
        </CardContent>
      </Card>

      {/* Magicien pour Mariage */}
      <Card className="shadow-sm rounded-2xl overflow-hidden">
        <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: "url('/images/magie-mariage-710x473.jpg')" }} aria-hidden />
        <CardContent className="pl-5 pb-5">
          <h3 className="text-lg font-semibold font-display">Magicien pour Mariage</h3>
          <p className="text-sm text-gray-600 mt-1">Vin d’honneur, repas, ouverture de bal : émerveillement garanti.</p>
          <div className="mt-4 flex items-center gap-2">
            <Button size="sm"><Link href="/prestations#mariage">En savoir plus</Link></Button>
            <Button size="sm">Devis mariage</Button>
          </div>
        </CardContent>
      </Card>

      {/* Anniversaires */}
      <Card className="shadow-sm rounded-2xl overflow-hidden">
        <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: "url('/images/malle-enchantée-710x450.png')" }} aria-hidden />
        <CardContent className="pl-5 pb-5">
          <h3 className="text-lg font-semibold font-display">Arbre de Noël</h3>
          <p className="text-sm text-gray-600 mt-1">Prestation sur-mesure pour enfants, ados ou adultes.</p>
          <div className="mt-4 flex items-center gap-2">
            <Button size="sm"><Link href="/prestations#anniversaire">En savoir plus</Link></Button>
            <Button size="sm">Devis Arbre de Noël</Button>
          </div>
        </CardContent>
      </Card>

      {/* Spectacle de Mentalisme */}
      <Card className="shadow-sm rounded-2xl overflow-hidden">
        <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: "url('/images/digital.jpg')" }} aria-hidden />
        <CardContent className="pl-5 pb-5">
          <h3 className="text-lg font-semibold font-display">Magie numérique</h3>
          <p className="text-sm text-gray-600 mt-1">Démonstrations bluffantes, participation du public, humour.</p>
          <div className="mt-4 flex items-center gap-2">
            <Button size="sm"><Link href="/prestations#mentalisme">En savoir plus</Link></Button>
            <Button size="sm">Devis mentalisme</Button>
          </div>
        </CardContent>
      </Card>

      {/* Magie digitale & marketing */}
      <Card className="shadow-sm rounded-2xl overflow-hidden">
        <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: "url('/images/mentalisme.jpg')" }} aria-hidden />
        <CardContent className="pl-5 pb-5">
          <h3 className="text-lg font-semibold font-display">Magie digitale & marketing</h3>
          <p className="text-sm text-gray-600 mt-1">Attraction de stand, product reveal, expériences connectées.</p>
          <div className="mt-4 flex items-center gap-2">
            <Button size="sm"><Link href="/prestations#digital">En savoir plus</Link></Button>
            <Button size="sm">Devis digital</Button>
          </div>
        </CardContent>
      </Card>

      {/* Séminaires & congrès */}
      <Card className="shadow-sm rounded-2xl overflow-hidden">
        <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: "url('/images/seminaire.jpg')" }} aria-hidden />
        <CardContent className="pl-5 pb-5">
          <h3 className="text-lg font-semibold font-display">Séminaires & congrès</h3>
          <p className="text-sm text-gray-600 mt-1">Ice-breaker, interludes scéniques, moments fédérateurs.</p>
          <div className="mt-4 flex items-center gap-2">
            <Button size="sm"><Link href="/prestations#seminaires">En savoir plus</Link></Button>
            <Button size="sm">Devis séminaire</Button>
          </div>
        </CardContent>
      </Card>
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
                Découvrez la magie digitale - Une animation moderne et originale proposée par Martial magicien pour marquer votre événement
              </p>
              <div className="flex gap-3">
                <Button size="sm"><Link href="/galerie-video">Voir le teaser</Link></Button>
                <Button size="sm" asChild><Link href="/galerie-video">+ de vidéos</Link></Button>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-gray-200 overflow-hidden"> {/* Ajoute overflow-hidden pour clipper si besoin */}
              <iframe
                src="https://www.youtube.com/embed/rY9_wkeJPuw?start=10"
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

{/* Actualités */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">Actualités</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {latestPosts.map((post) => (
        <Card key={post.id} className="rounded-2xl overflow-hidden shadow-sm">
          <div className={`aspect-[16/9] ${post.color}`} />
          <CardContent className="p-5">
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <span className="inline-block px-2 py-0.5 rounded bg-gray-900 text-white">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />{" "}
                {new Date(post.date).toLocaleDateString("fr-FR")}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.read} min
              </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
            <p className="mt-1 text-sm text-gray-700 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4">
              <Button size="sm" variant="outline" asChild>
                <Link href={`/actualites/${post.id}`}>Lire l&lsquo;article</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="mt-8 text-center">
      <Button variant="outline" asChild>
        <Link href="/actualites">Voir toutes les actualités</Link>
      </Button>
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
    {/* Remplacement du placeholder par l'image */}
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
      <Image
        src="/images/martialmagie.jpg"  // ← Remplace par ton image (ajoute en public/images si besoin)
        alt="Portrait de Martial, magicien et mentaliste professionnel"
        fill
        className="object-cover"
        priority  // ← Chargement rapide pour image hero
      />
    </div>
    <div>
      <h2 className="text-3xl font-bold mb-3">Pourquoi choisir Martial ?</h2>
      <ul className="space-y-2 text-gray-700">
        <li>• Style moderne : magie visuelle + mentalisme + humour.</li>
        <li>• Forte interactivité et adaptation à tous les publics.</li>
        <li>• 400+ avis Google et références variées.</li>
        <li>• Prestation possible en FR / EN, en France et à l’international.</li>
      </ul>
      <div className="mt-5 flex gap-3">
        <Button>Télécharger la plaquette</Button>
        <Button asChild><Link href="/contact">Me contacter</Link></Button>
      </div>
    </div>
  </div>
</section>

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