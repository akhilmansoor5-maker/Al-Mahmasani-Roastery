"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    label: "Supermarkets",
    headline: "Trusted by the UAE's\nleading supermarkets",
    body: "From major hypermarkets to boutique grocery chains, we supply consistent quality, competitive wholesale pricing and reliable delivery — the foundations every retailer needs.",
    img: "/images/cashew.jpg",
    cta: "Retail Partnership",
  },
  {
    label: "Hotels",
    headline: "In the world's finest\nhotel amenity spaces",
    body: "Five-star hotels and luxury hospitality groups across the UAE choose Al Mahmasani for premium nut selections for minibars, gifting, and F&B operations.",
    img: "/images/pistachio.jpg",
    cta: "Hospitality Supply",
  },
  {
    label: "Restaurants",
    headline: "Elevating kitchens\nand menus",
    body: "Chefs and F&B directors rely on our consistent quality for both front-of-house presentations and kitchen applications. Flexible quantities, reliable sourcing.",
    img: "/images/almond.jpg",
    cta: "Restaurant Supply",
  },
  {
    label: "Cafés",
    headline: "Specialty café\ningredients",
    body: "From artisanal nut milks to premium café snacking ranges, our products integrate seamlessly into specialty café menus and retail offerings.",
    img: "/images/peanut.jpg",
    cta: "Café Partnership",
  },
  {
    label: "Distributors",
    headline: "Regional distribution\npartnerships",
    body: "We work with established FMCG distributors across the UAE and GCC to expand market reach. Competitive margins, quality product, proven demand.",
    img: "/images/cashew.jpg",
    cta: "Distribution Enquiry",
  },
];

export default function PartnerSection() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section style={{ background: "var(--bg-2)" }}>
      {/* Tab bar */}
      <div style={{ borderBottom: "1.5px solid var(--border)" }} className="overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`partner-tab ${i === active ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Text */}
          <div className="py-20 lg:py-28 lg:pr-20 flex flex-col justify-center">
            <span className="section-label block mb-6">Become a Partner</span>
            <h2
              key={active}
              className="font-normal leading-[1.02] mb-7"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                color: "var(--text)",
                animation: "hero-rise 0.6s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              {t.headline.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p
              className="text-sm leading-relaxed mb-10 max-w-md"
              style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}
            >
              {t.body}
            </p>
            <Link
              href="/contact"
              className="btn btn-outline-gold text-[10px] tracking-[0.18em] self-start"
            >
              {t.cta}
            </Link>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block" style={{ minHeight: "520px" }}>
            <Image
              key={active}
              src={t.img}
              alt={t.label}
              fill
              sizes="50vw"
              style={{ objectFit: "cover", borderRadius: "var(--radius-card) 0 0 var(--radius-card)" }}
              className="transition-opacity duration-700"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, var(--bg-2) 0%, transparent 30%)",
                borderRadius: "var(--radius-card) 0 0 var(--radius-card)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
