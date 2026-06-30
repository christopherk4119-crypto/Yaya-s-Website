"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import Gallery from "@/components/ui/gallery";
import BookingForm from "@/components/ui/booking-form";
import { Phone, Mail, Clock, Zap, Wrench, Settings, Shield, CheckCircle } from "lucide-react";

const FORMSPREE = "https://formspree.io/f/mjgqynvj";

const services = [
  {
    icon: <Zap size={28} />,
    title: "Electrical Services",
    bullets: ["★ Panel Upgrades", "★ Wiring & Outlets", "★ Ceiling Lights", "★ Smoke Alarms & More"],
    href: "/electrical",
    bg: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=95",
  },
  {
    icon: <Wrench size={28} />,
    title: "Plumbing Services",
    bullets: ["★ Water Lines", "★ Drain Lines", "★ Faucet & Toilet", "★ Any Plumbing Need"],
    href: "/plumbing",
    bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=95",
  },
  {
    icon: <Settings size={28} />,
    title: "Appliance Services",
    bullets: ["★ Oven & Stove", "★ Dishwasher & Dryer", "★ HVAC & Exhaust Fan", "★ All Brands"],
    href: "/appliance",
    bg: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=95",
  },
];

const reasons = [
  { icon: "⚡", title: "No Extra Charge After Hours", desc: "Emergency or late night — same price always. No surprise fees." },
  { icon: "🔧", title: "Experienced Since 2007", desc: "Electrician, licensed plumber & appliance technician all in one person." },
  { icon: "📞", title: "Fast Response", desc: '"This is Yaya, may I call you back shortly" — every single time.' },
  { icon: "🛠️", title: "All In One Hand", desc: "On Call for electrical, plumbing AND appliances. One contractor, zero hassle." },
];

const socials = [
  {
    name: "TikTok", handle: "@yaya.electric_canada", desc: "Watch our work on TikTok",
    href: "https://www.tiktok.com/@yaya.electric_canada", color: "#010101",
    icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.24 8.24 0 0 0 4.84 1.56V6.87a4.85 4.85 0 0 1-1.07-.18z"/></svg>,
  },
  {
    name: "Instagram", handle: "@yayacalgary", desc: "Follow us on Instagram", href: "https://www.instagram.com/yayacalgary/", color: "#E1306C",
    icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
];

const homeGallery = [
  { src: "/images/gallery/electrical/calgary-electrician-ceiling-light-installation-yaya-1.jpg", alt: "Experienced Calgary electrician Yaya installing ceiling light fixture" },
  { src: "/images/gallery/electrical/calgary-electrician-ceiling-light-fixture-install-2.jpg", alt: "Calgary electrician Yaya smiling while completing ceiling light installation" },
  { src: "/images/gallery/electrical/calgary-electrician-hexagon-led-ceiling-completed-5.jpg", alt: "Completed hexagon LED ceiling light installation by Calgary electrician" },
  { src: "/images/gallery/electrical/calgary-electrician-breaker-panel-upgrade-before-6.jpg", alt: "Electrical breaker panel upgrade in Calgary home" },
  { src: "/images/gallery/plumbing/calgary-plumber-bathtub-faucet-shower-valve-replacement-3.jpg", alt: "Calgary plumber replacing bathtub faucet and shower valve" },
  { src: "/images/gallery/plumbing/calgary-plumber-rough-in-copper-pvc-pipe-wall-4.jpg", alt: "Rough-in copper and PVC pipe installation by Calgary plumber" },
  { src: "/images/gallery/plumbing/calgary-plumber-pool-filter-tank-pipe-system-6.jpg", alt: "Pool filter tank and pipe system installed by Calgary plumber" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-dishwasher-installation-1.jpg", alt: "Dishwasher installation by Calgary appliance repair technician" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-stove-heating-element-burner-8.jpg", alt: "Stove heating element replacement by Calgary appliance repair specialist" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-furnace-control-board-replacement-11.jpg", alt: "HVAC furnace control board replacement by Calgary appliance technician" },
  { src: "/images/gallery/appliance/calgary-appliance-repair-commercial-oven-us-range-13.jpg", alt: "Commercial US Range oven serviced by Calgary appliance repair specialist" },
  { src: "/images/gallery/plumbing/calgary-plumber-shower-valve-brass-fitting-rough-in-5.jpg", alt: "Calgary plumber installing brass shower valve rough-in fitting" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function ContactForm() {
  const [form, setForm] = React.useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [done, setDone] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch(FORMSPREE, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...form, _subject: `New Contact — ${form.name} — ${form.service}` }),
    });
    setLoading(false);
    setDone(true);
  };

  return done ? (
    <div className="text-center py-12">
      <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#FFD700" }} />
      <h3 className="text-2xl font-black text-white">Message Sent!</h3>
      <p className="text-gray-400 mt-2">Yaya will be in touch shortly.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { name: "name", placeholder: "Your Name", type: "text" },
        { name: "phone", placeholder: "Phone Number", type: "tel" },
        { name: "email", placeholder: "Email Address", type: "email" },
      ].map((f) => (
        <input key={f.name} type={f.type} placeholder={f.placeholder} required
          value={form[f.name as keyof typeof form]}
          onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm"
          style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }} />
      ))}
      <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
        className="w-full px-4 py-3 rounded-lg text-sm"
        style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: form.service ? "#fff" : "#6b7280" }}>
        <option value="" disabled>Service Type</option>
        {["Electrical", "Plumbing", "Appliance", "Other"].map((s) => (
          <option key={s} value={s} style={{ color: "#fff" }}>{s}</option>
        ))}
      </select>
      <textarea placeholder="Message" rows={4} value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm resize-none"
        style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }} />
      <button type="submit" disabled={loading} className="w-full py-4 rounded-full font-black text-black text-lg hover:scale-105 transition-transform duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default function HomePage() {
  return (
    <>
      <AnimatedShaderHero
        trustBadge={{ text: "Experienced Since 2007 · No After-Hours Fee · Emergency Calls Welcome", icons: ["⚡"] }}
        headline={{ line1: "Calgary's All-In-One", line2: "Contractor" }}
        subtitle="Electrical • Plumbing • Appliance — One call, one expert, zero extra fees after hours."
        buttons={{
          primary: { text: "Book an Appointment", onClick: () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }) },
          secondary: { text: "Call (403) 400-3055", onClick: () => { window.location.href = "tel:4034003055"; } },
        }}
      />

      {/* SEO: visually hidden h1 and NAP */}
      <div className="sr-only" aria-hidden="false">
        <h1>YAYA General Contractor Inc. — Calgary Electrician, Plumber &amp; Appliance Repair</h1>
        <p>Experienced electrician, licensed plumber and appliance technician serving Calgary, AB since 2007. No extra charge for after-hours or emergency calls. Available Monday to Friday 4:30 PM to 6:00 AM and 24 hours on Saturday and Sunday.</p>
        <address>
          <span itemProp="name">YAYA General Contractor Inc.</span><br />
          <span itemProp="addressLocality">Calgary</span>, <span itemProp="addressRegion">AB</span>, <span itemProp="addressCountry">Canada</span><br />
          Phone: <a href="tel:+14034003055" itemProp="telephone">(403) 400-3055</a><br />
          Email: <a href="mailto:electricianyaya@gmail.com" itemProp="email">electricianyaya@gmail.com</a>
        </address>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: "#111", borderTop: "1px solid rgba(255,215,0,0.15)", borderBottom: "1px solid rgba(255,215,0,0.15)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6">
          {["✅ Experienced Electrician", "✅ Licensed Plumber", "✅ Appliance Technician", "✅ No After-Hours Fee", "✅ Emergency Service"].map((item) => (
            <span key={item} className="text-sm font-semibold text-gray-300 whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">What We <span>Do</span></h2>
            <p className="section-subheading">Three trades, one expert. Yaya handles it all.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <Link href={s.href}>
                  <div className="service-card h-80 group">
                    <div className="service-card-bg absolute inset-0"
                      style={{ backgroundImage: `url(${s.bg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.5) 100%)" }} />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#000", border: "2px solid rgba(255,215,0,0.3)", color: "#FFD700" }}>
                        {s.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white mb-2">{s.title}</h3>
                        <ul className="mb-4 space-y-1">
                          {s.bullets.map((b) => (
                            <li key={b} className="text-gray-300 text-xs font-semibold">{b}</li>
                          ))}
                        </ul>
                        <span className="text-sm font-bold" style={{ color: "#FFD700" }}>Get Quote →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YAYA */}
      <section className="section" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Why Calgary Chooses <span>Yaya</span></h2>
            <p className="section-subheading">The contractor who picks up, shows up, and never overcharges.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 100}>
                <div className="p-6 rounded-2xl h-full" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.1)" }}>
                  <div className="text-4xl mb-4">{r.icon}</div>
                  <h3 className="text-lg font-black text-white mb-2">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ABAYNEH */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <Image
                  src="/images/gallery/electrical/calgary-electrician-ceiling-light-installation-yaya-1.jpg"
                  alt="Yaya — owner of YAYA General Contractor Inc. Calgary, experienced electrician since 2007"
                  width={600}
                  height={700}
                  className="w-full rounded-2xl object-cover"
                  style={{ maxHeight: "560px", border: "2px solid rgba(255,215,0,0.2)" }}
                />
                <div className="absolute -bottom-4 -right-4 px-6 py-3 rounded-xl font-black text-black text-sm"
                  style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
                  Since 2007
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700" }}>
                  About Yaya
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Meet the Man Behind <span style={{ color: "#FFD700" }}>Yaya</span>
                </h2>
                <div className="space-y-5 text-gray-300 leading-relaxed">
                  <p>
                    Yaya has been one of Calgary&apos;s most trusted tradespeople since earning his Electrician certification in 2007.
                    In 2011 he upgraded with automation technology training, then added licensed plumbing and appliance repair —
                    becoming truly all-in-one.
                  </p>
                  <p>
                    What sets Yaya apart isn&apos;t just his range of skills — it&apos;s his character. He picks up the phone. He shows up on time.
                    He never charges extra for after-hours or emergency calls. When you call, you&apos;ll hear:
                    <span style={{ color: "#FFD700" }} className="font-semibold"> &ldquo;This is Yaya, may I call you back shortly&rdquo;</span> — and he always does.
                  </p>
                  <p>
                    Whether you&apos;re a homeowner, a realtor, a property manager, or a contractor — Yaya handles it all under one roof.
                    Electrical. Plumbing. Appliances. One call, zero runaround.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { number: "17+", label: "Years Experience" },
                    { number: "3", label: "Certifications" },
                    { number: "0", label: "After-Hours Fee" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.15)" }}>
                      <div className="text-3xl font-black" style={{ color: "#FFD700" }}>{stat.number}</div>
                      <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <a href="tel:4034003055" className="inline-block mt-8 px-8 py-4 rounded-full font-black text-black text-lg hover:scale-105 transition-transform duration-200"
                  style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
                  Call Yaya Now
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Our <span>Work</span></h2>
            <p className="section-subheading">Real jobs, real results. Calgary homes and businesses.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <Gallery photos={homeGallery} columns={4} />
          </FadeIn>
        </div>
      </section>

      {/* FOLLOW */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Follow <span>Yaya</span></h2>
            <p className="section-subheading">Watch the work, follow the journey.</p>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {socials.map((s, i) => (
              <FadeIn key={s.name} delay={i * 80}>
                <a href={s.href} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105"
                  style={{ background: "#111", border: "1px solid #222" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.border = "1px solid #FFD700"; el.style.boxShadow = "0 0 20px rgba(255,215,0,0.15)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.border = "1px solid #222"; el.style.boxShadow = "none"; }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ background: s.color }}>
                    {s.icon}
                  </div>
                  <span className="font-black text-white text-base mb-1">{s.name}</span>
                  <span className="text-gray-500 text-xs mb-2">{s.handle}</span>
                  <span className="text-gray-400 text-xs">{s.desc}</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="section" style={{ background: "#0d0d0d" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">When We&apos;re <span>Available</span></h2>
            <p className="section-subheading">We work when you need us — including nights and weekends.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,215,0,0.2)" }}>
              {[
                { day: "Monday – Friday", hours: "4:30 PM – 6:00 AM", highlight: false },
                { day: "Saturday", hours: "24 Hours", highlight: false },
                { day: "Sunday", hours: "24 Hours", highlight: false },
                { day: "Emergency Calls", hours: "Always Welcome — No Extra Fee", highlight: true },
              ].map((row, i) => (
                <div key={row.day} className="flex justify-between items-center px-8 py-5"
                  style={{ background: row.highlight ? "rgba(255,215,0,0.08)" : i % 2 === 0 ? "#111" : "#0d0d0d", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <div className="flex items-center gap-3">
                    <Clock size={18} style={{ color: "#FFD700" }} />
                    <span className={`font-bold ${row.highlight ? "text-yellow-400" : "text-white"}`}>{row.day}</span>
                  </div>
                  <span className={`font-bold text-right ${row.highlight ? "text-yellow-400" : "text-gray-300"}`}>{row.hours}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BOOK AN APPOINTMENT */}
      <section className="section" id="booking">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Book an <span>Appointment</span></h2>
            <p className="section-subheading">Pick your date and time — Yaya will call to confirm.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl p-8" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.15)" }}>
              <BookingForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Get In Touch With <span>Yaya</span></h2>
            <p className="section-subheading">Ready to get started? Drop a message or call directly.</p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="rounded-2xl p-8" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.1)" }}>
                <ContactForm />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.1)" }}>
                  <div className="flex items-center gap-4 mb-2">
                    <Phone size={24} style={{ color: "#FFD700" }} />
                    <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Call Yaya</span>
                  </div>
                  <a href="tel:4034003055" className="text-3xl font-black text-white hover:text-yellow-400 transition-colors block">(403) 400-3055</a>
                </div>
                <div className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.1)" }}>
                  <div className="flex items-center gap-4 mb-2">
                    <Mail size={24} style={{ color: "#FFD700" }} />
                    <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Email</span>
                  </div>
                  <a href="mailto:electricianyaya@gmail.com" className="text-lg font-bold text-white hover:text-yellow-400 transition-colors">electricianyaya@gmail.com</a>
                </div>
                <div className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.1)" }}>
                  <div className="flex items-center gap-4 mb-2">
                    <Clock size={24} style={{ color: "#FFD700" }} />
                    <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Hours</span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-300">
                    <p>Mon–Fri: <span className="text-white font-semibold">4:30 PM – 6:00 AM</span></p>
                    <p>Sat–Sun: <span className="text-white font-semibold">24 Hours</span></p>
                    <p className="font-bold" style={{ color: "#FFD700" }}>No extra charge for after-hours or emergencies</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl" style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.3)" }}>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield size={20} style={{ color: "#FFD700" }} />
                    <span className="font-black text-white">Calgary, AB</span>
                  </div>
                  <p className="text-gray-400 text-sm">Serving all of Calgary and surrounding areas since 2007.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
