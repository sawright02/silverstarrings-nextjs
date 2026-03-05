"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="story"
      ref={ref}
      className="relative py-28 md:py-40 px-6"
      style={{ backgroundColor: "#F0EBE1" }}
    >
      {/* Side label */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-3 -rotate-90 origin-center">
        <div className="w-12 h-px bg-olive/30" />
        <span className="font-body text-xs tracking-widest text-bark/30 uppercase whitespace-nowrap">
          Our Story
        </span>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Text */}
        <div
          className="transition-all duration-1000"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
          }}
        >
          <span className="font-body text-xs tracking-widest text-olive uppercase">
            Est. 2026
          </span>

          <h2
            className="mt-4 font-display text-5xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Every Ring
            <br />
            <em>Tells a Story</em>
          </h2>

          <div className="mt-6 w-12 h-px bg-olive/50" />

          <p className="mt-8 font-body text-base leading-relaxed text-bark/60">
            Silver Star Ring Co was born from a simple obsession: transforming
            antique spoons into rings that carry the weight of
            history. Each piece begins as a spoon — perhaps a Victorian
            tablespoon, an ornate serving utensil, or a monogrammed teaspoon
            passed down through generations.
          </p>

          <p className="mt-4 font-body text-base leading-relaxed text-bark/60">
            Through patient craftsmanship, I bend, shape, and polish these
            heirlooms into wearable art. No two rings are identical. Each one
            preserves the original hallmarks, engravings, and patina that give
            it its singular character.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <div className="text-center">
              <p
                className="font-display text-4xl font-light text-crimson"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                100%
              </p>
              <p className="font-body text-xs tracking-wider text-bark/40 uppercase mt-1">
                Handcrafted
              </p>
            </div>
            <div className="w-px h-12 bg-sand" />
            <div className="text-center">
              <p
                className="font-display text-4xl font-light text-crimson"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                1 of 1
              </p>
              <p className="font-body text-xs tracking-wider text-bark/40 uppercase mt-1">
                Each Ring Unique
              </p>
            </div>
            <div className="w-px h-12 bg-sand" />
            <div className="text-center">
              <p
                className="font-display text-4xl font-light text-crimson"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                ∞
              </p>
              <p className="font-body text-xs tracking-wider text-bark/40 uppercase mt-1">
                Years of History
              </p>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div
          className="transition-all duration-1000 delay-300 flex justify-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(40px)",
          }}
        >
          {/* Wrapper sized to photo — background card inset is relative to this */}
          <div className="relative" style={{ width: "72%" }}>
            {/* Centered background card for depth */}
            <div
              className="absolute rounded-2xl"
              style={{
                inset: "-24px",
                background: "linear-gradient(160deg, #C8B898 0%, #D4C9B0 60%, #C0B48A44 100%)",
                borderRadius: "1.25rem",
                boxShadow: "0 24px 64px rgba(44,36,24,0.22), 0 6px 20px rgba(44,36,24,0.12)",
              }}
            />
            {/* Photo container */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "2/3",
                width: "100%",
                boxShadow: "0 20px 60px rgba(44,36,24,0.18), 0 4px 16px rgba(44,36,24,0.10)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/story.png"
                alt="Stella, maker of Silver Star Ring Co"
                className="w-full h-full object-cover object-top"
                style={{ opacity: 0.88 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
