import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import { ChevronRight, MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP = "https://wa.me/971504622865";

const marqueeItems = [
  "Premium Cashews", "Roasted Almonds", "Pistachios", "Mixed Nuts",
  "Dried Fruits", "Snack Mixes", "Since 1975", "UAE-Wide Supply",
  "Premium Cashews", "Roasted Almonds", "Pistachios", "Mixed Nuts",
  "Dried Fruits", "Snack Mixes", "Since 1975", "UAE-Wide Supply",
];

const categories = [
  {
    name: "Premium Cashews",
    desc: "Whole roasted cashews sourced from the finest growing regions — buttery, golden, and consistently graded for wholesale excellence.",
    image: "/images/cashew.jpg",
    tag: "W180 · W210 · W240 · W320",
    href: "/products",
  },
  {
    name: "Roasted Almonds",
    desc: "Crisp almonds with a natural richness. Available roasted, unsalted and blanched for retail, food service and bulk supply.",
    image: "/images/almond.jpg",
    tag: "Roasted · Unsalted · Blanched",
    href: "/products",
  },
  {
    name: "Premium Pistachios",
    desc: "Plump, flavourful pistachios roasted to perfection. Among our most distinguished products for luxury retail and gifting.",
    image: "/images/pistachio.jpg",
    tag: "Roasted · Salted · Iranian Grade",
    href: "/products",
  },
  {
    name: "Roasted Peanuts",
    desc: "Consistently sized and roasted for a deep, satisfying flavour. A wholesale staple available in multiple pack formats.",
    image: "/images/peanut.jpg",
    tag: "Roasted · Salted · Plain",
    href: "/products",
  },
];

const wholesalePartners = [
  { label: "Supermarkets", icon: "🏬" },
  { label: "Hypermarkets", icon: "🏪" },
  { label: "Grocery Chains", icon: "🛒" },
  { label: "Hotels", icon: "🏨" },
  { label: "Restaurants", icon: "🍽️" },
  { label: "Cafés", icon: "☕" },
  { label: "Distributors", icon: "🚛" },
  { label: "Gift Brands", icon: "🎁" },
];

const testimonials = [
  {
    quote: "Al Mahmasani has been our trusted nuts supplier for over a decade. Their quality is unmatched and their reliability is second to none.",
    name: "Ahmad Al Rashid",
    title: "General Manager, Premium Hypermarket Group",
    initial: "A",
  },
  {
    quote: "We built our snack range around Al Mahmasani products. Consistent quality, professional team, and always on time. Highly recommended.",
    name: "Sarah Mathews",
    title: "Procurement Director, Fine Foods LLC",
    initial: "S",
  },
  {
    quote: "As a restaurant group, quality ingredients matter most. Al Mahmasani delivers exactly that — premium nuts our guests genuinely appreciate.",
    name: "Omar Khalil",
    title: "Owner, The Garden Restaurant Group, Dubai",
    initial: "O",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "+", label: "Premium Products" },
  { value: 500, suffix: "+", label: "Business Partners" },
  { value: 7, suffix: "", label: "Emirates Covered" },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Cinematic full viewport
      ═══════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background image grid */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {["/images/cashew.jpg", "/images/almond.jpg", "/images/pistachio.jpg", "/images/peanut.jpg"].map((src, i) => (
            <div key={i} className="relative img-zoom">
              <Image src={src} alt="" fill sizes="50vw" style={{ objectFit: "cover" }} priority={i < 2} />
            </div>
          ))}
        </div>
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-[#c9a84c]/60" />
            <span className="section-label">Est. 1975 · United Arab Emirates</span>
            <span className="h-px w-10 bg-[#c9a84c]/60" />
          </div>

          <h1 className="text-white font-light leading-[0.95] mb-4" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
            Al Mahmasani
          </h1>
          <h2 className="gold-shimmer font-light tracking-[0.3em] uppercase mb-8" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.1rem, 3vw, 2rem)" }}>
            Roasteries
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ fontFamily: "var(--font-sans)" }}>
            UAE&apos;s trusted wholesale supplier of premium nuts, dried fruits and snack products — supplying businesses across all seven Emirates since 1975.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-luxury bg-[#c9a84c] text-black text-[11px] tracking-[0.25em] uppercase px-9 py-4 hover:bg-[#e8c97a] transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
              Explore Products
            </Link>
            <Link href="/contact" className="btn-luxury border border-white/30 text-white text-[11px] tracking-[0.25em] uppercase px-9 py-4 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300" style={{ fontFamily: "var(--font-sans)" }}>
              Wholesale Enquiry
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <span className="text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE TICKER
      ═══════════════════════════════════════ */}
      <div className="bg-[#c9a84c] py-3.5 overflow-hidden border-y border-[#c9a84c]">
        <div className="flex whitespace-nowrap marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 text-black text-[10px] tracking-[0.35em] uppercase font-medium" style={{ fontFamily: "var(--font-sans)" }}>
              {item}
              <span className="text-black/40 text-base">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          HERITAGE — Editorial two-column
      ═══════════════════════════════════════ */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[560px]">
            {/* Image side */}
            <AnimatedSection className="relative h-[480px] lg:h-auto">
              <div className="absolute inset-0 img-zoom">
                <Image src="/images/almond.jpg" alt="Al Mahmasani Heritage" fill sizes="(max-width:1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/60" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-[#c9a84c] px-6 py-5 z-10">
                <p className="text-black text-3xl font-light" style={{ fontFamily: "var(--font-serif)" }}>1975</p>
                <p className="text-black/70 text-[9px] tracking-[0.4em] uppercase mt-0.5" style={{ fontFamily: "var(--font-sans)" }}>Established</p>
              </div>
            </AnimatedSection>

            {/* Text side */}
            <AnimatedSection delay={150} className="bg-[#0c0c0c] border border-[#c9a84c]/10 p-12 lg:p-16 flex flex-col justify-center">
              <span className="section-label mb-5">Our Heritage</span>
              <h2 className="text-white font-light leading-tight mb-8" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
                Five Decades of<br />
                <span className="gold-text">Absolute Quality</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-sans)" }}>
                Al Mahmasani Roasteries was founded in 1975 with a single promise — to bring the finest quality nuts and snack products to the UAE. What began as a family venture has grown into one of the most trusted wholesale food brands in the region.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--font-sans)" }}>
                Today, we supply supermarkets, hypermarkets, restaurants, hotels and distributors across all seven Emirates. Our partners trust us because our commitment to quality has never wavered — not in fifty years.
              </p>

              {/* Timeline markers */}
              <div className="grid grid-cols-3 gap-6 mb-10 border-t border-[#c9a84c]/10 pt-8">
                {[{ year: "1975", label: "Founded" }, { year: "2000", label: "UAE-Wide" }, { year: "2025", label: "50 Years" }].map((t) => (
                  <div key={t.year}>
                    <p className="text-[#c9a84c] text-xl font-light mb-1" style={{ fontFamily: "var(--font-serif)" }}>{t.year}</p>
                    <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>{t.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/about" className="inline-flex items-center gap-2 text-[#c9a84c] text-[11px] tracking-[0.25em] uppercase hover:gap-4 transition-all duration-300 group" style={{ fontFamily: "var(--font-sans)" }}>
                Our Full Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRODUCT CATEGORY STRIPS — Alternating
          (Inspired by Modern Bakery layout)
      ═══════════════════════════════════════ */}
      <section className="bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="section-label block mb-4">Our Range</span>
                <h2 className="text-white font-light leading-tight" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
                  Premium Product<br />
                  <span className="gold-text">Categories</span>
                </h2>
              </div>
              <Link href="/products" className="inline-flex items-center gap-2 text-[#c9a84c] text-[11px] tracking-[0.25em] uppercase hover:gap-4 transition-all duration-300 group self-start md:self-auto" style={{ fontFamily: "var(--font-sans)" }}>
                Full Catalogue <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {categories.map((cat, i) => (
          <div key={cat.name} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[420px] border-t border-[#c9a84c]/8`}>
            {/* Image panel — 58% */}
            <div className="relative lg:w-[58%] h-72 lg:h-auto img-zoom group">
              <Image src={cat.image} alt={cat.name} fill sizes="(max-width:1024px) 100vw, 58vw" style={{ objectFit: "cover" }} />
              <div className={`absolute inset-0 bg-gradient-to-${i % 2 === 0 ? "r" : "l"} from-transparent via-black/10 to-black/50`} />
            </div>

            {/* Text panel — 42% */}
            <AnimatedSection className="lg:w-[42%] bg-[#0a0a0a] flex flex-col justify-center px-10 lg:px-16 py-16 border-l border-[#c9a84c]/8">
              <span className="section-label block mb-3">{`0${i + 1} / 0${categories.length}`}</span>
              <span className="text-[#c9a84c]/50 text-[10px] tracking-[0.4em] uppercase mb-4 block" style={{ fontFamily: "var(--font-sans)" }}>{cat.tag}</span>
              <h3 className="text-white font-light leading-tight mb-6" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                {cat.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "var(--font-sans)" }}>
                {cat.desc}
              </p>
              <Link
                href={cat.href}
                className="inline-flex items-center gap-2 text-[#c9a84c] text-[11px] tracking-[0.3em] uppercase hover:gap-4 transition-all duration-300 group w-fit"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                View Products
                <span className="cat-line" />
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        ))}
      </section>

      {/* ═══════════════════════════════════════
          FEATURED PRODUCTS — Editorial grid
      ═══════════════════════════════════════ */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <span className="section-label block mb-4">Selection</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-white font-light" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
                Featured<br />
                <span className="gold-text">Products</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-sans)" }}>
                From roasted classics to signature mixes — every product is selected for exceptional quality and shelf consistency.
              </p>
            </div>
          </AnimatedSection>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Large hero product */}
            <AnimatedSection className="lg:col-span-2 lg:row-span-2">
              <div className="product-card relative h-[440px] lg:h-full min-h-[440px] overflow-hidden border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 group">
                <Image src="/images/cashew.jpg" alt="Roasted Cashews" fill sizes="(max-width:1024px) 100vw, 66vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute top-5 left-5 bg-[#c9a84c] text-black text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                  Best Seller
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="section-label block mb-2">Premium Cashews</span>
                  <h3 className="text-white font-light mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: "2rem" }}>
                    Roasted Cashews W180
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-md" style={{ fontFamily: "var(--font-sans)" }}>
                    Our flagship product. Premium whole cashews roasted to a precise golden finish. Available in W180, W210, W240 and W320 grades for all retail and wholesale requirements.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                      className="btn-luxury bg-[#c9a84c] text-black text-[10px] tracking-[0.2em] uppercase px-7 py-3 hover:bg-[#e8c97a] transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                      Enquire
                    </a>
                    <span className="text-white/30 text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-sans)" }}>250g · 500g · 1kg · 5kg</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Two smaller products */}
            {[
              { name: "Unsalted Almonds", image: "/images/almond.jpg", tag: "Premium", cat: "Almonds", sizes: "250g · 500g · 1kg" },
              { name: "Roasted Pistachios", image: "/images/pistachio.jpg", tag: "Signature", cat: "Pistachios", sizes: "250g · 500g · 1kg" },
            ].map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 120}>
                <div className="product-card relative h-56 lg:h-auto min-h-[210px] overflow-hidden border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 group">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width:1024px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#c9a84c] text-black text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                    {p.tag}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="section-label block mb-1 text-[9px]">{p.cat}</span>
                    <h3 className="text-white font-light mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem" }}>
                      {p.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/30 text-[9px] tracking-widest uppercase" style={{ fontFamily: "var(--font-sans)" }}>{p.sizes}</span>
                      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                        className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase hover:gap-3 transition-all flex items-center gap-1.5" style={{ fontFamily: "var(--font-sans)" }}>
                        Enquire <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/products" className="btn-luxury inline-flex items-center gap-3 border border-[#c9a84c]/50 text-[#c9a84c] text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300" style={{ fontFamily: "var(--font-sans)" }}>
              View Full Product Catalogue <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHOLESALE — Premium B2B section
      ═══════════════════════════════════════ */}
      <section className="py-32 bg-[#0a0a0a] border-y border-[#c9a84c]/10 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label block mb-5">Wholesale</span>
              <h2 className="text-white font-light leading-tight mb-8" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
                Your Trusted<br />
                <span className="gold-text">Wholesale Partner</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                We work exclusively with businesses — supplying supermarkets, hypermarkets, restaurants, hotels, distributors and gifting brands across the UAE with consistent quality and reliable logistics.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--font-sans)" }}>
                Our wholesale model is built for scale. Flexible minimum order quantities, customisable pack formats, and a dedicated account team ensure your business never runs short.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="btn-luxury inline-flex items-center justify-center gap-3 bg-[#c9a84c] text-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#e8c97a] transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                  <MessageCircle size={15} />
                  Discuss Your Order
                </a>
                <Link href="/contact" className="btn-luxury border border-[#c9a84c]/40 text-[#c9a84c] text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:border-[#c9a84c] transition-all duration-300 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                  Send Enquiry
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="grid grid-cols-2 gap-3">
                {wholesalePartners.map((p, i) => (
                  <div key={p.label} className={`border border-[#c9a84c]/12 hover:border-[#c9a84c]/40 p-6 transition-all duration-400 group bg-black/20 hover:bg-black/50 ${i === 0 ? "col-span-2" : ""}`}>
                    <p className="text-2xl mb-3">{p.icon}</p>
                    <p className="text-white/65 text-sm tracking-[0.1em]" style={{ fontFamily: "var(--font-sans)" }}>{p.label}</p>
                    <div className="w-0 group-hover:w-6 h-px bg-[#c9a84c] mt-2 transition-all duration-400" />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LIFESTYLE — Moment photography
      ═══════════════════════════════════════ */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <span className="section-label block mb-4">Everyday Excellence</span>
            <h2 className="text-white font-light" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              Made for<br />
              <span className="gold-text">Every Moment</span>
            </h2>
          </AnimatedSection>

          {/* Staggered image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <AnimatedSection className="col-span-2 row-span-2">
              <div className="relative h-full min-h-[360px] img-zoom">
                <Image src="/images/peanut.jpg" alt="Lifestyle" fill sizes="50vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>Family Gatherings</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={80}>
              <div className="relative h-44 img-zoom">
                <Image src="/images/cashew.jpg" alt="Lifestyle" fill sizes="25vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>Match Nights</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <div className="relative h-44 img-zoom">
                <Image src="/images/almond.jpg" alt="Lifestyle" fill sizes="25vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>Premium Gifting</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={160}>
              <div className="relative h-44 img-zoom">
                <Image src="/images/pistachio.jpg" alt="Lifestyle" fill sizes="25vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>Hospitality</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative h-44 img-zoom">
                <Image src="/images/peanut.jpg" alt="Lifestyle" fill sizes="25vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>Celebrations</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATISTICS — Elegant counters
      ═══════════════════════════════════════ */}
      <section className="bg-[#0c0c0c] border-y border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c9a84c]/10">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100} className="text-center py-14 px-6">
                <div className="text-[#c9a84c] font-light mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-white/35 text-[10px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>{s.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS — Premium quote format
      ═══════════════════════════════════════ */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label block mb-4">Client Voices</span>
            <h2 className="text-white font-light" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              What Our<br />
              <span className="gold-text">Partners Say</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 130}>
                <div className="border border-[#c9a84c]/12 hover:border-[#c9a84c]/30 p-8 bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-all duration-500 h-full flex flex-col">
                  <div className="text-[#c9a84c]/30 text-6xl font-serif leading-none mb-6 select-none">&ldquo;</div>
                  <p className="text-white/55 text-sm leading-relaxed flex-1 mb-8" style={{ fontFamily: "var(--font-sans)" }}>{t.quote}</p>
                  <div className="flex items-center gap-4 border-t border-[#c9a84c]/10 pt-6">
                    <div className="w-10 h-10 border border-[#c9a84c]/30 bg-[#c9a84c]/8 flex items-center justify-center text-[#c9a84c] text-sm font-medium flex-shrink-0" style={{ fontFamily: "var(--font-serif)" }}>
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-white text-sm font-light" style={{ fontFamily: "var(--font-serif)" }}>{t.name}</p>
                      <p className="text-white/35 text-[10px] mt-0.5" style={{ fontFamily: "var(--font-sans)" }}>{t.title}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Full-bleed conversion section
      ═══════════════════════════════════════ */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/pistachio.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-black/84" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="section-label block mb-7">Get In Touch</span>
            <h2 className="text-white font-light mb-6" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
              {"Let's Work"}<br />
              <span className="gold-text">Together</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-lg mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
              Ready to bring premium nuts and snacks to your business? Contact us today and discover why UAE businesses have trusted Al Mahmasani Roasteries since 1975.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="btn-luxury flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#20ba59] transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <Link href="/contact" className="btn-luxury border border-[#c9a84c] text-[#c9a84c] text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Send Enquiry
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
