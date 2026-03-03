"use client";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      className="relative py-16 px-6"
      style={{ backgroundColor: "#2C2418" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-sand/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size={100} variant="full" />
            <p className="mt-5 font-body text-sm text-sand/40 leading-relaxed max-w-xs">
              Handcrafted sterling silver spoon rings. Each piece is a
              transformation — a humble utensil reborn as wearable history.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-xs tracking-widest text-sand/40 uppercase mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Story", "Process", "Collection", "Reviews", "Contact"].map((l) => (
                <li key={l}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(`#${l.toLowerCase()}`);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-sm text-sand/50 hover:text-sand/80 transition-colors duration-200"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-body text-xs tracking-widest text-sand/40 uppercase mb-5">
              Info
            </h4>
            <ul className="space-y-3">
              {[
                "Sizing Guide",
                "Shipping & Returns",
                "Care Instructions",
                "Custom Orders",
                "Gift Cards",
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-body text-sm text-sand/50 hover:text-sand/80 transition-colors duration-200"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-sand/25">
            © 2026 Silver Star Ring Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "Etsy"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-body text-xs text-sand/30 hover:text-sand/60 transition-colors duration-200 tracking-wider"
              >
                {s}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {["Privacy", "Terms"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-body text-xs text-sand/25 hover:text-sand/50 transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
