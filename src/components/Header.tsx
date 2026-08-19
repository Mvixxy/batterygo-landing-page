"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const WHATSAPP_NUMBER = "6283851053900";
const STORE_NAME = "BatteryGo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Produk", href: "#produk" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Cara Order", href: "#cara-order" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy sm:h-10 sm:w-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 sm:h-6 sm:w-6"
              >
                <rect
                  x="6"
                  y="4"
                  width="12"
                  height="17"
                  rx="2"
                  stroke="#F59E0B"
                  strokeWidth="2"
                />
                <rect x="9" y="2" width="6" height="2" rx="1" fill="#F59E0B" />
                <rect
                  x="8"
                  y="10"
                  width="8"
                  height="8"
                  rx="1"
                  fill="#F59E0B"
                  className="charge-pulse"
                />
              </svg>
            </div>
            <span
              className={`font-display text-xl font-extrabold tracking-tight ${
                scrolled ? "text-navy" : "text-white"
              } sm:text-2xl`}
            >
              {STORE_NAME}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber ${
                  scrolled ? "text-dark" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20BatteryGo%2C%20saya%20mau%20tanya%20aki`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-whatsapp/25 transition-all hover:bg-whatsapp-dark hover:shadow-whatsapp/40"
            >
              <Phone className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 md:hidden ${
              scrolled ? "text-dark" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20BatteryGo%2C%20saya%20mau%20tanya%20aki`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
