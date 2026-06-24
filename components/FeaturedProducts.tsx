"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    category: "Chocolate Collection",
    title: "Chocolate-Coated Pecan",
    desc: "Rich Belgian chocolate enrobing hand-selected pecans. Our most awarded product line — available in dark, milk, and white chocolate variants.",
    img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_af6ed3af6ed3af6e.png",
    href: "/products#chocolate",
    tag: "Best Seller",
  },
  {
    category: "Cashew Collection",
    title: "Premium Roasted Cashew",
    desc: "Slow-roasted whole cashews with the perfect crunch. Sourced from Vietnam's finest farms and roasted in small batches for consistent quality.",
    img: "/images/Catalogue Photos/Cashew/Gemini_Generated_Image_6nmgl56nmgl56nmg.png",
    href: "/products#cashew",
    tag: "Top Pick",
  },
  {
    category: "Hazelnut Collection",
    title: "Turkish Hazelnuts",
    desc: "Premium hazelnuts roasted to golden perfection. Sourced directly from Turkey's Black Sea region — the world's finest hazelnut growing zone.",
    img: "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_l339rul339rul339.png",
    href: "/products#hazelnut",
    tag: "New",
  },
  {
    category: "Coffee Collection",
    title: "Coffee-Glazed Almonds",
    desc: "Arabica coffee glaze over premium almonds. The perfect blend of bold espresso flavor and satisfying crunch for coffee lovers everywhere.",
    img: "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_2e2kw72e2kw72e2k.png",
    href: "/products#coffee",
    tag: "Premium",
  },
];

export default function FeaturedProducts() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + featured.length) % featured.length);
  const next = () => setCurrent((c) => (c + 1) % featured.length);
  const p = featured[current];

  return (
    <section style={{ background: "var(--cream)", padding: "clamp(80px,10vw,120px) 0", overflow: "hidden" }}>
      <div className="container">

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(48px,6vw,80px)", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Star Products</p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "var(--dark)", margin: 0, lineHeight: 1.1 }}>
              Featured Collections
            </h2>
          </div>
          <Link href="/products" style={{ fontFamily: "var(--sans)", fontSize: "14px", color: "var(--text-muted)", fontWeight: 500, textDecoration: "none" }}>
            View all products →
          </Link>
        </div>

        {/* 3-col layout: title | card | description */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr 1fr", gap: "clamp(32px,4vw,64px)", alignItems: "center" }}>

          {/* Left — title, counter, arrows */}
          <div>
            <span style={{
              display: "inline-block", fontFamily: "var(--sans)", fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "var(--gold)", color: "var(--dark)",
              padding: "5px 16px", borderRadius: "50px", marginBottom: "24px",
            }}>
              {p.tag}
            </span>
            <h3 style={{
              fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 700,
              color: "var(--dark)", lineHeight: 1.1, marginBottom: "40px",
              transition: "opacity 0.4s ease",
            }}>
              {p.title}
            </h3>

            {/* Counter + nav */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontFamily: "var(--sans)", fontSize: "13px", color: "var(--text-muted)", fontWeight: 500, letterSpacing: "0.05em" }}>
                {String(current + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
              </span>
              <div style={{ display: "flex", gap: "8px" }}>
                {[{ action: prev, icon: "M15 18l-6-6 6-6" }, { action: next, icon: "M9 18l6-6-6-6" }].map((btn, i) => (
                  <button key={i} onClick={btn.action} style={{
                    width: "42px", height: "42px", borderRadius: "50%",
                    border: "1.5px solid var(--border)", background: "transparent",
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                    onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "var(--dark)"; el.style.background = "var(--dark)"; const svg = el.querySelector("polyline") as SVGElement | null; if (svg) svg.style.stroke = "white"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "var(--border)"; el.style.background = "transparent"; const svg = el.querySelector("polyline") as SVGElement | null; if (svg) svg.style.stroke = "var(--dark)"; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points={btn.icon} stroke="var(--dark)" style={{ transition: "stroke 0.2s" }} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center — stacked card with image */}
          <div style={{ position: "relative" }}>
            {/* Stacked card effect */}
            <div style={{ position: "absolute", top: "-10px", left: "10px", right: "-10px", bottom: "10px", background: "var(--border)", borderRadius: "28px", opacity: 0.5 }} />
            <div style={{ position: "absolute", top: "-5px", left: "5px", right: "-5px", bottom: "5px", background: "var(--card-bg)", borderRadius: "28px", opacity: 0.75 }} />

            {/* Main card */}
            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", aspectRatio: "3/4" }}>
              {featured.map((item, i) => (
                <div key={i} style={{
                  position: "absolute", inset: 0,
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 0.6s ease",
                }}>
                  <Image src={item.img} alt={item.title} fill sizes="38vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
              {/* Category pill */}
              <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 1 }}>
                <span style={{
                  fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 500,
                  background: "rgba(250,247,240,0.92)", backdropFilter: "blur(8px)",
                  color: "var(--dark)", padding: "6px 18px", borderRadius: "50px",
                  border: "1px solid var(--border)",
                }}>
                  {p.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right — description + CTA */}
          <div>
            <p style={{
              fontFamily: "var(--sans)", fontSize: "clamp(15px,1.4vw,17px)",
              lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "36px",
            }}>
              {p.desc}
            </p>
            <Link href={p.href} className="btn btn-dark">
              Discover Product →
            </Link>
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "52px" }}>
          {featured.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? "28px" : "8px", height: "8px",
              borderRadius: "50px", border: "none", cursor: "pointer",
              background: i === current ? "var(--dark)" : "var(--border)",
              transition: "all 0.3s ease", padding: 0,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
