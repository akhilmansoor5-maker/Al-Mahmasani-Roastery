import Image from "next/image";
import Link from "next/link";

/* ────────────────────────────────────────────
   PRODUCT DATA
──────────────────────────────────────────── */

/* Chocolate-Coated Nuts — Pecan (11) + Almond (8) */
const chocolateProducts: { name: string; img: string | null }[] = [
  { name: "Pecan Milk",            img: "/images/products/pecan-9.jpg" },
  { name: "Pecan Caramel",         img: "/images/products/pecan-1.jpg" },
  { name: "Pecan White",           img: "/images/products/pecan-6.jpg" },
  { name: "Pecan Dark Chocolate",  img: "/images/products/pecan-4.jpg" },
  { name: "Pecan Cocoa",           img: "/images/products/pecan-5.jpg" },
  { name: "Pecan Matcha",          img: "/images/products/pecan-7.jpg" },
  { name: "Pecan Oreo",            img: "/images/products/pecan-2.jpg" },
  { name: "Pecan Lotus",           img: "/images/products/pecan-3.jpg" },
  { name: "Pecan Raspberry",       img: "/images/products/pecan-8.jpg" },
  { name: "Pecan Mango",           img: "/images/products/pecan-10.jpg" },
  { name: "Pecan Mix",             img: "/images/products/pecan-mix.jpg" },
  { name: "Almond Milk Chocolate", img: "/images/products/almond-6.jpg" },
  { name: "Almond Caramel",        img: "/images/products/almond-5.jpg" },
  { name: "Almond White",          img: "/images/products/almond-3.jpg" },
  { name: "Almond Dark Chocolate", img: "/images/products/almond-7.jpg" },
  { name: "Almond Cocoa",          img: "/images/products/almond-2.jpg" },
  { name: "Almond Oreo",           img: "/images/products/almond-8.jpg" },
  { name: "Almond Lotus",          img: "/images/products/almond-4.jpg" },
  { name: "Almond Mix",            img: "/images/products/almond-1.jpg" },
];

/* Hazelnut Collection (7) */
const hazelnutProducts: { name: string; img: string | null }[] = [
  { name: "Hazelnut Milk Chocolate", img: "/images/products/hazelnut-1.jpg" },
  { name: "Hazelnut Caramel",        img: null },
  { name: "Hazelnut White",          img: "/images/products/hazelnut-3.jpg" },
  { name: "Hazelnut Dark Chocolate", img: "/images/products/hazelnut-2.jpg" },
  { name: "Hazelnut Cocoa",          img: null },
  { name: "Hazelnut Oreo",           img: "/images/products/hazelnut-4.jpg" },
  { name: "Hazelnut Mix",            img: null },
];

/* Cashew Collection (5) */
const cashewProducts = [
  { name: "Cashew Milk",    img: "/images/products/cashew-5.jpg" },
  { name: "Cashew Caramel", img: "/images/products/cashew-3.jpg" },
  { name: "Cashew White",   img: "/images/products/cashew-4.jpg" },
  { name: "Cashew Dark",    img: "/images/products/cashew-2.jpg" },
  { name: "Cashew Mix",     img: "/images/products/cashew-1.jpg" },
];

/* Coffee Collection (7) */
const coffeeProducts = [
  { name: "Coffee Milk Chocolate",                   img: "/images/products/coffee-5.jpg" },
  { name: "Coffee White Chocolate",                  img: "/images/products/coffee-6.jpg" },
  { name: "Coffee Dark Chocolate",                   img: "/images/products/coffee-2.jpg" },
  { name: "Coffee Dusted Saudi Beans",               img: "/images/products/coffee-1.jpg" },
  { name: "Coffee Dusted Powder & White Chocolates", img: "/images/products/coffee-3.jpg" },
  { name: "Coffee Dusted Powder Chocolates",         img: "/images/products/coffee-7.jpg" },
  { name: "Coffee Chocolates Mix",                   img: "/images/products/coffee-4.jpg" },
];

/* Roastery Collection (5) */
const roasteryProducts: { name: string; img: string | null }[] = [
  { name: "Raisins Mix Flavours", img: "/images/products/raisins-mix.jpg" },
  { name: "Strawberry Milk",      img: "/images/products/strawberry-milk.jpg" },
  { name: "Strawberry White",     img: "/images/products/strawberry-white.jpg" },
  { name: "Raspberry White",      img: "/images/products/raspberry-white.jpg" },
  { name: "Strawberry Dark",      img: "/images/products/strawberry-dark.jpg" },
];

/* Savoury Collection — mapped from 2026 catalogue audit */
const IMG = "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/";
const savouryGroups = [
  {
    label: "Cashew Kri Kri",
    items: [
      { name: "Cashew Kri kri Original",          img: IMG + "Cashew 16.png" },
      { name: "Cashew Kri kri Lemon",             img: IMG + "Cashew 12.png" },
      { name: "Cashew Kri kri Zaatar",            img: IMG + "Cashew 4.png"  },
      { name: "Cashew Kri kri Onion and Paprika", img: IMG + "Cashew 5.png"  },
      { name: "Cashew Kri kri Tikka Masala",      img: IMG + "Cashew 11.png" },
      { name: "Cashew Kri kri Chilli",            img: IMG + "Cashew 3.png"  },
      { name: "Cashew Kri kri BBQ",               img: IMG + "Cashew 14.png" },
      { name: "Cashew Kri kri Truffle",           img: IMG + "Cashew 15.png" },
      { name: "Cashew Kri kri Cheetos",           img: IMG + "Cashew 8.png"  },
    ],
  },
  {
    label: "Cashew Cracker",
    items: [
      { name: "Cashew Cracker Chilli",           img: IMG + "Cashew 9.png"  },
      { name: "Cashew Cracker Cheese",           img: IMG + "Cashew 2.png"  },
      { name: "Cashew Cracker Zaatar",           img: IMG + "Cashew 10.png" },
      { name: "Cashew Cracker Salt and Vinegar", img: IMG + "Cashew 13.png" },
      { name: "Cashew Cracker Ketchup",          img: IMG + "Cashew 7.png"  },
      { name: "Cashew Cracker Cheetos",          img: IMG + "Cashew 6.png"  },
    ],
  },
  {
    label: "Almond Kri Kri",
    items: [
      { name: "Almonds Kri kri Original", img: IMG + "Almond 1.png" },
      { name: "Almonds Kri kri BBQ",      img: IMG + "Almond 2.png" },
    ],
  },
  {
    label: "Peanut Kri Kri",
    items: [
      { name: "Peanut Kri kri Original", img: IMG + "Penuts 3.png" },
      { name: "Peanut Kri kri Cheese",   img: IMG + "Penuts 1.png" },
    ],
  },
  {
    label: "Peanut Ball",
    items: [
      { name: "Peanut Ball Cheetos", img: IMG + "Penuts 4.png" },
      { name: "Peanut Ball Cheese",  img: IMG + "Penuts 2.png" },
      { name: "Peanut Ball Ketchup", img: IMG + "Penuts 5.png" },
    ],
  },
  {
    label: "Sunflower Cracker",
    items: [
      { name: "Sunflower Cracker BBQ",               img: IMG + "Sunflower 1.png" },
      { name: "Sunflower Cracker Chilli",            img: IMG + "Sunflower 6.png" },
      { name: "Sunflower Cracker Onion and Paprika", img: IMG + "Sunflower 2.png" },
      { name: "Sunflower Cracker Zaatar",            img: IMG + "Sunflower 5.png" },
      { name: "Sunflower Cracker Cheese",            img: IMG + "Sunflower 3.png" },
      { name: "Sunflower Cracker Ketchup",           img: IMG + "Sunflower 4.png" },
    ],
  },
  {
    label: "Kernel Mix",
    items: [
      { name: "Kernel Mix", img: null },
    ],
  },
];

/* ── Reusable card ── */
function ProductCard({ name, img }: { name: string; img: string | null }) {
  return (
    <div className="card" style={{ background: "white" }}>
      <div className="card-img" style={{ height: "220px", position: "relative" }}>
        {img ? (
          <Image src={img} alt={name} fill sizes="320px" style={{ objectFit: "cover" }} />
        ) : (
          <div className="card-placeholder" style={{ height: "220px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
            <span className="card-placeholder-label">Image Coming Soon</span>
          </div>
        )}
      </div>
      <div style={{ padding: "16px 20px 20px" }}>
        <p style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", color: "var(--dark)", marginBottom: "12px" }}>{name}</p>
        <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "var(--sans)", fontSize: "12px", color: "var(--gold)", fontWeight: 500, letterSpacing: "0.06em" }}>
          Enquire via WhatsApp →
        </a>
      </div>
    </div>
  );
}

/* ── Section header ── */
function CategorySection({ id, eyebrow, title, desc, children }: {
  id: string; eyebrow: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ marginBottom: "48px" }}>
          <p className="eyebrow" style={{ marginBottom: "12px" }}>{eyebrow}</p>
          <h2 className="display-lg" style={{ color: "var(--dark)", marginBottom: "16px" }}>{title}</h2>
          <p className="body-lg" style={{ maxWidth: "560px" }}>{desc}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "50vh", position: "relative", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/Almond Unsalted.jpg.jpeg" alt="Products" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(28,18,8,0.75)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "140px" }}>
          <p className="eyebrow hero-in-1" style={{ marginBottom: "16px" }}>Our Collections</p>
          <h1 className="display-xl hero-in-2" style={{ color: "white", maxWidth: "640px", marginBottom: "20px" }}>
            Premium Nuts &amp;<br />Artisan Snacks
          </h1>
          <p className="body-lg hero-in-3" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "480px", marginBottom: "36px" }}>
            200+ SKUs across 7 curated categories. All available for wholesale enquiry.
          </p>
          {/* Quick nav pills */}
          <div className="hero-in-4" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["#chocolate","#hazelnut","#cashew","#coffee","#fruit","#savoury"].map((h, i) => {
              const labels = ["Chocolate","Hazelnut","Cashew","Coffee","Roastery","Savoury"];
              return (
                <a key={h} href={h} className="btn btn-outline-white" style={{ fontSize: "13px", padding: "9px 18px" }}>
                  {labels[i]}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Chocolate-Coated Nuts ── */}
      <CategorySection id="chocolate" eyebrow="Collection 01" title="Chocolate-Coated Nuts"
        desc="Belgian chocolate meets artisan-roasted nuts. Available in milk, dark and white chocolate finishes.">
        <div className="grid-4">
          {chocolateProducts.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </CategorySection>

      {/* ── Hazelnut Collection ── */}
      <CategorySection id="hazelnut" eyebrow="Collection 02" title="Hazelnut Collection"
        desc="Premium Turkish hazelnuts roasted to golden perfection. Available raw, roasted, salted, and honey-glazed.">
        <div className="grid-4">
          {hazelnutProducts.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </CategorySection>

      {/* ── Cashew Collection ── */}
      <CategorySection id="cashew" eyebrow="Collection 03" title="Cashew Collection"
        desc="Premium cashews enrobed in milk, caramel, white and dark chocolate — our most versatile coated nut range.">
        <div className="grid-4">
          {cashewProducts.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </CategorySection>

      {/* ── Coffee Collection ── */}
      <CategorySection id="coffee" eyebrow="Collection 04" title="Coffee Collection"
        desc="Premium roasted coffee beans coated in milk, white and dark chocolate. Includes Saudi coffee specialties and dusted varieties.">
        <div className="grid-4">
          {coffeeProducts.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </CategorySection>

      {/* ── Roastery Collection ── */}
      <CategorySection id="fruit" eyebrow="Collection 05" title="Roastery Collection"
        desc="Explore our premium range of roasted nuts.">
        <div className="grid-4">
          {roasteryProducts.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </CategorySection>

      {/* ── Savoury Collection ── */}
      <section id="savoury" className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: "48px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Collection 06</p>
            <h2 className="display-lg" style={{ color: "var(--dark)", marginBottom: "16px" }}>Savoury Collection</h2>
            <p className="body-lg" style={{ maxWidth: "560px" }}>Kri Kri flavoured nuts, crackers, and peanut balls. Bold savory flavours crafted for snack-forward retail shelves.</p>
          </div>
          {savouryGroups.map((group) => (
            <div key={group.label} style={{ marginBottom: "52px" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", color: "var(--dark)", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid var(--border)" }}>{group.label}</p>
              <div className="grid-4">
                {group.items.map((p) => <ProductCard key={p.name} {...p} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "var(--dark)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Wholesale Enquiries</p>
          <h2 className="display-lg" style={{ color: "white", marginBottom: "20px" }}>Interested in Any Product?</h2>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "440px", margin: "0 auto 36px" }}>
            Contact us for MOQs, pricing sheets, and custom blend options.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Get a Quote on WhatsApp →
            </a>
            <Link href="/contact" className="btn btn-outline-white">Send Email Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
