import React from "react";

interface TradeOverviewProps {
  heading: string;
  paragraphs: string[];
}

export default function TradeOverview({ heading, paragraphs }: TradeOverviewProps) {
  return (
    <section className="section" style={{ padding: "80px 0" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-6">{heading}</h2>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-400 leading-relaxed">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
