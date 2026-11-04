import React from "react";
import Link from "next/link";
import Image from "next/image";
import KijijiMark from "@/components/ui/kijiji-mark";
import { TikTokIcon, InstagramIcon, YouTubeIcon, SOCIAL_COLORS } from "@/components/ui/social-icons";

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@yaya.electric_canada", color: SOCIAL_COLORS.tiktok, icon: <TikTokIcon size={20} /> },
  { label: "Instagram", href: "https://www.instagram.com/yayacalgary/", color: SOCIAL_COLORS.instagram, icon: <InstagramIcon size={20} /> },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCNgUCI9MK3DShuf3G_I72fg", color: SOCIAL_COLORS.youtube, icon: <YouTubeIcon size={20} /> },
  { label: "Kijiji — Appliance Repair", href: "https://www.kijiji.ca/v-appliance-repair-installation/calgary/cheaper-price-electrical-plumbing-&-appliance-repair-service/1694676987", color: SOCIAL_COLORS.kijiji, icon: <KijijiMark size={38} radius={19} /> },
  { label: "Kijiji — Electrician", href: "https://www.kijiji.ca/v-electrician/calgary/cheaper-price-plumbing-electrical-and-appliance-maintenance/1697041621", color: SOCIAL_COLORS.kijiji, icon: <KijijiMark size={38} radius={19} /> },
];

const columns = [
  {
    heading: "Electrical",
    href: "/electrical",
    links: [
      { href: "/electrical/emergency-electrician", label: "Emergency Electrician" },
      { href: "/electrical/panel-upgrades", label: "Panel Upgrades" },
      { href: "/electrical/home-rewiring", label: "Home Rewiring" },
      { href: "/electrical/renovation-electrical", label: "Renovation Electrical" },
      { href: "/electrical/commercial-electrical", label: "Commercial Electrical" },
      { href: "/basement-suite-electrical-calgary", label: "Basement Suite Electrical" },
    ],
  },
  {
    heading: "Plumbing",
    href: "/plumbing",
    links: [
      { href: "/plumbing/emergency-plumber", label: "Emergency Plumber" },
      { href: "/plumbing/frozen-pipes", label: "Frozen Pipe Repair" },
      { href: "/plumbing/drain-cleaning", label: "Drain Cleaning" },
      { href: "/plumbing/sump-pumps", label: "Sump Pumps" },
      { href: "/plumbing/renovation-plumbing", label: "Renovation Plumbing" },
    ],
  },
  {
    heading: "Appliance",
    href: "/appliance",
    links: [
      { href: "/appliance/refrigerator-repair", label: "Refrigerator Repair" },
      { href: "/appliance/washer-dryer-repair", label: "Washer & Dryer Repair" },
      { href: "/appliance/stove-oven-repair", label: "Stove & Oven Repair" },
      { href: "/appliance/dishwasher-repair", label: "Dishwasher Repair" },
      { href: "/appliance/commercial-appliance-repair", label: "Commercial Appliance Repair" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/faq", label: "FAQ" },
      { href: "/media", label: "Photo Gallery" },
      { href: "/#booking", label: "Book an Appointment" },
      { href: "/#contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,215,0,0.15)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="YAYA General Contractor Incorporated" width={44} height={44} className="rounded-lg" style={{ background: "#FFD700" }} />
              <div>
                <div className="font-black text-lg" style={{ color: "#FFD700" }}>YAYA</div>
                <div className="text-xs text-gray-500">General Contractor Incorporated</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic mb-4">&quot;All In One Hand&quot;</p>
            <p className="text-gray-500 text-sm">Calgary, AB — Serving the city since 2007</p>
          </div>

          {/* Full sitemap — every page is reachable from every page */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
                {col.href ? (
                  <Link href={col.href} className="hover:text-yellow-400 transition-colors">{col.heading}</Link>
                ) : (
                  col.heading
                )}
              </h4>
              <div className="space-y-2">
                {col.links.map((l) => (
                  <Link key={l.href} href={l.href} className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Follow Yaya</h4>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 overflow-hidden shrink-0"
                  style={{ background: s.color, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.16)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-1">
              <a href="tel:+14034003055" className="block font-bold text-yellow-400 hover:text-yellow-300">(403) 400-3055</a>
              <a href="mailto:electricianyaya@gmail.com" className="block text-gray-400 hover:text-white text-sm">electricianyaya@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,215,0,0.1)" }}>
          <p className="text-gray-600 text-sm">© 2026 YAYA General Contractor Incorporated — Calgary, AB</p>
          <p className="text-gray-600 text-sm italic">All In One Hand</p>
        </div>
      </div>
    </footer>
  );
}
