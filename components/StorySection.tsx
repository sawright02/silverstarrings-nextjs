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
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3 -rotate-90 origin-center">
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
            antique sterling silver spoons into rings that carry the weight of
            history. Each piece begins as a spoon — perhaps a Victorian
            tablespoon, an ornate serving utensil, or a monogrammed teaspoon
            passed down through generations.
          </p>

          <p className="mt-4 font-body text-base leading-relaxed text-bark/60">
            Through patient craftsmanship, we bend, shape, and polish these
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
                Sterling Silver
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

        {/* Visual: stacked rings illustration */}
        <div
          className="relative transition-all duration-1000 delay-300"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(40px)",
          }}
        >
          <SpoonRingIllustration />
        </div>
      </div>
    </section>
  );
}

function SpoonRingIllustration() {
  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: 400 }}>
      {/* Background card */}
      <div
        className="absolute inset-8 rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #E8E0D0 0%, #D8CCBA 100%)",
        }}
      />

      {/* Decorative spoon shape */}
      <svg
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full max-w-xs"
      >
        {/* Spoon bowl */}
        <ellipse
          cx="150"
          cy="80"
          rx="55"
          ry="65"
          fill="none"
          stroke="#C8B898"
          strokeWidth="3"
        />
        <ellipse
          cx="150"
          cy="80"
          rx="42"
          ry="52"
          fill="rgba(200,184,152,0.3)"
          stroke="#B8A880"
          strokeWidth="1.5"
        />
        {/* Spoon handle */}
        <path
          d="M 130 142 C 126 160 124 200 126 260 C 127 290 129 320 130 340 M 170 142 C 174 160 176 200 174 260 C 173 290 171 320 170 340"
          stroke="#C8B898"
          strokeWidth="2"
          fill="none"
        />
        {/* Handle detail lines */}
        <path
          d="M 133 180 L 167 180"
          stroke="#B8A880"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M 132 200 L 168 200"
          stroke="#B8A880"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Ring 1 - larger, on spoon handle */}
        <ellipse
          cx="150"
          cy="220"
          rx="38"
          ry="14"
          fill="none"
          stroke="#8A8C2A"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Ring 2 - on spoon */}
        <ellipse
          cx="150"
          cy="270"
          rx="38"
          ry="14"
          fill="none"
          stroke="#922424"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Ring 3 */}
        <ellipse
          cx="150"
          cy="315"
          rx="38"
          ry="14"
          fill="none"
          stroke="#6B6D1E"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Star decoration on spoon bowl */}
        <path
          d="M150 55 L153 66 L163 63 L157 71 L162 80 L152 77 L150 88 L148 77 L138 80 L143 71 L137 63 L147 66 Z"
          fill="rgba(146,36,36,0.5)"
        />
      </svg>

      {/* Corner decorations */}
      <div className="absolute top-12 right-12 opacity-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#8A8C2A" strokeWidth="1"/>
          <circle cx="20" cy="20" r="10" stroke="#8A8C2A" strokeWidth="1"/>
          <circle cx="20" cy="20" r="3" fill="#8A8C2A"/>
        </svg>
      </div>
      <div className="absolute bottom-12 left-12 opacity-20">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 2 L17 11 L26 8 L21 16 L27 22 L18 21 L15 30 L12 21 L3 22 L9 16 L4 8 L13 11 Z" fill="#922424"/>
        </svg>
      </div>
    </div>
  );
}
