"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, X, MessageCircle, ArrowRight, ChevronDown } from "lucide-react";

const WHATSAPP = "https://wa.me/971504622865";

const categories = ["All", "Cashews", "Almonds", "Pistachios", "Peanuts", "Mixed Nuts", "Dried Fruits", "Seeds & Snacks"];

const products = [
  // ─── CASHEWS ───
  {
    id: 1,
    name: "Roasted Cashews W180",
    category: "Cashews",
    image: "/images/cashew.jpg",
    tag: "Premium Grade",
    desc: "Large whole cashews roasted to golden perfection. W180 is our finest grade — buttery, crunchy and consistently sized.",
    sizes: ["250g", "500g", "1kg", "5kg", "10kg"],
    details: "W180 refers to 180 cashews per pound — our largest, most premium grade. Sourced from select growing regions and roasted in-house to our exact specification. Ideal for luxury retail, gifting and premium food service. Consistent batch quality guaranteed.",
    origin: "Vietnam / India",
  },
  {
    id: 2,
    name: "Roasted Cashews W210",
    category: "Cashews",
    image: "/images/cashew.jpg",
    tag: "Best Seller",
    desc: "Our most popular cashew grade. W210 offers the ideal balance of size, flavour and value for wholesale buyers.",
    sizes: ["250g", "500g", "1kg", "5kg", "10kg", "25kg"],
    details: "W210 cashews are the most in-demand grade across UAE retail and food service. Perfectly roasted with a satisfying crunch and buttery finish. Available in plain roasted, lightly salted and sea-salt variants. Ideal for supermarkets and grocery chains.",
    origin: "Vietnam / India",
  },
  {
    id: 3,
    name: "Salted Cashews",
    category: "Cashews",
    image: "/images/cashew.jpg",
    tag: "Popular",
    desc: "Perfectly seasoned whole cashews with a fine sea-salt finish. A retail and hospitality staple.",
    sizes: ["150g", "250g", "500g", "1kg", "5kg"],
    details: "Our Salted Cashews are roasted and seasoned with fine sea salt in a precise ratio that enhances the natural sweetness without overpowering it. A perennial bestseller for hospitality, gifting and impulse retail.",
    origin: "Vietnam / India",
  },
  {
    id: 4,
    name: "Raw Cashews",
    category: "Cashews",
    image: "/images/cashew.jpg",
    tag: "Natural",
    desc: "Unroasted whole cashews for food manufacturers, bakeries and health-conscious consumers.",
    sizes: ["500g", "1kg", "5kg", "25kg"],
    details: "Premium raw cashews suitable for food processing, confectionery production and direct retail. Certified for quality and sourced from our trusted supply partners. Available in W180, W210 and W240 grades on request.",
    origin: "Vietnam / India",
  },
  // ─── ALMONDS ───
  {
    id: 5,
    name: "Roasted Almonds",
    category: "Almonds",
    image: "/images/almond.jpg",
    tag: "Signature",
    desc: "Whole almonds dry-roasted to a rich, nutty depth. A premium staple for retail and food service alike.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Our Roasted Almonds are slow-roasted to develop a deep, satisfying flavour with a crisp texture. Sourced from premium California and Australian orchards. No added oils — pure dry-roasted excellence.",
    origin: "USA / Australia",
  },
  {
    id: 6,
    name: "Unsalted Natural Almonds",
    category: "Almonds",
    image: "/images/almond.jpg",
    tag: "Premium",
    desc: "Crisp, natural almonds with no added salt or oil. Perfect for health-oriented retail ranges.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Whole natural almonds with their skin intact, unroasted and unsalted. Rich in protein, fibre and vitamin E. Ideal for health food retailers, gym channels and premium snack subscription boxes.",
    origin: "USA / Australia",
  },
  {
    id: 7,
    name: "Blanched Almonds",
    category: "Almonds",
    image: "/images/almond.jpg",
    tag: "Food Service",
    desc: "Skin-removed whole almonds ideal for confectionery, dessert production and bakery applications.",
    sizes: ["500g", "1kg", "5kg", "25kg"],
    details: "Blanched almonds with the skin removed, revealing a smooth white surface. Preferred by bakeries, confectioners and pastry chefs. Available whole, slivered and flaked on request.",
    origin: "USA / Australia",
  },
  {
    id: 8,
    name: "Salted Almonds",
    category: "Almonds",
    image: "/images/almond.jpg",
    tag: "Popular",
    desc: "Dry-roasted almonds with a light, even salt seasoning for a perfect snacking experience.",
    sizes: ["150g", "250g", "500g", "1kg"],
    details: "Our Salted Almonds combine the rich flavour of dry-roasted almonds with a light, precise salt seasoning. A top performer in UAE supermarkets and convenience retail. Consistently reordered by our wholesale partners.",
    origin: "USA / Australia",
  },
  // ─── PISTACHIOS ───
  {
    id: 9,
    name: "Roasted Pistachios",
    category: "Pistachios",
    image: "/images/pistachio.jpg",
    tag: "Signature",
    desc: "Open-shell pistachios roasted to a precise golden finish. Plump, flavourful and expertly sourced.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Our flagship pistachio product. Sourced from premium producers, each pistachio is selected for size, shell-opening rate and kernel quality. Roasted to bring out the full, natural flavour. Outstanding for luxury retail and gifting applications.",
    origin: "Iran / Turkey",
  },
  {
    id: 10,
    name: "Salted Pistachios",
    category: "Pistachios",
    image: "/images/pistachio.jpg",
    tag: "Best Seller",
    desc: "Roasted open-shell pistachios seasoned with fine sea salt. Our most reordered pistachio variant.",
    sizes: ["150g", "250g", "500g", "1kg", "5kg"],
    details: "Generously sized, roasted and salted pistachios. The salt enhances the natural sweetness of the kernel without masking it. A consistent bestseller across supermarkets, convenience stores and hospitality throughout the UAE.",
    origin: "Iran / Turkey",
  },
  {
    id: 11,
    name: "Iranian Pistachios",
    category: "Pistachios",
    image: "/images/pistachio.jpg",
    tag: "Premium Reserve",
    desc: "Authentic Iranian Fandoqi and Akbari grade pistachios — the world's most prized pistachio variety.",
    sizes: ["250g", "500g", "1kg"],
    details: "Iranian pistachios are widely regarded as the finest in the world. We source Fandoqi (round) and Akbari (long) varieties directly from trusted Iranian suppliers. These are our most premium pistachio offering, suited for luxury gifting and high-end retail.",
    origin: "Iran",
  },
  // ─── PEANUTS ───
  {
    id: 12,
    name: "Roasted Peanuts",
    category: "Peanuts",
    image: "/images/peanut.jpg",
    tag: "Classic",
    desc: "Consistently sized whole peanuts roasted to a deep, rich flavour. A wholesale essential.",
    sizes: ["250g", "500g", "1kg", "5kg", "10kg"],
    details: "Our Roasted Peanuts are a cornerstone of any quality snack range. Sourced from select farms, roasted in-house for consistent flavour and crunch. Available plain roasted, lightly salted and bold-salted. An ideal product for high-volume wholesale supply.",
    origin: "UAE / Egypt",
  },
  {
    id: 13,
    name: "Salted Peanuts",
    category: "Peanuts",
    image: "/images/peanut.jpg",
    tag: "Popular",
    desc: "Crunchy roasted peanuts with a generous sea-salt seasoning. Perfect for snacking and food service.",
    sizes: ["150g", "250g", "500g", "1kg", "5kg"],
    details: "Our Salted Peanuts deliver a bold, satisfying flavour that keeps consumers coming back. Ideal for supermarket shelves, vending, canteens and hospitality. High margin, high repeat purchase.",
    origin: "UAE / Egypt",
  },
  {
    id: 14,
    name: "Honey Roasted Peanuts",
    category: "Peanuts",
    image: "/images/peanut.jpg",
    tag: "Specialty",
    desc: "Peanuts roasted with a light honey glaze for a sweet-savoury balance that consumers love.",
    sizes: ["150g", "250g", "500g"],
    details: "A premium take on the classic peanut. Our Honey Roasted Peanuts are coated in a delicate honey glaze and slow-roasted for an even, caramelised finish. A favourite in gifting ranges and premium impulse retail.",
    origin: "UAE",
  },
  // ─── MIXED NUTS ───
  {
    id: 15,
    name: "Premium Mixed Nuts",
    category: "Mixed Nuts",
    image: "/images/cashew.jpg",
    tag: "Popular",
    desc: "A curated blend of cashews, almonds, pistachios and hazelnuts — our most versatile mixed nut offering.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Our Premium Mixed Nuts bring together our finest cashews, almonds and pistachios in a carefully balanced blend. Each mix is packed fresh to ensure maximum quality and shelf life. A consistent bestseller for UAE supermarkets and gifting brands.",
    origin: "Blended in UAE",
  },
  {
    id: 16,
    name: "Deluxe Nut Mix",
    category: "Mixed Nuts",
    image: "/images/pistachio.jpg",
    tag: "Luxury",
    desc: "Our most elevated nut mix. Macadamia, cashews, almonds, brazil nuts and walnuts — for discerning retail.",
    sizes: ["250g", "500g", "1kg"],
    details: "The Deluxe Nut Mix is our flagship premium blend, featuring whole macadamia nuts, W180 cashews, premium almonds, brazil nuts and walnuts. Designed for luxury gifting, premium retail and five-star hospitality. Presented in elegant packaging.",
    origin: "Blended in UAE",
  },
  {
    id: 17,
    name: "Cocktail Nut Mix",
    category: "Mixed Nuts",
    image: "/images/cashew.jpg",
    tag: "Classic",
    desc: "A salted, mixed-nut blend crafted for bars, lounges and hospitality service across the UAE.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Specially formulated for hospitality use. Our Cocktail Nut Mix includes a balanced proportion of cashews, peanuts, almonds and mixed seeds, lightly salted for a complementary snacking experience in bar and lounge settings.",
    origin: "Blended in UAE",
  },
  {
    id: 18,
    name: "Trail Mix",
    category: "Mixed Nuts",
    image: "/images/almond.jpg",
    tag: "Active",
    desc: "Nuts, seeds and dried fruits blended for on-the-go energy. Popular in health and fitness retail.",
    sizes: ["150g", "250g", "500g"],
    details: "Our Trail Mix combines roasted nuts, pumpkin seeds, sunflower seeds, dried cranberries and raisins in a nutritious, energising blend. Positioned in the health and wellness segment — increasingly in demand across UAE gyms, pharmacies and health stores.",
    origin: "Blended in UAE",
  },
  // ─── DRIED FRUITS ───
  {
    id: 19,
    name: "Dried Apricots",
    category: "Dried Fruits",
    image: "/images/almond.jpg",
    tag: "Natural",
    desc: "Sun-dried whole apricots with a vivid colour and natural sweetness. No added sugar or preservatives.",
    sizes: ["250g", "500g", "1kg"],
    details: "Premium Turkish and Iranian dried apricots, selected for vibrant colour, soft texture and natural sweetness. Sulphur-dioxide treated to preserve colour and extend shelf life. Available in regular and jumbo grades.",
    origin: "Turkey / Iran",
  },
  {
    id: 20,
    name: "Dried Cranberries",
    category: "Dried Fruits",
    image: "/images/peanut.jpg",
    tag: "Premium",
    desc: "Sweetened dried cranberries with a bold, tangy-sweet flavour. Ideal for baking, snacking and mixes.",
    sizes: ["250g", "500g", "1kg"],
    details: "Whole dried cranberries, lightly sweetened and packed for freshness. An increasingly popular addition to premium nut mixes and trail blends. Also popular as a standalone snack in health retail.",
    origin: "USA / Canada",
  },
  {
    id: 21,
    name: "Dried Mango",
    category: "Dried Fruits",
    image: "/images/almond.jpg",
    tag: "Tropical",
    desc: "Naturally sweet dried mango slices with a rich, tropical flavour. A bestseller in modern snack ranges.",
    sizes: ["150g", "250g", "500g"],
    details: "Kiln-dried mango slices from premium Philippine and Thai farms. Naturally sweet with a chewy texture. No artificial colours or flavours. A fast-growing category in UAE convenience and health retail.",
    origin: "Philippines / Thailand",
  },
  {
    id: 22,
    name: "Seedless Raisins",
    category: "Dried Fruits",
    image: "/images/peanut.jpg",
    tag: "Classic",
    desc: "Plump, sweet seedless raisins — a staple for snacking, baking and premium mixed fruit ranges.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details: "Premium seedless raisins sourced from Iran and Turkey. Naturally sweet, plump and consistent. A wholesale staple for food manufacturers, bakeries and snack brands across the UAE.",
    origin: "Iran / Turkey",
  },
  {
    id: 23,
    name: "Mixed Dried Fruits",
    category: "Dried Fruits",
    image: "/images/almond.jpg",
    tag: "Assorted",
    desc: "A vibrant assortment of premium dried fruits — apricots, cranberries, raisins, mango and dates.",
    sizes: ["250g", "500g", "1kg"],
    details: "Our Mixed Dried Fruits selection combines five premium dried fruits in a balanced blend. Carefully portioned for a variety of textures and flavours. Ideal for snack retail, gifting and food service.",
    origin: "Blended in UAE",
  },
  // ─── SEEDS & SNACKS ───
  {
    id: 24,
    name: "Pumpkin Seeds",
    category: "Seeds & Snacks",
    image: "/images/pistachio.jpg",
    tag: "Nutritious",
    desc: "Roasted and lightly salted pumpkin seeds — a premium health-oriented snack with strong category growth.",
    sizes: ["150g", "250g", "500g", "1kg"],
    details: "Our Pumpkin Seeds are sourced from premium producers, roasted and lightly salted. Rich in zinc and magnesium, they appeal to health-conscious consumers and gym-goers. A fast-growing SKU in UAE health and organic retail.",
    origin: "China / Austria",
  },
  {
    id: 25,
    name: "Sunflower Seeds",
    category: "Seeds & Snacks",
    image: "/images/cashew.jpg",
    tag: "Popular",
    desc: "Roasted shelled sunflower seeds — a light, satisfying snack for everyday retail and food service.",
    sizes: ["150g", "250g", "500g", "1kg", "5kg"],
    details: "Whole roasted sunflower seeds (kernel, no shell). Available plain and lightly salted. A consistent volume seller in UAE supermarkets and convenience retail. Also used as a topping ingredient in food service.",
    origin: "Ukraine / Russia",
  },
  {
    id: 26,
    name: "Roasted Chickpeas",
    category: "Seeds & Snacks",
    image: "/images/peanut.jpg",
    tag: "Specialty",
    desc: "Crispy roasted chickpeas seasoned with a light salt blend. A high-protein snack with growing demand.",
    sizes: ["150g", "250g", "500g"],
    details: "Whole chickpeas slow-roasted for a satisfying crunch, lightly seasoned. High in protein and fibre, naturally gluten-free. Popular in health food stores and supermarket health aisles. Also available in chilli and za'atar flavours.",
    origin: "Turkey / UAE",
  },
  {
    id: 27,
    name: "Premium Snack Mix",
    category: "Seeds & Snacks",
    image: "/images/cashew.jpg",
    tag: "New",
    desc: "A bold, crunchy combination of roasted nuts, seeds and savoury pieces — designed for modern snacking.",
    sizes: ["100g", "150g", "250g", "500g"],
    details: "Our Premium Snack Mix was developed in response to market demand for versatile, satisfying snack solutions. A combination of cashews, almonds, pumpkin seeds, sunflower seeds and savoury chickpeas. Ideal for food service, vending and retail.",
    origin: "Blended in UAE",
  },
];

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  tag: string;
  desc: string;
  sizes: string[];
  details: string;
  origin: string;
}

function Modal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.88)" }} onClick={onClose}>
      <div
        className="bg-[#0c0c0c] border border-[#c9a84c]/25 max-w-2xl w-full max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72">
          <Image src={product.image} alt={product.name} fill sizes="672px" style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-black/30 to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-black/60 border border-white/15 flex items-center justify-center text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-200">
            <X size={16} />
          </button>
          <div className="absolute top-4 left-4 bg-[#c9a84c] text-black text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
            {product.tag}
          </div>
        </div>

        <div className="p-8">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase mb-2" style={{ fontFamily: "var(--font-sans)" }}>{product.category}</p>
          <h2 className="text-white font-light mb-2" style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem" }}>{product.name}</h2>
          <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "var(--font-sans)" }}>Origin: {product.origin}</p>
          <p className="text-white/55 text-sm leading-relaxed mb-8" style={{ fontFamily: "var(--font-sans)" }}>{product.details}</p>

          <div className="mb-8">
            <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "var(--font-sans)" }}>Pack Sizes Available</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <span key={s} className="border border-[#c9a84c]/25 text-white/55 text-xs px-3 py-1.5" style={{ fontFamily: "var(--font-sans)" }}>{s}</span>
              ))}
            </div>
          </div>

          <a
            href={`${WHATSAPP}?text=${encodeURIComponent(`Hello Al Mahmasani Roasteries,\n\nI am interested in ${product.name}.\n\nPlease provide pricing and availability for wholesale orders.\n\nThank you.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury w-full flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-[#20ba59] transition-all duration-300 font-medium"
            style={{ fontFamily: "var(--font-sans)" }}
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
          <Image src="/images/cashew.jpg" alt="Products" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 page-enter">
          <p className="section-label block mb-4">Our Selection</p>
          <h1 className="text-white font-light leading-tight" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            Premium<br />
            <span className="gold-text">Products</span>
          </h1>
          <p className="text-white/50 text-sm mt-4 max-w-md" style={{ fontFamily: "var(--font-sans)" }}>
            {products.length}+ products across {categories.length - 1} categories — wholesale-ready, UAE-wide.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-[#0c0c0c] border-b border-[#c9a84c]/10 sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Desktop categories */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 border transition-all duration-200 ${
                    activeCategory === cat
                      ? "border-[#c9a84c] bg-[#c9a84c] text-black font-medium"
                      : "border-[#c9a84c]/20 text-white/40 hover:border-[#c9a84c]/50 hover:text-white/70"
                  }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 border border-[#c9a84c]/30 text-white/60 text-[11px] tracking-[0.2em] uppercase px-4 py-2.5"
              onClick={() => setShowFilters(!showFilters)}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Filter: {activeCategory} <ChevronDown size={13} className={`transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {/* Search */}
            <div className="relative w-full md:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25" size={14} />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#080808] border border-[#c9a84c]/15 focus:border-[#c9a84c]/50 text-white text-sm pl-9 pr-8 py-2.5 outline-none placeholder:text-white/20 transition-colors duration-200"
                style={{ fontFamily: "var(--font-sans)" }}
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                  <X size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Mobile filter dropdown */}
          {showFilters && (
            <div className="md:hidden flex flex-wrap gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setShowFilters(false); }}
                  className={`text-[10px] tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-200 ${
                    activeCategory === cat ? "border-[#c9a84c] bg-[#c9a84c] text-black font-medium" : "border-[#c9a84c]/20 text-white/40"
                  }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-28">
              <p className="text-white/25 text-lg mb-4" style={{ fontFamily: "var(--font-serif)" }}>No products found</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="text-[#c9a84c] text-xs tracking-widest uppercase hover:underline" style={{ fontFamily: "var(--font-sans)" }}>
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-white/25 text-xs tracking-[0.3em] uppercase mb-8" style={{ fontFamily: "var(--font-sans)" }}>
                {filtered.length} product{filtered.length !== 1 ? "s" : ""} {activeCategory !== "All" ? `in ${activeCategory}` : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((p, i) => (
                  <AnimatedSection key={p.id} delay={i * 50}>
                    <button
                      onClick={() => setSelected(p)}
                      className="product-card border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 bg-[#0c0c0c] group overflow-hidden text-left w-full"
                    >
                      <div className="relative h-52 img-zoom">
                        <Image src={p.image} alt={p.name} fill sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                        <div className="absolute top-3 left-3 bg-[#c9a84c] text-black text-[9px] tracking-[0.25em] uppercase px-2.5 py-1 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                          {p.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/40 text-white text-[10px] tracking-[0.3em] uppercase px-4 py-2" style={{ fontFamily: "var(--font-sans)" }}>
                            View Details
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>{p.category}</p>
                        <h3 className="text-white font-light mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}>{p.name}</h3>
                        <p className="text-white/35 text-xs leading-relaxed mb-5 line-clamp-2" style={{ fontFamily: "var(--font-sans)" }}>{p.desc}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1.5 flex-wrap">
                            {p.sizes.slice(0, 3).map((s) => (
                              <span key={s} className="border border-[#c9a84c]/15 text-white/30 text-[9px] px-2 py-0.5" style={{ fontFamily: "var(--font-sans)" }}>{s}</span>
                            ))}
                            {p.sizes.length > 3 && <span className="text-white/25 text-[9px] py-0.5" style={{ fontFamily: "var(--font-sans)" }}>+{p.sizes.length - 3}</span>}
                          </div>
                          <ArrowRight className="text-[#c9a84c]/40 group-hover:text-[#c9a84c] transition-colors duration-200 flex-shrink-0" size={14} />
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
      <section className="py-24 bg-[#0c0c0c] border-t border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label block mb-5">Wholesale Enquiries</p>
            <h2 className="text-white font-light mb-6" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Looking for Bulk Orders?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
              We offer flexible wholesale solutions for businesses of all sizes — from independent retailers to national supermarket chains. Contact us to discuss pricing, MOQs and delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="btn-luxury inline-flex items-center justify-center gap-3 bg-[#c9a84c] text-black text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#e8c97a] transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                <MessageCircle size={15} />
                WhatsApp for Pricing
              </a>
              <a href="/contact" className="btn-luxury border border-[#c9a84c]/40 text-[#c9a84c] text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:border-[#c9a84c] transition-all duration-300 text-center" style={{ fontFamily: "var(--font-sans)" }}>
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
