import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Washer & Dryer Repair Calgary | All Brands",
  description: "Washer and dryer repair in Calgary — won't drain, spin, start, or heat. Vent inspected for fire risk on every dryer call. Call (403) 400-3055.",
  alternates: { canonical: "https://yayageneralservice.com/appliance/washer-dryer-repair" },
  openGraph: {
    title: "Washer & Dryer Repair Calgary | YAYA General Contractor Incorporated",
    description: "Washer won't drain or spin? Dryer won't heat? All brands serviced in Calgary. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/appliance/washer-dryer-repair",
  },
};

const sections = [
  {
    heading: "Washers That Won't Drain, Spin, or Start",
    paragraphs: [
      "A washer that won't drain usually has a blocked drain pump, a kinked or clogged drain hose, or occasionally an object caught in the pump itself — coins and small items are a common culprit. A washer that fills and agitates but won't spin often points to a worn or broken drive belt, a failed lid or door lock switch (many machines won't spin unless the lock engages properly), or a motor coupling issue on some models.",
      "A washer that won't start at all is usually electrical — a failed door/lid switch, a control board fault, or in some cases a simple power supply issue that gets misdiagnosed as something bigger. Diagnosis starts with the simplest explanation before assuming a major component has failed.",
    ],
    image: { src: "/images/gallery/appliance/calgary-appliance-repair-dryer-switch-wiring-5.jpg", alt: "Calgary appliance technician repairing washer and dryer switch wiring" },
  },
  {
    heading: "Dryers That Won't Heat or Need Multiple Cycles",
    paragraphs: [
      "A dryer that runs but produces no heat is most often a failed heating element or igniter component, though a tripped thermal fuse (which cuts heat as a safety measure when airflow is restricted) is also common — and if that's the cause, it usually means there's an underlying venting problem that needs fixing too, not just the fuse replaced.",
      "A dryer that technically works but takes two or three cycles to actually dry a load is one of the most common calls, and it's very often not the dryer's fault at all — it's restricted airflow from a vent that's partially blocked, too long, or has too many bends. Replacing parts on a dryer that's struggling because of a vent problem doesn't fix anything.",
    ],
  },
  {
    heading: "The Venting Angle Most Techs Skip",
    paragraphs: [
      "Dryer vent condition gets overlooked constantly, and it's genuinely a fire risk, not just an efficiency issue — lint buildup in a restricted or overly long vent run is one of the more common causes of house fires that start in laundry rooms. A proper dryer repair call includes actually checking the vent, not just the machine, because a dryer that seems to be malfunctioning is very often a dryer working against a vent that can't move air properly.",
      "This is easy to skip because it takes more time than just swapping a part, but a repair that ignores the vent is often a repeat call within a few months once the underlying airflow problem causes the same symptom again.",
    ],
    image: { src: "/images/gallery/appliance/calgary-appliance-repair-dryer-igniter-switch-component-4.jpg", alt: "Dryer igniter and switch component repair by Calgary appliance technician" },
  },
  {
    heading: "Stacked vs. Side-by-Side Units",
    paragraphs: [
      "Stacked laundry units add access complexity — the dryer venting and washer drain connections are often tighter to reach, and stacking brackets need to be handled correctly when servicing either unit so nothing shifts. Side-by-side units are generally more straightforward to access but take up more floor space and sometimes have longer vent runs depending on layout. Both are serviced the same way in terms of diagnosis; it's really about ease of access and doing the job without damaging the install.",
    ],
  },
];

const whatIncluded = [
  "Full diagnosis of washer drain, spin, and start issues",
  "Dryer heating element, igniter, and thermal fuse diagnosis",
  "Dryer vent inspection as part of every heating-related call",
  "Service on stacked and side-by-side installations",
  "All major brands",
];

const faqs = [
  { q: "Why does my dryer take multiple cycles to dry clothes?", a: "Most often a restricted or overly long vent, not the dryer itself. A proper repair call checks the vent along with the machine, since replacing parts won't fix an airflow problem." },
  { q: "Is a blocked dryer vent actually a fire risk?", a: "Yes — lint buildup in a restricted vent is a well-documented cause of house fires. It's worth having checked periodically even if the dryer seems to be working fine." },
  { q: "My washer fills and agitates but won't spin — what's wrong?", a: "Commonly a worn drive belt, a failed door/lid lock switch, or a motor coupling issue depending on the model. Diagnosis on-site identifies which before any parts are ordered." },
  { q: "Do you service stacked laundry units?", a: "Yes — stacked units just require more careful access and handling of the stacking brackets, but diagnosis and repair work the same way as side-by-side units." },
  { q: "Do you repair all washer and dryer brands?", a: "Yes — Samsung, LG, Whirlpool, Maytag, Bosch, GE, KitchenAid, Frigidaire, and others are all serviced." },
  { q: "Do you charge extra for same-day or evening repair?", a: "No — no after-hours or weekend surcharge on appliance repair calls." },
];

export default function WasherDryerRepairPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Appliance Services"
      h1="Washer & Dryer Repair in Calgary"
      intro={[
        "A washer that won't drain or spin, a dryer that won't heat or needs multiple cycles — Yaya diagnoses the actual cause, and every dryer call includes checking the vent, not just the machine, since a blocked vent is both a common cause of poor performance and a genuine fire risk.",
      ]}
      heroImage={{ src: "/images/gallery/appliance/calgary-appliance-repair-dryer-switch-wiring-5.jpg", alt: "Washer and dryer repair service by Calgary appliance technician" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Washer and dryer repair doesn't require a permit."
      timeline="Most washer and dryer repairs are diagnosed and completed same-day, once parts (if needed) are confirmed available."
      prepSteps={[
        "Note the exact symptom — won't drain, won't spin, won't start, or won't heat",
        "Mention if it takes multiple cycles to dry a load",
        "Clear access to the unit, including behind it if possible",
        "Note the brand and approximate age",
        "Flag if this is a stacked installation",
      ]}
      faqs={faqs}
      faqHeading="Washer & Dryer Repair FAQ"
      relatedLinks={[
        { href: "/appliance/refrigerator-repair", label: "Refrigerator Repair" },
        { href: "/appliance/stove-oven-repair", label: "Stove & Oven Repair" },
        { href: "/appliance", label: "All Appliance Services" },
      ]}
      serviceName="Washer and Dryer Repair"
      serviceDescription="Washer and dryer repair in Calgary — drain, spin, start, and heating issues, plus dryer vent inspection for fire-risk airflow problems. All brands."
      serviceUrl="https://yayageneralservice.com/appliance/washer-dryer-repair"
      providerType="HomeAndConstructionBusiness"
    />
  );
}
