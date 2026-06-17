import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Al Mahmasani Roasteries",
  description: "The story of Al Mahmasani Roasteries — a UAE family-owned wholesale supplier of premium nuts and snack products established in 1975.",
};

const timeline = [
  { year: "1975", title: "The Beginning", event: "Al Mahmasani Roasteries is founded in the United Arab Emirates as a family-operated nuts and snacks supplier." },
  { year: "1985", title: "Retail Expansion", event: "Partnership agreements established with UAE supermarkets and hypermarkets. Distribution network begins to scale." },
  { year: "1995", title: "Range Growth", event: "Product portfolio expands to include dried fruits, mixed nuts and speciality snack categories to meet evolving market demand." },
  { year: "2005", title: "UAE-Wide Reach", event: "Full distribution achieved across all seven Emirates, serving hundreds of retail and food service accounts." },
  { year: "2015", title: "Premium Positioning", event: "Brand repositioning to serve premium and luxury retail channels. Packaging modernised while preserving heritage quality." },
  { year: "2025", title: "50 Years Strong", event: "Half a century of excellence. Al Mahmasani Roasteries celebrates 50 years as one of the UAE's most trusted food brands." },
];

const values = [
  {
    num: "01",
    title: "Quality Without Compromise",
    desc: "Every product we supply is selected against strict quality criteria — for freshness, consistency and taste. We do not stock anything we would not be proud to serve ourselves.",
  },
  {
    num: "02",
    title: "Heritage & Trust",
    desc: "Fifty years of experience is woven into everything we do — from how we source to how we serve. Our partners trust us because we have never broken that promise.",
  },
  {
    num: "03",
    title: "Partnership First",
    desc: "We see our clients not as customers but as long-term partners. Their growth is our growth. Their challenges are challenges we solve together.",
  },
  {
    num: "04",
    title: "Reliable Supply",
    desc: "Consistency in supply is as important as consistency in quality. We maintain stock levels that ensure our partners never face gaps on their shelves.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/almond.jpg" alt="About Al Mahmasani Roasteries" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 page-enter">
          <p className="section-label block mb-5">Who We Are</p>
          <h1 className="text-white font-light leading-tight" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
            Our<br />
            <span className="gold-text">Story</span>
          </h1>
        </div>
      </section>

      {/* ─── COMPANY STORY ─── */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label block mb-5">Since 1975</span>
              <h2 className="text-white font-light leading-tight mb-8" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
                Five Decades of<br />
                <span className="gold-text">Premium Excellence</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                Al Mahmasani Roasteries was established in 1975 with a founding vision: to bring the finest quality nuts, dried fruits and snack products to the United Arab Emirates. What began as a small family operation has grown into one of the UAE&apos;s most trusted wholesale food suppliers.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                Over five decades, we have built enduring relationships with retailers, supermarkets, restaurants, hotels and businesses across all seven Emirates. Our partners choose us because we have never compromised on the principles that defined us from day one: quality, consistency and genuine care for the people we serve.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--font-sans)" }}>
                Today, Al Mahmasani Roasteries remains proudly family-owned — honouring its heritage while meeting the evolving needs of modern UAE businesses.
              </p>
              <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c9a84c] text-[11px] tracking-[0.25em] uppercase hover:gap-4 transition-all duration-300 group" style={{ fontFamily: "var(--font-sans)" }}>
                Partner With Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={180}>
              <div className="relative">
                <div className="relative h-[480px] img-zoom">
                  <Image src="/images/pistachio.jpg" alt="Al Mahmasani Heritage" fill sizes="(max-width:1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#c9a84c] p-8 hidden lg:block">
                  <p className="text-black font-light" style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem" }}>1975</p>
                  <p className="text-black/65 text-[9px] tracking-[0.45em] uppercase mt-1" style={{ fontFamily: "var(--font-sans)" }}>Established</p>
                </div>
                <div className="absolute -top-5 -right-5 border border-[#c9a84c]/30 p-6 bg-[#080808] hidden lg:block">
                  <p className="text-[#c9a84c] font-light" style={{ fontFamily: "var(--font-serif)", fontSize: "2rem" }}>50+</p>
                  <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mt-1" style={{ fontFamily: "var(--font-sans)" }}>Years</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── MISSION STATEMENT ─── */}
      <section className="py-24 bg-[#0c0c0c] border-y border-[#c9a84c]/10 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="section-label block mb-7">Our Mission</p>
            <blockquote className="text-white font-light leading-relaxed italic" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>
              &ldquo;To deliver the highest quality nuts and snack products to businesses across the UAE, building partnerships rooted in trust, consistency and a genuine passion for premium food.&rdquo;
            </blockquote>
            <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-10" />
            <p className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase mt-5" style={{ fontFamily: "var(--font-sans)" }}>Al Mahmasani Roasteries · Est. 1975</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-20">
            <span className="section-label block mb-4">Our Journey</span>
            <h2 className="text-white font-light" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              50 Years in<br />
              <span className="gold-text">the Making</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 80}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 py-10 border-b border-[#c9a84c]/10 group hover:bg-[#c9a84c]/2 transition-colors duration-300 ${i === 0 ? "border-t" : ""}`}>
                  <div className="md:col-span-2">
                    <p className="text-[#c9a84c] font-light group-hover:text-[#e8c97a] transition-colors" style={{ fontFamily: "var(--font-serif)", fontSize: "2rem" }}>{item.year}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-white/70 text-sm tracking-[0.1em] uppercase font-medium" style={{ fontFamily: "var(--font-sans)" }}>{item.title}</p>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{item.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMAGE STRIP ─── */}
      <div className="grid grid-cols-4 h-52 md:h-72">
        {["/images/cashew.jpg", "/images/almond.jpg", "/images/pistachio.jpg", "/images/peanut.jpg"].map((src, i) => (
          <div key={i} className="relative img-zoom">
            <Image src={src} alt="" fill sizes="25vw" style={{ objectFit: "cover" }} />
            <div className="absolute inset-0 bg-black/45 hover:bg-black/25 transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* ─── VALUES ─── */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <span className="section-label block mb-4">What We Stand For</span>
            <h2 className="text-white font-light" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              Our<br />
              <span className="gold-text">Core Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="border border-[#c9a84c]/12 hover:border-[#c9a84c]/35 p-10 transition-all duration-500 bg-[#0c0c0c] hover:bg-[#0e0e0e] h-full">
                  <p className="text-[#c9a84c]/40 text-xs tracking-[0.4em] uppercase mb-5 font-medium" style={{ fontFamily: "var(--font-sans)" }}>{v.num}</p>
                  <h3 className="text-white font-light mb-4" style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>{v.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 bg-[#0c0c0c] border-t border-[#c9a84c]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="section-label block mb-6">Partner With Us</span>
            <h2 className="text-white font-light mb-6" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Become Part of<br />
              <span className="gold-text">Our Story</span>
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
              Join the hundreds of UAE businesses who trust Al Mahmasani Roasteries to supply premium nuts and snacks with consistency and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
                className="btn-luxury flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#20ba59] transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
              <Link href="/contact" className="btn-luxury border border-[#c9a84c] text-[#c9a84c] text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
