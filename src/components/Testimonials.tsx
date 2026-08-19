"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    vehicle: "Toyota Avanza",
    rating: 5,
    text: "Aki GS Astra dari BatteryGo awet banget! Sudah 8 bulan dipakai masih tokcer. Pemasangan juga langsung di rumah, praktis.",
    date: "2 minggu lalu",
  },
  {
    name: "Rina Wati",
    vehicle: "Honda Vario 125",
    rating: 5,
    text: "Servis aki motor di sini recommended. Harga jujur, teknisinya ramah. Motor jalan lancar lagi setelah ganti aki.",
    date: "1 minggu lalu",
  },
  {
    name: "Ahmad Fauzi",
    vehicle: "Mitsubishi Pajero",
    rating: 5,
    text: "Pesan Incoe MF 80 untuk Pajero, dikirim hari itu juga. Garansi jelas, harga lebih murah dari toko lain. Mantap!",
    date: "3 hari lalu",
  },
  {
    name: "Siti Nurhaliza",
    vehicle: "Honda Beat",
    rating: 4,
    text: "Chat via WhatsApp responnya cepat. Aki dikirim dan dipasang di hari yang sama. Next time pasti repeat order lagi.",
    date: "5 hari lalu",
  },
  {
    name: "Dedi Kurniawan",
    vehicle: "Toyota Innova",
    rating: 5,
    text: "Sudah 3 kali beli aki di BatteryGo untuk mobil keluarga. Kualitas terjamin, pelayanan mantap. Langganan deh!",
    date: "1 bulan lalu",
  },
  {
    name: "Maya Putri",
    vehicle: "Yamaha NMAX",
    rating: 5,
    text: "Butuh aki dadakan malem-malem, ternyata BatteryGo bisa bantu. Teknisi datang ke rumah, aki terpasang. Sangat membantu!",
    date: "4 hari lalu",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= rating ? "fill-amber text-amber" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5">
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-dark/80">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-sm font-bold text-navy">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <div className="text-sm font-semibold text-dark">
            {testimonial.name}
          </div>
          <div className="text-xs text-muted">
            {testimonial.vehicle} · {testimonial.date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animFrame: number;
    let lastTime = 0;
    const speed = 0.4; // px per ms

    const animate = (time: number) => {
      if (lastTime) {
        const delta = time - lastTime;
        container.scrollLeft += speed * delta;

        // Reset to start when reaching the end
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth - 2
        ) {
          container.scrollLeft = 0;
        }
      }
      lastTime = time;
      animFrame = requestAnimationFrame(animate);
    };

    // Only auto-scroll on mobile
    const mq = window.matchMedia("(max-width: 639px)");
    if (mq.matches) {
      animFrame = requestAnimationFrame(animate);
    }

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        lastTime = 0;
        animFrame = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animFrame);
        container.scrollLeft = 0;
      }
    };
    mq.addEventListener("change", handler);

    return () => {
      cancelAnimationFrame(animFrame);
      mq.removeEventListener("change", handler);
    };
  }, []);

  // Pause auto-scroll on touch
  const handleTouchStart = () => {
    const container = scrollRef.current;
    if (container) container.dataset.paused = "true";
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-0">
          <span className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
            Testimoni Pelanggan
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-dark sm:text-4xl">
            Kata Mereka tentang{" "}
            <span className="text-amber">BatteryGo</span>
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Kepuasan pelanggan adalah prioritas kami. Berikut beberapa ulasan
            dari pelanggan setia BatteryGo.
          </p>
        </div>

        {/* Swipe hint on mobile */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
          <span className="text-xs text-muted">Geser untuk lihat lainnya</span>
          <svg
            className="h-4 w-4 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Testimonials slider on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[8vw] pb-4 hide-scrollbar sm:mt-12 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-4 lg:grid-cols-3 lg:pb-0"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="w-[80vw] min-w-[80vw] snap-center sm:w-auto sm:min-w-0 sm:snap-none"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
