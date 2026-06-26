"use client";
import React, { useEffect, useRef } from "react";
import BookingForm from "@/components/ui/booking-form";

interface ServiceItem {
  title: string;
  desc: string;
  bg: string;
}

interface ServicePageLayoutProps {
  heroHeadline: string;
  heroSubheadline: string;
  heroCta: string;
  serviceType: "Electrical" | "Plumbing" | "Appliance";
  services: ServiceItem[];
}

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

export default function ServicePageLayout({
  heroHeadline,
  heroSubheadline,
  heroCta,
  serviceType,
  services,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ background: "#0a0a0a" }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, rgba(255,215,0,0.08) 0%, transparent 70%)",
        }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700" }}>
            ⚡ No After-Hours Surcharge · Emergency Welcome
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            {heroHeadline.split(" ").map((word, i) =>
              i === heroHeadline.split(" ").length - 1
                ? <span key={i} style={{ color: "#FFD700" }}> {word}</span>
                : <span key={i}>{word} </span>
            )}
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{heroSubheadline}</p>
          <a
            href="#booking"
            className="inline-block px-10 py-4 rounded-full font-black text-black text-lg hover:scale-105 transition-transform duration-200"
            style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
          >
            {heroCta}
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">{serviceType} <span>Services</span></h2>
            <p className="section-subheading">Everything you need, done right the first time.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div className="service-card h-72 group">
                  <div className="service-card-bg absolute inset-0"
                    style={{ backgroundImage: `url(${s.bg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.93) 45%, rgba(0,0,0,0.5) 100%)" }} />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-black text-white mb-2">{s.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{s.desc}</p>
                    <a href="#booking" className="text-sm font-bold" style={{ color: "#FFD700" }}>Get Quote →</a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section" id="booking" style={{ background: "#0d0d0d" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Book Your <span>Appointment</span></h2>
            <p className="section-subheading">Choose your date and time — Abayneh will confirm.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl p-8" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.15)" }}>
              <BookingForm defaultService={serviceType} />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
