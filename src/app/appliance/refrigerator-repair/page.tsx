import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Refrigerator Repair Calgary | Same-Day Available",
  description: "Refrigerator repair in Calgary — not cooling, icing up, leaking, failed ice maker. Same-day available. All brands. Call (403) 400-3055.",
  alternates: { canonical: "https://yayageneralservice.com/appliance/refrigerator-repair" },
  openGraph: {
    title: "Refrigerator Repair Calgary | YAYA General Contractor Incorporated",
    description: "Fridge not cooling or leaking? Same-day refrigerator repair in Calgary. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/appliance/refrigerator-repair",
  },
};

const sections = [
  {
    heading: "Not Cooling or Cycling Constantly",
    paragraphs: [
      "A fridge that's not cooling properly, or one that's running almost nonstop trying to keep up, usually points to one of a few things: a failing compressor, a thermostat that's misreading the internal temperature, condenser coils clogged with dust and pet hair, or a fan that's not circulating air properly inside the unit. Diagnosis starts with figuring out which of these it actually is rather than guessing — a compressor replacement and a coil cleaning are very different jobs with very different costs.",
      "The urgency here is real: a fridge that's not cooling means food loss starts within hours, not days, which is usually the reason people call the same day something goes wrong rather than waiting.",
    ],
    image: { src: "/images/gallery/appliance/calgary-appliance-repair-appliance-wiring-switch-6.jpg", alt: "Calgary appliance technician diagnosing refrigerator wiring and component issue" },
  },
  {
    heading: "Icing Up and Leaking Water",
    paragraphs: [
      "Excess ice buildup inside the freezer section, or ice forming somewhere it shouldn't, is often a defrost system problem — the defrost heater, timer, or thermostat isn't cycling the way it should, so frost builds up instead of periodically melting off. Left long enough, this can block airflow and start affecting cooling in the fridge section too.",
      "Water leaking from a fridge — pooling underneath or inside on the floor of the unit — is commonly a blocked or frozen defrost drain, which backs up and overflows instead of draining properly. It can also be a water line issue on units with an ice maker or water dispenser, where a connection has failed or the line itself has developed a leak.",
    ],
  },
  {
    heading: "Failed Ice Maker",
    paragraphs: [
      "An ice maker that's stopped producing, making ice slowly, or producing oddly shaped or cloudy ice can be a water inlet valve issue, a problem with the ice maker module itself, or in some cases a water pressure or filter issue that's not specific to the ice maker but affects it. Diagnosis usually starts by checking water supply to the unit before assuming the ice maker module itself has failed, since replacing a module when the actual problem is a restricted water line doesn't fix anything.",
    ],
  },
];

const whatIncluded = [
  "Diagnosis of cooling, compressor, and thermostat issues",
  "Condenser coil cleaning where buildup is the cause",
  "Defrost system repair for icing and drainage problems",
  "Ice maker and water line diagnosis and repair",
  "Same-day service prioritized given food-loss urgency",
];

const faqs = [
  { q: "My fridge stopped cooling — how fast can you come out?", a: "Same-day in most cases, given how quickly food loss becomes a factor. Call and describe what you're seeing so it can be prioritized appropriately." },
  { q: "Is it worth repairing my fridge or should I replace it?", a: "As a general guide, if the repair cost is under about half of replacement cost and the unit isn't near end of life, repair is usually the better value. Yaya gives an honest assessment rather than pushing unnecessary work." },
  { q: "Why is there water pooling under my fridge?", a: "Most commonly a blocked or frozen defrost drain backing up and overflowing. It can also be a water line connection if your model has an ice maker or dispenser." },
  { q: "Do you repair all refrigerator brands?", a: "Yes — Samsung, LG, Whirlpool, Maytag, Bosch, GE, KitchenAid, Frigidaire, and other major brands are all serviced." },
  { q: "My freezer has a lot of ice buildup but the fridge seems fine — is that urgent?", a: "It's worth addressing before it affects cooling more broadly. Excess ice usually means the defrost cycle isn't working correctly, and it tends to get worse rather than resolve on its own." },
  { q: "Do you charge extra for evening or weekend fridge repair?", a: "No — no after-hours or weekend surcharge on any appliance repair call." },
];

export default function RefrigeratorRepairPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Appliance Services"
      h1="Refrigerator Repair in Calgary"
      intro={[
        "A fridge that's not cooling, icing up, or leaking doesn't wait — food loss starts within hours. Yaya diagnoses the actual cause, whether it's the compressor, thermostat, defrost system, or ice maker, and gets same-day service out when it matters.",
      ]}
      heroImage={{ src: "/images/gallery/appliance/calgary-appliance-repair-appliance-wiring-switch-6.jpg", alt: "Refrigerator component repair by Calgary appliance technician" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Refrigerator repair doesn't require a permit."
      timeline="Most refrigerator repairs are diagnosed and completed same-day, given the urgency of food loss."
      prepSteps={[
        "Note what you're seeing — not cooling, icing, leaking, or ice maker issue",
        "Check if the fridge is making unusual noises before the visit",
        "Clear space around and behind the fridge for access",
        "Remove perishables at risk if the unit has been warm for a while",
        "Note the brand and approximate age if known",
      ]}
      faqs={faqs}
      faqHeading="Refrigerator Repair FAQ"
      relatedLinks={[
        { href: "/appliance/washer-dryer-repair", label: "Washer & Dryer Repair" },
        { href: "/appliance/stove-oven-repair", label: "Stove & Oven Repair" },
        { href: "/appliance", label: "All Appliance Services" },
      ]}
      serviceName="Refrigerator Repair"
      serviceDescription="Refrigerator repair in Calgary — not cooling, icing up, leaking, failed ice maker. Same-day service, all brands."
      serviceUrl="https://yayageneralservice.com/appliance/refrigerator-repair"
      providerType="HomeAndConstructionBusiness"
    />
  );
}
