import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#c9a84c]/20">
      {/* Top strip */}
      <div className="border-b border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>
            Premium Nuts &amp; Snacks · UAE-Wide Distribution · Since 1975
          </p>
          <a
            href="https://wa.me/971504622865"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury inline-flex items-center gap-3 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black text-[11px] tracking-[0.2em] uppercase px-8 py-3 transition-all duration-300"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <MessageCircle size={14} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-7">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#c9a84c]/40">
                <Image src="/images/logo.jpg" alt="Al Mahmasani Roasteries" fill sizes="56px" style={{ objectFit: "cover" }} />
              </div>
              <div>
                <p className="text-white font-medium tracking-[0.15em] uppercase text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                  Al Mahmasani
                </p>
                <p className="text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase mt-0.5" style={{ fontFamily: "var(--font-sans)" }}>
                  Roasteries
                </p>
              </div>
            </div>
            <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>Absolute Nuts</p>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm" style={{ fontFamily: "var(--font-sans)" }}>
              UAE&apos;s trusted wholesale supplier of premium nuts, dried fruits and snack products.
              Family-owned and operated since 1975.
            </p>
            <div className="flex items-center gap-3 mt-7">
              <a href="https://www.linkedin.com/company/al-mahmasani-roastery-llc/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#c9a84c]/25 hover:border-[#c9a84c] flex items-center justify-center text-white/40 hover:text-[#c9a84c] transition-all duration-300" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-9 h-9 border border-[#c9a84c]/25 hover:border-[#c9a84c] flex items-center justify-center text-white/40 hover:text-[#c9a84c] transition-all duration-300" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
              </a>
              <a href="#" className="w-9 h-9 border border-[#c9a84c]/25 hover:border-[#c9a84c] flex items-center justify-center text-white/40 hover:text-[#c9a84c] transition-all duration-300" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <h4 className="text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "var(--font-sans)" }}>Pages</h4>
            <ul className="space-y-3.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/40 hover:text-[#c9a84c] text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-sans)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h4 className="text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "var(--font-sans)" }}>Products</h4>
            <ul className="space-y-3.5">
              {["Cashews", "Almonds", "Pistachios", "Mixed Nuts", "Dried Fruits", "Snack Mixes"].map((p) => (
                <li key={p}>
                  <Link href="/products" className="text-white/40 hover:text-[#c9a84c] text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-sans)" }}>
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "var(--font-sans)" }}>Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/40 hover:text-[#c9a84c] text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-sans)" }}>
                  <MessageCircle size={14} className="flex-shrink-0 text-[#c9a84c]/60" />
                  +971 50 462 2865
                </a>
              </li>
              <li>
                <a href="tel:+971504622865" className="flex items-center gap-3 text-white/40 hover:text-[#c9a84c] text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-sans)" }}>
                  <Phone size={14} className="flex-shrink-0 text-[#c9a84c]/60" />
                  +971 50 462 2865
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                <MapPin size={14} className="flex-shrink-0 text-[#c9a84c]/60" />
                United Arab Emirates
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#c9a84c]/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs tracking-widest" style={{ fontFamily: "var(--font-sans)" }}>
            © {new Date().getFullYear()} Al Mahmasani Roasteries. All rights reserved.
          </p>
          <p className="text-white/25 text-xs tracking-widest" style={{ fontFamily: "var(--font-sans)" }}>
            Est. 1975 · United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
