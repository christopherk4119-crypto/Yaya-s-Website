import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";
import TradeOverview from "@/components/ui/trade-overview";

export const metadata: Metadata = {
  title: "Appliance Repair Calgary | Oven, Dryer & Fridge",
  description:
    "Appliance repair in Calgary. Oven, stove, dishwasher, dryer and HVAC, all brands. No after-hours fee. Call (403) 400-3055.",
  keywords: ["appliance repair Calgary", "oven repair Calgary", "dishwasher repair Calgary", "dryer repair Calgary", "HVAC service Calgary", "exhaust fan repair Calgary", "emergency appliance repair Calgary"],
  alternates: { canonical: "https://yayageneralservice.com/appliance" },
  openGraph: {
    title: "Appliance Repair Calgary | YAYA General Contractor Incorporated",
    description: "Experienced appliance tech. Oven, dishwasher, dryer, HVAC & more. No after-hours fee. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/appliance",
  },
};

const services = [
  { title: "Refrigerator Repair", desc: "", bullets: ["★ Not Cooling", "★ Icing Up or Leaking", "★ Failed Ice Maker", "★ Same-Day Available"], bg: "/images/gallery/appliance/calgary-appliance-repair-appliance-wiring-switch-6.jpg", alt: "Refrigerator repair in Calgary", href: "/appliance/refrigerator-repair" },
  { title: "Washer & Dryer Repair", desc: "", bullets: ["★ Won't Drain or Spin", "★ Won't Heat", "★ Vent Inspection", "★ Stacked & Side-by-Side"], bg: "/images/gallery/appliance/calgary-appliance-repair-dryer-switch-wiring-5.jpg", alt: "Washer and dryer repair in Calgary", href: "/appliance/washer-dryer-repair" },
  { title: "Stove & Oven Repair", desc: "", bullets: ["★ Elements Won't Heat", "★ Wrong Temperature", "★ Control Board Faults", "★ Range Hood Included"], bg: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg", alt: "Stove and oven repair in Calgary", href: "/appliance/stove-oven-repair" },
  { title: "Dishwasher Repair", desc: "", bullets: ["★ Won't Drain or Fill", "★ Leaking", "★ Dishes Not Clean", "★ Installation Available"], bg: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg", alt: "Dishwasher repair and installation in Calgary", href: "/appliance/dishwasher-repair" },
  { title: "Commercial Appliance Repair", desc: "", bullets: ["★ Restaurant Kitchen Equipment", "★ Commercial Ovens & Ranges", "★ Commercial Refrigeration", "★ 24/7 Response"], bg: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Commercial appliance repair in Calgary", href: "/appliance/commercial-appliance-repair" },
  { title: "HVAC Service", desc: "", bullets: ["★ Furnace Repair", "★ Control Board Replacement", "★ Ventilation Service", "★ Emergency Calls"], bg: "/images/gallery/appliance/calgary-appliance-repair-hvac-furnace-control-board-10.jpg", alt: "HVAC and furnace service in Calgary" },
];

const galleryPhotos = [
  { src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg", alt: "Calgary appliance repair specialist performing dishwasher installation" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg", alt: "Calgary appliance repair specialist replacing stove heating element burner" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Calgary appliance repair specialist servicing commercial US Range oven" },
];

const faqs = [
  {
    q: "How much does appliance repair cost in Calgary?",
    a: "Appliance repair pricing in Calgary depends on the appliance and the fault. Diagnostics and minor repairs like a heating element replacement typically range from $100–$250. Larger appliances like HVAC units are priced per job. Yaya gives you a clear quote before any work begins — no surprise charges.",
  },
  {
    q: "Is it worth repairing an appliance or should I replace it?",
    a: "As a general rule, if the repair cost is less than 50% of the replacement cost and the appliance is under 10 years old, repair is usually the better value. Yaya will give you an honest assessment and never recommend unnecessary work.",
  },
  {
    q: "Do you repair all appliance brands in Calgary?",
    a: "Yes. Yaya services all major appliance brands including Samsung, LG, Whirlpool, Maytag, Bosch, GE, KitchenAid, Frigidaire, and more. Commercial appliances are also serviced.",
  },
  {
    q: "Can you repair my oven or stove same day in Calgary?",
    a: "In most cases, yes. Yaya offers same-day or next-day appointments for oven, stove, and kitchen appliance repairs. For urgent issues, call (403) 400-3055 directly — no after-hours surcharge applies.",
  },
  {
    q: "Do you charge extra for appliance repair on evenings or weekends in Calgary?",
    a: "No. YAYA General Contractor Incorporated does not charge after-hours or weekend surcharges for any service — electrical, plumbing, or appliance. The price is always the same.",
  },
  {
    q: "Can you service HVAC systems in Calgary homes?",
    a: "Yes. Yaya provides HVAC diagnostics, furnace control board replacement, and general heating and ventilation repair. For full HVAC installation or duct work, contact us to discuss the scope of your project.",
  },
];

export default function AppliancePage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Appliance Repair Services Calgary"
        heroSubheadline="Experienced Appliance Technician | Emergency Repairs | No After-Hours Fee"
        heroCta="Book Appliance Repair"
        serviceType="Appliance"
        services={services}
        galleryPhotos={galleryPhotos}
      />
      <TradeOverview
        heading="Appliance and HVAC Repair, All Brands"
        paragraphs={[
          "From a dishwasher that won't drain to a furnace that's throwing an error code, Yaya diagnoses the actual fault rather than guessing at a part swap — furnace control board replacement, range hood installation, oven and stove repair, and dryer diagnostics are all regular calls, on residential and commercial equipment alike.",
          "Commercial kitchen equipment — restaurant ranges, ovens, and other equipment tenants and business owners rely on — is serviced the same way, with the same 24/7 availability, because a broken piece of kitchen equipment on a Friday night is a business problem, not something that can wait until Monday.",
        ]}
        sections={[
          {
            heading: "Repair or Replace? How to Think About It",
            paragraphs: [
              "The honest answer depends on three things: the age of the unit against its expected service life, what the specific failure is, and whether the appliance is a builder-grade model or a higher-end one worth putting money into. A fridge that is three years old with a failed start relay is an obvious repair. The same fridge at fifteen years with a failing sealed system is usually not, because the compressor circuit is the expensive part and the rest of the machine is the same age.",
              "The failure itself often decides it. Control boards, thermostats, igniters, heating elements, door seals, pumps and belts are all routine replacements on an otherwise sound appliance. Sealed refrigeration systems, cracked tubs and warped cabinets are a different conversation. A dryer that will not heat is almost always worth fixing; a dryer with a seized drum bearing on a twelve-year-old machine often is not.",
              "What makes this decision expensive is guessing. Swapping a part because it is the usual suspect, finding the symptom unchanged, and then swapping another is how a repair bill quietly approaches the price of a new machine. Diagnosing the actual fault first means the repair-or-replace conversation happens with a real number attached, and sometimes the recommendation is to replace — which is a cheaper answer to hear before the parts are ordered than after.",
            ],
          },
          {
            heading: "What to Have Ready Before the Visit",
            paragraphs: [
              "Three pieces of information make the first visit far more likely to also be the last one. The first is the make, model and serial number from the data plate — inside the fridge on a side wall, around the door frame or under the lid on a washer, on the back or inside the door on a dryer, and on the oven door frame or the underside of a range drawer. A photo of that plate is enough, and it is what determines whether the right part is on the van.",
              "The second is the exact error code, if the appliance shows one, written down rather than remembered. The third is the pattern: does it fail every cycle or only some, only on hot cycles, only when the load is heavy, only after it has been running for a while? An intermittent fault that happens once a week is a very different diagnosis from one that happens every time, and the timing usually points straight at the component.",
              "It also helps to clear access before arrival — a path to the back of the fridge, the laundry pair pulled out far enough to reach the connections, the dishwasher's kick plate reachable. For a gas or hardwired appliance, knowing where the shut-off or breaker is saves time at the start of the visit.",
            ],
          },
          {
            heading: "Commercial Equipment and the Cost of Downtime",
            paragraphs: [
              "Commercial appliance repair is a different calculation from residential because the cost is not the repair, it is the hours the equipment is out of service. A restaurant with one working oven on a Friday evening is losing covers for every hour the second one is down, and a failed commercial refrigerator is a potential inventory write-off rather than an inconvenience.",
              "That is the reason for 24/7 availability with no after-hours premium: calling at 7 PM on a Saturday, when it actually broke, rather than waiting until Monday to avoid a surcharge, is almost always the cheaper decision for a business. The surcharge is what pushes operators into waiting, and the waiting is what costs them.",
              "Commercial ranges, ovens, refrigeration and the electrical work behind them are handled as one job rather than split between trades — which matters when the fault turns out to be the circuit feeding the equipment rather than the equipment itself, a distinction that otherwise means two contractors, two visits and two diagnostic fees.",
            ],
          },
        ]}
      />
      <FAQSection faqs={faqs} heading="Appliance Repair FAQ" />
    </>
  );
}
