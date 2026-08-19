import { Shield, Truck, MessageCircle, BadgePercent } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Garansi Resmi",
    description:
      "Semua aki yang kami jual bergaransi resmi dari distributor. Jika ada masalah, langsung kami ganti.",
    accent: "bg-blue-50 text-blue-600",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description:
      "Pesanan diproses hari ini, dikirim hari ini juga. Stok selalu tersedia untuk aki populer.",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Gratis",
    description:
      "Tidak yakin aki apa yang cocok? Chat kami dan dapatkan rekomendasi sesuai kendaraan Anda.",
    accent: "bg-violet-50 text-violet-600",
  },
  {
    icon: BadgePercent,
    title: "Harga Terbaik",
    description:
      "Harga kompetitif langsung dari distributor. Tersedia harga khusus untuk pembelian partai.",
    accent: "bg-amber-50 text-amber-600",
  },
];

export default function Benefits() {
  return (
    <section id="keunggulan" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
            Mengapa BatteryGo?
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-dark sm:text-4xl">
            Keunggulan yang Membuat
            <br className="hidden sm:block" />
            <span className="text-amber">Kami Berbeda</span>
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Kami tidak hanya menjual aki, kami memberikan solusi terbaik untuk
            kebutuhan kendaraan Anda.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${benefit.accent} transition-transform group-hover:scale-110`}
              >
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-dark">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
