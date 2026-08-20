import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";
import TradeOverview from "@/components/ui/trade-overview";

export const metadata: Metadata = {
  title: "Appliance Repair Calgary | Oven, Dishwasher, Dryer & HVAC",
  description:
    "Experienced appliance technician in Calgary. Oven, stove, dishwasher, dryer, HVAC & exhaust fan repair. All brands. No after-hours fee. Emergency repairs available. Call (403) 400-3055.",
  keywords: ["appliance repair Calgary", "oven repair Calgary", "dishwasher repair Calgary", "dryer repair Calgary", "HVAC service Calgary", "exhaust fan repair Calgary", "emergency appliance repair Calgary"],
  alternates: { canonical: "https://yayageneralservice.com/appliance" },
  openGraph: {
    title: "Appliance Repair Calgary | YAYA General Contractor Incorporated",
    description: "Experienced appliance tech. Oven, dishwasher, dryer, HVAC & more. No after-hours fee. Call (403) 400-3055.",
    url: "https://yayageneralservice.com/appliance",
  },
};

const services = [
  { title: "Refrigerator Repair", desc: "", bullets: ["★ Not Cooling", "★ Icing Up or Leaking", "★ Failed Ice Maker", "★ Same-Day Available"], bg: "/images/gallery/appliance/calgary-appliance-repair-appliance-wiring-switch-6.jpg", alt: "Refrigerator repair in Calgary", href: "/appliance/refrigerator-repair" },
  { title: "Washer & Dryer Repair", desc: "", bullets: ["★ Won't Drain or Spin", "★ Won't Heat", "★ Vent Inspection", "★ Stacked & Side-by-Side"], bg: "/images/gallery/appliance/calgary-appliance-repair-dryer-switch-wiring-5.jpg", alt: "Washer and dryer repair in Calgary", href: "/appliance/washer-dryer-repair" },
  { title: "Stove & Oven Repair", desc: "", bullets: ["★ Elements Won't Heat", "★ Wrong Temperature", "★ Control Board Faults", "★ Range Hood Included"], bg: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg", alt: "Stove and oven repair in Calgary", href: "/appliance/stove-oven-repair" },
  { title: "Dishwasher Repair", desc: "", bullets: ["★ Won't Drain or Fill", "★ Leaking", "★ Dishes Not Clean", "★ Installation Available"], bg: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg", alt: "Dishwasher repair and installation in Calgary", href: "/appliance/dishwasher-repair" },
  { title: "Commercial Appliance Repair", desc: "", bullets: ["★ Restaurant Kitchen Equipment", "★ Commercial Ovens & Ranges", "★ Commercial Refrigeration", "★ 24/7 Response"], bg: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Commercial appliance repair in Calgary", href: "/appliance/commercial-appliance-repair" },
  { title: "HVAC Service", desc: "", bullets: ["★ Furnace Repair", "★ Control Board Replacement", "★ Ventilation Service", "★ Emergency Calls"], bg: "/images/gallery/appliance/calgary-appliance-repair-hvac-furnace-control-board-10.jpg", alt: "HVAC and furnace service in Calgary" },
];

const galleryPhotos = [
  { src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg", alt: "Calgary appliance repair specialist performing dishwasher installation" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg", alt: "Calgary appliance repair specialist replacing stove heating element burner" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Calgary appliance repair specialist servicing commercial US Range oven" },
];

const faqs = [
  {
    q: "How much does appliance repair cost in Calgary?",
    a: "Appliance repair pricing in Calgary depends on the appliance and the fault. Diagnostics and minor repairs like a heating element replacement typically range from $100–$250. Larger appliances like HVAC units are priced per job. Yaya gives you a clear quote before any work begins — no surprise charges.",
  },
  {
    q: "Is it worth repairing an appliance or should I replace it?",
    a: "As a general rule, if the repair cost is less than 50% of the replacement cost and the appliance is under 10 years old, repair is usually the better value. Yaya will give you an honest assessment and never recommend unnecessary work.",
  },
  {
    q: "Do you repair all appliance brands in Calgary?",
    a: "Yes. Yaya services all major appliance brands including Samsung, LG, Whirlpool, Maytag, Bosch, GE, KitchenAid, Frigidaire, and more. Commercial appliances are also serviced.",
  },
  {
    q: "Can you repair my oven or stove same day in Calgary?",
    a: "In most cases, yes. Yaya offers same-day or next-day appointments for oven, stove, and kitchen appliance repairs. For urgent issues, call (403) 400-3055 directly — no after-hours surcharge applies.",
  },
  {
    q: "Do you charge extra for appliance repair on evenings or weekends in Calgary?",
    a: "No. YAYA General Contractor Incorporated does not charge after-hours or weekend surcharges for any service — electrical, plumbing, or appliance. The price is always the same.",
  },
  {
    q: "Can you service HVAC systems in Calgary homes?",
    a: "Yes. Yaya provides HVAC diagnostics, furnace control board replacement, and general heating and ventilation repair. For full HVAC installation or duct work, contact us to discuss the scope of your project.",
  },
];

export default function AppliancePage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Appliance Repair Services Calgary"
        heroSubheadline="Experienced Appliance Technician | Emergency Repairs | No After-Hours Fee"
        heroCta="Book Appliance Repair"
        serviceType="Appliance"
        services={services}
        galleryPhotos={galleryPhotos}
      />
      <TradeOverview
        heading="Appliance and HVAC Repair, All Brands"
        paragraphs={[
          "From a dishwasher that won't drain to a furnace that's throwing an error code, Yaya diagnoses the actual fault rather than guessing at a part swap — furnace control board replacement, range hood installation, oven and stove repair, and dryer diagnostics are all regular calls, on residential and commercial equipment alike.",
          "Commercial kitchen equipment — restaurant ranges, ovens, and other equipment tenants and business owners rely on — is serviced the same way, with the same 24/7 availability, because a broken piece of kitchen equipment on a Friday night is a business problem, not something that can wait until Monday.",
        ]}
      />
      <FAQSection faqs={faqs} heading="Appliance Repair FAQ" />
    </>
  );
}
