import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";

export const metadata: Metadata = {
  title: "Appliance Repair Calgary | Oven, Dishwasher, Dryer & HVAC",
  description:
    "Experienced appliance technician in Calgary. Oven, stove, dishwasher, dryer, HVAC & exhaust fan repair. All brands. No after-hours fee. Emergency repairs available. Call (403) 400-3055.",
  keywords: ["appliance repair Calgary", "oven repair Calgary", "dishwasher repair Calgary", "dryer repair Calgary", "HVAC service Calgary", "exhaust fan repair Calgary", "emergency appliance repair Calgary"],
  alternates: { canonical: "https://yayacontractor.ca/appliance" },
  openGraph: {
    title: "Appliance Repair Calgary | YAYA General Contractor Inc.",
    description: "Experienced appliance tech. Oven, dishwasher, dryer, HVAC & more. No after-hours fee. Call (403) 400-3055.",
    url: "https://yayacontractor.ca/appliance",
  },
};

const services = [
  { title: "Oven & Stove Repair", desc: "", bullets: ["★ All Brands", "★ Gas & Electric", "★ Same Day Available", "★ Fast Diagnostics"], bg: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=95", alt: "Oven and stove repair Calgary appliance technician" },
  { title: "Kitchen Exhaust Fan", desc: "", bullets: ["★ Repair & Replacement", "★ Kitchen & Bathroom", "★ All Fan Types", "★ Quick Install"], bg: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1920&q=95", alt: "Kitchen exhaust fan repair Calgary" },
  { title: "Dishwasher Repair", desc: "", bullets: ["★ Leaks & Drainage", "★ Electrical Faults", "★ All Brands", "★ Fast Fix"], bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=95", alt: "Dishwasher repair service Calgary" },
  { title: "Dryer Repair", desc: "", bullets: ["★ Heating Element", "★ Vent Cleaning", "★ Full Diagnostics", "★ All Brands"], bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=95", alt: "Dryer repair Calgary appliance service" },
  { title: "HVAC Service", desc: "", bullets: ["★ Furnace Repair", "★ Control Board Replacement", "★ Ventilation Service", "★ Emergency Calls"], bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=95", alt: "HVAC service and repair Calgary" },
  { title: "Any Appliance", desc: "", bullets: ["★ All Brands Welcome", "★ No After-Hours Fee", "★ Emergency Service", "★ Same Price Always"], bg: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=95", alt: "General appliance repair Calgary contractor" },
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
    a: "No. YAYA General Contractor does not charge after-hours or weekend surcharges for any service — electrical, plumbing, or appliance. The price is always the same.",
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
      <FAQSection faqs={faqs} heading="Appliance Repair FAQ" />
    </>
  );
}
