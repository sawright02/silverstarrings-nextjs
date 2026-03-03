"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Source & Select",
    description:
      "We hunt antique markets, estate sales, and silver collections for genuine sterling spoons — each with unique hallmarks, patterns, and patinas that define the final ring.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="20" r="12" stroke="#922424" strokeWidth="2"/>
        <path d="M33 30 L44 41" stroke="#922424" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 16 L24 20 L28 16" stroke="#8A8C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 20 L24 26" stroke="#8A8C2A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Anneal & Shape",
    description:
      "The spoon is gently heated to make it malleable. Then, using traditional silversmithing tools, we carefully bend and form it around a steel mandrel to create the perfect ring shape.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M8 40 C8 40 16 34 24 34 C32 34 40 40 40 40" stroke="#922424" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 34 L24 10" stroke="#8A8C2A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 18 C16 14 20 10 24 10 C28 10 32 14 32 18" stroke="#922424" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="10" r="4" fill="#8A8C2A" opacity="0.3"/>
        <path d="M22 8 L24 6 L26 8" stroke="#8A8C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Refine & File",
    description:
      "Each ring is meticulously filed, sanded through progressive grits, and the edges smoothed. The original spoon details — engravings, flourishes, monograms — are carefully preserved.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="10" y="22" width="28" height="8" rx="2" fill="none" stroke="#922424" strokeWidth="2"/>
        <path d="M14 22 L14 18 M20 22 L20 18 M26 22 L26 18 M32 22 L32 18" stroke="#8A8C2A" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="24" cy="38" rx="14" ry="5" fill="none" stroke="#922424" strokeWidth="1.5"/>
        <path d="M10 38 L10 30 M38 38 L38 30" stroke="#922424" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Polish & Present",
    description:
      "A final polish brings the silver to a brilliant luster, revealing its natural warmth. Each ring is cleaned, sized, and presented in handcrafted packaging with its provenance card.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="26" r="14" fill="none" stroke="#922424" strokeWidth="2"/>
        <circle cx="24" cy="26" r="7" fill="none" stroke="#8A8C2A" strokeWidth="1.5" strokeDasharray="3 2"/>
        <path d="M24 14 L24 10 M34 17 L37 14 M38 26 L42 26 M34 35 L37 38 M24 38 L24 42 M14 35 L11 38 M10 26 L6 26 M14 17 L11 14" stroke="#C8B898" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="26" r="3" fill="#8A8C2A"/>
      </svg>
    ),
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-28 md:py-40 px-6"
      style={{ backgroundColor: "#E8E0D0" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(44,36,24,0.08) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center transition-all duration-1000"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="font-body text-xs tracking-widest text-olive uppercase">
            The Craft
          </span>
          <h2
            className="mt-4 font-display text-5xl md:text-6xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            From Spoon
            <br />
            <em>to Ring</em>
          </h2>
          <p className="mt-6 font-body text-base text-bark/50 max-w-xl mx-auto leading-relaxed">
            A centuries-old process, practiced with patience and precision. Each
            transformation takes 4–8 hours of focused handwork.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              delay={i * 150}
              inView={inView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center transition-all duration-1000 delay-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <button
            onClick={() => {
              const el = document.querySelector("#collection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline"
          >
            See the Results
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  delay,
  inView,
}: {
  step: (typeof steps)[0];
  delay: number;
  inView: boolean;
}) {
  return (
    <div
      className="relative group transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Number */}
      <div
        className="absolute -top-4 -left-2 font-display text-7xl font-light select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "rgba(44,36,24,0.06)",
          lineHeight: 1,
        }}
      >
        {step.number}
      </div>

      <div className="relative p-6 rounded-2xl border border-sand/50 bg-cream/60 backdrop-blur-sm group-hover:border-olive/30 transition-colors duration-300">
        {/* Icon */}
        <div className="mb-5">{step.icon}</div>

        {/* Title */}
        <h3
          className="font-display text-2xl font-medium text-bark"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-3 font-body text-sm leading-relaxed text-bark/55">
          {step.description}
        </p>
      </div>
    </div>
  );
}
