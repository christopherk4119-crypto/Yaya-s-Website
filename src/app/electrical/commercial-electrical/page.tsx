import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Commercial Electrician Calgary | Restaurant & Retail",
  description: "Commercial electrical in Calgary: restaurant kitchen equipment, tenant improvements, retail & office wiring. 24/7 response. Call (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/electrical/commercial-electrical" },
  openGraph: {
    title: "Commercial Electrician Calgary | YAYA General Contractor Incorporated",
    description: "Commercial kitchen, restaurant, retail, and office electrical work in Calgary, available 24/7. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/electrical/commercial-electrical",
  },
};

const sections = [
  {
    heading: "Commercial Kitchen Equipment Wiring",
    paragraphs: [
      "Commercial kitchen equipment runs on different circuits and often different voltage than anything in a residential kitchen — ranges, ovens, walk-in coolers, exhaust hoods, and dish machines typically need dedicated 208V or 240V circuits sized specifically for that equipment, not a shared general-purpose circuit. Wiring it wrong doesn't just trip breakers, it can damage expensive equipment or fail a health inspection.",
      "This covers new equipment installs, replacing wiring for upgraded equipment, and troubleshooting existing kitchen circuits that are underperforming or tripping under load. Every job most restaurants deal with — a new range, a bigger exhaust hood, an additional walk-in — usually means the electrical needs a second look, not just a plug swap.",
    ],
    image: { src: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Commercial US Range oven wired and serviced in a Calgary restaurant kitchen" },
  },
  {
    heading: "Restaurant Electrical and the 24/7 Reality",
    paragraphs: [
      "A restaurant losing power or a critical piece of equipment going down isn't something that can wait until Monday. A dead walk-in cooler over a weekend means lost inventory; a tripped circuit on the line during dinner service means lost revenue that night. Yaya takes commercial calls the same way residential emergency calls are handled — at any hour, with no after-hours surcharge — because for a restaurant, the after-hours call usually is the emergency.",
    ],
  },
  {
    heading: "Tenant Improvements, Retail, and Office Electrical",
    paragraphs: [
      "Tenant improvement work — fitting out a new commercial space before a business moves in — covers everything from relocating outlets and switches to adding circuits for specific equipment, lighting layout changes, and coordinating with the building's existing electrical infrastructure. This is common for retail buildouts, office renovations, and businesses moving into a space that wasn't previously configured for their needs.",
      "For existing retail and office spaces, the most common calls are lighting upgrades, adding circuits for new equipment or point-of-sale systems, and troubleshooting circuits that are undersized for how the space is actually being used day to day.",
    ],
  },
];

const whatIncluded = [
  "Load assessment for new or replacement kitchen equipment",
  "Dedicated circuit installation sized to equipment specs",
  "Tenant improvement wiring coordinated with your build timeline",
  "Lighting and outlet layout for retail and office spaces",
  "24/7 response for equipment failures and power loss",
];

const faqs = [
  { q: "Do you work with restaurants and other commercial tenants directly, or only through property managers?", a: "Either — Yaya works directly with restaurant owners, retail tenants, and property managers, whichever is handling the electrical decision for the space." },
  { q: "Can you wire a new commercial range or walk-in cooler before it's delivered?", a: "Yes — give Yaya the equipment specs (voltage, amperage) ahead of time and the circuit can be roughed in before the equipment arrives, so it's ready to install on delivery day." },
  { q: "Is there really no after-hours charge for a commercial call?", a: "Correct, same as residential — a weekend or overnight call for a restaurant costs the same as a weekday call. For businesses, that's often when it matters most." },
  { q: "Do you handle the electrical permit for tenant improvement work?", a: "Yes, permits for electrical scope on a tenant improvement project are pulled and coordinated as part of the job." },
  { q: "What if my current circuits are undersized for equipment I already have?", a: "That's one of the most common commercial calls — breakers tripping under normal use usually means the circuit was never sized correctly for the load. Yaya will assess and correct the sizing rather than just replacing the breaker with a larger one, which isn't a safe fix." },
  { q: "Can you work outside our business hours to avoid disrupting operations?", a: "Yes — a lot of commercial and retail electrical work is scheduled overnight or before opening specifically to avoid disrupting the business day, at no extra charge." },
];

export default function CommercialElectricalPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Electrical Services"
      h1="Commercial Electrician in Calgary"
      intro={[
        "Restaurant kitchen equipment, tenant improvements, retail buildouts, and office electrical — Yaya handles commercial electrical work across Calgary with the same 24/7 availability as residential emergency calls, because a dead walk-in cooler or a tripped line circuit doesn't wait for business hours either.",
      ]}
      heroImage={{ src: "/images/gallery/electrical/calgary-electrician-breaker-panel-housepower-7.jpg", alt: "Commercial electrical panel work for a Calgary business" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Commercial electrical work — new circuits, equipment installs, tenant improvements — requires a City of Calgary electrical permit. This is included and coordinated as part of the project, along with any inspection scheduling."
      timeline="Equipment wiring and small tenant improvement jobs are often completed in a day. Larger tenant improvement or retail buildout projects are scoped and timelined after an initial walkthrough of the space."
      afterHoursNote="No after-hours surcharge on commercial calls — a weekend equipment failure costs the same as a weekday visit."
      prepSteps={[
        "Have equipment spec sheets ready if wiring for new equipment",
        "Provide building/unit access details in advance",
        "Flag any lease or landlord approval needed for electrical changes",
        "Note your business hours if you want work scheduled around them",
        "Have your current panel location and capacity on hand if known",
      ]}
      faqs={faqs}
      faqHeading="Commercial Electrical FAQ"
      relatedLinks={[
        { href: "/appliance/commercial-appliance-repair", label: "Commercial Appliance Repair" },
        { href: "/electrical/panel-upgrades", label: "Panel Upgrades" },
        { href: "/electrical/emergency-electrician", label: "Emergency Electrician" },
      ]}
      serviceName="Commercial Electrical"
      serviceDescription="Commercial electrical services in Calgary — restaurant kitchen equipment wiring, tenant improvements, retail and office electrical, available 24/7."
      serviceUrl="https://www.yayageneralservice.com/electrical/commercial-electrical"
    />
  );
}
