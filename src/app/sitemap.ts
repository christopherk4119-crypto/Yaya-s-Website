import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yayacontractor.ca";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/electrical`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/plumbing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/appliance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
