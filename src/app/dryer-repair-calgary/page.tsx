import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dryer Repair Calgary | All Brands | YAYA Electrical, Plumbing and Appliance",
  description: "Dryer repair in Calgary — heating element, vent cleaning, motor, all brands. Same-day available. No after-hours fee. Call (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/dryer-repair-calgary" },
  openGraph: {
    title: "Dryer Repair Calgary | YAYA Electrical, Plumbing and Appliance",
    description: "Dryer not heating? Dryer repair in Calgary, all brands. No after-hours fee. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/dryer-repair-calgary",
  },
};

export default function DryerRepairPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="mb-4 text-sm text-gray-500"><Link href="/appliance" style={{ color: "#FFD700" }}>← Appliance Services</Link></div>
      <h1 className="text-5xl font-black text-white mb-6">Dryer Repair Calgary</h1>
      <p className="text-gray-300 text-xl mb-8 leading-relaxed">
        Dryer not heating, taking too long, or making a noise? YAYA Electrical, Plumbing and Appliance repairs all dryer brands in Calgary — Samsung, LG, Whirlpool, Maytag, GE, and more. Same-day available, no after-hours fee.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "Heating Element", desc: "The most common dryer repair. Yaya diagnoses and replaces heating elements on all brands quickly." },
          { title: "Vent Cleaning", desc: "A clogged dryer vent is a fire hazard and makes your dryer work harder. Yaya cleans it properly." },
          { title: "Motor & Belt", desc: "Dryer not spinning? Motor or drum belt replacement done same day in most cases." },
          { title: "All Brands", desc: "Samsung, LG, Whirlpool, Maytag, Bosch, GE, KitchenAid, Frigidaire and more — all serviced." },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.15)" }}>
            <h3 className="text-white font-black text-lg mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <a href="tel:4034003055" className="inline-block px-10 py-4 rounded-full font-black text-black text-lg" style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
        Call (403) 400-3055
      </a>
    </div>
  );
}
