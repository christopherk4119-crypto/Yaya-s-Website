import ServicePageLayout from "@/components/ui/service-page-layout";

const services = [
  { title: "Water Line Installation", desc: "New water line installation for residential and commercial properties.", bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80" },
  { title: "Drain Line Installation", desc: "Complete drain line installation done properly the first time.", bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" },
  { title: "Faucet Replacement", desc: "Quick, clean faucet replacement for any kitchen or bathroom.", bg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80" },
  { title: "Toilet Replacement", desc: "Professional toilet removal and installation. No mess left behind.", bg: "https://images.unsplash.com/photo-1562184552-997c461abbe6?w=800&q=80" },
  { title: "Any Plumbing Work", desc: "Whatever your plumbing issue, Abayneh handles it.", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
];

export default function PlumbingPage() {
  return (
    <ServicePageLayout
      heroHeadline="Plumbing Services Calgary"
      heroSubheadline="Licensed Plumber | Same Price Day or Night | Fast Response"
      heroCta="Book Plumbing Service"
      serviceType="Plumbing"
      services={services}
    />
  );
}

export const metadata = {
  title: "Plumbing Services Calgary | YAYA General Contractor Inc.",
  description: "Licensed plumber in Calgary. Water lines, drain lines, faucets, toilets & more. No after-hours fee. Call (403) 400-3055.",
};
