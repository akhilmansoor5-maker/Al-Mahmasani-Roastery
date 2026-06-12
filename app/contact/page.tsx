"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Al Mahmasani,\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`https://wa.me/971504622865?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-black" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Get In Touch</p>
          <h1 className="text-white text-5xl md:text-6xl font-light leading-tight">
            {"Let's Work"}<br />
            <span className="gold-text">Together</span>
          </h1>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left — info */}
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection>
                <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6 luxury-underline">Contact Details</p>

                <div className="space-y-6">
                  <a
                    href="https://wa.me/971504622865"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 border border-[#c9a84c]/30 group-hover:border-[#c9a84c] flex items-center justify-center text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-all duration-300 flex-shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs tracking-widest uppercase mb-1">WhatsApp</p>
                      <p className="text-white text-base group-hover:text-[#c9a84c] transition-colors duration-200">
                        +971 50 462 2865
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+971504622865"
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 border border-[#c9a84c]/30 group-hover:border-[#c9a84c] flex items-center justify-center text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-all duration-300 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Phone</p>
                      <p className="text-white text-base group-hover:text-[#c9a84c] transition-colors duration-200">
                        +971 50 462 2865
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c]/60 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Location</p>
                      <p className="text-white text-base">United Arab Emirates</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c]/60 flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Business Hours</p>
                      <p className="text-white text-sm leading-relaxed">
                        Monday – Friday: 9:00 AM – 6:00 PM<br />
                        Saturday: 9:00 AM – 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-5">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/al-mahmasani-roastery-llc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-[#c9a84c]/30 hover:border-[#c9a84c] flex items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </AnimatedSection>

              {/* Map placeholder */}
              <AnimatedSection delay={300}>
                <div className="border border-[#c9a84c]/20 h-48 flex items-center justify-center bg-[#0d0d0d] relative overflow-hidden">
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
                  <div className="text-center">
                    <MapPin className="text-[#c9a84c]/40 mx-auto mb-3" size={32} />
                    <p className="text-white/30 text-xs tracking-widest uppercase">United Arab Emirates</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={150}>
                <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6 luxury-underline">Send An Enquiry</p>

                {sent ? (
                  <div className="border border-[#c9a84c]/30 p-12 text-center bg-black/40">
                    <div className="text-[#c9a84c] text-5xl mb-4">✓</div>
                    <h3 className="text-white text-xl font-light mb-3">Message Sent</h3>
                    <p className="text-white/50 text-sm">
                      Your enquiry has been forwarded via WhatsApp. We will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Ahmad Al Rashid"
                          className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 focus:border-[#c9a84c]/60 text-white text-sm px-4 py-3.5 outline-none placeholder:text-white/20 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company LLC"
                          className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 focus:border-[#c9a84c]/60 text-white text-sm px-4 py-3.5 outline-none placeholder:text-white/20 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+971 50 000 0000"
                          className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 focus:border-[#c9a84c]/60 text-white text-sm px-4 py-3.5 outline-none placeholder:text-white/20 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="email@company.ae"
                          className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 focus:border-[#c9a84c]/60 text-white text-sm px-4 py-3.5 outline-none placeholder:text-white/20 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business and what products you are interested in..."
                        className="w-full bg-[#0d0d0d] border border-[#c9a84c]/20 focus:border-[#c9a84c]/60 text-white text-sm px-4 py-3.5 outline-none placeholder:text-white/20 transition-colors duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-luxury w-full flex items-center justify-center gap-3 bg-[#c9a84c] text-black text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#e8c97a] transition-all duration-300 font-medium"
                    >
                      <Send size={16} />
                      Send via WhatsApp
                    </button>

                    <p className="text-white/25 text-xs text-center">
                      Your message will be sent directly via WhatsApp to our team.
                    </p>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA strip */}
      <section className="py-16 bg-[#0d0d0d] border-t border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/50 text-sm mb-6">Prefer to reach us directly?</p>
          <a
            href="https://wa.me/971504622865"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury inline-flex items-center gap-3 bg-[#25D366] text-white text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#20ba59] transition-all duration-300 font-medium"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp Now
          </a>
        </div>
      </section>
    </>
  );
}
