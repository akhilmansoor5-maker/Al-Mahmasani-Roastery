import Image from "next/image";
import Link from "next/link";

const timeline = [
  { year: "1975", title: "Founded in Sharjah", desc: "Al Mahmasani Roasteries opens its first roasting facility in Sharjah Industrial Area, serving local markets." },
  { year: "1985", title: "First Retail Partnerships", desc: "Secured supply agreements with Carrefour and Union Coop, marking our entry into modern retail." },
  { year: "1998", title: "Expanded to Chocolate Coating", desc: "Launched our premium chocolate-coated nut line, now our most awarded product range." },
  { year: "2008", title: "UAE-Wide Distribution", desc: "Established distribution network covering all seven emirates, serving 500+ retail locations." },
  { year: "2015", title: "Kri Kri Savoury Launch", desc: "Introduced the Kri Kri flavoured snack line — a breakthrough product that redefined savoury nuts in the UAE." },
  { year: "2024", title: "200+ SKUs Milestone", desc: "Today we supply over 200 premium SKUs to 1,000+ wholesale partners across hospitality, retail and e-commerce." },
];

const values = [
  { icon: "◈", title: "Craft & Consistency", desc: "Every batch is roasted to the same exacting specification. Our partners rely on perfect consistency, every order." },
  { icon: "◇", title: "Sourced with Integrity", desc: "We partner directly with farms in Vietnam, Turkey, India and the US for full traceability and fair sourcing." },
  { icon: "◉", title: "Innovation Driven", desc: "Our R&D team continuously develops new flavour profiles and formats to keep our partners ahead of trends." },
  { icon: "◈", title: "Partnership First", desc: "We grow when our partners grow. Flexible MOQs, responsive support, and custom blend capabilities." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "70vh", position: "relative", display: "flex", alignItems: "flex-end", paddingBottom: "80px" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/cashew roasted.jpg.jpeg" alt="About Al Mahmasani" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.2 }} />
          <div style={{ position: "absolute", inset: 0, background: "var(--dark)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "140px" }}>
          <p className="eyebrow hero-in-1" style={{ marginBottom: "20px" }}>Our Story</p>
          <h1 className="display-xl hero-in-2" style={{ color: "white", maxWidth: "680px", marginBottom: "24px" }}>
            Five Decades of<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Absolute Craft.</em>
          </h1>
          <p className="body-lg hero-in-3" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "520px" }}>
            From a single roastery in Sharjah to the UAE&#39;s most trusted wholesale nut supplier — built on craft, consistency and genuine partnerships.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section id="story" className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container grid-2">
          <div>
            <p className="eyebrow" style={{ marginBottom: "20px" }}>Est. 1975</p>
            <h2 className="display-lg" style={{ color: "var(--dark)", marginBottom: "24px" }}>
              Born from a Passion<br />for the Perfect Roast
            </h2>
            <p className="body-lg" style={{ marginBottom: "20px" }}>
              In 1975, our founder set up a small roasting facility in Sharjah with a single belief: that premium nuts, roasted with care and consistency, could transform a business. Fifty years later, that belief drives everything we do.
            </p>
            <p className="body-lg" style={{ marginBottom: "32px" }}>
              Today, Al Mahmasani Roasteries supplies over 1,000 wholesale partners — from leading supermarket chains to boutique hotels — with 200+ SKUs across seven distinct product categories.
            </p>
            <Link href="/products" className="btn btn-dark">Explore Our Products</Link>
          </div>
          <div style={{ position: "relative", height: "500px", borderRadius: "var(--radius-card)", overflow: "hidden" }}>
            <Image src="/images/Almond Unsalted.jpg.jpeg" alt="Our roastery" fill sizes="600px" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Dark timeline */}
      <section id="heritage" className="section-pad" style={{ background: "var(--dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="eyebrow" style={{ marginBottom: "16px" }}>Our Journey</p>
            <h2 className="display-lg" style={{ color: "white" }}>Five Decades of Growth</h2>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{item.year}</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "14px", fontWeight: 600, color: "white", marginBottom: "8px", letterSpacing: "0.04em" }}>{item.title}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="quality" className="section-pad" style={{ background: "var(--card-bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p className="eyebrow" style={{ marginBottom: "16px" }}>What We Stand For</p>
            <h2 className="display-lg" style={{ color: "var(--dark)" }}>Our Core Values</h2>
          </div>
          <div className="grid-4">
            {values.map((v) => (
              <div key={v.title} style={{ background: "white", borderRadius: "var(--radius-card)", padding: "36px 28px", border: "1px solid var(--border)" }}>
                <p style={{ fontSize: "24px", marginBottom: "16px", color: "var(--gold)" }}>{v.icon}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", color: "var(--dark)", marginBottom: "12px" }}>{v.title}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing section */}
      <section id="sourcing" className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container grid-2">
          <div style={{ position: "relative", height: "420px", borderRadius: "var(--radius-card)", overflow: "hidden" }}>
            <Image src="/images/Peanut Roasted.jpg.jpeg" alt="Global sourcing" fill sizes="600px" style={{ objectFit: "cover" }} />
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: "20px" }}>Global Sourcing</p>
            <h2 className="display-lg" style={{ color: "var(--dark)", marginBottom: "24px" }}>
              From Farm to<br />Roastery to Shelf
            </h2>
            <p className="body-lg" style={{ marginBottom: "20px" }}>
              We source directly from premium growing regions — cashews from Vietnam and India, hazelnuts from Turkey, almonds from California. Direct relationships mean better quality, full traceability and no middlemen.
            </p>
            <p className="body-lg" style={{ marginBottom: "32px" }}>
              Every shipment is tested in our in-house quality lab before entering production. Only lots that meet our grade specifications are roasted and distributed.
            </p>
            <Link href="/contact" className="btn btn-dark">Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "var(--dark-2)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Join Our Network</p>
          <h2 className="display-lg" style={{ color: "white", maxWidth: "560px", margin: "0 auto 20px" }}>
            Ready to Partner with the UAE&#39;s Finest Roastery?
          </h2>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "400px", margin: "0 auto 36px" }}>
            Talk to our wholesale team today. Flexible terms, reliable supply, premium quality guaranteed.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Chat on WhatsApp →
            </a>
            <Link href="/contact" className="btn btn-outline-white">Send an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
