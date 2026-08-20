import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Commercial Appliance Repair Calgary | 24/7",
  description: "Commercial appliance repair in Calgary — ovens, ranges, refrigeration, dishwashers. Restaurant kitchen equipment, 24/7 response. Call (403) 400-3055.",
  alternates: { canonical: "https://yayageneralservice.com/appliance/commercial-appliance-repair" },
  openGraph: {
    title: "Commercial Appliance Repair Calgary | YAYA General Contractor Incorporated",
    description: "Restaurant equipment down? 24/7 commercial appliance repair in Calgary. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/appliance/commercial-appliance-repair",
  },
};

const sections = [
  {
    heading: "Commercial Ovens and Ranges",
    paragraphs: [
      "Commercial ovens and ranges see far more use in a day than any residential unit, and the components that fail are usually the ones under the most repeated stress — heating elements, temperature sensors and controls, and door seals that wear out from constant opening and closing during service. Diagnosis has to be fast, since a range that's down during prep or service directly stops a kitchen from operating, not just an inconvenience the way a residential repair usually is.",
    ],
    image: { src: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Commercial US Range oven repaired by Calgary appliance technician" },
  },
  {
    heading: "Commercial Refrigeration",
    paragraphs: [
      "Walk-in coolers, reach-in units, and prep station refrigeration all carry higher stakes than a home fridge — a failure means inventory loss at a scale that can run into thousands of dollars, not a shelf of groceries. Common issues include compressor problems, door seal failures that let a unit run constantly trying to maintain temperature, and control system faults that misreport internal temperature. Fast, accurate diagnosis is what limits the damage once something starts going wrong.",
    ],
  },
  {
    heading: "Commercial Dishwashers",
    paragraphs: [
      "Commercial dishwashers run far more cycles per day than a residential unit and see heavier, more frequent use of the pump and wash systems. Failures tend to show up as inadequate cleaning, cycle timing issues, or water temperature problems (commercial units often need to hit specific temperatures for sanitation compliance, not just get dishes visibly clean) — which makes proper diagnosis a compliance issue as much as an operational one.",
    ],
  },
  {
    heading: "Restaurant Kitchen Equipment and 24/7 Response",
    paragraphs: [
      "A piece of broken kitchen equipment on a Friday night or over a weekend isn't something that can wait until Monday for most restaurants — lost prep time, lost service capacity, or lost inventory adds up fast. Yaya takes commercial appliance calls the same way emergency electrical and plumbing calls are handled: any hour, any day, with no after-hours surcharge, because for a business, the after-hours call usually is the one that matters most.",
    ],
  },
  {
    heading: "One Person, Three Trades",
    paragraphs: [
      "A lot of commercial appliance issues aren't purely mechanical — a range that's not heating evenly might be a wiring or connection issue rather than the appliance itself, and diagnosing that properly benefits from someone who's certified across electrical work, not just appliance repair. Being licensed for the appliance, the electrical connection, and (where relevant) the plumbing side of a piece of equipment means the actual cause gets found without bouncing between separate contractors to rule things out one at a time.",
    ],
  },
];

const whatIncluded = [
  "Fast diagnosis prioritizing minimal kitchen downtime",
  "Commercial oven, range, and refrigeration repair",
  "Commercial dishwasher repair including sanitation-temperature issues",
  "Assessment of whether the fault is mechanical, electrical, or both",
  "24/7 response, no after-hours surcharge",
];

const faqs = [
  { q: "Can you come out on a weekend if our walk-in cooler fails?", a: "Yes — commercial calls are treated the same as residential emergency calls, available any hour, any day, at no extra charge for after-hours response." },
  { q: "Do you work directly with restaurant owners or only through property managers?", a: "Either — Yaya works directly with restaurant owners, kitchen managers, or property managers, whichever is handling the equipment decision." },
  { q: "Our range isn't heating evenly — is that the appliance or the electrical connection?", a: "Could be either, and that's exactly the kind of issue that benefits from someone certified in both — rather than calling an appliance tech who rules out the appliance and tells you to call an electrician separately." },
  { q: "Do you service commercial dishwashers for sanitation compliance?", a: "Yes — commercial dishwashers need to hit specific water temperatures for sanitation, not just clean visibly, and that's factored into diagnosis when a unit isn't performing correctly." },
  { q: "Can you work outside our operating hours to avoid disrupting service?", a: "Yes — a lot of commercial appliance work is scheduled overnight or before opening specifically to avoid disrupting business, at no extra charge." },
  { q: "Do you repair all commercial appliance brands?", a: "Yes — commercial ovens, ranges, refrigeration, and dishwashers across major commercial equipment brands are serviced." },
];

export default function CommercialApplianceRepairPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Appliance Services"
      h1="Commercial Appliance Repair in Calgary"
      intro={[
        "Commercial ovens, ranges, refrigeration, and dishwashers — Yaya repairs restaurant and commercial kitchen equipment across Calgary with the same 24/7 availability as residential emergency calls, because a broken piece of kitchen equipment on a weekend is a business problem that can't wait until Monday.",
      ]}
      heroImage={{ src: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Commercial US Range oven serviced by Calgary appliance technician" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Commercial appliance repair generally doesn't require a permit. If diagnosis reveals an electrical circuit issue needing correction, that portion is scoped and permitted as electrical work where required."
      timeline="Commercial appliance calls are prioritized for fast response given the operational impact of downtime — most are diagnosed same-day."
      afterHoursNote="No after-hours surcharge on commercial calls — a weekend equipment failure costs the same as a weekday visit."
      prepSteps={[
        "Have the equipment brand and model on hand if known",
        "Note exactly what's happening — not heating, not cooling, leaking, cycle issues",
        "Provide access details for the kitchen or unit",
        "Flag if the issue might be electrical (breaker tripping, power loss to the unit)",
        "Note your operating hours if you want work scheduled around them",
      ]}
      faqs={faqs}
      faqHeading="Commercial Appliance Repair FAQ"
      relatedLinks={[
        { href: "/electrical/commercial-electrical", label: "Commercial Electrical" },
        { href: "/appliance/refrigerator-repair", label: "Refrigerator Repair" },
        { href: "/appliance", label: "All Appliance Services" },
      ]}
      serviceName="Commercial Appliance Repair"
      serviceDescription="Commercial appliance repair in Calgary — ovens, ranges, refrigeration, dishwashers, restaurant kitchen equipment. Available 24/7."
      serviceUrl="https://yayageneralservice.com/appliance/commercial-appliance-repair"
      providerType="HomeAndConstructionBusiness"
    />
  );
}
