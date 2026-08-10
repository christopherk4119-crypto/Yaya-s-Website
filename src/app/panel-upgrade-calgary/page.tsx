import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Panel Upgrade Calgary | 100A to 200A | YAYA General Contractor Incorporated",
  description: "Electrical panel upgrade in Calgary starting from $1,500. 100A to 200A upgrades, all permits pulled, done to code. No after-hours fee. Call (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/panel-upgrade-calgary" },
  openGraph: {
    title: "Panel Upgrade Calgary | YAYA General Contractor Incorporated",
    description: "100A to 200A panel upgrades in Calgary. All permits included. No hidden fees. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/panel-upgrade-calgary",
  },
};

export default function PanelUpgradePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="mb-4 text-sm text-gray-500"><Link href="/electrical" style={{ color: "#FFD700" }}>← Electrical Services</Link></div>
      <h1 className="text-5xl font-black text-white mb-6">Panel Upgrade Calgary</h1>
      <p className="text-gray-300 text-xl mb-8 leading-relaxed">
        If your home still runs on a 100-amp panel, it may not safely handle modern appliances, EV chargers, or a finished basement. YAYA General Contractor Incorporated upgrades residential panels from 100A to 200A across all of Calgary — permits included, done to code.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "100A to 200A Upgrade", desc: "The most common panel upgrade in Calgary homes. Gives you the capacity for EV chargers, hot tubs, and basement suites." },
          { title: "All Permits Pulled", desc: "Every panel upgrade requires a City of Calgary permit. Yaya handles all permitting — you don't have to do anything." },
          { title: "Done to Code", desc: "All work meets Alberta Electrical Code. No shortcuts, no future headaches with home inspections." },
          { title: "No After-Hours Fee", desc: "Same price day or night, weekday or weekend. No surprise charges." },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.15)" }}>
            <h3 className="text-white font-black text-lg mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="p-6 rounded-2xl mb-8" style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.3)" }}>
        <p className="text-white font-bold text-lg mb-1">Typical Cost: $1,500 – $3,000</p>
        <p className="text-gray-400 text-sm">Depends on panel brand, home age, and whether a new meter base is needed. Yaya gives you a clear quote before any work begins.</p>
      </div>
      <a href="tel:4034003055" className="inline-block px-10 py-4 rounded-full font-black text-black text-lg" style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
        Call (403) 400-3055
      </a>
    </div>
  );
}
