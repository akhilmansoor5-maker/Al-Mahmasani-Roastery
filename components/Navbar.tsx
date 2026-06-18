"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const categories = [
  { label: "Cashews",     href: "/products?cat=cashews" },
  { label: "Almonds",     href: "/products?cat=almonds" },
  { label: "Hazelnuts",   href: "/products?cat=hazelnuts" },
  { label: "Pecans",      href: "/products?cat=pecans" },
  { label: "Coffee Nuts", href: "/products?cat=coffee-nuts" },
  { label: "Mixed Nuts",  href: "/products?cat=mixed-nuts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node))
        setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* on hero the nav sits over a dark image, so text is white until scrolled */
  const isLight = scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="relative w-9 h-9 overflow-hidden"
              style={{ borderRadius: "var(--radius-btn)" }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Al Mahmasani Roasteries"
                fill sizes="36px"
                style={{ objectFit: "contain" }}
                className="transition-opacity duration-300 group-hover:opacity-75"
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={`text-[10px] font-semibold tracking-[0.22em] uppercase leading-none transition-colors duration-500 ${
                  isLight ? "text-[var(--text)]" : "text-white"
                }`}
                style={{ fontFamily: "var(--sans)" }}
              >
                Al Mahmasani
              </p>
              <p
                className="text-[8px] tracking-[0.35em] uppercase leading-none mt-0.5 transition-colors duration-500"
                style={{ color: "var(--gold-mid)", fontFamily: "var(--sans)" }}
              >
                Roasteries
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Products dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className={`flex items-center gap-1.5 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-200 ${
                  isLight
                    ? "text-[rgba(26,17,8,0.55)] hover:text-[var(--text)]"
                    : "text-white/70 hover:text-white"
                }`}
                style={{ fontFamily: "var(--sans)" }}
              >
                Products
                <ChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${dropOpen ? "rotate-180" : ""}`}
                  style={{ color: dropOpen ? "var(--gold)" : undefined }}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-52 bg-[var(--bg-card)] border border-[var(--border)] backdrop-blur-xl shadow-[0_16px_48px_rgba(139,105,20,0.14)] transition-all duration-300 ${
                  dropOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                style={{ borderRadius: "var(--radius-card)" }}
              >
                <div className="py-2">
                  <Link
                    href="/products"
                    onClick={() => setDropOpen(false)}
                    className="block px-5 py-2.5 text-[9px] font-semibold tracking-[0.28em] uppercase border-b mb-1 transition-colors"
                    style={{
                      color: "var(--gold)",
                      borderColor: "var(--border)",
                      fontFamily: "var(--sans)",
                    }}
                  >
                    All Products
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      onClick={() => setDropOpen(false)}
                      className="block px-5 py-2.5 text-[9px] tracking-[0.22em] uppercase transition-colors duration-150"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--sans)",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--text)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "var(--text-muted)")
                      }
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {["About", "Contact"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-200 ${
                  isLight
                    ? "text-[rgba(26,17,8,0.55)] hover:text-[var(--text)]"
                    : "text-white/70 hover:text-white"
                }`}
                style={{ fontFamily: "var(--sans)" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/971504622865"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-[10px] tracking-[0.18em] py-3 px-6"
            >
              Get a Quote
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden transition-colors ${
              isLight ? "text-[var(--text)]" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[290px] flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "var(--bg-card)",
            borderLeft: "1px solid var(--border)",
            borderRadius: "var(--radius-card) 0 0 var(--radius-card)",
          }}
        >
          <div className="flex justify-end p-5">
            <button
              onClick={() => setOpen(false)}
              style={{ color: "var(--text-muted)" }}
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 px-8 py-2 space-y-1 overflow-y-auto">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "All Products" },
              ...categories.map((c) => ({ href: c.href, label: c.label, sub: true })),
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-[9px] tracking-[0.28em] uppercase border-b transition-colors ${
                  (l as { sub?: boolean }).sub ? "pl-4" : ""
                }`}
                style={{
                  color: (l as { sub?: boolean }).sub
                    ? "var(--text-faint)"
                    : "var(--text-muted)",
                  borderColor: "var(--border)",
                  fontFamily: "var(--sans)",
                  fontWeight: 600,
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="p-8">
            <a
              href="https://wa.me/971504622865"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold w-full justify-center text-[10px] tracking-[0.18em]"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
