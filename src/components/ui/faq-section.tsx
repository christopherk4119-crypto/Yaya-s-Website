import React from "react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

/**
 * Answers are rendered into the HTML on every request, not injected on click.
 * Collapsing is done by <details>/<summary> so the text is in the DOM for
 * crawlers (and for anyone with JS off) while still reading as an accordion.
 */
export default function FAQSection({ faqs, heading = "Frequently Asked Questions" }: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="section" style={{ background: "#0d0d0d" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading" style={{ marginBottom: 16 }}>{heading.split(" ").slice(0, -1).join(" ")} <span>{heading.split(" ").slice(-1)}</span></h2>
        <p className="section-subheading">Honest answers to common questions Calgary homeowners ask.</p>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <details key={i} className="faq-item rounded-xl overflow-hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer">
                <span className="font-bold text-white text-sm leading-snug">{item.q}</span>
                <span className="faq-marker text-xl shrink-0" style={{ color: "#FFD700" }}>+</span>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
