import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";

export const metadata: Metadata = {
  title: "Plumber Calgary | Water Lines, Drains, Faucets & More",
  description:
    "Licensed plumber in Calgary since 2007. Water lines, drain lines, faucet replacement, toilet installation & any plumbing work. Same price day or night. Fast response. Call (403) 400-3055.",
  keywords: ["plumber Calgary", "water line installation Calgary", "drain line Calgary", "faucet replacement Calgary", "toilet installation Calgary", "emergency plumber Calgary", "licensed plumber Calgary"],
  alternates: { canonical: "https://www.yayageneralservice.com/plumbing" },
  openGraph: {
    title: "Plumber Calgary | YAYA General Contractor Inc.",
    description: "Licensed plumber. Water lines, drains, faucets, toilets & more. Same price day or night. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/plumbing",
  },
};

const services = [
  { title: "Water Line Installation", desc: "", bullets: ["★ Residential & Commercial", "★ Copper & PVC", "★ Fast Install", "★ No Mess Left Behind"], bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=95", alt: "Water line installation Calgary plumber" },
  { title: "Drain Line Installation", desc: "", bullets: ["★ Done Right First Time", "★ All Drain Types", "★ Proper Slope & Venting", "★ Residential & Commercial"], bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=95", alt: "Drain line installation Calgary" },
  { title: "Faucet Replacement", desc: "", bullets: ["★ Kitchen & Bathroom", "★ All Brands & Styles", "★ Quick & Clean", "★ Same Day Available"], bg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=95", alt: "Faucet replacement Calgary bathroom kitchen" },
  { title: "Toilet Replacement", desc: "", bullets: ["★ Full Removal & Install", "★ No Mess Left Behind", "★ All Toilet Types", "★ Fast Turnaround"], bg: "https://images.unsplash.com/photo-1562184552-997c461abbe6?w=1920&q=95", alt: "Toilet replacement installation Calgary" },
  { title: "Any Plumbing Work", desc: "", bullets: ["★ Emergency Calls Welcome", "★ No After-Hours Fee", "★ Residential & Commercial", "★ Same Price Always"], bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=95", alt: "General plumbing services Calgary contractor" },
];

const galleryPhotos = [
  { src: "/images/gallery/plumbing/calgary-plumber-bathtub-faucet-shower-valve-replacement-3.jpg", alt: "Calgary plumber replacing bathtub faucet and shower valve" },
  { src: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg", alt: "Rough-in copper and PVC pipe installation by Calgary plumber" },
  { src: "/images/gallery/plumbing/calgary-plumber-pool-filter-tank-pipe-system-6.jpg", alt: "Pool filter tank and pipe system installed by Calgary plumber" },
];

const faqs = [
  {
    q: "How much does a plumber cost in Calgary?",
    a: "Plumbing rates in Calgary vary by job. A simple faucet replacement typically starts around $150–$300 including parts. Water line or drain line installations are priced per project. Yaya provides a clear quote before starting any work — no surprise charges, and no extra fee for evenings or weekends.",
  },
  {
    q: "Do you charge extra for emergency plumbing calls in Calgary?",
    a: "No. YAYA General Contractor charges the same rate regardless of time of day or day of week. If your pipe bursts at midnight or your toilet overflows on a Sunday, the price is identical to a regular weekday call.",
  },
  {
    q: "How quickly can a plumber come to my home in Calgary?",
    a: "Yaya aims for same-day response on most plumbing calls. For emergencies like burst pipes, flooding, or backed-up drains, call (403) 400-3055 directly for priority service.",
  },
  {
    q: "Do I need a permit for plumbing work in Calgary?",
    a: "Simple faucet and fixture replacements generally do not require a permit in Calgary. However, new water lines, drain relocations, or rough-in work may require a permit. Yaya will advise you on permit requirements before any job begins.",
  },
  {
    q: "Do you install toilets and new bathroom fixtures in Calgary?",
    a: "Yes. Yaya handles toilet removal and installation, faucet upgrades, shower valve replacements, and all standard bathroom plumbing. Work is done cleanly with no mess left behind.",
  },
  {
    q: "What areas of Calgary do you serve for plumbing?",
    a: "All of Calgary is covered — NW, NE, SW, SE, and surrounding areas. No travel surcharge applies within city limits.",
  },
];

export default function PlumbingPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Plumbing Services Calgary"
        heroSubheadline="Licensed Plumber | Same Price Day or Night | Fast Response"
        heroCta="Book Plumbing Service"
        serviceType="Plumbing"
        services={services}
        galleryPhotos={galleryPhotos}
      />
      <FAQSection faqs={faqs} heading="Plumbing FAQ" />
    </>
  );
}
