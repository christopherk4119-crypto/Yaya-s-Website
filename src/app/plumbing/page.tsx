import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";
import TradeOverview from "@/components/ui/trade-overview";

export const metadata: Metadata = {
  title: "Plumber Calgary | Water Lines, Drains & Faucets",
  description:
    "Licensed plumber in Calgary since 2007. Water lines, drain lines, faucet replacement, toilet installation & any plumbing work. Same price day or night. Fast response. Call (403) 400-3055.",
  keywords: ["plumber Calgary", "water line installation Calgary", "drain line Calgary", "faucet replacement Calgary", "toilet installation Calgary", "emergency plumber Calgary", "licensed plumber Calgary"],
  alternates: { canonical: "https://yayageneralservice.com/plumbing" },
  openGraph: {
    title: "Plumber Calgary | YAYA General Contractor Incorporated",
    description: "Licensed plumber. Water lines, drains, faucets, toilets & more. Same price day or night. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/plumbing",
  },
};

const services = [
  { title: "Emergency Plumber", desc: "", bullets: ["★ 24/7 Response", "★ No After-Hours Fee", "★ Burst Pipes & Leaks", "★ Same Price Always"], bg: "/images/gallery/plumbing/calgary-plumber-bathtub-faucet-shower-valve-replacement-3.jpg", alt: "Emergency plumbing repair in Calgary", href: "/plumbing/emergency-plumber" },
  { title: "Frozen Pipes", desc: "", bullets: ["★ Safe Thawing", "★ Burst Pipe Repair", "★ Hose Bib Damage", "★ Prevention"], bg: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg", alt: "Frozen pipe repair in Calgary", href: "/plumbing/frozen-pipes" },
  { title: "Drain Cleaning", desc: "", bullets: ["★ Kitchen & Bathroom", "★ Laundry & Floor Drains", "★ Recurring Blockages", "★ Main Line Diagnosis"], bg: "/images/gallery/plumbing/calgary-plumber-commercial-pvc-pipe-valve-system-1.jpg", alt: "Drain cleaning service in Calgary", href: "/plumbing/drain-cleaning" },
  { title: "Sump Pumps", desc: "", bullets: ["★ Installation & Repair", "★ Basin Sizing", "★ Discharge Routing", "★ Backup Options"], bg: "/images/gallery/plumbing/calgary-plumber-basement-pump-pvc-pipe-system-2.jpg", alt: "Sump pump installation and repair in Calgary", href: "/plumbing/sump-pumps" },
  { title: "Renovation Plumbing", desc: "", bullets: ["★ Basement Bathroom Rough-In", "★ Kitchen Renovation", "★ Water Line Replacement", "★ Shut-Off Valves"], bg: "/images/gallery/plumbing/calgary-plumber-shower-valve-brass-fitting-rough-in-5.jpg", alt: "Renovation plumbing in Calgary", href: "/plumbing/renovation-plumbing" },
  { title: "Pool Equipment Plumbing", desc: "", bullets: ["★ Filter Tank & Pump Systems", "★ Pipe & Valve Repair", "★ Seasonal Maintenance", "★ Residential Pools"], bg: "/images/gallery/plumbing/calgary-plumber-pool-filter-tank-pipe-system-6.jpg", alt: "Pool equipment plumbing service Calgary" },
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
    a: "No. YAYA General Contractor Incorporated charges the same rate regardless of time of day or day of week. If your pipe bursts at midnight or your toilet overflows on a Sunday, the price is identical to a regular weekday call.",
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
      <TradeOverview
        heading="Licensed Plumbing Work Across Calgary"
        paragraphs={[
          "Plumbing calls range from a five-minute faucet fix to a full re-pipe, and Yaya handles both ends of that range — water line and drain line installation, fixture replacement, rough-in for renovations, and pool equipment plumbing (filter tanks, pumps, and the pipe and valve work that keeps a residential pool system running through the season).",
          "Same rate applies no matter when you call — a burst pipe at midnight costs the same as a scheduled weekday appointment. If you're not sure whether something is a plumbing emergency or can wait, call and describe it; you'll get an honest answer either way.",
        ]}
        sections={[
          {
            heading: "Why Calgary Pipes Freeze, and What to Do First",
            paragraphs: [
              "Calgary's chinooks make freezing a different problem here than it is in a city with a steady winter. Temperatures can swing thirty degrees in a day, so pipes go through repeated freeze and thaw cycles rather than one long cold stretch. Each cycle stresses the joint a little more, which is why a pipe often fails not during the cold snap but on the warm afternoon afterward, when the ice plug melts and releases pressure against a fitting that has already been pushed past its limit.",
              "The vulnerable spots are predictable: supply lines running through exterior walls, anything in an unheated crawl space or an attached garage, and outdoor hose bibs where the shut-off was never closed in the fall. A kitchen sink on an outside wall with the cabinet doors shut is a classic Calgary failure point, because the cabinet keeps household heat away from the pipe.",
              "If you turn on a tap and get nothing in winter, assume a freeze and act before it thaws. Shut off the main, open the affected tap so there is somewhere for pressure and meltwater to go, and call. Do not use a torch or open flame on a frozen line. If water is already escaping, the main shut-off is the first move and the phone is the second — knowing where that valve is before you need it is the single most useful piece of plumbing knowledge a homeowner can have.",
            ],
          },
          {
            heading: "Emergency, Urgent, or Monday Morning",
            paragraphs: [
              "A true plumbing emergency is water you cannot stop: a burst or split line, a failed water heater dumping its tank, sewage backing up into a floor drain or tub, or a supply line behind a wall you can hear but can't reach. These get a call immediately, at any hour, because the damage is cumulative — flooring, drywall and subfloor keep absorbing water the whole time the problem is unresolved.",
              "Urgent but controllable is a different category: a toilet that will only flush sometimes in a one-bathroom house, a slow drain that is getting slower, a water heater producing lukewarm water, or a sump pump that is cycling oddly ahead of a thaw or a forecast of heavy rain. These usually hold overnight but genuinely shouldn't wait a week, particularly the sump pump, which you only find out has failed at the exact moment you need it.",
              "Things that can comfortably be scheduled include a dripping faucet, a running toilet, a fixture you want replaced, and planning the rough-in for a renovation. Because there is no after-hours surcharge, there is no financial reason to downplay a problem to avoid a premium — describe what is actually happening and the triage can be honest.",
            ],
          },
          {
            heading: "Renovation Plumbing: Sequence and Inspection",
            paragraphs: [
              "Renovation plumbing goes wrong far more often from sequencing than from the plumbing itself. Drain and vent lines have to be roughed in and, where a permit applies, inspected before anything closes the walls or the slab. Once drywall is up or tile is down, a change that would have taken an hour costs a demolition day, and a rough-in that was never inspected may have to be reopened.",
              "That makes the order of operations worth settling before the work starts: confirm fixture locations and the drain layout first, because moving a toilet drain is a structural-floor conversation while moving a vanity's supply lines usually is not. Bathroom and kitchen renovations in particular benefit from deciding on fixtures early, since a wall-hung sink, a freestanding tub and a standard vanity all want different rough-in heights.",
              "If an electrician is also working on the project, the two trades need to be sequenced against each other rather than booked independently — which is one practical advantage of having the same person handle both. Call before the demolition starts rather than after, and the plumbing portion is usually the least dramatic part of the renovation.",
            ],
          },
        ]}
      />
      <FAQSection faqs={faqs} heading="Plumbing FAQ" />
    </>
  );
}
