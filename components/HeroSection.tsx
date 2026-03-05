"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const next = document.querySelector("#story");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F0EBE1" }}
    >
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(200,184,152,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #8A8C2A 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #922424 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pb-16 md:pb-24">
        {/* Logo */}
        <div
          className="mt-6 md:mt-10 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)",
          }}
        >
          <Logo size={440} variant="full" className="animate-float" />
        </div>

        {/* Tagline */}
        <div
          className="mt-2 md:mt-5 transition-all duration-1000 delay-300"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p
            className="font-display text-xl md:text-2xl font-light italic text-bark/60 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Where heirloom silver becomes wearable art
          </p>
        </div>

        {/* Divider */}
        <div
          className="mt-3 md:mt-6 transition-all duration-1000 delay-500"
          style={{ opacity: loaded ? 1 : 0 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-olive/40" />
            <Logo size={20} variant="icon" />
            <div className="w-16 h-px bg-olive/40" />
          </div>
        </div>

        {/* Sub tagline */}
        <div
          className="mt-3 md:mt-6 transition-all duration-1000 delay-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <p
            className="font-body text-sm tracking-widest text-bark/50 uppercase"
          >
            Handcrafted · One of a Kind
          </p>
        </div>

        {/* CTAs */}
        <div
          className="mt-8 md:mt-16 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <button
            onClick={() => {
              const el = document.querySelector("#collection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Explore Collection
            <ArrowRight />
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#story");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <button
        onClick={handleScroll}
        className="absolute right-8 md:right-12 bottom-12 flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.5s",
        }}
      >
        <span className="font-body text-xs tracking-widest text-bark/40 uppercase group-hover:text-bark/60 transition-colors">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-bark/30 to-transparent" />
      </button> */}

      {/* Bottom grain texture */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(232,224,208,0.3))",
        }}
      />
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
