import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";

/* ─── product categories ─── */
const categories = [
  {
    name: "Cashews",
    tag: "Premium Grade",
    desc: "Buttery, whole kernels from Vietnam & India. W240, W320 and jumbo grades.",
    img: "/images/cashew.jpg",
    href: "/products?cat=cashews",
  },
  {
    name: "Almonds",
    tag: "California & Local",
    desc: "Natural, blanched, sliced and roasted varieties. Non-pareil and Carmel.",
    img: "/images/almond.jpg",
    href: "/products?cat=almonds",
  },
  {
    name: "Pistachios",
    tag: "Iranian & Turkish",
    desc: "Long, round and jumbo grades. Raw, roasted, salted and flavoured.",
    img: "/images/pistachio.jpg",
    href: "/products?cat=pistachios",
  },
  {
    name: "Peanuts",
    tag: "Wholesale Ready",
    desc: "Roasted, salted and raw peanuts in bulk. Virginia, Spanish and runner varieties.",
    img: "/images/peanut.jpg",
    href: "/products?cat=peanuts",
  },
  {
    name: "Mixed Nuts",
    tag: "Curated Blends",
    desc: "Premium custom mixes of cashews, almonds, pistachios and walnuts.",
    img: "/images/cashew.jpg",
    href: "/products?cat=mixed-nuts",
  },
  {
    name: "Dried Fruits",
    tag: "Sun-Dried",
    desc: "Apricots, cranberries, mango, raisins and tropical selections.",
    img: "/images/almond.jpg",
    href: "/products?cat=dried-fruits",
  },
];

/* ─── featured products (horizontal carousel set) ─── */
const featured = [
  { name: "Jumbo Cashews W240", cat: "Cashews", img: "/images/cashew.jpg", href: "/products" },
  { name: "Iranian Pistachios", cat: "Pistachios", img: "/images/pistachio.jpg", href: "/products" },
  { name: "California Almonds", cat: "Almonds", img: "/images/almond.jpg", href: "/products" },
  { name: "Deluxe Mixed Nuts", cat: "Mixed Nuts", img: "/images/cashew.jpg", href: "/products" },
  { name: "Dried Apricots", cat: "Dried Fruits", img: "/images/almond.jpg", href: "/products" },
  { name: "Salted Peanuts", cat: "Peanuts", img: "/images/peanut.jpg", href: "/products" },
];

/* ─── retail partners (text-only list, displayed as marquee) ─── */
const partners = [
  "Carrefour UAE", "Lulu Hypermarket", "Spinneys", "Waitrose UAE",
  "Choithrams", "Nesto Hypermarket", "Union Coop", "Grandiose",
  "Al Maya Group", "Viva Supermarket",
];

/* ─── stats ─── */
const stats = [
  { value: 49, suffix: "+", label: "Years of Excellence" },
  { value: 27, suffix: "+", label: "Product Lines" },
  { value: 500, suffix: "+", label: "Business Partners" },
  { value: 7, suffix: "", label: "Product Categories" },
];

export default function Home() {
  return (
    <>
      {/* 1 ── HERO ─────────────────────────────────────────────── */}
      <HeroSection />

      {/* 2 ── WE SUPPLY — partner marquee ──────────────────────── */}
      <section className="bg-[#080808] border-y border-[rgba(201,168,76,0.10)] py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-8">
          <p
            className="flex-shrink-0 text-[9px] font-semibold tracking-[0.4em] uppercase text-[#c9a84c]"
            style={{ fontFamily: "var(--sans)" }}
          >
            We Supply
          </p>
          <div className="flex-1 overflow-hidden">
            <div className="marquee-track gap-12">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className="text-white/30 text-[10px] tracking-[0.3em] uppercase hover:text-white/60 transition-colors duration-300"
                  style={{ fontFamily: "var(--sans)", paddingRight: "3rem" }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── FEATURED PRODUCTS — MB-style scroll + numbered pagination ── */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="flex items-end justify-between mb-14">
            <div>
              <span className="section-label block mb-4">Featured Products</span>
              <h2
                className="text-white font-light leading-none"
                style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              >
                The finest in<br />
                <em className="gold-text not-italic">every category</em>
              </h2>
            </div>
            <Link href="/products" className="discover-link hidden md:inline-flex mb-1">
              View All
            </Link>
          </AnimatedSection>

          {/* Scrollable grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-l border-[rgba(201,168,76,0.10)]"
          >
            {featured.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 60}>
                <Link href={p.href} className="prod-card border-r border-b border-[rgba(201,168,76,0.10)] group">
                  <div className="prod-card-img">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width:768px) 50vw, 17vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="prod-card-tag">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0a0a0a] group-hover:bg-[#0d0d0d] transition-colors duration-300">
                    <p className="text-white/30 text-[8px] tracking-[0.35em] uppercase mb-1.5"
                      style={{ fontFamily: "var(--sans)" }}>{p.cat}</p>
                    <p className="text-white text-sm font-light leading-snug"
                      style={{ fontFamily: "var(--serif)" }}>{p.name}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center md:hidden">
            <Link href="/products" className="btn btn-outline-gold text-[10px] tracking-[0.22em]">
              View All Products
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 ── PARTNERSHIP TABS — Modern Bakery signature section ── */}
      <PartnerSection />

      {/* 5 ── PRODUCT CATEGORIES — 6-item grid ─────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label block mb-4">Our Range</span>
            <h2
              className="text-white font-light"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Seven categories.<br />
              <em className="gold-text not-italic">Endless variety.</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.08)]">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.name} delay={i * 80}>
                <Link
                  href={cat.href}
                  className="group relative block overflow-hidden bg-[#080808]"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/70 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="prod-card-tag mb-2 self-start">{cat.tag}</span>
                    <h3
                      className="text-white text-2xl font-light mb-1.5 leading-none"
                      style={{ fontFamily: "var(--serif)" }}
                    >
                      {cat.name}
                    </h3>
                    <p
                      className="text-white/45 text-[11px] leading-relaxed mb-3 max-w-xs"
                      style={{ fontFamily: "var(--sans)" }}
                    >
                      {cat.desc}
                    </p>
                    <span className="discover-link text-[10px]">Explore</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── HERITAGE — two-column editorial ──────────────────── */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image column */}
            <AnimatedSection>
              <div className="relative">
                <div
                  className="img-zoom"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src="/images/pistachio.jpg"
                    alt="Heritage — premium nuts"
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* floating stat card */}
                <div className="absolute -bottom-6 -right-6 bg-[#c9a84c] px-8 py-6 hidden md:block">
                  <p className="text-black text-4xl font-light leading-none" style={{ fontFamily: "var(--serif)" }}>1975</p>
                  <p className="text-black/60 text-[9px] tracking-[0.35em] uppercase mt-1" style={{ fontFamily: "var(--sans)" }}>Established</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Text column */}
            <AnimatedSection delay={200}>
              <span className="section-label block mb-7">Our Story</span>
              <h2
                className="text-white font-light leading-[1.02] mb-8"
                style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
              >
                Five decades of<br />
                <em className="gold-text not-italic">premium quality</em>
              </h2>
              <div className="space-y-5">
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "var(--sans)" }}>
                  Founded in 1975 in the United Arab Emirates, Al Mahmasani Roasteries has built a reputation for supplying the finest nuts, dried fruits and snack products to the region&apos;s most discerning retailers, hotels and restaurants.
                </p>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "var(--sans)" }}>
                  From our careful sourcing of the world&apos;s premium growing regions to our exacting quality standards and consistently reliable delivery, we remain committed to the values our founders built the business on nearly fifty years ago.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <Link href="/about" className="btn btn-outline-gold text-[10px] tracking-[0.22em]">
                  Our Heritage
                </Link>
                <Link href="/contact" className="btn btn-outline-white text-[10px] tracking-[0.22em]">
                  Work With Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 7 ── STATS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0c0c0c] border-y border-[rgba(201,168,76,0.08)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-[rgba(201,168,76,0.10)]">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100} className="px-8 py-10 text-center">
                <p
                  className="text-[#c9a84c] font-light leading-none mb-2"
                  style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
                >
                  <Counter end={s.value} />{s.suffix}
                </p>
                <p
                  className="text-white/35 text-[9px] tracking-[0.35em] uppercase"
                  style={{ fontFamily: "var(--sans)" }}
                >
                  {s.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8 ── WHOLESALE CTA ─────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cashew.jpg"
            alt="Wholesale enquiry"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
        </div>
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="max-w-2xl">
            <span className="section-label block mb-6">Wholesale Enquiries</span>
            <h2
              className="text-white font-light leading-[1.02] mb-6"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Ready to stock the<br />
              <em className="gold-text not-italic">best in the region?</em>
            </h2>
            <p
              className="text-white/45 text-sm leading-relaxed mb-10 max-w-xl"
              style={{ fontFamily: "var(--sans)" }}
            >
              We supply supermarkets, hypermarkets, hotels, restaurants, cafés and distributors across the UAE with competitive wholesale pricing and reliable logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/971504622865?text=Hello%20Al%20Mahmasani%2C%20I%27d%20like%20to%20enquire%20about%20wholesale%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold text-[10px] tracking-[0.22em]"
              >
                WhatsApp Us Now
              </a>
              <Link href="/contact" className="btn btn-outline-white text-[10px] tracking-[0.22em]">
                Send an Enquiry
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
