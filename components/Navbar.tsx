"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const productCategories = [
  { label: "Chocolate-Coated Nuts", href: "/products#chocolate", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_af6ed3af6ed3af6e.png" },
  { label: "Hazelnut Collection",   href: "/products#hazelnut",  img: "/Images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_l339rul339rul339.png" },
  { label: "Cashew Collection",     href: "/products#cashew",    img: "/Images/Catalogue Photos/Cashew/Gemini_Generated_Image_6nmgl56nmgl56nmg.png" },
  { label: "Coffee Collection",     href: "/products#coffee",    img: "/Images/Catalogue Photos/Cofee/Gemini_Generated_Image_2e2kw72e2kw72e2k.png" },
  { label: "Fruit Collection",      href: "/products#fruit",     img: "/Images/Pistachio Roasted.jpg.jpeg" },
  { label: "Savoury Collection",    href: "/products#savoury",   img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 1.png" },
  { label: "Mixed Nuts",            href: "/products#mixed",     img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Almond 1.png" },
];

const aboutLinks = [
  { label: "Our Story",  href: "/about#story" },
  { label: "Quality",    href: "/about#quality" },
  { label: "Sourcing",   href: "/about#sourcing" },
  { label: "Heritage",   href: "/about#heritage" },
  { label: "Contact Us", href: "/contact" },
];

type Panel = "products" | "about" | null;

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [panel, setPanel]           = useState<Panel>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobProd, setMobProd]       = useState(false);
  const [mobAbout, setMobAbout]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always treat as hero (transparent + white text) until scrolled — the hero top gradient guarantees contrast
  const isHero = !scrolled;
  const close = () => setPanel(null);

  return (
    <>
      {panel && (
        <div onClick={close} style={{ position: "fixed", inset: 0, zIndex: 39 }} />
      )}

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        background: scrolled || panel ? "rgba(250,247,240,0.97)" : "transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(28,18,8,0.08)" : "none",
        backdropFilter: scrolled || panel ? "blur(20px)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}>
        {/* Nav bar */}
        <div style={{
          maxWidth: "1400px", margin: "0 auto",
          padding: `${scrolled ? "12px" : "18px"} clamp(20px,5vw,80px)`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "padding 0.3s ease",
        }}>
          {/* Logo */}
          <Link href="/" onClick={close} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ position: "relative", width: "42px", height: "42px", borderRadius: "10px", overflow: "hidden", flexShrink: 0 }}>
              <Image src="/Images/AMR Logo-01.jpg.jpeg" alt="Al Mahmasani" fill sizes="42px"
                style={{ objectFit: "contain", filter: isHero ? "brightness(0) invert(1)" : "none", transition: "filter 0.3s" }} />
            </div>
            <div>
              <p style={{ fontFamily: "var(--sans)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: isHero ? "white" : "var(--dark)", lineHeight: 1.2, transition: "color 0.3s" }}>Al Mahmasani</p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: isHero ? "rgba(255,255,255,0.55)" : "var(--text-muted)", transition: "color 0.3s" }}>Roasteries</p>
            </div>
          </Link>

          {/* Desktop nav pill */}
          <nav className="hidden md:flex" style={{
            alignItems: "center", gap: "2px",
            border: `1px solid ${isHero ? "rgba(255,255,255,0.22)" : "var(--border)"}`,
            borderRadius: "50px", padding: "5px 6px",
            background: isHero ? "rgba(255,255,255,0.08)" : "var(--cream)",
            backdropFilter: "blur(12px)", transition: "all 0.3s ease",
          }}>
            {[
              { label: "Home",     href: "/",        drop: null as Panel },
              { label: "Products", href: null,       drop: "products" as Panel },
              { label: "About",    href: null,       drop: "about" as Panel },
              { label: "Contact",  href: "/contact", drop: null as Panel },
            ].map((item) => {
              const active = panel === item.drop && item.drop !== null;
              const s: React.CSSProperties = {
                display: "flex", alignItems: "center", gap: "4px",
                fontFamily: "var(--sans)", fontSize: "14px", fontWeight: 400,
                padding: "9px 18px", borderRadius: "50px", cursor: "pointer",
                whiteSpace: "nowrap", textDecoration: "none", border: "none",
                background: active ? "var(--white)" : "transparent",
                color: isHero ? (active ? "var(--dark)" : "rgba(255,255,255,0.85)") : "var(--text)",
                transition: "background 0.2s, color 0.2s",
              };
              return item.drop ? (
                <button key={item.label} style={s} onMouseEnter={() => setPanel(item.drop)}>
                  {item.label}
                  <ChevronDown size={12} style={{ transition: "transform 0.2s", transform: active ? "rotate(180deg)" : "none" }} />
                </button>
              ) : (
                <Link key={item.label} href={item.href!} style={s} onClick={close} onMouseEnter={close}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
              className="hidden md:inline-flex btn btn-gold" style={{ fontSize: "13px", padding: "12px 22px" }}>
              Get a Quote →
            </a>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: isHero ? "white" : "var(--dark)", padding: "4px" }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Products dropdown — full-width, child of header ── */}
        <div onMouseLeave={close} style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "white", boxShadow: "0 16px 48px rgba(28,18,8,0.12)",
          borderRadius: "0 0 20px 20px",
          opacity: panel === "products" ? 1 : 0,
          pointerEvents: panel === "products" ? "all" : "none",
          transform: panel === "products" ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px clamp(20px,5vw,80px) 28px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "10px", marginBottom: "24px" }}>
              {productCategories.map((cat) => (
                <Link key={cat.label} href={cat.href} onClick={close} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#F5EDE0", borderRadius: "12px", overflow: "hidden", transition: "transform 0.2s, box-shadow 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(28,18,8,0.10)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
                    <div style={{ position: "relative", height: "110px" }}>
                      <Image src={cat.img} alt={cat.label} fill sizes="200px" style={{ objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "10px 12px 12px" }}>
                      <p style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 500, color: "var(--dark)", lineHeight: 1.3 }}>{cat.label}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <Link href="/products" onClick={close} className="btn btn-gold" style={{ fontSize: "13px", padding: "11px 32px" }}>
                Show all products →
              </Link>
            </div>
          </div>
        </div>

        {/* ── About dropdown ── */}
        <div onMouseLeave={close} style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "white", boxShadow: "0 16px 48px rgba(28,18,8,0.12)",
          borderRadius: "0 0 20px 20px",
          opacity: panel === "about" ? 1 : 0,
          pointerEvents: panel === "about" ? "all" : "none",
          transform: panel === "about" ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px clamp(20px,5vw,80px) 32px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              {aboutLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={close} style={{
                  flex: 1, display: "block", padding: "16px 20px",
                  background: "#F5EDE0", borderRadius: "12px", textDecoration: "none",
                  fontFamily: "var(--sans)", fontSize: "14px", fontWeight: 500,
                  color: "var(--dark)", transition: "background 0.2s",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#EDE0CC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#F5EDE0"; }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div className="md:hidden" style={{ position: "fixed", inset: 0, zIndex: 50, pointerEvents: mobileOpen ? "all" : "none" }}>
        <div onClick={() => setMobileOpen(false)}
          style={{ position: "absolute", inset: 0, background: "rgba(28,18,8,0.4)", opacity: mobileOpen ? 1 : 0, transition: "opacity 0.3s" }} />
        <div style={{
          position: "absolute", top: 0, right: 0, bottom: 0, width: "280px",
          background: "var(--cream)", borderRadius: "16px 0 0 16px",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
          display: "flex", flexDirection: "column", overflowY: "auto",
        }}>
          <div style={{ padding: "20px", display: "flex", justifyContent: "flex-end" }}>
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
              <X size={20} />
            </button>
          </div>
          <nav style={{ flex: 1, padding: "0 24px 24px" }}>
            {[{ href: "/", label: "Home" }, { href: "/contact", label: "Contact" }].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "14px 0", fontFamily: "var(--sans)", fontSize: "15px", color: "var(--dark)", borderBottom: "1px solid var(--border)" }}>
                {l.label}
              </Link>
            ))}
            <button onClick={() => setMobProd(!mobProd)}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "14px 0", fontFamily: "var(--sans)", fontSize: "15px", color: "var(--dark)", background: "none", border: "none", borderBottom: "1px solid var(--border)", cursor: "pointer" }}>
              Products <ChevronDown size={14} style={{ transform: mobProd ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            {mobProd && productCategories.map((c) => (
              <Link key={c.label} href={c.href} onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "10px 12px", fontFamily: "var(--sans)", fontSize: "13px", color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>
                {c.label}
              </Link>
            ))}
            <button onClick={() => setMobAbout(!mobAbout)}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "14px 0", fontFamily: "var(--sans)", fontSize: "15px", color: "var(--dark)", background: "none", border: "none", borderBottom: "1px solid var(--border)", cursor: "pointer" }}>
              About <ChevronDown size={14} style={{ transform: mobAbout ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            {mobAbout && aboutLinks.map((c) => (
              <Link key={c.label} href={c.href} onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "10px 12px", fontFamily: "var(--sans)", fontSize: "13px", color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>
                {c.label}
              </Link>
            ))}
          </nav>
          <div style={{ padding: "24px" }}>
            <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
              className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
              Get a Quote →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
