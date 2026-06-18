"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, X, MessageCircle, ArrowRight, ChevronDown } from "lucide-react";

const WHATSAPP = "https://wa.me/971504622865";

const categories = ["All", "Cashews", "Almonds", "Hazelnuts", "Pecans", "Coffee Nuts", "Mixed Nuts"];

const products = [
  // ─── CASHEWS ───
  {
    id: 1, name: "Roasted Cashews W180", category: "Cashews",
    image: "/images/products/cashew-1.jpg", tag: "Premium Grade",
    desc: "Large whole cashews roasted to golden perfection. W180 is our finest grade — buttery, crunchy and consistently sized.",
    sizes: ["250g", "500g", "1kg", "5kg", "10kg"],
    details: "W180 refers to 180 cashews per pound — our largest, most premium grade. Sourced from select growing regions and roasted in-house to our exact specification. Ideal for luxury retail, gifting and premium food service.",
    origin: "Vietnam / India",
  },
  {
    id: 2, name: "Roasted Cashews W210", category: "Cashews",
    image: "/images/products/cashew-2.jpg", tag: "Best Seller",
    desc: "Our most popular cashew grade. W210 offers the ideal balance of size, flavour and value for wholesale buyers.",
    sizes: ["250g", "500g", "1kg", "5kg", "10kg", "25kg"],
    details: "W210 cashews are the most in-demand grade across UAE retail and food service. Perfectly roasted with a satisfying crunch and buttery finish. Available in plain roasted, lightly salted and sea-salt variants.",
    origin: "Vietnam / India",
  },
  {
    id: 3, name: "Salted Cashews", category: "Cashews",
    image: "/images/products/cashew-3.jpg", tag: "Popular",
    desc: "Perfectly seasoned whole cashews with a fine sea-salt finish. A retail and hospitality staple.",
    sizes: ["150g", "250g", "500g", "1kg", "5kg"],
    details: "Our Salted Cashews are roasted and seasoned with fine sea salt in a precise ratio that enhances the natural sweetness without overpowering it. A perennial bestseller for hospitality, gifting and impulse retail.",
    origin: "Vietnam / India",
  },
  {
    id: 4, name: "Raw Cashews", category: "Cashews",
    image: "/images/products/cashew-4.jpg", tag: "Natural",
    desc: "Unroasted whole cashews for food manufacturers, bakeries and health-conscious consumers.",
    sizes: ["500g", "1kg", "5kg", "25kg"],
    details: "Premium raw cashews suitable for food processing, confectionery production and direct retail. Available in W180, W210 and W240 grades on request.",
    origin: "Vietnam / India",
  },
  // ─── ALMONDS ───
  {
    id: 5, name: "Roasted Almonds", category: "Almonds",
    image: "/images/products/almond-1.jpg", tag: "Signature",
    desc: "Whole almonds dry-roasted to a rich, nutty depth. A premium staple for retail and food service alike.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Our Roasted Almonds are slow-roasted to develop a deep, satisfying flavour with a crisp texture. Sourced from premium California and Australian orchards. No added oils — pure dry-roasted excellence.",
    origin: "USA / Australia",
  },
  {
    id: 6, name: "Natural Almonds", category: "Almonds",
    image: "/images/products/almond-2.jpg", tag: "Premium",
    desc: "Crisp, natural almonds with no added salt or oil. Perfect for health-oriented retail ranges.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Whole natural almonds with their skin intact, unroasted and unsalted. Rich in protein, fibre and vitamin E. Ideal for health food retailers, gym channels and premium snack subscription boxes.",
    origin: "USA / Australia",
  },
  {
    id: 7, name: "Blanched Almonds", category: "Almonds",
    image: "/images/products/almond-3.jpg", tag: "Food Service",
    desc: "Skin-removed whole almonds ideal for confectionery, dessert production and bakery applications.",
    sizes: ["500g", "1kg", "5kg", "25kg"],
    details: "Blanched almonds with the skin removed, revealing a smooth white surface. Preferred by bakeries, confectioners and pastry chefs. Available whole, slivered and flaked on request.",
    origin: "USA / Australia",
  },
  {
    id: 8, name: "Salted Almonds", category: "Almonds",
    image: "/images/products/almond-4.jpg", tag: "Popular",
    desc: "Dry-roasted almonds with a light, even salt seasoning for a perfect snacking experience.",
    sizes: ["150g", "250g", "500g", "1kg"],
    details: "Our Salted Almonds combine the rich flavour of dry-roasted almonds with a light, precise salt seasoning. A top performer in UAE supermarkets and convenience retail.",
    origin: "USA / Australia",
  },
  // ─── HAZELNUTS ───
  {
    id: 9, name: "Roasted Hazelnuts", category: "Hazelnuts",
    image: "/images/products/hazelnut-1.jpg", tag: "Signature",
    desc: "Whole hazelnuts roasted to bring out a rich, nutty depth. Beloved by confectioners and snack lovers alike.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Our Roasted Hazelnuts are sourced from premium Turkish growing regions — the world's leading hazelnut producer. Each nut is roasted to a deep golden finish, unlocking their natural oils for maximum flavour.",
    origin: "Turkey",
  },
  {
    id: 10, name: "Blanched Hazelnuts", category: "Hazelnuts",
    image: "/images/products/hazelnut-2.jpg", tag: "Confectionery",
    desc: "Skin-removed hazelnuts, perfect for pralines, chocolate production and premium patisserie work.",
    sizes: ["500g", "1kg", "5kg", "25kg"],
    details: "Blanched hazelnuts with the outer skin removed to reveal the smooth kernel underneath. The preferred choice for premium chocolate manufacturers, bakeries and confectioners across the UAE.",
    origin: "Turkey",
  },
  {
    id: 11, name: "Natural Hazelnuts", category: "Hazelnuts",
    image: "/images/products/hazelnut-3.jpg", tag: "Natural",
    desc: "Unroasted whole hazelnuts with skin intact — full flavour, straight from the source.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Premium natural hazelnuts, unprocessed and packed fresh. Ideal for consumers who prefer to roast at home, or for food manufacturers who require raw input. Consistent grade and size throughout.",
    origin: "Turkey",
  },
  {
    id: 12, name: "Salted Hazelnuts", category: "Hazelnuts",
    image: "/images/products/hazelnut-4.jpg", tag: "Popular",
    desc: "Roasted hazelnuts with a delicate sea-salt finish — a premium snacking product with excellent retail performance.",
    sizes: ["150g", "250g", "500g", "1kg"],
    details: "Our Salted Hazelnuts take the deep, toasted character of roasted hazelnuts and elevate it with a precise, light sea-salt seasoning. A strong performer in UAE premium retail and hotel minibar ranges.",
    origin: "Turkey",
  },
  // ─── PECANS ───
  {
    id: 13, name: "Roasted Pecans", category: "Pecans",
    image: "/images/products/pecan-1.jpg", tag: "Premium",
    desc: "Whole pecan halves dry-roasted to develop a rich, buttery depth. A luxury retail staple.",
    sizes: ["250g", "500g", "1kg"],
    details: "Our Roasted Pecans are sourced from premium American growing regions and slow-roasted to develop their signature buttery, caramel-like flavour. A top-performing product in luxury gifting and premium retail.",
    origin: "USA",
  },
  {
    id: 14, name: "Natural Pecans", category: "Pecans",
    image: "/images/products/pecan-2.jpg", tag: "Whole Halves",
    desc: "Unroasted pecan halves — exceptional quality, consistent sizing, ideal for baking and confectionery.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Premium pecan halves, unroasted, sourced from select American farms. Their rich, buttery flavour makes them a favourite of pastry chefs and bakers across the UAE. Available in mammoth and standard grade.",
    origin: "USA",
  },
  {
    id: 15, name: "Salted Pecans", category: "Pecans",
    image: "/images/products/pecan-3.jpg", tag: "Popular",
    desc: "Buttery pecan halves lightly seasoned with sea salt — an indulgent snack for premium retail.",
    sizes: ["150g", "250g", "500g"],
    details: "Our Salted Pecans combine the natural richness of dry-roasted pecans with a light sea-salt finish. Consistently popular in luxury supermarkets, hotel amenity spaces and corporate gifting.",
    origin: "USA",
  },
  {
    id: 16, name: "Candied Pecans", category: "Pecans",
    image: "/images/products/pecan-4.jpg", tag: "Specialty",
    desc: "Glazed pecan halves with a delicate caramel coating — a premium gifting and dessert ingredient.",
    sizes: ["150g", "250g", "500g"],
    details: "Our Candied Pecans are coated in a fine caramel glaze and slowly baked to a crisp finish. A highly premium product positioned for luxury gifting, five-star hotel service and high-end dessert menus.",
    origin: "UAE",
  },
  // ─── COFFEE NUTS ───
  {
    id: 17, name: "Coffee Roasted Cashews", category: "Coffee Nuts",
    image: "/images/products/coffee-1.jpg", tag: "Signature",
    desc: "Cashews roasted with a rich espresso coating — a sophisticated fusion of two premium ingredients.",
    sizes: ["150g", "250g", "500g"],
    details: "Our Coffee Roasted Cashews pair premium W210 cashews with a real espresso coating roasted to a deep, aromatic finish. A distinctive product for specialty cafés, premium gifting and luxury retail.",
    origin: "UAE",
  },
  {
    id: 18, name: "Coffee Roasted Almonds", category: "Coffee Nuts",
    image: "/images/products/coffee-2.jpg", tag: "Popular",
    desc: "Whole almonds with a bold coffee roast coating. A standout product for café-focused retail.",
    sizes: ["150g", "250g", "500g"],
    details: "Premium California almonds coated in a rich coffee blend and slow-roasted for an even finish. Our best-selling coffee nut variety. Ideal for café counters, specialty food retailers and corporate gifting.",
    origin: "UAE",
  },
  {
    id: 19, name: "Coffee Mixed Nuts", category: "Coffee Nuts",
    image: "/images/products/coffee-3.jpg", tag: "Premium Blend",
    desc: "A curated blend of coffee-roasted cashews, almonds and hazelnuts. Bold, aromatic and deeply satisfying.",
    sizes: ["150g", "250g", "500g"],
    details: "Our Coffee Mixed Nuts selection brings together three premium nut varieties united by a consistent, bold espresso roast. Ideal for artisan café retail, luxury gifting and discerning snack buyers.",
    origin: "UAE",
  },
  {
    id: 20, name: "Espresso Hazelnuts", category: "Coffee Nuts",
    image: "/images/products/coffee-4.jpg", tag: "Specialty",
    desc: "Whole hazelnuts wrapped in an espresso glaze — an exceptional pairing born in Italian confectionery tradition.",
    sizes: ["150g", "250g", "500g"],
    details: "Inspired by the classic Italian combination of coffee and hazelnuts. Our Espresso Hazelnuts are coated in a real espresso blend and roasted to a deep, even finish. A premium product for discerning retail channels.",
    origin: "UAE",
  },
  // ─── MIXED NUTS ───
  {
    id: 21, name: "Premium Mixed Nuts", category: "Mixed Nuts",
    image: "/images/products/cashew-5.jpg", tag: "Popular",
    desc: "A curated blend of cashews, almonds, hazelnuts and pecans — our most versatile mixed nut offering.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Our Premium Mixed Nuts bring together our finest cashews, almonds and hazelnuts in a carefully balanced blend. Each mix is packed fresh to ensure maximum quality and shelf life.",
    origin: "Blended in UAE",
  },
  {
    id: 22, name: "Deluxe Nut Mix", category: "Mixed Nuts",
    image: "/images/products/almond-5.jpg", tag: "Luxury",
    desc: "Our most elevated nut mix — macadamia, cashews, almonds, pecans and hazelnuts for discerning retail.",
    sizes: ["250g", "500g", "1kg"],
    details: "The Deluxe Nut Mix is our flagship premium blend, featuring whole macadamia nuts, W180 cashews, premium almonds and golden pecans. Designed for luxury gifting and five-star hospitality.",
    origin: "Blended in UAE",
  },
  {
    id: 23, name: "Cocktail Nut Mix", category: "Mixed Nuts",
    image: "/images/products/almond-6.jpg", tag: "Classic",
    desc: "A salted, mixed-nut blend crafted for bars, lounges and hospitality service across the UAE.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Specially formulated for hospitality use. Our Cocktail Nut Mix includes a balanced proportion of cashews, almonds and hazelnuts, lightly salted for a complementary snacking experience in bar and lounge settings.",
    origin: "Blended in UAE",
  },
  {
    id: 24, name: "Coffee Nut Mix", category: "Mixed Nuts",
    image: "/images/products/coffee-5.jpg", tag: "Specialty",
    desc: "Coffee-roasted cashews, almonds and hazelnuts in one bold blend — a premium gift and café product.",
    sizes: ["150g", "250g", "500g"],
    details: "A premium blend bringing together our three most popular coffee-roasted nut varieties. Perfect for specialty cafés, artisan food retailers and premium gifting. A strong impulse purchase product.",
    origin: "Blended in UAE",
  },
];

interface Product {
  id: number; name: string; category: string; image: string; tag: string;
  desc: string; sizes: string[]; details: string; origin: string;
}

function Modal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,7,2,0.85)" }} onClick={onClose}>
      <div
        className="max-w-2xl w-full max-h-[92vh] overflow-y-auto"
        style={{ background: "var(--bg-card)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-card)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72 overflow-hidden" style={{ borderRadius: "var(--radius-card) var(--radius-card) 0 0" }}>
          <Image src={product.image} alt={product.name} fill sizes="672px" style={{ objectFit: "cover" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-card) 0%, transparent 60%)" }} />
          <button onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(247,242,232,0.85)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-btn)", color: "var(--text)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--gold-mid)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
          >
            <X size={16} />
          </button>
          <div className="absolute top-4 left-4 text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 font-medium"
            style={{ background: "var(--gold-mid)", color: "#000", borderRadius: "var(--radius-btn)", fontFamily: "var(--sans)" }}>
            {product.tag}
          </div>
        </div>

        <div className="p-8">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-2" style={{ fontFamily: "var(--sans)", color: "var(--gold-mid)" }}>{product.category}</p>
          <h2 className="font-light mb-2" style={{ fontFamily: "var(--serif)", fontSize: "1.75rem", color: "var(--text)" }}>{product.name}</h2>
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>Origin: {product.origin}</p>
          <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>{product.details}</p>

          <div className="mb-8">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>Pack Sizes Available</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5"
                  style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-btn)", fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          <a
            href={`${WHATSAPP}?text=${encodeURIComponent(`Hello Al Mahmasani Roasteries,\n\nI am interested in ${product.name}.\n\nPlease provide pricing and availability for wholesale orders.\n\nThank you.`)}`}
            target="_blank" rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-[#20ba59] transition-all duration-300 font-medium"
            style={{ fontFamily: "var(--sans)", borderRadius: "var(--radius-btn)" }}
          >
            <MessageCircle size={15} />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = products.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/products/cashew-3.jpg" alt="Products" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/60 to-black/30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 40%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 page-enter">
          <p className="section-label block mb-4">Our Selection</p>
          <h1 className="text-white font-light leading-tight" style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem,7vw,5.5rem)" }}>
            Premium<br />
            <span className="gold-text">Products</span>
          </h1>
          <p className="text-white/50 text-sm mt-4 max-w-md" style={{ fontFamily: "var(--sans)" }}>
            {products.length}+ products across {categories.length - 1} categories — wholesale-ready, UAE-wide.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-5 sticky top-[60px] z-30" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Desktop categories */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="text-[10px] tracking-[0.25em] uppercase px-5 py-2 transition-all duration-200"
                  style={{
                    fontFamily: "var(--sans)",
                    border: "1.5px solid",
                    borderRadius: "var(--radius-btn)",
                    borderColor: activeCategory === cat ? "var(--gold-mid)" : "var(--border)",
                    background: activeCategory === cat ? "var(--gold-mid)" : "transparent",
                    color: activeCategory === cat ? "#000" : "var(--text-muted)",
                    fontWeight: activeCategory === cat ? 600 : 400,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile filter toggle */}
            <button className="md:hidden flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase px-4 py-2.5 transition-all"
              onClick={() => setShowFilters(!showFilters)}
              style={{ fontFamily: "var(--sans)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-btn)", color: "var(--text-muted)" }}>
              Filter: {activeCategory} <ChevronDown size={13} className={`transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {/* Search */}
            <div className="relative w-full md:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={14} style={{ color: "var(--text-faint)" }} />
              <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full text-sm pl-9 pr-8 py-2.5 outline-none transition-colors duration-200"
                style={{
                  fontFamily: "var(--sans)",
                  background: "var(--bg)",
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-btn)",
                  color: "var(--text)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--gold-mid)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors" style={{ color: "var(--text-faint)" }}>
                  <X size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Mobile filter dropdown */}
          {showFilters && (
            <div className="md:hidden flex flex-wrap gap-2 pt-4">
              {categories.map((cat) => (
                <button key={cat} onClick={() => { setActiveCategory(cat); setShowFilters(false); }}
                  className="text-[10px] tracking-[0.25em] uppercase px-4 py-2 transition-all duration-200"
                  style={{
                    fontFamily: "var(--sans)",
                    border: "1.5px solid",
                    borderRadius: "var(--radius-btn)",
                    borderColor: activeCategory === cat ? "var(--gold-mid)" : "var(--border)",
                    background: activeCategory === cat ? "var(--gold-mid)" : "transparent",
                    color: activeCategory === cat ? "#000" : "var(--text-muted)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: "clamp(20px,5vw,80px)", paddingRight: "clamp(20px,5vw,80px)" }}>
          {filtered.length === 0 ? (
            <div className="text-center py-28">
              <p className="text-lg mb-4" style={{ fontFamily: "var(--serif)", color: "var(--text-muted)" }}>No products found</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="text-xs tracking-widest uppercase hover:underline" style={{ fontFamily: "var(--sans)", color: "var(--gold-mid)" }}>
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>
                {filtered.length} product{filtered.length !== 1 ? "s" : ""} {activeCategory !== "All" ? `in ${activeCategory}` : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((p, i) => (
                  <AnimatedSection key={p.id} delay={i * 40}>
                    <button onClick={() => setSelected(p)}
                      className="group overflow-hidden text-left w-full h-full transition-all duration-300"
                      style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-card)", background: "var(--bg-card)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--gold-mid)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                    >
                      <div className="relative h-52 img-zoom overflow-hidden"
                        style={{ borderRadius: "calc(var(--radius-card) - 1px) calc(var(--radius-card) - 1px) 0 0" }}>
                        <Image src={p.image} alt={p.name} fill sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                        <div className="absolute top-3 left-3 text-[9px] tracking-[0.25em] uppercase px-2.5 py-1 font-medium"
                          style={{ background: "var(--gold-mid)", color: "#000", borderRadius: "var(--radius-btn)", fontFamily: "var(--sans)" }}>
                          {p.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] tracking-[0.3em] uppercase px-4 py-2 text-white"
                            style={{ border: "1px solid rgba(255,255,255,0.5)", borderRadius: "var(--radius-btn)", fontFamily: "var(--sans)" }}>
                            View Details
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-[9px] tracking-[0.4em] uppercase mb-1.5" style={{ fontFamily: "var(--sans)", color: "var(--gold-mid)" }}>{p.category}</p>
                        <h3 className="font-light mb-2 leading-snug" style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", color: "var(--text)" }}>{p.name}</h3>
                        <p className="text-xs leading-relaxed mb-5 line-clamp-2" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>{p.desc}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1.5 flex-wrap">
                            {p.sizes.slice(0, 3).map((s) => (
                              <span key={s} className="text-[9px] px-2 py-0.5"
                                style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-btn)", fontFamily: "var(--sans)", color: "var(--text-faint)" }}>
                                {s}
                              </span>
                            ))}
                            {p.sizes.length > 3 && <span className="text-[9px] py-0.5" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>+{p.sizes.length - 3}</span>}
                          </div>
                          <ArrowRight size={14} className="transition-colors duration-200 flex-shrink-0"
                            style={{ color: "var(--gold-mid)" }} />
                        </div>
                      </div>
                    </button>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="section-pad-md" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto text-center" style={{ paddingLeft: "clamp(20px,5vw,80px)", paddingRight: "clamp(20px,5vw,80px)" }}>
          <AnimatedSection>
            <p className="section-label block mb-5">Wholesale Enquiries</p>
            <h2 className="font-light mb-6" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--text)" }}>
              Looking for Bulk Orders?
            </h2>
            <p className="text-sm leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
              We offer flexible wholesale solutions for businesses of all sizes — from independent retailers to national supermarket chains. Contact us to discuss pricing, MOQs and delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="btn btn-gold inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.18em]">
                <MessageCircle size={15} />
                WhatsApp for Pricing
              </a>
              <a href="/contact" className="btn btn-outline-gold text-[11px] tracking-[0.18em] text-center">
                Send Enquiry Form
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {selected && <Modal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
