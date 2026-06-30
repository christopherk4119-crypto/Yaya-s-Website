import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";

export const metadata: Metadata = {
  title: "Electrician Calgary | Panel Upgrades, Wiring & More",
  description:
    "Experienced electrician in Calgary since 2007. Panel upgrades, wiring, outlets, ceiling lights, smoke alarms & more. No after-hours surcharge. Emergency calls welcome. Call (403) 400-3055.",
  keywords: ["electrician Calgary", "panel upgrade Calgary", "electrical installation Calgary", "ceiling light installation Calgary", "smoke alarm Calgary", "emergency electrician Calgary", "after hours electrician Calgary"],
  alternates: { canonical: "https://yayacontractor.ca/electrical" },
  openGraph: {
    title: "Electrician Calgary | YAYA General Contractor Inc.",
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
  { src: "/images/gallery/electrical/calgary-electrician-ceiling-light-installation-abayneh-1.jpg", alt: "Experienced Calgary electrician Yaya performing ceiling light installation" },
  { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-ceiling-completed-5.jpg", alt: "Calgary electrician completing hexagon LED ceiling light installation" },
  { src: "/images/gallery/electrical/calgary-electrician-breaker-panel-upgrade-before-6.jpg", alt: "Calgary electrician performing breaker panel upgrade" },
];

const faqs = [
  {
    q: "How much does a panel upgrade cost in Calgary?",
    a: "A standard 100A to 200A panel upgrade in Calgary typically ranges from $1,500 to $3,000 depending on the age of your home and whether permits are required. Yaya pulls all permits and completes the work to code — no hidden fees, and no extra charge for evening or weekend scheduling.",
  },
  {
    q: "Do you charge extra for emergency or after-hours electrical calls in Calgary?",
    a: "No. YAYA General Contractor does not charge after-hours surcharges. Whether you call at 2 AM on a Saturday or 5 PM on a weekday, the price is the same. This applies to all electrical, plumbing, and appliance work.",
  },
  {
    q: "How fast can an electrician come to my home in Calgary?",
    a: "Yaya responds quickly and typically schedules same-day or next-day service for most electrical jobs. For emergencies — such as a tripped breaker, no power, or electrical smell — call (403) 400-3055 directly for the fastest response.",
  },
  {
    q: "Do I need a permit for electrical work in Calgary?",
    a: "Yes — any significant electrical work in Calgary requires a permit from the City of Calgary. This includes panel upgrades, new circuits, and basement development wiring. Yaya handles all permitting so you don't have to worry about it.",
  },
  {
    q: "Can you install EV chargers at my Calgary home?",
    a: "Yes. Yaya installs Level 2 EV chargers (240V) for all major vehicle brands. This typically requires a new dedicated circuit and may involve a panel upgrade if your current panel is at capacity. Book a consultation to get a quote.",
  },
  {
    q: "What areas of Calgary do you serve?",
    a: "YAYA General Contractor serves all of Calgary, AB including NW, NE, SW, SE, and surrounding communities. There is no travel surcharge for any area within the city.",
  },
];

export default function ElectricalPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Electrician Services Calgary"
        heroSubheadline="Experienced Electrician Since 2007 | No After-Hours Surcharge | Emergency Welcome"
        heroCta="Book Electrical Service"
        serviceType="Electrical"
        services={services}
        galleryPhotos={galleryPhotos}
      />
      <FAQSection faqs={faqs} heading="Electrical FAQ" />
    </>
  );
}
