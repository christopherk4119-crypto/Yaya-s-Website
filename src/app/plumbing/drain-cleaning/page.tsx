import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Drain Cleaning Calgary | Kitchen, Bath & Laundry",
  description: "Drain cleaning in Calgary for kitchen, bathroom, laundry, and floor drains. Recurring blockages diagnosed properly. Call (403) 400-3055.",
  alternates: { canonical: "https://yayageneralservice.com/plumbing/drain-cleaning" },
  openGraph: {
    title: "Drain Cleaning Calgary | YAYA General Contractor Incorporated",
    description: "Kitchen, bathroom, laundry, and floor drain cleaning in Calgary. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/plumbing/drain-cleaning",
  },
};

const sections = [
  {
    heading: "Kitchen, Bathroom, Laundry, and Floor Drains",
    paragraphs: [
      "Kitchen drains slow down mostly from grease and food particles that build up along the inside of the pipe over time — even with a garbage disposal, grease coats the pipe walls and narrows the passage until it eventually blocks. Bathroom drains — sinks, tubs, showers — clog primarily from hair and soap residue, which combine into a dense mass that's much harder to clear than either alone.",
      "Laundry drains back up from lint and detergent residue, especially in older homes where the laundry standpipe is narrower or hasn't been cleaned in years. Floor drains, usually in a basement or utility room, tend to clog less often but more seriously when they do — because they're often the lowest point in the home's drainage system, a floor drain backup can be an early sign of a blockage further down the line, not just a local clog.",
    ],
    image: { src: "/images/gallery/plumbing/calgary-plumber-bathtub-faucet-shower-valve-replacement-3.jpg", alt: "Bathroom plumbing fixture serviced by Calgary plumber" },
  },
  {
    heading: "Recurring Blockages: What's Actually Causing Them",
    paragraphs: [
      "A drain that clears with a plunger or a cleaning but comes back within weeks usually isn't fully cleared — it's been pushed through rather than removed, or the underlying cause (grease buildup, root intrusion further down, a partially collapsed section of pipe) hasn't been addressed. Recurring blockages at the same drain are a signal to properly diagnose the cause rather than repeat the same quick fix indefinitely.",
    ],
  },
  {
    heading: "Why Chemical Drain Cleaners Make Things Worse",
    paragraphs: [
      "Chemical drain cleaners work by generating heat through a chemical reaction to break down the clog, and that heat is hard on older pipes — particularly older PVC, which can soften or warp, and any pipe joint that's already slightly compromised. They also don't address the actual cause of a recurring clog, just dissolve it temporarily, so the same problem often returns. If a chemical cleaner has already been used and the drain is still blocked, mention that when you call — it changes how the clog should be approached safely.",
    ],
  },
  {
    heading: "When a Blockage Means a Main Line Problem",
    paragraphs: [
      "If multiple drains in the house are backing up at the same time — not just one sink, but the lowest fixtures in the house (a basement floor drain, the lowest toilet) — that points to a blockage in the main sewer line rather than an individual drain. This is different from a single clogged sink or tub, and it needs different equipment to diagnose and clear properly: a drain camera to see what's actually happening inside the line, and a powered auger sized for main line work.",
      "To be upfront about this: main sewer line diagnosis and clearing that requires camera inspection and powered auger equipment is outside current in-house capability, and that work is referred out to a specialist with the right equipment for it. What Yaya handles directly is everything upstream of that — kitchen, bathroom, laundry, and floor drain clogs, and diagnosing whether what you're dealing with is a local clog or something that needs a main line specialist in the first place.",
    ],
  },
];

const whatIncluded = [
  "Diagnosis of kitchen, bathroom, laundry, and floor drain blockages",
  "Manual and mechanical clearing appropriate to the clog and pipe type",
  "Assessment of whether a blockage is local or indicates a main line issue",
  "Referral to a main line specialist when camera/auger work is needed",
  "Guidance on preventing recurring blockages at the same drain",
];

const faqs = [
  { q: "Can you clear a main sewer line blockage?", a: "Diagnosing and clearing a main line blockage properly requires a drain camera and powered auger equipment sized for that job, which isn't part of current in-house capability — that work is referred out to a specialist. What's handled directly is kitchen, bathroom, laundry, and floor drain clogs, plus helping you figure out which one you're actually dealing with." },
  { q: "How do I know if it's a local clog or a main line problem?", a: "If only one fixture is affected, it's almost always a local clog. If multiple drains — especially the lowest ones in the house — are backing up around the same time, that's a strong sign of a main line issue rather than something local." },
  { q: "Is it okay to use a chemical drain cleaner before you arrive?", a: "It's better not to, especially on an older pipe — the heat from the chemical reaction can damage softened or aging pipe material, and it often doesn't fix the underlying cause. If you've already used one, mention it when you call." },
  { q: "Why does my kitchen sink keep clogging even after I clean it?", a: "Grease coats the inside of the pipe over time even with regular use — a surface clean of the drain opening doesn't remove buildup further down the line. A proper clearing addresses the whole affected section, not just what's visible." },
  { q: "Is a permit needed for drain cleaning?", a: "No, standard drain cleaning and clearing doesn't require a permit. If clearing reveals a damaged section of pipe that needs replacing, that repair is scoped and discussed separately." },
  { q: "Do you clean floor drains in unfinished basements?", a: "Yes — floor drain clogs are handled the same as other drains, though a floor drain backup is also worth flagging as a possible sign of a main line issue further down." },
];

export default function DrainCleaningPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Plumbing Services"
      h1="Drain Cleaning in Calgary"
      intro={[
        "Kitchen, bathroom, laundry, and floor drain clogs — Yaya clears them properly rather than just pushing the blockage further down the line, and will tell you honestly when what you're dealing with is actually a main sewer line issue that needs a specialist.",
      ]}
      heroImage={{ src: "/images/gallery/plumbing/calgary-plumber-commercial-pvc-pipe-valve-system-1.jpg", alt: "Calgary plumber servicing pipe and valve drain system" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Standard drain cleaning doesn't require a permit. If clearing a blockage reveals damaged pipe that needs replacement, that work is scoped and quoted separately."
      timeline="Most kitchen, bathroom, and laundry drain clogs are cleared in a single visit."
      prepSteps={[
        "Note which drains are affected and whether it's just one or several",
        "Mention if you've already tried a chemical drain cleaner",
        "Clear access to the affected drain, cabinet, or cleanout",
        "Flag if this is a recurring issue at the same drain",
        "Note if any other drains in the house have backed up around the same time",
      ]}
      faqs={faqs}
      faqHeading="Drain Cleaning FAQ"
      relatedLinks={[
        { href: "/plumbing/emergency-plumber", label: "Emergency Plumber" },
        { href: "/plumbing/sump-pumps", label: "Sump Pumps" },
        { href: "/plumbing", label: "All Plumbing Services" },
      ]}
      serviceName="Drain Cleaning"
      serviceDescription="Kitchen, bathroom, laundry, and floor drain cleaning in Calgary. Main sewer line work referred to a specialist when camera/auger equipment is needed."
      serviceUrl="https://yayageneralservice.com/plumbing/drain-cleaning"
      providerType="Plumber"
    />
  );
}
