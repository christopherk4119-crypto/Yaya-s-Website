import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Frozen Pipe Repair Calgary | Thawing & Prevention",
  description: "Frozen pipe repair in Calgary — garages, crawl spaces, exterior walls. Safe thawing, burst pipe repair, and freeze prevention. Call (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/plumbing/frozen-pipes" },
  openGraph: {
    title: "Frozen Pipe Repair Calgary | YAYA General Contractor Incorporated",
    description: "Frozen pipe thawing, burst pipe repair, and prevention for Calgary homes. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/plumbing/frozen-pipes",
  },
};

const sections = [
  {
    heading: "Why Pipes Freeze in Calgary Homes",
    paragraphs: [
      "Calgary's winters put specific parts of a home at risk that a lot of homeowners don't think about until it's already a problem. Garages — especially attached garages with a water line running to a laundry sink or hose bib — are rarely insulated to the same standard as living space, and an unheated or under-heated garage during a cold snap is one of the most common places for a freeze to start.",
      "Crawl spaces and exterior walls are the other two big risk areas. A crawl space with poor insulation or a foundation vent left open lets cold air sit directly against pipes running through it. Exterior walls — particularly on additions or renovations where a pipe run ended up on an outside wall instead of an interior one — don't have the surrounding heated space to buffer against a hard freeze the way pipes deeper in the house do.",
    ],
    image: { src: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg", alt: "Copper and PVC pipe installation along a wall in a Calgary home" },
  },
  {
    heading: "Warning Signs Before a Burst",
    paragraphs: [
      "A pipe that's freezing but hasn't split yet usually gives some warning: noticeably reduced or no water flow from a specific fixture during a cold snap, frost visible on an exposed pipe, or a faint knocking or whistling sound when a tap is opened. Catching it at this stage — before ice fully blocks the line and pressure builds — is the difference between a thaw and a repair.",
      "Once a pipe actually splits, you often won't know until it thaws and starts leaking, sometimes hours or days after the cold snap has passed. This is why a sudden leak appearing during a warm-up after a hard freeze is one of the most common winter plumbing calls in Calgary.",
    ],
  },
  {
    heading: "Safe Thawing vs. What Causes Splits",
    paragraphs: [
      "The right way to thaw a pipe is gradual, even heat — a hair dryer, an electric heating pad, or warm (not boiling) towels applied along the frozen section, working from the open end back toward the blockage so melting water has somewhere to go. What causes splits is usually sudden expansion: a blowtorch or other open flame applied directly to a pipe, or ice that's already fully blocked a section so pressure has nowhere to release as it expands.",
      "If a pipe has already split, thawing it just means the leak starts flowing — at that point it's a repair, not a thawing job, and the water needs to be shut off at the nearest valve before anything else.",
    ],
  },
  {
    heading: "Hose Bibs and Frost-Free Sillcocks",
    paragraphs: [
      "Exterior hose bibs are one of the most commonly damaged fixtures over a Calgary winter, especially if a hose was left attached going into freeze-up — that traps water in the bib itself with nowhere to expand. Frost-free sillcocks are designed to drain automatically once shut off, but only if nothing's blocking that drainage, which a connected hose does.",
      "Damage often isn't obvious until spring, when the bib is turned back on and water shows up inside the wall or basement near where the line runs through, rather than at the spout itself.",
    ],
    image: { src: "/images/gallery/plumbing/calgary-plumber-shower-valve-brass-fitting-rough-in-5.jpg", alt: "Plumbing fitting repair for frozen and damaged pipe in Calgary" },
  },
];

const whatIncluded = [
  "Assessment of frozen sections before any thawing begins",
  "Safe, gradual thawing using appropriate methods for the location",
  "Repair of any splits found once thawed",
  "Hose bib and sillcock inspection and replacement if damaged",
  "Prevention recommendations for at-risk areas going forward",
];

const faqs = [
  { q: "Can you tell if a pipe has already burst before it thaws?", a: "Sometimes — reduced water flow combined with visible frost or a bulge in the pipe can suggest it, but often the only certain sign is a leak once it thaws. If you suspect a burst, shutting off water to that section before thawing is the safer approach." },
  { q: "Is it safe to use a space heater to thaw a frozen pipe myself?", a: "A space heater aimed at the general area can help, but direct high heat sources like a torch are what cause splits — if you're not sure the pipe has already burst, gentle and gradual heat is safer than intense localized heat." },
  { q: "Why did my hose bib leak inside the house instead of outside?", a: "A frost-free sillcock is designed to drain back away from the house automatically, but a hose left attached over winter blocks that drainage — the water freezes inside the wall cavity instead of outside, and any split shows up there." },
  { q: "How do I prevent pipes from freezing next winter?", a: "Disconnect hoses from exterior bibs before freeze-up, keep garage doors closed as much as possible during cold snaps, insulate exposed pipes in crawl spaces and garages, and let faucets on exterior-wall runs drip slightly during extreme cold." },
  { q: "Is frozen pipe repair covered under a permit?", a: "No, straightforward frozen pipe repair and thawing doesn't require a permit. If a section needs to be rerouted or reinsulated as part of the fix, that's still typically standard repair work, not permit-triggering." },
  { q: "How fast can you respond to a frozen or burst pipe?", a: "Same-day in most cases — call and describe what you're seeing, especially if water is already leaking, so it can be prioritized appropriately." },
];

export default function FrozenPipesPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Plumbing Services"
      h1="Frozen Pipe Repair in Calgary"
      intro={[
        "Garages, crawl spaces, and exterior walls are where Calgary winters do the most damage to household plumbing. Yaya handles frozen pipe thawing, burst pipe repair, and hose bib damage — and can help you prevent it before the next cold snap hits.",
      ]}
      heroImage={{ src: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg", alt: "Calgary plumber inspecting pipe installation prone to freezing" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Standard frozen pipe thawing and repair doesn't require a permit. If a pipe run needs to be relocated or rerouted as part of the fix, that's addressed as part of the repair, not as separate permitted work."
      timeline="Thawing and repair of a single frozen or burst section is typically completed same-day."
      prepSteps={[
        "Shut off water to the affected section if you suspect a burst",
        "Don't apply direct open-flame heat to a frozen pipe",
        "Disconnect any hoses from exterior bibs if not already done",
        "Note which fixtures have reduced or no flow",
        "Point out any areas with prior freeze damage from past winters",
      ]}
      faqs={faqs}
      faqHeading="Frozen Pipes FAQ"
      relatedLinks={[
        { href: "/plumbing/emergency-plumber", label: "Emergency Plumber" },
        { href: "/plumbing/sump-pumps", label: "Sump Pumps" },
        { href: "/plumbing/renovation-plumbing", label: "Renovation Plumbing" },
      ]}
      serviceName="Frozen Pipe Repair"
      serviceDescription="Frozen and burst pipe repair in Calgary — garages, crawl spaces, exterior walls, hose bibs. Safe thawing and prevention."
      serviceUrl="https://www.yayageneralservice.com/plumbing/frozen-pipes"
      providerType="Plumber"
    />
  );
}
