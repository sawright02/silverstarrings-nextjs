"use client";


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
        width={size * 0.77}
        height={size * 0.77}
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

  // Full logo — use plain img for SVG (Next.js image optimizer doesn't support SVGs)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      width={size}
      height={Math.round(size * 1008 / 1024)}
      alt="Silver Star Ring Co"
      className={className}
      style={{ display: "block" }}
    />
  );
}
