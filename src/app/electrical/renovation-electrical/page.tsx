import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Renovation Electrician Calgary | Basement & Kitchen",
  description: "Electrical for basement development, kitchen/bath reno, pot lights, and garage wiring in Calgary. Permits handled. Call (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/electrical/renovation-electrical" },
  openGraph: {
    title: "Renovation Electrical Calgary | YAYA General Contractor Incorporated",
    description: "Basement development, kitchen/bath renovation, and pot light electrical work in Calgary. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/electrical/renovation-electrical",
  },
};

const sections = [
  {
    heading: "Basement Development Electrical",
    paragraphs: [
      "Finishing a basement is one of the most common renovation projects in Calgary, and it's almost entirely dependent on the electrical being planned properly from the start — new circuits for lighting, outlets spaced to code, a circuit for a bathroom if one's being added, and often a dedicated circuit for a home theatre, office, or gym setup. This is standard basement development, distinct from adding a legal basement suite, which involves separate requirements around its own electrical panel space and, in most cases, its own metering.",
      "If you're specifically developing a basement as a legal secondary suite rather than a general rec room or living space, that's covered in more detail on the basement suite electrical page, since the permitting and inspection requirements differ.",
    ],
    image: { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-ceiling-completed-5.jpg", alt: "Completed basement development electrical with recessed LED ceiling lighting in Calgary" },
  },
  {
    heading: "Kitchen and Bathroom Renovation Electrical",
    paragraphs: [
      "Kitchen renovations almost always mean new circuits — dedicated circuits are required for the range, dishwasher, microwave, and fridge, plus GFCI-protected outlets along the counter. If the layout is changing (an island being added, appliances moving to a new wall), that's new wiring runs, not just swapping fixtures in place.",
      "Bathroom renovations have their own code requirements around GFCI protection near water, and often add a dedicated circuit for an exhaust fan, heated floor, or vanity lighting. Both are usually coordinated closely with your general contractor or the trades doing the rest of the renovation, since electrical rough-in has to happen before drywall goes back up.",
    ],
  },
  {
    heading: "Pot Lights and Recessed Lighting Layout",
    paragraphs: [
      "Pot lights are one of the most requested upgrades on their own, separate from a bigger renovation — replacing a single centre fixture with a properly spaced recessed lighting layout throughout a living room, kitchen, or basement. Layout matters more than people expect: spacing too far apart leaves dark spots, too close wastes fixtures and creates glare. Yaya plans the layout based on room dimensions and ceiling height before any holes get cut.",
    ],
    image: { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-light-assembly-4.jpg", alt: "Recessed pot light assembly and installation in a Calgary home renovation" },
  },
  {
    heading: "Garage and Workshop Wiring",
    paragraphs: [
      "Detached garages and workshops usually need their own sub-panel if there's any real tool load involved — welders, compressors, or 240V equipment need dedicated circuits that a single extension cord from the house was never meant to carry. This also covers adding general lighting and outlets to garages that were never wired beyond a single overhead fixture.",
    ],
  },
];

const whatIncluded = [
  "Electrical layout planning before any walls or ceilings are opened",
  "Dedicated circuits for kitchen, bathroom, and workshop equipment",
  "Pot light and recessed lighting layout sized to the room",
  "Rough-in timed to your renovation's drywall schedule",
  "Permit application and inspection coordination",
];

const faqs = [
  { q: "Do I need a permit to finish my basement's electrical?", a: "Yes — any new circuits or significant electrical work as part of basement development requires a City of Calgary permit, which is handled as part of the job." },
  { q: "How many pot lights do I actually need for a room?", a: "It depends on room size, ceiling height, and what the room is used for — Yaya calculates spacing rather than using a flat rule of thumb, since a living room and a kitchen work counter need different light density." },
  { q: "Can electrical work be done without opening the whole basement ceiling?", a: "In an unfinished basement, wiring is straightforward before drywall goes up. In an already-finished basement, some ceiling or wall access is usually needed for new circuits — Yaya will tell you exactly what's involved before starting." },
  { q: "Do you coordinate with my general contractor or other trades?", a: "Yes — renovation electrical almost always needs to be timed around framing, insulation, and drywall schedules, and Yaya works directly with your GC or other trades to keep the project on track." },
  { q: "What's the difference between basement development and a basement suite?", a: "Basement development is finishing the space for your own use — a rec room, office, or extra bedroom. A basement suite is a separate legal dwelling unit with its own requirements around panel capacity and, often, separate metering. If you're planning a suite specifically, that's covered on the basement suite electrical page." },
  { q: "Can you add a dedicated circuit for a hot tub or EV charger during a renovation?", a: "Yes, and it's often more efficient to add it while other electrical work is already underway rather than as a separate project later." },
];

export default function RenovationElectricalPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Electrical Services"
      h1="Renovation Electrical in Calgary"
      intro={[
        "Basement development, kitchen and bathroom renovations, pot light layouts, and garage wiring — Yaya handles the electrical side of Calgary renovation projects, timed around your contractor's schedule and permitted properly from the start.",
      ]}
      heroImage={{ src: "/images/gallery/electrical/calgary-electrician-ceiling-light-installation-abayneh-1.jpg", alt: "Calgary electrician installing ceiling lighting during a home renovation" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="New circuits, basement development, and kitchen/bathroom renovation electrical all require a City of Calgary electrical permit. This is included and coordinated to align with your renovation's inspection schedule."
      timeline="Rough-in for a basement development or kitchen renovation is typically 1-3 days depending on scope, timed to fit your renovation's overall schedule before drywall closes the walls."
      prepSteps={[
        "Have your renovation plans or layout ready to review",
        "Confirm timing with your general contractor if one is involved",
        "Decide on pot light zones and dimmer preferences ahead of rough-in",
        "List any new appliances or equipment needing dedicated circuits",
        "Ensure the work area is accessible before the scheduled date",
      ]}
      faqs={faqs}
      faqHeading="Renovation Electrical FAQ"
      relatedLinks={[
        { href: "/basement-suite-electrical-calgary", label: "Basement Suite Electrical" },
        { href: "/electrical/panel-upgrades", label: "Panel Upgrades" },
        { href: "/electrical/home-rewiring", label: "Home Rewiring" },
      ]}
      serviceName="Renovation Electrical"
      serviceDescription="Electrical work for basement development, kitchen and bathroom renovations, pot light layouts, and garage wiring in Calgary."
      serviceUrl="https://www.yayageneralservice.com/electrical/renovation-electrical"
    />
  );
}
