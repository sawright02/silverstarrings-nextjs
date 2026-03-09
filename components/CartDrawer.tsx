"use client";

import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { items, removeItem, clearCart, isOpen, closeCart } = useCart();

  const total = items.reduce((sum, item) => {
    const num = parseFloat(item.price.replace("$", ""));
    return sum + num;
  }, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-bark/40 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-sm z-50 flex flex-col transition-transform duration-500"
        style={{
          backgroundColor: "#F0EBE1",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: "-8px 0 40px rgba(44,36,24,0.15)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand/40">
          <div>
            <h2
              className="font-display text-2xl font-light text-bark"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Your Cart
            </h2>
            <p className="font-body text-xs text-bark/40 mt-0.5">
              {items.length === 0
                ? "No items yet"
                : `${items.length} item${items.length > 1 ? "s" : ""}`}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center text-bark/50 hover:text-bark transition-colors"
            aria-label="Close cart"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-bark/20">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M13 20h14M20 13v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p className="font-body text-sm text-bark/40">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="font-body text-xs text-olive underline underline-offset-4"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 py-4 border-b border-sand/30"
                >
                  {/* Image */}
                  <div
                    className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0"
                    style={{ backgroundColor: "#E8E0D0" }}
                  >
                    {item.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-display text-base font-medium text-bark leading-tight"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {item.name}
                    </h3>
                    <p className="font-body text-xs text-bark/40 mt-0.5">
                      Size {item.size}
                    </p>
                    <p
                      className="font-display text-base text-crimson mt-1"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {item.price}
                    </p>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-bark/30 hover:text-crimson transition-colors flex-shrink-0"
                    aria-label="Remove item"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-sand/40 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-bark/60 uppercase tracking-wider">Total</span>
              <span
                className="font-display text-2xl font-light text-bark"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="btn-primary w-full justify-center">
              Proceed to Checkout
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={clearCart}
              className="w-full font-body text-xs text-bark/30 hover:text-bark/60 transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
