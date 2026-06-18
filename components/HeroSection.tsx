"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";

const slides = [
  { src: "/images/products/cashew-3.jpg",   label: "Premium Cashews" },
  { src: "/images/products/almond-2.jpg",   label: "California Almonds" },
  { src: "/images/products/coffee-3.jpg",   label: "Coffee Roasted Nuts" },
  { src: "/images/products/pecan-1.jpg",    label: "Premium Pecans" },
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
    <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>

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
        poster="/images/products/cashew-3.jpg"
        className={`absolute inset-0 z-[1] w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/hero.mp4"  type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(110deg, rgba(10,7,2,0.88) 0%, rgba(10,7,2,0.60) 50%, rgba(10,7,2,0.25) 100%)",
        }}
      />
      {/* Bottom fade into cream */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2]"
        style={{
          height: "200px",
          background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
        }}
      />

      {/* Content — vertically centered */}
      <div
        className="relative z-[3] flex flex-col justify-center"
        style={{ minHeight: "100vh", padding: "120px 0" }}
      >
        <div
          className="w-full"
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingLeft: "clamp(32px, 6vw, 80px)",
            paddingRight: "clamp(32px, 6vw, 80px)",
          }}
        >
          <div style={{ maxWidth: "700px" }}>

            <p
              className="section-label opacity-0 hero-in-1"
              style={{ color: "var(--gold-mid)", marginBottom: "24px" }}
            >
              Est. 1975 · United Arab Emirates
            </p>

            <h1
              className="text-white font-normal opacity-0 hero-in-2"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(4.5rem, 10vw, 7.5rem)",
                lineHeight: "0.96",
                marginBottom: "32px",
              }}
            >
              Heritage in<br />
              <em className="not-italic" style={{ color: "var(--gold-mid)" }}>
                every nut.
              </em>
            </h1>

            <p
              className="opacity-0 hero-in-3"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "18px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.60)",
                maxWidth: "520px",
                marginBottom: "48px",
              }}
            >
              Premium nuts, dried fruits and snack products — supplied to the
              UAE&apos;s finest retailers, hotels and restaurants since 1975.
            </p>

            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 opacity-0 hero-in-4">
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
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.30)";
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
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.28)";
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
            background: "linear-gradient(to bottom, rgba(201,168,76,0.55), transparent)",
          }}
        />
      </div>
    </section>
  );
}
