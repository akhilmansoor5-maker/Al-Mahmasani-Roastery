"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, MessageCircle, MapPin, Clock, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", category: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Al Mahmasani Roasteries,\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterested In: ${form.category}\n\n${form.message}`
    );
    window.open(`https://wa.me/971504622865?text=${msg}`, "_blank");
    setSent(true);
  };

  const fieldStyle: React.CSSProperties = {
    fontFamily: "var(--sans)",
    width: "100%",
    background: "var(--bg)",
    color: "var(--text)",
    border: "1.5px solid var(--border)",
    borderRadius: "var(--radius-btn)",
    fontSize: "0.875rem",
    padding: "0.875rem 1rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const focusGold = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "var(--gold-mid)");
  const blurBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "var(--border)");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/Al-Mahmasani-Roastery/images/products/cashew-3.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/45" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 30%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pb-24 pt-36 page-enter">
          <p className="section-label block mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>Get In Touch</p>
          <h1 className="text-white font-light" style={{ fontFamily: "var(--serif)", fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 1 }}>
            Let&apos;s Work Together
          </h1>
          <p className="text-white/60 text-sm mt-6 max-w-lg" style={{ fontFamily: "var(--sans)", lineHeight: 1.8 }}>
            We work with supermarkets, distributors, restaurants, hotels and retailers across the UAE. Get in touch for wholesale pricing and product information.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: "clamp(32px,6vw,96px)", paddingRight: "clamp(32px,6vw,96px)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 lg:gap-24">

            {/* Left — details */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <span className="section-label block mb-7">Contact Details</span>
                <div className="space-y-7">
                  {[
                    { href: "https://wa.me/971504622865", icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+971 50 462 2865", external: true },
                    { href: "tel:+971504622865",           icon: <Phone size={18} />,         label: "Phone",     value: "+971 50 462 2865", external: false },
                  ].map((item) => (
                    <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-5 group">
                      <div
                        className="w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-btn)", color: "var(--gold-mid)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--gold-mid)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[9px] tracking-[0.4em] uppercase mb-1" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>{item.label}</p>
                        <p className="text-sm" style={{ fontFamily: "var(--sans)", color: "var(--text)" }}>{item.value}</p>
                      </div>
                    </a>
                  ))}

                  {[
                    { icon: <MapPin size={18} />, label: "Location", value: "United Arab Emirates" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-5">
                      <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-btn)", color: "var(--gold-mid)" }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[9px] tracking-[0.4em] uppercase mb-1" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>{item.label}</p>
                        <p className="text-sm" style={{ fontFamily: "var(--sans)", color: "var(--text)" }}>{item.value}</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-btn)", color: "var(--gold-mid)" }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] tracking-[0.4em] uppercase mb-1" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>Business Hours</p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--sans)", color: "var(--text)" }}>
                        Mon – Fri: 9:00 AM – 6:00 PM<br />
                        Saturday: 9:00 AM – 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Social */}
              <AnimatedSection delay={200}>
                <span className="section-label block mb-5">Follow Us</span>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.linkedin.com/company/al-mahmasani-roastery-llc/", label: "LinkedIn",
                      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                    { href: "#", label: "Instagram",
                      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg> },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                      style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-btn)", color: "var(--text-muted)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-mid)"; (e.currentTarget as HTMLElement).style.color = "var(--gold-mid)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </AnimatedSection>

              {/* WhatsApp CTA card */}
              <AnimatedSection delay={280}>
                <div className="p-6" style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-card)", background: "var(--bg-2)" }}>
                  <p className="text-sm font-light mb-2" style={{ fontFamily: "var(--serif)", color: "var(--text)" }}>Prefer instant contact?</p>
                  <p className="text-xs leading-relaxed mb-5" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
                    WhatsApp us directly for faster responses and wholesale pricing.
                  </p>
                  <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[10px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#20ba59] transition-all duration-300 font-medium"
                    style={{ fontFamily: "var(--sans)", borderRadius: "var(--radius-btn)" }}>
                    <MessageCircle size={13} />
                    Chat on WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={150}>
                <span className="section-label block mb-7">Send An Enquiry</span>

                {sent ? (
                  <div className="p-14 text-center" style={{ border: "1.5px solid var(--border)", borderRadius: "var(--radius-card)", background: "var(--bg-2)" }}>
                    <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6"
                      style={{ border: "1.5px solid var(--gold-mid)", borderRadius: "var(--radius-btn)", background: "rgba(201,168,76,0.08)" }}>
                      <span className="text-2xl" style={{ color: "var(--gold-mid)" }}>✓</span>
                    </div>
                    <h3 className="font-light mb-3" style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", color: "var(--text)" }}>Enquiry Sent</h3>
                    <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
                      Your message has been forwarded via WhatsApp. Our team will respond within one business day.
                    </p>
                    <button onClick={() => setSent(false)}
                      className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase hover:gap-3 transition-all"
                      style={{ color: "var(--gold-mid)", fontFamily: "var(--sans)" }}>
                      Send Another <ArrowRight size={12} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>Full Name *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Ahmad Al Rashid" style={fieldStyle} onFocus={focusGold} onBlur={blurBorder} />
                      </div>
                      <div>
                        <label className="text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>Company Name</label>
                        <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company LLC" style={fieldStyle} onFocus={focusGold} onBlur={blurBorder} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>Phone Number *</label>
                        <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+971 50 000 0000" style={fieldStyle} onFocus={focusGold} onBlur={blurBorder} />
                      </div>
                      <div>
                        <label className="text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>Email Address</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@company.ae" style={fieldStyle} onFocus={focusGold} onBlur={blurBorder} />
                      </div>
                    </div>
                    <div>
                      <label className="text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>Product Category of Interest</label>
                      <select name="category" value={form.category} onChange={handleChange}
                        style={{ ...fieldStyle, appearance: "none" as const, cursor: "pointer" }}
                        onFocus={focusGold} onBlur={blurBorder}>
                        <option value="">Select a category...</option>
                        {["Cashews", "Almonds", "Hazelnuts", "Pecans", "Coffee Nuts", "Mixed Nuts", "Multiple Categories"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>Your Message *</label>
                      <textarea name="message" required rows={6} value={form.message} onChange={handleChange}
                        placeholder="Tell us about your business, the products you're interested in, and your approximate order volumes..."
                        style={{ ...fieldStyle, resize: "none" }} onFocus={focusGold} onBlur={blurBorder} />
                    </div>
                    <button type="submit" className="btn btn-gold w-full flex items-center justify-center gap-3 text-[11px] tracking-[0.2em]">
                      <Send size={15} />
                      Send Enquiry via WhatsApp
                    </button>
                    <p className="text-[10px] text-center" style={{ fontFamily: "var(--sans)", color: "var(--text-faint)" }}>
                      Your message will be sent directly to our team via WhatsApp.
                    </p>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="py-14" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm" style={{ fontFamily: "var(--sans)", color: "var(--text-muted)" }}>
            Al Mahmasani Roasteries · United Arab Emirates · Est. 1975
          </p>
          <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
            className="btn btn-outline-gold inline-flex items-center gap-2 text-[10px] tracking-[0.25em]">
            <MessageCircle size={13} />
            +971 50 462 2865
          </a>
        </div>
      </section>
    </>
  );
}
