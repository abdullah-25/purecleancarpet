export function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PureClean Carpet Care",
          image: "https://purecleancarepet.ca/og-image.jpg",
          url: "https://purecleancarepet.ca",
          telephone: "+16478038776",
          email: "purecleancarpetscare@gmail.com",
          priceRange: "$$",
          description:
            "Professional carpet, rug & upholstery cleaning in Toronto & GTA using eco-friendly solutions and advanced techniques.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toronto",
            addressRegion: "ON",
            addressCountry: "CA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.6532,
            longitude: -79.3832,
          },
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 43.6532,
              longitude: -79.3832,
            },
            geoRadius: "50000",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "08:00",
              closes: "20:00",
            },
          ],
          sameAs: ["https://www.facebook.com/purecleancarepet", "https://www.instagram.com/purecleancarepet"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Carpet Cleaning Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Carpet Cleaning",
                  description: "Deep cleaning that removes embedded dirt, stains, and allergens from your carpets.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Rug Cleaning",
                  description: "Specialized cleaning for all types of rugs, including delicate and valuable ones.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Upholstery Cleaning",
                  description: "Refresh and sanitize your furniture with our advanced upholstery cleaning techniques.",
                },
              },
            ],
          },
          review: [
            {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "PirAli Khan",
              },
              reviewBody:
                "I spilled milk tea on my carpet and called this company, they cleaned all my rugs and did an amazing job. The stain was completely gone. They are very nice and have affordable price, I recommend them.",
            },
            {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Ann Ibrahim",
              },
              reviewBody:
                "I was praying for an honest and reliable carpet cleaner. So, I Google it. There I found Aslam. We spoke over the phone and he told me about the price. We made arrangement for him to come over that same day. He and his co-worker did a magnificent job.",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "50",
          },
        }),
      }}
    />
  )
}
