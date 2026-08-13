import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.yayageneralservice.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/electrical`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/plumbing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/appliance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/media`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/electrical/emergency-electrician`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/electrical/panel-upgrades`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/electrical/home-rewiring`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/electrical/commercial-electrical`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/electrical/renovation-electrical`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/dryer-repair-calgary`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dishwasher-repair-calgary`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/basement-suite-electrical-calgary`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
