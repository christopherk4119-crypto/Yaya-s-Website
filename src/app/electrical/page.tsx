import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";

export const metadata: Metadata = {
  title: "Electrical Services Calgary",
  description:
    "Experienced electrician in Calgary since 2007. Panel upgrades, wiring, outlets, ceiling lights, smoke alarms & more. No after-hours surcharge. Emergency calls welcome. Call (403) 400-3055.",
  keywords: ["electrician Calgary", "panel upgrade Calgary", "electrical installation Calgary", "ceiling light installation Calgary", "smoke alarm Calgary", "emergency electrician"],
  alternates: { canonical: "https://yayacontractor.ca/electrical" },
  openGraph: {
    title: "Electrical Services Calgary | YAYA General Contractor Inc.",
    description: "Experienced electrician since 2007. Panel upgrades, wiring, outlets & more. No after-hours fee. Call (403) 400-3055.",
    url: "https://yayacontractor.ca/electrical",
  },
};

const services = [
  { title: "Panel Upgrade", desc: "Upgrade your electrical panel safely and to code. All permits pulled.", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=95", alt: "Electrical panel upgrade service in Calgary" },
  { title: "Electrical Installation", desc: "New wiring, outlets, switches and complete electrical installations.", bg: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=95", alt: "Electrical wiring installation Calgary" },
  { title: "Ceiling Lights & Fans", desc: "Professional ceiling light and fan installation for any room.", bg: "https://images.unsplash.com/photo-1513506003901-1e6a35596f78?w=1920&q=95", alt: "Ceiling light and fan installation Calgary" },
  { title: "Smoke Alarm Installation", desc: "Code-compliant smoke alarm installation and testing.", bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=95", alt: "Smoke alarm installation Calgary" },
  { title: "Any Electrical Work", desc: "No job too small or too large. Yaya handles it all.", bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=95", alt: "General electrical work Calgary contractor" },
];

const galleryPhotos = [
  {
    src: "/images/gallery/electrical/calgary-electrician-ceiling-light-installation-abayneh-1.jpg",
    alt: "Certified Calgary electrician specialist Yaya performing ceiling light installation",
  },
  {
    src: "/images/gallery/electrical/calgary-electrician-hexagon-led-ceiling-completed-5.jpg",
    alt: "Certified Calgary electrician specialist completing hexagon LED ceiling light installation",
  },
  {
    src: "/images/gallery/electrical/calgary-electrician-breaker-panel-upgrade-before-6.jpg",
    alt: "Certified Calgary electrician specialist performing breaker panel upgrade",
  },
];

export default function ElectricalPage() {
  return (
    <ServicePageLayout
      heroHeadline="Electrical Services Calgary"
      heroSubheadline="Experienced Electrician Since 2007 | No After-Hours Surcharge | Emergency Welcome"
      heroCta="Book Electrical Service"
      serviceType="Electrical"
      services={services}
      galleryPhotos={galleryPhotos}
    />
  );
}
