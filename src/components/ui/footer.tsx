import React from "react";
import Link from "next/link";
import Image from "next/image";

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@yaya.electric_canada", icon: "🎵" },
  { label: "Facebook", href: "https://www.facebook.com/p/YAYA-General-Contracting-100067728921076", icon: "📘" },
  { label: "Instagram", href: "https://www.instagram.com/yayacalgary/", icon: "📷" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,215,0,0.15)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="YAYA General Contractor Inc." width={44} height={44} className="rounded-lg" style={{ background: "#FFD700" }} />
              <div>
                <div className="font-black text-lg" style={{ color: "#FFD700" }}>YAYA</div>
                <div className="text-xs text-gray-500">General Contractor Inc.</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic mb-4">&quot;All In One Hand&quot;</p>
            <p className="text-gray-500 text-sm">Calgary, AB — Serving the city since 2007</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/electrical", label: "Electrical Services" },
                { href: "/plumbing", label: "Plumbing Services" },
                { href: "/appliance", label: "Appliance Services" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

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
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
                  style={{ background: "#1a1a1a", border: "1px solid rgba(255,215,0,0.2)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-1">
              <a href="tel:4034003055" className="block font-bold text-yellow-400 hover:text-yellow-300">(403) 400-3055</a>
              <a href="mailto:electricianyaya@gmail.com" className="block text-gray-400 hover:text-white text-sm">electricianyaya@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,215,0,0.1)" }}>
          <p className="text-gray-600 text-sm">© 2026 YAYA General Contractor Inc. — Calgary, AB</p>
          <p className="text-gray-600 text-sm italic">All In One Hand</p>
        </div>
      </div>
    </footer>
  );
}
