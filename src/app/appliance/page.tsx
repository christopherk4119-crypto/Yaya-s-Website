import ServicePageLayout from "@/components/ui/service-page-layout";

const services = [
  { title: "Oven & Stove Repair", desc: "Diagnose and repair all oven and stove issues. All brands.", bg: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { title: "Kitchen Exhaust Fan", desc: "Exhaust fan repair and replacement for kitchens and bathrooms.", bg: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80" },
  { title: "Dishwasher Repair", desc: "Fix leaks, drainage issues, and electrical faults in dishwashers.", bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80" },
  { title: "Dryer Repair", desc: "Heating element, vent cleaning, and full dryer diagnostics and repair.", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { title: "HVAC Service", desc: "Heating, ventilation and air conditioning service and repair.", bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" },
  { title: "Any Appliance", desc: "If it runs on electricity or water, Abayneh can fix it.", bg: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" },
];

export default function AppliancePage() {
  return (
    <ServicePageLayout
      heroHeadline="Appliance Repair Services Calgary"
      heroSubheadline="Certified Appliance Technician | Emergency Repairs | No After-Hours Fee"
      heroCta="Book Appliance Repair"
      serviceType="Appliance"
      services={services}
    />
  );
}

export const metadata = {
  title: "Appliance Repair Calgary | YAYA General Contractor Inc.",
  description: "Certified appliance technician in Calgary. Oven, dishwasher, dryer, HVAC & more. No after-hours fee. Call (403) 400-3055.",
};
