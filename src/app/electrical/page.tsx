import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";
import TradeOverview from "@/components/ui/trade-overview";

export const metadata: Metadata = {
  title: "Electrician Calgary | Panel Upgrades, Wiring & More",
  description:
    "Experienced electrician in Calgary since 2007. Panel upgrades, wiring, outlets, ceiling lights, smoke alarms & more. No after-hours surcharge. Emergency calls welcome. Call (403) 400-3055.",
  keywords: ["electrician Calgary", "panel upgrade Calgary", "electrical installation Calgary", "ceiling light installation Calgary", "smoke alarm Calgary", "emergency electrician Calgary", "after hours electrician Calgary"],
  alternates: { canonical: "https://yayageneralservice.com/electrical" },
  openGraph: {
    title: "Electrician Calgary | YAYA General Contractor Incorporated",
    description: "Experienced electrician since 2007. Panel upgrades, wiring, outlets & more. No after-hours fee. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/electrical",
  },
};

const services = [
  { title: "Emergency Electrician", desc: "", bullets: ["★ 24/7 Response", "★ No After-Hours Fee", "★ Power Loss & Sparking", "★ Same Price Always"], bg: "/images/gallery/electrical/calgary-electrician-wiring-repair-multimeter-testing-8.jpg", alt: "Emergency electrician wiring repair in Calgary", href: "/electrical/emergency-electrician" },
  { title: "Panel Upgrades", desc: "", bullets: ["★ 100A to 200A Upgrades", "★ Federal Pacific & Zinsco", "★ Permits Included", "★ One-Day Install"], bg: "/images/gallery/electrical/calgary-electrician-breaker-panel-upgrade-before-6.jpg", alt: "Electrical panel upgrade service in Calgary", href: "/electrical/panel-upgrades" },
  { title: "Home Rewiring", desc: "", bullets: ["★ Aluminum Wiring", "★ Knob & Tube Replacement", "★ Insurance Documentation", "★ Renovation Rewiring"], bg: "/images/gallery/electrical/calgary-electrician-breaker-panel-housepower-7.jpg", alt: "Home rewiring and wiring repair in Calgary", href: "/electrical/home-rewiring" },
  { title: "Commercial Electrical", desc: "", bullets: ["★ Restaurant Kitchen Equipment", "★ Tenant Improvements", "★ Retail & Office", "★ 24/7 Response"], bg: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Commercial electrical service for Calgary businesses", href: "/electrical/commercial-electrical" },
  { title: "Renovation Electrical", desc: "", bullets: ["★ Basement Development", "★ Kitchen & Bath Reno", "★ Pot Light Layout", "★ Garage Wiring"], bg: "/images/gallery/electrical/calgary-electrician-hexagon-led-ceiling-completed-5.jpg", alt: "Renovation electrical and pot light installation in Calgary", href: "/electrical/renovation-electrical" },
  { title: "Basement Suite Electrical", desc: "", bullets: ["★ Full Rough-In Wiring", "★ Panel Upgrade Included", "★ Permits Pulled", "★ Suite Separation"], bg: "/images/gallery/electrical/calgary-electrician-ceiling-light-fixture-install-2.jpg", alt: "Legal basement suite electrical wiring in Calgary", href: "/basement-suite-electrical-calgary" },
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
    a: "No. YAYA General Contractor Incorporated does not charge after-hours surcharges. Whether you call at 2 AM on a Saturday or 5 PM on a weekday, the price is the same. This applies to all electrical, plumbing, and appliance work.",
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
    a: "YAYA General Contractor Incorporated serves all of Calgary, AB including NW, NE, SW, SE, and surrounding communities. There is no travel surcharge for any area within the city.",
  },
];

export default function ElectricalPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Electrician Calgary"
        heroSubheadline="Experienced Electrician Since 2007 | No After-Hours Surcharge | Emergency Welcome"
        heroCta="Book Electrical Service"
        serviceType="Electrical"
        services={services}
        galleryPhotos={galleryPhotos}
      />
      <TradeOverview
        heading="Calgary Electrical Work, Done Right the First Time"
        paragraphs={[
          "Yaya has been doing electrical work in Calgary since 2007 — panel upgrades, rewiring, new circuits, lighting, and everything in between, for homes across the city and the surrounding communities. Most calls fall into a handful of categories: something's broken and needs fixing now, a renovation needs electrical planned around it, or an older home's wiring needs to be brought up to a standard modern insurance and code require.",
          "The five pages below go into real detail on the most common jobs — what's actually involved, what it costs to expect in permits and timeline, and what to do before Yaya arrives. If your situation doesn't fit neatly into one of them, that's fine too — call and describe what's going on, and you'll get a straight answer about what it takes to fix it.",
        ]}
      />
      <FAQSection faqs={faqs} heading="Electrical FAQ" />
    </>
  );
}
