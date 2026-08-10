import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Electrician Calgary | No Extra Fee | YAYA General Contractor Incorporated",
  description: "Emergency electrician in Calgary available nights and weekends. No after-hours surcharge. Tripped breakers, no power, burning smell — call (403) 400-3055 now.",
  alternates: { canonical: "https://www.yayageneralservice.com/emergency-electrician-calgary" },
  openGraph: {
    title: "Emergency Electrician Calgary | YAYA General Contractor Incorporated",
    description: "Emergency electrical calls in Calgary with no after-hours fee. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/emergency-electrician-calgary",
  },
};

export default function EmergencyElectricianPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="mb-4 text-sm text-gray-500"><Link href="/electrical" style={{ color: "#FFD700" }}>← Electrical Services</Link></div>
      <h1 className="text-5xl font-black text-white mb-6">Emergency Electrician Calgary</h1>
      <p className="text-gray-300 text-xl mb-8 leading-relaxed">
        Electrical emergencies don&apos;t wait for business hours. YAYA General Contractor Incorporated takes emergency calls in Calgary 24 hours a day, 7 days a week — with no after-hours surcharge.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "Tripped Breaker", desc: "Breaker keeps tripping? Could be an overloaded circuit or a faulty breaker. Yaya diagnoses and fixes it fast." },
          { title: "No Power in Home", desc: "Partial or full power loss in your Calgary home. Yaya responds quickly and identifies the source." },
          { title: "Burning Smell", desc: "Burning smell from an outlet or panel is a fire hazard. Call immediately — (403) 400-3055." },
          { title: "No After-Hours Fee", desc: "2 AM on a Sunday or 5 PM on a Friday — the price is always the same. No emergency surcharge." },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.15)" }}>
            <h3 className="text-white font-black text-lg mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <a href="tel:4034003055" className="inline-block px-10 py-4 rounded-full font-black text-black text-lg" style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
        Call Now — (403) 400-3055
      </a>
    </div>
  );
}
