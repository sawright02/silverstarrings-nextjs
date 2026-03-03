"use client";

import Image from "next/image";

interface LogoProps {
  size?: number;
  variant?: "full" | "icon" | "wordmark";
  className?: string;
}

export function Logo({ size = 120, variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") {
    // Stamp icon — cream-filled rounded rect with 8-pointed star + oval, matching logo.png
    return (
      <svg
        width={size * 0.4}
        height={size * 0.4}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect x="8" y="8" width="84" height="84" rx="18" ry="18" fill="#F0EBE1" stroke="#922424" strokeWidth="4.5"/>
        {/* 8-pointed star: outer r=38, inner r=17, centered at 50,50 */}
        <path
          d="M50,12 L56.5,34.3 L76.9,23.1 L65.7,43.5 L88,50 L65.7,56.5 L76.9,76.9 L56.5,65.7 L50,88 L43.5,65.7 L23.1,76.9 L34.3,56.5 L12,50 L34.3,43.5 L23.1,23.1 L43.5,34.3 Z"
          fill="#922424"
        />
        <ellipse cx="50" cy="50" rx="9" ry="12" fill="#F0EBE1"/>
      </svg>
    );
  }

  if (variant === "wordmark") {
    return (
      <div className={`flex flex-col items-center leading-none ${className}`} style={{ gap: "0" }}>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: size * 0.18,
            fontWeight: 700,
            color: "#8A8C2A",
            letterSpacing: "0.15em",
            lineHeight: 1,
          }}
        >
          SILVER STAR
        </span>
        <span
          style={{
            fontFamily: "'Jost', system-ui, sans-serif",
            fontSize: size * 0.07,
            fontWeight: 500,
            color: "#8A8C2A",
            letterSpacing: "0.4em",
            lineHeight: 1,
            marginTop: size * 0.02,
          }}
        >
          RING CO
        </span>
      </div>
    );
  }

  // Full logo — uses logo.png with an SVG feColorMatrix filter that turns near-cream
  // pixels transparent. This works regardless of stacking context (unlike mix-blend-mode).
  // Formula: A' = -1.33R - 1.33G - 1.33B + 3  →  cream pixels → 0, dark ink → 1
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }} aria-hidden>
        <defs>
          <filter id="logoRemoveCream" colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            {/*
            Step 1 — feColorMatrix: A' = -1.89·B + 1.667
              Cream  (#F0EBE1, B≈0.882) → A≈0  (transparent)
              Olive  (#8A8C2A, B≈0.165) → A=1  (opaque)
              Crimson(#922424, B≈0.141) → A=1  (opaque)
              Problem: empty pixels outside the image have B=0, giving A=1.667→black.
            Step 2 — feComposite "in": masks result back to the original alpha,
              so pixels that were transparent in the source PNG stay transparent.
          */}
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 -1.89 0 1.667"
              result="recolored"
            />
            <feComposite in="recolored" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <Image
        src="/logo.png"
        width={size}
        height={size}
        alt="Silver Star Ring Co"
        className={className}
        style={{ filter: "url(#logoRemoveCream)", display: "block" }}
        priority
      />
    </>
  );
}
