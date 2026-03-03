"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    id: 1,
    name: "Margot Chen",
    location: "Portland, OR",
    ring: "The Victorian Rose",
    rating: 5,
    text: "I have been searching for a spoon ring like my grandmother used to wear. This is beyond anything I could have imagined — the detail in the silver is just breathtaking. I wear it every single day.",
  },
  {
    id: 2,
    name: "James Whitfield",
    location: "Austin, TX",
    ring: "The Monogram",
    rating: 5,
    text: "Bought this for my partner as an anniversary gift. The craftsmanship is extraordinary — you can feel the history in the metal. It arrived beautifully packaged with a little card about the spoon's origins.",
  },
  {
    id: 3,
    name: "Elara Vasquez",
    location: "Brooklyn, NY",
    ring: "The Art Nouveau",
    rating: 5,
    text: "I've bought from many artisan jewelers online but Silver Star is different. The care they put into every detail — the fit, the finish, the presentation — feels genuinely handmade. Not mass-produced. Real art.",
  },
  {
    id: 4,
    name: "Thomas & Addie",
    location: "Savannah, GA",
    ring: "The Wide Spoon",
    rating: 5,
    text: "We reached out about a custom commission using a spoon from Thomas's family. The team was so thoughtful and communicative throughout. The finished ring made us both cry. It's perfect.",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "#2C2418" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: "linear-gradient(to right, transparent, #C8B898, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-20"
        style={{ background: "linear-gradient(to right, transparent, #C8B898, transparent)" }}
      />

      {/* Large quote mark */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 font-display text-[220px] leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "rgba(200,184,152,0.05)",
          lineHeight: 0.8,
        }}
      >
        "
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="text-center transition-all duration-1000"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="font-body text-xs tracking-widest text-sand/60 uppercase">
            Reviews
          </span>
          <h2
            className="mt-4 font-display text-5xl md:text-6xl font-light text-cream"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Words from
            <br />
            <em className="text-sand">Our Wearers</em>
          </h2>

          {/* Stars */}
          <div className="mt-6 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled />
            ))}
          </div>
          <p className="mt-2 font-body text-xs text-sand/40 tracking-widest uppercase">
            5.0 · 127 Reviews
          </p>
        </div>

        {/* Testimonial carousel */}
        <div
          className="mt-16 transition-all duration-1000 delay-300"
          style={{ opacity: inView ? 1 : 0 }}
        >
          {/* Active testimonial */}
          <div className="relative min-h-[220px]">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="absolute inset-0 flex flex-col items-center text-center transition-all duration-700"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "translateY(0)" : "translateY(10px)",
                  pointerEvents: active === i ? "auto" : "none",
                }}
              >
                <p
                  className="font-display text-xl md:text-2xl font-light italic leading-relaxed text-cream/80"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  "{t.text}"
                </p>

                <div className="mt-8 flex flex-col items-center gap-1">
                  <span className="font-body text-sm text-sand font-medium">{t.name}</span>
                  <span className="font-body text-xs text-sand/40 tracking-wider">{t.location} · {t.ring}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                aria-label={`Testimonial ${i + 1}`}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? 24 : 8,
                    height: 8,
                    backgroundColor: active === i ? "#8A8C2A" : "rgba(200,184,152,0.3)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div
          className="mt-20 grid grid-cols-3 gap-8 border-t border-sand/10 pt-12 transition-all duration-1000 delay-500"
          style={{ opacity: inView ? 1 : 0 }}
        >
          {[
            { label: "Free Shipping", sub: "Orders over $100" },
            { label: "30-Day Returns", sub: "Hassle-free guarantee" },
            { label: "Lifetime Polish", sub: "Send it back anytime" },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <p className="font-body text-xs tracking-widest text-sand/60 uppercase">{badge.label}</p>
              <p className="mt-1 font-body text-xs text-sand/30">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon({ filled }: { filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1 L9.8 6.2 L15.3 6.2 L10.9 9.5 L12.6 14.8 L8 11.4 L3.4 14.8 L5.1 9.5 L0.7 6.2 L6.2 6.2 Z"
        fill={filled ? "#8A8C2A" : "none"}
        stroke="#8A8C2A"
        strokeWidth="1"
      />
    </svg>
  );
}
