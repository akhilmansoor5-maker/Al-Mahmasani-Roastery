"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, X, MessageCircle, ChevronRight } from "lucide-react";

const categories = ["All", "Nuts", "Mixed Nuts", "Dried Fruits", "Snacks"];

const products = [
  {
    id: 1,
    name: "Roasted Cashews",
    category: "Nuts",
    image: "/images/cashew.jpg",
    tag: "Best Seller",
    desc: "Premium whole cashews, carefully roasted to golden perfection. A timeless favourite for any occasion.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details:
      "Our Roasted Cashews are sourced from the finest growing regions and roasted in-house to our exact specifications. Each cashew is selected for size, shape and quality before roasting. Perfect for retail, food service and bulk wholesale.",
  },
  {
    id: 2,
    name: "Unsalted Almonds",
    category: "Nuts",
    image: "/images/almond.jpg",
    tag: "Premium",
    desc: "Crisp, fresh almonds sourced from the world's finest orchards. Pure, natural goodness.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details:
      "Our Unsalted Almonds are carefully sourced and stored to preserve their natural freshness. Rich in nutrition and flavour, these almonds are ideal for health-conscious consumers and food businesses alike.",
  },
  {
    id: 3,
    name: "Roasted Pistachios",
    category: "Nuts",
    image: "/images/pistachio.jpg",
    tag: "Signature",
    desc: "Plump, flavourful pistachios with a delicate roast that brings out their natural richness.",
    sizes: ["250g", "500g", "1kg", "5kg"],
    details:
      "Pistachios are among our most prized products. Sourced from premium producers, our Roasted Pistachios are roasted to a precise specification that brings out their full, natural flavour without masking their distinctive character.",
  },
  {
    id: 4,
    name: "Roasted Peanuts",
    category: "Nuts",
    image: "/images/peanut.jpg",
    tag: "Classic",
    desc: "Generously sized peanuts roasted to a deep, satisfying flavour perfect for any occasion.",
    sizes: ["250g", "500g", "1kg", "5kg", "10kg"],
    details:
      "Our Roasted Peanuts are a staple of any quality snack range. Consistently sized and roasted, these peanuts deliver a satisfying crunch and rich flavour that customers return for time and again.",
  },
  {
    id: 5,
    name: "Premium Mixed Nuts",
    category: "Mixed Nuts",
    image: "/images/cashew.jpg",
    tag: "Popular",
    desc: "A curated selection of our finest nuts blended for the ultimate snacking experience.",
    sizes: ["250g", "500g", "1kg"],
    details:
      "Our Premium Mixed Nuts combine cashews, almonds, pistachios and more in a carefully balanced blend. Each mix is packed fresh to ensure maximum quality and shelf life.",
  },
  {
    id: 6,
    name: "Deluxe Nut Mix",
    category: "Mixed Nuts",
    image: "/images/pistachio.jpg",
    tag: "Luxury",
    desc: "An elevated nut mix featuring premium varieties for discerning tastes.",
    sizes: ["250g", "500g", "1kg"],
    details:
      "The Deluxe Nut Mix is our flagship mixed nuts product, featuring an elevated selection of premium whole nuts. Designed for luxury retail and gifting, this product represents the very best of our range.",
  },
  {
    id: 7,
    name: "Dried Apricots",
    category: "Dried Fruits",
    image: "/images/almond.jpg",
    tag: "Natural",
    desc: "Soft, sun-dried apricots with a natural sweetness and vibrant colour.",
    sizes: ["250g", "500g", "1kg"],
    details:
      "Our Dried Apricots are sun-dried to preserve their natural sweetness and nutrients. No artificial colours or preservatives. An ideal addition to any dried fruit range.",
  },
  {
    id: 8,
    name: "Mixed Dried Fruits",
    category: "Dried Fruits",
    image: "/images/peanut.jpg",
    tag: "Assorted",
    desc: "A vibrant blend of premium dried fruits, naturally sweet and packed with flavour.",
    sizes: ["250g", "500g", "1kg"],
    details:
      "Our Mixed Dried Fruits selection brings together a range of naturally sweet dried fruits. Each blend is assembled to offer a balance of flavours, textures and nutritional value.",
  },
  {
    id: 9,
    name: "Premium Snack Mix",
    category: "Snacks",
    image: "/images/cashew.jpg",
    tag: "New",
    desc: "A bold, crunchy snack mix with a satisfying combination of nuts and savoury snacks.",
    sizes: ["100g", "250g", "500g"],
    details:
      "Our Premium Snack Mix is designed for on-the-go snacking and food service applications. A satisfying combination of roasted nuts and savoury snack pieces, perfect for any setting.",
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
}

function Modal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-[#0d0d0d] border border-[#c9a84c]/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64">
          <Image src={product.image} alt={product.name} fill sizes="672px" style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/60 border border-white/20 flex items-center justify-center text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-200"
          >
            <X size={18} />
          </button>
          <div className="absolute top-4 left-4 bg-[#c9a84c] text-black text-[10px] tracking-[0.2em] uppercase px-2.5 py-1">
            {product.tag}
          </div>
        </div>

        <div className="p-8">
          <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-2">{product.category}</p>
          <h2 className="text-white text-2xl font-light mb-4">{product.name}</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">{product.details}</p>

          <div className="mb-8">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Available Sizes</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <span key={s} className="border border-[#c9a84c]/30 text-white/60 text-xs px-3 py-1.5">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <a
            href={`https://wa.me/971504622865?text=${encodeURIComponent(`Hello, I'm interested in ${product.name}. Please provide pricing and availability.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury w-full flex items-center justify-center gap-3 bg-[#25D366] text-white text-sm tracking-[0.2em] uppercase py-4 hover:bg-[#20ba59] transition-all duration-300 font-medium"
          >
            <MessageCircle size={16} />
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

  const filtered = products.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/pistachio.jpg" alt="Products" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Our Selection</p>
          <h1 className="text-white text-5xl md:text-6xl font-light leading-tight">
            Premium<br />
            <span className="gold-text">Products</span>
          </h1>
        </div>
      </section>

      {/* Filter + Search */}
      <section className="py-12 bg-[#0d0d0d] border-b border-[#c9a84c]/10 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-200 ${
                    activeCategory === cat
                      ? "border-[#c9a84c] bg-[#c9a84c] text-black"
                      : "border-[#c9a84c]/20 text-white/50 hover:border-[#c9a84c]/50 hover:text-white/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black border border-[#c9a84c]/20 focus:border-[#c9a84c]/50 text-white text-sm pl-10 pr-4 py-2.5 outline-none placeholder:text-white/25 transition-colors duration-200"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/30 text-lg">No products found for &ldquo;{search}&rdquo;</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-4 text-[#c9a84c] text-sm underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 80}>
                  <button
                    onClick={() => setSelected(p)}
                    className="product-card border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 bg-[#0d0d0d] group overflow-hidden text-left w-full"
                  >
                    <div className="relative h-56 img-zoom">
                      <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                      <div className="absolute top-3 left-3 bg-[#c9a84c] text-black text-[10px] tracking-[0.2em] uppercase px-2.5 py-1">
                        {p.tag}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/50 text-white text-xs tracking-widest uppercase px-4 py-2">
                          View Details
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase mb-2">{p.category}</p>
                      <h3 className="text-white text-base font-light tracking-wide mb-3">{p.name}</h3>
                      <p className="text-white/40 text-xs leading-relaxed mb-6 line-clamp-2">{p.desc}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {p.sizes.slice(0, 3).map((s) => (
                            <span key={s} className="border border-[#c9a84c]/20 text-white/40 text-[10px] px-2 py-0.5">
                              {s}
                            </span>
                          ))}
                          {p.sizes.length > 3 && (
                            <span className="text-white/30 text-[10px] py-0.5">+{p.sizes.length - 3}</span>
                          )}
                        </div>
                        <ChevronRight className="text-[#c9a84c]/50 group-hover:text-[#c9a84c] transition-colors duration-200" size={16} />
                      </div>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="py-20 bg-[#0d0d0d] border-t border-[#c9a84c]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Wholesale Enquiries</p>
          <h2 className="text-white text-3xl md:text-4xl font-light mb-6">
            Looking for Bulk Orders?
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            We offer flexible wholesale solutions for businesses of all sizes. Contact us to discuss
            pricing, minimum order quantities and delivery options.
          </p>
          <a
            href="https://wa.me/971504622865"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury inline-flex items-center gap-3 bg-[#c9a84c] text-black text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#e8c97a] transition-all duration-300 font-medium"
          >
            <MessageCircle size={16} />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {selected && <Modal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
