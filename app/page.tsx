import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";

const categories = [
  { name: "Cashews",    tag: "Premium Grade",     desc: "Buttery whole kernels. W240, W320 and jumbo grades.",          img: "/images/products/cashew-3.jpg",   href: "/products?cat=cashews" },
  { name: "Almonds",    tag: "California & Local", desc: "Natural, blanched, sliced and roasted varieties.",            img: "/images/products/almond-2.jpg",   href: "/products?cat=almonds" },
  { name: "Hazelnuts",  tag: "Turkish & Italian",  desc: "Premium whole and blanched hazelnuts. Raw or roasted.",       img: "/images/products/hazelnut-4.jpg", href: "/products?cat=hazelnuts" },
  { name: "Pecans",     tag: "Texas & Georgia",    desc: "Large whole pecan halves. Ideal for bakery and gifting.",     img: "/images/products/pecan-1.jpg",    href: "/products?cat=pecans" },
  { name: "Coffee Nuts",tag: "Artisan Roasts",     desc: "Coffee-roasted and flavoured nut blends for retail and café.", img: "/images/products/coffee-3.jpg",  href: "/products?cat=coffee-nuts" },
  { name: "Mixed Nuts", tag: "Curated Blends",     desc: "Premium custom mixes of cashews, almonds and hazelnuts.",     img: "/images/products/almond-8.jpg",   href: "/products?cat=mixed-nuts" },
];

const featured = [
  { name: "Jumbo Cashews W240",  cat: "Cashews",   img: "/images/products/cashew-2.jpg",   href: "/products" },
  { name: "California Almonds",  cat: "Almonds",   img: "/images/products/almond-4.jpg",   href: "/products" },
  { name: "Premium Hazelnuts",   cat: "Hazelnuts", img: "/images/products/hazelnut-2.jpg", href: "/products" },
];

const partners = [
  "Carrefour UAE","Lulu Hypermarket","Spinneys","Waitrose UAE",
  "Choithrams","Nesto Hypermarket","Union Coop","Grandiose",
  "Al Maya Group","Viva Supermarket",
];

const stats = [
  { value: 49,  suffix: "+", label: "Years of Excellence" },
  { value: 27,  suffix: "+", label: "Product Lines" },
  { value: 500, suffix: "+", label: "Business Partners" },
  { value: 7,   suffix: "",  label: "Product Categories" },
];

const CONTAINER: React.CSSProperties = { maxWidth: "1400px", margin: "0 auto" };
const PAD_X: React.CSSProperties = { paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" };

function CategoryCard({ cat, className, style }: { cat: typeof categories[0]; className?: string; style?: React.CSSProperties }) {
  return (
    <Link
      href={cat.href}
      className={`card group relative block ${className ?? ""}`}
      style={{ overflow: "hidden", display: "block", ...style }}
    >
      <Image
        src={cat.img} alt={cat.name} fill
        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        style={{ objectFit: "cover", borderRadius: "var(--radius-card)" }}
        className="transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: "linear-gradient(to top, rgba(10,7,2,0.88) 0%, rgba(10,7,2,0.30) 55%, rgba(10,7,2,0.05) 100%)",
          borderRadius: "var(--radius-card)",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end" style={{ padding: "clamp(16px,3vw,28px)", borderRadius: "var(--radius-card)" }}>
        <span className="tag mb-2 self-start" style={{ color: "var(--gold-mid)", borderColor: "rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.12)" }}>
          {cat.tag}
        </span>
        <h3
          className="font-normal mb-1.5 leading-none text-white"
          style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
        >
          {cat.name}
        </h3>
        <p className="leading-relaxed mb-2 max-w-xs hidden sm:block" style={{ fontFamily: "var(--sans)", fontSize: "12px", color: "rgba(255,255,255,0.50)" }}>
          {cat.desc}
        </p>
        <span className="discover-link" style={{ fontSize: "10px", color: "var(--gold-mid)" }}>Explore</span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* 1 ── HERO */}
      <HeroSection />

      {/* 2 ── WE SUPPLY ticker */}
      <section
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          height: "64px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ ...CONTAINER, ...PAD_X, display: "flex", alignItems: "center", gap: "1.5rem", width: "100%" }}>
          <p
            className="flex-shrink-0"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "8px",
              fontWeight: 600,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            We Supply
          </p>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <div className="marquee-track gap-0">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "11px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    paddingRight: "2.5rem",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── FEATURED PRODUCTS */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div style={{ ...CONTAINER, ...PAD_X }}>
          <AnimatedSection style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(32px, 5vw, 56px)" }}>
            <div>
              <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>Featured Products</span>
              <h2
                className="font-normal leading-none"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  color: "var(--text)",
                }}
              >
                The finest in<br />
                <em className="gold-text not-italic">every category</em>
              </h2>
            </div>
            <Link href="/products" className="discover-link hidden md:inline-flex" style={{ marginBottom: "4px" }}>
              View All
            </Link>
          </AnimatedSection>

          <div className="grid-featured">
            {featured.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 80}>
                <Link href={p.href} className="card group flex flex-col">
                  <div className="card-img" style={{ aspectRatio: "1 / 1" }}>
                    <Image
                      src={p.img} alt={p.name} fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ background: "rgba(26,17,8,0.12)", borderRadius: "inherit" }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="tag">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div style={{ padding: "clamp(16px,3vw,28px)", flex: 1, background: "var(--bg-card)" }}>
                    <p
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.32em",
                        textTransform: "uppercase",
                        color: "var(--text-faint)",
                        marginBottom: "8px",
                      }}
                    >
                      {p.cat}
                    </p>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1rem, 2vw, 1.1rem)", lineHeight: "1.3", color: "var(--text)" }}>
                      {p.name}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="md:hidden" style={{ marginTop: "32px", textAlign: "center" }}>
            <Link href="/products" className="btn btn-outline-gold text-[10px] tracking-[0.18em]">
              View All Products
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 ── PARTNERSHIP TABS */}
      <PartnerSection />

      {/* 5 ── PRODUCT CATEGORIES */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div style={{ ...CONTAINER, ...PAD_X }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 64px)" }}>
            <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>Our Range</span>
            <h2
              className="font-normal"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "var(--text)",
              }}
            >
              Seven categories.<br />
              <em className="gold-text not-italic">Endless variety.</em>
            </h2>
          </AnimatedSection>

          {/* Asymmetric top row: hero tile (60%) + 2 stacked (40%) */}
          <div className="grid-cat-top">
            <AnimatedSection delay={0}>
              <CategoryCard cat={categories[0]} className="cat-tile-hero" />
            </AnimatedSection>
            <div className="cat-side-stack">
              <AnimatedSection delay={80}>
                <CategoryCard cat={categories[1]} className="cat-tile-small" />
              </AnimatedSection>
              <AnimatedSection delay={160}>
                <CategoryCard cat={categories[2]} className="cat-tile-small" />
              </AnimatedSection>
            </div>
          </div>

          {/* Bottom row: 3 equal tiles */}
          <div className="grid-cat-bottom">
            {categories.slice(3).map((cat, i) => (
              <AnimatedSection key={cat.name} delay={(i + 3) * 80}>
                <CategoryCard cat={cat} className="cat-tile-bot" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── HERITAGE */}
      <section className="section-pad" style={{ background: "var(--bg-2)" }}>
        <div style={{ ...CONTAINER, ...PAD_X }}>
          <div className="grid-heritage">

            {/* Image — hidden on mobile to keep layout clean */}
            <AnimatedSection className="hidden lg:block">
              <div style={{ position: "relative" }}>
                <div className="img-zoom" style={{ aspectRatio: "3/4", borderRadius: "var(--radius-card)", overflow: "hidden" }}>
                  <Image
                    src="/images/products/almond-6.jpg" alt="Heritage"
                    fill sizes="50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="absolute"
                  style={{
                    bottom: "-24px",
                    right: "-24px",
                    padding: "28px 36px",
                    background: "var(--gold)",
                    borderRadius: "var(--radius-card)",
                    boxShadow: "0 16px 40px rgba(139,105,20,0.25)",
                  }}
                >
                  <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(40px,5vw,64px)", fontWeight: 400, lineHeight: 1, color: "#fff" }}>1975</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", marginTop: "6px", color: "rgba(255,255,255,0.7)" }}>Established</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              {/* Mobile-only year pill */}
              <div className="flex items-center gap-3 mb-6 lg:hidden">
                <span
                  className="btn btn-gold"
                  style={{ fontSize: "11px", letterSpacing: "0.12em", padding: "0.5rem 1.25rem" }}
                >
                  Est. 1975
                </span>
              </div>

              <span className="section-label" style={{ display: "block", marginBottom: "clamp(16px,3vw,28px)" }}>Our Story</span>
              <h2
                className="font-normal"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                  lineHeight: "1.02",
                  color: "var(--text)",
                  marginBottom: "clamp(20px,3vw,32px)",
                }}
              >
                Five decades of<br />
                <em className="gold-text not-italic">premium quality</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "clamp(28px,4vw,40px)" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "clamp(15px,2vw,18px)", lineHeight: "1.8", color: "var(--text-muted)" }}>
                  Founded in 1975 in the United Arab Emirates, Al Mahmasani Roasteries has built a reputation for supplying the finest nuts, dried fruits and snack products to the region&apos;s most discerning retailers, hotels and restaurants.
                </p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "clamp(15px,2vw,18px)", lineHeight: "1.8", color: "var(--text-muted)" }}>
                  From careful sourcing across the world&apos;s premium growing regions to exacting quality standards and consistently reliable delivery — we remain true to the values our founders built this business on nearly fifty years ago.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link href="/about" className="btn btn-gold text-[10px] tracking-[0.18em]">
                  Our Heritage
                </Link>
                <Link href="/contact" className="btn btn-outline-gold text-[10px] tracking-[0.18em]">
                  Work With Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 7 ── STATS */}
      <section
        className="section-pad-md"
        style={{
          background: "var(--bg-3)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ ...CONTAINER, ...PAD_X }}>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
            style={{ "--tw-divide-color": "var(--border)" } as React.CSSProperties}
          >
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100} style={{ padding: "clamp(20px,4vw,40px)", textAlign: "center" }}>
                <p
                  className="font-normal leading-none"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                    color: "var(--gold)",
                    marginBottom: "10px",
                  }}
                >
                  <Counter end={s.value} />{s.suffix}
                </p>
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "clamp(10px,1.5vw,13px)",
                    fontWeight: 600,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {s.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8 ── WHOLESALE CTA */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/almond-8.jpg" alt="Wholesale enquiry" fill
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.4 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(255,255,255,0.97) 0%, rgba(250,250,250,0.92) 50%, rgba(245,245,245,0.70) 100%)" }}
          />
        </div>

        <div className="cta-inner relative z-10" style={{ display: "flex", justifyContent: "center" }}>
          <AnimatedSection style={{ maxWidth: "760px", textAlign: "center" }}>
            <span className="section-label" style={{ display: "block", marginBottom: "20px" }}>Wholesale Enquiries</span>
            <h2
              className="font-normal"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
                lineHeight: "1.02",
                color: "var(--text)",
                marginBottom: "20px",
              }}
            >
              Ready to stock the<br />
              best in the region?
            </h2>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "clamp(15px,2vw,18px)",
                lineHeight: "1.8",
                color: "var(--text-muted)",
                maxWidth: "520px",
                margin: "0 auto",
                marginBottom: "clamp(40px,6vw,64px)",
              }}
            >
              We supply supermarkets, hypermarkets, hotels, restaurants, cafés and distributors across the UAE with competitive wholesale pricing and reliable logistics.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <a
                href="https://wa.me/971504622865?text=Hello%20Al%20Mahmasani%2C%20I%27d%20like%20to%20enquire%20about%20wholesale%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold text-[10px] tracking-[0.18em]"
              >
                WhatsApp Us Now
              </a>
              <Link href="/contact" className="btn btn-outline-gold text-[10px] tracking-[0.18em]">
                Send an Enquiry
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
