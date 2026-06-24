import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSlideshow from "@/components/HeroSlideshow";

/* ── Category grid data ── */
const categories = [
  { label: "Chocolate-Coated Nuts", href: "/products#chocolate", img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_af6ed3af6ed3af6e.png" },
  { label: "Hazelnut Collection",   href: "/products#hazelnut",  img: "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_l339rul339rul339.png" },
  { label: "Cashew Collection",     href: "/products#cashew",    img: "/images/Catalogue Photos/Cashew/Gemini_Generated_Image_6nmgl56nmgl56nmg.png" },
  { label: "Coffee Collection",     href: "/products#coffee",    img: "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_2e2kw72e2kw72e2k.png" },
  { label: "Fruit Collection",      href: "/products#fruit",     img: "/images/Pistachio Roasted.jpg.jpeg" },
  { label: "Savoury Collection",    href: "/products#savoury",   img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 1.png" },
];

const stats = [
  { value: "50+", label: "Years of Excellence" },
  { value: "200+", label: "Premium SKUs" },
  { value: "1000+", label: "Wholesale Partners" },
  { value: "7", label: "Product Categories" },
];

const trustedBrands = [
  "Carrefour", "Lulu Hypermarket", "Spinneys", "Waitrose UAE",
  "Choithrams", "Al Ain Farms", "Nesto", "Union Coop",
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <HeroSlideshow />

      {/* ── 2. ABOUT STRIP ── */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container grid-2">
          <div>
            <p className="eyebrow" style={{ marginBottom: "20px" }}>Our Heritage</p>
            <h2 className="display-lg" style={{ color: "var(--dark)", marginBottom: "24px" }}>
              Roasted to<br />Perfection Since 1975
            </h2>
            <p className="body-lg" style={{ marginBottom: "32px" }}>
              From a single roastery in Sharjah to the UAE&#39;s most trusted wholesale nut supplier. Al Mahmasani combines traditional craftsmanship with modern food science to deliver consistently exceptional products.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/about" className="btn btn-dark">Our Story</Link>
              <Link href="/contact" className="btn btn-outline-dark">Become a Partner</Link>
            </div>
          </div>
          <div className="about-mosaic" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_4w45ud4w45ud4w45.png",
              "/images/Catalogue Photos/Cashew/Gemini_Generated_Image_fd2qw1fd2qw1fd2q.png",
              "/images/Almond Unsalted.jpg.jpeg",
              "/images/cashew roasted.jpg.jpeg",
            ].map((img, i) => (
              <div key={i} style={{ position: "relative", height: i % 2 === 0 ? "200px" : "160px", borderRadius: "var(--radius-card)", overflow: "hidden", alignSelf: i % 2 === 0 ? "flex-start" : "flex-end" }}>
                <Image src={img} alt="Product" fill sizes="260px" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. STATS + TRUSTED BY ── */}
      <section style={{ background: "var(--dark)", padding: "clamp(64px,8vw,100px) 0" }}>
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: "52px" }}>By the Numbers</p>

          {/* 4-stat row with dividers */}
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center", padding: "0 32px 0",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.10)" : "none",
              }}>
                <p style={{ fontFamily: "var(--serif)", fontWeight: 700, lineHeight: 1, fontSize: "clamp(2.8rem,4.5vw,4rem)", color: "var(--gold)", marginBottom: "12px" }}>
                  {s.value}
                </p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)", margin: "52px 0 40px" }} />

          {/* Trusted By */}
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: "24px" }}>Trusted By</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {trustedBrands.map((b) => (
              <span key={b} style={{
                fontFamily: "var(--sans)", fontSize: "13px", fontWeight: 500,
                color: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)", borderRadius: "50px",
                padding: "9px 24px", letterSpacing: "0.03em",
              }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FEATURED PRODUCTS (client component for IntersectionObserver) ── */}
      <FeaturedProducts />

      {/* ── 6. PARTNER CTA ── */}
      <section style={{ background: "var(--card-bg)", padding: "clamp(80px,10vw,120px) 0" }}>
        <div className="container">
          <div className="cta-split" style={{
            background: "var(--dark)", borderRadius: "32px",
            padding: "clamp(40px,5vw,88px) clamp(28px,5vw,80px)",
          }}>
            {/* Left */}
            <div>
              <p className="eyebrow" style={{ marginBottom: "20px" }}>Wholesale Partnerships</p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: "0" }}>
                Ready to Stock the Finest Nuts in the UAE?
              </h2>
            </div>
            {/* Right */}
            <div>
              <p style={{ fontFamily: "var(--sans)", fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "36px" }}>
                Flexible MOQs, competitive wholesale pricing, and reliable delivery across the UAE. Join 1,000+ partners who trust Al Mahmasani.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                  Get a Quote on WhatsApp →
                </a>
                <Link href="/contact" className="btn btn-outline-white">Send an Enquiry</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CATEGORY GRID ── */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <p className="eyebrow" style={{ marginBottom: "16px" }}>All Collections</p>
            <h2 className="display-lg" style={{ color: "var(--dark)" }}>Shop by Category</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px" }}>
            {categories.map((cat) => (
              <Link key={cat.label} href={cat.href}>
                <div className="cat-card" style={{ height: "320px" }}>
                  <Image src={cat.img} alt={cat.label} fill sizes="400px" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,18,8,0.80) 0%, rgba(28,18,8,0.2) 60%, transparent 100%)" }} />
                  <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", color: "white", fontWeight: 400 }}>{cat.label}</p>
                    <p style={{ fontFamily: "var(--sans)", fontSize: "12px", color: "var(--gold)", marginTop: "6px", letterSpacing: "0.08em" }}>View Collection →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/products" className="btn btn-dark">View All Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
