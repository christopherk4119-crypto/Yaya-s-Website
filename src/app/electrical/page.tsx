import ServicePageLayout from "@/components/ui/service-page-layout";

const services = [
  { title: "Panel Upgrade", desc: "Upgrade your electrical panel safely and to code. All permits pulled.", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { title: "Electrical Installation", desc: "New wiring, outlets, switches and complete electrical installations.", bg: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" },
  { title: "Ceiling Lights & Fans", desc: "Professional ceiling light and fan installation for any room.", bg: "https://images.unsplash.com/photo-1513506003901-1e6a35596f78?w=800&q=80" },
  { title: "Smoke Alarm Installation", desc: "Code-compliant smoke alarm installation and testing.", bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80" },
  { title: "Any Electrical Work", desc: "No job too small or too large. Abayneh handles it all.", bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" },
];

export default function ElectricalPage() {
  return (
    <ServicePageLayout
      heroHeadline="Electrical Services Calgary"
      heroSubheadline="Certified Electrician Since 2007 | No After-Hours Surcharge | Emergency Welcome"
      heroCta="Book Electrical Service"
      serviceType="Electrical"
      services={services}
    />
  );
}

export const metadata = {
  title: "Electrical Services Calgary | YAYA General Contractor Inc.",
  description: "Certified electrician in Calgary. Panel upgrades, wiring, outlets, ceiling lights & more. No after-hours fee. Call (403) 400-3055.",
};
