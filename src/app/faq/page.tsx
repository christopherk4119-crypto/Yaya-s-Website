import type { Metadata } from "next";
import FAQSection from "@/components/ui/faq-section";

export const metadata: Metadata = {
  title: "FAQ | Electrician, Plumber & Appliance Repair Calgary",
  description:
    "Answers to common questions about electrical, plumbing, and appliance repair in Calgary. Pricing, availability, permits, and more. YAYA General Contractor Inc. — (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/faq" },
  openGraph: {
    title: "FAQ | YAYA General Contractor Inc. Calgary",
    description: "Common questions about electrical, plumbing, and appliance repair in Calgary. No after-hours fee. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/faq",
  },
};

const faqs = [
  // General
  {
    q: "Do you charge extra for after-hours or emergency calls in Calgary?",
    a: "No. YAYA General Contractor does not charge after-hours or weekend surcharges for any service — electrical, plumbing, or appliance. Whether you call at 2 AM on a Sunday or 5 PM on a weekday, the price is always the same.",
  },
  {
    q: "What areas of Calgary do you serve?",
    a: "All of Calgary is covered — NW, NE, SW, SE, and surrounding communities. There is no travel surcharge for any area within the city.",
  },
  {
    q: "How do I book an appointment with Yaya?",
    a: "You can book directly on this website using the booking form — pick your date, time, and service and Yaya will call to confirm. You can also call or text directly at (403) 400-3055.",
  },
  {
    q: "Does Yaya handle electrical, plumbing, AND appliances?",
    a: "Yes — that's what makes YAYA unique. One person handles all three trades. You don't need to call three different contractors. One call, one expert, zero runaround.",
  },
  {
    q: "How long has Yaya been working in Calgary?",
    a: "Yaya has been serving Calgary since 2007 — over 17 years of hands-on experience in electrical, plumbing, and appliance repair across residential and commercial properties.",
  },
  // Electrical
  {
    q: "How much does a panel upgrade cost in Calgary?",
    a: "A standard 100A to 200A panel upgrade in Calgary typically ranges from $1,500 to $3,000 depending on the age of your home and whether permits are required. Yaya pulls all permits and completes the work to code — no hidden fees.",
  },
  {
    q: "Do I need a permit for electrical work in Calgary?",
    a: "Yes — any significant electrical work in Calgary requires a permit from the City of Calgary. This includes panel upgrades, new circuits, and basement wiring. Yaya handles all permitting so you don't have to worry about it.",
  },
  {
    q: "Can you install EV chargers at my Calgary home?",
    a: "Yes. Yaya installs Level 2 EV chargers (240V) for all major vehicle brands. This typically requires a new dedicated circuit and may involve a panel upgrade if your current panel is at capacity.",
  },
  // Plumbing
  {
    q: "How much does a plumber cost in Calgary?",
    a: "A simple faucet replacement typically starts around $150–$300 including parts. Water line or drain line installations are priced per project. Yaya provides a clear quote before starting — no surprise charges.",
  },
  {
    q: "Do I need a permit for plumbing work in Calgary?",
    a: "Simple fixture replacements generally don't require a permit. However, new water lines, drain relocations, or rough-in work may. Yaya will advise you before any job begins.",
  },
  {
    q: "Can you fix a burst pipe or plumbing emergency same day in Calgary?",
    a: "Yes. Call (403) 400-3055 directly for emergency plumbing — burst pipes, flooding, or backed-up drains. Yaya prioritizes emergencies and there is no extra charge for the after-hours call.",
  },
  // Appliance
  {
    q: "How much does appliance repair cost in Calgary?",
    a: "Minor repairs like a heating element replacement typically range from $100–$250. Larger appliances like HVAC units are priced per job. Yaya gives you a clear quote before any work begins.",
  },
  {
    q: "Is it worth repairing an appliance or should I replace it?",
    a: "If the repair cost is less than 50% of the replacement cost and the appliance is under 10 years old, repair is usually the better value. Yaya will give you an honest assessment and never recommend unnecessary work.",
  },
  {
    q: "Do you repair all appliance brands in Calgary?",
    a: "Yes. Yaya services all major brands including Samsung, LG, Whirlpool, Maytag, Bosch, GE, KitchenAid, Frigidaire, and more. Commercial appliances are also serviced.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ background: "#080808", minHeight: "40vh" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,215,0,0.08) 0%, transparent 70%)",
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.25)", color: "#FFD700" }}>
            ⚡ Quick Answers
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Frequently Asked <span style={{ color: "#FFD700" }}>Questions</span>
          </h1>
          <p className="text-gray-400 text-xl">Everything Calgary homeowners ask about electrical, plumbing & appliance repair.</p>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="All Questions Answered" />

      {/* CTA */}
      <section className="section" style={{ background: "#080808" }}>
        <div className="text-center max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-4">Still have a question?</h2>
          <p className="text-gray-400 mb-8">Call or text Yaya directly — he picks up.</p>
          <a href="tel:4034003055" className="btn-gold inline-block px-10 py-4 text-lg font-black">
            Call (403) 400-3055
          </a>
        </div>
      </section>
    </>
  );
}
