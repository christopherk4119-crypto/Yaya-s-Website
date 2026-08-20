import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/service-detail";

export const metadata: Metadata = {
  title: "Emergency Electrician Calgary | 24/7, No Extra Fee",
  description: "24/7 emergency electrician in Calgary. No power, sparking outlets, burning smell, tripped breakers. No after-hours surcharge. Call (403) 400-3055.",
  alternates: { canonical: "https://yayageneralservice.com/electrical/emergency-electrician" },
  openGraph: {
    title: "Emergency Electrician Calgary | YAYA General Contractor Incorporated",
    description: "24/7 emergency electrical response in Calgary. No after-hours fee, ever. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/electrical/emergency-electrician",
  },
};

const sections = [
  {
    heading: "Signs You Need an Electrician Right Now",
    paragraphs: [
      "Not every electrical issue is an emergency, but some can't wait until morning. Complete loss of power to the whole house — after you've confirmed it's not a utility outage — usually points to a problem at the main panel or service entrance, and it needs to be looked at the same day.",
      "Sparking or burning outlets, or any burning smell coming from a switch, outlet, or the panel itself, is always urgent. That smell is often the smell of insulation or wiring overheating, and it's one of the leading causes of house fires that start electrically. Don't wait on this one.",
      "A breaker that won't reset — it trips again the moment you flip it back — usually means there's an active short or overload somewhere on that circuit, not just a one-time fluke. Partial power loss, where some rooms or outlets work and others don't, often means a connection has failed somewhere in the circuit or at the panel. And an audible buzzing, humming, or crackling sound coming from the panel itself is never normal and should be treated as urgent.",
    ],
    image: { src: "/images/gallery/electrical/calgary-electrician-breaker-panel-housepower-7.jpg", alt: "Calgary electrician inspecting a home breaker panel during an emergency call" },
  },
  {
    heading: "What to Do Before Yaya Arrives",
    paragraphs: [
      "If you smell burning or see sparking, shut off the breaker for that circuit at the panel if you can safely reach it. If you're not sure which breaker it is, or the panel itself is the source of the smell or sound, shut off the main breaker instead and call right away.",
      "Don't touch switches, outlets, or panel covers that look scorched, melted, or discolored — even after the power is off. Keep kids and pets away from the affected area. If you smell gas as well as burning, or see actual flame, that's a call to the fire department first, electrician second.",
      "For a breaker that keeps tripping, it's fine to leave it off rather than keep resetting it — repeated resets on an active fault can make the problem worse. Just note which breaker it is and what was running on that circuit when it first tripped; that detail helps diagnose the issue faster once Yaya arrives.",
    ],
  },
  {
    heading: "What the Response Looks Like",
    paragraphs: [
      "Call (403) 400-3055 and describe what you're seeing — Yaya will ask a few quick questions to gauge urgency and give you a realistic idea of arrival time before heading out. On site, the first step is always to isolate the problem safely, then diagnose the actual cause rather than just resetting a breaker and hoping it holds.",
      "Once the cause is identified, you'll get a clear explanation of what's wrong and what it takes to fix it before any repair work starts. Most emergency calls — a bad breaker, a failed outlet, a loose connection — are resolved in a single visit. If the issue turns out to be bigger, like a failing panel, you'll get a straight answer about next steps instead of a rushed fix.",
    ],
  },
];

const whatIncluded = [
  "Phone diagnosis to assess urgency before dispatch",
  "On-site safety isolation of the affected circuit",
  "Full diagnosis of the root cause, not just a breaker reset",
  "Same-visit repair for most breaker, outlet, and wiring faults",
  "Clear explanation of cost before any repair work begins",
];

const faqs = [
  { q: "Is there really no extra charge for emergency or after-hours calls?", a: "Correct — no after-hours, weekend, or holiday surcharge. A 3 AM call on a Sunday costs the same as a Tuesday afternoon appointment. This has been the case since 2007." },
  { q: "What actually counts as an electrical emergency?", a: "Total power loss (after ruling out a utility outage), any burning smell or visible sparking, a breaker that trips again immediately after being reset, and buzzing or crackling from the panel. Flickering lights or a single dead outlet usually aren't emergencies and can typically wait for a scheduled visit." },
  { q: "Should I shut off my main breaker if I smell something burning?", a: "If you can't tell which breaker is affected, or the smell is coming from the panel itself, yes — shut off the main breaker and call immediately. If you can identify the specific circuit, shutting off just that breaker is usually enough." },
  { q: "How fast can you get to my home?", a: "It depends on current job load and where in Calgary you are, but Yaya will give you a real estimate on the phone before you commit — not a vague 'sometime today.'" },
  { q: "What if the problem is actually with the power line or meter, not my house?", a: "That's Enmax's responsibility, not an electrician's. Yaya will help you tell the difference — if it's on the utility side, you'll be pointed to the right number instead of being billed for a diagnosis you didn't need." },
  { q: "Do you charge a separate diagnostic or call-out fee?", a: "The phone consultation is free. Once on-site, diagnosis and repair are quoted together before work starts, so there's no surprise call-out charge tacked on separately." },
];

export default function EmergencyElectricianPage() {
  return (
    <ServiceDetailPage
      breadcrumbLabel="Electrical Services"
      h1="Emergency Electrician Calgary"
      intro={[
        "When the power goes out, something starts sparking, or a breaker won't stay reset, you need someone who actually picks up — not a voicemail. Yaya has been taking emergency electrical calls in Calgary since 2007, at any hour, on any day.",
        "Nights, weekends, and holidays cost exactly the same as a weekday afternoon call. That's not a promotion — it's how every job has been priced from the start, because emergencies don't check the calendar.",
      ]}
      heroImage={{ src: "/images/gallery/electrical/calgary-electrician-wiring-repair-multimeter-testing-8.jpg", alt: "Calgary electrician testing wiring with a multimeter during an emergency electrical repair" }}
      sections={sections}
      whatIncluded={whatIncluded}
      permitInfo="Most emergency repairs — a failed breaker, a bad outlet, a loose or damaged wiring connection — don't require a permit. If diagnosis reveals a bigger underlying issue, like a panel that needs replacing, Yaya will explain exactly what's required and why before any further work happens."
      timeline="Most emergency calls are diagnosed and resolved in a single visit, same day. You'll get a real arrival estimate on the phone, not a vague window."
      prepSteps={[
        "Shut off the affected breaker if you can safely reach it",
        "Shut off the main breaker if the source is unclear or at the panel",
        "Keep people and pets away from the affected area",
        "Don't touch scorched or melted switches or covers",
        "Note which breaker tripped and what was running on it",
        "Have your panel accessible if possible before Yaya arrives",
      ]}
      afterHoursNote="No after-hours, weekend, or holiday surcharge — ever."
      faqs={faqs}
      faqHeading="Emergency Electrician FAQ"
      relatedLinks={[
        { href: "/electrical/panel-upgrades", label: "Panel Upgrades" },
        { href: "/electrical/home-rewiring", label: "Home Rewiring" },
        { href: "/electrical", label: "All Electrical Services" },
      ]}
      serviceName="Emergency Electrician"
      serviceDescription="24/7 emergency electrical repair in Calgary — power loss, sparking outlets, burning smell, tripped breakers, panel faults. No after-hours surcharge."
      serviceUrl="https://yayageneralservice.com/electrical/emergency-electrician"
    />
  );
}
