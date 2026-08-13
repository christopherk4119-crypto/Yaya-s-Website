import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Sump Pump Installation & Repair Calgary",
  description: "Sump pump installation and repair in Calgary. Spring melt flooding, pumps that won't start or run constantly, backup options. Call (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/plumbing/sump-pumps" },
  openGraph: {
    title: "Sump Pumps Calgary | YAYA General Contractor Incorporated",
    description: "Sump pump installation, repair, and backup options for Calgary basements. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/plumbing/sump-pumps",
  },
};

const sections = [
  {
    heading: "Spring Melt and Heavy Rain Flooding",
    paragraphs: [
      "Calgary basements see the most flood risk during spring melt, when accumulated snow melts faster than the ground can absorb it, and during sudden heavy summer rain. Both push groundwater up against the foundation, and a sump pump is what keeps that water from finding its way into the basement instead of a functioning pump doing its job unnoticed in a pit under the floor.",
      "A lot of homeowners don't think about their sump pump until it fails during exactly the event it was installed for — which is usually the worst possible time to discover a problem.",
    ],
    image: { src: "/images/gallery/plumbing/calgary-plumber-basement-pump-pvc-pipe-system-2.jpg", alt: "Sump pump and basement pipe system installed by Calgary plumber" },
  },
  {
    heading: "Installation and Basin Sizing",
    paragraphs: [
      "Installing a sump pump means more than dropping a pump into an existing pit — the basin needs to be sized to the amount of water your specific property actually deals with, based on grading, soil, and how the foundation drainage feeds into it. Too small a basin means the pump cycles constantly even under normal conditions; too large adds cost without benefit.",
      "For homes without an existing sump pit, installation means cutting into the basement floor to set the basin at the right depth relative to the foundation drainage, then routing everything to tie in properly.",
    ],
  },
  {
    heading: "Discharge Line Routing",
    paragraphs: [
      "Where the discharge line sends water matters as much as the pump itself. It needs to route far enough away from the foundation that the water doesn't just seep back down and end up back in the same sump pit — a discharge line that dumps too close to the house effectively undoes the pump's work. In Calgary winters, exposed discharge lines are also a freeze risk, which needs to be accounted for in how the line is routed and insulated.",
    ],
  },
  {
    heading: "Common Sump Pump Problems",
    paragraphs: [
      "A pump that runs constantly, even when there shouldn't be much water coming in, usually means either the float switch is stuck or malfunctioning, or the basin is undersized for the actual water volume. A pump that won't start at all when water rises is either a power issue, a seized motor, or a float switch that's failed in the opposite direction. A pump that cycles on and off without actually moving water is often a sign the impeller is jammed or the discharge line is blocked or frozen.",
      "Any of these failing during an actual flood event is the scenario a sump pump exists to prevent — which is why testing it before spring melt, not during it, is worth the ten minutes it takes.",
    ],
    image: { src: "/images/gallery/plumbing/calgary-plumber-basement-pump-pvc-pipe-system-2.jpg", alt: "Sump pump maintenance and repair for Calgary basement flooding prevention" },
  },
  {
    heading: "Backup Considerations",
    paragraphs: [
      "A primary sump pump that relies on household power will fail during a power outage — which is exactly when heavy storms are also most likely to knock out power. A battery backup or water-powered backup system keeps the pump running through an outage, and it's worth discussing if your basement holds anything you can't afford to have flooded.",
    ],
  },
];

const whatIncluded = [
  "Basin sizing based on your property's actual drainage",
  "New sump pump and basin installation, or pump replacement in an existing pit",
  "Discharge line routing away from the foundation, freeze-protected",
  "Diagnosis of pumps that run constantly, won't start, or cycle without pumping",
  "Backup power options for outage protection",
];

const faqs = [
  { q: "How do I know if my sump pump needs to be replaced or just repaired?", a: "It depends on what's failing — a stuck float switch or clogged discharge line is often a repair. A seized motor or a basin that's clearly undersized for your property usually means replacement makes more sense than repeatedly repairing the same undersized setup." },
  { q: "Do I need a permit to install a sump pump?", a: "Installing a new sump pit and pump where one doesn't exist typically requires a permit in Calgary, since it involves the foundation drainage system. Yaya handles the permit as part of the job." },
  { q: "How often should I test my sump pump?", a: "At minimum, before spring melt each year — pour a bucket of water into the pit and confirm the pump activates, moves the water, and shuts off properly. If it's been more than a year since it last ran under real conditions, testing it is worth doing." },
  { q: "What's the difference between a battery backup and a water-powered backup?", a: "A battery backup runs the pump off a charged battery during a power outage, and needs the battery maintained. A water-powered backup uses municipal water pressure to pump instead of electricity, which works during an outage but depends on water pressure staying available. Yaya can walk through which fits your situation." },
  { q: "Why does my sump pump run constantly even when it hasn't rained?", a: "Could be a stuck float switch keeping it triggered, or an undersized basin cycling more than it should under normal groundwater seepage. Worth having assessed rather than left running, since constant cycling shortens the pump's life." },
  { q: "Is emergency sump pump repair available during a flood event?", a: "Yes — a failed pump during active flooding is treated as an emergency call, with no after-hours surcharge." },
];

export default function SumpPumpsPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Plumbing Services"
      h1="Sump Pump Installation & Repair in Calgary"
      intro={[
        "Spring melt and heavy rain put Calgary basements at real flood risk, and a sump pump only helps if it's actually working when you need it. Yaya installs, repairs, and sizes sump pump systems properly — basin, discharge routing, and backup options included.",
      ]}
      heroImage={{ src: "/images/gallery/plumbing/calgary-plumber-basement-pump-pvc-pipe-system-2.jpg", alt: "Calgary plumber installing sump pump and basement pipe system" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="New sump pit and pump installation typically requires a permit since it ties into the foundation drainage system. Pump replacement in an existing pit generally doesn't. Yaya handles permitting where required."
      timeline="Pump replacement in an existing pit is usually same-day. New sump pit installation typically takes one day depending on basement floor access."
      prepSteps={[
        "Clear access to the sump pit area",
        "Note whether the pump is failing to start, running constantly, or cycling without moving water",
        "Mention any past basement flooding events, if relevant",
        "Let Yaya know if you're interested in backup power options",
        "Have your basement floor plan in mind if this is a new installation",
      ]}
      faqs={faqs}
      faqHeading="Sump Pump FAQ"
      relatedLinks={[
        { href: "/plumbing/emergency-plumber", label: "Emergency Plumber" },
        { href: "/plumbing/frozen-pipes", label: "Frozen Pipes" },
        { href: "/plumbing/renovation-plumbing", label: "Renovation Plumbing" },
      ]}
      serviceName="Sump Pump Installation and Repair"
      serviceDescription="Sump pump installation, repair, and backup options in Calgary — basin sizing, discharge routing, and flood prevention for spring melt and heavy rain."
      serviceUrl="https://www.yayageneralservice.com/plumbing/sump-pumps"
      providerType="Plumber"
    />
  );
}
