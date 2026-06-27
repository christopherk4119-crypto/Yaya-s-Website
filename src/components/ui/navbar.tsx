"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/electrical", label: "Electrical" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/appliance", label: "Appliance" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderBottom: scrolled ? "1px solid rgba(255,215,0,0.2)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 min-w-[180px]">
            <Image src="/logo.png" alt="YAYA General Contractor Inc." width={52} height={52} className="rounded-lg" style={{ background: "#FFD700" }} priority />
            <div>
              <div className="font-black text-xl leading-tight" style={{ color: "#FFD700" }}>YAYA</div>
              <div className="text-xs text-gray-400 leading-tight">General Contractor Inc.</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
                style={{ color: pathname === l.href ? "#FFD700" : "#e5e7eb" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:4034003055" className="flex items-center gap-2 text-white font-bold text-sm">
              <Phone size={16} style={{ color: "#FFD700" }} />
              (403) 400-3055
            </a>
            <a
              href="tel:4034003055"
              className="px-5 py-2 rounded-full font-bold text-sm text-black transition-all duration-200 hover:scale-105"
              style={{ background: "#FFD700" }}
            >
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,215,0,0.2)" }}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-bold text-lg py-2"
                style={{ color: pathname === l.href ? "#FFD700" : "#e5e7eb" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <a href="tel:4034003055" className="flex items-center gap-2 text-white font-bold">
                <Phone size={16} style={{ color: "#FFD700" }} />
                (403) 400-3055
              </a>
              <a
                href="tel:4034003055"
                className="block text-center px-5 py-3 rounded-full font-bold text-black"
                style={{ background: "#FFD700" }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
