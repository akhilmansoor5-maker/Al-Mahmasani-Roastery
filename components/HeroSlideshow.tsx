"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/images/Catalogue Photos/Cashew/Gemini_Generated_Image_6nmgl56nmgl56nmg.png",
  "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_af6ed3af6ed3af6e.png",
  "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_l339rul339rul339.png",
  "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_2e2kw72e2kw72e2k.png",
  "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 1.png",
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", height: "100svh", minHeight: "600px", overflow: "hidden" }}>

      {/* Slides */}
      {slides.map((src, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          opacity: i === current ? 1 : 0,
          transition: "opacity 1.2s ease",
          zIndex: 0,
        }}>
          <Image src={src} alt="" fill priority={i === 0} sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center", transform: i === current ? "scale(1.03)" : "scale(1)", transition: "transform 6s ease" }} />
        </div>
      ))}

      {/* Top gradient so logo/nav is always readable */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to bottom, rgba(20,12,4,0.55) 0%, transparent 100%)", zIndex: 1 }} />

      {/* Bottom gradient */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,12,4,0.80) 0%, rgba(20,12,4,0.25) 50%, transparent 100%)", zIndex: 1 }} />

      {/* Slide dots */}
      <div style={{ position: "absolute", bottom: "clamp(40px,6vh,72px)", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 3 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? "28px" : "8px", height: "8px",
            borderRadius: "50px", border: "none", cursor: "pointer",
            background: i === current ? "var(--gold)" : "rgba(255,255,255,0.4)",
            transition: "all 0.3s ease", padding: 0,
          }} />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content-grid" style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2,
        padding: "0 clamp(24px,5vw,80px) clamp(60px,8vh,100px)",
      }}>
        <div>
          <p className="hero-in-1" style={{ fontFamily: "var(--sans)", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.8)", letterSpacing: "0.06em", marginBottom: "16px" }}>
            Since 1975
          </p>
          <h1 className="hero-in-2" style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "clamp(3rem,7vw,6rem)", lineHeight: 1.05, color: "white", margin: 0 }}>
            The Art of<br />Absolute Nuts.
          </h1>
        </div>
        <div className="hero-in-3" style={{ paddingBottom: "8px" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: "32px", maxWidth: "420px" }}>
            UAE&#39;s trusted roastery, serving more than 500 wholesale partners across the region. From premium nuts and dried fruits to artisan chocolate-coated selections, we offer over 100 carefully crafted products tailored for retail and wholesale businesses.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/products" className="btn btn-gold">Explore Collections →</Link>
            <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">Become a partner</a>
          </div>
        </div>
      </div>
    </section>
  );
}
