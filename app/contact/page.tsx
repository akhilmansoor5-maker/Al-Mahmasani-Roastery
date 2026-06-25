"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const waLink = () => {
    const text = encodeURIComponent(
      `Hi Al Mahmasani,\n\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    );
    return `https://wa.me/971504622865?text=${text}`;
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--sans)",
    fontSize: "14px",
    color: "var(--dark)",
    background: "var(--white)",
    border: "1.5px solid var(--border)",
    borderRadius: "12px",
    padding: "14px 18px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "40vh", background: "var(--dark)", display: "flex", alignItems: "flex-end", paddingBottom: "64px" }}>
        <div className="container" style={{ paddingTop: "140px" }}>
          <p className="eyebrow hero-in-1" style={{ marginBottom: "16px" }}>Get in Touch</p>
          <h1 className="display-xl hero-in-2" style={{ color: "white", maxWidth: "560px" }}>
            Let&#39;s Build Something<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Together.</em>
          </h1>
        </div>
      </section>

      {/* Contact body */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "flex-start" }}>

            {/* Info column */}
            <div>
              <p className="eyebrow" style={{ marginBottom: "20px" }}>Our Details</p>
              <h2 className="display-md" style={{ color: "var(--dark)", marginBottom: "32px" }}>Wholesale &amp; Partnerships</h2>

              {[
                { label: "Location", value: "Sharjah Industrial Area 4, United Arab Emirates" },
                { label: "Phone / WhatsApp", value: "+971 50 462 2865", href: "tel:+971504622865" },
                { label: "Email", value: "info@almahmasani.ae", href: "mailto:info@almahmasani.ae" },
                { label: "Hours", value: "Mon–Sat 8:30 am – 5:00 pm GST" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "28px", paddingBottom: "28px", borderBottom: "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "6px" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", color: "var(--dark)" }}>{item.value}</a>
                  ) : (
                    <p style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", color: "var(--dark)" }}>{item.value}</p>
                  )}
                </div>
              ))}

              <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ marginTop: "8px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.855L.057 23.882a.75.75 0 0 0 .924.924l6.063-1.476A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.734-.516-5.285-1.415l-.378-.218-3.928.956.977-3.878-.234-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form column */}
            <div style={{ background: "white", borderRadius: "var(--radius-card)", padding: "clamp(28px,4vw,48px)", boxShadow: "var(--shadow-md)" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", color: "var(--dark)", marginBottom: "28px" }}>Send an Enquiry</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>Company</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>Phone / WhatsApp</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+971 50 000 0000" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your requirements — products, quantities, delivery location..." rows={5} style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ width: "100%", justifyContent: "center", marginTop: "4px" }}
                >
                  Send via WhatsApp →
                </a>
                <p style={{ fontFamily: "var(--sans)", fontSize: "11px", color: "var(--text-muted)", textAlign: "center" }}>
                  Your enquiry will open in WhatsApp with your details pre-filled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
