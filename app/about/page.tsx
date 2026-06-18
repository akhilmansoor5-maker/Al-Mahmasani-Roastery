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
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/products/almond-2.jpg" alt="About Al Mahmasani Roasteries" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/20" />
          <div
            className="absolute inset-0 bg-gradient-to-t to-transparent"
            style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 40%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 page-enter">
          <p className="section-label block mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>Who We Are</p>
          <h1
            className="text-white font-light leading-tight"
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(4rem, 10vw, 8rem)" }}
          >
            Our Story
          </h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: "clamp(20px,5vw,80px)", paddingRight: "clamp(20px,5vw,80px)" }}>
          <div className="grid-heritage">
            <AnimatedSection>
              <span className="section-label block mb-5">Since 1975</span>
              <h2
                className="font-light leading-tight mb-8"
                style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "var(--text)" }}
              >
                Five Decades of<br />
                <span className="gold-text">Premium Excellence</span>
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
                Al Mahmasani Roasteries was established in 1975 with a founding vision: to bring the finest quality nuts, dried fruits and snack products to the United Arab Emirates. What began as a small family operation has grown into one of the UAE&apos;s most trusted wholesale food suppliers.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
                Over five decades, we have built enduring relationships with retailers, supermarkets, restaurants, hotels and businesses across all seven Emirates. Our partners choose us because we have never compromised on the principles that defined us from day one: quality, consistency and genuine care for the people we serve.
              </p>
              <p className="text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
                Today, Al Mahmasani Roasteries remains proudly family-owned — honouring its heritage while meeting the evolving needs of modern UAE businesses.
              </p>
              <a
                href="https://wa.me/971504622865"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase hover:gap-4 transition-all duration-300 group"
                style={{ color: "var(--gold-mid)", fontFamily: "var(--sans)" }}
              >
                Partner With Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={180}>
              <div className="relative">
                <div className="relative h-[480px] img-zoom overflow-hidden" style={{ borderRadius: "var(--radius-card)" }}>
                  <Image src="/images/products/hazelnut-4.jpg" alt="Al Mahmasani Heritage" fill sizes="(max-width:1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 p-8 hidden lg:block" style={{ background: "#111111" }}>
                  <p className="text-black font-light" style={{ fontFamily: "var(--serif)", fontSize: "2.5rem" }}>1975</p>
                  <p className="text-black/65 text-[9px] tracking-[0.45em] uppercase mt-1" style={{ fontFamily: "var(--sans)" }}>Established</p>
                </div>
                <div className="absolute -top-5 -right-5 p-6 hidden lg:block" style={{ border: "1.5px solid var(--border)", background: "var(--bg-card)" }}>
                  <p className="font-light" style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--gold-mid)" }}>50+</p>
                  <p className="text-[9px] tracking-[0.4em] uppercase mt-1" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>Years</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section
        className="section-pad-md relative overflow-hidden"
        style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10" style={{ paddingLeft: "clamp(20px,5vw,80px)", paddingRight: "clamp(20px,5vw,80px)" }}>
          <AnimatedSection>
            <p className="section-label block mb-7">Our Mission</p>
            <blockquote
              className="font-light leading-relaxed italic"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", color: "var(--text)" }}
            >
              &ldquo;To deliver the highest quality nuts and snack products to businesses across the UAE, building partnerships rooted in trust, consistency and a genuine passion for premium food.&rdquo;
            </blockquote>
            <div className="w-12 h-px mx-auto mt-10" style={{ background: "var(--gold-mid)" }} />
            <p className="text-[10px] tracking-[0.4em] uppercase mt-5" style={{ fontFamily: "var(--sans)", color: "var(--gold-mid)" }}>
              Al Mahmasani Roasteries · Est. 1975
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: "clamp(20px,5vw,80px)", paddingRight: "clamp(20px,5vw,80px)" }}>
          <AnimatedSection className="mb-20">
            <span className="section-label block mb-4">Our Journey</span>
            <h2 className="font-light" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "var(--text)" }}>
              50 Years in the Making
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 80}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 border-b group transition-colors duration-300 ${i === 0 ? "border-t" : ""}`}
                  style={{ borderColor: "var(--border)", paddingTop: "48px", paddingBottom: "48px" }}
                >
                  <div className="md:col-span-2">
                    <p className="font-light" style={{ fontFamily: "var(--serif)", fontSize: "2.25rem", color: "var(--gold-mid)" }}>{item.year}</p>
                  </div>
                  <div className="md:col-span-3" style={{ paddingTop: "8px" }}>
                    <p className="text-sm tracking-[0.1em] uppercase font-medium" style={{ fontFamily: "var(--sans)", color: "var(--text)" }}>{item.title}</p>
                  </div>
                  <div className="md:col-span-7" style={{ paddingTop: "8px" }}>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>{item.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 h-52 md:h-72">
        {[
          "/images/products/cashew-3.jpg",
          "/images/products/almond-2.jpg",
          "/images/products/hazelnut-4.jpg",
          "/images/products/pecan-1.jpg",
        ].map((src, i) => (
          <div key={i} className="relative img-zoom overflow-hidden">
            <Image src={src} alt="" fill sizes="25vw" style={{ objectFit: "cover" }} />
            <div className="absolute inset-0 bg-black/35 hover:bg-black/15 transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* Values */}
      <section className="section-pad" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: "clamp(20px,5vw,80px)", paddingRight: "clamp(20px,5vw,80px)" }}>
          <AnimatedSection className="mb-16">
            <span className="section-label block mb-4">What We Stand For</span>
            <h2 className="font-light" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "var(--text)" }}>
              Our<br />
              <span className="gold-text">Core Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div
                  className="value-card h-full p-10"
                >
                  <p
                    className="text-xs tracking-[0.4em] uppercase mb-5 font-medium"
                    style={{ fontFamily: "var(--sans)", color: "var(--gold-mid)" }}
                  >
                    {v.num}
                  </p>
                  <h3 className="font-light mb-4" style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", color: "var(--text)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-md" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto text-center" style={{ paddingLeft: "clamp(20px,5vw,80px)", paddingRight: "clamp(20px,5vw,80px)" }}>
          <AnimatedSection>
            <span className="section-label block mb-6">Partner With Us</span>
            <h2 className="font-light mb-6" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)" }}>
              Become Part of<br />
              <span className="gold-text">Our Story</span>
            </h2>
            <p className="text-sm leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
              Join the hundreds of UAE businesses who trust Al Mahmasani Roasteries to supply premium nuts and snacks with consistency and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971504622865"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.18em]"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
              <Link href="/contact" className="btn btn-outline-gold text-[11px] tracking-[0.18em] text-center">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
