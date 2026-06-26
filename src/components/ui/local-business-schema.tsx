export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://yayacontractor.ca",
    name: "YAYA General Contractor Inc.",
    alternateName: "Yaya Contractor",
    description:
      "Certified electrician, licensed plumber & appliance technician in Calgary, AB. No extra charge for after-hours or emergency calls. Certified since 2007.",
    url: "https://yayacontractor.ca",
    telephone: "+14034003055",
    email: "electricianyaya@gmail.com",
    foundingDate: "2007",
    slogan: "All In One Hand",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit",
    areaServed: {
      "@type": "City",
      name: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0447,
      longitude: -114.0719,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:30",
        closes: "06:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Contractor Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Services", url: "https://yayacontractor.ca/electrical" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Services", url: "https://yayacontractor.ca/plumbing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Appliance Repair", url: "https://yayacontractor.ca/appliance" } },
      ],
    },
    sameAs: [
      "https://www.tiktok.com/@abayneh.yared.yay",
      "https://www.facebook.com/p/YAYA-General-Contracting-100067728921076",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
