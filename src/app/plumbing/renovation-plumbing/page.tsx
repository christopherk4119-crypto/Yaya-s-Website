import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Renovation Plumbing Calgary | Bathroom & Kitchen",
  description: "Plumbing for basement bathrooms, kitchen and bathroom renovations in Calgary. Rough-in to fixture install, water line replacement. Call (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/plumbing/renovation-plumbing" },
  openGraph: {
    title: "Renovation Plumbing Calgary | YAYA General Contractor Incorporated",
    description: "Basement bathroom rough-in, kitchen and bathroom renovation plumbing in Calgary. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/plumbing/renovation-plumbing",
  },
};

const sections = [
  {
    heading: "Basement Bathroom Rough-In",
    paragraphs: [
      "Adding a bathroom to an unfinished basement means running drain, vent, and supply lines to a location that likely never had plumbing before. The drain needs proper slope to the main line, the vent needs to tie into the existing venting system correctly so fixtures drain properly without gurgling or sewer gas smell, and supply lines need to reach the new fixture locations from wherever the existing lines run. Getting the rough-in right the first time matters more here than almost any other renovation plumbing, since it's all buried behind drywall once the room is finished.",
    ],
    image: { src: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg", alt: "Basement bathroom rough-in plumbing with copper and PVC pipe in Calgary home" },
  },
  {
    heading: "Kitchen Renovation Plumbing",
    paragraphs: [
      "A kitchen renovation almost always means plumbing has to move — a sink relocating to an island, a dishwasher going in where there wasn't one before, a garbage disposal being added. Each of these needs its own supply and drain connection planned around the new layout, not just extended from wherever the old sink was.",
      "This is also one of the clearest places the one-tradesman advantage matters in practice: a new dishwasher needs a water supply, a drain connection, and its own dedicated electrical circuit. Handling all three as one visit instead of coordinating a plumber and an electrician separately saves real time and avoids the two trades needing to sequence around each other.",
    ],
  },
  {
    heading: "Bathroom Renovation: Rough-In to Fixture Install",
    paragraphs: [
      "For a full bathroom renovation — not just a fixture swap — plumbing is involved at both ends of the project: rough-in before drywall goes up (if the layout is changing at all), and final fixture installation once tile and finishes are done. Toilet, sink, tub, and shower valve all need to be set correctly at rough-in stage so the finished fixtures line up properly, since moving anything after tile is down is a much bigger job.",
    ],
    image: { src: "/images/gallery/plumbing/calgary-plumber-shower-valve-brass-fitting-rough-in-5.jpg", alt: "Shower valve brass fitting rough-in for bathroom renovation in Calgary" },
  },
  {
    heading: "Water Line Replacement and Shut-Off Valves",
    paragraphs: [
      "Older water lines — especially original galvanized or aging copper — are often replaced during a renovation even if they're not actively failing, since it's far easier to do while walls are already open. PEX has largely replaced copper for new residential runs because it's more flexible and resistant to freeze damage, though copper is still used where it makes sense for a specific project.",
      "Shut-off valves, especially old gate valves that no longer seal fully, are a common renovation add-on — replacing them with modern ball valves at each fixture makes future repairs far simpler, since you can isolate a single fixture instead of shutting off water to the whole house.",
    ],
  },
];

const whatIncluded = [
  "Drain, vent, and supply rough-in for new bathroom or kitchen layouts",
  "Dishwasher, disposal, and sink connections sized to the fixtures",
  "Fixture installation once finishes are complete",
  "Water line replacement in copper or PEX",
  "Shut-off valve replacement at fixtures",
];

const faqs = [
  { q: "Do I need a permit for basement bathroom plumbing?", a: "Yes — adding a bathroom to a basement requires a City of Calgary permit for the plumbing rough-in. Yaya handles the permit application and inspection coordination as part of the job." },
  { q: "Can you coordinate with my general contractor during a renovation?", a: "Yes — renovation plumbing has to be timed around framing and drywall schedules, and Yaya works directly with your GC or other trades to keep rough-in and fixture installation on schedule." },
  { q: "Should I replace my water lines even if they're not leaking?", a: "If they're original galvanized pipe or aging copper and the walls are already open for renovation, it's usually worth it — replacing later means opening walls again specifically for that purpose." },
  { q: "Can you handle both the plumbing and electrical for a new dishwasher?", a: "Yes — supply line, drain connection, and the dedicated circuit the dishwasher needs are all handled as one visit rather than coordinating two separate contractors." },
  { q: "How long does a basement bathroom rough-in take?", a: "Typically 1-2 days for the rough-in itself, depending on how far the new fixtures are from existing lines and drain access." },
  { q: "Do you replace old shut-off valves during a renovation even if they still work?", a: "It's a common add-on when walls or cabinets are already open — swapping old gate valves for modern ball valves makes future repairs much easier, and it's inexpensive to do while everything's already accessible." },
];

export default function RenovationPlumbingPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Plumbing Services"
      h1="Renovation Plumbing in Calgary"
      intro={[
        "Basement bathrooms, kitchen renovations, and full bathroom remodels all need plumbing planned around the new layout, not just extended from where it used to be. Yaya handles rough-in through fixture install, timed around your renovation's schedule.",
      ]}
      heroImage={{ src: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg", alt: "Renovation plumbing rough-in with copper and PVC pipe in Calgary" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="New bathroom rough-in and significant plumbing relocation require a City of Calgary permit. Yaya handles the application and coordinates inspection with your renovation's timeline."
      timeline="Rough-in for a basement bathroom or kitchen renovation is typically 1-2 days; fixture installation after finishes are complete is usually a half-day to full day."
      prepSteps={[
        "Have your renovation layout or plans ready to review",
        "Confirm timing with your general contractor if one is involved",
        "Decide on fixture locations before rough-in begins",
        "List any new appliances (dishwasher, disposal) needing connections",
        "Ensure the work area is accessible on the scheduled date",
      ]}
      faqs={faqs}
      faqHeading="Renovation Plumbing FAQ"
      relatedLinks={[
        { href: "/plumbing/sump-pumps", label: "Sump Pumps" },
        { href: "/appliance/dishwasher-repair", label: "Dishwasher Repair" },
        { href: "/electrical/renovation-electrical", label: "Renovation Electrical" },
      ]}
      serviceName="Renovation Plumbing"
      serviceDescription="Plumbing for basement bathrooms, kitchen and bathroom renovations in Calgary — rough-in through fixture install, water line and valve replacement."
      serviceUrl="https://www.yayageneralservice.com/plumbing/renovation-plumbing"
      providerType="Plumber"
    />
  );
}
