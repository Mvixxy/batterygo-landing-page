"use client";

import { useEffect, useState, useCallback } from "react";

interface Banner {
  id: number;
  title: string;
  subtitle: string;
  bg?: string;
  accent?: string;
  image?: string;
}

const banners: Banner[] = [
  {
    id: 1,
    title: "Aki Mobil Original",
    subtitle: "GS Astra, Incoe, Yuasa — Garansi Resmi",
    image: "/banners/banner-1.webp",
  },
  {
    id: 2,
    title: "Promo Spesial Bulan Ini",
    subtitle: "Hemat hingga 10% untuk semua tipe aki",
    bg: "from-amber-dark to-amber",
    accent: "text-white",
  },
  {
    id: 3,
    title: "Pasang Aki Gratis",
    subtitle: "Melayani pemasangan 24 jam di lokasi Anda",
    bg: "from-whatsapp-dark to-whatsapp",
    accent: "text-white",
  },
  {
    id: 4,
    title: "Aki Motor Lengkap",
    subtitle: "Vario, NMAX, Beat, Scoopy — Stok ready",
    bg: "from-navy-light to-navy",
    accent: "text-amber",
  },
];

const INTERVAL = 4000;

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative overflow-hidden bg-white py-6 sm:py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className={`w-full shrink-0 ${
                  banner.image
                    ? "relative bg-navy"
                    : `bg-gradient-to-r ${banner.bg}`
                }`}
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden px-8 sm:h-56 sm:px-16">
                  {/* Banner image */}
                  {banner.image ? (
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  ) : (
                    <>
                      {/* Placeholder pattern for gradient banners */}
                      <div className="absolute inset-0 opacity-10">
                        <svg
                          className="h-full w-full"
                          viewBox="0 0 800 300"
                          fill="currentColor"
                        >
                          <rect
                            x="50"
                            y="40"
                            width="100"
                            height="220"
                            rx="12"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                          <rect x="75" y="25" width="50" height="15" rx="4" fill="white" />
                          <rect x="60" y="100" width="80" height="120" rx="6" fill="white" />
                          <rect
                            x="650"
                            y="30"
                            width="100"
                            height="240"
                            rx="12"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                          <rect x="675" y="15" width="50" height="15" rx="4" fill="white" />
                          <rect x="660" y="110" width="80" height="110" rx="6" fill="white" />
                        </svg>
                      </div>
                      {/* Text overlay for gradient banners */}
                      <div className="relative z-10 text-center">
                        <h3
                          className={`font-display text-2xl font-extrabold ${banner.accent} sm:text-4xl`}
                        >
                          {banner.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70 sm:text-lg">
                          {banner.subtitle}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
