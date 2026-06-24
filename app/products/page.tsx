import Image from "next/image";
import Link from "next/link";

/* ────────────────────────────────────────────
   PRODUCT DATA
──────────────────────────────────────────── */

/* Chocolate-Coated Nuts — Pecan (11) + Almond (8) */
const chocolateProducts = [
  { name: "Pecan Chocolate 1", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_af6ed3af6ed3af6e.png" },
  { name: "Pecan Chocolate 2", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_mstiu0mstiu0msti.png" },
  { name: "Pecan Chocolate 3", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_q5f1awq5f1awq5f1.png" },
  { name: "Pecan Chocolate 4", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_vxzyb0vxzyb0vxzy.png" },
  { name: "Pecan Chocolate 5", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_6see796see796see (1).png" },
  { name: "Pecan Chocolate 6", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_64gus764gus764gu (1) (1).png" },
  { name: "Pecan Chocolate 7", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_wewh3qwewh3qwewh (1).png" },
  { name: "Pecan Chocolate 8", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_ydaskwydaskwydas.png" },
  { name: "Pecan Chocolate 9", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_yubfqlyubfqlyubf (1).png" },
  { name: "Pecan Chocolate 10", img: "/Images/Catalogue Photos/Pecan 2/55bf0020-d115-4536-b96a-be01d6a1f82f.png" },
  { name: "Pecan Chocolate 11", img: "/Images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_af6ed3af6ed3af6e.png" },
  { name: "Almond Chocolate 1", img: "/Images/Catalogue Photos/Almond 1/Gemini_Generated_Image_4w45ud4w45ud4w45.png" },
  { name: "Almond Chocolate 2", img: "/Images/Catalogue Photos/Almond 1/Gemini_Generated_Image_7rsipk7rsipk7rsi.png" },
  { name: "Almond Chocolate 3", img: "/Images/Catalogue Photos/Almond 1/Gemini_Generated_Image_ayp41iayp41iayp4.png" },
  { name: "Almond Chocolate 4", img: "/Images/Catalogue Photos/Almond 1/Gemini_Generated_Image_ayp688ayp688ayp6.png" },
  { name: "Almond Chocolate 5", img: "/Images/Catalogue Photos/Almond 1/Gemini_Generated_Image_cfk48xcfk48xcfk4.png" },
  { name: "Almond Chocolate 6", img: "/Images/Catalogue Photos/Almond 1/Gemini_Generated_Image_qshizzqshizzqshi.png" },
  { name: "Almond Chocolate 7", img: "/Images/Catalogue Photos/Almond 1/Gemini_Generated_Image_vb7ezovb7ezovb7e.png" },
  { name: "Almond Chocolate 8", img: "/Images/Catalogue Photos/Almond 1/Gemini_Generated_Image_xnbly1xnbly1xnbl.png" },
];

/* Hazelnut Collection (7) */
const hazelnutProducts = [
  { name: "Hazelnut Premium 1", img: "/Images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_l339rul339rul339.png" },
  { name: "Hazelnut Premium 2", img: "/Images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_ln68rsln68rsln68 (1).png" },
  { name: "Hazelnut Premium 3", img: "/Images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_mzzy5mmzzy5mmzzy.png" },
  { name: "Hazelnut Premium 4", img: "/Images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_u86dsdu86dsdu86d.png" },
  { name: "Hazelnut Premium 5", img: "/Images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_l339rul339rul339.png" },
  { name: "Hazelnut Premium 6", img: "/Images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_ln68rsln68rsln68 (1).png" },
  { name: "Hazelnut Premium 7", img: "/Images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_mzzy5mmzzy5mmzzy.png" },
];

/* Cashew Collection (5) */
const cashewProducts = [
  { name: "Cashew Roasted Salted",   img: "/Images/Catalogue Photos/Cashew/Gemini_Generated_Image_6nmgl56nmgl56nmg.png" },
  { name: "Cashew Roasted Unsalted", img: "/Images/Catalogue Photos/Cashew/Gemini_Generated_Image_fd2qw1fd2qw1fd2q.png" },
  { name: "Cashew Jumbo",            img: "/Images/Catalogue Photos/Cashew/Gemini_Generated_Image_jmh8w5jmh8w5jmh8.png" },
  { name: "Cashew Butter Toffee",    img: "/Images/Catalogue Photos/Cashew/Gemini_Generated_Image_krelcykrelcykrel.png" },
  { name: "Cashew Spiced",           img: "/Images/Catalogue Photos/Cashew/Gemini_Generated_Image_w35cxiw35cxiw35c.png" },
];

/* Coffee Collection (7) */
const coffeeProducts = [
  { name: "Coffee Almond Roast 1",   img: "/Images/Catalogue Photos/Cofee/Gemini_Generated_Image_2cfk252cfk252cfk.png" },
  { name: "Coffee Almond Roast 2",   img: "/Images/Catalogue Photos/Cofee/Gemini_Generated_Image_2e2kw72e2kw72e2k.png" },
  { name: "Coffee Cashew Blend",     img: "/Images/Catalogue Photos/Cofee/Gemini_Generated_Image_35xuo835xuo835xu.png" },
  { name: "Coffee Pecan Glaze",      img: "/Images/Catalogue Photos/Cofee/Gemini_Generated_Image_3d9w513d9w513d9w.png" },
  { name: "Espresso Hazelnut",       img: "/Images/Catalogue Photos/Cofee/Gemini_Generated_Image_49w10g49w10g49w1.png" },
  { name: "Coffee Nut Mix",          img: "/Images/Catalogue Photos/Cofee/Gemini_Generated_Image_kjmce9kjmce9kjmc.png" },
  { name: "Arabica Glazed Nuts",     img: "/Images/Catalogue Photos/Cofee/Gemini_Generated_Image_rf8iyerf8iyerf8i.png" },
];

/* Fruit Collection (6) — placeholder cards */
const fruitProducts = [
  { name: "Roasted Pistachio",    img: "/Images/Pistachio Roasted.jpg.jpeg" },
  { name: "Premium Almonds",      img: "/Images/Almond Unsalted.jpg.jpeg" },
  { name: "Roasted Peanuts",      img: "/Images/Peanut Roasted.jpg.jpeg" },
  { name: "Dried Mango",          img: null },
  { name: "Dried Cranberry",      img: null },
  { name: "Mixed Dried Fruit",    img: null },
];

/* Savoury Collection */
const savouryGroups = [
  {
    label: "Cashew Kri Kri",
    items: [
      { name: "Cashew Kri Kri 1",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 1.png" },
      { name: "Cashew Kri Kri 2",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 2.png" },
      { name: "Cashew Kri Kri 3",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 3.png" },
      { name: "Cashew Kri Kri 4",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 4.png" },
      { name: "Cashew Kri Kri 5",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 5.png" },
      { name: "Cashew Kri Kri 6",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 6.png" },
      { name: "Cashew Kri Kri 7",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 7.png" },
      { name: "Cashew Kri Kri 8",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 8.png" },
      { name: "Cashew Kri Kri 9",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 9.png" },
    ],
  },
  {
    label: "Cashew Cracker",
    items: [
      { name: "Cashew Cracker 1",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 10.png" },
      { name: "Cashew Cracker 2",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 11.png" },
      { name: "Cashew Cracker 3",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 12.png" },
      { name: "Cashew Cracker 4",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 13.png" },
      { name: "Cashew Cracker 5",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 14.png" },
      { name: "Cashew Cracker 6",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 15.png" },
    ],
  },
  {
    label: "Almond Kri Kri",
    items: [
      { name: "Almond Kri Kri 1",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Almond 1.png" },
      { name: "Almond Kri Kri 2",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Almond 2.png" },
    ],
  },
  {
    label: "Peanut Kri Kri",
    items: [
      { name: "Peanut Kri Kri 1",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 1.png" },
      { name: "Peanut Kri Kri 2",  img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 2.png" },
    ],
  },
  {
    label: "Peanut Ball",
    items: [
      { name: "Peanut Ball 1",     img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 3.png" },
      { name: "Peanut Ball 2",     img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 4.png" },
      { name: "Peanut Ball 3",     img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 5.png" },
    ],
  },
  {
    label: "Sunflower Cracker",
    items: [
      { name: "Sunflower Cracker 1", img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 1.png" },
      { name: "Sunflower Cracker 2", img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 2.png" },
      { name: "Sunflower Cracker 3", img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 3.png" },
      { name: "Sunflower Cracker 4", img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 4.png" },
      { name: "Sunflower Cracker 5", img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 5.png" },
      { name: "Sunflower Cracker 6", img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 6.png" },
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
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
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
          <Image src="/Images/Almond Unsalted.jpg.jpeg" alt="Products" fill sizes="100vw" style={{ objectFit: "cover" }} />
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
            {["#chocolate","#hazelnut","#cashew","#coffee","#fruit","#savoury","#mixed"].map((h, i) => {
              const labels = ["Chocolate","Hazelnut","Cashew","Coffee","Fruit","Savoury","Mixed"];
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
        desc="Our best-selling whole cashews. Sourced from Vietnam and India, roasted in-house for peak freshness.">
        <div className="grid-4">
          {cashewProducts.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </CategorySection>

      {/* ── Coffee Collection ── */}
      <CategorySection id="coffee" eyebrow="Collection 04" title="Coffee Collection"
        desc="Arabica coffee glazes and espresso coatings applied to premium nuts. A category-defining range for specialty retailers.">
        <div className="grid-4">
          {coffeeProducts.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </CategorySection>

      {/* ── Fruit Collection ── */}
      <CategorySection id="fruit" eyebrow="Collection 05" title="Fruit Collection"
        desc="Roasted and dried premium fruits. Naturally sweetened, no added preservatives.">
        <div className="grid-4">
          {fruitProducts.map((p) => <ProductCard key={p.name} name={p.name} img={p.img} />)}
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

      {/* ── Mixed Nuts ── */}
      <CategorySection id="mixed" eyebrow="Collection 07" title="Mixed Nuts"
        desc="Signature blends combining the best of our roastery. Custom blend ratios available for wholesale partners.">
        <div className="grid-4">
          {[
            { name: "Classic Mixed Nuts",     img: "/Images/Peanut Roasted.jpg.jpeg" },
            { name: "Premium Deluxe Mix",     img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 16.png" },
            { name: "Roasted Mixed Selection",img: "/Images/cashew roasted.jpg.jpeg" },
            { name: "Party Mix",              img: "/Images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 1.png" },
          ].map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </CategorySection>

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
