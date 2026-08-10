import type { Metadata } from "next";
import Gallery from "@/components/ui/gallery";

export const metadata: Metadata = {
  title: "Media | Our Work in Calgary | YAYA General Contractor Inc.",
  description: "Photos of electrical, plumbing, and appliance repair work done by YAYA General Contractor Inc. in Calgary. Real jobs, real results.",
  alternates: { canonical: "https://www.yayageneralservice.com/media" },
  openGraph: {
    title: "Media | YAYA General Contractor Inc.",
    description: "See our electrical, plumbing, and appliance repair work across Calgary.",
    url: "https://www.yayageneralservice.com/media",
  },
};

const electricalPhotos = [
  { src: "/images/gallery/electrical/calgary-electrician-ceiling-light-installation-abayneh-1.jpg", alt: "Experienced Calgary electrician Yaya installing ceiling light fixture" },
  { src: "/images/gallery/electrical/calgary-electrician-ceiling-light-fixture-install-2.jpg", alt: "Calgary electrician Yaya smiling while completing ceiling light installation" },
  { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-ceiling-light-before-3.jpg", alt: "Before photo of hexagon LED ceiling light installation in Calgary home" },
  { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-light-assembly-4.jpg", alt: "Hexagon LED ceiling light assembly by Calgary electrician" },
  { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-ceiling-completed-5.jpg", alt: "Completed hexagon LED ceiling light installation by Calgary electrician" },
  { src: "/images/gallery/electrical/calgary-electrician-breaker-panel-upgrade-before-6.jpg", alt: "Electrical breaker panel upgrade in Calgary home" },
  { src: "/images/gallery/electrical/calgary-electrician-breaker-panel-housepower-7.jpg", alt: "Residential breaker panel serviced by Calgary electrician" },
  { src: "/images/gallery/electrical/calgary-electrician-wiring-repair-multimeter-testing-8.jpg", alt: "Calgary electrician testing wiring with multimeter during repair" },
];

const plumbingPhotos = [
  { src: "/images/gallery/plumbing/calgary-plumber-commercial-pvc-pipe-valve-system-1.jpg", alt: "Commercial PVC pipe and valve system installed by Calgary plumber" },
  { src: "/images/gallery/plumbing/calgary-plumber-basement-pump-pvc-pipe-system-2.jpg", alt: "Basement pump and PVC pipe system by Calgary plumber" },
  { src: "/images/gallery/plumbing/calgary-plumber-bathtub-faucet-shower-valve-replacement-3.jpg", alt: "Calgary plumber replacing bathtub faucet and shower valve" },
  { src: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg", alt: "Rough-in copper and PVC pipe installation by Calgary plumber" },
  { src: "/images/gallery/plumbing/calgary-plumber-shower-valve-brass-fitting-rough-in-5.jpg", alt: "Calgary plumber installing brass shower valve rough-in fitting" },
  { src: "/images/gallery/plumbing/calgary-plumber-pool-filter-tank-pipe-system-6.jpg", alt: "Pool filter tank and pipe system installed by Calgary plumber" },
  { src: "/images/gallery/plumbing/calgary-plumber-pool-filter-tank-maintenance-repair-7.jpg", alt: "Pool filter tank maintenance and repair by Calgary plumber" },
];

const appliancePhotos = [
  { src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg", alt: "Dishwasher installation by Calgary appliance repair technician" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-door-mechanism-2.jpg", alt: "Dishwasher door mechanism repair in Calgary" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-lawnmower-engine-repair-3.jpg", alt: "Lawnmower engine repair by Calgary appliance technician" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-dryer-igniter-switch-component-4.jpg", alt: "Dryer igniter switch component replacement in Calgary" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-dryer-switch-wiring-5.jpg", alt: "Dryer switch and wiring repair by Calgary appliance specialist" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-appliance-wiring-switch-6.jpg", alt: "Appliance wiring and switch repair in Calgary home" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-hvac-sensor-replacement-7.jpg", alt: "HVAC sensor replacement by Calgary appliance repair technician" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg", alt: "Stove heating element replacement by Calgary appliance repair specialist" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-oven-control-board-9.jpg", alt: "Oven control board replacement by Calgary appliance technician" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-hvac-furnace-control-board-10.jpg", alt: "HVAC furnace control board replacement in Calgary" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-furnace-control-board-replacement-11.jpg", alt: "Furnace control board replacement by Calgary appliance technician" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-furnace-hvac-thermostat-summit-12.jpg", alt: "Furnace HVAC thermostat replacement by Calgary appliance specialist" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Commercial US Range oven serviced by Calgary appliance repair specialist" },
];

export default function MediaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-5xl font-black text-white mb-4">Our Work</h1>
      <p className="text-gray-300 text-xl mb-16 leading-relaxed max-w-2xl">
        Real jobs completed across Calgary by YAYA General Contractor Inc. Electrical, plumbing, and appliance repair — all done right.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-black text-white mb-6" style={{ borderLeft: "4px solid #FFD700", paddingLeft: "16px" }}>Electrical</h2>
        <Gallery photos={electricalPhotos} columns={4} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-black text-white mb-6" style={{ borderLeft: "4px solid #FFD700", paddingLeft: "16px" }}>Plumbing</h2>
        <Gallery photos={plumbingPhotos} columns={4} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-black text-white mb-6" style={{ borderLeft: "4px solid #FFD700", paddingLeft: "16px" }}>Appliance Repair</h2>
        <Gallery photos={appliancePhotos} columns={4} />
      </section>

      <div className="text-center mt-8">
        <a href="tel:4034003055" className="inline-block px-10 py-4 rounded-full font-black text-black text-lg" style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
          Call (403) 400-3055
        </a>
      </div>
    </div>
  );
}
