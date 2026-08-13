interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  providerType?: "Electrician" | "Plumber" | "HomeAndConstructionBusiness";
}

const AREA_SERVED = ["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere"];

export default function ServiceSchema({ name, description, url, providerType = "Electrician" }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: {
      "@type": providerType,
      name: "YAYA General Contractor Incorporated",
      telephone: "+14034003055",
      url: "https://www.yayageneralservice.com",
    },
    areaServed: AREA_SERVED.map((city) => ({ "@type": "City", name: city, addressRegion: "AB", addressCountry: "CA" })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
