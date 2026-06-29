import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";

export const metadata: Metadata = {
  title: "Appliance Repair Calgary",
  description:
    "Experienced appliance technician in Calgary. Oven, stove, dishwasher, dryer, HVAC & exhaust fan repair. All brands. No after-hours fee. Emergency repairs available. Call (403) 400-3055.",
  keywords: ["appliance repair Calgary", "oven repair Calgary", "dishwasher repair Calgary", "dryer repair Calgary", "HVAC service Calgary", "exhaust fan repair Calgary"],
  alternates: { canonical: "https://yayacontractor.ca/appliance" },
  openGraph: {
    title: "Appliance Repair Calgary | YAYA General Contractor Inc.",
    description: "Experienced appliance tech. Oven, dishwasher, dryer, HVAC & more. No after-hours fee. Call (403) 400-3055.",
    url: "https://yayacontractor.ca/appliance",
  },
};

const services = [
  { title: "Oven & Stove Repair", desc: "Diagnose and repair all oven and stove issues. All brands.", bg: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=95", alt: "Oven and stove repair Calgary appliance technician" },
  { title: "Kitchen Exhaust Fan", desc: "Exhaust fan repair and replacement for kitchens and bathrooms.", bg: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1920&q=95", alt: "Kitchen exhaust fan repair Calgary" },
  { title: "Dishwasher Repair", desc: "Fix leaks, drainage issues, and electrical faults in dishwashers.", bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=95", alt: "Dishwasher repair service Calgary" },
  { title: "Dryer Repair", desc: "Heating element, vent cleaning, and full dryer diagnostics and repair.", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=95", alt: "Dryer repair Calgary appliance service" },
  { title: "HVAC Service", desc: "Heating, ventilation and air conditioning service and repair.", bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=95", alt: "HVAC service and repair Calgary" },
  { title: "Any Appliance", desc: "If it runs on electricity or water, Yaya can fix it.", bg: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=95", alt: "General appliance repair Calgary contractor" },
];

const galleryPhotos = [
  {
    src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg",
    alt: "Certified Calgary appliance repair specialist performing dishwasher installation",
  },
  {
    src: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg",
    alt: "Certified Calgary appliance repair specialist replacing stove heating element burner",
  },
  {
    src: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg",
    alt: "Certified Calgary appliance repair specialist servicing commercial US Range oven",
  },
];

export default function AppliancePage() {
  return (
    <ServicePageLayout
      heroHeadline="Appliance Repair Services Calgary"
      heroSubheadline="Experienced Appliance Technician | Emergency Repairs | No After-Hours Fee"
      heroCta="Book Appliance Repair"
      serviceType="Appliance"
      services={services}
      galleryPhotos={galleryPhotos}
    />
  );
}
