import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Al Mahmasani Roastery",
  description:
    "Learn about Al Mahmasani Roastery LLC — a family-owned UAE premium nuts and snacks brand established in 1975.",
};

const timeline = [
  { year: "1975", event: "Al Mahmasani Roastery is founded in the United Arab Emirates." },
  { year: "1985", event: "Expanded distribution to supermarkets and hypermarkets across UAE." },
  { year: "1995", event: "Launched a wider product range including dried fruits and mixed snacks." },
  { year: "2005", event: "Achieved UAE-wide distribution across all seven Emirates." },
  { year: "2015", event: "Modernised packaging while preserving our heritage quality standards." },
  { year: "2025", event: "50 years of excellence. Serving hundreds of business partners nationwide." },
];

const values = [
  {
    title: "Quality",
    desc: "Every product we offer undergoes careful selection to ensure it meets our exacting standards of taste, freshness and consistency.",
  },
  {
    title: "Heritage",
    desc: "Fifty years of experience is woven into everything we do — from how we source our products to how we serve our partners.",
  },
  {
    title: "Trust",
    desc: "Our relationships with customers are built on reliability. When you order from Al Mahmasani, you know exactly what you will receive.",
  },
  {
    title: "Partnership",
    desc: "We see our business clients not as customers but as long-term partners. Their success is our success.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/almond.jpg"
            alt="About Al Mahmasani"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Who We Are</p>
          <h1 className="text-white text-5xl md:text-6xl font-light leading-tight">
            Our<br />
            <span className="gold-text">Story</span>
          </h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-5 luxury-underline">Since 1975</p>
              <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8">
                Five Decades of<br />
                <span className="gold-text">Premium Quality</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Al Mahmasani Roastery LLC was established in 1975 with a founding vision: to bring
                the finest quality nuts, dried fruits and snack products to the United Arab Emirates.
                What began as a small family-run operation has grown into one of the UAE&apos;s most
                trusted wholesale food suppliers.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Over five decades, we have built enduring relationships with retailers, supermarkets,
                restaurants and businesses across the country. Our partners trust us because we have
                never compromised on the principles that defined us from day one: quality,
                consistency and genuine care for the people we serve.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                Today, Al Mahmasani is proud to be a family-owned brand that continues to honour its
                heritage while meeting the evolving needs of modern UAE businesses.
              </p>
              <a
                href="https://wa.me/971504622865"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c9a84c] text-sm tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300"
              >
                Work With Us <ChevronRight size={16} />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="relative h-96 img-zoom">
                  <Image
                    src="/images/pistachio.jpg"
                    alt="Al Mahmasani Heritage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#c9a84c] p-8 hidden lg:block">
                  <p className="text-black text-4xl font-light">1975</p>
                  <p className="text-black/70 text-xs tracking-widest uppercase mt-1">Established</p>
                </div>
                <div className="absolute -top-4 -right-4 border border-[#c9a84c]/30 p-6 bg-black hidden lg:block">
                  <p className="text-[#c9a84c] text-3xl font-light">50+</p>
                  <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Years</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#0d0d0d] border-y border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-6">Our Mission</p>
            <blockquote className="text-white text-2xl md:text-3xl font-light leading-relaxed italic">
              &ldquo;To deliver the highest quality nuts and snack products to businesses across the UAE,
              building partnerships rooted in trust, consistency and a genuine passion for
              premium food.&rdquo;
            </blockquote>
            <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-10" />
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">History</p>
            <h2 className="text-white text-4xl md:text-5xl font-light luxury-underline-center">
              Our Journey<br />
              <span className="gold-text">Through Time</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a84c]/50 via-[#c9a84c]/20 to-transparent hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 100}>
                  <div className={`flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                      <div className={`inline-block ${i % 2 === 0 ? "" : ""}`}>
                        <p className="text-[#c9a84c] text-3xl font-light mb-2">{item.year}</p>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">{item.event}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full border-2 border-[#c9a84c] bg-black relative z-10">
                      <div className="absolute inset-0.5 rounded-full bg-[#c9a84c] opacity-50" />
                    </div>

                    <div className="flex-1 md:pl-16 md:pr-0" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">What We Stand For</p>
            <h2 className="text-white text-4xl md:text-5xl font-light luxury-underline-center">
              Our<br />
              <span className="gold-text">Core Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 120}>
                <div className="border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 p-8 transition-all duration-500 bg-black/20 hover:bg-black/50 h-full">
                  <div className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4 font-medium">
                    0{i + 1}
                  </div>
                  <h3 className="text-white text-xl font-light mb-4">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-0">
        <div className="grid grid-cols-4 h-48 md:h-72">
          {["/images/cashew.jpg", "/images/almond.jpg", "/images/pistachio.jpg", "/images/peanut.jpg"].map((src, i) => (
            <div key={i} className="relative img-zoom">
              <Image src={src} alt="" fill sizes="25vw" style={{ objectFit: "cover" }} />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-[#c9a84c]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-6">Partner With Us</p>
            <h2 className="text-white text-4xl md:text-5xl font-light mb-6">
              Become Part of<br />
              <span className="gold-text">Our Story</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg mx-auto">
              Join the hundreds of UAE businesses who trust Al Mahmasani to supply premium nuts and snacks.
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
