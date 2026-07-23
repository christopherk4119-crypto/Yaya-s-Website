import type { Metadata } from "next";
import Gallery from "@/components/ui/gallery";

export const metadata: Metadata = {
  title: "Media | YAYA Electrical, Plumbing and Appliance Calgary",
  description: "Photo gallery of electrical, plumbing, and appliance repair work by YAYA in Calgary. Real jobs, real results.",
  alternates: { canonical: "https://www.yayageneralservice.com/media" },
  openGraph: {
    title: "Media | YAYA Electrical, Plumbing and Appliance",
    description: "Photo gallery of real electrical, plumbing, and appliance repair work in Calgary.",
    url: "https://www.yayageneralservice.com/media",
  },
};

const electricalPhotos = [
  { src: "/images/gallery/electrical/calgary-electrician-ceiling-light-installation-abayneh-1.jpg", alt: "Calgary electrician ceiling light installation" },
  { src: "/images/gallery/electrical/calgary-electrician-ceiling-light-fixture-install-2.jpg", alt: "Calgary electrician ceiling light fixture install" },
  { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-ceiling-light-before-3.jpg", alt: "Calgary electrician hexagon LED ceiling light before" },
  { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-light-assembly-4.jpg", alt: "Calgary electrician hexagon LED light assembly" },
  { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-ceiling-completed-5.jpg", alt: "Calgary electrician hexagon LED ceiling completed" },
  { src: "/images/gallery/electrical/calgary-electrician-breaker-panel-upgrade-before-6.jpg", alt: "Calgary electrician breaker panel upgrade" },
  { src: "/images/gallery/electrical/calgary-electrician-breaker-panel-housepower-7.jpg", alt: "Calgary electrician breaker panel house power" },
  { src: "/images/gallery/electrical/calgary-electrician-wiring-repair-multimeter-testing-8.jpg", alt: "Calgary electrician wiring repair multimeter testing" },
];

const plumbingPhotos = [
  { src: "/images/gallery/plumbing/calgary-plumber-commercial-pvc-pipe-valve-system-1.jpg", alt: "Calgary plumber commercial PVC pipe valve system" },
  { src: "/images/gallery/plumbing/calgary-plumber-basement-pump-pvc-pipe-system-2.jpg", alt: "Calgary plumber basement pump PVC pipe system" },
  { src: "/images/gallery/plumbing/calgary-plumber-bathtub-faucet-shower-valve-replacement-3.jpg", alt: "Calgary plumber bathtub faucet shower valve replacement" },
  { src: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg", alt: "Calgary plumber rough-in copper PVC pipe wall" },
  { src: "/images/gallery/plumbing/calgary-plumber-shower-valve-brass-fitting-rough-in-5.jpg", alt: "Calgary plumber shower valve brass fitting rough-in" },
  { src: "/images/gallery/plumbing/calgary-plumber-pool-filter-tank-pipe-system-6.jpg", alt: "Calgary plumber pool filter tank pipe system" },
  { src: "/images/gallery/plumbing/calgary-plumber-pool-filter-tank-maintenance-repair-7.jpg", alt: "Calgary plumber pool filter tank maintenance repair" },
];

const appliancePhotos = [
  { src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg", alt: "Calgary appliance repair dishwasher installation" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-door-mechanism-2.jpg", alt: "Calgary appliance repair dishwasher door mechanism" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-lawnmower-engine-repair-3.jpg", alt: "Calgary appliance repair lawnmower engine repair" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-dryer-igniter-switch-component-4.jpg", alt: "Calgary appliance repair dryer igniter switch" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-dryer-switch-wiring-5.jpg", alt: "Calgary appliance repair dryer switch wiring" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-appliance-wiring-switch-6.jpg", alt: "Calgary appliance repair wiring switch" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-hvac-sensor-replacement-7.jpg", alt: "Calgary appliance repair HVAC sensor replacement" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg", alt: "Calgary appliance repair stove heating element" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-oven-control-board-9.jpg", alt: "Calgary appliance repair oven control board" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-hvac-furnace-control-board-10.jpg", alt: "Calgary appliance repair HVAC furnace control board" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-furnace-control-board-replacement-11.jpg", alt: "Calgary appliance repair furnace control board replacement" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-furnace-hvac-thermostat-summit-12.jpg", alt: "Calgary appliance repair furnace HVAC thermostat" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Calgary appliance repair commercial oven US Range" },
];

export default function MediaPage() {
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
            📸 Real Work, Real Results
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Our <span style={{ color: "#FFD700" }}>Media</span>
          </h1>
          <p className="text-gray-400 text-xl">Photos from real jobs across Calgary — electrical, plumbing, and appliance repair.</p>
        </div>
      </section>

      {/* ELECTRICAL */}
      <section className="section" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-8">⚡ Electrical</h2>
          <Gallery photos={electricalPhotos} columns={4} />
        </div>
      </section>

      {/* PLUMBING */}
      <section className="section" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-8">🔧 Plumbing</h2>
          <Gallery photos={plumbingPhotos} columns={4} />
        </div>
      </section>

      {/* APPLIANCE */}
      <section className="section" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-8">🛠️ Appliance</h2>
          <Gallery photos={appliancePhotos} columns={4} />
        </div>
      </section>
    </>
  );
}
