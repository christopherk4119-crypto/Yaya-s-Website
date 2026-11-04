import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";
import TradeOverview from "@/components/ui/trade-overview";

export const metadata: Metadata = {
  title: "Electrician Calgary | Panel Upgrades, Wiring & More",
  description:
    "Electrician in Calgary since 2007. Panel upgrades, rewiring, outlets and lighting. No after-hours surcharge. Call (403) 400-3055.",
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
        sections={[
          {
            heading: "What Counts as an Electrical Emergency",
            paragraphs: [
              "Some electrical faults need attention the moment you notice them. A burning or fishy plastic smell near an outlet, panel or fixture, scorch marks or discolouration around a receptacle, an outlet or switch plate that is warm to the touch, buzzing or crackling from the panel, or a breaker that trips again immediately after you reset it — all of these point to heat being generated somewhere it shouldn't be. Shut off the circuit at the panel if you can do it safely and call. Do not keep resetting a breaker that will not hold; it is doing its job.",
              "Other problems are genuinely urgent but not dangerous: a full loss of power to the house, a dead circuit that takes the furnace or fridge with it, or water that has reached a panel or junction box. In Calgary winters, no power to a furnace becomes a frozen-pipe problem within hours, which is why these get treated as same-night calls rather than next-week appointments.",
              "Plenty of things can wait for a scheduled visit without any risk: a single dead outlet on an otherwise healthy circuit, a light fixture you want swapped, a dimmer that buzzes, or planning work for a renovation that hasn't started yet. Calling after hours for one of these costs the same as calling on a Tuesday morning, so if you aren't sure which category you're in, describe what you're seeing and you'll get a straight answer rather than an upsell.",
            ],
          },
          {
            heading: "Permits, Inspections and the Alberta Electrical Code",
            paragraphs: [
              "Electrical work in Calgary is governed by the Canadian Electrical Code as adopted in Alberta, and significant work requires a permit from the City of Calgary followed by an inspection. That covers panel upgrades and service changes, new circuits, basement development, and the rough-in for a suite or an addition. Like-for-like repairs — swapping a failed switch or fixture — generally do not.",
              "The reason this matters beyond compliance is what happens later. Unpermitted electrical work surfaces at the worst possible moment: during a home sale when a buyer's conditions include a review of permit history, or during an insurance claim when the cause of a loss traces back to wiring that was never inspected. Work that was done correctly but never signed off still reads, on paper, as work nobody verified.",
              "Yaya pulls the permits and coordinates the inspection as part of the job, so the paperwork exists in the City's records under your address. It is worth confirming that whoever does your electrical work is doing the same, regardless of who you hire.",
            ],
          },
          {
            heading: "Older Calgary Homes: Aluminum Wiring, Knob-and-Tube and Undersized Services",
            paragraphs: [
              "Calgary's housing stock spans more than a century, and the era a house was built in tells you most of what you need to know about its wiring. Homes built in the late 1960s and through the 1970s frequently used aluminum branch circuit wiring, which expands and contracts differently from the copper devices it connects to and can loosen at terminations over time. The fix is usually proper remediation at the connections rather than a full rewire, and insurers commonly ask for documentation that it has been addressed.",
              "Older inner-city homes may still have knob-and-tube in places, often partially replaced during past renovations so that a single house contains three generations of wiring. Those homes also tend to have undersized services — a 60-amp or small 100-amp panel that was adequate for the appliances of its era and is not adequate for central air, an EV charger, a hot tub, or a finished basement.",
              "If you are buying an older home, planning a renovation, or have been told by an insurer that your wiring needs attention, the useful first step is an assessment of what you actually have rather than an assumption. Some houses need a panel upgrade and nothing else; others need targeted rewiring of specific circuits. Knowing which one you are dealing with changes the budget considerably.",
            ],
          },
        ]}
      />
      <FAQSection faqs={faqs} heading="Electrical FAQ" />
    </>
  );
}
