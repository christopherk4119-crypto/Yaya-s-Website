import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Emergency Plumber Calgary | 24/7, No Extra Fee",
  description: "24/7 emergency plumber in Calgary since 2007. Burst pipes, no water, sewage backup, water heater failure. No after-hours fee. Call (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/plumbing/emergency-plumber" },
  openGraph: {
    title: "Emergency Plumber Calgary | YAYA General Contractor Incorporated",
    description: "24/7 emergency plumbing response in Calgary. No after-hours fee. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/plumbing/emergency-plumber",
  },
};

const sections = [
  {
    heading: "Signs You Need a Plumber Right Now",
    paragraphs: [
      "A burst pipe is the clearest emergency — water actively flowing where it shouldn't, usually from a supply line that's split under pressure. It needs to be stopped immediately, not scheduled for later in the week. An active leak that's slower but steady — under a sink, behind a wall, dripping from the ceiling — still counts, especially if it's been going on long enough to soak drywall or flooring.",
      "No water at all, across the whole house, points to a main line or shut-off valve issue rather than a single fixture. Sewage backing up into a tub, floor drain, or toilet is a health hazard as well as a plumbing problem and needs immediate attention. And a failed water heater — no hot water, or worse, a tank that's actively leaking — is urgent both for comfort and because a leaking tank can fail completely and flood the area around it.",
    ],
    image: { src: "/images/gallery/plumbing/calgary-plumber-shower-valve-brass-fitting-rough-in-5.jpg", alt: "Calgary plumber repairing a brass fitting during an emergency plumbing call" },
  },
  {
    heading: "What to Do Before Yaya Arrives",
    paragraphs: [
      "For a burst pipe or major leak, shutting off the main water supply is the single most important thing you can do. In most Calgary homes, the main shut-off valve is in the basement or utility room, close to where the water line enters the house — often near the water meter or hot water tank, sometimes at the front of the basement closest to the street. It's worth finding and testing yours before an emergency happens, not during one.",
      "For a single leaking fixture — a toilet, a sink, a washing machine hose — there's usually a smaller shut-off valve right at that fixture, which stops the leak without killing water to the whole house. If you can't find it or aren't sure, shutting off the main is the safe default.",
      "If water is pooling anywhere near outlets, light switches, or any electrical panel, and it's safe to reach your breaker panel without stepping through water, shut off power to that area. If reaching the panel means walking through standing water, don't — leave it and wait for help. For a water heater that's actively leaking, shutting off both the water supply to the tank and the power (electric) or gas isolation (as applicable) at the unit helps limit the damage until it can be assessed.",
    ],
  },
  {
    heading: "What the Response Looks Like",
    paragraphs: [
      "Call (403) 400-3055 and describe what's happening — active leak, no water, backup, or water heater failure — so Yaya can give you a realistic idea of timing and, if needed, walk you through finding your shut-off valve over the phone before arriving. On site, the priority is always to stop the immediate problem first, then diagnose the actual cause rather than a quick patch that fails again in a month.",
      "Most emergency plumbing calls — a burst supply line, a failed valve, a backed-up drain — are resolved in a single visit. If something bigger is uncovered, like a failing water heater or a main line issue, you'll get a clear explanation of the options before anything further is done.",
    ],
  },
];

const whatIncluded = [
  "Phone guidance on finding and using your shut-off valve",
  "On-site isolation of the leak or backup",
  "Full diagnosis of the cause, not just a temporary patch",
  "Same-visit repair for most burst pipes, leaks, and valve failures",
  "Clear cost explanation before any repair work begins",
];

const faqs = [
  { q: "Is there really no extra charge for emergency plumbing calls?", a: "Correct — no after-hours, weekend, or holiday surcharge. A burst pipe at 2 AM costs the same as a scheduled weekday visit." },
  { q: "Where is the main water shut-off in a typical Calgary home?", a: "Usually in the basement or utility room, near where the water line enters the house — often close to the water meter or hot water tank. It's worth locating and testing yours now, before you need it in an emergency." },
  { q: "How fast can you get to my home for a burst pipe?", a: "It depends on current job load and location, but call and describe what's happening — Yaya will give you a real estimate on the phone, not a vague window." },
  { q: "My basement floor drain is backing up — is that an emergency?", a: "Yes, treat sewage or drain backup as urgent. It's a health hazard, not just an inconvenience, and can indicate a blockage further down the line that will keep backing up until it's cleared." },
  { q: "Should I keep my water shut off until you arrive, or turn it back on?", a: "Keep it shut off. Turning it back on to test or use water in the meantime risks making the damage worse before it's actually fixed." },
  { q: "Do you charge a separate call-out or diagnostic fee?", a: "No — the phone consultation is free, and diagnosis plus repair on-site is quoted together before any work starts." },
];

export default function EmergencyPlumberPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Plumbing Services"
      h1="Emergency Plumber Calgary"
      intro={[
        "A burst pipe, a backed-up drain, or a water heater that's failed doesn't wait for business hours — and neither does Yaya. Licensed plumber, taking emergency calls in Calgary since 2007, at any hour, any day of the week.",
        "Nights, weekends, and holidays cost exactly the same as a weekday afternoon call. That's how every job has been priced from the start.",
      ]}
      heroImage={{ src: "/images/gallery/plumbing/calgary-plumber-bathtub-faucet-shower-valve-replacement-3.jpg", alt: "Calgary plumber performing emergency shower valve and faucet repair" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Most emergency repairs — a burst supply line, a failed valve, a cleared blockage — don't require a permit. If the emergency reveals a bigger issue, like failing main line plumbing, Yaya will explain what's required before any further work."
      timeline="Most emergency plumbing calls are diagnosed and resolved in a single visit, same day."
      prepSteps={[
        "Locate and shut off the main water valve if there's a major leak",
        "Use the fixture-specific shut-off for a single leaking fixture, if known",
        "Avoid walking through standing water to reach an electrical panel",
        "Keep the affected area clear of belongings that could be damaged further",
        "Note when the problem started and anything unusual beforehand",
      ]}
      afterHoursNote="No after-hours, weekend, or holiday surcharge — ever."
      faqs={faqs}
      faqHeading="Emergency Plumber FAQ"
      relatedLinks={[
        { href: "/plumbing/frozen-pipes", label: "Frozen Pipes" },
        { href: "/plumbing/sump-pumps", label: "Sump Pumps" },
        { href: "/plumbing", label: "All Plumbing Services" },
      ]}
      serviceName="Emergency Plumber"
      serviceDescription="24/7 emergency plumbing repair in Calgary — burst pipes, active leaks, no water, sewage backup, water heater failure. No after-hours surcharge."
      serviceUrl="https://www.yayageneralservice.com/plumbing/emergency-plumber"
      providerType="Plumber"
    />
  );
}
