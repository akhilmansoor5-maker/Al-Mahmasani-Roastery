import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";

const categories = [
  { name: "Cashews",     tag: "Premium Grade",      desc: "Buttery whole kernels. W240, W320 and jumbo grades.",  img: "/images/cashew.jpg",    href: "/products?cat=cashews" },
  { name: "Almonds",     tag: "California & Local",  desc: "Natural, blanched, sliced and roasted varieties.",    img: "/images/almond.jpg",    href: "/products?cat=almonds" },
  { name: "Pistachios",  tag: "Iranian & Turkish",   desc: "Long, round and jumbo grades. Raw or roasted.",       img: "/images/pistachio.jpg", href: "/products?cat=pistachios" },
  { name: "Peanuts",     tag: "Wholesale Ready",     desc: "Roasted, salted and raw in bulk. Multiple origins.",  img: "/images/peanut.jpg",    href: "/products?cat=peanuts" },
  { name: "Mixed Nuts",  tag: "Curated Blends",      desc: "Premium custom mixes of cashews, almonds, pistachios.",img: "/images/cashew.jpg",   href: "/products?cat=mixed-nuts" },
  { name: "Dried Fruits",tag: "Sun-Dried",           desc: "Apricots, cranberries, mango, raisins and more.",    img: "/images/almond.jpg",    href: "/products?cat=dried-fruits" },
];

const featured = [
  { name: "Jumbo Cashews W240", cat: "Cashews",     img: "/images/cashew.jpg",    href: "/products" },
  { name: "Iranian Pistachios", cat: "Pistachios",  img: "/images/pistachio.jpg", href: "/products" },
  { name: "California Almonds", cat: "Almonds",     img: "/images/almond.jpg",    href: "/products" },
  { name: "Deluxe Mixed Nuts",  cat: "Mixed Nuts",  img: "/images/cashew.jpg",    href: "/products" },
  { name: "Dried Apricots",     cat: "Dried Fruits",img: "/images/almond.jpg",    href: "/products" },
  { name: "Salted Peanuts",     cat: "Peanuts",     img: "/images/peanut.jpg",    href: "/products" },
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

export default function Home() {
  return (
    <>
      {/* 1 ── HERO */}
      <HeroSection />

      {/* 2 ── WE SUPPLY ticker */}
      <section
        className="overflow-hidden py-7"
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-8">
          <p
            className="flex-shrink-0 text-[9px] font-semibold tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--sans)", color: "var(--gold)" }}
          >
            We Supply
          </p>
          <div className="flex-1 overflow-hidden">
            <div className="marquee-track gap-0">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className="text-[10px] tracking-[0.28em] uppercase transition-colors duration-300"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "var(--text-faint)",
                    paddingRight: "3rem",
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
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="flex items-end justify-between mb-14">
            <div>
              <span className="section-label block mb-4">Featured Products</span>
              <h2
                className="font-normal leading-none"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  color: "var(--text)",
                }}
              >
                The finest in<br />
                <em className="gold-text not-italic">every category</em>
              </h2>
            </div>
            <Link href="/products" className="discover-link hidden md:inline-flex mb-1">
              View All
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {featured.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 60}>
                <Link href={p.href} className="card group flex flex-col">
                  <div className="card-img" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={p.img} alt={p.name} fill
                      sizes="(max-width:768px) 50vw, 17vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        background: "rgba(26,17,8,0.12)",
                        borderRadius: "inherit",
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="tag">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div className="p-4 flex-1" style={{ background: "var(--bg-card)" }}>
                    <p
                      className="text-[8px] font-semibold tracking-[0.32em] uppercase mb-1.5"
                      style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}
                    >
                      {p.cat}
                    </p>
                    <p
                      className="text-sm leading-snug"
                      style={{ fontFamily: "var(--serif)", color: "var(--text)" }}
                    >
                      {p.name}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center md:hidden">
            <Link href="/products" className="btn btn-outline-gold text-[10px] tracking-[0.18em]">
              View All Products
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 ── PARTNERSHIP TABS */}
      <PartnerSection />

      {/* 5 ── PRODUCT CATEGORIES */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label block mb-4">Our Range</span>
            <h2
              className="font-normal"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                color: "var(--text)",
              }}
            >
              Seven categories.<br />
              <em className="gold-text not-italic">Endless variety.</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.name} delay={i * 80}>
                <Link
                  href={cat.href}
                  className="card group relative block"
                  style={{ aspectRatio: "4/3" }}
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
                      background:
                        "linear-gradient(to top, rgba(10,7,2,0.88) 0%, rgba(10,7,2,0.30) 55%, rgba(10,7,2,0.05) 100%)",
                      borderRadius: "var(--radius-card)",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ borderRadius: "var(--radius-card)" }}>
                    <span className="tag mb-2 self-start" style={{ color: "var(--gold-mid)", borderColor: "rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.12)" }}>
                      {cat.tag}
                    </span>
                    <h3
                      className="text-2xl font-normal mb-1.5 leading-none text-white"
                      style={{ fontFamily: "var(--serif)" }}
                    >
                      {cat.name}
                    </h3>
                    <p
                      className="text-[11px] leading-relaxed mb-3 max-w-xs"
                      style={{ fontFamily: "var(--sans)", color: "rgba(255,255,255,0.50)" }}
                    >
                      {cat.desc}
                    </p>
                    <span className="discover-link text-[10px]" style={{ color: "var(--gold-mid)" }}>Explore</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── HERITAGE */}
      <section className="py-28" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <AnimatedSection>
              <div className="relative">
                <div className="img-zoom" style={{ aspectRatio: "3/4", borderRadius: "var(--radius-card)", overflow: "hidden" }}>
                  <Image
                    src="/images/pistachio.jpg" alt="Heritage"
                    fill sizes="(max-width:1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* floating year badge */}
                <div
                  className="absolute -bottom-6 -right-6 px-8 py-6 hidden md:block"
                  style={{
                    background: "var(--gold)",
                    borderRadius: "var(--radius-card)",
                    boxShadow: "0 16px 40px rgba(139,105,20,0.25)",
                  }}
                >
                  <p className="text-4xl font-normal leading-none text-white" style={{ fontFamily: "var(--serif)" }}>1975</p>
                  <p className="text-[9px] font-semibold tracking-[0.35em] uppercase mt-1 text-white/70" style={{ fontFamily: "var(--sans)" }}>Established</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <span className="section-label block mb-7">Our Story</span>
              <h2
                className="font-normal leading-[1.02] mb-8"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                  color: "var(--text)",
                }}
              >
                Five decades of<br />
                <em className="gold-text not-italic">premium quality</em>
              </h2>
              <div className="space-y-5">
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
                  Founded in 1975 in the United Arab Emirates, Al Mahmasani Roasteries has built a reputation for supplying the finest nuts, dried fruits and snack products to the region&apos;s most discerning retailers, hotels and restaurants.
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
                  From careful sourcing across the world&apos;s premium growing regions to exacting quality standards and consistently reliable delivery — we remain true to the values our founders built this business on nearly fifty years ago.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
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
        className="py-20"
        style={{
          background: "var(--bg-3)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0"
            style={{ "--tw-divide-color": "var(--border)" } as React.CSSProperties}
          >
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100} className="px-8 py-10 text-center">
                <p
                  className="font-normal leading-none mb-2"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(3rem, 6vw, 4.5rem)",
                    color: "var(--gold)",
                  }}
                >
                  <Counter end={s.value} />{s.suffix}
                </p>
                <p
                  className="text-[9px] font-semibold tracking-[0.32em] uppercase"
                  style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}
                >
                  {s.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8 ── WHOLESALE CTA */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cashew.jpg" alt="Wholesale enquiry" fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(247,242,232,0.97) 0%, rgba(240,232,212,0.90) 45%, rgba(240,232,212,0.65) 100%)" }}
          />
        </div>
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 15% 50%, rgba(139,105,20,0.10) 0%, transparent 55%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="max-w-2xl">
            <span className="section-label block mb-6">Wholesale Enquiries</span>
            <h2
              className="font-normal leading-[1.02] mb-6"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                color: "var(--text)",
              }}
            >
              Ready to stock the<br />
              <em className="gold-text not-italic">best in the region?</em>
            </h2>
            <p
              className="text-sm leading-relaxed mb-10 max-w-xl"
              style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}
            >
              We supply supermarkets, hypermarkets, hotels, restaurants, cafés and distributors across the UAE with competitive wholesale pricing and reliable logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
