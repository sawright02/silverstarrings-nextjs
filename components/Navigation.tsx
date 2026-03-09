"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Process", href: "#process" },
  { label: "Collection", href: "#collection" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { items, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-sand/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="Silver Star Ring Co - Back to top"
          >
            <Logo size={42} variant="icon" />
            <div className="hidden sm:block">
              <Logo size={120} variant="wordmark" />
            </div>
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link text-bark/70 hover:text-bark font-body text-xs tracking-widest uppercase transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + cart + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#collection")}
              className="hidden md:inline-flex btn-primary text-xs"
            >
              Shop Now
            </button>

            {/* Cart icon */}
            <button
              onClick={openCart}
              className="relative flex items-center justify-center w-9 h-9 text-bark/60 hover:text-bark transition-colors"
              aria-label="Open cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {items.length > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center font-body text-xs text-cream"
                  style={{ backgroundColor: "#922424", fontSize: "10px" }}
                >
                  {items.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-bark transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-bark transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-bark transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-4xl font-light text-bark/80 hover:text-bark transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#collection")}
            className="btn-primary mt-4"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}
