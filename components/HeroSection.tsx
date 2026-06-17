"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";

const slides = [
  { src: "/images/cashew.jpg", label: "Premium Cashews" },
  { src: "/images/almond.jpg", label: "Roasted Almonds" },
  { src: "/images/pistachio.jpg", label: "Premium Pistachios" },
  { src: "/images/peanut.jpg", label: "Roasted Peanuts" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden">

      {/* ── Animated image slideshow (fallback / background) ── */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoLoaded ? "opacity-0" : "opacity-100"}`}>
        {slides.map((s, i) => (
          <div key={i} className={`hero-slide hero-slide-${i + 1} absolute inset-0`}>
            <Image
              src={s.src} alt={s.label} fill
              sizes="100vw" style={{ objectFit: "cover" }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* ── Video (plays when file exists at /videos/hero.mp4) ── */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        onLoadedData={() => setVideoLoaded(true)}
        poster="/images/cashew.jpg"
        className={`absolute inset-0 z-[1] w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 z-[2]" style={{
        background: "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.25) 100%)"
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-[#080808] to-transparent" />

      {/* ── Content — left-aligned, bottom-positioned (Modern Bakery style) ── */}
      <div className="relative z-[3] h-full flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 pb-20 md:pb-28">
          <div className="max-w-2xl hero-content-in">
            <p className="section-label mb-5 opacity-0 hero-in-1">
              Est. 1975 · United Arab Emirates
            </p>
            <h1
              className="text-white font-light leading-[1] mb-5 opacity-0 hero-in-2"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.2rem, 8vw, 7rem)" }}
            >
              Heritage in<br />
              <em className="gold-text not-italic">every nut.</em>
            </h1>
            <p
              className="text-white/60 leading-relaxed mb-10 max-w-lg opacity-0 hero-in-3"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1rem" }}
            >
              Premium nuts, dried fruits and snack products — supplied to the UAE&apos;s finest retailers, hotels and restaurants since 1975.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 hero-in-4">
              <Link
                href="/products"
                className="btn-luxury bg-[#c9a84c] text-black text-[11px] tracking-[0.25em] uppercase px-9 py-4 hover:bg-[#e8c97a] transition-all duration-300 font-semibold text-center"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Explore Products
              </Link>
              <Link
                href="/about"
                className="btn-luxury border border-white/35 text-white text-[11px] tracking-[0.25em] uppercase px-9 py-4 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 text-center"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Play / Pause control (Modern Bakery signature) ── */}
      <button
        onClick={toggle}
        className="absolute bottom-8 right-8 z-[3] w-12 h-12 border border-white/30 hover:border-[#c9a84c] flex items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all duration-300 backdrop-blur-sm bg-black/20"
        aria-label={isPlaying ? "Pause background" : "Play background"}
      >
        {isPlaying ? <Pause size={15} /> : <Play size={15} />}
      </button>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
