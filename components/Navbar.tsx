"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const categories = [
  { label: "Cashews", href: "/products?cat=cashews" },
  { label: "Almonds", href: "/products?cat=almonds" },
  { label: "Pistachios", href: "/products?cat=pistachios" },
  { label: "Peanuts", href: "/products?cat=peanuts" },
  { label: "Mixed Nuts", href: "/products?cat=mixed-nuts" },
  { label: "Dried Fruits", href: "/products?cat=dried-fruits" },
  { label: "Seeds & Snacks", href: "/products?cat=seeds-snacks" },
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
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(8,8,8,0.96)] border-b border-[rgba(201,168,76,0.15)] backdrop-blur-xl py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Al Mahmasani Roasteries"
                fill
                sizes="36px"
                style={{ objectFit: "contain" }}
                className="transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
            <div className="hidden sm:block">
              <p
                className="text-white text-[10px] font-semibold tracking-[0.22em] uppercase leading-none"
                style={{ fontFamily: "var(--sans)" }}
              >
                Al Mahmasani
              </p>
              <p
                className="text-[rgba(201,168,76,0.7)] text-[8px] tracking-[0.35em] uppercase leading-none mt-0.5"
                style={{ fontFamily: "var(--sans)" }}
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
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-[10px] font-medium tracking-[0.22em] uppercase transition-colors duration-200"
                style={{ fontFamily: "var(--sans)" }}
              >
                Products
                <ChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${dropOpen ? "rotate-180 text-[#c9a84c]" : ""}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-48 bg-[rgba(8,8,8,0.97)] border border-[rgba(201,168,76,0.15)] backdrop-blur-xl transition-all duration-300 ${
                  dropOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  <Link
                    href="/products"
                    onClick={() => setDropOpen(false)}
                    className="block px-5 py-2.5 text-[#c9a84c] text-[9px] tracking-[0.3em] uppercase border-b border-[rgba(201,168,76,0.10)] mb-1 hover:bg-[rgba(201,168,76,0.05)] transition-colors"
                    style={{ fontFamily: "var(--sans)" }}
                  >
                    All Products
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      onClick={() => setDropOpen(false)}
                      className="block px-5 py-2.5 text-white/55 hover:text-white hover:bg-[rgba(255,255,255,0.03)] text-[9px] tracking-[0.25em] uppercase transition-colors duration-150"
                      style={{ fontFamily: "var(--sans)" }}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about"
              className="text-white/70 hover:text-white text-[10px] font-medium tracking-[0.22em] uppercase transition-colors duration-200"
              style={{ fontFamily: "var(--sans)" }}>
              About
            </Link>
            <Link href="/contact"
              className="text-white/70 hover:text-white text-[10px] font-medium tracking-[0.22em] uppercase transition-colors duration-200"
              style={{ fontFamily: "var(--sans)" }}>
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/971504622865"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-[10px] tracking-[0.22em]"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
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
          className={`absolute inset-0 bg-black/70 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[280px] bg-[#0a0a0a] border-l border-[rgba(201,168,76,0.12)] flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-5">
            <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 px-8 py-4 space-y-1">
            <Link href="/" onClick={() => setOpen(false)}
              className="block py-3.5 text-white/60 hover:text-white text-[10px] tracking-[0.28em] uppercase border-b border-white/5 transition-colors"
              style={{ fontFamily: "var(--sans)" }}>Home</Link>
            <Link href="/products" onClick={() => setOpen(false)}
              className="block py-3.5 text-white/60 hover:text-white text-[10px] tracking-[0.28em] uppercase border-b border-white/5 transition-colors"
              style={{ fontFamily: "var(--sans)" }}>All Products</Link>
            {categories.map((cat) => (
              <Link key={cat.label} href={cat.href} onClick={() => setOpen(false)}
                className="block py-2.5 pl-4 text-white/35 hover:text-[#c9a84c] text-[9px] tracking-[0.28em] uppercase border-b border-white/5 transition-colors"
                style={{ fontFamily: "var(--sans)" }}>
                {cat.label}
              </Link>
            ))}
            <Link href="/about" onClick={() => setOpen(false)}
              className="block py-3.5 text-white/60 hover:text-white text-[10px] tracking-[0.28em] uppercase border-b border-white/5 transition-colors"
              style={{ fontFamily: "var(--sans)" }}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}
              className="block py-3.5 text-white/60 hover:text-white text-[10px] tracking-[0.28em] uppercase transition-colors"
              style={{ fontFamily: "var(--sans)" }}>Contact</Link>
          </nav>
          <div className="p-8">
            <a
              href="https://wa.me/971504622865"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold w-full justify-center text-[10px] tracking-[0.22em]"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
