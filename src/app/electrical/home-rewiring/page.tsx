import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Home Rewiring Calgary | Aluminum & Knob-and-Tube",
  description: "Aluminum wiring pigtailing, knob-and-tube replacement, and whole-home rewiring in Calgary. Insurance documentation provided. Call (403) 400-3055.",
  alternates: { canonical: "https://yayageneralservice.com/electrical/home-rewiring" },
  openGraph: {
    title: "Home Rewiring Calgary | YAYA General Contractor Incorporated",
    description: "Aluminum wiring, knob-and-tube, and full home rewiring in Calgary — insurance-ready documentation. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/electrical/home-rewiring",
  },
};

const sections = [
  {
    heading: "Aluminum Branch Circuit Wiring",
    paragraphs: [
      "A lot of Calgary homes built through the 1960s and into the 1970s were wired with aluminum instead of copper for branch circuits — it was cheaper during a period when copper prices spiked. The wire itself isn't the problem; the connections are. Aluminum expands and contracts more than copper with heating and cooling, which over decades can loosen connections at outlets, switches, and light fixtures, and that's where overheating starts.",
      "The fix isn't a full rewire in most cases — it's pigtailing. Each aluminum wire connection at an outlet, switch, or fixture is joined to a short length of copper using a connector rated and approved for aluminum-to-copper connections, so the device itself connects to copper rather than directly to the aluminum. It's a well-established repair, done device by device throughout the home.",
    ],
    image: { src: "/images/gallery/electrical/calgary-electrician-wiring-repair-multimeter-testing-8.jpg", alt: "Calgary electrician testing aluminum wiring connections with a multimeter" },
  },
  {
    heading: "Insurance Documentation",
    paragraphs: [
      "This is often what actually triggers the call. Many Alberta insurers now ask directly whether a home has aluminum wiring, and some require proof that it's been inspected and pigtailed — or won't renew the policy without it. Yaya provides documentation of the work completed so you have something concrete to give your insurer, not just a verbal assurance.",
      "If you're not sure whether your home has aluminum wiring, it's usually stamped on the wire jacket itself where it's visible at the panel — but the safest way to confirm is to have it checked directly rather than guess from a listing sheet or an old inspection report.",
    ],
  },
  {
    heading: "Knob-and-Tube Replacement",
    paragraphs: [
      "In some of Calgary's older inner-city neighbourhoods, homes built in the early 1900s through the 1940s still have original knob-and-tube wiring in parts of the house — recognizable by the ceramic knobs and tubes the wire runs through inside walls and attics. It wasn't designed for modern loads, has no ground conductor, and most insurers won't cover a home with active knob-and-tube circuits at all.",
      "Replacement is typically staged by area of the house rather than all at once, especially where walls need to be opened to access the old wiring. Yaya will walk the home first to map out exactly which circuits are still knob-and-tube versus already updated, since it's common for a house to have a mix from previous partial renovations.",
    ],
  },
  {
    heading: "Whole-Home Rewiring During Renovation",
    paragraphs: [
      "If you're already opening up walls for a renovation, it's the most cost-effective time to rewire circuits that would otherwise need their own separate access later. This is common on older homes going through a full interior renovation, or where a combination of aluminum wiring, knob-and-tube, and an undersized panel all need addressing together.",
      "Where possible, work is staged room by room or circuit by circuit so the rest of the house keeps power while a specific area is being rewired — a full-house blackout for the entire project isn't usually necessary unless the panel itself is being replaced at the same time.",
    ],
    image: { src: "/images/gallery/electrical/calgary-electrician-breaker-panel-housepower-7.jpg", alt: "Electrical panel and wiring during a Calgary home rewiring project" },
  },
];

const whatIncluded = [
  "On-site assessment of existing wiring type, room by room",
  "Aluminum-to-copper pigtailing at every affected connection point",
  "Insurance-ready documentation of completed work",
  "Knob-and-tube identification and staged replacement plan",
  "Circuit-by-circuit rewiring that keeps unaffected areas powered",
];

const faqs = [
  { q: "How do I know if my home has aluminum wiring?", a: "It's usually printed on the wire jacket itself, visible at the panel — look for 'AL' or 'Aluminum' stamped on the cable. If you can't tell from a quick look, it's worth having it confirmed directly rather than assuming either way." },
  { q: "Does pigtailing fix aluminum wiring for good, or does it need to be redone?", a: "Done with the correct approved connectors, pigtailing is considered a permanent fix and is what most Alberta insurers accept as resolution — it's not a temporary patch." },
  { q: "Will my insurance company accept your documentation?", a: "Yaya provides a written record of the work completed at each connection point, which covers what insurers typically ask for. If your specific insurer has a required form, let Yaya know when you call and it can be filled out to match." },
  { q: "Can you replace knob-and-tube without opening every wall in the house?", a: "In some cases, yes, if there's attic or basement access to the runs. In finished areas without access, opening drywall is usually unavoidable for that specific circuit — Yaya will tell you honestly which rooms need that before starting." },
  { q: "Do I need to move out during a whole-home rewire?", a: "No, in most cases. Work is staged so only the specific area being actively rewired loses power, and that's coordinated with you in advance. A full-house rewire combined with a panel replacement is the one scenario that involves a longer, planned outage." },
  { q: "Is rewiring during a renovation actually cheaper than doing it separately later?", a: "Usually, yes — if the walls are already open for other renovation work, there's no separate cost to access the wiring. Doing it as a standalone project later means opening walls specifically for that purpose." },
];

export default function HomeRewiringPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Electrical Services"
      h1="Home Rewiring in Calgary"
      intro={[
        "Aluminum wiring, knob-and-tube, and outdated circuits are common in Calgary homes built from the early 1900s through the 1970s — and increasingly, insurance companies are the ones forcing the issue. Yaya handles aluminum pigtailing, knob-and-tube replacement, and full home rewiring, with documentation you can hand straight to your insurer.",
      ]}
      heroImage={{ src: "/images/gallery/electrical/calgary-electrician-wiring-repair-multimeter-testing-8.jpg", alt: "Calgary electrician performing home rewiring and wiring repair work" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Pigtailing individual connections generally doesn't require a permit. Larger-scope rewiring — replacing knob-and-tube circuits or rewiring during a renovation — does require a City of Calgary electrical permit, which is included as part of the job."
      timeline="Aluminum pigtailing throughout a typical home is usually a one-day job. Knob-and-tube replacement and whole-home rewiring vary by scope and wall access, and Yaya will give you a realistic timeline after the initial walkthrough."
      prepSteps={[
        "Have any existing insurance letter or requirement on hand if that's what prompted the call",
        "Clear access to outlets, switches, and light fixtures being worked on",
        "Note any rooms already renovated or rewired, if known",
        "Expect temporary power loss only in the specific area being worked on",
        "Ask about staging if you need to keep specific rooms powered during the project",
      ]}
      faqs={faqs}
      faqHeading="Home Rewiring FAQ"
      relatedLinks={[
        { href: "/electrical/panel-upgrades", label: "Panel Upgrades" },
        { href: "/electrical/renovation-electrical", label: "Renovation Electrical" },
        { href: "/electrical/emergency-electrician", label: "Emergency Electrician" },
      ]}
      serviceName="Home Rewiring"
      serviceDescription="Aluminum wiring pigtailing, knob-and-tube replacement, and whole-home rewiring in Calgary, with insurance-ready documentation."
      serviceUrl="https://yayageneralservice.com/electrical/home-rewiring"
    />
  );
}
