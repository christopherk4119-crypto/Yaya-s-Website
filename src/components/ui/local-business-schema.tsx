export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://www.yayageneralservice.com",
    name: "YAYA Electrical, Plumbing and Appliance",
    alternateName: "Yaya Contractor",
    description:
      "Experienced electrician, licensed plumber & appliance technician in Calgary, AB. No extra charge for after-hours or emergency calls. Available Mon–Fri 4:30PM–6AM and 24hrs on weekends. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com",
    logo: "https://www.yayageneralservice.com/icon.png",
    image: "https://www.yayageneralservice.com/icon.png",
    telephone: "+14034003055",
    email: "electricianyaya@gmail.com",
    foundingDate: "2007",
    slogan: "All In One Hand",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit",
    areaServed: { "@type": "City", name: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.0447, longitude: -114.0719 },
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
      name: "Electrical, Plumbing and Appliance Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Services", url: "https://www.yayageneralservice.com/electrical" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Services", url: "https://www.yayageneralservice.com/plumbing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Appliance Repair", url: "https://www.yayageneralservice.com/appliance" } },
      ],
    },
    sameAs: [
      "https://www.tiktok.com/@yaya.electric_canada",
      "https://www.instagram.com/yayacalgary/",
      "https://www.youtube.com/channel/UCNgUCI9MK3DShuf3G_I72fg",
      "https://www.kijiji.ca/v-appliance-repair-installation/calgary/cheaper-price-electrical-plumbing-&-appliance-repair-service/1694676987",
      "https://www.kijiji.ca/v-electrician/calgary/cheaper-price-plumbing-electrical-and-appliance-maintenance/1697041621",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
