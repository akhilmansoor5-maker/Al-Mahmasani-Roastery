"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 nav-blur ${
        scrolled
          ? "bg-black/92 border-b border-[#c9a84c]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c9a84c]/40 group-hover:border-[#c9a84c] transition-colors duration-400 flex-shrink-0">
            <Image src="/images/logo.jpg" alt="Al Mahmasani Roasteries" fill sizes="48px" style={{ objectFit: "cover" }} priority />
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-medium text-sm tracking-[0.18em] uppercase leading-none" style={{ fontFamily: "var(--font-sans)" }}>
              Al Mahmasani
            </p>
            <p className="text-[#c9a84c] text-[9px] tracking-[0.35em] uppercase mt-1">
              Roasteries
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 relative group"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-400" />
            </Link>
          ))}
          <a
            href="https://wa.me/971504622865"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 transition-all duration-300"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Enquire Now
          </a>
        </nav>

        <button
          className="md:hidden text-white/80 p-1 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#080808]/98 border-t border-[#c9a84c]/15 px-6 py-7 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-[#c9a84c] text-sm tracking-[0.2em] uppercase transition-colors duration-200"
              style={{ fontFamily: "var(--font-sans)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/971504622865"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#c9a84c] text-[#c9a84c] text-[11px] tracking-[0.2em] uppercase px-6 py-3 text-center mt-1 hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  );
}
