import { MetadataRoute } from "next";

const base = "https://yayageneralservice.com";

/**
 * lastModified was previously `new Date()`, which told crawlers that all 22
 * URLs changed on every deploy. An lastmod that is obviously unreliable gets
 * discounted, so these are real dates instead: update a page's entry when its
 * content actually changes, not when the site is redeployed.
 */
const CONTENT_UPDATED = "2026-11-04";

type Entry = { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number };

const entries: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/electrical", changeFrequency: "monthly", priority: 0.9 },
  { path: "/plumbing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/appliance", changeFrequency: "monthly", priority: 0.9 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/media", changeFrequency: "monthly", priority: 0.6 },
  { path: "/electrical/emergency-electrician", changeFrequency: "monthly", priority: 0.85 },
  { path: "/electrical/panel-upgrades", changeFrequency: "monthly", priority: 0.85 },
  { path: "/electrical/home-rewiring", changeFrequency: "monthly", priority: 0.85 },
  { path: "/electrical/commercial-electrical", changeFrequency: "monthly", priority: 0.8 },
  { path: "/electrical/renovation-electrical", changeFrequency: "monthly", priority: 0.85 },
  { path: "/basement-suite-electrical-calgary", changeFrequency: "monthly", priority: 0.8 },
  { path: "/plumbing/emergency-plumber", changeFrequency: "monthly", priority: 0.85 },
  { path: "/plumbing/frozen-pipes", changeFrequency: "monthly", priority: 0.85 },
  { path: "/plumbing/drain-cleaning", changeFrequency: "monthly", priority: 0.85 },
  { path: "/plumbing/sump-pumps", changeFrequency: "monthly", priority: 0.8 },
  { path: "/plumbing/renovation-plumbing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/appliance/refrigerator-repair", changeFrequency: "monthly", priority: 0.85 },
  { path: "/appliance/washer-dryer-repair", changeFrequency: "monthly", priority: 0.85 },
  { path: "/appliance/stove-oven-repair", changeFrequency: "monthly", priority: 0.85 },
  { path: "/appliance/dishwasher-repair", changeFrequency: "monthly", priority: 0.85 },
  { path: "/appliance/commercial-appliance-repair", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
  }));
}
