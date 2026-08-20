import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Stove & Oven Repair Calgary | All Brands",
  description: "Stove and oven repair in Calgary — elements not heating, wrong oven temperature, control board faults, range hood issues. Call (403) 400-3055.",
  alternates: { canonical: "https://yayageneralservice.com/appliance/stove-oven-repair" },
  openGraph: {
    title: "Stove & Oven Repair Calgary | YAYA General Contractor Incorporated",
    description: "Stove element not heating or oven running hot/cold? Fast diagnosis in Calgary. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/appliance/stove-oven-repair",
  },
};

const sections = [
  {
    heading: "Elements That Won't Heat or Heat Unevenly",
    paragraphs: [
      "A stovetop element that won't heat at all is most often the element itself, though it can also be the switch or control that supplies it — the two look identical from the outside but require very different fixes. An element that heats unevenly, or seems weaker than it used to, is usually a sign the element itself is starting to fail even if it's not fully dead yet.",
      "Diagnosis is straightforward with the right testing: checking whether power is actually reaching the element, and if it is, whether the element itself is the problem or something upstream in the control path.",
    ],
    image: { src: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg", alt: "Stove heating element replacement by Calgary appliance technician" },
  },
  {
    heading: "Ovens Running to the Wrong Temperature",
    paragraphs: [
      "An oven that's consistently running hotter or cooler than what it's set to is one of the most common — and most frustrating — appliance complaints, because the oven still seems to work, it just doesn't cook accurately. This is almost always a temperature sensor that's drifted out of calibration or failed, sometimes combined with a control board that isn't responding to the sensor correctly. Testing the actual internal temperature against what the display shows is the first step in confirming this is really what's happening before replacing anything.",
    ],
  },
  {
    heading: "Failed Control Boards and Sensors",
    paragraphs: [
      "Control boards manage everything from element cycling to display functions, and a failing board can cause symptoms that look like a dozen different problems — elements not responding, temperature swings, buttons not working, or the unit not starting at all. Because a control board is one of the pricier parts to replace, it's worth properly ruling out simpler causes (a bad sensor, a failed switch) before assuming the board itself needs replacing.",
    ],
    image: { src: "/images/gallery/appliance/calgary-appliance-repair-oven-control-board-9.jpg", alt: "Oven control board diagnosis and repair by Calgary appliance technician" },
  },
  {
    heading: "Range Hood and Exhaust Issues",
    paragraphs: [
      "A range hood that's not pulling air properly, is unusually loud, or has stopped working entirely is often a fan motor or switch issue, though ductwork blockage can cause similar symptoms to a failing fan. Since range hoods are also covered as their own installation and repair service, a stove or oven repair visit is a good time to flag any range hood issues at the same time if you've been putting it off.",
    ],
  },
];

const whatIncluded = [
  "Element and switch diagnosis for heating issues",
  "Temperature sensor testing and calibration",
  "Control board diagnosis, ruling out simpler causes first",
  "Range hood and exhaust fan repair",
  "All major brands",
];

const faqs = [
  { q: "My oven says it's at temperature but food isn't cooking right — what's wrong?", a: "Most likely a temperature sensor that's drifted out of calibration, so the actual internal temperature doesn't match what the display shows. This is tested directly rather than guessed at." },
  { q: "One burner element doesn't heat but the others work fine — is that the element or something else?", a: "Usually the element itself, but the switch controlling it can also be the cause, and the two require different repairs. Diagnosis on-site identifies which before any parts are ordered." },
  { q: "Is it worth replacing a control board, or should I replace the whole appliance?", a: "Depends on the appliance's age and the board's cost relative to replacement. Yaya gives an honest comparison rather than defaulting to the more expensive repair." },
  { q: "Can you fix my range hood at the same time as my stove?", a: "Yes — if you're already having a stove or oven looked at, it's a good time to flag any range hood issues so both are addressed in one visit." },
  { q: "Do you repair all stove and oven brands?", a: "Yes — Samsung, LG, Whirlpool, Maytag, Bosch, GE, KitchenAid, Frigidaire, and other major brands are serviced." },
  { q: "How fast can you diagnose an oven temperature problem?", a: "Usually same-day or next-day, with the actual temperature tested against the display during the visit rather than relying on guesswork." },
];

export default function StoveOvenRepairPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Appliance Services"
      h1="Stove & Oven Repair in Calgary"
      intro={[
        "Elements that won't heat, ovens running hot or cold, and range hoods that have stopped pulling air — Yaya diagnoses the actual cause rather than swapping parts and hoping, on all major brands.",
      ]}
      heroImage={{ src: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg", alt: "Calgary appliance technician replacing stove heating element" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Stove and oven repair doesn't require a permit."
      timeline="Most stove and oven repairs are diagnosed same-day, with repair completed same visit once the cause is confirmed."
      prepSteps={[
        "Note which element or burner isn't working, if applicable",
        "Mention if the oven seems to run hot, cold, or inconsistently",
        "Have the appliance accessible with any nearby items cleared",
        "Note the brand and approximate age",
        "Flag any range hood issues if you'd like those looked at too",
      ]}
      faqs={faqs}
      faqHeading="Stove & Oven Repair FAQ"
      relatedLinks={[
        { href: "/appliance/dishwasher-repair", label: "Dishwasher Repair" },
        { href: "/appliance/refrigerator-repair", label: "Refrigerator Repair" },
        { href: "/appliance", label: "All Appliance Services" },
      ]}
      serviceName="Stove and Oven Repair"
      serviceDescription="Stove and oven repair in Calgary — heating elements, temperature accuracy, control boards, range hood and exhaust issues. All brands."
      serviceUrl="https://yayageneralservice.com/appliance/stove-oven-repair"
      providerType="HomeAndConstructionBusiness"
    />
  );
}
