"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, FileCheck, ShieldCheck, ClipboardList } from "lucide-react";
import FAQSection, { FAQItem } from "./faq-section";
import RelatedServices, { RelatedService } from "./related-services";
import ServiceSchema from "./service-schema";

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

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  image?: { src: string; alt: string };
}

interface ServiceDetailPageProps {
  breadcrumbLabel: string;
  h1: string;
  intro: string[];
  heroImage: { src: string; alt: string };
  sections: ContentSection[];
  whatIncluded: string[];
  permitInfo: string;
  timeline: string;
  prepSteps: string[];
  afterHoursNote?: string;
  faqs: FAQItem[];
  faqHeading: string;
  relatedLinks: RelatedService[];
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  providerType?: "Electrician" | "Plumber" | "HomeAndConstructionBusiness";
}

export default function ServiceDetailPage({
  breadcrumbLabel,
  h1,
  intro,
  heroImage,
  sections,
  whatIncluded,
  permitInfo,
  timeline,
  prepSteps,
  afterHoursNote,
  faqs,
  faqHeading,
  relatedLinks,
  serviceName,
  serviceDescription,
  serviceUrl,
  providerType = "Electrician",
}: ServiceDetailPageProps) {
  return (
    <>
      <ServiceSchema name={serviceName} description={serviceDescription} url={serviceUrl} providerType={providerType} />

      {/* HERO */}
      <section className="section" style={{ paddingTop: 160, paddingBottom: 64 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 text-sm text-gray-500">
            <Link href="/electrical" style={{ color: "#FFD700" }}>← {breadcrumbLabel}</Link>
          </div>
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ letterSpacing: "-0.02em" }}>
              {h1}
            </h1>
            <div className="space-y-4 mb-8 max-w-3xl">
              {intro.map((p, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed">{p}</p>
              ))}
            </div>
            <a
              href="tel:4034003055"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-black text-lg transition-transform hover:scale-105"
              style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
            >
              <Phone size={20} />
              Call (403) 400-3055
            </a>
          </FadeIn>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeIn>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,215,0,0.15)" }}>
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section, i) => (
        <section key={section.heading} className="section" style={{ background: i % 2 === 0 ? "#0a0a0a" : "#0d0d0d", padding: "64px 0" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 ${section.image ? "lg:grid-cols-2" : ""} gap-10 items-center`}>
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-400 leading-relaxed">{p}</p>
                  ))}
                </div>
              </FadeIn>
              {section.image && (
                <FadeIn delay={100}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,215,0,0.1)" }}>
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 512px"
                    />
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* WHAT'S INCLUDED / PERMIT / TIMELINE / PREP */}
      <section className="section" style={{ background: "#0d0d0d" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="p-6 rounded-2xl h-full" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.1)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={22} style={{ color: "#FFD700" }} />
                  <h3 className="text-white font-black text-lg">What&apos;s Included</h3>
                </div>
                <ul className="space-y-2">
                  {whatIncluded.map((item) => (
                    <li key={item} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                      <span style={{ color: "#FFD700" }}>★</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="p-6 rounded-2xl h-full" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.1)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck size={22} style={{ color: "#FFD700" }} />
                  <h3 className="text-white font-black text-lg">Permits</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{permitInfo}</p>
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={22} style={{ color: "#FFD700" }} />
                  <h3 className="text-white font-black text-lg">Timeline</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{timeline}</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="p-6 rounded-2xl mt-6" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.1)" }}>
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList size={22} style={{ color: "#FFD700" }} />
                <h3 className="text-white font-black text-lg">How to Prepare</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {prepSteps.map((item) => (
                  <li key={item} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                    <span style={{ color: "#FFD700" }}>★</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {afterHoursNote && (
            <FadeIn delay={300}>
              <div className="p-6 rounded-2xl mt-6 text-center" style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.3)" }}>
                <p className="font-bold" style={{ color: "#FFD700" }}>{afterHoursNote}</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <RelatedServices items={relatedLinks} />

      <FAQSection faqs={faqs} heading={faqHeading} />

      {/* FINAL CTA */}
      <section className="section" style={{ padding: "64px 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Ready to Book?</h2>
            <p className="text-gray-400 mb-8">Call now or send a message — Yaya will call you back to confirm.</p>
            <a
              href="tel:4034003055"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-black text-lg transition-transform hover:scale-105"
              style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
            >
              <Phone size={20} />
              Call (403) 400-3055
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
