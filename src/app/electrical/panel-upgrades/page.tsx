import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Electrical Panel Upgrades Calgary | 100A to 200A",
  description: "Panel upgrades in Calgary: 60/100A to 200A service, Federal Pacific & Zinsco replacement, sub-panels. Permits included. Call (403) 400-3055.",
  alternates: { canonical: "https://yayageneralservice.com/electrical/panel-upgrades" },
  openGraph: {
    title: "Electrical Panel Upgrades Calgary | YAYA General Contractor Incorporated",
    description: "100A to 200A panel upgrades in Calgary, done to code with permits included. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/electrical/panel-upgrades",
  },
};

const sections = [
  {
    heading: "Why Homeowners Upgrade Their Panel",
    paragraphs: [
      "A lot of Calgary homes — especially anything built before the late 1980s — were originally wired with a 60 or 100 amp panel. That was fine for the appliance load of the time, but it doesn't leave much room for what a modern household actually runs: central air conditioning, a hot tub, an EV charger, a finished basement with its own circuits, or a basement suite with a separate metering requirement.",
      "The most common trigger is a renovation or an insurance requirement. Many insurers in Alberta now flag older 60 and 100 amp services, and some outright decline to renew coverage — or add a rider — until the panel is upgraded. If you're adding a basement suite, most municipal and utility requirements assume enough panel capacity to support a second dwelling unit's load.",
      "A 200 amp service gives you headroom for all of that without derating existing circuits, and it's the standard most new construction in Calgary is built to today.",
    ],
    image: { src: "/images/gallery/electrical/calgary-electrician-breaker-panel-housepower-7.jpg", alt: "Upgraded 200 amp electrical panel installed in a Calgary home" },
  },
  {
    heading: "Federal Pacific and Zinsco Panel Replacement",
    paragraphs: [
      "If your home has an original Federal Pacific Stab-Lok or Zinsco panel, that's worth addressing regardless of amperage. Both brands have documented breaker failure issues — breakers that don't trip reliably under an overload or short — and they're a well-known red flag for home insurers and inspectors in Alberta. Many insurance companies will require replacement before issuing or renewing a policy on a home with one of these panels still in service.",
      "These panels were common in Calgary homes built roughly from the 1960s through the early 1980s, so it's worth checking your panel's brand even if you're not planning any other electrical work. Replacement is a same-scope job as a standard panel upgrade — Yaya handles the removal, permit, and utility coordination as one project.",
    ],
  },
  {
    heading: "Sub-Panels for Garages and Basement Suites",
    paragraphs: [
      "Not every project needs a full main panel replacement. A detached garage, a workshop, or a basement suite can often be served by a sub-panel fed from the existing main service, which is a smaller job with its own permit and a faster timeline. This is common for homeowners adding a workshop with tools that need dedicated 240V circuits, or finishing a basement suite that needs its own breaker space separate from the rest of the house.",
      "Whether a sub-panel is enough or a full service upgrade is needed depends on your existing panel's remaining capacity — that's the first thing assessed on site before recommending either option.",
    ],
  },
];

const whatIncluded = [
  "On-site load assessment of your existing panel and wiring",
  "Permit application and City of Calgary inspection coordination",
  "Coordination with Enmax for any required service disconnect/reconnect",
  "New panel, breakers, and grounding installed to current code",
  "Labeling of every circuit before the job is signed off",
];

const faqs = [
  { q: "How do I know if I need 100A or 200A?", a: "If you have or are planning central AC, a hot tub, an EV charger, a basement suite, or a fully finished basement with electric heat, 200A is almost always the right call. For a smaller home with gas heat and no major additions planned, 100A can still be adequate — Yaya will do a real load assessment rather than just upselling the bigger panel." },
  { q: "Do I need a permit for a panel upgrade?", a: "Yes, always. A permit is required by the City of Calgary for any service upgrade, and Yaya pulls it as part of the job — it's included, not an add-on." },
  { q: "Will I be without power during the upgrade?", a: "Yes, for part of the day. Enmax needs to disconnect the service before the old panel comes out and reconnect once the new one passes inspection. Most upgrades are planned to keep this window as short as possible, typically a few hours during the workday." },
  { q: "How long does a panel upgrade take?", a: "Most residential upgrades are a one-day job from removal to reconnection, assuming no unexpected wiring issues are found once the old panel is opened up." },
  { q: "I have a Federal Pacific panel but haven't had any problems — do I really need to replace it?", a: "The risk with Federal Pacific and Zinsco panels isn't that they fail constantly — it's that the breakers can fail to trip during an actual overload or short, which is exactly when you need them to work. Combined with the insurance angle, most homeowners replace it proactively rather than wait for a claim to be denied." },
  { q: "Does a panel upgrade help if I'm planning to add a basement suite later?", a: "Yes — it's often more efficient to upgrade the panel once with future suite capacity in mind, rather than upgrading again in a year. Worth mentioning when you call so the sizing accounts for it." },
];

export default function PanelUpgradesPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Electrical Services"
      h1="Electrical Panel Upgrades in Calgary"
      intro={[
        "An old 60 or 100 amp panel wasn't built for the way homes run today. Yaya upgrades residential electrical panels across Calgary — 60/100A to 200A, Federal Pacific and Zinsco replacement, and sub-panels for garages and suites — with permits and utility coordination handled as part of the job, not billed separately.",
      ]}
      heroImage={{ src: "/images/gallery/electrical/calgary-electrician-breaker-panel-upgrade-before-6.jpg", alt: "Electrical panel before upgrade in a Calgary home, breaker panel service" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="A City of Calgary electrical permit is required for every panel upgrade and is included as part of the job. Yaya applies for it and coordinates the inspection so you don't have to deal with the City directly."
      timeline="Most residential panel upgrades are completed in a single day, including the Enmax disconnect/reconnect window and final inspection scheduling."
      prepSteps={[
        "Clear access to your current panel location",
        "Let Yaya know about any planned additions (EV charger, suite, hot tub) so sizing accounts for them",
        "Expect a partial-day power outage during the swap",
        "Have your Enmax account details on hand if requested",
        "Note your panel's brand if you already know it (helps flag Federal Pacific/Zinsco in advance)",
      ]}
      faqs={faqs}
      faqHeading="Panel Upgrade FAQ"
      relatedLinks={[
        { href: "/electrical/home-rewiring", label: "Home Rewiring" },
        { href: "/electrical/emergency-electrician", label: "Emergency Electrician" },
        { href: "/electrical/renovation-electrical", label: "Renovation Electrical" },
      ]}
      serviceName="Electrical Panel Upgrade"
      serviceDescription="Residential electrical panel upgrades in Calgary — 60/100A to 200A service, Federal Pacific and Zinsco replacement, sub-panel installation, permits included."
      serviceUrl="https://yayageneralservice.com/electrical/panel-upgrades"
    />
  );
}
