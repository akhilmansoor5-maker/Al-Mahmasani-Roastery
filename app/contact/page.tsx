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

  const inputClass = "w-full bg-[#0a0a0a] border border-[#c9a84c]/15 focus:border-[#c9a84c]/50 text-white text-sm px-4 py-3.5 outline-none placeholder:text-white/20 transition-colors duration-200";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c] via-[#080808] to-black" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 60%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 page-enter">
          <p className="section-label block mb-5">Get In Touch</p>
          <h1 className="text-white font-light leading-tight" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            {"Let's Work"}<br />
            <span className="gold-text">Together</span>
          </h1>
          <p className="text-white/45 text-sm mt-4 max-w-md" style={{ fontFamily: "var(--font-sans)" }}>
            We work with supermarkets, distributors, restaurants, hotels and retailers across the UAE. Get in touch for wholesale pricing and product information.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left — contact details */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <span className="section-label block mb-7">Contact Details</span>
                <div className="space-y-7">
                  {[
                    { href: "https://wa.me/971504622865", icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+971 50 462 2865", external: true },
                    { href: "tel:+971504622865", icon: <Phone size={18} />, label: "Phone", value: "+971 50 462 2865", external: false },
                  ].map((item) => (
                    <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-5 group">
                      <div className="w-11 h-11 border border-[#c9a84c]/25 group-hover:border-[#c9a84c] flex items-center justify-center text-[#c9a84c]/50 group-hover:text-[#c9a84c] transition-all duration-300 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/30 text-[9px] tracking-[0.4em] uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>{item.label}</p>
                        <p className="text-white group-hover:text-[#c9a84c] transition-colors duration-200 text-sm" style={{ fontFamily: "var(--font-sans)" }}>{item.value}</p>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 border border-[#c9a84c]/25 flex items-center justify-center text-[#c9a84c]/50 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-white/30 text-[9px] tracking-[0.4em] uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>Location</p>
                      <p className="text-white text-sm" style={{ fontFamily: "var(--font-sans)" }}>United Arab Emirates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 border border-[#c9a84c]/25 flex items-center justify-center text-[#c9a84c]/50 flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-white/30 text-[9px] tracking-[0.4em] uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>Business Hours</p>
                      <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
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
                  <a href="https://www.linkedin.com/company/al-mahmasani-roastery-llc/" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 border border-[#c9a84c]/25 hover:border-[#c9a84c] flex items-center justify-center text-white/40 hover:text-[#c9a84c] transition-all duration-300" aria-label="LinkedIn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 border border-[#c9a84c]/25 hover:border-[#c9a84c] flex items-center justify-center text-white/40 hover:text-[#c9a84c] transition-all duration-300" aria-label="Instagram">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                  </a>
                </div>
              </AnimatedSection>

              {/* Quick WhatsApp CTA */}
              <AnimatedSection delay={280}>
                <div className="border border-[#c9a84c]/15 p-6 bg-[#0c0c0c]">
                  <p className="text-white text-sm font-light mb-2" style={{ fontFamily: "var(--font-serif)" }}>Prefer instant contact?</p>
                  <p className="text-white/40 text-xs leading-relaxed mb-5" style={{ fontFamily: "var(--font-sans)" }}>WhatsApp us directly for faster responses and wholesale pricing.</p>
                  <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
                    className="btn-luxury inline-flex items-center gap-2 bg-[#25D366] text-white text-[10px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#20ba59] transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
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
                  <div className="border border-[#c9a84c]/25 p-14 text-center bg-[#0c0c0c]">
                    <div className="w-14 h-14 border border-[#c9a84c]/40 bg-[#c9a84c]/8 flex items-center justify-center mx-auto mb-6">
                      <span className="text-[#c9a84c] text-2xl">✓</span>
                    </div>
                    <h3 className="text-white font-light mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem" }}>Enquiry Sent</h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-8" style={{ fontFamily: "var(--font-sans)" }}>
                      Your message has been forwarded via WhatsApp. Our team will respond within one business day.
                    </p>
                    <button onClick={() => setSent(false)} className="inline-flex items-center gap-2 text-[#c9a84c] text-xs tracking-[0.3em] uppercase hover:gap-3 transition-all" style={{ fontFamily: "var(--font-sans)" }}>
                      Send Another <ArrowRight size={12} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/30 text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--font-sans)" }}>Full Name *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Ahmad Al Rashid" className={inputClass} style={{ fontFamily: "var(--font-sans)" }} />
                      </div>
                      <div>
                        <label className="text-white/30 text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--font-sans)" }}>Company Name</label>
                        <input type="text" name="company" value={form.company} onChange={handleChange}
                          placeholder="Your Company LLC" className={inputClass} style={{ fontFamily: "var(--font-sans)" }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/30 text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--font-sans)" }}>Phone Number *</label>
                        <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                          placeholder="+971 50 000 0000" className={inputClass} style={{ fontFamily: "var(--font-sans)" }} />
                      </div>
                      <div>
                        <label className="text-white/30 text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--font-sans)" }}>Email Address</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="email@company.ae" className={inputClass} style={{ fontFamily: "var(--font-sans)" }} />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/30 text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--font-sans)" }}>Product Category of Interest</label>
                      <select name="category" value={form.category} onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`} style={{ fontFamily: "var(--font-sans)" }}>
                        <option value="" className="bg-[#0a0a0a]">Select a category...</option>
                        {["Cashews", "Almonds", "Pistachios", "Peanuts", "Mixed Nuts", "Dried Fruits", "Seeds & Snacks", "Multiple Categories"].map((c) => (
                          <option key={c} value={c} className="bg-[#0a0a0a]">{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/30 text-[9px] tracking-[0.4em] uppercase block mb-2" style={{ fontFamily: "var(--font-sans)" }}>Your Message *</label>
                      <textarea name="message" required rows={6} value={form.message} onChange={handleChange}
                        placeholder="Tell us about your business, the products you're interested in, and your approximate order volumes..."
                        className={`${inputClass} resize-none`} style={{ fontFamily: "var(--font-sans)" }} />
                    </div>
                    <button type="submit"
                      className="btn-luxury w-full flex items-center justify-center gap-3 bg-[#c9a84c] text-black text-[11px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#e8c97a] transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                      <Send size={15} />
                      Send Enquiry via WhatsApp
                    </button>
                    <p className="text-white/20 text-[10px] text-center" style={{ fontFamily: "var(--font-sans)" }}>
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
      <section className="py-14 bg-[#0c0c0c] border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/35 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Al Mahmasani Roasteries · United Arab Emirates · Est. 1975
          </p>
          <a href="https://wa.me/971504622865" target="_blank" rel="noopener noreferrer"
            className="btn-luxury inline-flex items-center gap-2 border border-[#c9a84c]/40 text-[#c9a84c] text-[10px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-[#c9a84c] hover:text-black transition-all duration-300" style={{ fontFamily: "var(--font-sans)" }}>
            <MessageCircle size={13} />
            +971 50 462 2865
          </a>
        </div>
      </section>
    </>
  );
}
