import { Phone, ChevronDown, Shield, Truck, Clock, BadgeCheck } from "lucide-react";

const WHATSAPP_NUMBER = "6282321006968";

const stats = [
  { icon: Clock, value: "10+", label: "Tahun Pengalaman" },
  { icon: Truck, value: "Fast", label: "Pengiriman" },
  { icon: Shield, value: "100%", label: "Garansi Resmi" },
  { icon: BadgeCheck, value: "24/7", label: "Konsultasi" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        {/* Battery cells decorative pattern */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04]">
          <svg viewBox="0 0 400 800" className="h-full w-full" fill="currentColor">
            <rect x="50" y="50" width="120" height="300" rx="16" stroke="#F59E0B" strokeWidth="3" fill="none" />
            <rect x="85" y="30" width="50" height="20" rx="6" fill="#F59E0B" />
            <rect x="65" y="120" width="90" height="180" rx="8" fill="#F59E0B" />
            <rect x="230" y="200" width="120" height="300" rx="16" stroke="#F59E0B" strokeWidth="3" fill="none" />
            <rect x="265" y="180" width="50" height="20" rx="6" fill="#F59E0B" />
            <rect x="245" y="270" width="90" height="180" rx="8" fill="#F59E0B" />
            <rect x="50" y="500" width="120" height="250" rx="16" stroke="#F59E0B" strokeWidth="3" fill="none" />
            <rect x="85" y="480" width="50" height="20" rx="6" fill="#F59E0B" />
            <rect x="65" y="560" width="90" height="150" rx="8" fill="#F59E0B" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="flex min-h-screen flex-col justify-center pt-20 pb-12 sm:pt-20 sm:pb-16">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Aki Berkualitas,
              <br />
              <span className="text-amber">Harga Terbaik</span>
              <br />
              Langsung dikirim.
            </h1>

            {/* Badges - side by side on mobile */}
            <div className="mt-3 flex flex-nowrap items-center gap-1.5 sm:mt-6 sm:flex-wrap sm:gap-3">
              <div className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm sm:inline-flex sm:px-4 sm:py-2 sm:text-sm">
                Melayani pemasangan 24 jam
              </div>
              <div className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-amber/30 bg-amber/10 px-2.5 py-1 sm:px-4 sm:py-2">
                <div className="h-1.5 w-1.5 rounded-full bg-amber charge-pulse sm:h-2 sm:w-2" />
                <span className="text-[10px] font-medium text-amber sm:text-sm">
                  Tersedia untuk Mobil & Motor
                </span>
              </div>
            </div>

            {/* Subheadline */}
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-lg sm:text-xl">
              Solusi aki terpercaya untuk mobil dan motor Anda. Konsultasi
              gratis, garansi resmi, dan pengiriman cepat ke lokasi Anda.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4 sm:flex-row sm:items-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20BatteryGo%2C%20saya%20mau%20tanya%20aki`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-xs font-bold text-white shadow-xl shadow-whatsapp/30 transition-all hover:scale-105 hover:bg-whatsapp-dark hover:shadow-whatsapp/50 sm:gap-3 sm:px-8 sm:py-4 sm:text-base sm:text-lg"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current sm:h-6 sm:w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp
              </a>
              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:border-amber/50 hover:text-amber sm:px-8 sm:py-4 sm:text-base sm:text-lg"
              >
                Lihat Produk
                <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-10 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:mt-16 sm:grid-cols-4 sm:gap-4 sm:p-6 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber/10 sm:h-10 sm:w-10">
                  <stat.icon className="h-4 w-4 text-amber sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-white sm:text-xl sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 scroll-bounce sm:bottom-8">
        <ChevronDown className="h-6 w-6 text-white/30" />
      </div>

      {/* Gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white sm:h-32" />
    </section>
  );
}
