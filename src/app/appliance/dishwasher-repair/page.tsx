import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Dishwasher Repair & Installation Calgary",
  description: "Dishwasher repair in Calgary — won't drain, won't fill, leaking, dishes not clean. Installation with supply, drain, and circuit. Call (403) 400-3055.",
  alternates: { canonical: "https://yayageneralservice.com/appliance/dishwasher-repair" },
  openGraph: {
    title: "Dishwasher Repair Calgary | YAYA General Contractor Incorporated",
    description: "Dishwasher not draining, filling, or cleaning properly? Fast diagnosis in Calgary. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/appliance/dishwasher-repair",
  },
};

const sections = [
  {
    heading: "Won't Drain or Won't Fill",
    paragraphs: [
      "A dishwasher that won't drain, leaving standing water at the bottom after a cycle, is most often a clogged drain pump, a blocked or kinked drain hose, or a failing drain valve depending on the model. Food debris is the most common culprit, especially in models without a strong pre-rinse cycle or a proper food disposal grinder built into the pump assembly.",
      "A dishwasher that won't fill, or fills very slowly, is usually the water inlet valve — either clogged with mineral buildup or electrically failed so it's not opening properly when the cycle calls for water. Low household water pressure can occasionally look like the same symptom, which is worth ruling out before replacing the valve.",
    ],
    image: { src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-door-mechanism-2.jpg", alt: "Dishwasher door mechanism repair by Calgary appliance technician" },
  },
  {
    heading: "Leaking",
    paragraphs: [
      "Leaks usually come from one of a handful of places: a worn door seal/gasket that's no longer sealing properly, a cracked or loose hose connection, a failed pump seal, or occasionally overfilling caused by the same inlet valve issue that can cause other symptoms. Where the water is actually coming from — pooling in front of the door versus underneath the unit — narrows down the cause quickly.",
    ],
  },
  {
    heading: "Dishes Not Coming Out Clean",
    paragraphs: [
      "Dishes coming out dirty, cloudy, or with residue left behind isn't always a mechanical failure — it's sometimes a spray arm that's clogged or not spinning freely, a filter that needs cleaning (many newer dishwashers don't have a garbage disposal-style grinder and rely on the user cleaning a filter periodically), or hard water buildup affecting spray performance. When it is mechanical, it's usually the wash pump not building enough pressure, or a spray arm bearing that's worn out.",
    ],
    image: { src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg", alt: "Dishwasher installation by Calgary appliance technician" },
  },
  {
    heading: "Pump, Inlet Valve, Seals, and Control Board",
    paragraphs: [
      "These four components account for the large majority of dishwasher repairs. The wash/drain pump moves water in and out and builds the pressure needed for effective cleaning; the inlet valve controls water entering the unit; door and pump seals prevent leaks; and the control board manages cycle timing and coordinates everything else. A control board fault can sometimes mimic a mechanical failure — the unit not filling or not draining because the board isn't sending the right signal, not because the pump or valve has actually failed — which is why proper diagnosis matters before parts get replaced unnecessarily.",
    ],
  },
  {
    heading: "Installation",
    paragraphs: [
      "New dishwasher installation means connecting the water supply, the drain line, and — since a dishwasher needs its own dedicated electrical circuit — the electrical connection as well. Handling all three as one visit is straightforward when the same person is licensed for both the plumbing and electrical side, rather than needing a plumber for the water and drain and a separate electrician for the circuit.",
      "This matters more than it might seem: a dishwasher wired into a shared circuit with other kitchen outlets is a common cause of nuisance breaker trips once it's running alongside a microwave or other appliance drawing power at the same time. A proper installation sizes the circuit correctly for the specific unit rather than tapping into whatever's nearby, which is one of the more common corrections made when replacing an older dishwasher that was never installed to that standard in the first place.",
    ],
  },
];

const whatIncluded = [
  "Diagnosis of drain, fill, leaking, and cleaning performance issues",
  "Pump, inlet valve, and seal repair or replacement",
  "Control board diagnosis, ruling out simpler causes first",
  "Full installation: water supply, drain, and dedicated electrical circuit",
  "All major brands",
];

const faqs = [
  { q: "My dishwasher has standing water at the bottom after a cycle — what's wrong?", a: "Most likely a clogged drain pump or blocked drain hose, with food debris being the most common cause. It's a straightforward diagnosis and usually a same-visit fix." },
  { q: "Can you install a new dishwasher including the electrical circuit?", a: "Yes — water supply, drain connection, and the dedicated circuit a dishwasher requires are all handled together in one visit." },
  { q: "Why are my dishes still dirty after a full cycle?", a: "Could be a clogged spray arm, a filter that needs cleaning, or in some cases the wash pump not building enough pressure. Often it's simpler than a mechanical failure — worth checking the filter before assuming a repair is needed." },
  { q: "Is a leaking dishwasher urgent?", a: "It's worth addressing promptly, especially if it's leaking onto flooring that can be damaged by sustained moisture, but it's not typically an emergency-level call unless it's actively flooding." },
  { q: "Do you repair all dishwasher brands?", a: "Yes — Samsung, LG, Whirlpool, Maytag, Bosch, GE, KitchenAid, Frigidaire, and others are all serviced." },
  { q: "Is a permit needed to install a new dishwasher?", a: "No, standard dishwasher installation into an existing kitchen setup doesn't require a permit, since it uses existing supply, drain, and circuit infrastructure or adds a circuit that falls under standard electrical work." },
];

export default function DishwasherRepairPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Appliance Services"
      h1="Dishwasher Repair & Installation in Calgary"
      intro={[
        "Won't drain, won't fill, leaking, or leaving dishes dirty — Yaya diagnoses the actual cause across the pump, inlet valve, seals, and control board, and handles new installation with the water, drain, and electrical circuit all in one visit.",
      ]}
      heroImage={{ src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg", alt: "Calgary appliance technician installing a dishwasher" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Dishwasher repair and standard installation into an existing kitchen setup doesn't require a permit."
      timeline="Most dishwasher repairs are diagnosed and completed same-day. New installation is typically a half-day, including supply, drain, and circuit connection."
      prepSteps={[
        "Note the exact symptom — won't drain, won't fill, leaking, or dirty dishes",
        "Clear the area under and around the dishwasher for access",
        "Check and clean the filter if you haven't recently, before the visit",
        "Note the brand and approximate age",
        "For new installation, confirm the cabinet opening and existing connections nearby",
      ]}
      faqs={faqs}
      faqHeading="Dishwasher Repair FAQ"
      relatedLinks={[
        { href: "/appliance/stove-oven-repair", label: "Stove & Oven Repair" },
        { href: "/plumbing/renovation-plumbing", label: "Renovation Plumbing" },
        { href: "/electrical/renovation-electrical", label: "Renovation Electrical" },
      ]}
      serviceName="Dishwasher Repair and Installation"
      serviceDescription="Dishwasher repair and installation in Calgary — drain, fill, leak, and cleaning issues, plus full installation with supply, drain, and dedicated circuit."
      serviceUrl="https://yayageneralservice.com/appliance/dishwasher-repair"
      providerType="HomeAndConstructionBusiness"
    />
  );
}
