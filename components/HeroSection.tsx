"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";

const slides = [
  { src: "/images/cashew.jpg",    label: "Premium Cashews" },
  { src: "/images/almond.jpg",    label: "Roasted Almonds" },
  { src: "/images/pistachio.jpg", label: "Premium Pistachios" },
  { src: "/images/peanut.jpg",    label: "Roasted Peanuts" },
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

      {/* Animated slideshow fallback */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-slide hero-slide-${i + 1} absolute inset-0`}
          >
            <Image
              src={s.src} alt={s.label} fill
              sizes="100vw" style={{ objectFit: "cover" }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        onLoadedData={() => setVideoLoaded(true)}
        poster="/images/cashew.jpg"
        className={`absolute inset-0 z-[1] w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/hero.mp4"  type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Dark overlay — hero stays cinematic/dark even on light site */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(110deg, rgba(10,7,2,0.88) 0%, rgba(10,7,2,0.60) 50%, rgba(10,7,2,0.25) 100%)",
        }}
      />
      {/* Bottom fade into cream */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[2]"
        style={{
          background:
            "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[3] h-full flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 pb-24 md:pb-32">
          <div className="max-w-2xl">

            <p className="section-label mb-5 opacity-0 hero-in-1" style={{ color: "var(--gold-mid)" }}>
              Est. 1975 · United Arab Emirates
            </p>

            <h1
              className="text-white font-normal leading-[0.96] mb-6 opacity-0 hero-in-2"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(3.2rem, 8vw, 7rem)",
              }}
            >
              Heritage in<br />
              <em className="not-italic" style={{ color: "var(--gold-mid)" }}>
                every nut.
              </em>
            </h1>

            <p
              className="leading-relaxed mb-10 max-w-lg opacity-0 hero-in-3"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.60)",
              }}
            >
              Premium nuts, dried fruits and snack products — supplied to the
              UAE&apos;s finest retailers, hotels and restaurants since 1975.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 hero-in-4">
              <Link href="/products" className="btn btn-gold text-[11px] tracking-[0.18em]">
                Explore Products
              </Link>
              <Link
                href="/about"
                className="btn text-[11px] tracking-[0.18em]"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.30)",
                  color: "#fff",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-mid)";
                  (e.currentTarget as HTMLElement).style.color = "var(--gold-mid)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.30)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Play / Pause */}
      <button
        onClick={toggle}
        className="absolute bottom-8 right-8 z-[3] w-11 h-11 flex items-center justify-center transition-all duration-300"
        style={{
          border: "1.5px solid rgba(255,255,255,0.28)",
          borderRadius: "var(--radius-btn)",
          color: "rgba(255,255,255,0.55)",
          background: "rgba(0,0,0,0.15)",
          backdropFilter: "blur(8px)",
        }}
        aria-label={isPlaying ? "Pause" : "Play"}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-mid)";
          (e.currentTarget as HTMLElement).style.color = "var(--gold-mid)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(255,255,255,0.28)";
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
        }}
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
      </button>

      {/* Scroll cue */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
        <div
          className="w-px h-12 animate-pulse"
          style={{
            background:
              "linear-gradient(to bottom, rgba(201,168,76,0.55), transparent)",
          }}
        />
      </div>
    </section>
  );
}
