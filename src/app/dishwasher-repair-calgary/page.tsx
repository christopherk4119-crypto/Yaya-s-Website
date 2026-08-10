import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dishwasher Repair Calgary | All Brands | YAYA Electrical, Plumbing and Appliance",
  description: "Dishwasher repair in Calgary — leaks, drainage, electrical faults, all brands. Same-day available. No after-hours fee. Call (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/dishwasher-repair-calgary" },
  openGraph: {
    title: "Dishwasher Repair Calgary | YAYA Electrical, Plumbing and Appliance",
    description: "Dishwasher leaking or not draining? Repair in Calgary, all brands. No after-hours fee. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/dishwasher-repair-calgary",
  },
};

export default function DishwasherRepairPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="mb-4 text-sm text-gray-500"><Link href="/appliance" style={{ color: "#FFD700" }}>← Appliance Services</Link></div>
      <h1 className="text-5xl font-black text-white mb-6">Dishwasher Repair Calgary</h1>
      <p className="text-gray-300 text-xl mb-8 leading-relaxed">
        Dishwasher leaking, not draining, or not cleaning properly? YAYA Electrical, Plumbing and Appliance repairs all dishwasher brands in Calgary. Fast diagnosis, clear quote before any work starts, no after-hours fee.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "Leaks & Water Damage", desc: "Door seal, pump, or hose leaks diagnosed and fixed before they cause floor damage." },
          { title: "Drainage Issues", desc: "Dishwasher not draining? Blocked drain or pump fault — fixed same day in most cases." },
          { title: "Electrical Faults", desc: "Control board, door latch, or wiring issues. Yaya covers both the appliance and electrical side." },
          { title: "All Brands", desc: "Bosch, Samsung, LG, KitchenAid, Whirlpool, Maytag, GE, Frigidaire — all serviced." },
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
