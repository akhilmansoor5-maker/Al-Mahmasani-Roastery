import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import {
  Shield,
  Truck,
  Award,
  Users,
  ShoppingBag,
  Coffee,
  Store,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

const products = [
  {
    name: "Roasted Cashews",
    description: "Premium whole cashews, carefully roasted to golden perfection with a satisfying crunch.",
    image: "/images/cashew.jpg",
    tag: "Best Seller",
  },
  {
    name: "Unsalted Almonds",
    description: "Crisp, fresh almonds sourced from the world's finest orchards. Pure, natural goodness.",
    image: "/images/almond.jpg",
    tag: "Premium",
  },
  {
    name: "Roasted Pistachios",
    description: "Plump, flavourful pistachios with a delicate roast that brings out their natural richness.",
    image: "/images/pistachio.jpg",
    tag: "Signature",
  },
  {
    name: "Roasted Peanuts",
    description: "Generously sized peanuts roasted to a deep, satisfying flavour perfect for any occasion.",
    image: "/images/peanut.jpg",
    tag: "Classic",
  },
];

const categories = [
  { name: "Mixed Nuts", image: "/images/cashew.jpg" },
  { name: "Cashews", image: "/images/cashew.jpg" },
  { name: "Almonds", image: "/images/almond.jpg" },
  { name: "Pistachios", image: "/images/pistachio.jpg" },
  { name: "Peanuts", image: "/images/peanut.jpg" },
  { name: "Dried Fruits", image: "/images/almond.jpg" },
];

const testimonials = [
  {
    quote:
      "Al Mahmasani has been our trusted supplier for over a decade. Their quality is unmatched and their reliability is second to none. Our customers love their products.",
    name: "Ahmad Al Rashid",
    title: "General Manager, Premium Hypermarket Group",
    initial: "A",
  },
  {
    quote:
      "We've built our snack section around Al Mahmasani products. The quality is consistently excellent and the team is always professional. Highly recommended for wholesale.",
    name: "Sarah Mathews",
    title: "Procurement Director, Fine Foods LLC",
    initial: "S",
  },
  {
    quote:
      "As a restaurant owner, quality ingredients matter most. Al Mahmasani delivers exactly that — premium nuts and snacks that our guests genuinely appreciate.",
    name: "Omar Khalil",
    title: "Owner, The Garden Restaurant Dubai",
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
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="relative img-zoom">
            <Image src="/images/cashew.jpg" alt="" fill sizes="50vw" style={{ objectFit: "cover" }} priority />
          </div>
          <div className="relative img-zoom">
            <Image src="/images/almond.jpg" alt="" fill sizes="50vw" style={{ objectFit: "cover" }} priority />
          </div>
          <div className="relative img-zoom">
            <Image src="/images/pistachio.jpg" alt="" fill sizes="50vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="relative img-zoom">
            <Image src="/images/peanut.jpg" alt="" fill sizes="50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-6 luxury-underline">
              Est. 1975 · United Arab Emirates
            </p>
            <h1 className="text-white font-light text-5xl md:text-7xl leading-[1.05] mb-8 tracking-tight">
              Premium Nuts &amp;{" "}
              <span className="gold-shimmer font-normal">Snacks</span>
              <br />
              Since 1975
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              Supplying retailers, supermarkets and businesses across the UAE with premium nuts,
              dried fruits and snack products trusted for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="btn-luxury bg-[#c9a84c] text-black text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#e8c97a] transition-all duration-300 text-center font-medium"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="btn-luxury border border-white/40 text-white text-sm tracking-[0.2em] uppercase px-8 py-4 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── LEGACY ── */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-5 luxury-underline">Our Heritage</p>
              <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8">
                A Legacy Built<br />
                <span className="gold-text">on Quality</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                For over five decades, Al Mahmasani has been committed to delivering premium nuts,
                snacks and food products across the United Arab Emirates. Our reputation is built on
                quality, consistency and long-term relationships with our partners.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                Founded in 1975, we began with a simple promise: to bring the finest nuts and snacks
                to UAE households and businesses. Today, that promise remains the foundation of
                everything we do.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#c9a84c] text-sm tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300"
              >
                Our Story <ChevronRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200} className="grid grid-cols-2 gap-4">
              <div className="relative h-64 img-zoom">
                <Image src="/images/almond.jpg" alt="Premium almonds" fill sizes="25vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase">Almonds</div>
              </div>
              <div className="relative h-64 img-zoom mt-8">
                <Image src="/images/pistachio.jpg" alt="Premium pistachios" fill sizes="25vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase">Pistachios</div>
              </div>
              <div className="relative h-64 img-zoom -mt-8">
                <Image src="/images/peanut.jpg" alt="Roasted peanuts" fill sizes="25vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase">Peanuts</div>
              </div>
              <div className="relative h-64 img-zoom">
                <Image src="/images/cashew.jpg" alt="Roasted cashews" fill sizes="25vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase">Cashews</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#0d0d0d] border-y border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Why Al Mahmasani</p>
            <h2 className="text-white text-4xl md:text-5xl font-light luxury-underline-center">
              Trusted by Businesses<br />
              <span className="gold-text">Across the UAE</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-[#c9a84c]" size={28} />,
                title: "Premium Quality",
                desc: "Carefully sourced products selected for exceptional taste, freshness and consistency — every batch, every time.",
              },
              {
                icon: <Shield className="text-[#c9a84c]" size={28} />,
                title: "Trusted Since 1975",
                desc: "More than 50 years serving UAE customers. Our longevity speaks to the trust our partners place in us.",
              },
              {
                icon: <Truck className="text-[#c9a84c]" size={28} />,
                title: "Reliable Supply",
                desc: "Consistent stock availability, dependable distribution and on-time delivery across all seven Emirates.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 150}>
                <div className="border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 p-10 transition-all duration-500 group bg-black/30 hover:bg-black/60">
                  <div className="w-14 h-14 border border-[#c9a84c]/30 group-hover:border-[#c9a84c] flex items-center justify-center mb-8 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-xl font-light mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Our Range</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-white text-4xl md:text-5xl font-light luxury-underline">
                Product<br />
                <span className="gold-text">Categories</span>
              </h2>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[#c9a84c] text-sm tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300 self-start md:self-auto"
              >
                View All <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.name} delay={i * 80}>
                <Link href="/products" className="block relative h-56 img-zoom group overflow-hidden">
                  <Image src={cat.image} alt={cat.name} fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#c9a84c]/40 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white text-sm tracking-[0.15em] uppercase font-light">{cat.name}</p>
                    <div className="w-0 group-hover:w-8 h-px bg-[#c9a84c] mt-2 transition-all duration-500" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Selection</p>
            <h2 className="text-white text-4xl md:text-5xl font-light luxury-underline-center">
              Featured<br />
              <span className="gold-text">Products</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 100}>
                <div className="product-card border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 bg-[#0d0d0d] group overflow-hidden">
                  <div className="relative h-56 img-zoom">
                    <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                    <div className="absolute top-3 left-3 bg-[#c9a84c] text-black text-[10px] tracking-[0.2em] uppercase px-2.5 py-1">
                      {p.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-base font-light tracking-wide mb-3">{p.name}</h3>
                    <p className="text-white/40 text-xs leading-relaxed mb-6">{p.description}</p>
                    <a
                      href="https://wa.me/971504622865"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-luxury w-full border border-[#c9a84c]/40 group-hover:border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] uppercase py-2.5 text-center block hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link
              href="/products"
              className="btn-luxury inline-flex items-center gap-3 border border-[#c9a84c]/40 text-[#c9a84c] text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
            >
              View All Products <ChevronRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LIFESTYLE ── */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="grid grid-cols-2 gap-4">
              <div className="relative h-72 img-zoom">
                <Image src="/images/cashew.jpg" alt="Lifestyle" fill sizes="25vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="relative h-72 img-zoom mt-10">
                <Image src="/images/pistachio.jpg" alt="Lifestyle" fill sizes="25vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="relative h-72 img-zoom -mt-10">
                <Image src="/images/peanut.jpg" alt="Lifestyle" fill sizes="25vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="relative h-72 img-zoom">
                <Image src="/images/almond.jpg" alt="Lifestyle" fill sizes="25vw" style={{ objectFit: "cover" }} />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-5 luxury-underline">Every Occasion</p>
              <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8">
                Made for<br />
                <span className="gold-text">Every Moment</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Whether it is family gatherings, match nights, celebrations or everyday snacking,
                Al Mahmasani products bring people together. Our nuts and snacks are crafted to
                be shared and enjoyed.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                From the finest cashews to premium almonds and pistachios — each product carries
                the quality promise that our customers have depended on for generations.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Family Gatherings", "Corporate Events", "Everyday Snacking", "Celebrations"].map((tag) => (
                  <span key={tag} className="border border-[#c9a84c]/30 text-white/60 text-xs tracking-widest uppercase px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── WHOLESALE ── */}
      <section className="py-28 bg-[#0a0a0a] border-y border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Wholesale</p>
            <h2 className="text-white text-4xl md:text-5xl font-light luxury-underline-center">
              Your Trusted<br />
              <span className="gold-text">Wholesale Partner</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto mt-8">
              We work with supermarkets, groceries, cafes, restaurants and retailers across the UAE,
              providing quality products and reliable supply solutions tailored to your business.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Store size={28} />, label: "Retailers" },
              { icon: <ShoppingBag size={28} />, label: "Supermarkets" },
              { icon: <Users size={28} />, label: "Restaurants" },
              { icon: <Coffee size={28} />, label: "Cafes" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 100}>
                <div className="border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 p-8 text-center transition-all duration-300 group bg-black/20 hover:bg-black/50">
                  <div className="text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-colors duration-300 flex justify-center mb-5">
                    {item.icon}
                  </div>
                  <p className="text-white/70 text-sm tracking-[0.2em] uppercase">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/contact"
              className="btn-luxury inline-flex items-center gap-3 bg-[#c9a84c] text-black text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#e8c97a] transition-all duration-300 font-medium"
            >
              Become a Partner <ChevronRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-[#c9a84c]/15">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100} className="text-center py-10 px-6">
                <div className="text-[#c9a84c] text-4xl md:text-5xl font-light mb-3">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-white/40 text-xs tracking-[0.25em] uppercase">{s.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Testimonials</p>
            <h2 className="text-white text-4xl md:text-5xl font-light luxury-underline-center">
              What Our<br />
              <span className="gold-text">Partners Say</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 150}>
                <div className="border border-[#c9a84c]/15 hover:border-[#c9a84c]/30 p-8 transition-all duration-500 bg-black/30 hover:bg-black/60 h-full flex flex-col">
                  <div className="text-[#c9a84c] text-5xl font-serif leading-none mb-6 opacity-40">&ldquo;</div>
                  <p className="text-white/60 text-sm leading-relaxed flex-1 mb-8">{t.quote}</p>
                  <div className="flex items-center gap-4 border-t border-[#c9a84c]/10 pt-6">
                    <div className="w-10 h-10 bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] text-sm font-medium flex-shrink-0">
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-white text-sm font-light">{t.name}</p>
                      <p className="text-white/40 text-xs mt-0.5">{t.title}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cashew.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-black/82" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-6">Get In Touch</p>
            <h2 className="text-white text-5xl md:text-6xl font-light mb-6">
              {"Let's Work"}<br />
              <span className="gold-text">Together</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-lg mx-auto">
              Ready to bring premium nuts and snacks to your business? Contact us today and discover
              why UAE businesses have trusted Al Mahmasani since 1975.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971504622865"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury flex items-center justify-center gap-3 bg-[#25D366] text-white text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#20ba59] transition-all duration-300 font-medium"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="btn-luxury border border-[#c9a84c] text-[#c9a84c] text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
