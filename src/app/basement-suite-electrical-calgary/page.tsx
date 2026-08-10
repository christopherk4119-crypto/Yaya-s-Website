import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Basement Suite Electrical Calgary | Legal Suite Wiring | YAYA Electrical, Plumbing and Appliance",
  description: "Basement suite electrical wiring in Calgary. Legal suite rough-in, panel upgrades, permits pulled. Done to code. Call YAYA Electrical, Plumbing and Appliance (403) 400-3055.",
  alternates: { canonical: "https://www.yayageneralservice.com/basement-suite-electrical-calgary" },
  openGraph: {
    title: "Basement Suite Electrical Calgary | YAYA Electrical, Plumbing and Appliance",
    description: "Legal basement suite electrical wiring in Calgary. Permits included, done to code. Call (403) 400-3055.",
    url: "https://www.yayageneralservice.com/basement-suite-electrical-calgary",
  },
};

export default function BasementSuiteElectricalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="mb-4 text-sm text-gray-500"><Link href="/electrical" style={{ color: "#FFD700" }}>← Electrical Services</Link></div>
      <h1 className="text-5xl font-black text-white mb-6">Basement Suite Electrical Calgary</h1>
      <p className="text-gray-300 text-xl mb-8 leading-relaxed">
        Building a legal basement suite in Calgary requires electrical work done to code with proper permits. YAYA Electrical, Plumbing and Appliance handles the full electrical rough-in, panel upgrades, and suite separation — everything the City of Calgary requires for a legal secondary suite.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          { title: "Full Rough-In Wiring", desc: "All outlets, switches, lighting, and circuits for your basement suite done to Alberta Electrical Code." },
          { title: "Panel Upgrade", desc: "Most basement suite projects require upgrading to a 200A panel to safely handle two units." },
          { title: "Permits Pulled", desc: "City of Calgary permits required for all suite electrical work. Yaya handles all permitting." },
          { title: "Suite Separation", desc: "Separate electrical meters or sub-panels for landlord and tenant — Yaya sets it up correctly." },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.15)" }}>
            <h3 className="text-white font-black text-lg mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="p-6 rounded-2xl mb-8" style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.3)" }}>
        <p className="text-white font-bold text-lg mb-1">Serving All of Calgary</p>
        <p className="text-gray-400 text-sm">NW, NE, SW, SE Calgary and surrounding communities. No travel surcharge within city limits.</p>
      </div>
      <a href="tel:4034003055" className="inline-block px-10 py-4 rounded-full font-black text-black text-lg" style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
        Call (403) 400-3055
      </a>
    </div>
  );
}
