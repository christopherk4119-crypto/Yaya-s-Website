import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";

export const metadata: Metadata = {
  title: "Plumbing Services Calgary",
  description:
    "Licensed plumber in Calgary. Water lines, drain lines, faucet replacement, toilet installation & any plumbing work. Same price day or night. Fast response. Call (403) 400-3055.",
  keywords: ["plumber Calgary", "water line installation Calgary", "drain line Calgary", "faucet replacement Calgary", "toilet installation Calgary", "emergency plumber Calgary"],
  alternates: { canonical: "https://yayacontractor.ca/plumbing" },
  openGraph: {
    title: "Plumbing Services Calgary | YAYA General Contractor Inc.",
    description: "Licensed plumber. Water lines, drains, faucets, toilets & more. Same price day or night. Call (403) 400-3055.",
    url: "https://yayacontractor.ca/plumbing",
  },
};

const services = [
  { title: "Water Line Installation", desc: "New water line installation for residential and commercial properties.", bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=95", alt: "Water line installation Calgary plumber" },
  { title: "Drain Line Installation", desc: "Complete drain line installation done properly the first time.", bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=95", alt: "Drain line installation Calgary" },
  { title: "Faucet Replacement", desc: "Quick, clean faucet replacement for any kitchen or bathroom.", bg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=95", alt: "Faucet replacement Calgary bathroom kitchen" },
  { title: "Toilet Replacement", desc: "Professional toilet removal and installation. No mess left behind.", bg: "https://images.unsplash.com/photo-1562184552-997c461abbe6?w=1920&q=95", alt: "Toilet replacement installation Calgary" },
  { title: "Any Plumbing Work", desc: "Whatever your plumbing issue, Yaya handles it.", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=95", alt: "General plumbing services Calgary contractor" },
];

const galleryPhotos = [
  {
    src: "/images/gallery/plumbing/calgary-plumber-bathtub-faucet-shower-valve-replacement-3.jpg",
    alt: "Certified Calgary plumber specialist performing bathtub faucet and shower valve replacement",
  },
  {
    src: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg",
    alt: "Certified Calgary plumber specialist performing rough-in copper and PVC pipe installation",
  },
  {
    src: "/images/gallery/plumbing/calgary-plumber-pool-filter-tank-pipe-system-6.jpg",
    alt: "Certified Calgary plumber specialist installing pool filter tank and pipe system",
  },
];

export default function PlumbingPage() {
  return (
    <ServicePageLayout
      heroHeadline="Plumbing Services Calgary"
      heroSubheadline="Licensed Plumber | Same Price Day or Night | Fast Response"
      heroCta="Book Plumbing Service"
      serviceType="Plumbing"
      services={services}
      galleryPhotos={galleryPhotos}
    />
  );
}
