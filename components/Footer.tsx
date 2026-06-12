import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#c9a84c]/40">
                <Image
                  src="/images/logo.jpg"
                  alt="Al Mahmasani"
                  fill
                  sizes="64px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="text-white font-semibold tracking-[0.15em] uppercase">Al Mahmasani</p>
                <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mt-0.5">Roastery LLC</p>
              </div>
            </div>
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Absolute Nuts</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              UAE&apos;s trusted wholesale supplier of premium nuts, dried fruits and snack products.
              Serving retailers, supermarkets and businesses since 1975.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/al-mahmasani-roastery-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#c9a84c]/30 hover:border-[#c9a84c] flex items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#c9a84c]/30 hover:border-[#c9a84c] flex items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#c9a84c]/30 hover:border-[#c9a84c] flex items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-[#c9a84c] text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/971504622865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#c9a84c] text-sm transition-colors duration-200"
                >
                  <MessageCircle size={15} />
                  +971 50 462 2865
                </a>
              </li>
              <li>
                <a
                  href="tel:+971504622865"
                  className="flex items-center gap-3 text-white/50 hover:text-[#c9a84c] text-sm transition-colors duration-200"
                >
                  <Phone size={15} />
                  +971 50 462 2865
                </a>
              </li>
              <li className="text-white/50 text-sm">United Arab Emirates</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#c9a84c]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-widest">
            © {new Date().getFullYear()} Al Mahmasani Roastery LLC. All rights reserved.
          </p>
          <p className="text-white/30 text-xs tracking-widest">Est. 1975 · United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
