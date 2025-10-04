// src/components/GoogleReviews.tsx
"use client";

import { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type GoogleReviewsProps = {
  placeId: string;
};

export default function GoogleReviews({ placeId }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState(400); // Fallback au nombre actuel
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initGoogleMaps = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
      if (!apiKey) {
        console.warn("Clé Google API manquante – fallback à 400 avis");
        setLoading(false);
        return;
      }

      try {
        const loader = new Loader({
          apiKey,
          version: "weekly",
          libraries: ["places"],
        });

        // Fix: Disable ESLint for this line to allow any cast
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const placesLib = await (loader as any).importLibrary("places") as google.maps.PlacesLibrary;

        const service = new google.maps.places.PlacesService(
          document.createElement("div")
        );

        service.getDetails(
          { placeId, fields: ["user_ratings_total"] },
          (
            place: google.maps.places.PlaceResult | null,
            status: google.maps.places.PlacesServiceStatus
          ) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && place?.user_ratings_total) {
              setReviews(place.user_ratings_total);
            } else {
              console.warn("Erreur fetch avis Google:", status);
            }
            setLoading(false);
          }
        );
      } catch (error) {
        console.error("Erreur chargement Google Places:", error);
        setLoading(false);
      }
    };

    initGoogleMaps();
  }, [placeId]);

  if (loading) return <span className="text-2xl font-bold">...</span>;

  return <span className="text-2xl font-bold">{reviews}</span>;
}