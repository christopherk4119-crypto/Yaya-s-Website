import React from "react";

export interface OverviewSection {
  heading: string;
  paragraphs: string[];
}

interface TradeOverviewProps {
  heading: string;
  paragraphs: string[];
  /** Additional H2 sections rendered below the intro. */
  sections?: OverviewSection[];
}

export default function TradeOverview({ heading, paragraphs, sections = [] }: TradeOverviewProps) {
  return (
    <section className="section" style={{ padding: "80px 0" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-6">{heading}</h2>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-400 leading-relaxed">{p}</p>
          ))}
        </div>

        {sections.map((s) => (
          <div key={s.heading} className="mt-12">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">{s.heading}</h2>
            <div className="space-y-4">
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-400 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
