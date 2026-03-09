"use client";

import { useRef, useState } from "react";
import type React from "react";
import { useInView } from "@/hooks/useInView";
import { useCart } from "@/context/CartContext";

const rings = [
  {
    id: 1,
    name: "The Victorian Rose",
    description: "c.1880 sterling teaspoon, rosette pattern",
    price: "$148",
    material: "Sterling .925",
    era: "Victorian",
    sizes: ["5", "6", "7", "8"],
    tag: "Bestseller",
    tagColor: "#922424",
    svgColor: "#8A8C2A",
    patternId: "rose",
    image: "/ring10.png",
  },
  {
    id: 2,
    name: "The Art Nouveau",
    description: "c.1905 silver, flowing floral scrollwork",
    price: "$165",
    material: "Sterling .925",
    era: "Art Nouveau",
    sizes: ["5", "6", "7"],
    tag: "New",
    tagColor: "#8A8C2A",
    svgColor: "#922424",
    patternId: "nouveau",
    image: "/ring3.png",
  },
  {
    id: 3,
    name: "The Monogram",
    description: "c.1920s sterling, engraved script letter",
    price: "$185",
    material: "Sterling .925",
    era: "Art Deco",
    sizes: ["6", "7", "8", "9"],
    tag: "Custom",
    tagColor: "#6B6D1E",
    svgColor: "#4A3D2A",
    patternId: "mono",
    image: "/ring2.png",
  },
  {
    id: 4,
    name: "The Hammered Band",
    description: "c.1960s spoon, minimalist forged texture",
    price: "$125",
    material: "Sterling .925",
    era: "Mid-Century",
    sizes: ["5", "6", "7", "8", "9"],
    tag: "Available",
    tagColor: "#8C7B6A",
    svgColor: "#2C2418",
    patternId: "hammered",
    image: "/ring7.png",
  },
  {
    id: 5,
    name: "The Fiddle Thread",
    description: "c.1850s fiddle pattern, thread edge detail",
    price: "$155",
    material: "Sterling .925",
    era: "Georgian",
    sizes: ["4", "5", "6"],
    tag: "Rare",
    tagColor: "#922424",
    svgColor: "#922424",
    patternId: "fiddle",
    image: "/ring4.png",
  },
  {
    id: 6,
    name: "The Wide Spoon",
    description: "c.1900 serving spoon, bold statement piece",
    price: "$195",
    material: "Sterling .925",
    era: "Edwardian",
    sizes: ["6", "7", "8"],
    tag: "Statement",
    tagColor: "#6B6D1E",
    svgColor: "#8A8C2A",
    patternId: "wide",
    image: "/ring8.png",
  },
  {
    id: 7,
    name: "The Thistle",
    description: "c.1890s Scottish silver, thistle crest detail",
    price: "$172",
    material: "Sterling .925",
    era: "Victorian",
    sizes: ["5", "6", "7"],
    tag: "New",
    tagColor: "#8A8C2A",
    svgColor: "#8A8C2A",
    patternId: "rose",
    image: "/ring12.png",
  },
  {
    id: 8,
    name: "The King's Pattern",
    description: "c.1870s English silver, royal shell & scroll",
    price: "$215",
    material: "Sterling .925",
    era: "Victorian",
    sizes: ["7", "8", "9"],
    tag: "Rare",
    tagColor: "#922424",
    svgColor: "#4A3D2A",
    patternId: "fiddle",
    image: "/ring13.png",
  },
  {
    id: 9,
    name: "The Lily of the Valley",
    description: "c.1895 sterling, delicate floral spray",
    price: "$168",
    material: "Sterling .925",
    era: "Victorian",
    sizes: ["4", "5", "6", "7"],
    tag: "Available",
    tagColor: "#8C7B6A",
    svgColor: "#8A8C2A",
    patternId: "nouveau",
    image: "/ring14.png",
  },
  {
    id: 10,
    name: "The Rattail",
    description: "c.1710s Queen Anne rattail drop pattern",
    price: "$245",
    material: "Sterling .925",
    era: "Georgian",
    sizes: ["6", "7"],
    tag: "Rare",
    tagColor: "#922424",
    svgColor: "#2C2418",
    patternId: "hammered",
    image: "/ring15.png",
  },
  {
    id: 11,
    name: "The Hourglass",
    description: "c.1940s tapered waist, elegant mid-century form",
    price: "$138",
    material: "Sterling .925",
    era: "Mid-Century",
    sizes: ["5", "6", "7", "8"],
    tag: "Available",
    tagColor: "#8C7B6A",
    svgColor: "#922424",
    patternId: "wide",
    image: "/ring16.png",
  },
];

export function CollectionSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.05);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { addItem, openCart } = useCart();

  return (
    <section
      id="collection"
      ref={ref}
      className="relative py-28 md:py-40 px-6"
      style={{ backgroundColor: "#F0EBE1" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-1000"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div>
            <span className="font-body text-xs tracking-widest text-olive uppercase">
              The Collection
            </span>
            <h2
              className="mt-4 font-display text-5xl md:text-6xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Each Ring,
              <br />
              <em>A Universe</em>
            </h2>
          </div>
          <p className="font-body text-sm text-bark/50 max-w-sm leading-relaxed">
            Browse my current selection of handcrafted spoon rings. All pieces
            are one-of-a-kind and ship within 3–5 days.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rings.map((ring, i) => (
            <RingCard
              key={ring.id}
              ring={ring}
              delay={i * 80}
              inView={inView}
              hovered={hoveredId === ring.id}
              onHover={() => setHoveredId(ring.id)}
              onLeave={() => setHoveredId(null)}
              onAddToCart={(size) => {
                addItem({ id: ring.id, name: ring.name, price: ring.price, image: ring.image, size });
                openCart();
              }}
            />
          ))}
        </div>

        {/* Bottom */}
        <div
          className="mt-12 text-center transition-all duration-1000 delay-700"
          style={{ opacity: inView ? 1 : 0 }}
        >
          <p className="font-body text-sm text-bark/40">
            Don't see what you're looking for?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-3 font-body text-sm text-olive underline underline-offset-4 hover:text-olive-dark transition-colors"
          >
            Request a custom piece →
          </button>
        </div>
      </div>
    </section>
  );
}

function RingCard({
  ring,
  delay,
  inView,
  hovered,
  onHover,
  onLeave,
  onAddToCart,
}: {
  ring: (typeof rings)[0];
  delay: number;
  inView: boolean;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onAddToCart: (size: string) => void;
}) {
  const [pickingSize, setPickingSize] = useState(false);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (ring.sizes.length === 1) {
      onAddToCart(ring.sizes[0]);
    } else {
      setPickingSize(true);
    }
  };

  const handleSizeSelect = (size: string) => {
    setPickingSize(false);
    onAddToCart(size);
  };

  return (
    <div
      className="ring-card group cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={() => { onLeave(); setPickingSize(false); }}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden rounded-2xl aspect-square"
        style={{ backgroundColor: "#E8E0D0" }}
      >
        {/* Tag */}
        <div
          className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-body tracking-widest uppercase"
          style={{
            backgroundColor: ring.tagColor,
            color: "#F0EBE1",
            borderRadius: "2px",
          }}
        >
          {ring.tag}
        </div>

        {/* Ring image or SVG illustration */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        >
          {ring.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={ring.image}
              alt={ring.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <RingSVG ring={ring} />
          )}
        </div>

        {/* Overlay on hover */}
        <div
          className="absolute inset-0 flex flex-col items-end justify-end p-5 transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: "linear-gradient(to top, rgba(44,36,24,0.75) 0%, transparent 60%)",
          }}
        >
          {pickingSize ? (
            <div className="w-full space-y-2">
              <p className="font-body text-xs text-cream/70 tracking-widest uppercase text-center">
                Select Size
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {ring.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={(e) => { e.stopPropagation(); handleSizeSelect(s); }}
                    className="px-3 py-1.5 bg-cream/90 text-bark font-body text-xs tracking-wider hover:bg-cream transition-colors duration-200 rounded"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button
              onClick={handleAddClick}
              className="w-full py-3 bg-cream/90 text-bark font-body text-xs tracking-widest uppercase hover:bg-cream transition-colors duration-200"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 px-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3
              className="font-display text-xl font-medium text-bark"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {ring.name}
            </h3>
            <p className="mt-0.5 font-body text-xs text-bark/45">{ring.description}</p>
          </div>
          <span
            className="font-display text-xl font-light text-crimson whitespace-nowrap"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {ring.price}
          </span>
        </div>

        {/* Sizes */}
        <div className="mt-3 flex items-center gap-2">
          <span className="font-body text-xs text-bark/35 uppercase tracking-wider">Sizes:</span>
          <div className="flex gap-1.5">
            {ring.sizes.map((s) => (
              <span
                key={s}
                className="font-body text-xs text-bark/50 border border-sand px-1.5 py-0.5 rounded"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RingSVG({ ring }: { ring: (typeof rings)[0] }) {
  const patterns: Record<string, React.ReactElement> = {
    rose: (
      <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none">
        <ellipse cx="100" cy="100" rx="72" ry="32" stroke={ring.svgColor} strokeWidth="8" strokeLinecap="round"/>
        <path d="M60 100 C65 88 80 82 100 82 C120 82 135 88 140 100" stroke={ring.svgColor} strokeWidth="4" fill="none" opacity="0.4"/>
        {/* Rose petals pattern */}
        {[0,60,120,180,240,300].map((a,i) => (
          <ellipse key={i} cx={100 + 55*Math.cos(a*Math.PI/180)} cy={100 + 23*Math.sin(a*Math.PI/180)} rx="6" ry="3" fill={ring.svgColor} opacity="0.3" transform={`rotate(${a}, ${100 + 55*Math.cos(a*Math.PI/180)}, ${100 + 23*Math.sin(a*Math.PI/180)})`}/>
        ))}
      </svg>
    ),
    nouveau: (
      <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none">
        <ellipse cx="100" cy="100" rx="72" ry="32" stroke={ring.svgColor} strokeWidth="8" strokeLinecap="round"/>
        <path d="M50 100 Q70 70 100 68 Q130 70 150 100" stroke={ring.svgColor} strokeWidth="3" fill="none" opacity="0.5"/>
        <path d="M55 104 Q70 78 100 76 Q130 78 145 104" stroke={ring.svgColor} strokeWidth="1.5" fill="none" opacity="0.3"/>
        {/* Flowing lines */}
        <path d="M65 95 Q80 80 100 80 Q120 80 135 95" stroke={ring.svgColor} strokeWidth="2" fill="none" opacity="0.4"/>
      </svg>
    ),
    mono: (
      <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none">
        <ellipse cx="100" cy="100" rx="72" ry="32" stroke={ring.svgColor} strokeWidth="8" strokeLinecap="round"/>
        <text x="100" y="107" textAnchor="middle" fill={ring.svgColor} fontFamily="'Cormorant Garamond', serif" fontSize="28" fontStyle="italic" opacity="0.7">M</text>
      </svg>
    ),
    hammered: (
      <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none">
        <ellipse cx="100" cy="100" rx="72" ry="32" stroke={ring.svgColor} strokeWidth="10" strokeLinecap="round"/>
        {/* Hammered texture dots - pre-calculated positions */}
        <circle cx="172" cy="100" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="163.9" cy="110.0" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="141.8" cy="118.2" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="111.3" cy="122.3" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="78.7" cy="122.3" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="50.9" cy="118.2" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="32.2" cy="110.0" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="28" cy="100" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="32.2" cy="90.0" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="50.9" cy="81.8" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="78.7" cy="77.7" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="111.3" cy="77.7" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="141.8" cy="81.8" r="2" fill={ring.svgColor} opacity="0.4"/>
        <circle cx="163.9" cy="90.0" r="2" fill={ring.svgColor} opacity="0.4"/>
      </svg>
    ),
    fiddle: (
      <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none">
        <ellipse cx="100" cy="100" rx="72" ry="32" stroke={ring.svgColor} strokeWidth="8" strokeLinecap="round"/>
        {/* Thread edge detail */}
        <ellipse cx="100" cy="100" rx="78" ry="36" stroke={ring.svgColor} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
        <ellipse cx="100" cy="100" rx="66" ry="28" stroke={ring.svgColor} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3"/>
      </svg>
    ),
    wide: (
      <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none">
        <ellipse cx="100" cy="100" rx="72" ry="32" stroke={ring.svgColor} strokeWidth="16" strokeLinecap="round" opacity="0.8"/>
        <ellipse cx="100" cy="100" rx="72" ry="32" stroke={ring.svgColor} strokeWidth="1.5" opacity="0.4"/>
        {/* Wide band pattern lines */}
        <ellipse cx="100" cy="100" rx="72" ry="32" stroke="#F0EBE1" strokeWidth="1" strokeDasharray="0 12" opacity="0.5"/>
      </svg>
    ),
  };

  return patterns[ring.patternId] || patterns.rose;
}
