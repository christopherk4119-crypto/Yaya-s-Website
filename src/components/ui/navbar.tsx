"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Home, Wrench, CalendarCheck, ChevronDown } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/electrical",
    label: "Electrical",
    children: [
      { href: "/electrical/emergency-electrician", label: "Emergency Electrician" },
      { href: "/electrical/panel-upgrades", label: "Panel Upgrades" },
      { href: "/electrical/home-rewiring", label: "Home Rewiring" },
      { href: "/electrical/renovation-electrical", label: "Renovation Electrical" },
      { href: "/electrical/commercial-electrical", label: "Commercial Electrical" },
      { href: "/basement-suite-electrical-calgary", label: "Basement Suite Electrical" },
    ],
  },
  {
    href: "/plumbing",
    label: "Plumbing",
    children: [
      { href: "/plumbing/emergency-plumber", label: "Emergency Plumber" },
      { href: "/plumbing/frozen-pipes", label: "Frozen Pipe Repair" },
      { href: "/plumbing/drain-cleaning", label: "Drain Cleaning" },
      { href: "/plumbing/sump-pumps", label: "Sump Pumps" },
      { href: "/plumbing/renovation-plumbing", label: "Renovation Plumbing" },
    ],
  },
  {
    href: "/appliance",
    label: "Appliance",
    children: [
      { href: "/appliance/refrigerator-repair", label: "Refrigerator Repair" },
      { href: "/appliance/washer-dryer-repair", label: "Washer & Dryer Repair" },
      { href: "/appliance/stove-oven-repair", label: "Stove & Oven Repair" },
      { href: "/appliance/dishwasher-repair", label: "Dishwasher Repair" },
      { href: "/appliance/commercial-appliance-repair", label: "Commercial Appliance Repair" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/media", label: "Media" },
];

// Booking lives on the homepage (#booking), so it is always linked absolutely —
// the service detail pages have no booking section of their own.
const bookingLink = { href: "/#booking", label: "Book an Appointment" };

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
            <Image src="/logo.png" alt="YAYA General Contractor Incorporated" width={52} height={52} className="rounded-lg" style={{ background: "#FFD700" }} priority />
            <div>
              <div className="font-black text-xl leading-tight" style={{ color: "#FFD700" }}>YAYA</div>
              <div className="text-xs text-gray-400 leading-tight">General Contractor Incorporated</div>
            </div>
          </Link>

          {/* Desktop Nav — trade items open a dropdown of their sub-pages on
              hover or keyboard focus; the parent itself stays a real link. */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {navLinks.map((l) => (
              <div key={l.href} className={l.children ? "nav-item relative" : undefined}>
                <Link
                  href={l.href}
                  className="flex items-center gap-1 font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
                  style={{ color: pathname.startsWith(l.href) && l.href !== "/" || pathname === l.href ? "#FFD700" : "#e5e7eb" }}
                >
                  {l.label}
                  {l.children && <ChevronDown size={12} className="nav-chevron hidden xl:block" />}
                </Link>

                {l.children && (
                  <div
                    className="nav-dropdown absolute left-0 top-full pt-3"
                    style={{ minWidth: 248 }}
                  >
                    <div
                      className="rounded-xl overflow-hidden py-2"
                      style={{ background: "#111", border: "1px solid rgba(255,215,0,0.2)", boxShadow: "0 16px 40px rgba(0,0,0,0.5)" }}
                    >
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-white/5"
                          style={{ color: pathname === c.href ? "#FFD700" : "#d1d5db" }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+14034003055" className="hidden xl:flex items-center gap-2 whitespace-nowrap text-white font-bold text-sm">
              <Phone size={16} style={{ color: "#FFD700" }} />
              (403) 400-3055
            </a>
            <Link
              href={bookingLink.href}
              className="whitespace-nowrap px-3 py-2 rounded-full font-bold text-xs xl:text-sm transition-all duration-200 hover:scale-105"
              style={{ color: "#FFD700", border: "1px solid #FFD700" }}
            >
              {bookingLink.label}
            </Link>
            <a
              href="tel:+14034003055"
              className="whitespace-nowrap px-4 py-2 rounded-full font-bold text-xs xl:text-sm text-black transition-all duration-200 hover:scale-105"
              style={{ background: "#FFD700" }}
            >
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile quick-access bar — always visible, no need to open the menu */}
        <div className="lg:hidden flex items-center justify-around pb-2" style={{ borderTop: "1px solid rgba(255,215,0,0.12)" }}>
          <Link href="/" className="flex flex-col items-center gap-0.5 px-4 pt-2" style={{ color: pathname === "/" ? "#FFD700" : "#e5e7eb" }}>
            <Home size={18} />
            <span className="text-[11px] font-bold uppercase tracking-wide">Home</span>
          </Link>
          <Link href="/#services" className="flex flex-col items-center gap-0.5 px-4 pt-2 text-gray-200">
            <Wrench size={18} />
            <span className="text-[11px] font-bold uppercase tracking-wide">Services</span>
          </Link>
          <Link href="/#contact" className="flex flex-col items-center gap-0.5 px-4 pt-2 text-gray-200">
            <Phone size={18} />
            <span className="text-[11px] font-bold uppercase tracking-wide">Contact</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,215,0,0.2)" }}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((l) => (
              <div key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-bold text-lg py-2"
                  style={{ color: pathname === l.href ? "#FFD700" : "#e5e7eb" }}
                >
                  {l.label}
                </Link>
                {l.children && (
                  <div className="pl-4 pb-1 space-y-1" style={{ borderLeft: "1px solid rgba(255,215,0,0.18)" }}>
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block text-sm py-1.5"
                        style={{ color: pathname === c.href ? "#FFD700" : "#9ca3af" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href={bookingLink.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 font-bold text-lg py-2"
              style={{ color: "#FFD700" }}
            >
              <CalendarCheck size={20} />
              {bookingLink.label}
            </Link>
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <a href="tel:+14034003055" className="flex items-center gap-2 text-white font-bold">
                <Phone size={16} style={{ color: "#FFD700" }} />
                (403) 400-3055
              </a>
              <a
                href="tel:+14034003055"
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
