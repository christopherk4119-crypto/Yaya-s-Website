"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import Gallery from "@/components/ui/gallery";
import { Phone, Mail, Clock, Zap, Wrench, Settings, Shield, CheckCircle } from "lucide-react";

const services = [
  {
    icon: <Zap size={28} />,
    title: "Electrical Services",
    desc: "Panel upgrades, wiring, outlets, ceiling lights, smoke alarms & more. Certified since 2007.",
    href: "/electrical",
    bg: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
  },
  {
    icon: <Wrench size={28} />,
    title: "Plumbing Services",
    desc: "Water lines, drain lines, faucets, toilets & any plumbing need. Licensed plumber.",
    href: "/plumbing",
    bg: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  },
  {
    icon: <Settings size={28} />,
    title: "Appliance Services",
    desc: "Oven, dishwasher, dryer, HVAC & exhaust fan repair. All brands, all appliances.",
    href: "/appliance",
    bg: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
];

const reasons = [
  { icon: "⚡", title: "No Extra Charge After Hours", desc: "Emergency or late night — same price always. No surprise fees." },
  { icon: "🔧", title: "Certified Since 2007", desc: "Electrician, licensed plumber & appliance technician all in one person." },
  { icon: "📞", title: "Fast Response", desc: '"This is Yaya, may I call you back shortly" — every single time.' },
  { icon: "🛠️", title: "All In One Hand", desc: "One call handles electrical, plumbing AND appliances. One contractor, zero hassle." },
];

const socials = [
  {
    name: "TikTok", handle: "@abayneh.yared.yay", desc: "Watch our work on TikTok",
    href: "https://www.tiktok.com/@abayneh.yared.yay", color: "#010101",
    icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.24 8.24 0 0 0 4.84 1.56V6.87a4.85 4.85 0 0 1-1.07-.18z"/></svg>,
  },
  {
    name: "Facebook", handle: "YAYA General Contracting", desc: "Follow us on Facebook",
    href: "https://www.facebook.com/p/YAYA-General-Contracting-100067728921076", color: "#1877F2",
    icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    name: "Instagram", handle: "@yaya (coming soon)", desc: "Follow us on Instagram", href: "#", color: "#E1306C",
    icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    name: "Google Maps", handle: "Find us in Calgary", desc: "Get directions on Google Maps", href: "#", color: "#4285F4",
    icon: <svg viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.402 16.199 0 12 0zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>,
  },
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
  return done ? (
    <div className="text-center py-12">
      <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#FFD700" }} />
      <h3 className="text-2xl font-black text-white">Message Sent!</h3>
      <p className="text-gray-400 mt-2">Abayneh will be in touch shortly.</p>
    </div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
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
      <button type="submit" className="w-full py-4 rounded-full font-black text-black text-lg hover:scale-105 transition-transform duration-200"
        style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>
        Send Message
      </button>
    </form>
  );
}

export default function HomePage() {
  return (
    <>
      <AnimatedShaderHero
        trustBadge={{ text: "Certified Since 2007 · No After-Hours Fee · Emergency Calls Welcome", icons: ["⚡"] }}
        headline={{ line1: "Calgary's All-In-One", line2: "Contractor" }}
        subtitle="Electrical • Plumbing • Appliance — One call, one expert, zero extra fees after hours."
        buttons={{
          primary: { text: "Book an Appointment", onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
          secondary: { text: "Call (403) 400-3055", onClick: () => { window.location.href = "tel:4034003055"; } },
        }}
      />

      {/* TRUST BAR */}
      <div style={{ background: "#111", borderTop: "1px solid rgba(255,215,0,0.15)", borderBottom: "1px solid rgba(255,215,0,0.15)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6">
          {["✅ Certified Electrician", "✅ Licensed Plumber", "✅ Appliance Technician", "✅ No After-Hours Fee", "✅ Emergency Service"].map((item) => (
            <span key={item} className="text-sm font-semibold text-gray-300 whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">What We <span>Do</span></h2>
            <p className="section-subheading">Three trades, one expert. Abayneh handles it all.</p>
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
                        <p className="text-gray-300 text-sm mb-4">{s.desc}</p>
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

      {/* GALLERY */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Our <span>Work</span></h2>
            <p className="section-subheading">Real jobs, real results. Calgary homes and businesses.</p>
          </FadeIn>
          <Gallery />
        </div>
      </section>

      {/* FOLLOW */}
      <section className="section" style={{ background: "#0d0d0d" }}>
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
      <section className="section">
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
                    <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Call Abayneh</span>
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
