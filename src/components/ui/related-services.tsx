import Link from "next/link";

export interface RelatedService {
  href: string;
  label: string;
}

export default function RelatedServices({ items }: { items: RelatedService[] }) {
  return (
    <section className="section" style={{ padding: "64px 0" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading" style={{ fontSize: "1.5rem", marginBottom: 24 }}>Related Services</h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200"
              style={{ border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
