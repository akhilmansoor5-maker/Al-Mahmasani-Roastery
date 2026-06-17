"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-3)", borderTop: "1px solid var(--border)" }}>

      {/* Top CTA strip */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-9 flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-[10px] font-semibold tracking-[0.38em] uppercase"
            style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}
          >
            Premium Nuts &amp; Snacks · UAE-Wide Distribution · Since 1975
          </p>
          <a
            href="https://wa.me/971504622865"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold text-[10px] tracking-[0.18em] gap-2"
          >
            <MessageCircle size={14} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-7">
              <div
                className="relative w-14 h-14 overflow-hidden"
                style={{ borderRadius: "var(--radius-card)", border: "1.5px solid var(--border)" }}
              >
                <Image
                  src="/images/logo.jpg" alt="Al Mahmasani Roasteries"
                  fill sizes="56px" style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p
                  className="font-semibold tracking-[0.15em] uppercase text-sm"
                  style={{ fontFamily: "var(--sans)", color: "var(--text)" }}
                >
                  Al Mahmasani
                </p>
                <p
                  className="text-[10px] tracking-[0.35em] uppercase mt-0.5"
                  style={{ fontFamily: "var(--sans)", color: "var(--gold)" }}
                >
                  Roasteries
                </p>
              </div>
            </div>

            <p
              className="text-[10px] font-semibold tracking-[0.42em] uppercase mb-4"
              style={{ fontFamily: "var(--sans)", color: "var(--gold)" }}
            >
              Absolute Nuts
            </p>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}
            >
              UAE&apos;s trusted wholesale supplier of premium nuts, dried fruits and snack
              products. Family-owned and operated since 1975.
            </p>

            <div className="flex items-center gap-3 mt-7">
              {[
                {
                  href: "https://www.linkedin.com/company/al-mahmasani-roastery-llc/",
                  label: "LinkedIn",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "Instagram",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                  style={{
                    border: "1.5px solid var(--border)",
                    borderRadius: "var(--radius-btn)",
                    color: "var(--text-faint)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-faint)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h4
              className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--sans)", color: "var(--gold)" }}
            >
              Pages
            </h4>
            <ul className="space-y-3.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h4
              className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--sans)", color: "var(--gold)" }}
            >
              Products
            </h4>
            <ul className="space-y-3.5">
              {["Cashews","Almonds","Pistachios","Mixed Nuts","Dried Fruits","Snack Mixes"].map((p) => (
                <li key={p}>
                  <Link
                    href="/products"
                    className="text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4
              className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--sans)", color: "var(--gold)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { href: "https://wa.me/971504622865", icon: <MessageCircle size={14} />, text: "+971 50 462 2865", external: true },
                { href: "tel:+971504622865",           icon: <Phone size={14} />,         text: "+971 50 462 2865", external: false },
              ].map((item) => (
                <li key={item.text + item.href}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    <span style={{ color: "var(--gold)", flexShrink: 0 }}>{item.icon}</span>
                    {item.text}
                  </a>
                </li>
              ))}
              <li
                className="flex items-center gap-3 text-sm"
                style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}
              >
                <MapPin size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                United Arab Emirates
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="text-xs tracking-widest"
            style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}
          >
            © {new Date().getFullYear()} Al Mahmasani Roasteries. All rights reserved.
          </p>
          <p
            className="text-xs tracking-widest"
            style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}
          >
            Est. 1975 · United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
