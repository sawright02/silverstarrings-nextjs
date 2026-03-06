"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    ringSize: "",
    message: "",
    type: "general",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-40 px-6"
      style={{ backgroundColor: "#E8E0D0" }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left */}
        <div
          className="transition-all duration-1000"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-30px)",
          }}
        >
          <span className="font-body text-xs tracking-widest text-olive uppercase">
            Get in Touch
          </span>
          <h2
            className="mt-4 font-display text-5xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Let's Create
            <br />
            <em>Something</em>
            <br />
            Yours
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-olive/30">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1 C4.2 1 2 3.2 2 6 C2 10 7 13 7 13 C7 13 12 10 12 6 C12 3.2 9.8 1 7 1Z" stroke="#8A8C2A" strokeWidth="1.2" fill="none"/>
                  <circle cx="7" cy="6" r="2" stroke="#8A8C2A" strokeWidth="1.2" fill="none"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest text-bark/40 uppercase">Custom Commissions</p>
                <p className="mt-1 font-body text-sm text-bark/60 leading-relaxed">
                  Have a family spoon you'd like transformed? I accept
                  commission work — send me the story and we'll make it happen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-olive/30">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="#8A8C2A" strokeWidth="1.2" fill="none"/>
                  <path d="M1 5 L7 8.5 L13 5" stroke="#8A8C2A" strokeWidth="1.2"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest text-bark/40 uppercase">Email</p>
                <a href="mailto:stella@silverstarrings.com" className="mt-1 font-body text-sm text-olive hover:underline underline-offset-4 transition-all">stella@silverstarrings.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-olive/30">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="#8A8C2A" strokeWidth="1.2" fill="none"/>
                  <path d="M7 4 L7 7 L9.5 9.5" stroke="#8A8C2A" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest text-bark/40 uppercase">Response Time</p>
                <p className="mt-1 font-body text-sm text-bark/60">Within 24 hours, Mon–Sat</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-12 flex items-center gap-4">
            <p className="font-body text-xs tracking-widest text-bark/30 uppercase">Follow</p>
            <div className="flex gap-3">
              {[
                { label: "Instagram", href: "https://www.instagram.com/silverstar.rings/" },
                { label: "Linktree", href: "https://www.linktr.ee/stella.mininger/" },
                { label: "Venmo", href: "https://venmo.com/u/stella-mininger/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                  className="font-body text-xs text-bark/40 hover:text-olive transition-colors duration-200 underline underline-offset-4"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right - form */}
        <div
          className="transition-all duration-1000 delay-300"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(30px)",
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full border border-olive/30">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14 L11 19 L22 8" stroke="#8A8C2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="font-display text-3xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Message Sent
              </h3>
              <p className="font-body text-sm text-bark/50">
                I'll be in touch within 24 hours. Thank you for reaching out.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 font-body text-xs text-olive underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry type */}
              <div className="flex gap-3">
                {["general", "custom", "sizing"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm({ ...form, type: t })}
                    className="flex-1 py-2.5 font-body text-xs tracking-widest uppercase transition-all duration-200 rounded"
                    style={{
                      backgroundColor: form.type === t ? "#2C2418" : "transparent",
                      color: form.type === t ? "#F0EBE1" : "rgba(44,36,24,0.5)",
                      border: `1px solid ${form.type === t ? "#2C2418" : "rgba(44,36,24,0.2)"}`,
                    }}
                  >
                    {t === "general" ? "General" : t === "custom" ? "Custom" : "Sizing"}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs tracking-widest text-bark/40 uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-cream border border-sand/60 focus:border-olive/50 outline-none font-body text-sm text-bark transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-widest text-bark/40 uppercase mb-2">
                    Ring Size
                  </label>
                  <input
                    type="text"
                    value={form.ringSize}
                    onChange={(e) => setForm({ ...form, ringSize: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-sand/60 focus:border-olive/50 outline-none font-body text-sm text-bark transition-colors duration-200"
                    placeholder="e.g. 7"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-xs tracking-widest text-bark/40 uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-cream border border-sand/60 focus:border-olive/50 outline-none font-body text-sm text-bark transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block font-body text-xs tracking-widest text-bark/40 uppercase mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-cream border border-sand/60 focus:border-olive/50 outline-none font-body text-sm text-bark transition-colors duration-200 resize-none"
                  placeholder="Tell me what you're looking for..."
                />
              </div>

              {error && (
                <p className="font-body text-xs text-crimson">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
              <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-50">
                {sending ? "Sending…" : "Send Message"}
                {!sending && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
