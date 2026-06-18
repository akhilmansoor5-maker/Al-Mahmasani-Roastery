"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    label: "Supermarkets",
    headline: "Trusted by the UAE's\nleading supermarkets",
    body: "From major hypermarkets to boutique grocery chains, we supply consistent quality, competitive wholesale pricing and reliable delivery — the foundations every retailer needs.",
    img: "/images/products/cashew-3.jpg",
    cta: "Retail Partnership",
  },
  {
    label: "Hotels",
    headline: "In the world's finest\nhotel amenity spaces",
    body: "Five-star hotels and luxury hospitality groups across the UAE choose Al Mahmasani for premium nut selections for minibars, gifting, and F&B operations.",
    img: "/images/products/hazelnut-4.jpg",
    cta: "Hospitality Supply",
  },
  {
    label: "Restaurants",
    headline: "Elevating kitchens\nand menus",
    body: "Chefs and F&B directors rely on our consistent quality for both front-of-house presentations and kitchen applications. Flexible quantities, reliable sourcing.",
    img: "/images/products/almond-2.jpg",
    cta: "Restaurant Supply",
  },
  {
    label: "Cafés",
    headline: "Specialty café\ningredients",
    body: "From artisanal nut milks to premium café snacking ranges, our products integrate seamlessly into specialty café menus and retail offerings.",
    img: "/images/products/coffee-3.jpg",
    cta: "Café Partnership",
  },
  {
    label: "Distributors",
    headline: "Regional distribution\npartnerships",
    body: "We work with established FMCG distributors across the UAE and GCC to expand market reach. Competitive margins, quality product, proven demand.",
    img: "/images/products/pecan-1.jpg",
    cta: "Distribution Enquiry",
  },
];

export default function PartnerSection() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section style={{ background: "var(--bg-2)", minHeight: "80vh", display: "flex", flexDirection: "column" }}>
      {/* Tab bar */}
      <div style={{ borderBottom: "1.5px solid var(--border)", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 80px)",
            paddingRight: "clamp(20px, 5vw, 80px)",
            display: "flex",
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`partner-tab ${i === active ? "active" : ""}`}
              style={{ fontSize: "clamp(9px, 1.5vw, 11px)", padding: "0.875rem clamp(0.75rem, 2vw, 1.5rem)", whiteSpace: "nowrap" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          flex: 1,
          paddingLeft: "clamp(20px, 5vw, 80px)",
          paddingRight: "clamp(20px, 5vw, 80px)",
        }}
      >
        <div className="partner-content-grid">

          {/* Text column */}
          <div className="partner-text-col">
            <span className="section-label" style={{ display: "block", marginBottom: "clamp(14px,2vw,24px)" }}>Become a Partner</span>
            <h2
              key={active}
              className="font-normal"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 6vw, 4.5rem)",
                lineHeight: "1.02",
                color: "var(--text)",
                marginBottom: "clamp(16px,2.5vw,28px)",
                animation: "hero-rise 0.6s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              {t.headline.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "clamp(15px,2vw,18px)",
                lineHeight: "1.8",
                color: "var(--text-muted)",
                maxWidth: "480px",
                marginBottom: "clamp(24px,3vw,40px)",
              }}
            >
              {t.body}
            </p>
            <Link
              href="/contact"
              className="btn btn-outline-gold text-[10px] tracking-[0.18em]"
              style={{ alignSelf: "flex-start" }}
            >
              {t.cta}
            </Link>
          </div>

          {/* Image column — desktop only */}
          <div className="relative hidden lg:block" style={{ minHeight: "100%" }}>
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
