import Image from "next/image";
import Link from "next/link";

/* ────────────────────────────────────────────
   PRODUCT DATA
──────────────────────────────────────────── */

/* Chocolate-Coated Nuts — Pecan (11) + Almond (8) */
const chocolateProducts = [
  { name: "Pecan Milk",           img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_af6ed3af6ed3af6e.png" },
  { name: "Pecan Caramel",        img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_mstiu0mstiu0msti.png" },
  { name: "Pecan White",          img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_q5f1awq5f1awq5f1.png" },
  { name: "Pecan Dark Chocolate", img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_vxzyb0vxzyb0vxzy.png" },
  { name: "Pecan Cocoa",          img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_6see796see796see (1).png" },
  { name: "Pecan Matcha",         img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_64gus764gus764gu (1) (1).png" },
  { name: "Pecan Oreo",           img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_wewh3qwewh3qwewh (1).png" },
  { name: "Pecan Lotus",          img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_ydaskwydaskwydas.png" },
  { name: "Pecan Raspberry",      img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_yubfqlyubfqlyubf (1).png" },
  { name: "Pecan Mango",          img: "/images/Catalogue Photos/Pecan 2/55bf0020-d115-4536-b96a-be01d6a1f82f.png" },
  { name: "Pecan Mix",            img: "/images/Catalogue Photos/Pecan 2/Gemini_Generated_Image_af6ed3af6ed3af6e.png" },
  { name: "Almond Milk Chocolate", img: "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_4w45ud4w45ud4w45.png" },
  { name: "Almond Caramel",       img: "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_7rsipk7rsipk7rsi.png" },
  { name: "Almond White",         img: "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_ayp41iayp41iayp4.png" },
  { name: "Almond Dark Chocolate",img: "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_ayp688ayp688ayp6.png" },
  { name: "Almond Cocoa",         img: "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_cfk48xcfk48xcfk4.png" },
  { name: "Almond Oreo",          img: "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_qshizzqshizzqshi.png" },
  { name: "Almond Lotus",         img: "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_vb7ezovb7ezovb7e.png" },
  { name: "Almond Mix",           img: "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_xnbly1xnbly1xnbl.png" },
];

/* Hazelnut Collection (7) */
const hazelnutProducts = [
  { name: "Hazelnut Milk Chocolate", img: "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_l339rul339rul339.png" },
  { name: "Hazelnut Caramel",        img: "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_ln68rsln68rsln68 (1).png" },
  { name: "Hazelnut White",          img: "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_mzzy5mmzzy5mmzzy.png" },
  { name: "Hazelnut Dark Chocolate", img: "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_u86dsdu86dsdu86d.png" },
  { name: "Hazelnut Cocoa",          img: "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_l339rul339rul339.png" },
  { name: "Hazelnut Oreo",           img: "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_ln68rsln68rsln68 (1).png" },
  { name: "Hazelnut Mix",            img: "/images/Catalogue Photos/Hezelnuts/Gemini_Generated_Image_mzzy5mmzzy5mmzzy.png" },
];

/* Cashew Collection (5) */
const cashewProducts = [
  { name: "Cashew Milk",    img: "/images/Catalogue Photos/Cashew/Gemini_Generated_Image_6nmgl56nmgl56nmg.png" },
  { name: "Cashew Caramel", img: "/images/Catalogue Photos/Cashew/Gemini_Generated_Image_fd2qw1fd2qw1fd2q.png" },
  { name: "Cashew White",   img: "/images/Catalogue Photos/Cashew/Gemini_Generated_Image_jmh8w5jmh8w5jmh8.png" },
  { name: "Cashew Dark",    img: "/images/Catalogue Photos/Cashew/Gemini_Generated_Image_krelcykrelcykrel.png" },
  { name: "Cashew Mix",     img: "/images/Catalogue Photos/Cashew/Gemini_Generated_Image_w35cxiw35cxiw35c.png" },
];

/* Coffee Collection (7) */
const coffeeProducts = [
  { name: "Coffee Milk Chocolate",                  img: "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_2cfk252cfk252cfk.png" },
  { name: "Coffee White Chocolate",                 img: "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_2e2kw72e2kw72e2k.png" },
  { name: "Coffee Dark Chocolate",                  img: "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_35xuo835xuo835xu.png" },
  { name: "Coffee Dusted Saudi Beans",              img: "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_3d9w513d9w513d9w.png" },
  { name: "Coffee Dusted Powder & White Chocolates",img: "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_49w10g49w10g49w1.png" },
  { name: "Coffee Dusted Powder Chocolates",        img: "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_kjmce9kjmce9kjmc.png" },
  { name: "Coffee Chocolates Mix",                  img: "/images/Catalogue Photos/Cofee/Gemini_Generated_Image_rf8iyerf8iyerf8i.png" },
];

/* Roastery Collection (5) */
const roasteryProducts = [
  { name: "Raisins Mix Flavours", img: "/images/Pistachio Roasted.jpg.jpeg" },
  { name: "Strawberry Milk",      img: "/images/Almond Unsalted.jpg.jpeg" },
  { name: "Strawberry White",     img: "/images/Peanut Roasted.jpg.jpeg" },
  { name: "Raspberry White",      img: "/images/cashew roasted.jpg.jpeg" },
  { name: "Strawberry Dark",      img: "/images/Catalogue Photos/Almond 1/Gemini_Generated_Image_4w45ud4w45ud4w45.png" },
];

/* Savoury Collection */
const savouryGroups = [
  {
    label: "Cashew Kri Kri",
    items: [
      { name: "Cashew Krikri Original",          img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 1.png" },
      { name: "Cashew Krikri Lemon",             img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 2.png" },
      { name: "Cashew Krikri Zaatar",            img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 3.png" },
      { name: "Cashew Krikri Onion and Paprika", img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 4.png" },
      { name: "Cashew Krikri Tikka Masala",      img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 5.png" },
      { name: "Cashew Krikri Chilli",            img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 6.png" },
      { name: "Cashew Krikri BBQ",               img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 7.png" },
      { name: "Cashew Krikri Truffle",           img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 8.png" },
      { name: "Cashew Krikri Cheetos",           img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 9.png" },
    ],
  },
  {
    label: "Cashew Cracker",
    items: [
      { name: "Cashew Cracker Chilli",            img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 10.png" },
      { name: "Cashew Cracker Cheese",            img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 11.png" },
      { name: "Cashew Cracker Zaatar",            img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 12.png" },
      { name: "Cashew Cracker Salt and Vinegar",  img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 13.png" },
      { name: "Cashew Cracker Ketchup",           img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 14.png" },
      { name: "Cashew Cracker Cheetos",           img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Cashew 15.png" },
    ],
  },
  {
    label: "Almond Kri Kri",
    items: [
      { name: "Almonds Krikri Original", img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Almond 1.png" },
      { name: "Almonds Krikri BBQ",      img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Almond 2.png" },
    ],
  },
  {
    label: "Peanut Kri Kri",
    items: [
      { name: "Peanut Krikri Original", img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 1.png" },
      { name: "Peanut Krikri Cheese",   img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 2.png" },
    ],
  },
  {
    label: "Peanut Ball",
    items: [
      { name: "Peanut Ball Cheetos", img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 3.png" },
      { name: "Peanut Ball Cheese",  img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 4.png" },
      { name: "Peanut Ball Ketchup", img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Penuts 5.png" },
    ],
  },
  {
    label: "Sunflower Cracker",
    items: [
      { name: "Sunflower Cracker BBQ",              img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 1.png" },
      { name: "Sunflower Cracker Chilli",           img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 2.png" },
      { name: "Sunflower Cracker Onion and Paprika",img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 3.png" },
      { name: "Sunflower Cracker Zaatar",           img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 4.png" },
      { name: "Sunflower Cracker Cheese",           img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 5.png" },
      { name: "Sunflower Cracker Ketchup",          img: "/images/Cashew, Penuts & Sunflowers/Cashew, Penuts & Sunflowers/Sunflower 6.png" },
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
